import Header from '@/app/components/Header';
import { getPostBySlug, getPostSlugs } from '../../utils/markdown';
import ContactSection from '@/app/components/ContactSection';

const BlogPostPage = async ({ params }) => {
  const { slug } = params;
  const post = getPostBySlug(slug);

  return (
    <div className='bg-black text-white'>
      <Header />
      <main className="max-w-4xl mx-auto px-4 md:px-8 py-6 pt-24"> {/* Adjust pt-24 as needed */}
        <article className="prose prose-invert">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.frontmatter.title}</h1>
          <div className="text-gray-400 text-sm md:text-base mb-6">
            {post.frontmatter.date} • {post.frontmatter.readTime}
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
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
