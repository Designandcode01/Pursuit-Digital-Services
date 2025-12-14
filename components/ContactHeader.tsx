"use client";

export default function ContactHeader() {
  return (
    <>
      {/* Top Contact Bar – Visible on Desktop and Tablet */}
      
      <div className="hidden md:flex justify-center items-center gap-6 bg-blue-100 text-sm text-blue-800 py-1">
        <div>
          📞{" "}
          <a
            href="tel:+923008245133"
            className="font-semibold hover:underline"
          >
            +923008245133
          </a>
        </div>

        <div>
          🟢{" "}
          <a
            href="https://wa.me/+923008245133"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Floating Call Button – Visible Only on Mobile */}
      <a
        href="tel:+923008245133"
        className="fixed bottom-20 right-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg z-50 text-sm md:hidden"
        aria-label="Call Now"
      >
        📞 Call
      </a>

      {/* Floating WhatsApp Button – Visible Only on Mobile */}
      <a
        href="https://wa.me/+923008245133"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full shadow-lg z-50 text-sm md:hidden"
        aria-label="Chat on WhatsApp"
      >
        🟢 WhatsApp
      </a>
    </>
  );
}




// "use client";

// export default function ContactHeader() {
//   return (
//       <>
//       {/* Top Contact Bar – Visible on Desktop and Tablet */}
//       <div className="hidden md:block bg-blue-100 text-sm text-center py-1 text-blue-800">
//         📞 <a href="tel:+1234567890" className="font-semibold hover:underline">+1 234 567 890</a>
//       </div>

//       {/* Floating Call Button – Visible Only on Mobile */}
//       <a
//         href="tel:+1234567890"
//         className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full shadow-lg z-50 text-sm md:hidden"
//         aria-label="Call Now"
//       >
//         📞 Call
//       </a>
//     </>
//   );
// }




// "use client";

// export default function ContactHeader() {
//   return (
//     <>
//       {/* Top Contact Bar – Visible on Desktop and Tablet */}
//       <div className="hidden md:block bg-blue-100 text-sm text-center py-1 text-blue-800">
//         🟢 <a
//           // href="https://wa.me/1234567890"
//           href="https://wa.me/+923008245133"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="font-semibold hover:underline"
//         >
//           Chat on WhatsApp
//         </a>
//       </div>

//       {/* Floating WhatsApp Button – Visible Only on Mobile */}
//       <a
//         href="https://wa.me/+923008245133"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full shadow-lg z-50 text-sm md:hidden"
//         aria-label="Chat on WhatsApp"
//       >
//         🟢 WhatsApp
//       </a>
//     </>
//   );
// }
