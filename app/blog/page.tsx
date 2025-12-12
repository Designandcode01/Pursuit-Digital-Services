import { posts } from "#site/content";
import VeliteMdxGuide from "@/components/guides/VeliteMdxGuide";
import { PostItem } from "@/components/post-item";
// import { QueryPagination } from "@/components/query-pagination";
import { Tag } from "@/components/tag";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllTags, sortPosts, sortTagsByCount } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team: Pursuit Digital",
  description: "My ramblings on all things web development.",
};

const POSTS_PER_PAGE = 5;

// CORRECT: searchParams is a Promise in App Router
interface BlogPageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  // Await the searchParams Promise first
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;
  
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  // const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );

  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
     <div className="container max-w-4xl mx-auto px-4 py-6 lg:py-10"> 
          <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
                <div className="flex-1 space-y-4">
                  <div>
                    {/* // For agencies, SaaS, professional blogs */}
                      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Insights & Expertise
                        <span className="block text-cyan-600 mt-2">
                          From Our Digital Journey
                        </span>
                      </h1>
                      <p className="text-xl text-gray-600 mt-4 max-w-3xl">
                        Explore in-depth articles, tutorials, and case studies on modern web development, 
                        digital strategy, and cutting-edge technology solutions.
                      </p>
                  </div>
                <div className="min-h-screen bg-linear-to-b from-gray-900 to-black p-4 md:p-8">
                    <VeliteMdxGuide />
                      {/* or */}
                      {/* <VeliteMdxReference /> */}
                </div>
            </div>
          </div>
      
      <div className="grid grid-cols-12 gap-3 mt-8">
        <div className="col-span-12 col-start-1 sm:col-span-8">
          <hr className="mb-6" />
          
          {displayPosts.length > 0 ? (
            <ul className="flex flex-col gap-6">
              {displayPosts.map((post) => {
                const { slug, date, title, description, tags } = post;
                return (
                  <li key={slug}>
                    <PostItem
                      slug={slug}
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
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No posts found. Check back soon!
              </p>
            </div>
          )}
          
          {/* {totalPages > 1 && (
            <QueryPagination
              totalPages={totalPages}
              className="justify-end mt-8"
            />
          )} */}
        </div>
        
        <Card className="col-span-12 row-start-3 h-fit sm:col-span-4 sm:col-start-9 sm:row-start-1">
          <CardHeader>
            <CardTitle>Tags</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {sortedTags.length > 0 ? (
              sortedTags.map((tag) => (
                <Tag tag={tag} key={tag} count={tags[tag]} />
              ))
            ) : (
              <p className="text-sm text-muted-foreground">No tags yet</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}














// import { posts } from "#site/content";
// import { PostItem } from "@/components/post-item";
// import { QueryPagination } from "@/components/query-pagination";
// import { Tag } from "@/components/tag";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { getAllTags, sortPosts, sortTagsByCount } from "@/lib/utils";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "My blog",
//   description: "This is a description",
// };

// const POSTS_PER_PAGE = 5;

// interface BlogPageProps {
//   searchParams: {
//     page?: string;
//   };
// }

// export default async function BlogPage({ searchParams }: BlogPageProps) {
//   const currentPage = Number(searchParams?.page) || 1;
//   const sortedPosts = sortPosts(posts.filter((post) => post.published));
//   const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

//   const displayPosts = sortedPosts.slice(
//     POSTS_PER_PAGE * (currentPage - 1),
//     POSTS_PER_PAGE * currentPage
//   );

//   const tags = getAllTags(posts);
//   const sortedTags = sortTagsByCount(tags);

//   return (
//     <div className="container max-w-4xl py-6 lg:py-10">
//       <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
//         <div className="flex-1 space-y-4">
//           <h1 className="inline-block font-black text-4xl lg:text-5xl">Blog</h1>
//           <p className="text-xl text-muted-foreground">
//             My ramblings on all things web dev.
//           </p>
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
//           <QueryPagination
//             totalPages={totalPages}
//             className="justify-end mt-4"
//           />
//         </div>
//          <Card className="col-span-12 row-start-3 h-fit sm:col-span-4 sm:col-start-9 sm:row-start-1">
//           <CardHeader>
//             <CardTitle>Tags</CardTitle>
//           </CardHeader>
//           <CardContent className="flex flex-wrap gap-2">
//             {sortedTags?.map((tag) => (
//               <Tag tag={tag} key={tag} count={tags[tag]} />
//             ))}
//           </CardContent>
//         </Card> 
//       </div>
//     </div>
//   );
// }
