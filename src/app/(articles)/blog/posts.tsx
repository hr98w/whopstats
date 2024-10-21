import Link from 'next/link';
import { formatDate } from '@/app/(articles)/blog/utils';
import blogData from '@/app/(articles)/blog/blogs.json';

export async function BlogPosts() {
  let allBlogs = blogData.map((post) => ({
    slug: post.slug,
    metadata: {
      title: post.title,
      publishedAt: post.publishedAt,
    },
  }));

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link key={post.slug} className="flex flex-col space-y-1 mb-4" href={`${post.slug}`}>
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[150px] tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">{post.metadata.title}</p>
            </div>
          </Link>
        ))}
    </div>
  );
}
