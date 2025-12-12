// // app/partners/dashboard/page.tsx
// import { redirect } from 'next/navigation';
// import { getSession } from '@/lib/auth';

// export default async function DashboardPage() {
//   const session = await getSession();
  
//   if (!session || session.role !== 'admin') {
//     redirect('/sign-in');
//   }
  
//   return (
//     // Dashboard content
//   );
// }
/////////////////////////////////////////////////////////////////

// app/partner/dashboard/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@radix-ui/react-select";
import { Table, TableHeader, TableRow, TableHead, TableBody } from "@/components/ui/table";
import { useEffect, useState } from "react";
// import { useSession } from "next-auth/react";

interface PartnerStats {
  totalEarnings: number;
  pendingCommissions: number;
  activeReferrals: number;
  conversionRate: number;
}

export default function PartnerDashboard() {
  const [stats, setStats] = useState<PartnerStats | null>(null);
//   const { data: session } = useSession();

  // Fetch partner data
//   useEffect(() => {
//     if (session) {
//       // API call to get partner stats
//     }
//   }, [session]);

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Partner Dashboard</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-primary">
              ${stats?.totalEarnings?.toLocaleString() || "0"}
            </div>
            <p className="text-sm text-muted-foreground">Total Earnings</p>
          </CardContent>
        </Card>
        {/* More stat cards */}
      </div>

      {/* Referral Form */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Submit New Referral</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <Input placeholder="Client Company Name" />
            <Input placeholder="Contact Email" />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Service Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web-dev">Web Development</SelectItem>
                <SelectItem value="design">UI/UX Design</SelectItem>
                {/* More options */}
              </SelectContent>
            </Select>
            <Button>Submit Referral</Button>
          </form>
        </CardContent>
      </Card>

      {/* Referral Tracking Table */}
      <Card>
        <CardHeader>
          <CardTitle>Your Referrals</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Commission</TableHead>
                <TableHead>Next Payout</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Map through referrals */}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}