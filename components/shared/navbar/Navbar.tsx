/**
 * This is a TypeScript React component for a navbar with a logo, global search, theme switcher, and
 * user button.
 * @returns The Navbar component is being returned.
 */

// import { Button } from '@/components/ui/button';
import { SignedIn, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Theme from './Theme';

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/public/assets/images/logo.svg"
          width={23}
          height={23}
          alt="GrowthOverflow"
        />

        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Growth <span className="text-primary-500">Overflow</span>
        </p>
      </Link>
      {/* GlobalSearch */}
      <div className="flex-between gap-5">
        <Theme />
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: 'h-10 w-10',
              },
              variables: {
                colorPrimary: '#ff7000',
              },
            }}
          />
        </SignedIn>
        MobileNav
      </div>
    </nav>
  );
};

export default Navbar;
