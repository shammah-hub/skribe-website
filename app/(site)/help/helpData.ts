// The help questions. Edit them here. Answers follow the Terms and Privacy Policy, so keep them in step.
// This file is NOT a client file on purpose, so the server page can read it too.

type QA = { q: string; a: string };

export const groups: { id: string; label: string; items: QA[] }[] = [
  {
    id: "start",
    label: "Getting started",
    items: [
      { q: "Who can use Skribe?", a: "You need to be 18 or over, live in Nigeria, and have a valid BVN. You can have one account, for yourself." },
      { q: "Why do you need my BVN?", a: "We use it only to verify who you are and meet the law. It is sent securely to our card provider for verification, and we don't show it to anyone." },
      { q: "Is Skribe a bank?", a: "No. Skribe gives you the tools, and the money side is handled with licensed partners. Your balance isn't a bank deposit and doesn't earn interest." },
    ],
  },
  {
    id: "card",
    label: "Your card",
    items: [
      { q: "How do I freeze my card?", a: "Open the Card tab and tap Freeze. Every charge is declined until you turn it off." },
      { q: "Why was my charge declined?", a: "A charge is only approved if the card isn't frozen, that subscription's switch isn't off, the unrecognised-charge rule allows it, and your balance covers the amount and fees. The app tells you which one stopped it." },
      { q: "Does switching a subscription off cancel it?", a: "No. It only makes Skribe decline future charges from that merchant. You still have to cancel with the merchant, who can still bill you or add fees." },
      { q: "Why is my naira amount different from the price?", a: "Charges in another currency are converted by our card provider at its rate, so the naira amount can differ from the merchant's price." },
    ],
  },
  {
    id: "pay",
    label: "Bills & transfers",
    items: [
      { q: "Can I reverse a bill payment or a transfer?", a: "No. Once a bill is completed or a transfer goes through, it can't be reversed, so check the number or account details before you confirm." },
      { q: "I sent money to the wrong account. What now?", a: "Contact us straight away at [SUPPORT EMAIL]. We can't promise to get it back, but we will try to help." },
      { q: "A payment failed. Where is my money?", a: "Failed payments go back to your balance. If a provider hasn't confirmed yet, the money is held until it does, or returned." },
    ],
  },
  {
    id: "safe",
    label: "Safety & account",
    items: [
      { q: "I forgot my PIN.", a: "Reset it in Settings by confirming your sign-in. We can't see or recover it. After 5 wrong tries it locks for 30 minutes." },
      { q: "I see a charge I don't recognise.", a: "Freeze your card, then email [SUPPORT EMAIL] with the date, merchant and amount. We'll update you within [TIMEFRAME]." },
      { q: "How do I delete my account?", a: "Use the Delete account option in the app, or the form on our delete-account page. Spend or withdraw your balance first." },
    ],
  },
];