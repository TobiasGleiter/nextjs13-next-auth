import SignOutButton from '@/components/button/signout/SignOutButton';
import { Suspense } from 'react';
import Loading from './loading';

export default function SignOutPage() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="relative w-full max-w-xs rounded-xl bg-white/70 p-2">
        <div className="flex flex-col items-center text-black">
          <h1 className="w-full font-bold text-2xl mb-2 text-center ">
            Sign out
          </h1>
          <p className="mb-2">Are you sure you want to sign out?</p>
          <div className="mb-2">
            {/** React Suspense along with a fallback aids in promptly displaying the Signout page. */}
            <Suspense fallback={<Loading />}>
              {/**  */}
              <SignOutButton label="Sign out" />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
