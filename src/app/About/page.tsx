"use client";
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const About = () => {
  const onClickHandler = () => {
    alert("Thank you for watching");
  };

  const [likes, setLikes] = useState(0);

  return (
    <div>
      {/* Adjusted height to h-auto for automatic adjustment */}
      <div className="bg-orange-300 h-auto p-4">
        {/* Flex container for button, heading, and another button */}
        <div className="flex items-center justify-between">

          {/* First Button (Left side) */}
          <div className="bg-orange-300 h-auto p-4">
            {/* Flex container for the likes count and button */}
            <div className="flex items-center space-x-4">
              {/* Displaying the likes count */}
              <Button
                className="bg-slate-900 hover:bg-red-500 text-white font-bold h-12 w-32"
                onClick={() => setLikes(likes + 1)}
              >
                Like
              </Button>
              <p className="text-lg">Likes: {likes}</p>
            </div>
          </div>

          {/* Heading (Center) */}
          <h1 className="text-5xl font-bold">About Us</h1>

          {/* Second Button (Right side) */}
          <Button
            onClick={onClickHandler}
            variant={'destructive'}
            className="text-slate-950 bg-teal-50 h-12 w-32 text-lg"
          >
            click me
          </Button>
        </div>
      </div>

      {/* Container for image with text overlay */}
      <div className="relative w-full h-[500px]">
        {/* Background image */}
        <img
          className="object-cover w-full h-full"
          src="/images/simple.jpeg"
          alt="Background view"
        />

        {/* Text overlay */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-opacity-50 text-white p-6">
          {/* About Section */}
          <section className="text-center">
            <h1 className="text-4xl font-bold">👋 Hello!</h1>
            <p className="text-lg mt-4 mb-6">
              I'm <span className="font-semibold">Laiba Shoukat</span>, a web developer passionate about building impactful digital experiences through innovative technologies. 🚀
            </p>
            <div className="flex flex-wrap justify-center mb-6">
  <span className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 hover:bg-blue-700 transition duration-300 ease-in-out">#WebDeveloper</span>
  <span className="inline-block bg-green-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 hover:bg-green-700 transition duration-300 ease-in-out">#NextJS</span>
  <span className="inline-block bg-yellow-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 hover:bg-yellow-700 transition duration-300 ease-in-out">#TypeScript</span>
  <span className="inline-block bg-pink-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 hover:bg-pink-700 transition duration-300 ease-in-out">#HTML</span>
  <span className="inline-block bg-purple-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 hover:bg-purple-700 transition duration-300 ease-in-out">#CSS</span>
  <span className="inline-block bg-indigo-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 hover:bg-indigo-700 transition duration-300 ease-in-out">#TechLearner</span>
  <span className="inline-block bg-red-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 hover:bg-red-700 transition duration-300 ease-in-out">#OpenToOpportunities</span>
</div>

          </section>

          {/* Skills Section */}
          <section className="text-center">
            <h2 className="text-2xl font-semibold">🌐 Skills & Expertise</h2>
            <p className="text-md mt-3">
              I’m honing my skills in <span className="font-medium">Next.js, JavaScript, and TypeScript</span> while already proficient in <span className="font-medium">HTML, CSS, and Office Automation</span>.
            </p>
          </section>

          {/* Projects Section */}
          <section className="text-center mt-6">
            <h2 className="text-2xl font-semibold">💻 My Projects</h2>
            <p className="text-md mt-3">
              I’ve worked on several projects, and I’m eager to tackle more complex challenges in the future. My expertise lies in utilizing Next.js and front-end technologies to write clean and efficient code.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
