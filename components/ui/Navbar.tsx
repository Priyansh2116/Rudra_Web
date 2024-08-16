import Link from 'next/link';
import Image from 'next/image';
import rudraLogo from '../../public/rudra-logo.png'; // Adjust the path as needed
import srmLogo from '../../public/srm-logo.png'; // Adjust the path as needed
import { useEffect } from 'react';

const Navbar = () => {
  useEffect(() => {
    // Ensuring the browser understands smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <nav className="bg-gray-900 bg-opacity-60 text-white fixed w-full z-10">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a>
            <Image src={rudraLogo} alt="rudra logo" width={100} height={50} />
          </a>
        </Link>
        <div className="flex-1 flex justify-center space-x-4">
          <Link href="#home" scroll={false} legacyBehavior>
            <a className="hover:text-gray-300 transition duration-200">HOME</a>
          </Link>
          <Link href="#about" scroll={false} legacyBehavior>
            <a className="hover:text-gray-300 transition duration-200">ABOUT US</a>
          </Link>
          <Link href="#team" scroll={false} legacyBehavior>
            <a className="hover:text-gray-300 transition duration-200">TEAM</a>
          </Link>
          <Link href="#achievements" scroll={false} legacyBehavior>
            <a className="hover:text-gray-300 transition duration-200">ACHIEVEMENTS</a>
          </Link>
          <Link href="#gallery" scroll={false} legacyBehavior>
            <a className="hover:text-gray-300 transition duration-200">GALLERY</a>
          </Link>
          <Link href="#sponsorship" scroll={false} legacyBehavior>
            <a className="hover:text-gray-300 transition duration-200">SPONSORSHIP</a>
          </Link>
          <Link href="#contact" scroll={false} legacyBehavior>
            <a className="hover:text-gray-300 transition duration-200">CONTACT US</a>
          </Link>
        </div>
        <Link href="/" legacyBehavior>
          <a>
            <Image src={srmLogo} alt="SRM logo" width={100} height={50} />
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
