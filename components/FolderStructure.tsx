import React from 'react'

const FolderStructure = () => {
  return (
    <>
    <div>FolderStructure</div>
    <div>
        src/
├── app/
│   ├── (marketing)/          # Landing pages
│   ├── blog/
│   │   ├── [slug]/
│   │   │   └── page.tsx      # Blog post page
│   │   ├── page.tsx          # Blog listing
│   │   └── layout.tsx        # Blog layout
│   ├── components/
│   │   ├── blog/
│   │   │   ├── BlogCard.tsx  # Post card
│   │   │   ├── TableOfContents.tsx
│   │   │   ├── AuthorBio.tsx
│   │   │   └── ShareButtons.tsx
│   │   └── ui/
│   │       ├── Typography.tsx # Custom text components
│   │       └── CodeBlock.tsx
│   └── styles/
│       └── blog.css         # Blog-specific styles
├── content/
│   ├── blog/
│   │   ├── my-first-post.md
│   │   └── second-post.md
│   └── authors/
│       └── john-doe.json
└── lib/
    ├── mdx.ts              # MDX processing
    └── utils.ts
    </div>
    </>
  )
}

export default FolderStructure