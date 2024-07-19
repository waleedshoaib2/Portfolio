"use client";

import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const HomeSection = () => {
  return (
    <section id="home" className="mb-20 bg-black mt-20 p-8 text-white slide-in-section">
      <h1 className="text-3xl text-green-400">
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
      <h2 className="text-8xl font-bold mt-4">Waleed Shoaib.</h2>
      <p className="text-3xl mt-6 font-bold">
        Software Engineer.
        <br />
        <span className="text-3xl text-gray-400 font-bold">
          A self-taught developer with an interest in Computer Science.
        </span>
      </p>

      <div className="mt-6">
        <p className="flex items-center mb-2">
          Currently specializing in Frontend (React / Next.js)
        </p>
        <p className="flex items-center">
          Frontend Engineer at <a href="#" className="text-green-400"> Objex</a>
        </p>
      </div>
      <div className="mt-6 flex space-x-4">
        <a href="https://github.com" className="bg-gray-900 px-4 py-2 rounded-md text-white hover:bg-gray-800 hover:text-green-400 transition duration-300 ease-in-out flex items-center">
          <FaGithub className="mr-2" /> 
          Github
        </a>
        <a href="https://linkedin.com" className="bg-gray-900 px-4 py-2 rounded-md text-white hover:bg-gray-800 hover:text-green-400 transition duration-300 ease-in-out flex items-center">
          <FaLinkedin className="mr-2" /> 
          LinkedIn
        </a>
        <a href="mailto:email@example.com" className="bg-gray-900 px-4 py-2 rounded-md text-white hover:bg-gray-800 hover:text-green-400 transition duration-300 ease-in-out flex items-center">
          <FaEnvelope className="mr-2" /> 
          Email
        </a>
      </div>
    </section>
  );
};

export default HomeSection;
