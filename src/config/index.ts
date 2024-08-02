import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
  title: {
    // write a default title for Arslan a ai powered cv builder suggest something unique and catchy don't use the same words of ai powered cv builder give a unique name
    default: "Arslan - AI Powered CV Builder",
    template: `%s | Arslan`,
  },
  description: "Arslan is an AI powered cv builder that helps you create a cv in minutes. No coding skills required. Get started for free!",
  icons: {
    icon: [
      {
        url: "/icons/favicon.ico",
        href: "/icons/favicon.ico",
      },
    ],
  },
  openGraph: {
    title: "Arslan - AI Powered CV Builder",
    description:
      "Arslan is an AI powered cv builder that helps you create a cv in minutes. No coding skills required. Get started for free!",
    images: [
      {
        url: "/assets/og-image.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@shreyassihasane",
    title: "Arslan - AI Powered CV Builder",
    description:
      "Arslan is an AI powered cv builder that helps you create a cv in minutes. No coding skills required. Get started for free!",
    images: [
      {
        url: "/assets/og-image.png",
      },
    ],
  },
  metadataBase: new URL("https://Arslan-app.vercel.app"),
};
