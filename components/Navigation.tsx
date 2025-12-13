// components/Navigation.tsx
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
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex flex-1 justify-baseline">
            <div className="flex items-center gap-6 lg:gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary px-1 py-2 ${
                    pathname === item.href
                      ? "text-primary border-b-2 border-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center justify-end gap-4 md:gap-6 flex-1">
            <ThemeToggle />
            
            {/* Contact CTA - Hidden on mobile, shown on desktop */}
            <Button size="sm" variant="outline" className="hidden md:inline-flex">
              <Link href="/contact">Contact</Link>
            </Button>

            {/* Mobile menu button */}
            <button
              className="md:hidden flex items-center justify-center p-2 rounded-md hover:bg-accent transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 border-t" : "max-h-0 opacity-0 overflow-hidden"
        }`}>
          <div className="py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 text-base font-medium rounded-lg transition-colors ${
                  pathname === item.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:bg-accent"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 px-4">
              <Button className="w-full" asChild>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}















// // components/navbar.tsx
// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Menu, X } from "lucide-react";
// import { ThemeToggle } from "./theme-toggle";


// const navItems = [
//   { name: "Home", href: "/" },
//   { name: "Blog", href: "/blog" },
//   { name: "Express Interest", href: "/join" },
//   // { name: "Collaborate", href: "/collaborate" },
//   // { name: "Partners", href: "/partners" },
//   // { name: "Welcome", href: "/welcome" },
// ];

// export function Navigation() {
//   const [isOpen, setIsOpen] = useState(false);
//   const pathname = usePathname();

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
//       <div className="container flex h-16 items-center justify-between">
        
//         {/* Logo */}
//         {/* <div className="flex items-center gap-2">
//           <Link href="/" className="flex items-center gap-2">
//              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
//               <span className="font-bold text-primary-foreground">P</span>
//             </div> 
//             <span className="font-bold text-xl">Home</span>
//           </Link>
//         </div>   */}

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center gap-6 pl-10">
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               href={item.href}
//               className={`text-sm font-medium transition-colors hover:text-primary ${
//                 pathname === item.href
//                   ? "text-primary"
//                   : "text-muted-foreground"
//               }`}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </nav>

//         {/* Right side actions */}
//         <div className="flex items-center gap-4 pl-96 pr-10">
//           <ThemeToggle />
          
//           {/* Contact CTA */}
//           <Button size="sm" variant="outline" className="hidden md:flex">
//             <Link href="/contact">Contact</Link>
//           </Button>

//           {/* Mobile menu button */}
//           <button
//             className="md:hidden"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="md:hidden border-t">
//           <div className="container py-4 space-y-3">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 onClick={() => setIsOpen(false)}
//                 className={`block py-2 text-base font-medium ${
//                   pathname === item.href
//                     ? "text-primary"
//                     : "text-muted-foreground"
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//             <Button className="w-full mt-4" asChild>
//               <Link href="/contact" onClick={() => setIsOpen(false)}>
//                 Contact Us
//               </Link>
//             </Button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }