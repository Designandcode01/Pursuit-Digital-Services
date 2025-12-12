import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import Image from 'next/image';


const navigationLinks = [
  { href: '/blog', label: 'Blog', color: 'text-cyan-500 hover:text-purple-600' },
  // Add more links here as needed
];

export default function Navbar() {
  return (
    <nav 
      className="relative w-full h-50 bg-cover bg-center"
      style={{ backgroundImage: `url(/banner2.jpg)` }}
    >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b-2 border-white/20">
        <div className="flex items-center justify-between h-50">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="shrink-0 flex items-center space-x-3">
            
            
              {/* <div className="relative">
                <Image
                  src="/pursuitdigitalservices.png"
                  alt="Pursuit Digital Services Logo"
                  height={200}
                  width={200}
                  className="rounded-full"
                  priority
                />
              </div>  */}

              {/* // Container controls the aspect ratio */}
 <div className="relative h-[150px] w-[150px] rounded-full overflow-hidden bg-gray-100">
  <Image
    src="/pursuitdigitalservices.png"
    alt="Pursuit Digital Services Logo"
    fill
    className="object-contain bg-gray-950" // Add padding if needed
    priority
    sizes="200px"
  />
</div> 


 
              <span className="hidden sm:inline text-2xl font-bold bg-linear-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Pursuit Digital Services
              </span>
            </Link>
          </div>

          {/* Navigation Links & Auth Section */}
          <div className="flex items-center space-x-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${link.color} px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-white/10`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Authentication Section */}
            <SignedOut>
              <SignInButton mode="modal">
                <button className="px-4 py-2 bg-linear-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white text-sm rounded-md font-medium cursor-pointer transition-all duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            
            <SignedIn>
              <div className="ml-2">
                <UserButton 
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8"
                    }
                  }}
                />
              </div>
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}












// import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

// import Link from 'next/link';

// import Image from 'next/image';

// export default async function Navbar() {

//   return (
//     <nav className="w-full h-50 bg-cover bg-center"
//   style={{ backgroundImage: `url(/banner2.jpg)` }}>
//       {/* <Image
//       alt="Globe"
//       src="/globe.svg"
//       // placeholder="blur"
//       // quality={100}
//       fill
//       sizes="100vw"
//       style={{
//         objectFit: 'cover',
//       }}
//        /> */}
//       <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b-2 border-gray-200'>
//         <div className='flex items-center justify-between h-50'>
//           <div className='flex items-center'>
//             <Link href='/' className='shrink-0'>
//             <Image
//             src="/pursuitdigitalservices.png"
//             alt='Pursuit Digital Logo'
//             height={200}
//             width={200}
//             className='rounded-full'
//              />
//               <span className='text-md sm:text-2xl font-bold bg-linear-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent'>
//                 Pursuit Digital Services 
//               </span>
//             </Link>
//           </div>

//           <div className='flex items-center space-x-4'>
//             <Link
//               href='/blog'
//               className='text-cyan-500 hover:text-purple-600 px-2 py-1 rounded-md text-sm sm:px-3 sm:py-2 sm:text-base font-medium '
//             >
//               Blog 
//             </Link>
//             <SignedOut>
//               <SignInButton>
//                 <button className='w-full sm:w-auto bg-linear-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white sm:px-4 sm:py-2 px-3 py-1 text-sm sm:text-md rounded-md font-medium cursor-pointer'>
//                   Sign In
//                 </button>
//               </SignInButton>
//             </SignedOut>

//             <SignedIn>
//               <UserButton />
//             </SignedIn>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
