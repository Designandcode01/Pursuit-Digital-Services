"use client";

import ContactForm from "@/components/ContactForm";
// import { useRouter } from "next/navigation";

export default function ContactPage() { // Rename to ContactPage
  // const router = useRouter();

  const handleChoice = (choice: string) => {
    localStorage.setItem("pursuit-journey", choice);
    // Optional: Show success message instead of redirecting
    alert(`Thank you for selecting: ${choice}`);
  };

  // REMOVE THE USEEFFECT ENTIRELY
  // useEffect(() => {
  //   if (localStorage.getItem("pursuit-journey")) {
  //     router.push("/");
  //   }
  // }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-cyan-700 to-cyan-900">
      {/* indigo */}
      <div className="bg-cyan-900 p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4">
          Contact Pursuit Digital Services
        </h1>
        <p className="mb-6 text-gray-300">
          Get in touch with us for your digital needs
        </p>
        
        {/* Contact Form Section */}
        <div className="mb-8">
          <ContactForm />
        </div>
        
        {/* Optional: Keep journey selection if needed */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="mb-4 text-gray-300">
            Where are you in your digital journey?
          </p>
          <div className="space-y-3">
            <button
              onClick={() => handleChoice("starting")}
              className="w-full py-2 px-4 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Just Starting
            </button>
            <button
              onClick={() => handleChoice("scaling")}
              className="w-full py-2 px-4 rounded-lg bg-green-600 text-white hover:bg-green-700"
            >
              Scaling Up
            </button>
            <button
              onClick={() => handleChoice("guidance")}
              className="w-full py-2 px-4 rounded-lg bg-purple-600 text-white hover:bg-purple-700"
            >
              Need Expert Guidance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}












// "use client";

// import ContactForm from "@/components/ContactForm";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// export default function WelcomePage() {
//   const router = useRouter();

//   const handleChoice = (choice: string) => {
//     localStorage.setItem("pursuit-journey", choice);
//     router.push("/"); // Go to homepage after choosing
//   };

//   useEffect(() => {
//     // If already chosen, skip welcome screen
//     if (localStorage.getItem("pursuit-journey")) {
//       router.push("/");
//     }
//   }, [router]);

//   return (
//     <div className="flex h-screen items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100">
//       <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
//         <h1 className="text-2xl font-bold mb-4">
//           Welcome to Pursuit Digital Services
//         </h1>
//         <p className="mb-6 text-gray-600">
//           Where are you in your digital journey?
//         </p>
//         <div className="space-y-3">
//           <button
//             onClick={() => handleChoice("starting")}
//             className="w-full py-2 px-4 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
//           >
//             Just Starting
//           </button>
//           <button
//             onClick={() => handleChoice("scaling")}
//             className="w-full py-2 px-4 rounded-lg bg-green-600 text-white hover:bg-green-700"
//           >
//             Scaling Up
//           </button>
//           <button
//             onClick={() => handleChoice("guidance")}
//             className="w-full py-2 px-4 rounded-lg bg-purple-600 text-white hover:bg-purple-700"
//           >
//             Need Expert Guidance
//           </button>
//         </div>
//          <div className="w-full py-2 px-4 rounded-lg text-white">
//           <ContactForm />
//         </div> 
//       </div>
//     </div>
//   );
// }











// // // app/welcome/page.tsx
// // "use client";

// // import { useRouter } from "next/navigation";
// // import { useEffect } from "react";

// // export default function WelcomePage() {
// //   const router = useRouter();

// //   const handleChoice = (choice: string) => {
// //     // Save choice in localStorage (or a cookie if needed server-side)
// //     localStorage.setItem("pursuit-journey", choice);
// //     router.push("/"); // go to main homepage
// //   };

// //   useEffect(() => {
// //     // If user already selected, skip gate
// //     if (localStorage.getItem("pursuit-journey")) {
// //       router.push("/");
// //     }
// //   }, [router]);

// //   return (
// //     <div className="flex h-screen items-center justify-center bg-gray-100">
// //       <div className="bg-white p-8 rounded-2xl shadow-md max-w-md w-full text-center">
// //         <h1 className="text-2xl font-bold mb-4">
// //           Welcome to Pursuit Digital Services
// //         </h1>
// //         <p className="mb-6 text-gray-600">
// //           Where are you in your digital journey?
// //         </p>
// //         <div className="space-y-3">
// //           <button
// //             onClick={() => handleChoice("starting")}
// //             className="w-full py-2 px-4 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
// //           >
// //             Just Starting
// //           </button>
// //           <button
// //             onClick={() => handleChoice("scaling")}
// //             className="w-full py-2 px-4 rounded-lg bg-green-600 text-white hover:bg-green-700"
// //           >
// //             Scaling Up
// //           </button>
// //           <button
// //             onClick={() => handleChoice("guidance")}
// //             className="w-full py-2 px-4 rounded-lg bg-purple-600 text-white hover:bg-purple-700"
// //           >
// //             Need Expert Guidance
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
