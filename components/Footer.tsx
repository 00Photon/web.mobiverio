import Link from "next/link"
import { Code } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "SaaS Development", href: "/services/saas-development" },
        { name: "Custom Software", href: "/services/custom-software" },
        { name: "Mobile Apps", href: "/services/mobile-apps" },
        { name: "Web Development", href: "/services/web-development" },
        { name: "Blockchain Solutions", href: "/services/blockchain" },

      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about-us" },
        { name: "Our Team", href: "/about-us" },
        { name: "Careers", href: "/about-us" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Support", href: "/support" },
      ],
    },
  ]

  return (
    <footer className="w-full py-12 bg-slate-900 border-t border-white/10">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              
              <Link href="/" className="flex items-center">
                <Image src="/logo-red-icon.png" alt="Mobiverio" width={120} height={32} className="h-8 w-auto" />
              </Link>
              <span className="ml-2 text-xl font-bold text-white">Mobiverio Limited</span>
            </div>
            <p className="text-white/60 text-sm">Transforming businesses with next-generation technology solutions.</p>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2 text-sm text-white/60">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-white/60">© {new Date().getFullYear()} Mobiverio Limited. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="#" className="text-xs text-white/60 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-white/60 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
