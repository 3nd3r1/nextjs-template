import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";

import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://timescaledb-tune.host.ender.fi"),
    title: "TimescaleDB Tuner - Optimize Your Database Performance",
    description:
        "Free web-based tool to optimize TimescaleDB configuration for better performance. Get intelligent tuning recommendations based on your system resources.",
    keywords: [
        "TimescaleDB",
        "database tuning",
        "PostgreSQL optimization",
        "database performance",
        "configuration tuner",
        "timeseries database",
        "database optimization",
        "postgres tuning",
    ],
    authors: [{ name: "TimescaleDB Tuner UI" }],
    creator: "TimescaleDB Tuner UI",
    publisher: "TimescaleDB Tuner UI",
    robots: "index, follow",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://timescaledb-tune.host.ender.fi",
        siteName: "TimescaleDB Tuner",
        title: "TimescaleDB Tuner - Optimize Your Database Performance",
        description:
            "Free web-based tool to optimize TimescaleDB configuration for better performance. Get intelligent tuning recommendations based on your system resources.",
        images: [
            {
                url: "/logo-nobg-dark.svg",
                width: 1200,
                height: 630,
                alt: "TimescaleDB Tuner - Database Optimization Tool",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "TimescaleDB Tuner - Optimize Your Database Performance",
        description:
            "Free web-based tool to optimize TimescaleDB configuration for better performance.",
        images: ["/logo-nobg-dark.svg"],
    },
    viewport: "width=device-width, initial-scale=1",
    themeColor: "#000000",
    manifest: "/manifest.json",
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    verification: {
        google: "6T0KridUTOIprUpRHF0U1O7zutvVEZRhN8L1kOWMNLw",
    },
    category: "technology",
};

const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "TimescaleDB Tuner",
    applicationCategory: "DeveloperApplication",
    description:
        "Free web-based tool to optimize TimescaleDB configuration for better performance. Get intelligent tuning recommendations based on your system resources.",
    url: "https://timescaledb-tune.host.ender.fi",
    operatingSystem: "Any",
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
    },
    author: {
        "@type": "Organization",
        name: "TimescaleDB Tuner UI",
    },
    keywords:
        "TimescaleDB, database tuning, PostgreSQL optimization, database performance, configuration tuner",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData),
                    }}
                />
            </Head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
            >
                {children}
            </body>
        </html>
    );
}
