import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function Home() {
    return (
        <main className="min-h-screen bg-background p-8">
            <div className="mx-auto max-w-4xl space-y-8">
                <div className="space-y-2 text-center">
                    <h1 className="text-4xl font-bold tracking-tight">
                        Ender - Next.js Template
                    </h1>
                    <p className="text-muted-foreground">
                        A minimal Next.js starter with React 19, Tailwind CSS 4,
                        and shadcn/ui
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Stack</CardTitle>
                            <CardDescription>
                                Modern tools for modern apps
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2 text-sm">
                            <p>Next.js 16 with App Router</p>
                            <p>React 19 with Server Components</p>
                            <p>Tailwind CSS 4</p>
                            <p>TypeScript 5</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Testing</CardTitle>
                            <CardDescription>
                                Ready for test-driven development
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2 text-sm">
                            <p>Vitest for unit tests</p>
                            <p>React Testing Library</p>
                            <p>API route testing</p>
                            <p>Component testing</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Developer Experience</CardTitle>
                            <CardDescription>
                                Tools to keep code clean
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2 text-sm">
                            <p>ESLint 9 with Next.js config</p>
                            <p>Prettier with import sorting</p>
                            <p>Zod for validation</p>
                            <p>Path aliases (@/)</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>SEO Ready</CardTitle>
                            <CardDescription>
                                Built-in metadata handling
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2 text-sm">
                            <p>Auto-generated OG images</p>
                            <p>Sitemap and robots.txt</p>
                            <p>Structured data (JSON-LD)</p>
                            <p>Centralized site config</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex justify-center gap-4">
                    <Button asChild>
                        <Link href="/about">About</Link>
                    </Button>
                    <Button variant="outline" asChild>
                        <a
                            href="https://github.com/3nd3r1/nextjs-template"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </Button>
                </div>
            </div>
        </main>
    );
}
