'use client';

import { useSession } from 'next-auth/react';
import { useState } from 'react';

export default function ClientSideRoot(): any {
  const { data: session } = useSession({
    required: true,
  });

  const [shown, setShown] = useState<boolean>(false);
  const clickHandler = (): void => {
    setShown(!shown);
  };

  if (!session) {
    return <></>;
  }

  return (
    <div className="pt-20  bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent h-screen">
      <div>
        <h1 className="leading-loose font-extrabold text-accent">
          Hi {session?.user?.name}!
        </h1>
      </div>
      <div>
        <p>Protected client page</p>
        <button className="btn btn-primary" onClick={clickHandler}>
          Toggle
        </button>
        {shown ? <pre>{JSON.stringify(session, null, 2)}</pre> : null}
      </div>
    </div>
  );
}
