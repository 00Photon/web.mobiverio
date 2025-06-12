"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-white pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Dots */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`dot-${i}`}
            className="absolute w-2 h-2 bg-red-200/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          />
        ))}

        {/* Subtle Grid Lines */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      <div className="container px-6 lg:px-12 relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6 order-1 lg:order-1">
            <div
              className={`space-y-4 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <p className="text-sm font-medium text-gray-600 tracking-wide uppercase animate-fade-in-up">
                Technology Solutions
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span
                  className={`inline-block transition-all duration-700 delay-400 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                >
                  Transform Your{" "}
                </span>
                <span
                  className={`inline-block text-red-500 transition-all duration-700 delay-600 ${
                    isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-5 scale-95"
                  }`}
                >
                  Business
                </span>
                <br />
                <span
                  className={`inline-block transition-all duration-700 delay-800 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                >
                  with Technology
                </span>
              </h1>
              <p
                className={`text-lg text-gray-600 leading-relaxed max-w-lg transition-all duration-700 delay-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
              >
                We craft powerful SaaS platforms, blockchain solutions, and enterprise applications that drive
                innovation and accelerate your business growth.
              </p>
            </div>

        <div
          className={`pt-4 mb-32 md:mb-16 transition-all duration-700 delay-1200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <Button
            className="group bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden md:block hidden"
          >
            <span className="relative z-10">Start Your Project</span>
            {/* Button shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </Button>
        </div>
          </div>

          {/* Right Content */}
          <div className="relative flex justify-center lg:justify-end order-2 lg:order-2 mt-8 lg:mt-0">
            {/* Background Circle with pulse animation */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full opacity-40 animate-pulse-slow"></div>
            </div>

            {/* Stats Badge with slide-in animation */}
            <div
              className={`absolute top-4 left-4 lg:top-8 lg:left-8 z-20 transition-all duration-700 delay-1400 ${
                isVisible ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 -translate-x-4 -translate-y-4"
              }`}
            >
              <div className="bg-orange-100 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform">
                <div className="text-2xl font-bold text-gray-800 animate-count-up">150+</div>
                <div className="text-xs text-gray-600">Projects Delivered</div>
              </div>
            </div>

            {/* Hero Image with scale animation */}
            <div
              className={`relative z-10 w-80 h-80 lg:w-96 lg:h-96 flex items-center justify-center transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-90 rotate-3"
              }`}
            >
              <div className="relative group">
                <Image
                  src="/hero-vr-woman.jpg"
                  alt="Professional using VR technology for business innovation"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
                />
                {/* Image overlay effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-red-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.05); opacity: 0.6; }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes count-up {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }

        .animate-float {
          animation: float infinite ease-in-out;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        .animate-count-up {
          animation: count-up 0.8s ease-out 1.6s both;
        }
      `}</style>
    </section>
  )
}
