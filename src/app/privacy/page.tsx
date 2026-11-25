
import Link from "next/link";
import "./privacy.css";

const sections = [
  {
    title: "1. Who we are",
    paragraphs: [
      "LOBII is a restaurant management platform that helps restaurants manage QR ordering, point of sale, tables, menus, kitchen and bar orders, inventory, staff and business reporting.",
      "The organisation operating LOBII is responsible for deciding how personal information is processed for the platform. Before launch, this section must identify the correct legal business or individual operating LOBII.",
    ],
  },
  {
    title: "2. Who this policy applies to",
    paragraphs: [
      "This Privacy Policy applies to restaurant owners, managers, employees, authorised restaurant users, customers who use restaurant QR ordering pages, and visitors to the LOBII website.",
      "A restaurant may also have its own privacy notice explaining how it uses customer and staff information. This policy describes LOBII's handling of information through the platform.",
    ],
  },
  {
    title: "3. Information we may collect",
    paragraphs: [
      "Account information: your name, email address, phone number, password credentials and account role.",
      "Restaurant information: restaurant name, business contact details, menus, prices, tables, operating settings and staff account details.",
      "Order information: items ordered, quantities, order status, table or service details, order notes and transaction records.",
      "Payment information: payment method, transaction references, payment status and related records. Payment credentials such as M-Pesa PINs or card security codes should not be collected or stored by LOBII.",
      "Technical information: device, browser, security logs, access timestamps and information needed to protect the service and troubleshoot errors.",
      "Support information: messages or details you provide when contacting us for help.",
    ],
  },
  {
    title: "4. How we use information",
    paragraphs: [
      "We use information to create and manage accounts, authenticate users, provide restaurant management features, process and track orders, display payment status, and maintain business records.",
      "We may use information to secure accounts, detect fraud or misuse, investigate technical problems, provide customer support, improve platform performance and comply with legal obligations.",
      "We will not use personal information for a purpose that is incompatible with the purpose for which it was collected unless permitted by applicable law.",
    ],
  },
  {
    title: "5. QR ordering and restaurant customers",
    paragraphs: [
      "When a customer scans a restaurant's QR code, the ordering experience may collect information needed to submit and manage the order.",
      "Depending on the restaurant's configuration and the features in use, this may include the selected menu items, table reference, order notes, contact details or payment status.",
      "Guest QR ordering is intended to work without requiring a LOBII staff account. We will only request customer information that is needed for the relevant ordering or payment process.",
      "The restaurant is responsible for its own customer communications, fulfilment, food safety, pricing and any customer information it independently collects.",
    ],
  },
  {
    title: "6. Payments and third-party services",
    paragraphs: [
      "LOBII may connect with payment providers or other service providers to support payment processing, hosting, email delivery, security, analytics or platform operations.",
      "When a payment is made through a provider such as M-Pesa, the provider may process information under its own privacy terms. LOBII may receive transaction references, payment status and other information required to reconcile the order.",
      "We do not ask customers to share their M-Pesa PIN with LOBII. Never enter your PIN into a LOBII form or share it with restaurant staff.",
      "We will identify the actual providers used by the live platform in this policy or in relevant service notices before launch.",
    ],
  },
  {
    title: "7. How we share information",
    paragraphs: [
      "We may share relevant information with the restaurant responsible for an order, authorised staff members, payment providers, hosting and infrastructure providers, and other service providers necessary to operate LOBII.",
      "We may disclose information where required by law, to respond to lawful requests, protect users or the platform, investigate suspected fraud, or enforce our Terms & Conditions.",
      "We do not intend to sell personal information to third parties.",
    ],
  },
  {
    title: "8. Data security",
    paragraphs: [
      "We will implement appropriate technical and organisational measures designed to protect personal information against unauthorised access, loss, alteration, disclosure or misuse.",
      "Security measures may include access controls, password protection, encrypted connections, logging, backups and restricted staff permissions, as appropriate to the platform.",
      "No online service can guarantee absolute security. Users should protect their passwords, use authorised devices and report suspected account compromise promptly.",
    ],
  },
  {
    title: "9. Data retention",
    paragraphs: [
      "We retain personal information only for as long as reasonably necessary for the purposes described in this policy, including providing the service, maintaining business and transaction records, resolving disputes, enforcing agreements and meeting legal obligations.",
      "Retention periods may differ for account data, order records, payment references, security logs and support requests.",
      "When information is no longer required, we will take appropriate steps to delete it, anonymise it or securely dispose of it, subject to applicable legal requirements and legitimate recordkeeping needs.",
    ],
  },
  {
    title: "10. Your privacy rights",
    paragraphs: [
      "Subject to applicable law, you may have the right to be informed about how your personal data is used, request access to your data, request correction of inaccurate information, object to certain processing, and request deletion or restriction where applicable.",
      "You may also have rights relating to data portability and the withdrawal of consent where processing is based on consent.",
      "To exercise a privacy right, contact the LOBII privacy contact listed below. We may need to verify your identity before responding.",
    ],
  },
  {
    title: "11. Data transfers",
    paragraphs: [
      "Some service providers may store or process information in locations outside Kenya.",
      "Where personal information is transferred across borders, we will take steps required by applicable data protection law to ensure that the transfer has an appropriate legal basis and safeguards.",
      "Before launch, LOBII should document its actual hosting locations, database locations and relevant service-provider arrangements.",
    ],
  },
  {
    title: "12. Children's information",
    paragraphs: [
      "LOBII is a business and restaurant operations platform and is not designed for children to create restaurant management accounts.",
      "If we become aware that personal information has been collected from a child in circumstances where it should not have been collected, we will take appropriate steps in accordance with applicable law.",
    ],
  },
  {
    title: "13. Changes to this policy",
    paragraphs: [
      "We may update this Privacy Policy when the platform, our data practices or legal requirements change.",
      "We will update the version and effective date when changes are published. Where required, we will provide notice or obtain any necessary consent.",
    ],
  },
  {
    title: "14. Contact us",
    paragraphs: [
      "For privacy questions, requests or concerns, contact the LOBII privacy team using the official contact details published by the service operator.",
      "Before launch, replace this placeholder with a monitored privacy email address and the full legal identity and contact details of the organisation operating LOBII.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="privacy-page">
      <header className="privacy-header">
        <Link href="/" className="privacy-brand" aria-label="LOBII home">
  <img
    src="/images/lobii-logo.png"
    alt="LOBII"
    className="legal-logo"
  />
</Link>
        <Link href="/register" className="privacy-back">
          Back to registration
        </Link>
      </header>

      <article className="privacy-document">
        <div className="privacy-eyebrow">LOBII · PRIVACY</div>

        <h1>Privacy Policy</h1>

        <p className="privacy-intro">
          Your information matters. This policy explains how LOBII
          collects, uses, protects and manages personal information
          when you use our restaurant management platform.
        </p>

        <div className="privacy-meta">
          <span>Version 1.0</span>
          <span>Effective date: 25 November 2026</span>
        </div>

        <div className="privacy-notice">
          This is a working privacy notice. Before public launch, confirm
          the actual data collected, service providers, hosting locations,
          retention periods and official privacy contact details.
        </div>

        {sections.map((section) => (
          <section className="privacy-section" key={section.title}>
            <h2>{section.title}</h2>

            {section.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>
        ))}

        <div className="privacy-bottom">
          <Link href="/terms">Read Terms &amp; Conditions</Link>
          <Link href="/register">Return to registration</Link>
        </div>
      </article>

      <footer className="privacy-footer">
        © {new Date().getFullYear()} LOBII. All rights reserved.
      </footer>
    </main>
  );
}
