import React from 'react';
import { FaReact, FaPython, FaJsSquare, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiChartdotjs, SiMongodb, SiFlask, SiGooglecolab, SiExpress, SiNextdotjs } from 'react-icons/si';

const projects = [
  {
    title: 'Bajwa Furniture',
    description: 'A furniture website built with the MERN stack, featuring AI-driven recommendations and visual search using machine learning.',
    tech: [
      { icon: <FaReact />, color: 'text-blue-400' },
      { icon: <FaJsSquare />, color: 'text-yellow-300' },
      { icon: <FaPython />, color: 'text-yellow-400' },
      { icon: <SiExpress />, color: 'text-gray-500' },
      { icon: <SiMongodb />, color: 'text-green-500' },
      { icon: <SiFlask />, color: 'text-white' },
      { icon: <SiGooglecolab />, color: 'text-blue-500' }
    ],
    details: [
      'Implemented AI-driven recommendations',
      'Developed visual search using machine learning',
      'Built with the MERN stack',
      'Used Flask for backend services',

    ],
    githubLink: 'https://github.com/waleedshoaib2/BajwaFurniture' // Replace with your actual GitHub link
  },
  {
    title: 'ByteBlog',
    description: 'A technical blogging platform built with React, MongoDB, Node.js, and styled with Tailwind CSS, offering an engaging and modern blogging experience.',
    tech: [
      { icon: <FaReact />, color: 'text-blue-400' },
      { icon: <FaJsSquare />, color: 'text-yellow-300' },
      { icon: <SiChartdotjs />, color: 'text-green-400' },
      { icon: <FaNodeJs />, color: 'text-green-400' },
      { icon: <SiMongodb />, color: 'text-green-500' },
      { icon: <SiNextdotjs />, color: 'text-black' }  // Added Next.js icon here
    ],
    details: [
      'Responsive and modern UI',
      'Real-time content management',
      'Built with React, MongoDB, Node.js, and Next.js'
    ],
    githubLink: 'https://github.com/waleedshoaib2/ByteBlog' // Replace with your actual GitHub link
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="mb-20 bg-black mt-20 p-4 md:p-8 text-white slide-in-section">
      <h2 className="text-3xl md:text-5xl font-bold text-green-400 mb-8">All Creative Works.</h2>
      <p className="mb-12">Here&apos;s some of my projects that I have worked on.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="relative bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out group cursor-pointer"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-green-400 transition duration-300">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              {project.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
            <div className="flex space-x-2 mb-4">
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} className={`text-lg md:text-2xl ${tech.color}`}>{tech.icon}</span>
              ))}
            </div>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-green-400 hover:underline mt-2">
              <FaGithub className="mr-2" /> View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
