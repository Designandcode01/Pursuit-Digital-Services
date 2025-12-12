// components/partner-form.tsx - SIMPLIFIED VERSION
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2, CheckCircle } from "lucide-react";

export default function PartnerForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold mb-4">Application Submitted!</h3>
        <p className="text-muted-foreground mb-6">
          Thank you for your interest. We ll contact you within 24 hours.
        </p>
        <Button onClick={() => setIsSubmitted(false)}>
          Submit Another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="companyName">Company Name *</Label>
        <Input
          id="companyName"
          value={formData.companyName}
          onChange={(e) => setFormData({...formData, companyName: e.target.value})}
          placeholder="Your company name"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="contactName">Contact Person *</Label>
        <Input
          id="contactName"
          value={formData.contactName}
          onChange={(e) => setFormData({...formData, contactName: e.target.value})}
          placeholder="Full name"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          placeholder="contact@company.com"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Tell us about your business</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          placeholder="What services do you offer? Why partner with us?"
          rows={4}
        />
      </div>

      <Button 
        type="submit" 
        className="w-full" 
        size="lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          'Submit Application'
        )}
      </Button>
    </form>
  );
}









// // components/partner-form.tsx
// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Loader2, CheckCircle } from "lucide-react";
// import { DropdownMenuCheckboxItem } from "./ui/dropdown-menu";

// export default function PartnerForm() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [formData, setFormData] = useState({
//     companyName: "",
//     contactName: "",
//     email: "",
//     phone: "",
//     website: "",
//     partnerType: "",
//     servicesOffered: [] as string[],
//     yearsInBusiness: "",
//     annualRevenue: "",
//     clientCount: "",
//     referralSources: "",
//     whyPartner: "",
//     agreeTerms: false,
//     agreeContact: false,
//   });

//   const servicesOptions = [
//     "Web Development",
//     "Mobile Apps",
//     "UI/UX Design",
//     "Digital Marketing",
//     "SEO",
//     "Content Creation",
//     "Branding",
//     "E-commerce",
//     "IT Consulting",
//     "Other"
//   ];

//   const handleServiceToggle = (service: string) => {
//     setFormData(prev => ({
//       ...prev,
//       servicesOffered: prev.servicesOffered.includes(service)
//         ? prev.servicesOffered.filter(s => s !== service)
//         : [...prev.servicesOffered, service]
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!formData.agreeTerms || !formData.agreeContact) {
//       alert("Please agree to the terms to proceed");
//       return;
//     }

//     setIsSubmitting(true);

//     // Simulate API call
//     await new Promise(resolve => setTimeout(resolve, 1500));

//     // In production, replace with actual API call:
//     /*
//     try {
//       const response = await fetch('/api/partners/apply', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       });
      
//       if (response.ok) {
//         setIsSubmitted(true);
//       }
//     } catch (error) {
//       console.error('Submission error:', error);
//     }
//     */

//     // For demo, show success
//     setIsSubmitted(true);
//     setIsSubmitting(false);
//   };

//   if (isSubmitted) {
//     return (
//       <div className="text-center py-12">
//         <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
//         <h3 className="text-2xl font-bold mb-4">Application Submitted!</h3>
//         <p className="text-muted-foreground mb-6 max-w-md mx-auto">
//           Thank you for your interest in partnering with Pursuit Digital Services.
//           Our team will review your application and contact you within 24 hours.
//         </p>
//         <Button onClick={() => {
//           setIsSubmitted(false);
//           setFormData({
//             companyName: "",
//             contactName: "",
//             email: "",
//             phone: "",
//             website: "",
//             partnerType: "",
//             servicesOffered: [],
//             yearsInBusiness: "",
//             annualRevenue: "",
//             clientCount: "",
//             referralSources: "",
//             whyPartner: "",
//             agreeTerms: false,
//             agreeContact: false,
//           });
//         }}>
//           Submit Another Application
//         </Button>
//       </div>
//     );
//   }

//   return (
//     <form onSubmit={handleSubmit} className="space-y-8">
//       {/* Company Information */}
//       <div className="space-y-6">
//         <h3 className="text-lg font-semibold">Company Information</h3>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="space-y-2">
//             <Label htmlFor="companyName">Company Name *</Label>
//             <Input
//               id="companyName"
//               value={formData.companyName}
//               onChange={(e) => setFormData({...formData, companyName: e.target.value})}
//               placeholder="Your company name"
//               required
//             />
//           </div>
          
//           <div className="space-y-2">
//             <Label htmlFor="contactName">Contact Person *</Label>
//             <Input
//               id="contactName"
//               value={formData.contactName}
//               onChange={(e) => setFormData({...formData, contactName: e.target.value})}
//               placeholder="Full name"
//               required
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="space-y-2">
//             <Label htmlFor="email">Email Address *</Label>
//             <Input
//               id="email"
//               type="email"
//               value={formData.email}
//               onChange={(e) => setFormData({...formData, email: e.target.value})}
//               placeholder="contact@company.com"
//               required
//             />
//           </div>
          
//           <div className="space-y-2">
//             <Label htmlFor="phone">Phone Number</Label>
//             <Input
//               id="phone"
//               value={formData.phone}
//               onChange={(e) => setFormData({...formData, phone: e.target.value})}
//               placeholder="+1 (555) 123-4567"
//             />
//           </div>
//         </div>

//         <div className="space-y-2">
//           <Label htmlFor="website">Website/Portfolio</Label>
//           <Input
//             id="website"
//             value={formData.website}
//             onChange={(e) => setFormData({...formData, website: e.target.value})}
//             placeholder="https://"
//           />
//         </div>
//       </div>

//       {/* Business Details */}
//       <div className="space-y-6">
//         <h3 className="text-lg font-semibold">Business Details</h3>
        
//         <div className="space-y-2">
//           <Label>Partner Type *</Label>
//           <Select
//             value={formData.partnerType}
//             onValueChange={(value) => setFormData({...formData, partnerType: value})}
//             required
//           >
//             <SelectTrigger>
//               <SelectValue placeholder="Select your type" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="agency">Digital Agency</SelectItem>
//               <SelectItem value="freelancer">Freelancer/Independent</SelectItem>
//               <SelectItem value="consultant">Business Consultant</SelectItem>
//               <SelectItem value="referral">Referral Partner</SelectItem>
//               <SelectItem value="white-label">White Label Partner</SelectItem>
//               <SelectItem value="other">Other</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>

//         <div className="space-y-2">
//           <Label>Services You Currently Offer</Label>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
//             {servicesOptions.map((service) => (
//               <div key={service} className="flex items-center space-x-2">
//                 <DropdownMenuCheckboxItem
//                   id={`service-${service}`}
//                   checked={formData.servicesOffered.includes(service)}
//                   onCheckedChange={() => handleServiceToggle(service)}
//                 />
//                 <label
//                   htmlFor={`service-${service}`}
//                   className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                 >
//                   {service}
//                 </label>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="space-y-2">
//             <Label htmlFor="yearsInBusiness">Years in Business</Label>
//             <Select
//               value={formData.yearsInBusiness}
//               onValueChange={(value) => setFormData({...formData, yearsInBusiness: value})}
//             >
//               <SelectTrigger>
//                 <SelectValue placeholder="Select" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="0-1">0-1 years</SelectItem>
//                 <SelectItem value="1-3">1-3 years</SelectItem>
//                 <SelectItem value="3-5">3-5 years</SelectItem>
//                 <SelectItem value="5-10">5-10 years</SelectItem>
//                 <SelectItem value="10+">10+ years</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
          
//           <div className="space-y-2">
//             <Label htmlFor="annualRevenue">Annual Revenue</Label>
//             <Select
//               value={formData.annualRevenue}
//               onValueChange={(value) => setFormData({...formData, annualRevenue: value})}
//             >
//               <SelectTrigger>
//                 <SelectValue placeholder="Select range" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="under-50k">Under $50K</SelectItem>
//                 <SelectItem value="50k-100k">$50K - $100K</SelectItem>
//                 <SelectItem value="100k-250k">$100K - $250K</SelectItem>
//                 <SelectItem value="250k-500k">$250K - $500K</SelectItem>
//                 <SelectItem value="500k-1m">$500K - $1M</SelectItem>
//                 <SelectItem value="1m+">$1M+</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
          
//           <div className="space-y-2">
//             <Label htmlFor="clientCount">Active Clients</Label>
//             <Select
//               value={formData.clientCount}
//               onValueChange={(value) => setFormData({...formData, clientCount: value})}
//             >
//               <SelectTrigger>
//                 <SelectValue placeholder="Select" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="1-5">1-5 clients</SelectItem>
//                 <SelectItem value="5-10">5-10 clients</SelectItem>
//                 <SelectItem value="10-20">10-20 clients</SelectItem>
//                 <SelectItem value="20-50">20-50 clients</SelectItem>
//                 <SelectItem value="50+">50+ clients</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//         </div>
//       </div>

//       {/* Partnership Details */}
//       <div className="space-y-6">
//         <h3 className="text-lg font-semibold">Partnership Details</h3>
        
//         <div className="space-y-2">
//           <Label htmlFor="referralSources">Where do your current referrals come from?</Label>
//           <Textarea
//             id="referralSources"
//             value={formData.referralSources}
//             onChange={(e) => setFormData({...formData, referralSources: e.target.value})}
//             placeholder="Past clients, networking, online platforms, etc."
//             rows={3}
//           />
//         </div>

//         <div className="space-y-2">
//           <Label htmlFor="whyPartner">
//             Why do you want to partner with Pursuit Digital Services? *
//           </Label>
//           <Textarea
//             id="whyPartner"
//             value={formData.whyPartner}
//             onChange={(e) => setFormData({...formData, whyPartner: e.target.value})}
//             placeholder="Tell us about your goals and how we can work together..."
//             rows={4}
//             required
//           />
//         </div>
//       </div>

//       {/* Terms & Conditions */}
//       <div className="space-y-4 border-t pt-6">
//         <div className="flex items-center space-x-2">
//           <Checkbox
//             id="agreeTerms"
//             checked={formData.agreeTerms}
//             onCheckedChange={(checked) => 
//               setFormData({...formData, agreeTerms: checked as boolean})
//             }
//             required
//           />
//           <label
//             htmlFor="agreeTerms"
//             className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//           >
//             I agree to the Partner Program Terms & Conditions *
//           </label>
//         </div>

//         <div className="flex items-center space-x-2">
//           <Checkbox
//             id="agreeContact"
//             checked={formData.agreeContact}
//             onCheckedChange={(checked) => 
//               setFormData({...formData, agreeContact: checked as boolean})
//             }
//             required
//           />
//           <label
//             htmlFor="agreeContact"
//             className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//           >
//             I agree to be contacted by Pursuit Digital Services regarding partnership opportunities *
//           </label>
//         </div>
//       </div>

//       {/* Submit Button */}
//       <Button 
//         type="submit" 
//         className="w-full" 
//         size="lg"
//         disabled={isSubmitting}
//       >
//         {isSubmitting ? (
//           <>
//             <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//             Submitting...
//           </>
//         ) : (
//           'Submit Application'
//         )}
//       </Button>

//       <p className="text-xs text-muted-foreground text-center">
//         We ll review your application and contact you within 24 hours. 
//         All information is kept confidential.
//       </p>
//     </form>
//   );
// }