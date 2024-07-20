'use client';

import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="mb-20 bg-black p-4 md:p-8 text-white slide-in-section overflow-x-hidden">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 slide-in">⚡ About Me</h2>
      <div className="flex flex-col md:flex-row items-center slide-in">
        <div className="text-sm md:text-lg md:flex-1 mb-6 md:mb-0 leading-relaxed">
          <p>
            Inspired by Elliot Alderson in &quot;Mr. Robot,&quot; my journey in coding began with a fascination for the power and potential of technology. Originally on a pre-med track, I discovered my passion for coding and transitioned into software development. With three years of hands-on experience, I specialize in building robust, scalable applications.
          </p>
          <p className="mt-4">
            My expertise includes Front-End Development with React.js and Next.js, Back-End Development with Node.js, and Full-Stack Development ensuring seamless integration. Driven by curiosity and a problem-solving mindset, I thrive on creating impactful software that meets user needs and pushes technological boundaries. I am also passionate about continuous learning and often engage in competitive programming and open-source projects to hone my skills.
          </p>
          <p className="mt-4">
            In my free time, I enjoy playing games with friends, watching shows on Netflix, and playing football if the weather is good. I am excited about the future and the endless possibilities ahead. Let&apos;s connect and build the future together.
          </p>
        </div>
        <div className="md:ml-8">
          <img src="https://media.licdn.com/dms/image/D4D03AQGJ8kFyPB6n1Q/profile-displayphoto-shrink_800_800/0/1718558136116?e=1726704000&v=beta&t=8w3wihvnC2VuQCqZdW3qDkf8har6V0qBoLVAtwRS240" alt="Waleed Shoaib" width={300} height={300} className="rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
