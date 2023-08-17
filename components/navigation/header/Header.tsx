'use client';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface IHeader {}

const navigation = [
  { name: 'Home', href: '/', as: '/' },
  { name: 'Client', href: '/client', as: '/client' },
  { name: 'Middleware', href: '/middleware', as: '/middleware' },
  { name: 'Server', href: '/server', as: '/server' },
];

const Header: React.FC<IHeader> = () => {
  let path = usePathname();
  const { data: session } = useSession();

  return (
    <header>
      <nav className="bg-neutral-100 border-neutral-200 px-4 lg:px-6 py-2.5 dark:bg-neutral-800">
        <div className="flex flex-wrap justify-between">
          <Link href="/">1</Link>
          <div>2</div>
          <div>3</div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
