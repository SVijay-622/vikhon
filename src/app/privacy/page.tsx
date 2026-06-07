import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy — VIKHON",
  description: "How VIKHON collects, uses, and protects your information.",
};

const SECTIONS = [
  {
    heading: "Information We Collect",
    body: "We collect information you voluntarily provide when you contact us — including your name, email address, project details, and any other information you choose to share. We do not collect data without your knowledge.",
  },
  {
    heading: "How We Use Your Information",
    body: "Information you share is used solely to respond to your enquiries, deliver project work, and improve our services. We never sell or share your personal data with third parties for marketing purposes.",
  },
  {
    heading: "Cookies",
    body: "This website may use session cookies to improve your browsing experience. These cookies contain no personal information and are automatically removed when you close your browser.",
  },
  {
    heading: "Third-Party Services",
    body: "We may use third-party tools such as EmailJS for form delivery and Vercel for hosting. These services operate under their own privacy policies and we encourage you to review them.",
  },
  {
    heading: "Data Security",
    body: "We take reasonable precautions to protect your information. However, no transmission over the internet is completely secure, and we cannot guarantee absolute security.",
  },
  {
    heading: "Your Rights",
    body: "You may request access to, correction of, or deletion of any personal data we hold about you at any time by contacting us at hello@vikhon.com.",
  },
  {
    heading: "Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.",
  },
  {
    heading: "Contact",
    body: "For any questions about this Privacy Policy, please reach out to us at hello@vikhon.com or via WhatsApp at +91 80560 58965.",
  },
];

export default function Privacy() {
  return (
    <PolicyPage
      label="Legal"
      title="Privacy Policy"
      lastUpdated="1 June 2026"
      sections={SECTIONS}
    />
  );
}
