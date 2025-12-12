// app/partners/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, TrendingUp, Handshake, ArrowRight, Star } from "lucide-react";
import PartnerForm from "@/components/partner-form";
import Link from "next/link";

const benefits = [
  {
    icon: "💰",
    title: "Recurring Commissions",
    description: "Earn 15-25% on every project you refer, paid monthly"
  },
  {
    icon: "🤝",
    title: "White Label Options",
    description: "Offer our services under your brand with full support"
  },
  {
    icon: "🚀",
    title: "Quick Onboarding",
    description: "Get started in 24 hours with dedicated partner manager"
  },
  {
    icon: "📈",
    title: "Performance Bonuses",
    description: "Extra bonuses for high-value or long-term clients"
  },
  {
    icon: "🎯",
    title: "Lead Sharing",
    description: "We'll refer overflow clients to qualified partners"
  },
  {
    icon: "🛠️",
    title: "Resources & Training",
    description: "Access to sales kits, case studies, and training materials"
  }
];

const services = [
  "Web Development",
  "Mobile Apps", 
  "UI/UX Design",
  "E-commerce Solutions",
  "Digital Marketing",
  "SEO & Content",
  "Brand Identity",
  "Web Maintenance"
];

export default function PartnersPage() {
  return (
    <div className="container py-12">
      {/* Hero Section */}
      <div className="text-center mb-12 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
          <Handshake className="h-4 w-4" />
          <span className="text-sm font-medium">Partner Program</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Partner with <span className="text-primary">Pursuit Digital</span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8">
          Join our network of agencies, freelancers, and consultants. 
          Expand your service offerings while earning recurring commissions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="#apply">
              Apply Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">
              Schedule Intro Call
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">15-25%</p>
                <p className="text-sm text-muted-foreground">Commission Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">50+</p>
                <p className="text-sm text-muted-foreground">Active Partners</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">4.8/5</p>
                <p className="text-sm text-muted-foreground">Partner Satisfaction</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* How It Works */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { 
              step: "1", 
              title: "Apply & Approve", 
              desc: "Complete our partner application",
              detail: "24-hour review process"
            },
            { 
              step: "2", 
              title: "Onboard", 
              desc: "Get partner resources & training",
              detail: "Dedicated account manager"
            },
            { 
              step: "3", 
              title: "Refer Clients", 
              desc: "Share client opportunities",
              detail: "Use our sales materials"
            },
            { 
              step: "4", 
              title: "Earn Commissions", 
              desc: "Receive monthly payments",
              detail: "15-25% recurring commission"
            }
          ].map((item) => (
            <Card key={item.step} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>{item.desc}</p>
                <p className="text-sm text-primary font-medium">{item.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Partner Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <CardTitle className="text-lg">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <Card className="mb-16">
        <CardHeader>
          <CardTitle>Services You Can Offer</CardTitle>
          <CardDescription>
            We handle the delivery, you manage the relationship
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((service) => (
              <div key={service} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Partner Types */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Who Should Apply?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Digital Agencies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Expand service offerings</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Handle overflow projects</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>White label opportunities</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Freelancers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Take on larger projects</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Focus on your core skills</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Build recurring income</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Consultants
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Offer complete solutions</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Refer implementation work</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Strategic partnerships</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Application Form */}
      <div id="apply" className="scroll-mt-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Partner?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Complete the application below. Our partnership team will review 
            and contact you within 24 hours.
          </p>
        </div>
        
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>Partner Application</CardTitle>
            <CardDescription>
              Please fill in all required fields. We&apos;ll use this information 
              to evaluate partnership fit.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <PartnerForm />
          </CardContent>
        </Card>
      </div>

      {/* FAQ Section */}
      <div className="mt-16 max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>
        <div className="space-y-6">
          {[
            {
              q: "How are commissions paid?",
              a: "Commissions are paid monthly via bank transfer, PayPal, or Wise. You'll receive payments on the 15th of each month for the previous month's billings."
            },
            {
              q: "Is there a minimum referral requirement?",
              a: "No minimum requirements. You earn commissions on every successful referral, whether it's one project or ten."
            },
            {
              q: "Can I white-label your services?",
              a: "Yes! We offer white-label options for qualified partners. All work is delivered under your brand with full confidentiality."
            },
            {
              q: "How quickly will I get a response to my application?",
              a: "We review applications within 24 hours and will schedule an intro call if there's a good fit."
            }
          ].map((faq, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{faq.q}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}














// // app/partners/page.tsx
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { CheckCircle, Users, TrendingUp, Handshake } from "lucide-react";

// const benefits = [
//   {
//     icon: "💰",
//     title: "Recurring Commissions",
//     description: "Earn 15-20% on every project you refer, paid monthly for contract duration"
//   },
//   {
//     icon: "🤝",
//     title: "White Label Options",
//     description: "Offer our services under your brand with full support"
//   },
//   {
//     icon: "🚀",
//     title: "Quick Onboarding",
//     description: "Get started in 24 hours with our partner portal"
//   },
//   {
//     icon: "📈",
//     title: "Performance Bonuses",
//     description: "Extra bonuses for high-value or long-term clients"
//   }
// ];

// export default function PartnersPage() {
//   return (
//     <div className="container py-12">
//       {/* Hero */}
//       <div className="text-center mb-12">
//         <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
//           <Handshake className="h-4 w-4" />
//           <span className="text-sm font-medium">Partner Program</span>
//         </div>
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">
//           Grow Your Agency <span className="text-primary">Together</span>
//         </h1>
//         <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//           Partner with us to offer premium digital services while earning recurring commissions.
//           Perfect for agencies, freelancers, and consultants.
//         </p>
//       </div>

//       {/* Stats */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//         <Card>
//           <CardContent className="pt-6">
//             <div className="flex items-center gap-4">
//               <div className="p-3 bg-primary/10 rounded-lg">
//                 <TrendingUp className="h-8 w-8 text-primary" />
//               </div>
//               <div>
//                 <p className="text-2xl font-bold">15-20%</p>
//                 <p className="text-sm text-muted-foreground">Commission Rate</p>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardContent className="pt-6">
//             <div className="flex items-center gap-4">
//               <div className="p-3 bg-primary/10 rounded-lg">
//                 <Users className="h-8 w-8 text-primary" />
//               </div>
//               <div>
//                 <p className="text-2xl font-bold">50+</p>
//                 <p className="text-sm text-muted-foreground">Active Partners</p>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardContent className="pt-6">
//             <div className="flex items-center gap-4">
//               <div className="p-3 bg-primary/10 rounded-lg">
//                 <CheckCircle className="h-8 w-8 text-primary" />
//               </div>
//               <div>
//                 <p className="text-2xl font-bold">24h</p>
//                 <p className="text-sm text-muted-foreground">Onboarding Time</p>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/* How It Works */}
//       <div className="mb-12">
//         <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//           {[
//             { step: "1", title: "Apply", desc: "Fill our partner application" },
//             { step: "2", title: "Onboard", desc: "Get access to resources" },
//             { step: "3", title: "Refer", desc: "Share client opportunities" },
//             { step: "4", title: "Earn", desc: "Receive monthly commissions" }
//           ].map((item) => (
//             <Card key={item.step} className="text-center">
//               <CardHeader>
//                 <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
//                   {item.step}
//                 </div>
//                 <CardTitle>{item.title}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-muted-foreground">{item.desc}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>

//       {/* Benefits */}
//       <div className="mb-12">
//         <h2 className="text-3xl font-bold text-center mb-8">Partner Benefits</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {benefits.map((benefit) => (
//             <Card key={benefit.title}>
//               <CardHeader>
//                 <div className="text-3xl mb-2">{benefit.icon}</div>
//                 <CardTitle className="text-lg">{benefit.title}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <CardDescription>{benefit.description}</CardDescription>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>

//       {/* Services We Handle */}
//       <Card className="mb-12">
//         <CardHeader>
//           <CardTitle>Services You Can Refer</CardTitle>
//           <CardDescription>
//             We handle everything so you can focus on client relationships
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {[
//               "Web Development", "Mobile Apps", "UI/UX Design", 
//               "E-commerce", "Digital Marketing", "SEO", 
//               "Content Creation", "Branding"
//             ].map((service) => (
//               <div key={service} className="flex items-center gap-2">
//                 <CheckCircle className="h-4 w-4 text-green-500" />
//                 <span>{service}</span>
//               </div>
//             ))}
//           </div>
//         </CardContent>
//       </Card>

//       {/* CTA */}
//       <div className="text-center">
//         <Card className="max-w-2xl mx-auto bg-linear-to-r from-primary/5 to-primary/10">
//           <CardContent className="pt-8">
//             <h3 className="text-2xl font-bold mb-4">Ready to Partner?</h3>
//             <p className="text-muted-foreground mb-6">
//               Join 50+ agencies already earning with us. No fees, no minimums.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button size="lg" asChild>
//                 <a href="/partners/apply">Apply Now</a>
//               </Button>
//               <Button size="lg" variant="outline" asChild>
//                 <a href="/contact">Schedule a Call</a>
//               </Button>
//             </div>
//             <p className="text-sm text-muted-foreground mt-4">
//               Response within 24 hours
//             </p>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }