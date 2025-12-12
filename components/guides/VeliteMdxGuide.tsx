// components/guides/VeliteMdxGuide.tsx
import React from 'react';
import { 
  FileText, 
  Zap, 
  ShieldCheck, 
  Palette, 
  Cpu,
  CheckCircle2,
  XCircle
} from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  points: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, points }) => (
  <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 sm:p-6 hover:border-cyan-500/30 transition-all">
    <div className="flex items-start sm:items-center gap-3 mb-3 sm:mb-4">
      <div className="p-2 bg-gray-700/50 rounded-lg shrink-0">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-200">{title}</h3>
    </div>
    <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4">{description}</p>
    <ul className="space-y-1.5 sm:space-y-2">
      {points.map((point, index) => (
        <li key={index} className="flex items-start gap-2 text-gray-300 text-sm sm:text-base">
          <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

interface ComparisonRowProps {
  aspect: string;
  velite: string;
  mdx: string;
}

const ComparisonRow: React.FC<ComparisonRowProps> = ({ aspect, velite, mdx }) => (
  <div className="grid grid-cols-1 xs:grid-cols-3 gap-2 xs:gap-4 py-3 border-b border-gray-700/50">
    <div className="text-gray-300 font-medium text-sm sm:text-base">{aspect}</div>
    <div className="text-cyan-400 text-sm sm:text-base pl-5 xs:pl-0">{velite}</div>
    <div className="text-emerald-400 text-sm sm:text-base pl-5 xs:pl-0">{mdx}</div>
  </div>
);

const VeliteMdxGuide: React.FC = () => {
  const features = [
    {
      title: "Velite: The Content Orchestrator",
      description: "A build-time content pipeline that brings structure, type-safety, and performance to your content.",
      icon: <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />,
      points: [
        "Generates TypeScript types from content schemas",
        "Validates frontmatter with Zod schemas",
        "Optimizes and transforms images automatically",
        "Processes MDX/Markdown at build time",
        "Creates searchable content indexes"
      ]
    },
    {
      title: "MDX: The Interactive Content Format",
      description: "An enhanced markdown format that allows React components directly in your content.",
      icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />,
      points: [
        "Write JSX components in markdown content",
        "Create interactive blog elements",
        "Use custom React components as shortcodes",
        "Maintain familiar markdown syntax",
        "Embed live code examples and demos"
      ]
    }
  ];

  const comparisonData = [
    { aspect: "Type Safety", velite: "✅ Excellent", mdx: "❌ None by itself" },
    { aspect: "Data Validation", velite: "✅ Zod schemas", mdx: "❌ Just frontmatter" },
    { aspect: "Content Processing", velite: "✅ Transforms MDX", mdx: "✅ Renders with React" },
    { aspect: "Interactivity", velite: "❌ Can't add", mdx: "✅ Full React components" },
    { aspect: "Images", velite: "✅ Optimizes", mdx: "❌ Just references" },
    { aspect: "Performance", velite: "✅ Build-time", mdx: "⚠️ Client-side rendering" }
  ];

  const workflowSteps = [
    {
      step: 1,
      title: "Write Content",
      description: "Create .mdx files with frontmatter and React components",
      code: `// blog/post.mdx
---
title: "My Post"
date: "2024-01-15"
---

# Welcome

<YouTubeVideo id="abc123" />`
    },
    {
      step: 2,
      title: "Velite Processes",
      description: "Validates, optimizes, and generates TypeScript types",
      code: `// velite.config.ts
const posts = defineCollection({
  pattern: 'blog/**/*.mdx',
  schema: s.object({
    title: s.string(),
    body: s.mdx() // ← Processes MDX!
  })
})`
    },
    {
      step: 3,
      title: "Render in Next.js",
      description: "Use type-safe content with interactive MDX components",
      code: `// app/blog/[slug]/page.tsx
export default async function Post({ params }) {
  const post = await getPost(params.slug) // ← Type-safe!
  return (
    <article>
      <h1>{post.title}</h1>
      <MDXContent code={post.body} />
    </article>
  )
}`
    }
  ];

  return (
    <div className="w-full max-w-full lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
      {/* Header */}
      <div className="text-center space-y-3 sm:space-y-4 pt-4 sm:pt-6">
        <div className="inline-flex items-center gap-2 bg-linear-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
          <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
          <span className="text-xs sm:text-sm font-medium text-cyan-300">Next.js Blog Stack</span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-100 px-2">
          Velite + MDX: The Perfect Content Duo
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-2">
          How Velite s content orchestration and MDX s interactive authoring work together 
          to create powerful Next.js blogs.
        </p>
      </div>

      {/* Key Insight */}
      <div className="bg-linear-to-r from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
          <div className="p-2 sm:p-3 bg-cyan-500/10 rounded-lg shrink-0">
            <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-200 mb-2">
              Complementary, Not Competitive
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Velite and MDX solve different problems:{' '}
              <span className="text-cyan-300">Velite manages and validates content</span>, 
              while{' '}
              <span className="text-emerald-300">MDX enables rich, interactive content creation</span>. 
              Together, they provide both structure and flexibility.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>

      {/* Comparison Table */}
      <div className="bg-gray-900/50 border border-gray-700 rounded-xl overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-gray-700">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-200">Direct Comparison</h2>
          <p className="text-gray-400 text-sm sm:text-base mt-1 sm:mt-2">Understanding their distinct roles</p>
        </div>
        <div className="p-4 sm:p-6 overflow-x-auto">
          <div className="min-w-[300px] sm:min-w-0">
            <div className="grid grid-cols-1 xs:grid-cols-3 gap-2 xs:gap-4 mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-gray-700">
              <div className="text-gray-400 font-medium text-sm sm:text-base">Aspect</div>
              <div className="text-cyan-400 font-medium text-sm sm:text-base">Velite</div>
              <div className="text-emerald-400 font-medium text-sm sm:text-base">MDX</div>
            </div>
            {comparisonData.map((row, index) => (
              <ComparisonRow key={index} {...row} />
            ))}
          </div>
        </div>
      </div>

      {/* Workflow Visualization */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-200 mb-4 sm:mb-6">How They Work Together</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {workflowSteps.map((step) => (
            <div key={step.step} className="relative">
              <div className="absolute -top-3 left-4 sm:left-6 w-7 h-7 sm:w-8 sm:h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                {step.step}
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 sm:p-6 pt-7 sm:pt-8 h-full">
                <h3 className="text-base sm:text-lg font-semibold text-gray-200 mb-2">{step.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">{step.description}</p>
                <div className="bg-gray-900 rounded-lg p-3 sm:p-4 overflow-x-auto">
                  <pre className="text-xs sm:text-sm text-gray-300 whitespace-pre-wrap wrap-break-words">
                    <code>{step.code}</code>
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Structure */}
      <div className="bg-gray-900/30 border border-gray-700 rounded-xl p-4 sm:p-6 overflow-x-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-200 mb-3 sm:mb-4">Typical Project Structure</h2>
        <div className="bg-black/50 rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm min-w-[300px]">
          <div className="text-cyan-300">my-blog/</div>
          <div className="ml-3 sm:ml-4 text-emerald-300">content/</div>
          <div className="ml-6 sm:ml-8 text-gray-300">posts/</div>
          <div className="ml-9 sm:ml-12 text-gray-400">└── hello-world.mdx <span className="text-gray-600"># MDX with frontmatter</span></div>
          <div className="ml-3 sm:ml-4 text-cyan-300">velite.config.ts <span className="text-gray-600"># Content configuration</span></div>
          <div className="ml-3 sm:ml-4 text-emerald-300">app/</div>
          <div className="ml-6 sm:ml-8 text-gray-300">blog/</div>
          <div className="ml-9 sm:ml-12 text-gray-400">├── page.tsx <span className="text-gray-600"># Blog index (uses Velite data)</span></div>
          <div className="ml-9 sm:ml-12 text-gray-400">└── [slug]/</div>
          <div className="ml-12 sm:ml-16 text-gray-400">└── page.tsx <span className="text-gray-600"># Post page (renders MDX)</span></div>
          <div className="ml-3 sm:ml-4 text-cyan-300">components/</div>
          <div className="ml-6 sm:ml-8 text-gray-300">mdx/</div>
          <div className="ml-9 sm:ml-12 text-gray-400">└── custom-components.tsx <span className="text-gray-600"># For MDX</span></div>
        </div>
      </div>

      {/* When to Use */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-linear-to-br from-cyan-500/5 to-transparent border border-cyan-500/20 rounded-xl p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-semibold text-cyan-300 mb-3 sm:mb-4">✅ Perfect Together When...</h3>
          <ul className="space-y-2 sm:space-y-3">
            <li className="flex items-start gap-2 text-gray-300 text-sm sm:text-base">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 shrink-0" />
              <span>You need type-safe content management</span>
            </li>
            <li className="flex items-start gap-2 text-gray-300 text-sm sm:text-base">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 shrink-0" />
              <span>Interactive blog posts with React components</span>
            </li>
            <li className="flex items-start gap-2 text-gray-300 text-sm sm:text-base">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 shrink-0" />
              <span>Build-time performance is critical</span>
            </li>
            <li className="flex items-start gap-2 text-gray-300 text-sm sm:text-base">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 shrink-0" />
              <span>You want excellent developer experience</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-linear-to-br from-red-500/5 to-transparent border border-red-500/20 rounded-xl p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-semibold text-red-300 mb-3 sm:mb-4">⚠️ Consider Alternatives When...</h3>
          <ul className="space-y-2 sm:space-y-3">
            <li className="flex items-start gap-2 text-gray-300 text-sm sm:text-base">
              <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mt-0.5 shrink-0" />
              <span>Non-technical editors need visual interface (TinaCMS)</span>
            </li>
            <li className="flex items-start gap-2 text-gray-300 text-sm sm:text-base">
              <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mt-0.5 shrink-0" />
              <span>Real-time collaborative editing (Payload CMS)</span>
            </li>
            <li className="flex items-start gap-2 text-gray-300 text-sm sm:text-base">
              <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mt-0.5 shrink-0" />
              <span>Enterprise content workflows (Contentful)</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Quick Start */}
      <div className="text-center p-4 sm:p-6 border border-gray-700 rounded-xl mb-6 sm:mb-8">
        <Palette className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400 mx-auto mb-3 sm:mb-4" />
        <h2 className="text-xl sm:text-2xl font-bold text-gray-200 mb-2">Ready to Start?</h2>
        <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4 max-w-2xl mx-auto">
          Install Velite, create your config, write MDX content, and enjoy type-safe,
          interactive blogging.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 bg-black/50 rounded-lg p-3 sm:p-4">
          <code className="text-gray-300 font-mono text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1 bg-black/30 rounded">
            npm install velite
          </code>
          <div className="hidden sm:block w-px h-6 bg-gray-700" />
          <code className="text-gray-300 font-mono text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1 bg-black/30 rounded">
            npx velite init
          </code>
        </div>
      </div>
    </div>
  );
};

export default VeliteMdxGuide;











// // components/guides/VeliteMdxGuide.tsx
// import React from 'react';
// import { 
//   // Code2, 
//   FileText, 
//   Zap, 
//   ShieldCheck, 
//   Palette, 
//   Cpu,
//   CheckCircle2,
//   XCircle
// } from 'lucide-react';

// interface FeatureCardProps {
//   title: string;
//   description: string;
//   icon: React.ReactNode;
//   points: string[];
// }

// const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, points }) => (
//   <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/30 transition-all">
//     <div className="flex items-center gap-3 mb-4">
//       <div className="p-2 bg-gray-700/50 rounded-lg">
//         {icon}
//       </div>
//       <h3 className="text-xl font-semibold text-gray-200">{title}</h3>
//     </div>
//     <p className="text-gray-400 mb-4">{description}</p>
//     <ul className="space-y-2">
//       {points.map((point, index) => (
//         <li key={index} className="flex items-start gap-2 text-gray-300">
//           <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
//           <span>{point}</span>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// interface ComparisonRowProps {
//   aspect: string;
//   velite: string;
//   mdx: string;
// }

// const ComparisonRow: React.FC<ComparisonRowProps> = ({ aspect, velite, mdx }) => (
//   <div className="grid grid-cols-3 gap-4 py-3 border-b border-gray-700/50">
//     <div className="text-gray-300 font-medium">{aspect}</div>
//     <div className="text-cyan-400">{velite}</div>
//     <div className="text-emerald-400">{mdx}</div>
//   </div>
// );

// const VeliteMdxGuide: React.FC = () => {
//   const features = [
//     {
//       title: "Velite: The Content Orchestrator",
//       description: "A build-time content pipeline that brings structure, type-safety, and performance to your content.",
//       icon: <Cpu className="w-6 h-6 text-cyan-400" />,
//       points: [
//         "Generates TypeScript types from content schemas",
//         "Validates frontmatter with Zod schemas",
//         "Optimizes and transforms images automatically",
//         "Processes MDX/Markdown at build time",
//         "Creates searchable content indexes"
//       ]
//     },
//     {
//       title: "MDX: The Interactive Content Format",
//       description: "An enhanced markdown format that allows React components directly in your content.",
//       icon: <FileText className="w-6 h-6 text-emerald-400" />,
//       points: [
//         "Write JSX components in markdown content",
//         "Create interactive blog elements",
//         "Use custom React components as shortcodes",
//         "Maintain familiar markdown syntax",
//         "Embed live code examples and demos"
//       ]
//     }
//   ];

//   const comparisonData = [
//     { aspect: "Type Safety", velite: "✅ Excellent", mdx: "❌ None by itself" },
//     { aspect: "Data Validation", velite: "✅ Zod schemas", mdx: "❌ Just frontmatter" },
//     { aspect: "Content Processing", velite: "✅ Transforms MDX", mdx: "✅ Renders with React" },
//     { aspect: "Interactivity", velite: "❌ Can't add", mdx: "✅ Full React components" },
//     { aspect: "Images", velite: "✅ Optimizes", mdx: "❌ Just references" },
//     { aspect: "Performance", velite: "✅ Build-time", mdx: "⚠️ Client-side rendering" }
//   ];

//   const workflowSteps = [
//     {
//       step: 1,
//       title: "Write Content",
//       description: "Create .mdx files with frontmatter and React components",
//       code: `// blog/post.mdx
// ---
// title: "My Post"
// date: "2024-01-15"
// ---

// # Welcome

// <YouTubeVideo id="abc123" />`
//     },
//     {
//       step: 2,
//       title: "Velite Processes",
//       description: "Validates, optimizes, and generates TypeScript types",
//       code: `// velite.config.ts
// const posts = defineCollection({
//   pattern: 'blog/**/*.mdx',
//   schema: s.object({
//     title: s.string(),
//     body: s.mdx() // ← Processes MDX!
//   })
// })`
//     },
//     {
//       step: 3,
//       title: "Render in Next.js",
//       description: "Use type-safe content with interactive MDX components",
//       code: `// app/blog/[slug]/page.tsx
// export default async function Post({ params }) {
//   const post = await getPost(params.slug) // ← Type-safe!
//   return (
//     <article>
//       <h1>{post.title}</h1>
//       <MDXContent code={post.body} />
//     </article>
//   )
// }`
//     }
//   ];

//   return (
//     <div className="container max-w-6xl mx-auto space-y-12">
//       {/* Header */}
//       <div className="text-center space-y-4">
//         <div className="inline-flex items-center gap-2 bg-linear-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 rounded-full px-4 py-2">
//           <Zap className="w-4 h-4 text-cyan-400" />
//           <span className="text-sm font-medium text-cyan-300">Next.js Blog Stack</span>
//         </div>
//         <h1 className="text-4xl font-bold text-gray-100">
//           Velite + MDX: The Perfect Content Duo
//         </h1>
//         <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//           How Velite s content orchestration and MDX s interactive authoring work together 
//           to create powerful Next.js blogs.
//         </p>
//       </div>

//       {/* Key Insight */}
//       <div className="bg-linear-to-r from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl p-6">
//         <div className="flex items-start gap-4">
//           <div className="p-3 bg-cyan-500/10 rounded-lg">
//             <ShieldCheck className="w-6 h-6 text-cyan-400" />
//           </div>
//           <div className='container'>
//             <h3 className="text-lg font-semibold text-gray-200 mb-2">
//               Complementary, Not Competitive
//             </h3>
//             <p className="text-gray-400">
//               Velite <br /> and MDX solve different problems: <span className="text-cyan-300">Velite manages <br /> and validates content</span>, 
//               while <span className="text-emerald-300">MDX enables rich,<br /> interactive content creation</span>. Together, they 
//               provide both structure and flexibility.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Features Grid */}
//       <div className="grid md:grid-cols-2 gap-6">
//         {features.map((feature, index) => (
//           <FeatureCard key={index} {...feature} />
//         ))}
//       </div>

//       {/* Comparison Table */}
//       <div className="bg-gray-900/50 border border-gray-700 rounded-xl overflow-hidden">
//         <div className="p-6 border-b border-gray-700">
//           <h2 className="text-2xl font-bold text-gray-200">Direct Comparison</h2>
//           <p className="text-gray-400 mt-2">Understanding their distinct roles</p>
//         </div>
//         <div className="p-6">
//           <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-gray-700">
//             <div className="text-gray-400 font-medium">Aspect</div>
//             <div className="text-cyan-400 font-medium">Velite</div>
//             <div className="text-emerald-400 font-medium">MDX</div>
//           </div>
//           {comparisonData.map((row, index) => (
//             <ComparisonRow key={index} {...row} />
//           ))}
//         </div>
//       </div>

//       {/* Workflow Visualization */}
//       <div>
//         <h2 className="text-2xl font-bold text-gray-200 mb-6">How They Work Together</h2>
//         <div className="grid md:grid-cols-3 gap-6">
//           {workflowSteps.map((step) => (
//             <div key={step.step} className="relative">
//               <div className="absolute -top-3 left-6 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
//                 {step.step}
//               </div>
//               <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 pt-8">
//                 <h3 className="text-lg font-semibold text-gray-200 mb-2">{step.title}</h3>
//                 <p className="text-gray-400 mb-4 text-sm">{step.description}</p>
//                 <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
//                   <pre className="text-sm text-gray-300">
//                     <code>{step.code}</code>
//                   </pre>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Project Structure */}
//       <div className="bg-gray-900/30 border border-gray-700 rounded-xl p-6">
//         <h2 className="text-2xl font-bold text-gray-200 mb-4">Typical Project Structure</h2>
//         <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
//           <div className="text-cyan-300">my-blog/</div>
//           <div className="ml-4 text-emerald-300">content/</div>
//           <div className="ml-8 text-gray-300">posts/</div>
//           <div className="ml-12 text-gray-400">└── hello-world.mdx <span className="text-gray-600"># MDX with frontmatter</span></div>
//           <div className="ml-4 text-cyan-300">velite.config.ts <span className="text-gray-600"># Content configuration</span></div>
//           <div className="ml-4 text-emerald-300">app/</div>
//           <div className="ml-8 text-gray-300">blog/</div>
//           <div className="ml-12 text-gray-400">├── page.tsx <span className="text-gray-600"># Blog index (uses Velite data)</span></div>
//           <div className="ml-12 text-gray-400">└── [slug]/</div>
//           <div className="ml-16 text-gray-400">└── page.tsx <span className="text-gray-600"># Post page (renders MDX)</span></div>
//           <div className="ml-4 text-cyan-300">components/</div>
//           <div className="ml-8 text-gray-300">mdx/</div>
//           <div className="ml-12 text-gray-400">└── custom-components.tsx <span className="text-gray-600"># For MDX</span></div>
//         </div>
//       </div>

//       {/* When to Use */}
//       <div className="grid md:grid-cols-2 gap-6">
//         <div className="bg-linear-to-br from-cyan-500/5 to-transparent border border-cyan-500/20 rounded-xl p-6">
//           <h3 className="text-xl font-semibold text-cyan-300 mb-4">✅ Perfect Together When...</h3>
//           <ul className="space-y-3">
//             <li className="flex items-start gap-2 text-gray-300">
//               <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
//               <span>You need type-safe content management</span>
//             </li>
//             <li className="flex items-start gap-2 text-gray-300">
//               <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
//               <span>Interactive blog posts with React components</span>
//             </li>
//             <li className="flex items-start gap-2 text-gray-300">
//               <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
//               <span>Build-time performance is critical</span>
//             </li>
//             <li className="flex items-start gap-2 text-gray-300">
//               <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
//               <span>You want excellent developer experience</span>
//             </li>
//           </ul>
//         </div>
        
//         <div className="bg-linear-to-br from-red-500/5 to-transparent border border-red-500/20 rounded-xl p-6">
//           <h3 className="text-xl font-semibold text-red-300 mb-4">⚠️ Consider Alternatives When...</h3>
//           <ul className="space-y-3">
//             <li className="flex items-start gap-2 text-gray-300">
//               <XCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
//               <span>Non-technical editors need visual interface (TinaCMS)</span>
//             </li>
//             <li className="flex items-start gap-2 text-gray-300">
//               <XCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
//               <span>Real-time collaborative editing (Payload CMS)</span>
//             </li>
//             <li className="flex items-start gap-2 text-gray-300">
//               <XCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
//               <span>Enterprise content workflows (Contentful)</span>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Quick Start */}
//       <div className="text-center p-6 border border-gray-700 rounded-xl">
//         <Palette className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
//         <h2 className="text-2xl font-bold text-gray-200 mb-2">Ready to Start?</h2>
//         <p className="text-gray-400 mb-4 max-w-2xl mx-auto">
//           Install Velite, create your config, write MDX content, and enjoy type-safe,
//           interactive blogging.
//         </p>
//         <div className="inline-flex items-center gap-4 bg-black/50 rounded-lg p-4">
//           <code className="text-gray-300 font-mono">npm install velite</code>
//           <div className="w-px h-6 bg-gray-700" />
//           <code className="text-gray-300 font-mono">npx velite init</code>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VeliteMdxGuide;