"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
    // { href: "/blog", label: "Insights" },
  ]

  return (
    <header className="px-6 lg:px-12 h-16 flex items-center justify-between bg-white border-b border-gray-100 fixed top-0 left-0 right-0 z-50">
      <Link href="/" className="flex items-center">
        <Image src="/mobiverio-logo-teal.png" alt="Mobiverio" width={120} height={32} className="h-8 w-auto" />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <Button className="hidden md:flex bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full text-sm font-medium">
        Get Started
      </Button>

      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="sm"
        className="ml-auto md:hidden z-50 relative transition-colors duration-300 hover:scale-110"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          className={`absolute top-16 left-0 right-0 md:hidden transition-all duration-300 z-50 ${
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg">
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-6 py-3">
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white rounded-full">Get Started</Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
