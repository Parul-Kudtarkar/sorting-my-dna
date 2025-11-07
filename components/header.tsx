"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (path: string) => {
    return pathname === path ? "font-semibold text-foreground" : "text-muted-foreground hover:text-foreground"
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur smooth-transition">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 smooth-transition hover:opacity-80">
            <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center">
              <span className="text-background font-bold text-xs">PK</span>
            </div>
            <span className="font-semibold text-base hidden sm:inline">Parul Kudtarkar</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`text-sm font-medium transition-colors ${isActive("/")}`}>
              Home
            </Link>
            <Link href="/publications" className={`text-sm font-medium transition-colors ${isActive("/publications")}`}>
              Publications
            </Link>
            <Link href="/art" className={`text-sm font-medium transition-colors ${isActive("/art")}`}>
              Art
            </Link>
            <Link href="/blog" className={`text-sm font-medium transition-colors ${isActive("/blog")}`}>
              Blog
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className={`block px-4 py-2 rounded text-sm font-medium transition-colors ${isActive("/")}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/publications"
              className={`block px-4 py-2 rounded text-sm font-medium transition-colors ${isActive("/publications")}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Publications
            </Link>
            <Link
              href="/art"
              className={`block px-4 py-2 rounded text-sm font-medium transition-colors ${isActive("/art")}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Art
            </Link>
            <Link
              href="/blog"
              className={`block px-4 py-2 rounded text-sm font-medium transition-colors ${isActive("/blog")}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
