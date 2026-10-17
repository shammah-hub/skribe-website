import type { Metadata } from "next";
import { JsonLd } from "../../components/site/JsonLd";
import { LegalPage, type Section } from "../../components/site/LegalPage";
import { breadcrumbLd, pageMeta } from "../../components/site/seo";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description: "What personal data Skribe collects, why, who we share it with, how long we keep it, and the rights you have under the Nigeria Data Protection Act.",
  path: "/privacy",
});

// Copy comes from Skribe_Privacy_Policy.pdf. Anything in [SQUARE BRACKETS] is
// highlighted on the page until you replace it. Use **double asterisks** for bold.
const meta = "Effective date: [DATE] · Version 1.0 · Operated by [COMPANY LEGAL NAME]";

const summary = [
  "We collect only what we need to run your account, verify who you are, issue your card and process your payments.",
  "We do not sell your personal data, and we do not use it for third-party advertising.",
  "Your Skribe PIN is stored only in scrambled form. We cannot read it.",
  "Your full card number and CVV are shown through our card provider’s secure display. We do not store them.",
  "We keep financial and identity records for as long as the law requires.",
  "You can ask to see, correct or delete your data at any time by emailing [PRIVACY EMAIL].",
  "Skribe is for people aged 18 and over.",
];

const sections: Section[] = [
  {
    title: "Who we are",
    blocks: [
      "This policy explains how [COMPANY LEGAL NAME] (“Skribe”, “we”, “us”) collects, uses, shares and protects your personal data when you use the Skribe app and related services. We are the data controller under the Nigeria Data Protection Act 2023 (the “NDPA”).",
      "Registered address: [ADDRESS]",
      "Company registration (RC) number: [CAC NUMBER]",
      "Data Protection Officer: [NAME], [PRIVACY EMAIL]",
    ],
  },
  {
    title: "What we collect",
    blocks: [
      { sub: "Information you give us" },
      {
        list: [
          "**Account details:** your name, email address, phone number, password (handled by our sign-in provider, so we never see it), profile photo, and optionally your age and gender.",
          "**Google sign-in:** if you sign in with Google, we receive your name, email address and profile photo from Google.",
          "**Identity verification (KYC):** your first and last name, phone number, date of birth, home address and Bank Verification Number (BVN).",
          "**Subscriptions you add:** the service name, amount, currency and dates.",
          "**Payment details you enter:** for bills, the phone, smartcard or meter number; for transfers, the recipient’s bank, account number, account name and your note.",
          "**Messages** you send to our support team.",
        ],
      },
      { sub: "Information created when you use Skribe" },
      {
        list: [
          "**Card details:** your card ID, brand, last four digits, expiry date and status. We do not keep the full card number or CVV.",
          "**Card activity:** each time a merchant tries to charge your card we record the merchant’s name and ID, its category and country, the amount, currency and fees, whether we approved or declined it and why, and the time.",
          "**Wallet records:** your balance and a history of charges, bill payments, transfers, refunds and fees.",
          "**Subscription records:** subscriptions you add, and ones we recognise from your charges, with their amount, billing period and next renewal date.",
          "**Your settings:** card freeze, the rule for unrecognised charges, and the on/off switch for each subscription.",
        ],
      },
      { sub: "Information collected automatically" },
      {
        list: [
          "A device token so we can send you push notifications, plus basic device and app information and error logs needed for security and troubleshooting. [CONFIRM ANY ANALYTICS TOOLS YOU USE AND LIST THEM HERE.]",
        ],
      },
      { sub: "Information from others" },
      { list: ["Verification and fraud-screening results from our card provider and banking partners."] },
      "We do not read your contacts, text messages or other banking apps. [CONFIRM. UPDATE THIS IF YOU ADD BANK LINKING.]",
    ],
  },
  {
    title: "How we use your information",
    blocks: [
      {
        list: [
          "**To provide Skribe (to perform our contract with you):** to create your account, issue and run your card, process charges, bills and transfers, and show your balance and history.",
          "**To verify your identity and follow the law (legal obligation):** identity checks, anti-money-laundering and sanctions screening, record keeping, and responding to regulators and law enforcement.",
          "**To keep you and others safe (legitimate interests):** to prevent fraud, detect unauthorised charges, and lock the PIN after repeated wrong attempts.",
          "**To recognise your subscriptions (contract and legitimate interests):** to match card charges to subscriptions, add well-known services for you, ask “Is this a subscription?”, and remember your answer so we do not ask again.",
          "**To send alerts (contract, and your consent for push notifications):** charge notices, renewal reminders, blocked-charge alerts and security messages.",
          "**To support and improve Skribe (legitimate interests):** to answer your questions, fix problems and improve the app.",
          "**To market to you (consent only):** we only send marketing if you agree, and you can opt out at any time.",
        ],
      },
      "**Automated decisions.** Card charges are approved or declined automatically using rules you control (freeze, subscription switches, the unrecognised-charge rule) and your balance. If you think a decision was wrong, email [SUPPORT EMAIL] and a person will review it.",
    ],
  },
  {
    title: "Who we share your information with",
    blocks: [
      {
        list: [
          "Our card issuing and banking partners, currently [SUDO AFRICA] and [SAFE HAVEN MICROFINANCE BANK], so they can verify you, issue your card, hold funds, authorise charges, and pay bills and transfers. [CONFIRM PARTNER NAMES.]",
          "Merchants and payment networks, when you pay with your card. They receive the card details you give them and the payment information.",
          "Bill and transfer providers, who receive only what is needed to complete the payment, such as a phone, meter or smartcard number, or the recipient’s account details.",
          "Technology providers, such as Google Firebase and Google Cloud, which host our app, database, sign-in and notifications for us.",
          "Regulators, courts, law enforcement and other authorities, when the law requires it.",
          "Professional advisers, and a buyer if our business is sold, under confidentiality.",
          "Anyone else, only with your consent.",
        ],
      },
      "We do not sell your personal data.",
    ],
  },
  {
    title: "Your BVN",
    blocks: [
      "We use your BVN only to verify your identity and meet legal requirements. It is sent securely to our card provider for verification and we do not store it in our own database. [CONFIRM.] Our providers keep it under their own policies. We never show your BVN to other users.",
    ],
  },
  {
    title: "Card details and your PIN",
    blocks: [
      {
        list: [
          "Your full card number and CVV are shown to you through our card provider’s secure display. They do not pass through our servers or get saved in our database.",
          "Your Skribe PIN is stored only as a salted, one-way scrambled value protected with an extra secret key. We cannot see it or recover it. If you forget it, you reset it by confirming your sign-in.",
          "Never share your PIN, card number or CVV. Skribe will never ask you for them.",
        ],
      },
    ],
  },
  {
    title: "Where your data is processed",
    blocks: [
      "Our technology providers process data on servers outside Nigeria, including in the United States. We use contracts and technical safeguards to protect your data, as the NDPA requires.",
    ],
  },
  {
    title: "How long we keep it",
    blocks: [
      {
        list: [
          "Account and profile data: while your account is open, and for [PERIOD] after you close it.",
          "Identity (KYC) and financial transaction records: for at least [5 YEARS] after your relationship with us ends, as financial regulations require. [CONFIRM WITH YOUR LAWYER.]",
          "Notification tokens: until you turn off notifications or log out.",
        ],
      },
      "When we no longer need data, we delete it or anonymise it.",
    ],
  },
  {
    title: "Your rights",
    blocks: [
      "Under the NDPA you have the right to:",
      {
        list: [
          "be told how we use your data",
          "see the data we hold about you",
          "correct data that is wrong",
          "ask us to delete data we no longer need to keep (we cannot delete records the law requires us to keep)",
          "restrict or object to some uses of your data",
          "receive your data in a portable format",
          "withdraw your consent at any time",
          "ask for human review of an automated decision",
          "complain to the Nigeria Data Protection Commission (NDPC) at ndpc.gov.ng",
        ],
      },
      "To use any of these rights, email [PRIVACY EMAIL]. We may ask you to confirm your identity first, and we will reply within [30 DAYS].",
    ],
  },
  {
    title: "Keeping your data safe",
    blocks: [
      "We protect your data with encryption in transit, access controls, server-side checks on every payment, PIN protection with lockouts, and secure display of card details. No system is perfectly secure. If you think your account or card has been compromised, freeze your card in the app and contact us straight away. If a data breach puts your rights at risk, we will report it to the NDPC and tell you as the NDPA requires.",
    ],
  },
  {
    title: "Notifications",
    blocks: [
      "You can turn push notifications on or off in the app’s settings. If you turn them off, you may miss charge alerts. We may still send important security and service messages.",
    ],
  },
  {
    title: "Children",
    blocks: [
      "Skribe is only for people aged 18 and over. We do not knowingly collect data from anyone younger. If we learn that we have, we will delete it.",
    ],
  },
  {
    title: "Other companies’ services",
    blocks: [
      "Merchants, our card and banking partners, and Google have their own privacy policies. We are not responsible for how they use data they collect themselves.",
    ],
  },
  {
    title: "Changes to this policy",
    blocks: [
      "If we make important changes, we will tell you in the app or by email before they take effect. The date at the top shows when this policy was last updated.",
    ],
  },
  {
    title: "Contact us",
    blocks: ["Skribe — [COMPANY LEGAL NAME]", "Email: [PRIVACY EMAIL]", "Address: [ADDRESS]"],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([["Home", "/"], ["Privacy Policy", "/privacy"]])} />
      <LegalPage
        label="Legal"
        title={
          <>
            Privacy <span className="italic">policy.</span>
          </>
        }
        meta={meta}
        intro="What we collect, why we collect it, who sees it, and the rights you have over it."
        summary={summary}
        sections={sections}
        other={{ href: "/terms", text: "Read the Terms and Conditions" }}
      />
    </>
  );
}