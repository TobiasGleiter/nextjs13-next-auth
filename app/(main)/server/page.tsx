import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth/next';

export default async function Protected(): Promise<any> {
  const session = await getServerSession(authOptions);

  return (
    <div className="grid grid-cols-2 text-white p-4">
      <div>
        {session !== null ? (
          <h1 className="leading-loose font-extrabold text-accent">
            Hi {session?.user?.name}!
          </h1>
        ) : (
          <a className="btn btn-primary" href="/api/auth/signin">
            Sign in
          </a>
        )}
      </div>
    </div>
  );
}
