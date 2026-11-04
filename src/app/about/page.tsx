import type { Metadata } from "next";
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

export const metadata: Metadata = {
    title: "About",
    description: "Learn about the Ender template structure and how to use it",
};

export default function About() {
    return (
        <main className="flex-1 p-8">
            <div className="mx-auto max-w-4xl space-y-8">
                <div className="space-y-2">
                    <h1 className="font-heading text-4xl">
                        About This Template
                    </h1>
                    <p className="text-muted-foreground">
                        Everything you need to know to get started
                    </p>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Project Structure</CardTitle>
                        <CardDescription>
                            Where to find and add things
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <pre className="overflow-x-auto bg-muted p-4 text-sm">
                            {`src/
├── app/             # Pages, API routes and metadata files
├── components/
│   ├── common/      # Shared custom components
│   └── ui/          # shadcn/ui components
├── lib/
│   ├── config.ts    # Site details
│   ├── theme.ts     # Reads theme colors for the manifest
│   └── utils.ts     # cn helper
└── validators/      # Zod schemas

tests/               # Mirrors src/`}
                        </pre>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Getting Started</CardTitle>
                        <CardDescription>Quick setup steps</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <p className="font-medium">1. Update site config</p>
                            <p className="text-sm text-muted-foreground">
                                Edit{" "}
                                <code className="bg-muted px-1">
                                    src/lib/config.ts
                                </code>{" "}
                                with your site name, URL, and author info.
                            </p>
                        </div>
                        <div>
                            <p className="font-medium">2. Pick a theme</p>
                            <p className="text-sm text-muted-foreground">
                                Build a preset on{" "}
                                <a
                                    href="https://ui.shadcn.com/create?preset=b4pl265hL6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline underline-offset-4"
                                >
                                    ui.shadcn.com/create
                                </a>{" "}
                                and run{" "}
                                <code className="bg-muted px-1">
                                    npm run theme -- [code]
                                </code>{" "}
                                to apply its colors.
                            </p>
                        </div>
                        <div>
                            <p className="font-medium">3. Add components</p>
                            <p className="text-sm text-muted-foreground">
                                Run{" "}
                                <code className="bg-muted px-1">
                                    npx shadcn@latest add [component]
                                </code>{" "}
                                to add UI components.
                            </p>
                        </div>
                        <div>
                            <p className="font-medium">4. Create pages</p>
                            <p className="text-sm text-muted-foreground">
                                Add folders in{" "}
                                <code className="bg-muted px-1">src/app/</code>{" "}
                                with a{" "}
                                <code className="bg-muted px-1">page.tsx</code>{" "}
                                file.
                            </p>
                        </div>
                        <div>
                            <p className="font-medium">5. Add API routes</p>
                            <p className="text-sm text-muted-foreground">
                                Create{" "}
                                <code className="bg-muted px-1">route.ts</code>{" "}
                                files in{" "}
                                <code className="bg-muted px-1">
                                    src/app/api/
                                </code>{" "}
                                folders.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Commands</CardTitle>
                        <CardDescription>Common npm scripts</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2 font-mono text-sm">
                            <p>
                                <span className="text-muted-foreground">
                                    npm run dev
                                </span>{" "}
                                - Start dev server
                            </p>
                            <p>
                                <span className="text-muted-foreground">
                                    npm run build
                                </span>{" "}
                                - Build for production
                            </p>
                            <p>
                                <span className="text-muted-foreground">
                                    npm test
                                </span>{" "}
                                - Run tests
                            </p>
                            <p>
                                <span className="text-muted-foreground">
                                    npm run lint
                                </span>{" "}
                                - Check code style
                            </p>
                            <p>
                                <span className="text-muted-foreground">
                                    npm run format
                                </span>{" "}
                                - Format code
                            </p>
                            <p>
                                <span className="text-muted-foreground">
                                    npm run type-check
                                </span>{" "}
                                - Check types
                            </p>
                            <p>
                                <span className="text-muted-foreground">
                                    npm run theme -- [code]
                                </span>{" "}
                                - Apply theme colors
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <Link href="/" className={cn(buttonVariants())}>
                    Back to Home
                </Link>
            </div>
        </main>
    );
}
