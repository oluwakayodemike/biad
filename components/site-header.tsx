"use client"

import { useState } from "react"
import { Menu, Search, ShoppingBag } from "lucide-react"
import { BiadLogo } from "@/components/biad-logo"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navLinks = [
  { label: "NEW DROPS", href: "#" },
  { label: "SHOP ALL", href: "#" },
  { label: "COLLECTIONS", href: "#" },
  { label: "LOOKBOOK", href: "#" },
  { label: "ABOUT", href: "#" },
  { label: "CONTACT", href: "#" },
]

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md">
      <div className="flex h-14 items-center justify-between px-4 md:h-16 md:px-8 lg:px-12">
        {/* Hamburger */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button
              className="flex items-center justify-center text-foreground transition-opacity hover:opacity-60"
              aria-label="Open menu"
            >
              <Menu className="size-6" strokeWidth={1.5} />
            </button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-full max-w-full border-border bg-background sm:max-w-lg"
          >
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <nav className="mt-20 flex flex-col">
              {navLinks.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-baseline border-b border-border px-6 py-5 transition-opacity hover:opacity-60"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <span className="mr-4 font-sans text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-4xl tracking-[0.1em] text-foreground md:text-5xl">
                    {link.label}
                  </span>
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo - centered */}
        <a href="/" className="absolute left-1/2 -translate-x-1/2">
          <BiadLogo />
        </a>

        {/* Right icons */}
        <div className="ml-auto flex items-center">
          <button
            className="flex items-center justify-center p-2 text-foreground transition-opacity hover:opacity-60"
            aria-label="Search"
          >
            <Search className="size-5" strokeWidth={1.5} />
          </button>
          <span className="mx-1 text-border select-none" aria-hidden="true">|</span>
          <button
            className="flex items-center justify-center p-2 text-foreground transition-opacity hover:opacity-60"
            aria-label="Shopping bag"
          >
            <ShoppingBag className="size-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </header>
  )
}
