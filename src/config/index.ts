import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        default: "Edge Innov OPC - Where Innovation Meets Execution",
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
        title: "Edge Innov OPC - Where Innovation Meets Execution",
        description: "Edge Innov OPC is your full-service corporate partner for modern technology and strategic business solutions. We streamline operations to power sustainable enterprise growth.",
        type: "website",
        images: [
            {
                url: "/assets/og-image.jpg", // Ensure this file exists in your public folder or update the path
                width: 1200,
                height: 630,
                alt: "Edge Innov OPC Enterprise Solutions"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Edge Innov OPC - Where Innovation Meets Execution",
        description: "Edge Innov OPC is your full-service corporate partner for modern technology and strategic business solutions. We streamline operations to power sustainable enterprise growth.",
        creator: "@EdgeInnovOPC", // Change this to your actual company Twitter handle if you have one
        images: [
            {
                url: "/assets/og-image.jpg",
            }
        ]
    },
    metadataBase: new URL("https://edgeinnovph.com"), 
};