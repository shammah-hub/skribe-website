// Site content. Icons are referenced by NAME (see ICONS in ui.tsx) because
// component references can't be passed from server pages to client components.
import { C } from "./theme";
import type { IconName } from "./ui";

// Demo data only. Label it "Example" wherever it is shown in the UI.
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
  { title: "Get your Skribe card", text: "Verify your identity and your card appears in the app. Fund it and use it for your subscriptions.", tag: "in the app", icon: "shield", color: C.indigo },
  { title: "We find the repeats", text: "Skribe matches card charges to subscriptions and asks when it isn't sure.", tag: "automatic", icon: "sparkles", color: C.teal },
  { title: "See what's coming", text: "Spending patterns and upcoming charges, laid out before they land.", tag: "always on", icon: "chart", color: C.amber },
  { title: "Handle it in one tap", text: "Cancel, pause or update a subscription without calling anyone.", tag: "~5 sec", icon: "zap", color: C.green },
];

export type Feature = { title: string; text: string; icon: IconName; color: string };

export const smallFeatures: Feature[] = [
  { title: "Auto-detect subscriptions", text: "Spots the recurring charges on your Skribe card.", icon: "sparkles", color: C.indigo },
  { title: "Secure by design", text: "Your data is encrypted, and card details stay hidden until you reveal them.", icon: "shield", color: C.green },
  { title: "Spending insights", text: "Clear charts and tips to spend less.", icon: "chart", color: C.mutedRed },
  { title: "One-tap cancellation", text: "Cancel from the app in seconds.", icon: "zap", color: C.red },
  { title: "Price change flags", text: "Skribe flags it when a recurring charge goes up.", icon: "dollar", color: C.amber },
  { title: "Naira and dollar cards", text: "Pay local and international subscriptions from one app.", icon: "globe", color: C.teal },
];

export const billFeatures: Feature[] = [
  { title: "Airtime & data", text: "Top up any network in naira, in a few taps.", icon: "phone", color: C.amber },
  { title: "Cable TV", text: "Renew your TV subscription without leaving the app.", icon: "tv", color: C.indigo },
  { title: "Electricity", text: "Buy power units and get your token straight away.", icon: "bulb", color: C.teal },
  { title: "Send money", text: "Move money to other people instantly.", icon: "send", color: C.green },
];

// Only facts that are true at launch. Swap in real numbers (e.g. waitlist count) once they exist.
export const stats = [
  { value: "₦0", label: "To start, free plan", color: C.green },
  { value: "1 tap", label: "To freeze your card", color: C.teal },
  { value: "Hidden", label: "Card details until you reveal them", color: C.indigo },
  { value: "₦ + $", label: "Naira and dollar cards", color: C.amber },
];

export const plans = [
  {
    name: "Free",
    monthly: "₦0",
    yearly: "₦0",
    text: "Track one subscription by hand.",
    features: ["Track 1 subscription manually", "Renewal reminder for it", "Mobile app access"],
    popular: false,
  },
  {
    name: "Premium",
    monthly: "₦2,000",
    yearly: "₦19,200",
    text: "See every subscription and where your money goes.",
    features: [
      "Unlimited subscriptions",
      "Detailed spending statistics",
      "Spend by merchant and by month",
      "Renewal reminders for all of them",
      "Mobile app access",
    ],
    popular: true,
  },
];

export const compare: { feature: string; free: boolean | string; premium: boolean | string; card: boolean | string }[] = [
  { feature: "Subscriptions you can track", free: "1", premium: "Unlimited", card: "Unlimited" },
  { feature: "Renewal reminders", free: "1 subscription", premium: "All", card: "All" },
  { feature: "Spending statistics", free: false, premium: true, card: true },
  { feature: "Spend by merchant", free: false, premium: true, card: true },
  { feature: "Monthly spending breakdown", free: false, premium: true, card: true },
  { feature: "Trends over time", free: false, premium: true, card: true },
];

// Empty until real users have given real feedback. Typed so the array isn't inferred as never[].
export type Testimonial = { quote: string; author: string; role: string; image: string; tape: string };
export const testimonials: Testimonial[] = [];

export const faqs = [
  { q: "How does Skribe detect my subscriptions?", a: "Skribe matches the charges on your Skribe card to subscriptions and adds well-known services for you. When it isn't sure, it asks, and remembers your answer." },
  { q: "Is my financial data secure?", a: "Yes. Your data is encrypted in transit and at rest, and card details stay hidden until you reveal them. Skribe doesn't read your contacts, text messages or other banking apps." },
  { q: "What is the Skribe virtual card?", a: "It's a card you fund from inside the app and use to pay for subscriptions. You can freeze it in a tap, block merchants Skribe doesn't recognise, and see exactly why any charge was declined." },
  { q: "Which currencies does Skribe support?", a: "At launch, Skribe supports naira (₦) and US dollars ($). Get a naira card for local subscriptions and a dollar card for services that bill in dollars. More currencies may come later." },
  { q: "When do I need the dollar card?", a: "Use it for services that charge in dollars, like ChatGPT, Figma, Notion or Canva. Netflix, DStv and other services that accept Nigerian cards can go on your naira card." },
  { q: "Will Skribe tell me if a subscription's price changes?", a: "Skribe flags it when a recurring charge comes in higher than before, so you can decide whether to keep it, switch plans or cancel." },
  { q: "Can I use Skribe for my business or team?", a: "Skribe is built for personal use right now. Team and business features may come later." },
  { q: "Is Premium free if I use the Skribe card?", a: "Yes. Pay your subscriptions with your Skribe card and every Premium feature is included, with no plan to buy." },
];

export const cardFaqs = [
  { q: "Who can get a Skribe card?", a: "Once you finish identity verification in your Profile, your Skribe card appears in the app. There's nothing to apply for separately." },
  { q: "Naira card or dollar card?", a: "Skribe offers both at launch. Use the naira card for subscriptions that bill in naira and the dollar card for services that bill in dollars." },
  { q: "How do I fund my Skribe card?", a: "Send money by bank transfer to the account number in your Skribe app. Once it arrives, it's in your balance and ready to spend with your card." },
  { q: "What does freezing do?", a: "Every charge is declined until you turn the freeze off. It takes one tap, and the card shows a frosted overlay so you can see it's frozen." },
  { q: "What are unrecognised charges?", a: "Merchants Skribe doesn't recognise. By default they're blocked. If you'd rather allow them, you can switch to Allow, and we'll ask you to confirm first." },
  { q: "Why was a charge declined?", a: "Skribe tells you in plain words: billing was off, the card was frozen, not enough balance, an unrecognised merchant, or an unclear amount." },
  { q: "Are my card details safe?", a: "Details are hidden by default. You reveal them on demand, copy what you need, and Skribe reminds you never to share them with anyone." },
];