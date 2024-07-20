import Link from 'next/link';
import { getAllPosts } from '../utils/markdown';
import Header from '../components/Header';
import ContactSection from '../components/ContactSection';

const BlogList = async () => {
  const posts = getAllPosts();

  return (
    <div className='bg-black text-white'>
      <Header />
      <section id="blog" className="mb-8 p-4 md:p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl mt-20 font-bold text-white mb-2 animate__animated animate__fadeIn animate__delay-1s">
            Some Blogs I Wrote
          </h2>
          <p className="text-lg md:text-xl text-gray-400 animate__animated animate__fadeIn animate__delay-2s">
            Explore my latest thoughts and insights on various topics.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-black border border-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
              <h3 className="text-lg md:text-xl font-bold mb-2 text-white">{post.frontmatter.title}</h3>
              <div className="text-gray-400 text-sm md:text-base mb-2">
                {post.frontmatter.date} • 
              </div>
              <Link href={`/blogs/${post.slug}`} className="text-green-400 text-sm md:text-base hover:underline">
                Read more →
              </Link>
            </div>
          ))}
        </div>
      </section>
      <ContactSection />
    </div>
  );
};

export default BlogList;
