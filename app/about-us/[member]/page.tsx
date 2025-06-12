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
    role: "Founder, CEO",
    slug: "oluwakeke-richard-dexter",
    bio: "Visionary leader and entrepreneur with a passion for transforming businesses through innovative technology solutions. Expert in strategic planning and business development.",
    image: "/cto-photo.jpg",
    location: "Abuja, Nigeria",
    linkedin: "https://www.linkedin.com/in/engrdexterr",
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
    name: "Israel Shedrach",
    role: "Co-Founder, Head Business Development",
    slug: "israel-shedrach",
    bio: "Dynamic business leader with a knack for forging strategic partnerships and driving growth. Passionate about leveraging technology to solve real-world problems.",
    image: "/shedrach.jpeg",
    location: "Abuja, Nigeria",
    linkedin: "#",
    email: "israel@mobiverio.com",
    fullBio:
      "Israel Shedrach is a dynamic business leader and Co-Founder at Mobiverio, where he serves as the Head of Business Development. With a knack for forging strategic partnerships and driving growth, Shedrach has been pivotal in expanding Mobiverio’s market presence. His passion for leveraging technology to solve real-world problems has led to numerous successful collaborations with businesses across various sectors. Before co-founding Mobiverio, Shedrach held key business development roles, where he honed his skills in market expansion and partnership building.",
    education: [
      {
        degree: "MSc, Business Management",
        institution: "University of Abuja",
        year: "2017",
      },
      {
        degree: "BSc, Economics",
        institution: "Covenant University",
        year: "2013",
      },
    ],
    expertise: [
      "Business Development",
      "Strategic Partnerships",
      "Market Expansion",
      "Technology Solutions",
      "Leadership",
    ],
    achievements: [
      "Secured 10+ strategic partnerships for Mobiverio",
      "Drove 200% revenue growth through new client acquisitions",
      "Speaker at Nigeria Business Summit (2022)",
      "Mentor for young entrepreneurs in Nigeria",
    ],
    career: [
      {
        position: "Co-Founder & Head of Business Development",
        company: "Mobiverio Limited",
        period: "2018 - Present",
      },
      {
        position: "Business Development Manager",
        company: "TechTrend Innovations",
        period: "2015 - 2018",
      },
      {
        position: "Sales Executive",
        company: "Global Solutions Ltd",
        period: "2013 - 2015",
      },
    ],
    projects: [
      {
        name: "Market Expansion Strategy",
        description: "Developed and executed a strategy to expand Mobiverio’s presence in West Africa",
        year: "2020",
      },
      {
        name: "Strategic Partnership Program",
        description: "Led the creation of a partnership program with key industry players",
        year: "2021",
      },
    ],
  },
  {
    name: "Obiabo Emmanuel",
    role: "CTO",
    slug: "obiabo-emmanuel",
    bio: "Tech visionary with over 10 years of experience in software development and architecture. Passionate about building scalable, secure, and innovative technology solutions.",
    image: "/placeholder.svg?height=300&width=300",
    location: "Lagos, Nigeria",
    linkedin: "https://www.linkedin.com/in",
    email: "emmanuel@mobiverio.com",
    fullBio:
      "Obiabo Emmanuel is the CTO at Mobiverio, bringing over a decade of experience in software development and architecture. A tech visionary, he is passionate about building scalable, secure, and innovative technology solutions that drive business success. Emmanuel leads Mobiverio’s engineering team, overseeing the development of cutting-edge products and ensuring technical excellence. His expertise spans full-stack development, cloud architecture, and cybersecurity, making him a key driver of Mobiverio’s technical innovation.",
    education: [
      {
        degree: "MSc, Computer Science",
        institution: "University of Lagos",
        year: "2016",
      },
      {
        degree: "BSc, Computer Engineering",
        institution: "Obafemi Awolowo University",
        year: "2012",
      },
    ],
    expertise: [
      "Software Development",
      "System Architecture",
      "Cloud Computing",
      "Cybersecurity",
      "Technical Leadership",
    ],
    achievements: [
      "Led development of Mobiverio’s secure SaaS platform",
      "Implemented cloud-based solutions reducing costs by 30%",
      "Speaker at Nigeria Tech Summit (2022)",
      "Certified Ethical Hacker (CEH)",
    ],
    career: [
      {
        position: "CTO",
        company: "Mobiverio Limited",
        period: "2019 - Present",
      },
      {
        position: "Senior Software Engineer",
        company: "Andela",
        period: "2016 - 2019",
      },
      {
        position: "Software Developer",
        company: "Interswitch",
        period: "2012 - 2016",
      },
    ],
    projects: [
      {
        name: "Secure SaaS Platform",
        description: "Led the development of Mobiverio’s secure SaaS platform",
        year: "2020",
      },
      {
        name: "Cloud Infrastructure Optimization",
        description: "Optimized cloud infrastructure for scalability and cost efficiency",
        year: "2021",
      },
    ],
  },
  {
    name: "Jerry Ekele",
    role: "Co Founder, Chief Strategy Officer",
    slug: "jerry-ekele",
    bio: "Innovative thinker and strategist with a passion for technology and entrepreneurship. Drives our vision and growth.",
    image: "/jerry-photo.jpg",
    location: "Kogi, Nigeria",
    linkedin: "#",
    email: "jerry@mobiverio.com",
    fullBio:
      "Jerry Ekele is a Co-Founder at Mobiverio, bringing a unique blend of innovative thinking and strategic expertise to the company. With a passion for technology and entrepreneurship, Jerry plays a key role in driving Mobiverio’s vision and growth. His ability to identify market opportunities and align them with the company’s goals has been instrumental in shaping Mobiverio’s strategic direction. Prior to Mobiverio, Jerry worked in various entrepreneurial ventures, where he developed a strong foundation in business strategy and innovation.",
    education: [
      {
        degree: "BSc, Business Administration",
        institution: "Ahmadu Bello University",
        year: "2014",
      },
    ],
    expertise: [
      "Entrepreneurship",
      "Business Strategy",
      "Market Analysis",
      "Innovation Management",
      "Leadership",
    ],
    achievements: [
      "Co-founded Mobiverio and scaled operations across Nigeria",
      "Developed strategic growth plan increasing market share by 25%",
      "Mentor at Startup Nigeria (2021)",
      "Recognized as Emerging Entrepreneur of the Year (2020)",
    ],
    career: [
      {
        position: "Co-Founder",
        company: "Mobiverio Limited",
        period: "2018 - Present",
      },
      {
        position: "Business Strategist",
        company: "StartUp Ventures",
        period: "2015 - 2018",
      },
      {
        position: "Entrepreneurial Consultant",
        company: "Independent",
        period: "2014 - 2015",
      },
    ],
    projects: [
      {
        name: "Growth Strategy Framework",
        description: "Developed a framework for sustainable business growth",
        year: "2019",
      },
      {
        name: "Market Entry Plan",
        description: "Led the creation of a market entry plan for new regions",
        year: "2020",
      },
    ],
  },
  {
    name: "Oluwaleke Samuel Temidayo",
    role: "Growth Strategist and Head of Content",
    slug: "oluwaleke-samuel-temidayo",
    bio: "Creative storyteller and content strategist with a passion for technology and innovation. Drives our content vision and strategy.",
    image: "/placeholder.svg?height=300&width=300",
    location: "Abuja, Nigeria",
    linkedin: "#",
    email: "samuel@mobiverio.com",
    fullBio:
      "Oluwaleke Samuel Temidayo is the Growth Strategist and Head of Content at Mobiverio. A creative storyteller, Samuel drives the company’s content vision and strategy, ensuring that Mobiverio’s brand resonates with its audience. His passion for technology and innovation allows him to craft compelling narratives that highlight the value of Mobiverio’s solutions. Samuel’s expertise in content marketing and growth strategies has significantly increased Mobiverio’s brand visibility and engagement.",
    education: [
      {
        degree: "BSc, Mass Communication",
        institution: "University of Abuja",
        year: "2015",
      },
    ],
    expertise: [
      "Content Strategy",
      "Digital Marketing",
      "Storytelling",
      "Brand Management",
      "Growth Hacking",
    ],
    achievements: [
      "Increased brand engagement by 150% through content campaigns",
      "Developed Mobiverio’s content marketing playbook",
      "Speaker at Content Marketing Summit Africa (2022)",
      "Published articles on tech innovation in leading publications",
    ],
    career: [
      {
        position: "Growth Strategist and Head of Content",
        company: "Mobiverio Limited",
        period: "2019 - Present",
      },
      {
        position: "Content Manager",
        company: "TechTrend Media",
        period: "2016 - 2019",
      },
      {
        position: "Digital Marketing Specialist",
        company: "Creative Solutions Ltd",
        period: "2015 - 2016",
      },
    ],
    projects: [
      {
        name: "Brand Awareness Campaign",
        description: "Led a campaign that boosted Mobiverio’s online presence by 200%",
        year: "2020",
      },
      {
        name: "Content Strategy Overhaul",
        description: "Developed a comprehensive content strategy for all digital platforms",
        year: "2021",
      },
    ],
  },
  {
    name: "Dauda Gbolahan",
    role: "Head of product design",
    slug: "dauda-gbolahan",
    bio: "Innovative tech leader with a passion for developing cutting-edge solutions. Over 10 years of experience in software development and team management.",
    image: "/placeholder.svg?height=300&width=300",
    location: "Lagos, Nigeria",
    linkedin: "#",
    email: "dauda@mobiverio.com",
    fullBio:
      "Dauda Gbolahan is the Head of Product Design at Mobiverio, where he leads the design and development of innovative product solutions. With over 10 years of experience in software development and team management, Dauda is passionate about leveraging technology to drive business success. He has a proven track record of delivering complex projects on time and within budget, and his leadership has been instrumental in establishing Mobiverio as a leader in the tech industry.",
    education: [
      {
        degree: "BSc, Computer Science",
        institution: "University of Lagos",
        year: "2012",
      },
    ],
    expertise: [
      "Software Development",
      "Cloud Computing",
      "DevOps",
      "Team Leadership",
      "Agile Methodologies",
    ],
    achievements: [
      "Winner of Nigeria Design Awards (2021)",
      "Designed Mobiverio’s flagship product interface",
      "Mentor for young designers at Design Africa",
      "Speaker at UX Nigeria Conference (2022)",
    ],
    career: [
      {
        position: "Creative Design Lead",
        company: "Mobiverio Limited",
        period: "2019 - Present",
      },
      {
        position: "Senior UX Designer",
        company: "DesignHub Nigeria",
        period: "2017 - 2019",
      },
      {
        position: "Graphic Designer",
        company: "Creative Studio",
        period: "2016 - 2017",
      },
    ],
    projects: [
      {
        name: "Product Interface Redesign",
        description: "Led the redesign of Mobiverio’s core product interface",
        year: "2020",
      },
      {
        name: "Design System Development",
        description: "Created a scalable design system for Mobiverio’s products",
        year: "2021",
      },
    ],
  },
  {
    name: "Olagunju Emmanuel Oluwasegun",
    role: "Creative Designer",
    slug: "olagunju-emmanuel-oluwasegun",
    bio: "Award-winning UX designer who believes great design is invisible. 6+ years creating intuitive user experiences that delight and engage.",
    image: "/placeholder.svg?height=300&width=300",
    location: "Abuja, Nigeria",
    linkedin: "#",
    email: "olagunju@mobiverio.com",
    fullBio:
      "Olagunju Emmanuel Oluwasegun is the Creative Designer at Mobiverio, where he oversees the creation of intuitive and engaging user experiences. An award-winning UX designer, Emmanuel believes that great design should be invisible, seamlessly enhancing the user’s interaction with technology. With over six years of experience, he has a proven track record of designing user-friendly interfaces that delight and engage. Emmanuel’s leadership has been key in establishing Mobiverio’s design standards and ensuring a consistent user experience across all products.",
    education: [
      {
        degree: "BSc, Computer Science",
        institution: "University of Lagos",
        year: "2012",
      },
    ],
    expertise: [
      "Software Development",
      "Cloud Computing",
      "DevOps",
      "Team Leadership",
      "Agile Methodologies",
    ],
    achievements: [
      "Winner of Nigeria Design Awards (2021)",
      "Designed Mobiverio’s flagship product interface",
      "Mentor for young designers at Design Africa",
      "Speaker at UX Nigeria Conference (2022)",
    ],
    career: [
      {
        position: "Creative Design Lead",
        company: "Mobiverio Limited",
        period: "2019 - Present",
      },
      {
        position: "Senior UX Designer",
        company: "DesignHub Nigeria",
        period: "2017 - 2019",
      },
      {
        position: "Graphic Designer",
        company: "Creative Studio",
        period: "2016 - 2017",
      },
    ],
    projects: [
      {
        name: "Product Interface Redesign",
        description: "Led the redesign of Mobiverio’s core product interface",
        year: "2020",
      },
      {
        name: "Design System Development",
        description: "Created a scalable design system for Mobiverio’s products",
        year: "2021",
      },
    ],
  }
];

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
