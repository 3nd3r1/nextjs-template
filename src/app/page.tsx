import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

import { type TunerConfig, generateTunerConfig } from "@/lib/tuner";

import { Button } from "@/components/ui/button";

import { TunerForm } from "@/components/forms/tuner-form";

export default function Home() {
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

    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData),
                    }}
                />
            </Head>
            <main className="min-h-screen bg-background"></main>
        </>
    );
}
