// // app/client/dashboard/page.tsx
// import { getClientSession } from '@/lib/client-auth';

// export default async function ClientDashboard() {
//   const client = await getClientSession();
  
//   if (!client) {
//     redirect('/client-login');
//   }
  
//   return (
//     // Client-specific dashboard
//   );
// }



import React from 'react'

export default function ClientDashbaord() {
  return (
    <div>ClientDashbaord</div>
  )
}
