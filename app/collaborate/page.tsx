// app/collaborate/page.tsx
"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function CollaboratePage() {
  const [activeTab, setActiveTab] = useState("refer");

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Collaboration Models</h1>
        <p className="text-xl text-muted-foreground">
          Choose how you want to work with us
        </p>
      </div>

      <Tabs defaultValue="refer" className="max-w-4xl mx-auto">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="refer">Referral Partner</TabsTrigger>
          <TabsTrigger value="white-label">White Label</TabsTrigger>
          <TabsTrigger value="joint">Joint Ventures</TabsTrigger>
        </TabsList>

        <TabsContent value="refer">
          <Card>
            <CardHeader>
              <CardTitle>Referral Partnership</CardTitle>
              <CardDescription>Simple commission-based model</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <span>Commission Rate</span>
                  <span className="font-bold text-primary">15-25%</span>
                </div>
                <ul className="space-y-2">
                  {["No upfront costs", "Monthly payouts", "Access to sales materials", "Dedicated account manager"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Become a Referral Partner</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="white-label">
          <Card>
            <CardHeader>
              <CardTitle>White Label Partner</CardTitle>
              <CardDescription>Our work, your brand</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Similar structure */}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}