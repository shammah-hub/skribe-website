import { createHash } from "node:crypto";
import { resolve4, resolveMx } from "node:dns/promises";
import disposableDomains from "disposable-email-domains";

// ~120,000 known throwaway-mail domains, kept up to date by the package.
// Run `npm update disposable-email-domains` once in a while to refresh it.
const DISPOSABLE = new Set<string>(disposableDomains as string[]);

// Extra domains to block on top of the package list. Add any you spot in your signups.
const EXTRA_BLOCKED = [
  "tempmail.com",
  "temp-mail.org",
  "tempmail.dev",
  "10minutemail.com",
  "guerrillamail.com",
  "sharklasers.com",
  "mailinator.com",
  "yopmail.com",
  "trashmail.com",
  "getnada.com",
  "maildrop.cc",
  "moakt.com",
  "fakeinbox.com",
  "dispostable.com",
];
for (const d of EXTRA_BLOCKED) DISPOSABLE.add(d);

export function emailDomain(email: string): string {
  return email.slice(email.lastIndexOf("@") + 1).toLowerCase();
}

/** True if the domain, or any parent domain (e.g. x.mailinator.com), is a throwaway provider. */
export function isDisposableEmail(email: string): boolean {
  const labels = emailDomain(email).split(".");
  for (let i = 0; i <= labels.length - 2; i++) {
    if (DISPOSABLE.has(labels.slice(i).join("."))) return true;
  }
  return false;
}

function isNotFound(err: unknown): boolean {
  const code = (err as { code?: string } | null)?.code;
  return code === "ENOTFOUND" || code === "ENODATA";
}

function withTimeout<T>(p: Promise<T>, ms = 3000): Promise<T> {
  return Promise.race([
    p,
    new Promise<T>((_, reject) => setTimeout(() => reject(Object.assign(new Error("DNS timeout"), { code: "ETIMEOUT" })), ms)),
  ]);
}

/**
 * True if the domain can receive email. Made-up domains fail this check.
 * If DNS itself is slow or broken we let the person through rather than block a real user.
 */
export async function domainCanReceiveMail(domain: string): Promise<boolean> {
  try {
    const mx = await withTimeout(resolveMx(domain));
    if (mx.length > 0) return true;
  } catch (err) {
    if (!isNotFound(err)) return true;
  }
  try {
    const a = await withTimeout(resolve4(domain));
    return a.length > 0;
  } catch (err) {
    return !isNotFound(err);
  }
}

/**
 * One key per real inbox, so the same person cannot be counted twice.
 * Gmail ignores dots and +tags (j.ohn+x@gmail.com is john@gmail.com); the other big providers ignore +tags.
 */
export function normalizeEmail(email: string): string {
  const lower = email.trim().toLowerCase();
  const at = lower.lastIndexOf("@");
  let local = lower.slice(0, at);
  let domain = lower.slice(at + 1);

  if (domain === "googlemail.com") domain = "gmail.com";
  const plusOnly = ["outlook.com", "hotmail.com", "live.com", "msn.com", "icloud.com", "me.com", "proton.me", "protonmail.com"];
  if (domain === "gmail.com") {
    local = local.split("+")[0].replace(/\./g, "");
  } else if (plusOnly.includes(domain)) {
    local = local.split("+")[0];
  }
  return `${local}@${domain}`;
}

export function emailKey(normalized: string): string {
  return createHash("sha256").update(normalized).digest("hex");
}