import Link from 'next/link';
import React from 'react';
import { FaInfoCircle, FaTools } from 'react-icons/fa';
const Home = () => {
  return (
    <div>

<div className="h-20 w-screen bg-orange-800">
      {/* Navigation Bar */}
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center p-8 text-white">
        
        {/* About Link with Icon */}
        <h1 className="mr-10 flex items-center hover:text-black transition duration-300 ease-in-out">
          <FaInfoCircle className="mr-2" /> {/* About Icon */}
          <Link href="/About">About</Link>
        </h1>

        {/* Skills Link with Icon */}
        <h1 className="mr-10 flex items-center hover:text-black transition duration-300 ease-in-out">
          <FaTools className="mr-2" /> {/* Skills Icon */}
          <Link href="/Contact">Contact</Link>
        </h1>

      </nav>
    </div>

      <div className="relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center">
          <div className="text-left pl-20 flex items-center">
            <div>
              <h1 className="text-white text-4xl font-bold">Hi There, <br />I am Laiba Shoukat</h1>
              <h3 className="text-white font-bold mt-4">I am a web developer, visit my portfolio</h3>
            </div>
            <img src="../images/queen.avif" alt="queen" className="ml-80 w-auto h-auto rounded-2xl" />
          </div>
        </div>
        <img className='h-screen w-screen ' src="../images/sunset.webp" alt="view" />
      </div>
    </div>
  );
}

export default Home;
