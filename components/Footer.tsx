import Link from 'next/link';
import { Icons } from './icons';

const Footer = () => {
  return (
    <footer className='border-t-2 border-gray-200'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          
          {/* Navigation Links */}
          <div className='flex items-center space-x-2'>
            <Link
              href='/'
              className='text-gray-700 hover:text-purple-600 text-sm font-medium flex items-center'
            >
              <Icons.home className="h-4 w-4 mr-1" />
              Home
            </Link>
            
            {/* Social Media Icons */}
            <div className="flex space-x-2">
              <a
                href="https://x.com/SAMGraphics6"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <Icons.twitter className="h-5 w-5 text-gray-500 hover:text-gray-700" />
              </a>
              
              <a
                href="https://github.com/Designandcode01"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <Icons.gitHub className="h-5 w-5 text-gray-500 hover:text-gray-700" />
              </a>
              
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <Icons.linkedin className="h-5 w-5 text-gray-500 hover:text-gray-700" />
              </a>
              
              <a
                href="mailto:epassionate01@gmail.com"
                aria-label="Email"
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <Icons.mail className="h-5 w-5 text-gray-500 hover:text-gray-700" />
              </a>
            </div>
          </div>

          {/* privacy-policy and terms-of-service */}
          <div className='mt-4 md:mt-0 flex space-x-4'>
            <Link
              href='/privacy-policy'
              // services/design
              className='text-gray-700 hover:text-purple-600 text-sm font-medium flex items-center'
            >
              <Icons.design className="h-4 w-4 mr-1" />
              Privacy Policy
            </Link>
            <Link
              href='/terms-of-service'
              // services/design
              className='text-gray-700 hover:text-purple-600 text-sm font-medium flex items-center'
            >
              <Icons.design className="h-4 w-4 mr-1" />
              Terms of Service
            </Link>
            <Link
              href='/affiliate'
              // services/design
              className='text-gray-700 hover:text-purple-600 text-sm font-medium flex items-center'
            >
              <Icons.design className="h-4 w-4 mr-1" />
              Affiliate - Sell and Earn
            </Link>

          </div>

          
          {/* Services Quick Links */}
          <div className='mt-4 md:mt-0 flex space-x-4'>
            
            <Link
              href='/join'
              // services/design
              className='text-gray-700 hover:text-purple-600 text-sm font-medium flex items-center'
            >
              <Icons.design className="h-4 w-4 mr-1" />
              Design
            </Link>
            <Link
              href='/join'
              // services/web-development
              className='text-gray-700 hover:text-purple-600 text-sm font-medium flex items-center'
            >
              <Icons.webDevelopment className="h-4 w-4 mr-1" />
              Web Dev
            </Link>

            <Link
              href='/join'
              // services/seo
              className='text-gray-700 hover:text-purple-600 text-sm font-medium flex items-center'
            >
              <Icons.seo className="h-4 w-4 mr-1" />
              SEO - On Page
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className='mt-8 text-center text-gray-500 text-sm flex items-center justify-center'>
          {/* <Icons.copyright className="h-4 w-4 mr-1" /> */}
          © {new Date().getFullYear()} Pursuit Digital Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;








// import Link from 'next/link';
// import BackToTopButton from './BackToTopButton';
// import FooterSocialLinks from './FooterSocialLinks';
// import { Icons } from './icons';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();
  
//   const navigationLinks = [
//     { href: '/', label: 'Home' },
//     { href: '/services', label: 'Services' },
//     { href: '/portfolio', label: 'Portfolio' },
//     { href: '/blog', label: 'Blog' },
//     { href: '/about', label: 'About' },
//     { href: '/contact', label: 'Contact' },
//   ];

//   const servicesLinks = [
//     { href: '/services/web-development', label: 'Web Development' },
//     { href: '/services/digital-marketing', label: 'Digital Marketing' },
//     { href: '/services/design', label: 'UI/UX Design' },
//     { href: '/services/seo', label: 'SEO Optimization' },
//     { href: '/services/branding', label: 'Brand Identity' },
//   ];

//   return (
//     <footer className='border-t-2 border-gray-200 bg-linear-to-b from-white to-gray-50'>
//       <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        
//         {/* Main Footer Content */}
//         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>
          
//           {/* Brand Column */}
//           <div className='space-y-4'>
//             <Link href='/' className='inline-block'>
//               <div className='flex items-center space-x-3'>
//                 <div className='relative h-10 w-10'>
//                   <div className='h-10 w-10 rounded-full bg-linear-to-r from-purple-600 via-pink-500 to-red-500 flex items-center justify-center'>
//                     <span className='text-white font-bold text-lg'>P</span>
//                   </div>
//                 </div>
//                 <span className='text-xl font-bold bg-linear-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent'>
//                   Pursuit Digital
//                 </span>
//               </div>
//             </Link>
//             <p className='text-gray-600 text-sm'>
//               Transforming ideas into exceptional digital experiences. We help businesses thrive in the digital landscape.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className='font-semibold text-gray-900 mb-4 text-lg'>Quick Links</h3>
//             <ul className='space-y-3'>
//               {navigationLinks.map((link) => (
//                 <li key={link.href}>
//                   <Link
//                     href={link.href}
//                     className='text-gray-600 hover:text-purple-600 text-sm transition-colors duration-200 hover:pl-2'
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className='font-semibold text-gray-900 mb-4 text-lg'>Services</h3>
//             <ul className='space-y-3'>
//               {servicesLinks.map((service) => (
//                 <li key={service.href}>
//                   <Link
//                     href={service.href}
//                     className='text-gray-600 hover:text-purple-600 text-sm transition-colors duration-200 hover:pl-2'
//                   >
//                     {service.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact & Social */}
//           <div>
//             <h3 className='font-semibold text-gray-900 mb-4 text-lg'>Connect With Us</h3>
//             <p className='text-gray-600 text-sm mb-4'>
//               Ready to elevate your digital presence? Let&apos;s create something amazing together.
//             </p>
            
//             {/* Use the client component for social links */}
//             <FooterSocialLinks />

//             <div className='space-y-2'>
//               <div className='flex items-center text-sm text-gray-600'>
//                 <div className='h-4 w-4 mr-2 flex items-center justify-center'>
//                   ✉️
//                 </div>
//                 <a href='mailto:info@pursuitdigital.com' className='hover:text-purple-600'>
//                   info@pursuitdigital.com
//                 </a>
//               </div>
//               <div className='flex items-center text-sm text-gray-600'>
//                 <div className='h-4 w-4 mr-2 flex items-center justify-center'>
//                   📞
//                 </div>
//                 <a href='tel:+1234567890' className='hover:text-purple-600'>
//                   +1 (234) 567-890
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className='border-t border-gray-200 my-8'></div>

//         {/* Bottom Footer */}
//         <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
//           <div className='text-gray-500 text-sm'>
//             © {currentYear} Pursuit Digital Services. All rights reserved.
//           </div>
          
//           <div className='flex items-center space-x-6 text-sm text-gray-500'>
//             <Link href='/privacy' className='hover:text-purple-600'>
//               Privacy Policy
//             </Link>
//             <Link href='/terms' className='hover:text-purple-600'>
//               Terms of Service
//             </Link>
//             <Link href='/cookies' className='hover:text-purple-600'>
//               Cookie Policy
//             </Link>
//           </div>
//         </div>

//         {/* Back to Top Button */}
//         <div className='mt-8 text-center'>
//           <BackToTopButton />
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;











// // import Link from 'next/link';
// // import { Icons } from './icons';

// // const Footer = () => {
// //   return (
// //     <footer className='border-t-2 border-gray-200'>
// //       <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
// //         <div className='flex flex-col md:flex-row justify-between items-center'>
// //           {/* Navigation Links */}
// //           <div className='flex space-x-4'>
// //             <Link
// //               href='/'
// //               className='text-gray-700 hover:text-purple-600 text-sm font-medium'
// //             >
// //               Home
// //             </Link>
// //             <div className="flex space-x-4">
// //               <a
// //                 href="https://x.com/SAMGraphics6"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 aria-label="X"
// //               >
// //                 <Icons.twitter className="h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" />
// //               </a>
// //               <a
// //                 href="https://github.com/Designandcode01"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 aria-label="Github"
// //               >
// //                 <Icons.gitHub className="h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" />
// //               </a>
// //             </div>

// //           </div>
// //         </div>

// //         {/* Copyright */}
// //         <div className='mt-8 text-center text-gray-500 text-sm'>
// //           © {new Date().getFullYear()} Pursuit Digital Services. All rights reserved.
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;
