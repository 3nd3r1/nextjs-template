import Link from "next/link";

import { cn } from "@/lib/utils";

import { buttonVariants } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function Home() {
    return (
        <main className="flex-1 p-8">
            <div className="mx-auto max-w-4xl space-y-8">
                <div className="space-y-2 text-center">
                    <h1 className="font-heading text-4xl">
                        Ender - Next.js Template
                    </h1>
                    <p className="text-muted-foreground">
                        A Next.js starter with Tailwind CSS and shadcn/ui
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Stack</CardTitle>
                            <CardDescription>
                                All dependencies kept at latest versions
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2 text-sm">
                            <p>Next.js with Cache Components</p>
                            <p>React Server Components</p>
                            <p>Tailwind CSS and shadcn/ui</p>
                            <p>TypeScript and Zod</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Theme</CardTitle>
                            <CardDescription>
                                shadcn Sera preset
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2 text-sm">
                            <p>Neutral base with a purple primary</p>
                            <p>Geist and Playfair Display</p>
                            <p>One command to change colors</p>
                            <p>Manifest and OG images follow it</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Quality</CardTitle>
                            <CardDescription>
                                Checked on every push and PR
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2 text-sm">
                            <p>Vitest and React Testing Library</p>
                            <p>ESLint with the Next.js config</p>
                            <p>Prettier with import sorting</p>
                            <p>Type checking with route types</p>
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
                    <Link href="/about" className={cn(buttonVariants())}>
                        About
                    </Link>
                    <a
                        href="https://github.com/3nd3r1/nextjs-template"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(buttonVariants({ variant: "outline" }))}
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </main>
    );
}
