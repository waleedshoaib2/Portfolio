'use client';

import React from 'react';
import { FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-black py-20 text-center">
      <h2 className="text-5xl font-bold mb-6">Keep In Touch.</h2>
      <p className="text-lg mb-6 text-grey-400">
        I&apos;m currently specializing in <span className="text-green-400">Front-end Development.</span><br />
        Feel free to get in touch and talk more about your projects.
      </p>
      <div className="flex justify-center space-x-6 mb-10">
        <a href="https://linkedin.com" className="bg-gray-800 px-6 py-3 rounded-md text-white hover:bg-gray-700 transition duration-300 ease-in-out flex items-center">
          <FaLinkedin className="mr-2" /> 
          LinkedIn
        </a>
        <a href="mailto:email@example.com" className="bg-gray-800 px-6 py-3 rounded-md text-white hover:bg-gray-700 transition duration-300 ease-in-out flex items-center">
          <FaEnvelope className="mr-2" /> 
          Email
        </a>
        <a href="/path/to/resume.pdf" className="bg-gray-800 px-6 py-3 rounded-md text-white hover:bg-gray-700 transition duration-300 ease-in-out flex items-center">
          <FaFileAlt className="mr-2" /> 
          Resume
        </a>
      </div>
      <p className="text-sm text-gray-400">
        Designed and Developed by Waleed Shoaib.<br />
        Built with <a href="https://nextjs.org/" className="text-green-400">Next.js</a> & <a href="https://chakra-ui.com/" className="text-green-400">Tailwind CSS</a>. Hosted on <a href="https://vercel.com/" className="text-green-400">Vercel</a>.
      </p>
    </section>
  );
};

export default ContactSection;
