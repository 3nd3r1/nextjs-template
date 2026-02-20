"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Library, LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const MainNavbar = () => {
    const pathname = usePathname();

    const items: {
        title: string;
        href: string;
        icon: LucideIcon;
        isActive: boolean;
    }[] = [
        {
            title: "About",
            href: "/about",
            icon: Library,
            isActive: pathname === "/about",
        },
    ];

    return (
        <header className="w-full border-b">
            <div className="flex flex-row justify-between">
                <div className="flex flex-row">
                    <div className="py-3 px-4">
                        <Library />
                    </div>
                    <Separator orientation="vertical" />
                    <nav className="py-2 px-4 grow">
                        {items.map((item) => (
                            <Button
                                key={item.title}
                                variant="ghost"
                                className={cn(item.isActive && "bg-primary/10")}
                                asChild
                            >
                                <Link href={item.href} key={item.title}>
                                    <item.icon size={16} />
                                    <span>{item.title}</span>
                                </Link>
                            </Button>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default MainNavbar;
