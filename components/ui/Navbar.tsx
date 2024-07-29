import Link from 'next/link';
import Image from 'next/image';
import rudraLogo from '../../public/rudra-logo.png'; // Adjust the path as needed
import srmLogo from '../../public/srm-logo.png'; // Adjust the path as needed

const Navbar = () => {
  return (
    <nav className="bg-gray-900 bg-opacity-75 text-white">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a>
            <Image src={rudraLogo} alt="rudra logo" width={100} height={50} />
          </a>
        </Link>
        <div className="flex-1 flex justify-center space-x-4">
          <Link href="/home" legacyBehavior>
            <a className="hover:text-gray-400">HOME</a>
          </Link>
          <Link href="/team" legacyBehavior>
            <a className="hover:text-gray-400">TEAM</a>
          </Link>
          <Link href="/achievements" legacyBehavior>
            <a className="hover:text-gray-400">ACHIEVEMENTS</a>
          </Link>
          <Link href="/gallery" legacyBehavior>
            <a className="hover:text-gray-400">GALLERY</a>
          </Link>
          <Link href="/sponsorship" legacyBehavior>
            <a className="hover:text-gray-400">SPONSORSHIP</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="hover:text-gray-400">CONTACT US</a>
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
