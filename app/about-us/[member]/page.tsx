import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Linkedin, Mail, MapPin, Calendar, Award, Briefcase, GraduationCap, Globe } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

// Team member data with extended details
const teamData = [
  {
    name: "Oluwakeke Richard Dexter",
    role: "Founder & CEO",
    slug: "oluwakeke-richard-dexter",
    bio: "Visionary leader and entrepreneur with a passion for transforming businesses through innovative technology solutions. Expert in strategic planning and business development.",
    image: "/ceo-photo.jpg",
    location: "Lagos, Nigeria",
    linkedin: "#",
    email: "richard@mobiverio.com",
    fullBio:
      "Oluwakeke Richard Dexter is the visionary founder and CEO of Mobiverio Limited. With over 15 years of experience in technology and business leadership, Richard has led the company from a small startup to a respected technology partner for businesses across Africa and beyond. His expertise in strategic planning, business development, and technology innovation has been instrumental in Mobiverio's growth and success. Before founding Mobiverio, Richard held leadership positions at several technology companies and startups, where he developed a deep understanding of the challenges businesses face in digital transformation.",
    education: [
      {
        degree: "MBA, Business Administration",
        institution: "Lagos Business School",
        year: "2015",
      },
      {
        degree: "BSc, Computer Science",
        institution: "University of Lagos",
        year: "2008",
      },
    ],
    expertise: [
      "Strategic Leadership",
      "Business Development",
      "Technology Innovation",
      "Digital Transformation",
      "Entrepreneurship",
    ],
    achievements: [
      "Named Top 40 Under 40 Tech Leaders in Africa (2022)",
      "Led Mobiverio to 300% growth over 3 years",
      "Speaker at Africa Tech Summit (2021, 2022)",
      "Published author on digital transformation strategies",
    ],
    career: [
      {
        position: "Founder & CEO",
        company: "Mobiverio Limited",
        period: "2018 - Present",
      },
      {
        position: "CTO",
        company: "TechAdvance Nigeria",
        period: "2015 - 2018",
      },
      {
        position: "Senior Technology Consultant",
        company: "Accenture",
        period: "2010 - 2015",
      },
    ],
    projects: [
      {
        name: "Trovia Platform Launch",
        description: "Led the development and market launch of Mobiverio's flagship SaaS platform",
        year: "2020",
      },
      {
        name: "TrezzaPay Integration",
        description: "Oversaw the development of blockchain payment solutions for enterprise clients",
        year: "2021",
      },
    ],
  },
  {
    name: "Sule Isaac",
    role: "Co-Founder & CTO",
    slug: "sule-isaac",
    bio: "Technical architect and blockchain specialist with extensive experience in full-stack development and emerging technologies. Leads our engineering excellence.",
    image: "/cto-photo.jpg",
    location: "Abuja, Nigeria",
    linkedin: "#",
    email: "isaac@mobiverio.com",
    fullBio:
      "Sule Isaac is the technical mastermind behind Mobiverio's innovative solutions. As Co-Founder and CTO, he leads the company's engineering team and drives the technical vision for all products and services. With deep expertise in blockchain, AI, and cloud architecture, Isaac ensures that Mobiverio remains at the cutting edge of technology. His passion for clean code, scalable systems, and emerging technologies has been fundamental to the company's reputation for technical excellence. Before co-founding Mobiverio, Isaac was a lead developer at several technology companies where he built enterprise-grade applications and led technical teams.",
    education: [
      {
        degree: "MSc, Computer Engineering",
        institution: "Federal University of Technology, Minna",
        year: "2016",
      },
      {
        degree: "BSc, Software Engineering",
        institution: "Covenant University",
        year: "2012",
      },
    ],
    expertise: [
      "Blockchain Development",
      "System Architecture",
      "Cloud Infrastructure",
      "AI Implementation",
      "Technical Leadership",
    ],
    achievements: [
      "Developed Mobiverio's proprietary blockchain framework",
      "Led team to win Best Technical Innovation Award (2021)",
      "Holds 5 technology patents",
      "Regular contributor to open-source projects",
    ],
    career: [
      {
        position: "Co-Founder & CTO",
        company: "Mobiverio Limited",
        period: "2018 - Present",
      },
      {
        position: "Lead Developer",
        company: "Interswitch",
        period: "2014 - 2018",
      },
      {
        position: "Software Engineer",
        company: "Microsoft (Contract)",
        period: "2012 - 2014",
      },
    ],
    projects: [
      {
        name: "Mobiverio Blockchain Framework",
        description: "Designed and developed the company's proprietary blockchain technology",
        year: "2019",
      },
      {
        name: "AI-Powered Analytics Platform",
        description: "Led the development of machine learning algorithms for business intelligence",
        year: "2022",
      },
    ],
  },
  {
    name: "Dr. Aisha Patel",
    role: "Head of AI & Innovation",
    slug: "dr-aisha-patel",
    bio: "PhD in Machine Learning from Stanford. Former research scientist at Google AI, now leading our AI initiatives.",
    image: "/placeholder.svg?height=300&width=300",
    location: "London, UK",
    linkedin: "#",
    email: "aisha@mobiverio.com",
    fullBio:
      "Dr. Aisha Patel brings world-class expertise in artificial intelligence to Mobiverio. With a PhD in Machine Learning from Stanford University and experience as a research scientist at Google AI, she leads the company's AI and innovation initiatives. Her research has been published in top AI conferences, and she is passionate about applying cutting-edge AI techniques to solve real-world business problems. At Mobiverio, Dr. Patel oversees the development of AI-powered features across all products and services, ensuring that clients benefit from the latest advances in machine learning, natural language processing, and computer vision.",
    education: [
      {
        degree: "PhD, Machine Learning",
        institution: "Stanford University",
        year: "2016",
      },
      {
        degree: "MSc, Computer Science",
        institution: "Imperial College London",
        year: "2012",
      },
      {
        degree: "BSc, Mathematics",
        institution: "University of Oxford",
        year: "2010",
      },
    ],
    expertise: [
      "Machine Learning",
      "Natural Language Processing",
      "Computer Vision",
      "AI Ethics",
      "Research Leadership",
    ],
    achievements: [
      "Published 15+ papers in top AI conferences (NeurIPS, ICML)",
      "Developed AI algorithm used by millions at Google",
      "Recipient of the Women in AI Leadership Award (2020)",
      "Regular speaker at AI conferences worldwide",
    ],
    career: [
      {
        position: "Head of AI & Innovation",
        company: "Mobiverio Limited",
        period: "2021 - Present",
      },
      {
        position: "Research Scientist",
        company: "Google AI",
        period: "2016 - 2021",
      },
      {
        position: "AI Research Intern",
        company: "DeepMind",
        period: "2015 - 2016",
      },
    ],
    projects: [
      {
        name: "Predictive Analytics Engine",
        description: "Developed advanced machine learning models for business forecasting",
        year: "2022",
      },
      {
        name: "Natural Language Processing API",
        description: "Created API for sentiment analysis and text classification",
        year: "2021",
      },
    ],
  },
  {
    name: "James Thompson",
    role: "VP of Engineering",
    slug: "james-thompson",
    bio: "Scalability expert with a track record of building systems that serve millions. Previously at Netflix and Uber.",
    image: "/placeholder.svg?height=300&width=300",
    location: "Toronto, CA",
    linkedin: "#",
    email: "james@mobiverio.com",
    fullBio:
      "James Thompson is a seasoned engineering leader with expertise in building scalable, high-performance systems. As VP of Engineering at Mobiverio, he oversees the development and maintenance of all software products, ensuring they meet the highest standards of quality, security, and performance. With previous experience at Netflix and Uber, James brings valuable insights from companies that operate at massive scale. He is passionate about engineering excellence, DevOps practices, and building resilient systems that can handle rapid growth. Under his leadership, Mobiverio's engineering team has implemented best practices in continuous integration, automated testing, and infrastructure as code.",
    education: [
      {
        degree: "MSc, Software Engineering",
        institution: "University of Toronto",
        year: "2010",
      },
      {
        degree: "BSc, Computer Science",
        institution: "University of Waterloo",
        year: "2008",
      },
    ],
    expertise: ["Scalable Architecture", "DevOps", "Microservices", "Cloud Infrastructure", "Engineering Management"],
    achievements: [
      "Scaled Uber's payment processing system to handle 10M+ transactions daily",
      "Led Netflix's API gateway team",
      "Reduced infrastructure costs by 40% through optimization",
      "Implemented CI/CD pipeline reducing deployment time by 70%",
    ],
    career: [
      {
        position: "VP of Engineering",
        company: "Mobiverio Limited",
        period: "2020 - Present",
      },
      {
        position: "Senior Engineering Manager",
        company: "Uber",
        period: "2016 - 2020",
      },
      {
        position: "Software Engineer",
        company: "Netflix",
        period: "2012 - 2016",
      },
    ],
    projects: [
      {
        name: "Microservices Architecture",
        description: "Led the transition from monolithic to microservices architecture",
        year: "2021",
      },
      {
        name: "Cloud Migration",
        description: "Managed the migration of legacy systems to cloud infrastructure",
        year: "2020",
      },
    ],
  },
  {
    name: "Elena Kowalski",
    role: "Head of Design",
    slug: "elena-kowalski",
    bio: "Award-winning UX designer who believes great design is invisible. Former design lead at Airbnb and Figma.",
    image: "/placeholder.svg?height=300&width=300",
    location: "Berlin, DE",
    linkedin: "#",
    email: "elena@mobiverio.com",
    fullBio:
      "Elena Kowalski is an award-winning designer who leads Mobiverio's design team. With previous experience as a design lead at Airbnb and Figma, she brings a wealth of knowledge in creating intuitive, beautiful, and functional user experiences. Elena believes that great design is invisible – it should feel so natural that users don't even notice it. Her approach combines aesthetic excellence with deep user empathy and data-driven decision making. At Mobiverio, Elena has established a design system that ensures consistency across all products while allowing for flexibility and innovation. Her team works closely with engineering and product to create seamless experiences that delight users.",
    education: [
      {
        degree: "MA, Interaction Design",
        institution: "Royal College of Art, London",
        year: "2012",
      },
      {
        degree: "BA, Graphic Design",
        institution: "Parsons School of Design",
        year: "2010",
      },
    ],
    expertise: ["UX/UI Design", "Design Systems", "User Research", "Interaction Design", "Design Leadership"],
    achievements: [
      "Winner of Red Dot Design Award (2019)",
      "Created Airbnb's mobile design system used by millions",
      "Speaker at multiple design conferences including SXSW",
      "Mentor for Women in Design program",
    ],
    career: [
      {
        position: "Head of Design",
        company: "Mobiverio Limited",
        period: "2021 - Present",
      },
      {
        position: "Senior Product Designer",
        company: "Figma",
        period: "2018 - 2021",
      },
      {
        position: "Design Lead",
        company: "Airbnb",
        period: "2014 - 2018",
      },
    ],
    projects: [
      {
        name: "Mobiverio Design System",
        description: "Created comprehensive design system for all company products",
        year: "2022",
      },
      {
        name: "UX Overhaul",
        description: "Led complete redesign of core product interfaces",
        year: "2021",
      },
    ],
  },
  {
    name: "David Kim",
    role: "VP of Client Success",
    slug: "david-kim",
    bio: "Client relationship expert who ensures every partnership thrives. 12+ years in enterprise sales and success.",
    image: "/placeholder.svg?height=300&width=300",
    location: "Singapore, SG",
    linkedin: "#",
    email: "david@mobiverio.com",
    fullBio:
      "David Kim leads Mobiverio's client success team, ensuring that every client partnership thrives from initial onboarding through long-term growth. With over 12 years of experience in enterprise sales and client success, David has a proven track record of building strong relationships and delivering exceptional value to clients. He believes that client success is about more than just solving problems – it's about proactively identifying opportunities to help clients achieve their business goals. Under David's leadership, Mobiverio has maintained a client retention rate of over 95% and significantly increased client satisfaction scores. His team works closely with clients to understand their unique challenges and ensure they get maximum value from Mobiverio's solutions.",
    education: [
      {
        degree: "MBA, Business Administration",
        institution: "INSEAD",
        year: "2014",
      },
      {
        degree: "BSc, Business & Information Technology",
        institution: "National University of Singapore",
        year: "2008",
      },
    ],
    expertise: [
      "Client Relationship Management",
      "Enterprise Sales",
      "Customer Success",
      "Account Management",
      "Solution Consulting",
    ],
    achievements: [
      "Achieved 95%+ client retention rate at Mobiverio",
      "Grew enterprise accounts by 200% in 2 years",
      "Implemented client success methodology now used company-wide",
      "Named Top Customer Success Leader by CX Magazine (2021)",
    ],
    career: [
      {
        position: "VP of Client Success",
        company: "Mobiverio Limited",
        period: "2019 - Present",
      },
      {
        position: "Director of Customer Success",
        company: "Salesforce",
        period: "2015 - 2019",
      },
      {
        position: "Enterprise Account Manager",
        company: "Oracle",
        period: "2010 - 2015",
      },
    ],
    projects: [
      {
        name: "Client Success Program",
        description: "Developed comprehensive client onboarding and success program",
        year: "2020",
      },
      {
        name: "Enterprise Growth Strategy",
        description: "Created strategy that increased enterprise client base by 150%",
        year: "2021",
      },
    ],
  },
]

export default function TeamMemberPage({ params }: { params: { member: string } }) {
  // Find the team member based on the slug
  const member = teamData.find((m) => m.slug === params.member)

  // If member not found, return 404
  if (!member) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4 border-b">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link href="/about-us" className="hover:text-gray-900">
                About Us
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">{member.name}</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Link
                  href="/about-us"
                  className="inline-flex items-center text-sm font-medium text-red-600 hover:text-red-800 mb-4"
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Back to Team
                </Link>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{member.name}</h1>
                <div className="flex items-center">
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-200 border-0">{member.role}</Badge>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">{member.fullBio}</p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{member.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Mail className="h-4 w-4 mr-2" />
                    <a href={`mailto:${member.email}`} className="hover:text-red-600">
                      {member.email}
                    </a>
                  </div>
                </div>
                <div className="pt-4">
                  <Button className="bg-red-600 hover:bg-red-700">
                    <Linkedin className="h-4 w-4 mr-2" />
                    Connect on LinkedIn
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-red-50 to-slate-100 shadow-xl">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-4 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold">{member.expertise.length}+</div>
                  <div className="text-xs">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <Tabs defaultValue="expertise" className="w-full">
              <TabsList className="grid grid-cols-4 max-w-2xl mx-auto mb-8">
                <TabsTrigger value="expertise">Expertise</TabsTrigger>
                <TabsTrigger value="career">Career</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
              </TabsList>

              <TabsContent value="expertise" className="space-y-6">
                <h2 className="text-2xl font-bold text-center mb-8">Areas of Expertise</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {member.expertise.map((skill, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Globe className="h-6 w-6 text-red-600" />
                        </div>
                        <h3 className="text-lg font-semibold">{skill}</h3>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="career" className="space-y-6">
                <h2 className="text-2xl font-bold text-center mb-8">Career Journey</h2>
                <div className="relative max-w-3xl mx-auto">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                  <div className="space-y-8">
                    {member.career.map((job, index) => (
                      <div key={index} className="relative flex">
                        <div className="absolute left-4 w-4 h-4 bg-red-600 rounded-full transform -translate-x-2 mt-1.5"></div>
                        <div className="ml-10">
                          <h3 className="text-lg font-semibold">{job.position}</h3>
                          <div className="flex items-center text-gray-600 mb-2">
                            <Briefcase className="h-4 w-4 mr-2" />
                            <span>{job.company}</span>
                          </div>
                          <div className="flex items-center text-gray-500 text-sm">
                            <Calendar className="h-3 w-3 mr-2" />
                            <span>{job.period}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="education" className="space-y-6">
                <h2 className="text-2xl font-bold text-center mb-8">Education & Qualifications</h2>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {member.education.map((edu, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                            <GraduationCap className="h-5 w-5 text-red-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{edu.degree}</h3>
                            <div className="text-sm text-gray-600">{edu.institution}</div>
                          </div>
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar className="h-3 w-3 mr-2" />
                          <span>{edu.year}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="achievements" className="space-y-6">
                <h2 className="text-2xl font-bold text-center mb-8">Achievements & Recognition</h2>
                <div className="max-w-3xl mx-auto">
                  {member.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start mb-6">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <Award className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <p className="text-lg">{achievement}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">Key Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {member.projects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold">{project.name}</h3>
                      <Badge variant="outline">{project.year}</Badge>
                    </div>
                    <p className="text-gray-600">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl text-center">
            <h2 className="text-3xl font-bold mb-6">Get in Touch with {member.name.split(" ")[0]}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Have a question for {member.name.split(" ")[0]} or want to discuss how Mobiverio can help your business?
              Reach out directly or schedule a consultation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-red-600 hover:bg-red-700">
                <Mail className="h-4 w-4 mr-2" />
                Send Email
              </Button>
              <Button variant="outline">Schedule a Meeting</Button>
            </div>
          </div>
        </section>

        {/* Team Navigation */}
        <section className="py-16 bg-white border-t">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <h2 className="text-2xl font-bold text-center mb-8">Meet More Team Members</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {teamData
                .filter((t) => t.slug !== member.slug)
                .slice(0, 5)
                .map((teamMember, index) => (
                  <Link href={`/about-us/${teamMember.slug}`} key={index} className="group">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-3 border-2 border-transparent group-hover:border-red-500 transition-all">
                        <Image
                          src={teamMember.image || "/placeholder.svg"}
                          alt={teamMember.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-sm font-medium group-hover:text-red-600 transition-colors">
                        {teamMember.name.split(" ")[0]}
                      </div>
                      <div className="text-xs text-gray-500">{teamMember.role.split("&")[0].trim()}</div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
