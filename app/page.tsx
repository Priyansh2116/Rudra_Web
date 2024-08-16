// page.tsx

'use client';
import Navbar from '../components/ui/Navbar';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <style jsx>{`
        html {
          scroll-behavior: smooth; // Enables smooth scrolling
        }
      `}</style>

      {/* Hero Section */}
      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('/background-image.png')`, // Ensure the image is in the public directory
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
        <div className="w-1/2">
          {/* Optional image or content */}
        </div>
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
      <div className="min-h-screen bg-gray-400 flex items-center justify-center" id="gallery">
        <h2 className="text-gray-900 text-4xl">Gallery</h2>
      </div>

      {/* Sponsorship Section */}
      <div className="min-h-screen bg-gray-500 flex items-center justify-center" id="sponsorship">
        <h2 className="text-gray-900 text-4xl">Sponsorship</h2>
      </div>

      {/* Contact Us Section */}
      <div className="min-h-screen bg-black flex flex-col items-center justify-center py-16" id="contact">
        <h2 className="text-white text-4xl mb-12">Contact Us</h2>
        <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8">
          <div className="bg-gray-700 p-16 rounded-lg shadow-lg flex items-center justify-center w-[480px] h-[480px]">
            <img src="/image.png" alt="Icon or Image" className="w-64 h-64 object-contain" />
          </div>
          <div className="bg-gray-800 p-16 rounded-lg shadow-lg flex flex-col justify-between w-[480px] h-[480px]">
            <div className="flex items-center space-x-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.94 3.94a10.14 10.14 0 001.94 13.16l2.83-2.83A7.97 7.97 0 013 8a8.002 8.002 0 019-7.94l2.83 2.83A10.14 10.14 0 002.94 3.94z"></path>
              </svg>
              <span className="text-white">+1 234 567 890</span>
            </div>
            <div className="flex items-center space-x-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.478 2 2 6.478 2 12c0 4.838 3.871 8.774 8.646 9.73.632.116.861-.276.861-.614v-2.197c-3.518.751-4.224-1.69-4.224-1.69-.504-1.277-1.23-1.617-1.23-1.617-.975-.666.073-.653.073-.653 1.076.075 1.643 1.102 1.643 1.102.959 1.643 2.512 1.168 3.129.893.099-.694.374-1.168.681-1.436-2.806-.32-5.752-1.403-5.752-6.245 0-1.38.488-2.509 1.291-3.391-.129-.318-.559-1.6.122-3.33 0 0 1.054-.338 3.455 1.293a12.083 12.083 0 016.288 0c2.401-1.631 3.455-1.293 3.455-1.293.681 1.73.251 3.012.122 3.33.804.882 1.291 2.011 1.291 3.391 0 4.858-2.958 5.92-5.773 6.232.385.33.727.985.727 1.99v2.948c0 .342.231.735.868.611C18.134 20.776 22 16.84 22 12c0-5.522-4.478-10-10-10z"></path>
              </svg>
              <span className="text-white">rudra@srmist.edu.in</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
