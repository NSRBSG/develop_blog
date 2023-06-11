import Image from 'next/image';
import Link from './link';
import ThemeSwitch from './themeSwitch';

export default function Header() {
  return (
    <header className='flex justify-center sticky w-full px-6 border-b border-gray-300 dark:border-gray-700 backdrop-blur-sm'>
      <nav className='flex justify-between items-center h-16 max-w-screen-2xl w-full'>
        <div className='flex items-center  gap-x-6'>
          <Link href='/' className='flex justify-center items-center gap-x-1'>
            <Image
              className='rounded-full'
              width={32}
              height={32}
              src='/images/logo.png'
              alt='logo'
            />
            <span className='text-2xl font-bold'>NSRBSG</span>
          </Link>
          <Link href='/posts'>
            <span className='font-bold'>Posts</span>
          </Link>
        </div>
        <div>
          <ThemeSwitch />
        </div>
      </nav>
    </header>
  );
}
