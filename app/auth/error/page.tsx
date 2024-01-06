'use client';

import { useSearchParams } from 'next/navigation';

export default function AuthErrorPage() {
  const searchParams = useSearchParams();

  const error = searchParams && searchParams.get('error');

  return (
    <div className="relative w-full max-w-xs rounded-xl bg-white/70 p-2">
      <div className="flex flex-col items-center text-black">
        <h1 className="w-full font-bold text-2xl mb-2 text-center ">Error</h1>
        <p className="mb-2 text-center">
          An error occurred, please try again later.
        </p>
        <p>{error && error}</p>
      </div>
    </div>
  );
}
