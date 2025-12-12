// components/join-form-wizard.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";

const steps = [
  { id: 1, title: "Personal Info" },
  { id: 2, title: "Professional Details" },
  { id: 3, title: "Skills & Portfolio" },
  { id: 4, title: "Review & Submit" }
];

export function JoinFormWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    experience: "",
    skills: "",
    portfolio: "",
    linkedin: "",
    message: ""
  });

  const progress = (currentStep / steps.length) * 100;

  const handleSubmit = async () => {
    // Submit to API
    const response = await fetch('/api/talent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      setCurrentStep(5); // Success step
    }
  };

  if (currentStep === 5) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
        <p className="text-muted-foreground">
          We&apos;ve received your information and will contact you 
          when opportunities match your profile.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Progress value={progress} className="h-2" />
        <div className="flex justify-between">
          {steps.map((step) => (
            <div key={step.id} className="text-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2
                ${currentStep >= step.id ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                {step.id}
              </div>
              <span className="text-sm">{step.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Step 1 */}
      {currentStep === 1 && (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
        </div>
      )}

      {/* Step 2 */}
      {currentStep === 2 && (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="role">Desired Role *</Label>
            <Input
              id="role"
              value={formData.role}
              onChange={(e) => setFormData({...formData, role: e.target.value})}
              placeholder="e.g., Frontend Developer"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="experience">Experience Level</Label>
            <Input
              id="experience"
              value={formData.experience}
              onChange={(e) => setFormData({...formData, experience: e.target.value})}
              placeholder="e.g., 3-5 years"
            />
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between pt-6">
        <Button
          variant="outline"
          onClick={() => setCurrentStep(currentStep - 1)}
          disabled={currentStep === 1}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        
        {currentStep < steps.length ? (
          <Button onClick={() => setCurrentStep(currentStep + 1)}>
            Next <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <Button onClick={handleSubmit}>Submit Application</Button>
        )}
      </div>
    </div>
  );
}