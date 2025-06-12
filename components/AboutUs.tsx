"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Lightbulb, Shield, Users } from "lucide-react"

export default function AboutUs() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "We push the boundaries of technology to create solutions that don't just meet today's needs, but anticipate tomorrow's challenges.",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description:
        "Every line of code we write is built with security in mind. Your data and your users' trust are our highest priorities.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Client Partnership",
      description:
        "We don't just build software; we build lasting partnerships. Your success is our success, and we're with you every step of the way.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Target,
      title: "Excellence Driven",
      description:
        "Good enough isn't good enough. We strive for excellence in every project, every interaction, and every solution we deliver.",
      gradient: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section id="about" className="w-full py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
            Our Story
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Building the Future,
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}
              One Solution at a Time
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Since 2018, we've been on a mission to transform how businesses leverage technology. From a small team of
            passionate developers to a global technology partner, our journey is defined by innovation, trust, and an
            unwavering commitment to our clients' success.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-20">
          <Card className="bg-gradient-to-r from-purple-600 to-pink-600 border-0 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-black/10"></div>
            <CardContent className="p-8 md:p-12 relative z-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
                  <p className="text-lg leading-relaxed opacity-95">
                    To empower businesses of all sizes with cutting-edge technology solutions that drive growth, enhance
                    efficiency, and create lasting competitive advantages in an ever-evolving digital landscape.
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-32 h-32 bg-white/20 rounded-full backdrop-blur-sm">
                    <Target className="h-16 w-16 text-white" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide every decision we make and every solution we build
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold mb-3">{value.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Innovation Commitment */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-slate-900 to-teal-900 border-0 text-white overflow-hidden relative">
            <div className="absolute inset-0">
              <div className="absolute top-10 right-10 w-32 h-32 bg-red-500/20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 left-10 w-40 h-40 bg-teal-500/20 rounded-full blur-2xl"></div>
            </div>
            <CardContent className="p-8 md:p-12 relative z-10">
              <div className="max-w-3xl mx-auto">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm mb-6">
                  <Lightbulb className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Commitment to Innovation</h3>
                <p className="text-lg leading-relaxed opacity-95 mb-8">
                  Innovation isn't just what we do—it's who we are. We invest 20% of our revenue back into R&D, ensuring
                  we're always at the forefront of emerging technologies. From AI and blockchain to quantum computing
                  and beyond, we're building the solutions of tomorrow, today.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold mb-2 text-red-400">20%</div>
                    <div className="text-sm opacity-80">Revenue in R&D</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2 text-teal-400">50+</div>
                    <div className="text-sm opacity-80">Patents Filed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2 text-red-400">24/7</div>
                    <div className="text-sm opacity-80">Innovation Lab</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
