"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

type WhoAmI =
  | { authenticated: false }
  | {
      authenticated: true;
      user: { id: string; name?: string | null; image?: string | null };
    };

export function Navbar() {
  const pathname = usePathname();

  // Default to "not ready" only on /sign-in (where we might swap to Dashboard).
  const [ready, setReady] = useState(pathname === "/sign-in" ? false : true);
  const [auth, setAuth] = useState<WhoAmI>({ authenticated: false });

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (
        event.key.toLowerCase() === "b" &&
        !event.ctrlKey &&
        !event.metaKey &&
        !event.altKey
      ) {
        // Check if user is not typing in an input field
        const activeElement = document.activeElement as HTMLElement;
        if (
          activeElement &&
          (activeElement.tagName === "INPUT" ||
            activeElement.tagName === "TEXTAREA" ||
            activeElement.contentEditable === "true")
        ) {
          return;
        }

        event.preventDefault();
        document.getElementById("sign-in-link")?.click();
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

  useEffect(() => {
    // Only bother fetching auth on /sign-in (so other pages never show a loading state).
    if (pathname !== "/sign-in") return;

    const ctrl = new AbortController();

    fetch("https://app.graycup.org/api/whoami", {
      method: "GET",
      credentials: "include",
      signal: ctrl.signal,
    })
      .then((r) => (r.ok ? r.json() : { authenticated: false }))
      .then((data: WhoAmI) => {
        setAuth(data);
        setReady(true);
      })
      .catch(() => {
        setAuth({ authenticated: false });
        setReady(true);
      });

    return () => ctrl.abort();
  }, [pathname]);

  const showDashboardCTA = pathname === "/sign-in" && auth.authenticated;

  return (
    <header className="w-full py-2 bg-white border-b border-neutral-200">
      <div className="flex h-14 items-center justify-between max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-normal flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Gray Cup"
              draggable={false}
              width={45}
              height={45}
            />
            <p className="font-semibold text-neutral-900 text-xl tracking-tight">Gray Cup</p>
          </Link>
          <nav className="hidden font-medium text-md md:flex pl-3 gap-1">
            <Link
              href="/pricing"
              className="circular rounded-md px-3 py-2 text-neutral-800"
            >
              Culture
            </Link>
            <Link
              href="/blog"
              className="circular rounded-md px-3 py-2 text-neutral-800"
            >
              Newsroom
            </Link>
            <a
              href="/impact"
              target="_blank"
              className="circular rounded-md px-3 py-2 text-neutral-800"
            >
              Our Impact
            </a>
            <Link
              href="/social-responsibility"
              className="circular rounded-md px-3 py-2 text-neutral-800"
            >
            Social Responsibility
            </Link>
            <Link
              href="/about"
              className="circular rounded-md px-3 py-2 text-neutral-800"
            >
              Careers
            </Link>
            <Link
              href="/about"
              className="circular rounded-md px-3 py-2 text-neutral-800"
            >
              About
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
            <>
              {/* Internal route: use Link + asChild so it doesn't flash a reload */}
              <Link href="/contact" className="inline-block">
                <Button variant="lightgray" size="sm">
                  Email Us
                </Button>
              </Link>

              {/* Sign-in always visible outside the app */}
              <a
                href="https://graycup.in/"
                target="_blank"
                rel="dofollow noopener"
                id="sign-in-link"
              >
                <Button variant="blue" size="sm">
                  Visit Store{" "}
                  <kbd
                    className="max-sm:hidden font-medium text-[11px] px-1.5 py-0.5 rounded-sm border border-neutral-700 bg-neutral-800 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      document.getElementById("sign-in-link")?.click();
                    }}
                  >
                    B
                  </kbd>
                </Button>
              </a>
            </>
        </div>
      </div>
    </header>
  );
}
