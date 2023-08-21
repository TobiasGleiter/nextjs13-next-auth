import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import BaseIcon from '@/components/icons/base/BaseIcon';
import { getServerSession } from 'next-auth/next';
import Link from 'next/link';

const navigation = [
  { name: 'Home', href: '/', as: '/' },
  { name: 'Client', href: '/client', as: '/client' },
  { name: 'Middleware', href: '/middleware', as: '/middleware' },
  { name: 'Server', href: '/server', as: '/server' },
];

export default async function NewUserPage() {
  const session = await getServerSession(authOptions);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="relative w-full max-w-xs rounded-xl p-2">
        <div className="flex flex-col items-center bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent">
          <h1 className="w-full font-bold text-2xl mb-2 text-center ">
            Welcome{' '}
            <span className="bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent">
              {session?.user?.name}
            </span>
            ,
          </h1>
          <p className="mb-2 text-center">
            This is a page that is displayed to new users after signing in. Go
            to:
          </p>
          <ul className="text-center font-bold">
            {navigation.map((item) => {
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group hover:text-yellow-300 duration-200 flex items-center justify-center"
                  >
                    <p>{item.name}</p>
                    <BaseIcon
                      icon="arrowrightup"
                      style="ml-1 text-neutral-300 group-hover:text-yellow-300"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
