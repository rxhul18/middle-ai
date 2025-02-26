"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { siteConfig } from "@/config/site.config";
import { MainNav } from "./nav";
import { Icons } from "@/components/icons";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "g" || e.key === "G") {
        e.preventDefault();
        redirect("/auth");
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <header className="fixed top-5 w-5/6 z-[500] border border-border/60 bg-secondary/30 backdrop-blur-lg supports-[backdrop-filter]:bg-secondary/50 dark:border-border">
      <div className="container flex h-12 max-w-screen-2xl items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <MainNav />
        </div>
        <nav className="flex items-center gap-2">
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex"
          >
            <div
              className={cn(
                buttonVariants({
                  variant: "secondary",
                }),
                "h-8 w-8 px-0",
              )}
            >
              <Icons.gitHub className="h-5 w-5 fill-current" />
              <span className="sr-only">GitHub</span>
            </div>
          </Link>
          <Link href={siteConfig.links.x} target="_blank" rel="noreferrer">
            <div
              className={cn(
                buttonVariants({
                  variant: "secondary",
                }),
                "h-8 w-8 px-0",
              )}
            >
              <Icons.twitter className="h-5 w-5 fill-current" />
              <span className="sr-only">Twitter</span>
            </div>
          </Link>
          <Link
            href={siteConfig.links.discord}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={cn(
                buttonVariants({
                  variant: "secondary",
                }),
                "h-8 w-8 px-0",
              )}
            >
              <Icons.discord className="h-5 w-5" />
              <span className="sr-only">Discord</span>
            </div>
          </Link>
          <Link href={"/auth"} className="hidden md:flex">
            <Button variant={"secondary"} className="h-8 px-3">
              Get Started
              <Badge className="px-2">G</Badge>
            </Button>
          </Link>

          <Button
            className="h-8 w-8 px-0 group md:hidden"
            variant="secondary"
            size="sm"
            onClick={() => setOpen((prevState) => !prevState)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <svg
              className="pointer-events-none"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12L20 12"
                className="origin-center -translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
              />
              <path
                d="M4 12H20"
                className="origin-center transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
              />
              <path
                d="M4 12H20"
                className="origin-center translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
              />
            </svg>
          </Button>
        </nav>
      </div>
    </header>
  );
}