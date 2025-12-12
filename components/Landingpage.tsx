import Link from "next/link";
import ContactForm from "./ContactForm";

export default function Landingpage() {
  const services: { title: string; desc: string }[] = [
    {
      title: "Custom Websites",
      desc: "Responsive and SEO-friendly websites built with Next.js & Tailwind."
    },
    {
      title: "Quiz & Learning Apps",
      desc: "Interactive quizzes with timers, leaderboards, and analytics."
    },
    {
      title: "Admin Dashboards",
      desc: "Manage content, users, and data with secure admin panels."
    },
    {
      title: "Authentication & Payments",
      desc: "Secure logins, subscriptions, and Stripe/Raast integrations."
    },
    {
      title: "Database Integration",
      desc: "PostgreSQL, Prisma, MongoDB with fast and secure backend APIs."
    },
    // {
    //   title: "Performance Optimization",
    //   desc: "Fast load times, Lighthouse optimization, and SSR-first builds."
    // }
  ];

  return (
    <main>
      {/*  className="bg-gray-300 dark:bg-gray-700 min-h-screen text-gray-900" */}

      {/* Banner Section */}
      <section className="bg-gray-800/50 border border-gray-700 flex flex-col items-center justify-center px-6 py-20 text-center">
        {/*  bg-gray-700 dark:bg-gray-700 */}
        <h1 className="bg-gray-700 dark:bg-gray-700 text-2xl text-white md:text-3xl font-bold mb-4">
          Pursuit Digital Services
        </h1>
        <p className="bg-gray-700 dark:bg-gray-700 text-white max-w-2xl text-lg mb-8">
          Modern, scalable, and secure <strong>web solutions</strong>.&nbsp;
          Specializing in <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, and&nbsp;
          dynamic apps like <strong>quizzes</strong>, <strong>blogs</strong>, and <strong>admin panels</strong>.
        </p>
        <div className="flex gap-4">
          <Link
            href="#services"
            className="px-6 py-3 bg-blue-950 text-cyan-400 rounded-lg hover:bg-cyan-700 transition"
          >
            View Services
          </Link>
          <Link
            href="#contact"
            className="px-6 py-3 bg-blue-950 text-cyan-400 rounded-lg hover:bg-cyan-700 transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>


      {/* Services Section */}
      <section id="services" className="bg-cyan-800 shadow-2xl dark:bg-gray-900 px-6 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gray-700 dark:bg-gray-700 rounded-xl shadow p-6 hover:shadow-lg transition"
            >
              <h3 className="text-2xl text-white font-semibold mb-2">{service.title}</h3>
              <p className="text-white">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact">
        <div className="bg-gray-700 max-w-2xl mx-auto px-4 py-12">
                      <h2 className="text-3xl font-bold text-center text-cyan-500 mb-6">Let’s Work Together</h2>
                            <p className="text-center text-cyan-500 mb-10">
                              Have a project in mind? I&apos;d love to hear about it.
                            </p>
                      {/* <h2 className="text-3xl font-bold text-white mb-2">Contact Us</h2>
                      <p className="text-gray-400 mb-8">Have questions or want to get in touch? Send us a message.</p> */}
                      
                      <div className="bg-gray-900/50 p-1 rounded-lg border border-gray-800">
                        <ContactForm />
                      </div>
                    </div>
      </section>

      


      

      {/* Contact Section */}
      {/* <section id="contact" className="px-6 py-16 bg-gray-700 dark:bg-gray-700">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Let’s Work Together</h2>
        <p className="text-center text-white mb-10">
          Have a project in mind? I&apos;d love to hear about it.
        </p>
         <form
          action="https://formspree.io/f/mnqekayg"
          method="POST"
          className="max-w-xl text-white mx-auto space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border text-white border-gray-300 rounded-lg px-4 py-3"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full border text-white border-gray-300 rounded-lg px-4 py-3"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="w-full border text-white border-gray-300 rounded-lg px-4 py-3"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form> 
      </section> */}
      
         
    </main>
  );
}
