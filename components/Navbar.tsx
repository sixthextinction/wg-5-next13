import React from 'react';
import Link from 'next/link'

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-bl from-gray-700 via-gray-900 to-black py-2 px-4 flex items-center justify-between">
      <div className="flex items-center">
        <Link href="#" className="text-white font-bold text-xl">
          AlbumViewr™
        </Link>
      </div>
      <div className="flex items-center">
        <Link href="/albums" className="text-white font-bold py-2 px-4 rounded-full hover:bg-gray-700">
          Use NextJS 13
        </Link>
        <Link href="/" className="text-white font-bold py-2 px-4 rounded-full hover:bg-gray-700 ml-4">
          Use NextJS 12
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
