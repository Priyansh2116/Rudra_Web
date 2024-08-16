'use client';

import { useState } from 'react';
import Navbar from '../components/ui/Navbar';
import Link from 'next/link';

const Home = () => {
  // Array of image URLs for the gallery
  const galleryImages = [
    '/gallery-item1.png',
    '/gallery-item2.png',
    '/gallery-item3.png',
    '/gallery-item4.png',
    '/gallery-item5.png',
    '/gallery-item6.png',
    '/gallery-item7.png',
    '/gallery-item8.png',
  ];

  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the previous image
  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Hero Section */}
      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('/background-image.png')`,
        }}
        id="home"
      >
        <Navbar />
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Optional content can be added here */}
        </div>
      </div>

      {/* About Us Section */}
      <div className="min-h-screen bg-black flex items-center justify-between pr-8 pl-8" id="about">
        <div className="w-1/2"></div>
        <div className="bg-black bg-opacity-80 text-white p-10 max-w-md">
          <h2 className="text-4xl mb-6">About Us</h2>
          <p className="mb-6">
            RUDRA is the official team of SRM IST taking part in the University Rover Challenge organized by the Mars Society since 2013. 
            The annual competition is held at the Mars Desert Research Station (MDRS), Martian Analog Site, near Hanksville, Utah, USA. 
            The team has been successfully operational for the last 7 years and has maintained its consistency in the competition.
          </p>
          <p>
            Our Team consists of 25-30 undergraduate students of every year from various engineering streams, working in different domains. 
            The fun part - RSD, is the soul and essence of Team RUDRA. Brainstorming discussions are always welcome for giving birth to new ideas.
          </p>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="min-h-screen bg-black flex flex-col items-center justify-center py-16" id="team">
        <h2 className="text-white text-4xl mb-12">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-center">
          {/* Team Member 1 */}
          <Link href="/team-lead">
            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300">
              <img src="/team-lead.png" alt="Team Lead" className="w-32 h-32 mx-auto rounded-full" />
              <h3 className="text-white text-xl mt-4">Team Lead</h3>
            </div>
          </Link>

          {/* Team Member 2 */}
          <Link href="/team-manager">
            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300">
              <img src="/team-manager.png" alt="Team Manager" className="w-32 h-32 mx-auto rounded-full" />
              <h3 className="text-white text-xl mt-4">Team Manager</h3>
            </div>
          </Link>

          {/* Team Member 3 */}
          <Link href="/technical-director">
            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300">
              <img src="/technical-director.png" alt="Technical Director" className="w-32 h-32 mx-auto rounded-full" />
              <h3 className="text-white text-xl mt-4">Technical Director</h3>
            </div>
          </Link>

          {/* Mechanical Domain */}
          <Link href="/mechanical-domain">
            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300">
              <img src="/mechanical-domain.png" alt="Mechanical Domain" className="w-32 h-32 mx-auto rounded-full" />
              <h3 className="text-white text-xl mt-4">Mechanical Domain</h3>
            </div>
          </Link>

          {/* Electronics Domain */}
          <Link href="/electronics-domain">
            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300">
              <img src="/electronics-domain.png" alt="Electronics Domain" className="w-32 h-32 mx-auto rounded-full" />
              <h3 className="text-white text-xl mt-4">Electronics Domain</h3>
            </div>
          </Link>

          {/* Coding Domain */}
          <Link href="/coding-domain">
            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300">
              <img src="/coding-domain.png" alt="Coding Domain" className="w-32 h-32 mx-auto rounded-full" />
              <h3 className="text-white text-xl mt-4">Coding Domain</h3>
            </div>
          </Link>

          {/* Life Science Domain */}
          <Link href="/life-science-domain">
            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300">
              <img src="/life-science-domain.png" alt="Life Science Domain" className="w-32 h-32 mx-auto rounded-full" />
              <h3 className="text-white text-xl mt-4">Life Science Domain</h3>
            </div>
          </Link>

          {/* Corporate Domain */}
          <Link href="/corporate-domain">
            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300">
              <img src="/corporate-domain.png" alt="Corporate Domain" className="w-32 h-32 mx-auto rounded-full" />
              <h3 className="text-white text-xl mt-4">Corporate Domain</h3>
            </div>
          </Link>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="min-h-screen bg-gray-300 flex items-center justify-center" id="achievements">
        <h2 className="text-gray-900 text-4xl">Achievements</h2>
      </div>

      {/* Gallery Section */}
      <div className="min-h-screen bg-black flex flex-col items-center justify-center py-16" id="gallery">
        <h2 className="text-white text-4xl mb-12">Gallery</h2>
        <div className="relative w-full max-w-4xl flex items-center justify-center">
          {/* Left Arrow */}
          <button
            className="absolute left-0 transform -translate-x-16 bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline"
            onClick={previousSlide}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Gallery Image */}
          <img
            src={galleryImages[currentIndex]}
            alt={`Gallery Item ${currentIndex + 1}`}
            className="w-full h-[550px] object-cover rounded-lg"
          />

          {/* Right Arrow */}
          <button
            className="absolute right-0 transform translate-x-16 bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline"
            onClick={nextSlide}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Sponsorship Section */}
      <div className="min-h-screen bg-gray-500 flex items-center justify-center" id="sponsorship">
        <h2 className="text-white text-4xl">Sponsorship</h2>
      </div>

        {/* Contact Us Section */}
        <div className="min-h-screen bg-black flex flex-col items-center justify-center py-16" id="contact">
        <h2 className="text-white text-4xl mb-12">Contact Us</h2>
        <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8">
          <div className="bg-gray-700 p-16 rounded-lg shadow-lg flex items-center justify-center w-[480px] h-[480px]">
            <img src="/image.png" alt="Icon or Image" className="w-64 h-64 object-contain" />
          </div>
          <div className="bg-gray-800 p-16 rounded-lg shadow-lg flex flex-col justify-between w-[480px] h-[480px]">
            <p className="text-white text-xl">
              Email: <a href="mailto:rudrateam@example.com" className="text-blue-500">rudrateam@example.com</a>
            </p>
            <p className="text-white text-xl">
              Phone: <a href="tel:+1234567890" className="text-blue-500">+123 456 7890</a>
            </p>
            <p className="text-white text-xl">
              Address: 123 Main Street, Anytown, USA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;