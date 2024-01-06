'use client';
import BaseIcon from '@/components/icons/base/BaseIcon';
import { Dialog, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment, useState } from 'react';

export interface IHeader {}

const navigation = [
  { name: 'Home', href: '/', as: '/' },
  { name: 'Client', href: '/client', as: '/client' },
  { name: 'Middleware', href: '/middleware', as: '/middleware' },
  { name: 'Server', href: '/server', as: '/server' },
  {
    name: 'Data Client External API',
    href: '/middleware/client',
    as: '/middleware/client',
  },
  {
    name: 'Data Server External API',
    href: '/middleware/data',
    as: '/middleware/data',
  },
];

const Header: React.FC<IHeader> = () => {
  let path = usePathname();
  const { data: session } = useSession();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="z-10 relative m-0 p-0">
      <nav className="fixed top-3 left-1/2 -translate-x-1/2 max-w-xs lg:max-w-4xl w-full py-2 pl-2.5 pr-6 bg-white/70 backdrop-blur-md rounded-full ">
        <div className="flex w-full justify-between items-center text-black">
          <div className="flex items-center font-light text-sm ">
            <Link href="https://nextjs.org/" target="_blank">
              <BaseIcon icon="nextjs" style="w-8 h-8" />
            </Link>
            <p className="ml-1">with</p>
            <Link
              href="https://next-auth.js.org/"
              target="_blank"
              className="ml-1"
            >
              NextAuth.js
            </Link>
            <p className="ml-1">Example.</p>
          </div>
          <div className="lg:hidden text-sm">
            <button onClick={() => setMobileMenuOpen(true)}>menu</button>
          </div>
          <ul className="hidden lg:flex space-x-2">
            {navigation.map((link) => {
              return (
                <li key={link.name}>
                  <Link href={link.href} as={link.as} className="relative">
                    {link.href === path && (
                      <motion.span
                        layoutId="underline"
                        className={`absolute -z-10 rounded-lg shadow-lg  bg-gradient-to-r from-amber-200 to-yellow-400 h-full w-full`}
                      />
                    )}
                    <div className="p-2 text-xs">{link.name}</div>
                  </Link>
                </li>
              );
            })}
            {session && (
              <Link
                href="/auth/signout"
                className="p-2 text-xs rounded-lg border shadow-lg duration-300 hover:bg-yellow-300/70"
              >
                Sign Out
              </Link>
            )}
          </ul>
        </div>
      </nav>
      {/** MOBILE MENU */}
      <Transition show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="lg:hidden z-30"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 z-20 text-black bg-white opacity-40 " />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-20"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Panel className="fixed bottom-0 h-1/2 left-1/2 -translate-x-1/2 z-30 w-full overflow-y-auto p-6 rounded-t-2xl max-w-screen text-black bg-white ">
              <div className="">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    as={item.as}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-6 py-4 text-sm"
                  >
                    {item.name}
                  </Link>
                ))}
                {session && (
                  <Link
                    href="/auth/signout"
                    className="p-2 text-xs rounded-lg border shadow-lg duration-300"
                  >
                    Sign Out
                  </Link>
                )}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </header>
  );
};

export default Header;
