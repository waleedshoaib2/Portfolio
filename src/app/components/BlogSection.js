"use client";

import React from 'react';
import Link from 'next/link';

const blogs = [
  {
    title: 'Unleash Your Dev Blog: Write More with GitHub Issues as Your CMS',
    date: 'April 2 2024',
    readTime: '3 min read',
    link: '/blogs/sample-post',
  },
  {
    title: 'Code Faster with Vim Shortcuts!',
    date: 'July 18 2022',
    readTime: '2 min read',
    link: '/blogs/sample-post',
  },
  {
    title: 'Easily Boost Your Productivity With Code Snippets',
    date: 'September 22 2021',
    readTime: '3 min read',
    link: '/blogs/sample-post',
  },
  {
    title: 'How I Make My First (real) Open Source Contribution',
    date: 'June 20 2021',
    readTime: '5 min read',
    link: '/blogs/sample-post',
  },
  // Add more blog posts as needed
];

const BlogSection = () => {
  return (
    <section id="blog" className="mb-20 bg-black p-4 md:p-8 text-white">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
          Latest Articles
        </h2>
        <Link href="/blogs" className="text-green-400 text-sm md:text-base hover:underline">
          View all articles →
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-black border border-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="text-lg md:text-xl font-bold mb-2 text-white">{blog.title}</h3>
            <div className="text-gray-400 text-sm md:text-base mb-2">
              {blog.date} • {blog.readTime}
            </div>
            <Link href={blog.link} className="text-green-400 text-sm md:text-base hover:underline">
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
