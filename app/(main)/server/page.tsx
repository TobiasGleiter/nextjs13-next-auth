import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';

export default async function ServerProtectedPage(): Promise<any> {
  const session = await getServerSession(authOptions);

  if (!session) {
    // redirect to signin if user ist not signed in
    redirect('/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2Fserver');
  }

  return (
    <div className="pt-20  bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent h-screen">
      <div className="space-y-2 mb-4">
        <h1 className="font-bold text-4xl">
          This Page is protected with{' '}
          <span className="bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent">
            getServerSession
          </span>
          .
        </h1>
        <h2 className="font-semibold text-xl">
          In this case, it is possible to fetch the data on serverside and pass
          a promise down to a use client component.
        </h2>
      </div>
      <div className="space-y-2 ">
        <p className="">
          User data is fetched using useSession on the client side, but in a
          different component than this page. This implies that the page loads
          immediately, irrespective of the user data:{' '}
          <span className="font-bold">{session?.user?.name}</span>
        </p>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </div>
    </div>
  );
}
