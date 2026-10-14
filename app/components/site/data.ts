// Site content. Icons are referenced by NAME (see ICONS in ui.tsx) because
// component references can't be passed from server pages to client components.
import { C } from "./theme";
import type { IconName } from "./ui";

export const subs = [
  { name: "Netflix", image: "/netflix.png", amount: 5500, next: "Dec 15" },
  { name: "Spotify", image: "/spotify.png", amount: 1300, next: "Dec 10" },
  { name: "Adobe CC", image: "/adobe.png", amount: 16000, next: "Dec 20" },
  { name: "DStv", image: "/dstv.png", amount: 15700, next: "Dec 20" },
];
export const subsTotal = subs.reduce((s, x) => s + x.amount, 0);

export const services: [string, string][] = [
  ["Netflix", "/netflix.png"],
  ["Spotify", "/spotify.png"],
  ["Adobe", "/adobe.png"],
  ["Amazon", "/amazon.png"],
  ["Apple", "/music.png"],
  ["Microsoft", "/microsoft.png"],
  ["Google", "/google.png"],
  ["Dropbox", "/dropbox.png"],
  ["LinkedIn", "/linkedin.png"],
  ["YouTube", "/youtube.png"],
  ["Disney+", "/disney.png"],
  ["DStv", "/dstv.png"],
];

export type Step = { title: string; text: string; tag: string; icon: IconName; color: string };

export const steps: Step[] = [
  { title: "Connect your bank", text: "Securely link your account with bank-level encryption. Read-only, always.", tag: "~1 min", icon: "shield", color: C.indigo },
  { title: "We find the repeats", text: "Skribe spots the recurring payments hiding in your transactions and lists them.", tag: "automatic", icon: "sparkles", color: C.teal },
  { title: "See what's coming", text: "Spending patterns and upcoming charges, laid out before they land.", tag: "always on", icon: "chart", color: C.amber },
  { title: "Handle it in one tap", text: "Cancel, pause or update a subscription without calling anyone.", tag: "~5 sec", icon: "zap", color: C.green },
];

export type Feature = { title: string; text: string; icon: IconName; color: string };

export const smallFeatures: Feature[] = [
  { title: "Auto-detect subscriptions", text: "Finds every recurring payment across your accounts.", icon: "sparkles", color: C.indigo },
  { title: "Bank-level security", text: "256-bit encryption, end to end.", icon: "shield", color: C.green },
  { title: "Spending insights", text: "Clear charts and tips to spend less.", icon: "chart", color: C.mutedRed },
  { title: "One-tap cancellation", text: "Cancel from the app in seconds.", icon: "zap", color: C.red },
  { title: "Price change alerts", text: "Know the moment a price or term changes.", icon: "dollar", color: C.amber },
  { title: "Multi-currency", text: "Track in any currency, converted for you.", icon: "globe", color: C.teal },
];

export const billFeatures: Feature[] = [
  { title: "Airtime & data", text: "Top up any network in naira, in a few taps.", icon: "phone", color: C.amber },
  { title: "Cable TV", text: "Renew your TV subscription without leaving the app.", icon: "tv", color: C.indigo },
  { title: "Electricity", text: "Buy power units and get your token straight away.", icon: "bulb", color: C.teal },
  { title: "Send money", text: "Move money to other people instantly.", icon: "send", color: C.green },
];

export const stats = [
  { value: "5K+", label: "Active users", color: C.red },
  { value: "₦2M+", label: "Saved by users", color: C.green },
  { value: "5K+", label: "Subscriptions tracked", color: C.indigo },
  { value: "4.9", label: "Average rating", color: C.amber },
];

export const plans = [
  {
    name: "Basic",
    monthly: "$4.99",
    yearly: "$47.99",
    text: "For individuals just getting started.",
    features: ["Track up to 10 subscriptions", "Basic spending insights", "Email notifications", "Mobile app access", "Standard support"],
    popular: false,
  },
  {
    name: "Pro",
    monthly: "$9.99",
    yearly: "$95.99",
    text: "For power users who want it all.",
    features: ["Unlimited subscriptions", "Advanced analytics & insights", "Skribe virtual card", "Priority notifications", "One-click cancellation", "Price change alerts", "Multi-currency support", "Priority support"],
    popular: true,
  },
  {
    name: "Enterprise",
    monthly: "$19.99",
    yearly: "$191.99",
    text: "For teams and businesses.",
    features: ["Everything in Pro", "Team management (up to 10 users)", "Centralized billing", "Custom spending limits", "API access", "Dedicated account manager", "Custom integrations", "24/7 phone support"],
    popular: false,
  },
];

export const compare: { feature: string; basic: boolean | string; pro: boolean | string; ent: boolean | string }[] = [
  { feature: "Subscription tracking", basic: "10", pro: "Unlimited", ent: "Unlimited" },
  { feature: "Spending insights", basic: true, pro: true, ent: true },
  { feature: "Skribe virtual card", basic: false, pro: true, ent: true },
  { feature: "Price alerts", basic: false, pro: true, ent: true },
  { feature: "One-click cancel", basic: false, pro: true, ent: true },
  { feature: "Team management", basic: false, pro: false, ent: true },
  { feature: "API access", basic: false, pro: false, ent: true },
  { feature: "Priority support", basic: false, pro: true, ent: true },
];

export const testimonials = [
  { quote: "Skribe saved me from unexpected Netflix debits. Finally, all my subscriptions in one place.", author: "Sarah Chen", role: "Product Designer", image: "/a.jpg", tape: C.amber },
  { quote: "The virtual card is genius. Full control over what can charge it, and I can freeze it in a tap.", author: "Marcus Rodriguez", role: "Software Engineer", image: "/b.jpg", tape: C.teal },
  { quote: "It pays for itself. I cancelled 5 subscriptions I had completely forgotten about.", author: "Emma Thompson", role: "Marketing Manager", image: "/c.jpg", tape: C.indigo },
  { quote: "As a freelancer with tons of tools, Skribe keeps me organised and helps me budget.", author: "James Wilson", role: "Freelance Designer", image: "/d.jpg", tape: C.green },
  { quote: "Got notified when Adobe raised its price and switched plans. Saved me $40 a month.", author: "Lisa Park", role: "Photographer", image: "/e.jpg", tape: C.red },
  { quote: "Managing our team's subscriptions was a nightmare. Now it's one list and we save every month.", author: "David Kumar", role: "Startup Founder", image: "/r.jpg", tape: C.amber },
];

export const faqs = [
  { q: "How does Skribe detect my subscriptions?", a: "Skribe analyses your bank transactions and identifies recurring payments. We look at amounts, merchant names and billing cycles, so you never have to enter anything by hand." },
  { q: "Is my financial data secure?", a: "Yes. We use 256-bit encryption for all data in transit and at rest. Your credentials are never stored on our servers; we use read-only access through secure banking APIs." },
  { q: "What is the Skribe virtual card?", a: "It's a card you fund from inside the app and use to pay for subscriptions. You can freeze it in a tap, block merchants Skribe doesn't recognise, and see exactly why any charge was declined." },
  { q: "Do you support international subscriptions?", a: "Yes. Skribe supports over 150 currencies, converts everything to your preferred currency and tracks exchange-rate changes for you." },
  { q: "What happens if a subscription increases its price?", a: "You get a notification before the new price takes effect, with the old and new price side by side, so you can accept, negotiate or cancel." },
  { q: "Can I use Skribe for my business subscriptions?", a: "Yes. Pro and Enterprise suit freelancers and teams: track team subscriptions, set approval workflows and export expense reports." },
];

export const cardFaqs = [
  { q: "Who can get a Skribe card?", a: "Once you finish identity verification in your Profile, your Skribe card appears in the app. There's nothing to apply for separately." },
  { q: "How do I add money to the card?", a: "Top up your card balance from inside the app. The card only ever spends what you've put on it, so a surprise charge can't reach your main account." },
  { q: "What does freezing do?", a: "Every charge is declined until you turn the freeze off. It takes one tap, and the card shows a frosted overlay so you can see it's frozen." },
  { q: "What are unrecognised charges?", a: "Merchants Skribe doesn't recognise. By default they're blocked. If you'd rather allow them, you can switch to Allow, and we'll ask you to confirm first." },
  { q: "Why was a charge declined?", a: "Skribe tells you in plain words: billing was off, the card was frozen, not enough balance, an unrecognised merchant, or an unclear amount." },
  { q: "Are my card details safe?", a: "Details are hidden by default. You reveal them on demand, copy what you need, and Skribe reminds you never to share them with anyone." },
];
