// components/HomeSection.js
"use client";

import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const HomeSection = () => {
  return (
    <section id="home" className="mb-20 bg-black mt-20 p-4 md:p-8 text-white slide-in-section">
      <h1 className="text-xl md:text-3xl text-green-400">
        <TypeAnimation
          sequence={[
            'Hey there!',
            1000,
            'Hey there! I\'m',
            2000,
          ]}
          wrapper="b"
          cursor={true}
          repeat={Infinity}
        />
      </h1>
      <h2 className="text-4xl md:text-8xl font-bold mt-4">Waleed Shoaib.</h2>
      <p className="text-lg md:text-3xl mt-6 font-bold">
        Software Engineer.
        <br />
        <span className="text-base md:text-3xl text-gray-400 font-bold">
        A Computer Science graduate passionate about exploring 
        </span>
        <br />
        <span className="text-base md:text-3xl text-gray-400 font-bold">
        and solving complex tech challenges
        </span>
      
      </p>

      <div className="mt-6">
        <p className="flex items-center mb-2 text-xs md:text-base">
          Currently specializing in Fullstack (React.js / Next.js/ Node.js/ Firestore / GCP / Graphql)
        </p>
        <p className="flex items-center text-xs md:text-base">
  Software Engineer at <a href="https://objex.tech/" className="text-green-400 ml-1">Objex</a>
</p>


      </div>
      <div className="mt-6 flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        <a href="https://github.com" className="bg-gray-900 px-4 py-2 rounded-md text-white hover:bg-gray-800 hover:text-green-400 transition duration-300 ease-in-out flex items-center justify-center md:justify-start">
          <FaGithub className="mr-2" /> 
          Github
        </a>
        <a href="https://linkedin.com" className="bg-gray-900 px-4 py-2 rounded-md text-white hover:bg-gray-800 hover:text-green-400 transition duration-300 ease-in-out flex items-center justify-center md:justify-start">
          <FaLinkedin className="mr-2" /> 
          LinkedIn
        </a>
        <a href="mailto:email@example.com" className="bg-gray-900 px-4 py-2 rounded-md text-white hover:bg-gray-800 hover:text-green-400 transition duration-300 ease-in-out flex items-center justify-center md:justify-start">
          <FaEnvelope className="mr-2" /> 
          Email
        </a>
      </div>
    </section>
  );
};

export default HomeSection;
