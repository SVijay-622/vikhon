import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Terms of Service — VIKHON",
  description: "Terms and conditions for working with VIKHON.",
};

const SECTIONS = [
  {
    heading: "Acceptance of Terms",
    body: "By engaging VIKHON's services — whether through our website, email, or any other channel — you agree to be bound by these Terms of Service. If you do not agree, please refrain from using our services.",
  },
  {
    heading: "Services",
    body: "VIKHON provides digital services including web development, UI/UX design, graphic design, mobile application development, and digital marketing. The scope of each engagement is agreed upon in writing before work commences.",
  },
  {
    heading: "Payments",
    body: "Project fees are agreed upon prior to commencement. A deposit may be required before work begins. Remaining balances are due upon project completion unless otherwise agreed in writing.",
  },
  {
    heading: "Intellectual Property",
    body: "Upon receipt of full payment, the client receives ownership of all custom deliverables created for their project. VIKHON retains the right to display completed work in its portfolio unless the client requests confidentiality in writing.",
  },
  {
    heading: "Revisions",
    body: "Each project includes a defined number of revision rounds as outlined in the project agreement. Additional revisions beyond this scope may incur extra charges.",
  },
  {
    heading: "Timelines",
    body: "Estimated delivery timelines are provided in good faith. Delays caused by late feedback, content provision, or factors outside VIKHON's control do not constitute a breach of these terms.",
  },
  {
    heading: "Limitation of Liability",
    body: "VIKHON's liability is limited to the total amount paid for the relevant project. We are not responsible for indirect, incidental, or consequential damages arising from the use of our deliverables.",
  },
  {
    heading: "Termination",
    body: "Either party may terminate a project with written notice. Work completed up to the point of termination will be billed at the agreed rate. Deposits are non-refundable unless VIKHON initiates the termination without cause.",
  },
  {
    heading: "Governing Law",
    body: "These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Chennai, Tamil Nadu.",
  },
  {
    heading: "Contact",
    body: "Questions about these Terms? Contact us at hello@vikhon.com.",
  },
];

export default function Terms() {
  return (
    <PolicyPage
      label="Legal"
      title="Terms of Service"
      lastUpdated="1 June 2026"
      sections={SECTIONS}
    />
  );
}
