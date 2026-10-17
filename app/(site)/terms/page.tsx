import type { Metadata } from "next";
import { JsonLd } from "../../components/site/JsonLd";
import { LegalPage, type Section } from "../../components/site/LegalPage";
import { breadcrumbLd, pageMeta } from "../../components/site/seo";

export const metadata: Metadata = pageMeta({
  title: "Terms and Conditions",
  description: "The agreement between you and Skribe: who can use the app, your card and balance, fees, and what we are and are not responsible for.",
  path: "/terms",
});

// Copy comes from Skribe_Terms_and_Conditions.pdf. Anything in [SQUARE BRACKETS] is
// highlighted on the page until you replace it. Use **double asterisks** for bold.
const meta = "Effective date: [DATE] · Version 1.0 · Operated by [COMPANY LEGAL NAME]";

const summary = [
  "Skribe helps you control subscription payments with a virtual card and a balance.",
  "Skribe is not a bank.",
  "You must be 18 or over and complete identity verification.",
  "Keep your PIN secret. You are responsible for activity authorised with it.",
  "Blocking a charge does not cancel your subscription with the merchant.",
  "Fees are shown before you pay.",
  "Completed bill payments and transfers cannot be reversed.",
  "Please read the sections on your balance and on our responsibility to you.",
];

const sections: Section[] = [
  {
    title: "About these terms",
    blocks: [
      "These terms are an agreement between you and [COMPANY LEGAL NAME] (“Skribe”, “we”, “us”). They include our Privacy Policy. By creating an account or using Skribe you accept them. If you do not accept them, please do not use Skribe.",
    ],
  },
  {
    title: "Who can use Skribe",
    blocks: [
      "To use Skribe you must:",
      {
        list: [
          "be at least 18 years old",
          "live in Nigeria [CONFIRM WHERE YOU OPERATE]",
          "have a valid Bank Verification Number (BVN)",
          "give us true and complete information, and keep it up to date",
          "open only one account, for yourself",
          "not be on any sanctions list",
        ],
      },
    ],
  },
  {
    title: "What Skribe is, and is not",
    blocks: [
      "Skribe gives you tools to track subscriptions, get alerts, pay online with a virtual card, hold a balance, pay bills and send money.",
      "Skribe is not a bank. Services that involve money are provided with licensed partners, currently [SUDO AFRICA] for card issuing and [SAFE HAVEN MICROFINANCE BANK] for banking. [ADD SKRIBE’S OWN REGULATORY STATUS, AS CONFIRMED BY YOUR LAWYER.] Your balance is not a bank deposit, earns no interest, and may not be covered by deposit insurance. [CONFIRM.]",
    ],
  },
  {
    title: "Your account and security",
    blocks: [
      {
        list: [
          "Keep your sign-in details and your device safe.",
          "You create a 4-digit Skribe PIN. We ask for it before you pay bills or send money. Never share it. We will never ask for it.",
          "After 5 wrong PIN attempts, the PIN locks for 30 minutes.",
          "You are responsible for activity on your account that is authorised with your PIN or sign-in, unless it was caused by our mistake or happened after you told us it was compromised.",
          "If your phone is lost, or you think someone has your details, freeze your card in the app and contact us straight away.",
        ],
      },
    ],
  },
  {
    title: "Identity verification",
    blocks: [
      "Before we issue your card we verify your identity using your name, date of birth, address, phone number and BVN. We and our partners may ask for more information later. If we cannot verify you, we may refuse, limit or close your account. We follow anti-money-laundering rules and may delay or block activity to comply with them.",
    ],
  },
  {
    title: "Your balance",
    blocks: [
      {
        list: [
          "Your balance is the amount available for card charges, bill payments and transfers.",
          "You add money to your balance by [DESCRIBE HOW FUNDING WORKS ONCE IT IS LIVE].",
          "Charges, bills, transfers and fees reduce your balance.",
          "A payment is only approved if your balance covers the amount and the fees.",
          "Your funds are held with [PARTNER]. [CONFIRM HOW CUSTOMER FUNDS ARE HELD AND PROTECTED.]",
          "If you close your account, we return your remaining balance after our checks, less any fees you owe.",
          "We may hold or limit funds if we suspect fraud or a legal order requires it.",
        ],
      },
    ],
  },
  {
    title: "The Skribe card",
    blocks: [
      {
        list: [
          "Your Skribe card is a virtual card for online payments. [CONFIRM: IT CANNOT BE USED AT ATMS OR IN SHOPS.] Today it is a naira card; the card brand and currencies may change.",
          "We cannot promise that every merchant will accept it. Acceptance, especially outside Nigeria, varies, and some merchants ask for extra verification.",
          "Every charge is checked in real time. We approve it only if your card is not frozen, the subscription switch for that merchant is not off, your unrecognised-charge rule allows it, and your balance covers it.",
          "**Unrecognised charges:** your card can be set to allow or block charges from merchants Skribe does not recognise yet. You can change this any time in the Card tab. [CONFIRM THE DEFAULT SETTING.]",
          "**Foreign currency:** charges in another currency are converted by our card provider at its rate, so the naira amount may differ from the merchant’s price.",
          "You can see your full card number and CVV in the app. Keep them private. If they may have been exposed, freeze the card and contact us. We may cancel and replace a card at any time for security.",
        ],
      },
    ],
  },
  {
    title: "Subscription tracking and controls",
    blocks: [
      {
        list: [
          "**Recognising subscriptions.** Skribe tries to recognise recurring charges. For well-known services we may add the subscription for you and tell you. For others we may ask, “Is this a subscription?” We remember your answer. This is a best-effort feature and can be wrong or late, so please check your list.",
          "**The on/off switch.** When you switch a subscription off, Skribe declines future charges that it matches to that subscription. This does not cancel your account with the merchant. The merchant can still bill you, suspend your service or add fees, and you remain responsible for cancelling with them and for anything you owe them.",
          "**Matching is not perfect.** We may decline a charge you wanted or approve one you did not. Use Freeze to stop all charges at once.",
          "**Alerts and reminders.** We try to send them on time, but they can be delayed or missed. Please keep your own records too.",
          "**Free trials.** We cannot guarantee that a trial charge will be blocked or allowed as you intend.",
          "**Subscriptions paid elsewhere.** If you add a subscription you pay with another card or account, Skribe can only remind you. We cannot block it.",
        ],
      },
    ],
  },
  {
    title: "Bills and transfers",
    blocks: [
      {
        list: [
          "**Bills (airtime, data, TV, electricity):** check the phone, meter or smartcard number carefully. Once the provider completes a purchase it cannot be reversed. The provider’s own terms also apply.",
          "**Transfers to bank accounts:** check the recipient’s name and account details before you confirm. A completed transfer cannot be reversed. If you send money to the wrong account, you are responsible, but we will try to help you recover it.",
          "**Limits:** we set limits per payment and per day. They are shown in the app and may change.",
          "**Pending payments:** if a provider has not confirmed a payment, your money is held until it is confirmed or returned to your balance.",
          "**Failed payments:** we return the money to your balance.",
          "We may delay, hold or refuse a payment for security, fraud or legal reasons.",
        ],
      },
    ],
  },
  {
    title: "Fees",
    blocks: [
      {
        list: [
          "You may pay a card creation fee, a Skribe fee on card charges, the card provider’s fee and VAT on each charge, fees on bill purchases and transfers, and currency conversion costs. [LIST YOUR REAL FEES HERE.]",
          "We show fees before you confirm a payment, or in the transaction details.",
          "We will give you [30 DAYS’] notice before changing fees. Changes apply to future transactions.",
          "Merchants and banks may charge you separately. We do not control those charges.",
        ],
      },
    ],
  },
  {
    title: "Problems and unauthorised transactions",
    blocks: [
      {
        list: [
          "If you see a charge you do not recognise, freeze your card and contact [SUPPORT EMAIL] straight away, with the date, merchant and amount.",
          "We will look into it with our partners and update you within [TIMEFRAME].",
          "If we find the charge was unauthorised and not your fault, we will refund it. We will not refund if you shared your PIN, card details or sign-in, or acted fraudulently.",
          "For disputes about goods or services, contact the merchant first. Our ability to recover money from a merchant is limited.",
        ],
      },
    ],
  },
  {
    title: "What you must not do",
    blocks: [
      "You must not:",
      {
        list: [
          "break the law, or use Skribe for fraud, money laundering or any illegal purpose",
          "give false information",
          "share your account, PIN or card with anyone",
          "try to bypass limits, controls or security",
          "copy, reverse engineer or disrupt the app",
          "use Skribe for [ADD ANY RESTRICTED CATEGORIES]",
        ],
      },
    ],
  },
  {
    title: "Suspending or closing your account",
    blocks: [
      "You can close your account at any time by contacting us once your balance is settled. We may suspend or close your account, with notice where possible, if you break these terms, if we suspect fraud, if the law requires it, or if our partners stop supporting your account. Section 6 explains what happens to your balance.",
    ],
  },
  {
    title: "Other companies",
    blocks: [
      "Merchants, our card and banking partners and Google have their own terms. We are not responsible for what they do, except where the law says we are.",
    ],
  },
  {
    title: "Our rights in the app",
    blocks: [
      "Skribe, its name, design and software belong to us or our licensors. We give you a personal, limited right to use the app. You may not copy or resell it.",
    ],
  },
  {
    title: "Availability",
    blocks: [
      "We work to keep Skribe running, but we cannot promise it will always be available. Maintenance, outages, or problems at our partners may cause charges to be declined or payments to be delayed.",
    ],
  },
  {
    title: "Our responsibility to you",
    blocks: [
      {
        list: [
          "Nothing in these terms limits any right you have under Nigerian law that cannot be limited, including for fraud or for harm caused by our negligence.",
          "Subject to that, we are not responsible for: what merchants do or charge; losses caused by recognition or matching errors that were outside our reasonable control; losses caused by you sharing your PIN or card details; or failures at third parties we do not control.",
          "Our total responsibility to you for any claim is limited to [AMOUNT / THE FEES YOU PAID IN THE LAST 12 MONTHS]. [HAVE A LAWYER REVIEW THIS SECTION.]",
        ],
      },
    ],
  },
  {
    title: "Messages from us",
    blocks: [
      "You agree that we may contact you by push notification, email, SMS and in the app about your account, payments and security.",
    ],
  },
  {
    title: "Changes to these terms",
    blocks: [
      "If we make important changes, we will tell you at least [30 DAYS] before they take effect. If you keep using Skribe afterwards you accept the changes. If you do not agree, you can close your account.",
    ],
  },
  {
    title: "Complaints",
    blocks: [
      "Contact us first at [SUPPORT EMAIL]. We will reply within [TIMEFRAME]. If we cannot resolve it, you may take your complaint to the relevant regulator, such as the Central Bank of Nigeria or the Federal Competition and Consumer Protection Commission. [CONFIRM.]",
    ],
  },
  {
    title: "Governing law",
    blocks: [
      "These terms are governed by the laws of the Federal Republic of Nigeria. We will try to resolve any dispute fairly and in good faith first. If that fails, [MEDIATION / ARBITRATION / THE COURTS OF LAGOS OR ABUJA] will decide it. [CONFIRM.]",
    ],
  },
  {
    title: "General",
    blocks: [
      "These terms and our Privacy Policy are the whole agreement between us. If a part is found to be unenforceable, the rest still applies. If we do not enforce a right straight away, we have not given it up. You may not transfer your account to anyone else.",
    ],
  },
  {
    title: "Contact us",
    blocks: ["Skribe — [COMPANY LEGAL NAME]", "Email: [SUPPORT EMAIL]", "Address: [ADDRESS]"],
  },
];

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([["Home", "/"], ["Terms and Conditions", "/terms"]])} />
      <LegalPage
        label="Legal"
        title={
          <>
            Terms and <span className="italic">conditions.</span>
          </>
        }
        meta={meta}
        intro="The agreement between you and Skribe. Please read it before you use the app."
        summary={summary}
        sections={sections}
        other={{ href: "/privacy", text: "Read the Privacy Policy" }}
      />
    </>
  );
}