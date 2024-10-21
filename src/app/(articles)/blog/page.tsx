import { BlogPosts } from '@/app/(articles)/blog/posts';

export const metadata = {
  title: 'Blogs - Whopstats.com',
  description: 'Read the latest blogs from Whopstats.',
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Blogs</h1>
      <BlogPosts />
    </section>
  );
}
