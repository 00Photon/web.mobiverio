import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Target, Lightbulb, Award, Globe, Rocket, Shield, Calendar, MapPin, Linkedin } from "lucide-react"
import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"

export default function AboutUsPage() {
  const milestones = [
    {
      year: "2018",
      title: "The Beginning",
      description: "Founded with a vision to transform how businesses leverage technology",
      details:
        "Started in a small office with just 3 passionate developers, Mobiverio was born from the belief that every business deserves access to cutting-edge technology solutions. Our first project was a simple SaaS tool for local businesses.",
      icon: Rocket,
      color: "bg-blue-500",
    },
    {
      year: "2019",
      title: "First Major Client",
      description: "Secured our first enterprise contract and expanded the team",
      details:
        "Landed a Fortune 500 client who trusted us with their digital transformation. This milestone validated our approach and allowed us to grow our team to 15 talented professionals.",
      icon: Award,
      color: "bg-purple-500",
    },
    {
      year: "2020",
      title: "Blockchain Innovation",
      description: "Launched our blockchain division during the crypto boom",
      details:
        "Recognizing the potential of blockchain technology, we invested heavily in R&D and launched our first decentralized application. This pivot positioned us as pioneers in the Web3 space.",
      icon: Globe,
      color: "bg-green-500",
    },
    {
      year: "2021",
      title: "Global Expansion",
      description: "Opened offices in 3 countries and reached 50+ team members",
      details:
        "Our reputation for delivering exceptional solutions led to international opportunities. We established offices in London, Toronto, and Singapore, truly becoming a global technology partner.",
      icon: Globe,
      color: "bg-orange-500",
    },
    {
      year: "2022",
      title: "AI Integration",
      description: "Integrated AI and machine learning into our core offerings",
      details:
        "As AI became mainstream, we were already ahead of the curve. We integrated machine learning capabilities into our SaaS platforms and helped clients leverage AI for competitive advantage.",
      icon: Lightbulb,
      color: "bg-pink-500",
    },
    {
      year: "2024",
      title: "Industry Leadership",
      description: "Recognized as a top technology partner with 150+ successful projects",
      details:
        "Today, we're proud to be recognized as industry leaders, having delivered over 150 successful projects and maintaining a 98% client satisfaction rate. Our journey continues as we shape the future of technology.",
      icon: Award,
      color: "bg-indigo-500",
    },
  ]

  const team = [
    {
      name: "Oluwakeke Richard Dexter",
      role: "Founder & CEO",
      bio: "Visionary leader and entrepreneur with a passion for transforming businesses through innovative technology solutions. Expert in strategic planning and business development.",
      image: "/richard.jpeg",
      location: "Abuja, Nigeria",
      linkedin: "https://www.linkedin.com/in/engrdexterr",
    },
    
    {
      name: "Israel Shedrach",
      role: "Co-Founder & Head of Business Development",
      bio: "Dynamic business leader with a knack for forging strategic partnerships and driving growth. Passionate about leveraging technology to solve real-world problems.",
      image: "/shedrach.jpeg",
      location: "Abuja, Nigeria",
      linkedin: "#",
    },
    {
      name: "Obiabo Emmanuel",
      role: "CTO",
      bio: "Tech visionary with over 10 years of experience in software development and architecture. Passionate about building scalable, secure, and innovative technology solutions.",
      image: "/placeholder.svg?height=300&width=300",
      location: "Lagos, Nigeria",
      linkedin: "https://www.linkedin.com/in",
    },
    {
      name: "Jerry Ekele",
      role: "Co Founder",
      bio: "Innovative thinker and strategist with a passion for technology and entrepreneurship. Drives our vision and growth.",
      image: "/jerry-photo.jpg",
      location: "Kogi, Nigeria",
      linkedin: "#",
    },
    {
      name: "Oluwaleke Samuel Temidayo",
      role: "Growth Strategist and Head of content",
      bio: "Creative storyteller and content strategist with a passion for technology and innovation. Drives our content vision and strategy.",
      image: "/placeholder.svg?height=300&width=300",
      location: "Abuja, Nigeria",
      linkedin: "#",
    },
    {
      name: "Olagunju Emmanuel Oluwasegun",
      role: "Creative Design Lead",
      bio: "Award-winning UX designer who believes great design is invisible. 6+ years creating intuitive user experiences that delight and engage.",
      image: "/placeholder.svg?height=300&width=300",
      location: "Abuja, Nigeria",
      linkedin: "#",
    }
  ]

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
    <>
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="w-full py-20 bg-gradient-to-br from-slate-50 to-white">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="text-center mb-20">
              <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
                Our Story
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Building the Future,
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {" "}
                  One Solution at a Time
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Since 2018, we've been on a mission to transform how businesses leverage technology. From a small team
                of passionate developers to a global technology partner, our journey is defined by innovation, trust,
                and an unwavering commitment to our clients' success.
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
                        To empower businesses of all sizes with cutting-edge technology solutions that drive growth,
                        enhance efficiency, and create lasting competitive advantages in an ever-evolving digital
                        landscape.
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

        
            {/* Team Section */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Leadership</h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  The visionaries and experts driving innovation at Mobiverio Limited
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {team.map((member, index) => {
                  const memberSlug = member.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[^a-z0-9-]/g, "")
                  return (
                    <Link key={index} href={`/about-us/${memberSlug}`}>
                      <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer">
                        <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 relative overflow-hidden">
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            width={400}
                            height={400}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                        <CardContent className="p-6">
                          <h4 className="text-xl font-semibold mb-1">{member.name}</h4>
                          <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-4">{member.bio}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-xs text-muted-foreground">
                              <MapPin className="h-3 w-3 mr-1" />
                              {member.location}
                            </div>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Linkedin className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Innovation Commitment */}
            <div className="text-center">
              <Card className="bg-gradient-to-br from-slate-900 to-purple-900 border-0 text-white overflow-hidden relative">
                <div className="absolute inset-0">
                  <div className="absolute top-10 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-10 left-10 w-40 h-40 bg-pink-500/20 rounded-full blur-2xl"></div>
                </div>
                <CardContent className="p-8 md:p-12 relative z-10">
                  <div className="max-w-3xl mx-auto">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm mb-6">
                      <Rocket className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Commitment to Innovation</h3>
                    <p className="text-lg leading-relaxed opacity-95 mb-8">
                      Innovation isn't just what we do—it's who we are. We invest 20% of our revenue back into R&D,
                      ensuring we're always at the forefront of emerging technologies. From AI and blockchain to quantum
                      computing and beyond, we're building the solutions of tomorrow, today.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                      <div>
                        <div className="text-3xl font-bold mb-2">20%</div>
                        <div className="text-sm opacity-80">Revenue in R&D</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold mb-2">50+</div>
                        <div className="text-sm opacity-80">Patents Filed</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold mb-2">24/7</div>
                        <div className="text-sm opacity-80">Innovation Lab</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
