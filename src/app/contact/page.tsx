import { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
    title: "Prendre Rendez-vous & Contact Naturopathe à Miramas | Inessence",
    description: "Prenez rendez-vous avec Inessence pour une consultation de naturopathie, un bilan de vitalité ou un soin à Miramas ou en visioconférence.",
    alternates: {
        canonical: "/contact",
    },
};

export default function ContactPage() {
    return <ContactForm />;
}
