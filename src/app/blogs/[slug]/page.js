import Header from '@/app/components/Header';
import { getPostBySlug, getPostSlugs } from '../../utils/markdown';
import ContactSection from '@/app/components/ContactSection';

const BlogPostPage = async ({ params }) => {
  const { slug } = params;
  const post = getPostBySlug(slug);

  return (
    <div className='bg-black text-white min-h-screen'>
      <Header />
      <main className="container mx-auto px-4 md:px-6 lg:px-8 py-6 pt-24">
        <article className="prose prose-invert max-w-2xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{post.frontmatter.title}</h1>
          <div className="text-gray-400 text-sm md:text-base mb-8">
            {post.frontmatter.date} • {post.frontmatter.readTime}
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.content }} className="prose prose-invert" />
        </article>
        <ContactSection />
      </main>
    </div>
  );
};

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.md$/, ''),
  }));
}

export default BlogPostPage;
