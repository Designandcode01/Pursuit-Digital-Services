// components/guides/VeliteMdxReference.tsx
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  color: 'cyan' | 'emerald' | 'blue';
}

const Section: React.FC<SectionProps> = ({ title, children, color }) => {
  const colorClasses = {
    cyan: 'border-l-cyan-500 bg-cyan-500/5',
    emerald: 'border-l-emerald-500 bg-emerald-500/5',
    blue: 'border-l-blue-500 bg-blue-500/5'
  };

  return (
    <div className={`border-l-4 ${colorClasses[color]} p-4 rounded-r-lg mb-6`}>
      <h3 className={`text-lg font-semibold mb-2 ${
        color === 'cyan' ? 'text-cyan-300' : 
        color === 'emerald' ? 'text-emerald-300' : 
        'text-blue-300'
      }`}>
        {title}
      </h3>
      <div className="text-gray-300 space-y-2">
        {children}
      </div>
    </div>
  );
};

const VeliteMdxReference: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-900/30 rounded-xl border border-gray-700">
      <h2 className="text-2xl font-bold text-gray-100 mb-2">Velite + MDX Reference</h2>
      <p className="text-gray-400 mb-6">
        A quick guide to understanding how these tools complement each other in Next.js blogs.
      </p>

      {/* Core Concept */}
      <Section title="Core Concept" color="blue">
        <p>
          <strong>Velite</strong> is a <em>build-time content pipeline</em> that validates, optimizes, 
          and structures your content.
        </p>
        <p>
          <strong>MDX</strong> is an <em>authoring format</em> that lets you write JSX components in markdown.
        </p>
        <p className="text-sm text-gray-400 italic">
          💡 Velite processes MDX files, adding type safety and structure to interactive content.
        </p>
      </Section>

      {/* How They Work Together */}
      <Section title="Workflow" color="cyan">
        <ol className="list-decimal list-inside space-y-2">
          <li>Write .mdx files with frontmatter and React components</li>
          <li>Velite processes files: validates, optimizes images, generates types</li>
          <li>Next.js imports type-safe data from Velite</li>
          <li>Render MDX content with React components</li>
        </ol>
      </Section>

      {/* Code Example */}
      <Section title="Example Config" color="emerald">
        <div className="bg-black/50 p-4 rounded-lg font-mono text-sm">
          <div className="text-cyan-300">
            {/* // velite.config.ts */}

          </div>
          <div className="text-gray-400">const posts = defineCollection(&#123;</div>
          <div className="text-gray-400 ml-4">pattern: 
            <span className="text-emerald-300">posts/**/*.mdx</span>
            </div>
          <div className="text-gray-400 ml-4">schema: s.object(&#123;</div>
          <div className="text-gray-400 ml-8">title: s.string(),</div>
          <div className="text-gray-400 ml-8">body: <span className="text-cyan-300">s.mdx()</span> <span className="text-gray-600">
            {/* // ← Velite processes MDX */}
            </span></div>
          <div className="text-gray-400 ml-4">&#125;)</div>
          <div className="text-gray-400">&#125;)</div>
        </div>
      </Section>

      {/* Key Benefits */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
          <h4 className="font-semibold text-cyan-300 mb-2">Velite Benefits</h4>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>• TypeScript types for all content</li>
            <li>• Image optimization</li>
            <li>• Schema validation</li>
            <li>• Build-time performance</li>
          </ul>
        </div>
        <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
          <h4 className="font-semibold text-emerald-300 mb-2">MDX Benefits</h4>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>• React components in markdown</li>
            <li>• Interactive content</li>
            <li>• Custom shortcodes</li>
            <li>• Familiar syntax</li>
          </ul>
        </div>
      </div>

      {/* Use Cases */}
      <Section title="Best For" color="blue">
        <ul className="space-y-2">
          <li>
            <strong className="text-gray-200">Personal/team blogs</strong> - Perfect balance of structure and flexibility
          </li>
          <li>
            <strong className="text-gray-200">Documentation sites</strong> - Type-safe content with interactive examples
          </li>
          <li>
            <strong className="text-gray-200">Portfolio projects</strong> - Showcase work with interactive demos
          </li>
        </ul>
      </Section>

      {/* Quick Setup */}
      <div className="mt-8 p-4 bg-gray-800/50 rounded-lg">
        <h4 className="font-semibold text-gray-200 mb-2">Quick Start</h4>
        <div className="flex flex-wrap gap-2">
          <code className="px-3 py-1 bg-black/50 rounded text-sm text-gray-300">npm install velite</code>
          <code className="px-3 py-1 bg-black/50 rounded text-sm text-gray-300">npx velite init</code>
          <code className="px-3 py-1 bg-black/50 rounded text-sm text-gray-300">mkdir content/posts</code>
          <code className="px-3 py-1 bg-black/50 rounded text-sm text-gray-300">create your first .mdx file</code>
        </div>
      </div>
    </div>
  );
};

export default VeliteMdxReference;