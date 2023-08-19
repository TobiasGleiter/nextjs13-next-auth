'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useState } from 'react';

export default function ClientSideProtectedPage(): any {
  const { data: session } = useSession({
    required: true,
    // Todo: Add callbackUrl
    onUnauthenticated() {
      redirect(
        '/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2Fclient'
      );
    },
  });

  const [shown, setShown] = useState<boolean>(false);
  const clickHandler = (): void => {
    setShown(!shown);
  };

  return (
    <div className="pt-20  bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent h-screen">
      <div className="space-y-2 mb-4">
        <h1 className="font-bold text-4xl">
          This Page is{' '}
          <span className="bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent">
            Client side protected
          </span>
          .
        </h1>
        <h2 className="font-semibold text-xl">
          Employ client-side protection only when no alternative options are
          available for fulfilling your needs.
        </h2>
      </div>
      <div className="space-y-2">
        <p className="">
          Userdata fetched /w useSession on client side:{' '}
          <span className="font-bold">{session?.user?.name}</span>
        </p>
        <button
          className="bg-gradient-to-r from-amber-200 to-yellow-400 text-black p-2 rounded-md text-xs"
          onClick={clickHandler}
        >
          Toggle
        </button>
        {shown && <pre>{JSON.stringify(session, null, 2)}</pre>}
      </div>
    </div>
  );
}
