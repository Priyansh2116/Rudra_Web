// app/page.tsx

import '../app/globals.css';
import Navbar from '../components/ui/Navbar';

const Home = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('/background-image.png')`, // Ensure the image is in the public directory
      }}
    >
      <Navbar />
      <div className="flex items-center justify-center min-h-screen">f
      </div>
    </div>
  );
};

export default Home;
