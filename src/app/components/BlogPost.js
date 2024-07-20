import { getPostBySlug, getPostSlugs } from '../../../utils/markdown';

const BlogPost = async ({ params }) => {
  const { slug } = params;
  const post = getPostBySlug(slug);

  return (
    <article className="prose prose-lg mx-auto p-4 md:p-8 text-white bg-black">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.frontmatter.title}</h1>
      <div className="text-gray-400 text-sm md:text-base mb-4">
        {post.frontmatter.date} • {post.frontmatter.readTime}
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
};

export default BlogPost;
