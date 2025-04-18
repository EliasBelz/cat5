import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-foreground py-10 w-full flex flex-col justify-between items-center">
      {/* <div className='w-full flex flex-col justify-start pl-10 pb-2'>
        <a
          className='visited:text-orange-100'
          href="https://houseplant.com">houseplant.com
        </a>
        <a
          className='visited:text-orange-100'
          href="https://reelstart.org">reelstart.org
        </a>
      </div> */}
      <p className='pt-2 text-center'>
        © Cat5 Content 2025.
      </p>
      <Link href="/" className="text-sm underline mt-2">Home</Link>
      {/* <div className="w-full flex justify-center items-center space-x-6">
        <a href="https://www.instagram.com/pointgrey/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-100 w-8 h-8 flex justify-center items-center visited:text-orange-100">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://x.com/pointgrey" target="_blank" rel="noopener noreferrer" className="hover:text-orange-100 w-8 h-8 flex justify-center items-center visited:text-orange-100">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </div> */}
    </footer>
  );
};

export default Footer;