import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        default: "Edge Innov OPC | Business Solutions & Digital Transformation",
        template: `%s | Edge Innov OPC`
    },
    description: "Edge Innov OPC is your full-service corporate partner for modern technology and strategic business solutions. We streamline operations to power sustainable enterprise growth.",
    icons: {
        icon: [
            {
                url: "/icons/favicon.ico",
                href: "/icons/favicon.ico",
            }
        ]
    },
    openGraph: {
        title: "Astra - AI Powered Website Builder",
        description: "Astra is an AI powered website builder that helps you create a website in minutes. No coding skills required. Get started for free!",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        creator: "@shreyassihasane",
        title: "Astra - AI Powered Website Builder",
        description: "Astra is an AI powered website builder that helps you create a website in minutes. No coding skills required. Get started for free!",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    metadataBase: new URL("https://astra-app.vercel.app"),
};
