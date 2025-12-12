'use client';

import ChangeJourneyButton from "@/components/ChangeJourneyButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useState } from "react";


// app/join/page.tsx with role cards
const roles = [
  
  {
    title: "Design",
    description: "UI/UX, Product Design, Branding",
    icon: "🎨",
    skills: ["Figma", "Adobe Suite", "User Research", "Prototyping"]
  },
  {
    title: "Development",
    description: "Frontend, Backend, Full Stack, DevOps",
    icon: "💻",
    skills: ["React", "Node.js", "TypeScript", "AWS"]
  },
  {
    title: "Marketing",
    description: "Digital Marketing, Content, SEO",
    icon: "📈",
    skills: ["SEO", "Content Strategy", "Social Media", "Analytics"]
  },
  {
    title: "Business",
    description: "Sales, Operations, Strategy",
    icon: "📊",
    skills: ["Sales", "Operations", "Strategy", "Analysis"]
  }
];



export default function JoinPage() {
  const [journey] = useState<string | null>(() => {
    return typeof window !== "undefined" ? localStorage.getItem("pursuit-journey") : null;
  });
  return (
    <div className="container px-2.5 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Build <span className="italic"> with</span> <br /> <span className="text-primary">Pursuit Digital Services</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We&apos;re collecting talent for our future growth. 
          Join our talent pool and be the first to know about opportunities.
        </p>
      </div>

      {/* Role Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {roles.map((role) => (
          <Card key={role.title} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="text-3xl mb-2">{role.icon}</div>
              <CardTitle>{role.title}</CardTitle>
              <CardDescription>{role.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {role.skills.map((skill) => (
                  <span key={skill} className="text-xs px-2 py-1 bg-secondary rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Application Form */}
      
      <Card className="max-w-3xl mx-auto">
        {/* Form similar to Option 1 but enhanced */}
      </Card>

      <Card className="max-w-3xl p-5 mx-auto">
         <h1 className="text-3xl text-gray-300 font-bold mb-4">Pursuit Digital Services</h1>

      {!journey && (
        
        <p className="text-gray-300">
        Welcome! Please tell us about your digital journey on{" "}
        <Link 
          href="/contact" 
          className="text-cyan-500 underline hover:text-cyan-400 transition-colors"
        >
          Work with Pursuit Digital Services
        </Link>
      </p>
            )}

            {journey === "starting" && (
              <p className="text-lg text-gray-300">
                🚀 You’re just starting your digital journey. Explore our beginner
                guides and starter packages.
              </p>
            )}

            {journey === "scaling" && (
              <p className="text-lg text-gray-300">
                📈 You’re scaling up! Let’s talk about growth strategies and advanced
                tools.
              </p>
            )}

            {journey === "guidance" && (
              <p className="text-lg text-gray-300">
                🤝 You need expert guidance. Check out our consulting services and
                case studies.
              </p>
            )}

            {journey && <ChangeJourneyButton />} 
      </Card>
    </div>
  );
}












// // app/join/page.tsx
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { Mail, Upload } from "lucide-react";

// export default function JoinPage() {
//   return (
//     <div className="container max-w-4xl py-12">
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
//         <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//           We&apos;re building something amazing. While we&apos;re not hiring immediately, 
//           we&apos;d love to connect with talented individuals for future opportunities.
//         </p>
//       </div>

//       <Card className="max-w-2xl mx-auto">
//         <CardHeader>
//           <CardTitle>Express Interest</CardTitle>
//           <CardDescription>
//             Share your details and we&apos;ll reach out when opportunities match your skills.
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="space-y-2">
//                 <Label htmlFor="name">Full Name</Label>
//                 <Input id="name" placeholder="John Doe" required />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="email">Email</Label>
//                 <Input id="email" type="email" placeholder="john@example.com" required />
//               </div>
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="role">Role you&apos;re interested in</Label>
//               <Input id="role" placeholder="e.g., Frontend Developer, UX Designer, etc." />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="skills">Key Skills & Expertise</Label>
//               <Textarea 
//                 id="skills" 
//                 placeholder="React, TypeScript, UI/UX, Project Management..." 
//                 rows={3}
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="portfolio">Portfolio/LinkedIn/GitHub</Label>
//               <Input id="portfolio" placeholder="https://" />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="message">Additional Message</Label>
//               <Textarea 
//                 id="message" 
//                 placeholder="Tell us about yourself and why you&apos;d like to work with us..." 
//                 rows={4}
//               />
//             </div>

//             <div className="flex items-center gap-2 text-sm text-muted-foreground">
//               <Mail className="h-4 w-4" />
//               <span>We&apos;ll contact you within 48 hours</span>
//             </div>

//             <Button type="submit" className="w-full" size="lg">
//               Submit Interest
//             </Button>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }