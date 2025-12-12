// components/navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";


const navItems = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Express Interest", href: "/join" },
  // { name: "Collaborate", href: "/collaborate" },
  // { name: "Partners", href: "/partners" },
  // { name: "Welcome", href: "/welcome" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        
        {/* Logo */}
        {/* <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
             <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="font-bold text-primary-foreground">P</span>
            </div> 
            <span className="font-bold text-xl">Home</span>
          </Link>
        </div>   */}

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 pl-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-4 pl-96 pr-10">
          <ThemeToggle />
          
          {/* Contact CTA */}
          <Button size="sm" variant="outline" className="hidden md:flex">
            <Link href="/contact">Contact</Link>
          </Button>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-base font-medium ${
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button className="w-full mt-4" asChild>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}