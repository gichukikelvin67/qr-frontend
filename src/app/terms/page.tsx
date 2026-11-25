
import Link from "next/link";
import "./terms.css";

const sections = [
  {
    title: "1. About LOBII",
    content: [
      "LOBII is a restaurant management platform designed to help restaurants manage operations such as QR ordering, point of sale, tables, menus, kitchen and bar orders, inventory, staff and business reporting.",
      "In these Terms, “LOBII”, “we”, “our” or “us” refers to the LOBII service operator. Before launch, replace this description with the correct registered business or legal owner details.",
    ],
  },
  {
    title: "2. Acceptance of these Terms",
    content: [
      "By creating an account, signing in after being asked to accept these Terms, or using LOBII, you confirm that you have read and agreed to these Terms and our Privacy Policy.",
      "If you do not agree, you must not create or access a LOBII account.",
      "We may keep a record of your acceptance, including the account, date and time, and the version of these Terms accepted.",
    ],
  },
  {
    title: "3. Restaurant accounts and access",
    content: [
      "You must provide accurate and current account and restaurant information.",
      "You are responsible for keeping your password and account credentials confidential and for activity carried out through your account.",
      "Restaurant owners and authorised administrators are responsible for assigning appropriate staff roles and permissions.",
      "You must promptly notify us if you suspect unauthorised access to your account.",
      "You must be legally capable of entering into these Terms. If you create an account for a restaurant or business, you confirm that you are authorised to act for it.",
    ],
  },
  {
    title: "4. Permitted use",
    content: [
      "You may use LOBII only for lawful restaurant or business operations and in accordance with these Terms.",
      "You must not misuse the platform, attempt to bypass security, access another user's data without permission, interfere with service availability, or use LOBII for fraudulent or unlawful activity.",
      "You must not upload malicious code or attempt to reverse engineer or disrupt the platform, except where applicable law expressly permits it.",
    ],
  },
  {
    title: "5. Orders, menus and restaurant information",
    content: [
      "The restaurant is responsible for the accuracy of its menu, prices, availability, descriptions, taxes, opening hours and other information shown to customers.",
      "Restaurants are responsible for preparing and fulfilling orders they accept, handling customer enquiries, and communicating any changes or cancellations.",
      "Customers using a restaurant's QR ordering page are ordering from that restaurant. LOBII provides the technology and does not itself prepare or deliver restaurant food.",
    ],
  },
  {
    title: "6. Payments and M-Pesa",
    content: [
      "Payment features may be provided through third-party payment providers, including mobile money or card services, where available.",
      "Payment processing may be subject to the provider's own terms, fees, availability and verification procedures.",
      "Restaurants must verify payment status through the authorised payment process before treating an order as paid. A customer screenshot or message alone is not confirmation of a successful payment.",
      "Restaurants remain responsible for their pricing, refunds, charge disputes, receipts and applicable tax obligations, unless a separate written agreement states otherwise.",
      "LOBII does not guarantee that a payment provider, network or mobile money service will always be available or complete a transaction without delay.",
    ],
  },
  {
    title: "7. Subscriptions and fees",
    content: [
      "Some LOBII features may require a paid subscription or additional fees.",
      "Any applicable price, billing period, payment method, renewal terms and cancellation rules will be shown before you purchase or subscribe.",
      "You are responsible for fees incurred by your account, unless they result from an error attributable to LOBII or applicable law requires otherwise.",
      "We will not introduce a new paid plan or charge for a feature without providing the applicable pricing information.",
    ],
  },
  {
    title: "8. Data and privacy",
    content: [
      "LOBII may process account details, restaurant information, staff records, order details and other information needed to provide and secure the service.",
      "Our Privacy Policy explains what personal data we collect, why we use it, how it is protected, and how individuals may exercise their rights.",
      "Restaurants are responsible for ensuring that they have an appropriate lawful basis and notices for personal data they collect from their customers and staff through LOBII.",
      "We will handle personal data in accordance with applicable data protection law, including Kenya's Data Protection Act, 2019, where applicable.",
    ],
  },
  {
    title: "9. Availability and changes",
    content: [
      "We aim to provide a reliable service, but we do not promise uninterrupted or error-free availability.",
      "Maintenance, network problems, third-party outages, security incidents or circumstances beyond our reasonable control may affect the service.",
      "We may improve, modify or discontinue features. Where a change materially affects paid services or your rights, we will provide notice where reasonably practicable.",
    ],
  },
  {
    title: "10. Suspension and termination",
    content: [
      "We may restrict or suspend access where reasonably necessary to protect the platform, investigate suspected fraud or security incidents, comply with law, or address a material breach of these Terms.",
      "You may stop using LOBII and request account closure through the available account settings or by contacting our support team.",
      "Following account closure, data may be retained or deleted according to our Privacy Policy, applicable law and any necessary financial or security records.",
    ],
  },
  {
    title: "11. Intellectual property",
    content: [
      "LOBII and its software, design, branding and platform materials are owned by or licensed to the service operator.",
      "These Terms grant you a limited, non-exclusive and non-transferable right to use the platform for its intended purpose while your account is authorised.",
      "You retain rights to the restaurant content and materials you upload, while granting LOBII permission to host and process them as needed to provide the service.",
    ],
  },
  {
    title: "12. Disclaimer and liability",
    content: [
      "LOBII is a software service. You are responsible for your restaurant's business decisions, food safety, customer service, staff conduct, legal compliance and fulfilment of orders.",
      "To the extent permitted by law, LOBII is not responsible for indirect or consequential losses, lost profits, or disruptions caused by third-party services or circumstances outside our reasonable control.",
      "Nothing in these Terms excludes or limits liability that cannot legally be excluded or limited under applicable law.",
    ],
  },
  {
    title: "13. Changes to these Terms",
    content: [
      "We may update these Terms as the platform develops or legal requirements change.",
      "We will update the effective date and version when changes are published. If a change requires renewed acceptance, we will ask you to accept the updated Terms before continuing to use your account.",
    ],
  },
  {
    title: "14. Governing law",
    content: [
      "These Terms are governed by the laws of Kenya, subject to any mandatory legal protections that apply to you.",
      "Disputes should first be raised with our support team in an attempt to resolve them informally. This does not prevent either party from seeking remedies through a competent court.",
    ],
  },
  {
    title: "15. Contact",
    content: [
      "For questions about these Terms, account access or the LOBII service, contact our support team.",
      "Before launch, replace this placeholder with your official support email and the legal operator's business details.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="terms-page">
      <header className="terms-header">
        
        <Link href="/" className="terms-brand" aria-label="LOBII home">
  <img
    src="/images/lobii-logo.png"
    alt="LOBII"
    className="legal-logo"
  />
</Link>

        <Link href="/register" className="terms-back">
          Back to registration
        </Link>
      </header>

      <article className="terms-document">
        <div className="terms-eyebrow">LOBII · LEGAL</div>

        <h1>Terms &amp; Conditions</h1>

        <p className="terms-intro">
          Please read these Terms carefully before creating or accessing
          your LOBII restaurant account.
        </p>

        <div className="terms-meta">
          <span>Version 1.0</span>
          <span>Effective date: 25 November 2026</span>
        </div>

        <div className="terms-notice">
          These Terms are a working draft for the LOBII platform. Complete
          the operator and support contact details and have the document
          reviewed before public launch.
        </div>

        {sections.map((section) => (
          <section className="terms-section" key={section.title}>
            <h2>{section.title}</h2>

            {section.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>
        ))}

        <div className="terms-bottom">
          <Link href="/register">Return to registration</Link>
        </div>
      </article>

      <footer className="terms-footer">
        © {new Date().getFullYear()} LOBII. All rights reserved.
      </footer>
    </main>
  );
}
