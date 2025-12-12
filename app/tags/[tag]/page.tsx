import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { Tag } from "@/components/tag";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllTags, getPostsByTagSlug, sortTagsByCount } from "@/lib/utils";
import { slug } from "github-slugger"; // Import here
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface TagPageProps {
  params: Promise<{
    tag: string;
  }>;
}

export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  const displayName = decodedTag.split("-").join(" ");
  
  return {
    title: `Tag: ${displayName}`,
    description: `Posts on the topic of ${displayName}`,
  };
}

export async function generateStaticParams() {
  const tags = getAllTags(posts);
  const paths = Object.keys(tags).map((tagName) => ({ 
    tag: slug(tagName) // Use imported slug function
  }));
  return paths;
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag || "");
  const displayName = decodedTag.split("-").join(" ");
  
  // The tag in URL is slugified, so use it as-is
  const allPosts = getPostsByTagSlug(posts, tag); // Pass the original tag
  const displayPosts = allPosts.filter(post => post.published);
  
  const allTags = getAllTags(posts);
  const sortedTags = sortTagsByCount(allTags);

  return (
    <div className="container max-w-4xl mx-auto py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl capitalize">
            {displayName}
          </h1>
          <p className="text-xl text-muted-foreground">
            {displayPosts.length} post{displayPosts.length !== 1 ? 's' : ''} tagged with {displayName}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-3 mt-8">
        <div className="col-span-12 col-start-1 sm:col-span-8">
          <hr className="mb-6" />
          {displayPosts.length > 0 ? (
            <ul className="flex flex-col gap-6">
              {displayPosts.map((post) => {
                const { slug: postSlug, date, title, description, tags } = post;
                return (
                  <li key={postSlug}>
                    <PostItem
                      slug={postSlug}
                      date={date}
                      title={title}
                      description={description}
                      tags={tags}
                    />
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="text-center py-8 text-muted-foreground">
              No published posts found for this tag.
            </p>
          )}
        </div>
        <Card className="col-span-12 row-start-3 h-fit sm:col-span-4 sm:col-start-9 sm:row-start-1">
          <CardHeader>
            <CardTitle>All Tags</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {sortedTags.length > 0 ? (
              sortedTags.map((t) => (
                <Tag 
                  tag={t} 
                  key={t} 
                  count={allTags[t]} 
                  current={slug(t) === tag} // Compare slugified versions
                />
              ))
            ) : (
              <p className="text-sm text-muted-foreground">No tags found</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}












// import { posts } from "#site/content";
// import { PostItem } from "@/components/post-item";
// import { Tag } from "@/components/tag";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { getAllTags, getPostsByTagSlug, sortTagsByCount } from "@/lib/utils";
// import { slug } from "github-slugger";
// import { Metadata } from "next";

// interface TagPageProps {
//   params: {
//     tag: string;
//   };
// }

// export async function generateMetadata({
//   params,
// }: TagPageProps): Promise<Metadata> {
//   const { tag } = params;
//   return {
//     title: tag,
//     description: `Posts on the topic of ${tag}`,
//   };
// }

// export const generateStaticParams = () => {
//   const tags = getAllTags(posts);
//   const paths = Object.keys(tags).map((tag) => ({ tag: slug(tag) }));
//   return paths;
// };

// export default function TagPage({ params }: TagPageProps) {
//   const { tag } = params;
//   const title = tag.split("-").join(" ");

//   const allPosts = getPostsByTagSlug(posts, tag);
//   const displayPosts = allPosts.filter(post => post.published);
//   const tags = getAllTags(posts);
//   const sortedTags = sortTagsByCount(tags);

//   return (
//     <div className="container max-w-4xl py-6 lg:py-10">
//       <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
//         <div className="flex-1 space-y-4">
//           <h1 className="inline-block font-black text-4xl lg:text-5xl capitalize">
//             {title}
//           </h1>
//         </div>
//       </div>
//       <div className="grid grid-cols-12 gap-3 mt-8">
//         <div className="col-span-12 col-start-1 sm:col-span-8">
//           <hr />
//           {displayPosts?.length > 0 ? (
//             <ul className="flex flex-col">
//               {displayPosts.map((post) => {
//                 const { slug, date, title, description, tags } = post;
//                 return (
//                   <li key={slug}>
//                     <PostItem
//                       slug={slug}
//                       date={date}
//                       title={title}
//                       description={description}
//                       tags={tags}
//                     />
//                   </li>
//                 );
//               })}
//             </ul>
//           ) : (
//             <p>Nothing to see here yet</p>
//           )}
//         </div>
//         <Card className="col-span-12 row-start-3 h-fit sm:col-span-4 sm:col-start-9 sm:row-start-1">
//           <CardHeader>
//             <CardTitle>Tags</CardTitle>
//           </CardHeader>
//           <CardContent className="flex flex-wrap gap-2">
//             {sortedTags?.map((t) => (
//               <Tag tag={t} key={t} count={tags[t]} current={slug(t) === tag} />
//             ))}
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }
