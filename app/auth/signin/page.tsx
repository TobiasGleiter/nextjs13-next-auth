import SignInButton from '@/components/button/signin/SignInButton';
import SpinnerLoading from '@/components/loading/spinner/SpinnerLoading';
import { Suspense } from 'react';

// The providers can also be fetched from nextauth
const providers = [{ label: 'GitHub', provider: 'github', icon: 'github' }];

export default function SignInPage() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="relative w-full max-w-xs rounded-xl bg-white/70 p-2">
        <div className="flex flex-col items-center text-black">
          <h1 className="w-full font-bold text-2xl mb-4 text-center ">
            Login /w
          </h1>
          <div className="mb-2">
            {/** React Suspense along with a fallback aids in promptly displaying the Login page. */}
            <Suspense fallback={<SpinnerLoading />}>
              {/** Incorporate additional providers, ensuring that the Icon is included within BaseIcon(). */}
              {providers.map((provider: any) => {
                return (
                  <SignInButton
                    key={provider.label}
                    label={provider.label}
                    provider={provider.provider}
                    icon={provider.icon}
                  />
                );
              })}
            </Suspense>
          </div>
          <div className="text-center text-sm mx-4">
            <p>
              You have the option to log in or sign in. Your data will neither
              be stored nor processed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
