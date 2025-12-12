// app/partners/calculator/page.tsx
"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CalculatorPage() {
  const [projectValue, setProjectValue] = useState(5000);
  const [duration, setDuration] = useState(6);
  const [referrals, setReferrals] = useState(2);

  const monthlyRevenue = projectValue / duration;
  const commission = monthlyRevenue * 0.15 * duration * referrals;
  
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Commission Calculator</h1>
        <p className="text-muted-foreground mb-8">
          See how much you can earn as a partner
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Inputs */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Adjust Parameters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-medium">Average Project Value</label>
                  <span className="font-bold">${projectValue.toLocaleString()}</span>
                </div>
                <Slider
                  value={[projectValue]}
                  onValueChange={([value]) => setProjectValue(value)}
                  min={1000}
                  max={50000}
                  step={1000}
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-medium">Project Duration (months)</label>
                  <span className="font-bold">{duration} months</span>
                </div>
                <Slider
                  value={[duration]}
                  onValueChange={([value]) => setDuration(value)}
                  min={1}
                  max={24}
                  step={1}
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-medium">Referrals per Month</label>
                  <span className="font-bold">{referrals}</span>
                </div>
                <Slider
                  value={[referrals]}
                  onValueChange={([value]) => setReferrals(value)}
                  min={1}
                  max={10}
                  step={1}
                />
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="bg-gradient-to-b from-primary/5 to-primary/10">
            <CardHeader>
              <CardTitle>Your Earnings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">
                    ${commission.toLocaleString()}
                  </div>
                  <p className="text-muted-foreground">Potential Annual Commission</p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Per Project Commission</span>
                    <span className="font-medium">${(projectValue * 0.15).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly Potential</span>
                    <span className="font-medium">${(commission / 12).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Referrals Needed</span>
                    <span className="font-medium">{referrals * 12}/year</span>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  Start Earning
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}