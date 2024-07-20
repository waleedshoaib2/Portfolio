// components/ProjectsSection.js
"use client";

import React from 'react';
import { FaReact, FaPython, FaJsSquare, FaSass } from 'react-icons/fa';
import { SiChartdotjs } from 'react-icons/si';

const projects = [
  {
    title: 'Opiniometer',
    description: 'A web app to analyze whether an opinion on specific topic is positive or negative based on recent tweets using Natural Language Processing concept called Sentiment Analysis.',
    tech: [
      { icon: <FaReact />, color: 'text-blue-400' },
      { icon: <FaPython />, color: 'text-yellow-400' },
      { icon: <SiChartdotjs />, color: 'text-green-400' }
    ],
    link: '#',
    image: '/path/to/opiniometer-image.png' // Replace with the actual path to your image
  },
  {
    title: 'creative@home',
    description: 'A website that provides roadmap for various fields in Programming and help people learn to code for free.',
    tech: [
      { icon: <FaJsSquare />, color: 'text-yellow-300' },
      { icon: <FaSass />, color: 'text-pink-400' }
    ],
    link: '#',
    image: '/path/to/creative-home-image.png' // Replace with the actual path to your image
  },
  // Add more projects as needed
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="mb-20 bg-black mt-20 p-4 md:p-8 text-white slide-in-section">
      <h2 className="text-3xl md:text-5xl font-bold text-green-400 mb-8">All Creative Works.</h2>
      <p className="mb-12">Here's some of my projects that I have worked on.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl md:text-2xl font-bold mb-4">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex space-x-2 mb-4">
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} className={`text-lg md:text-2xl ${tech.color}`}>{tech.icon}</span>
              ))}
            </div>
            <a href={project.link} className="text-green-400 hover:underline">Explore more &rarr;</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
