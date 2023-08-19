'use client';

import { useSession } from 'next-auth/react';

export interface IMiddlewareData {}

const MiddlewareData: React.FC<IMiddlewareData> = () => {
  const { data: session } = useSession();

  return (
    <div className="space-y-2 ">
      <p className="">
        User data is fetched using useSession on the client side, but in a
        different component than this page. This implies that the page loads
        immediately, irrespective of the user data:{' '}
        <span className="font-bold">{session?.user?.name}</span>
      </p>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
};

export default MiddlewareData;
