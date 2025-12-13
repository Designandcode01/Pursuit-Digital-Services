'use client';

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Approach = () => {
  return (
    <section className="bg-gray-700 text-cyan-400 w-full py-20 px-4 sm:px-6 lg:px-8">
      {/* heading */}
      <h1 className="text-center text-xl sm:text-2xl lg:text-3xl font-semibold mb-12">
        Delivering smart solutions for your digital journey
      </h1>
      
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-8">
        <Card
          title="Planning & Strategy"
          icon={<AceternityIcon order="1" />}
          // Phase 
          des="We'll collaborate to map out your website's goals, target audience, 
          and key functionalities. We'll discuss things like site structure, 
          navigation, and content requirements."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
          />
        </Card>
        
        <Card
          title="Development & Progress Update"
          icon={<AceternityIcon order="2" />}
          des="Once we agree on the plan. From initial sketches to polished code, I'll keep you updated
          every step of the way."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
            colors={[
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
        </Card>
        
        <Card
          title="Development & Launch"
          icon={<AceternityIcon order="3" />}
          des="This is where the magic happens! Based on the approved design, 
          I'll translate everything into functional code, building your website
          from the ground up."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div
      onMouseEnter={() => !isMobile && setHovered(true)}
      onMouseLeave={() => !isMobile && setHovered(false)}
      onClick={() => isMobile && setHovered(!hovered)}
      className="border border-black/20 dark:border-white/20 max-w-sm w-full mx-auto p-6 
        relative rounded-3xl bg-linear-to-br from-gray-900 to-black
        min-h-[500px] sm:min-h-[550px] flex flex-col justify-center"
    >
      {/* Decorative corner icons */}
      <Icon className="absolute h-6 w-6 sm:h-8 sm:w-8 -top-2 -left-2 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-6 w-6 sm:h-8 sm:w-8 -bottom-2 -left-2 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-6 w-6 sm:h-8 sm:w-8 -top-2 -right-2 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-6 w-6 sm:h-8 sm:w-8 -bottom-2 -right-2 dark:text-white text-black opacity-30" />

      <AnimatePresence>
        {(hovered || isMobile) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0 rounded-3xl overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 flex flex-col items-center justify-center h-full">
        {/* Phase Icon - Always visible on mobile, hides on hover for desktop */}
        <div className={`
          transition-all duration-300 transform
          ${(hovered && !isMobile) ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'}
          mb-8
        `}>
          {icon}
        </div>
        
        {/* Title - Shows on hover for desktop, always visible on mobile */}
        <h2 className={`
          text-center font-bold transition-all duration-300
          ${(hovered && !isMobile) ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'}
          text-xl sm:text-2xl lg:text-3xl mb-4
        `}>
          {title}
        </h2>
        
        {/* Description - Shows on hover for desktop, always visible on mobile */}
        <p className={`
          text-center transition-all duration-300
          ${(hovered && !isMobile) ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'}
          text-sm sm:text-base mb-6 px-4
        `} style={{ color: "#E4ECFF" }}>
          {des}
        </p>
        
        {/* Mobile hint */}
        {isMobile && (
          <p className="text-xs text-gray-400 mt-4 text-center">
            Tap to {hovered ? 'hide' : 'show'} animation
          </p>
        )}
      </div>
    </div>
  );
};

// Add this icon component
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div className="relative">
      <div className="relative flex items-center justify-center">
        <div className="absolute -inset-4 rounded-full bg-linear-to-r from-purple-600 to-cyan-500 opacity-30 blur" />
        <span
          className="relative z-10 inline-flex h-16 w-16 sm:h-20 sm:w-20 items-center 
          justify-center rounded-full bg-slate-950 border-2 border-purple-500
          text-purple-300 font-bold text-lg sm:text-xl lg:text-2xl"
        >
          {order}
        </span>
      </div>
    </div>
  );
};













// 'use client';

// import React from "react";
// import { AnimatePresence, motion } from "framer-motion";

// import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

// const Approach = () => {
//   return (
//     <section className="bg-gray-700 text-cyan-400 w-full py-20">
//       {/* heading */}
//       <h1 className="px-10 text-2xl">
//         Delivering smart solutions for your digital journey
//          {/* <span className="text-purple">“Delivering smart solutions for your digital journey.”</span> */}
//       </h1>
//       {/* remove bg-white dark:bg-black */}
//       <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
//         {/* add des prop */}
//         <Card
//           title="Planning & Strategy"
//           icon={<AceternityIcon order="Phase 1" />}
//           des="We'll collaborate to map out your website's goals, target audience, 
//           and key functionalities. We'll discuss things like site structure, 
//           navigation, and content requirements."
//         >
//           <CanvasRevealEffect
//             animationSpeed={5.1}
//             // add these classed for the border rounded overflowing -> rounded-3xl overflow-hidden
//             containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
//           />
//         </Card>
//         <Card
//           title="Development & Progress Update"
//           icon={<AceternityIcon order="Phase 2" />}
//           // , I cue my lofi playlist and dive into coding.
//           des="Once we agree on the plan. From initial sketches to polished code, I'll keep you updated
//           every step of the way."
//         >
//           <CanvasRevealEffect
//             animationSpeed={3}
//             // change bg-black to bg-pink-900
//             containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
//             colors={[
//               // change the colors of the
//               [255, 166, 158],
//               [221, 255, 247],
//             ]}
//             dotSize={2}
//           />
//           {/* Radial gradient for the cute fade */}
//           {/* remove this one */}
//           {/* <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" /> */}
//         </Card>
//         <Card
//           title="Development & Launch"
//           icon={<AceternityIcon order="Phase 3" />}
//           des="This is where the magic happens! Based on the approved design, 
//           I'll translate everything into functional code, building your website
//           from the ground up."
//         >
//           <CanvasRevealEffect
//             animationSpeed={3}
//             containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
//             colors={[[125, 211, 252]]}
//           />
//         </Card>
//       </div>
//     </section>
//   );
// };

// export default Approach;

// const Card = ({
//   title,
//   icon,
//   children,
//   // add this one for the desc
//   des,
// }: {
//   title: string;
//   icon: React.ReactNode;
//   children?: React.ReactNode;
//   des: string;
// }) => {
//   const [hovered, setHovered] = React.useState(false);
//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       // change h-[30rem] to h-[35rem], add rounded-3xl
//       className="border border-black/20 group/canvas-card flex items-center justify-center
//        dark:border-white/20  max-w-sm w-full mx-auto p-4 relative lg:h-140 rounded-3xl "
//       style={{
//         //   add these two
//         //   you can generate the color from here https://cssgradient.io/
//         background: "rgb(4,7,29)",
//         backgroundColor:
//           "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
//       }}
//     >
//       {/* change to h-10 w-10 , add opacity-30  */}
//       <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
//       <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
//       <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
//       <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

//       <AnimatePresence>
//         {hovered && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="h-full w-full absolute inset-0"
//           >
//             {children}
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <div className="relative z-20 px-10">
//         <div
//           // add this for making it center
//           // absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
//           className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
//         group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
//         >
//           {icon}
//         </div>
//         <h2
//           // change text-3xl, add text-center
//           className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
//          relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white 
//          group-hover/canvas-card:-translate-y-2 transition duration-200"
//         >
//           {title}
//         </h2>
//         {/* add this one for the description */}
//         <p
//           className="text-sm opacity-0 group-hover/canvas-card:opacity-100
//          relative z-10 mt-4 group-hover/canvas-card:text-white text-center
//          group-hover/canvas-card:-translate-y-2 transition duration-200"
//           style={{ color: "#E4ECFF" }}
//         >
//           {des}
//         </p>
//       </div>
//     </div>
//   );
// };
// // add order prop for the Phase number change
// const AceternityIcon = ({ order }: { order: string }) => {
//   return (
//     <div>
//       {/* this btn is from https://ui.aceternity.com/components/tailwindcss-buttons border magic */}
//       {/* change rounded-lg, text-purple px-5 py-2 */}
//       {/* remove focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cuz we don't need to focus */}
//       {/* remove text-sm font-medium h-12 , add font-bold text-2xl */}
//       <button className="relative inline-flex overflow-hidden rounded-full p-x">
//         <span
//           className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
//          bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
//         />
//         <span
//           className="inline-flex h-full w-full cursor-pointer items-center 
//         justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
//         >
//           {order}
//         </span>
//       </button>
//     </div>









//     // remove the svg and add the button
//     // <svg
//     //   width="66"
//     //   height="65"
//     //   viewBox="0 0 66 65"
//     //   fill="none"
//     //   xmlns="http://www.w3.org/2000/svg"
//     //   className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
//     // >
//     //   <path
//     //     d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
//     //     stroke="currentColor"
//     //     strokeWidth="15"
//     //     strokeMiterlimit="3.86874"
//     //     strokeLinecap="round"
//     //     style={{ mixBlendMode: "darken" }}
//     //   />
//     // </svg>
//   );
// };


// import { SVGProps } from "react";

// export const Icon = ({ className, ...rest }: SVGProps<SVGSVGElement>) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth={1.5}
//       stroke="currentColor"
//       className={className}
//       {...rest}
//     >
//       <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
//     </svg>
//   );
// };


// // export const Icon = ({ className, ...rest }: any) => {
// //   return (
// //     <svg
// //       xmlns="http://www.w3.org/2000/svg"
// //       fill="none"
// //       viewBox="0 0 24 24"
// //       strokeWidth="1.5"
// //       stroke="currentColor"
// //       className={className}
// //       {...rest}
// //     >
// //       <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
// //     </svg>
// //   );
// // };
