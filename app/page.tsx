// page.tsx

'use client';
import Navbar from '../components/ui/Navbar';

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
          {/* Add your team members here */}
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
                <path d="M12 2C6.478 2 2 6.478 2 12c0 4.838 3.871 8.774 8.646 9.73.632.116.861-.276.861-.614v-2.197c-3.518.751-4.224-1.69-4.224-1.69-.504-1.277-1.23-1.617-1.23-1.617-.966-.66.074-.648.074-.648 1.068.075 1.632 1.107 1.632 1.107.951 1.633 2.491 1.16 3.098.886.097-.69.374-1.16.682-1.427-2.809-.318-5.759-1.407-5.759-6.27 0-1.386.484-2.521 1.276-3.412-.128-.318-.554-1.601.12-3.34 0 0 1.047-.335 3.434 1.277 1.978-.551 4.113-.551 6.091 0 2.387-1.612 3.434-1.277 3.434-1.277.673 1.739.246 3.022.12 3.34.794.891 1.275 2.026 1.275 3.412 0 4.875-2.952 5.948-5.767 6.258.384.331.726.984.726 1.982v2.938c0 .345.222.735.867.61C18.13 20.772 22 16.838 22 12c0-5.522-4.478-10-10-10z"></path>
              </svg>
              <span className="text-white">@username</span>
            </div>
            <div className="flex items-center space-x-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.478 2 2 6.478 2 12c0 4.838 3.871 8.774 8.646 9.73.632.116.861-.276.861-.614v-2.197c-3.518.751-4.224-1.69-4.224-1.69-.504-1.277-1.23-1.617-1.23-1.617-.966-.66.074-.648.074-.648 1.068.075 1.632 1.107 1.632 1.107.951 1.633 2.491 1.16 3.098.886.097-.69.374-1.16.682-1.427-2.809-.318-5.759-1.407-5.759-6.27 0-1.386.484-2.521 1.276-3.412-.128-.318-.554-1.601.12-3.34 0 0 1.047-.335 3.434 1.277 1.978-.551 4.113-.551 6.091 0 2.387-1.612 3.434-1.277 3.434-1.277.673 1.739.246 3.022.12 3.34.794.891 1.275 2.026 1.275 3.412 0 4.875-2.952 5.948-5.767 6.258.384.331.726.984.726 1.982v2.938c0 .345.222.735.867.61C18.13 20.772 22 16.838 22 12c0-5.522-4.478-10-10-10z"></path>
              </svg>
              <span className="text-white">email@example.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.478 2 2 6.478 2 12c0 5.25 3.955 9.574 9.044 10.642.661.103.935-.299.935-.664v-2.34c-2.877.593-3.482-1.29-3.482-1.29-.517-1.247-1.262-1.58-1.262-1.58-.992-.68.066-.667.066-.667 1.08.072 1.655 1.113 1.655 1.113.99 1.63 2.544 1.155 3.163.882.1-.712.378-1.155.686-1.42-2.793-.311-5.75-1.376-5.75-6.168 0-1.356.482-2.465 1.27-3.364-.129-.313-.553-1.578.117-3.301 0 0 1.04-.333 3.415 1.265 1.96-.546 4.085-.546 6.042 0 2.374-1.598 3.414-1.265 3.414-1.265.671 1.723.247 3.001.12 3.301.79.899 1.27 2.008 1.27 3.364 0 4.805-2.959 5.847-5.782 6.155.385.326.73.971.73 1.958v2.897c0 .365.273.768.943.662C20.049 21.57 24 17.248 24 12c0-5.522-4.478-10-10-10z"></path>
              </svg>
              <span className="text-white">github.com/yourprofile</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
