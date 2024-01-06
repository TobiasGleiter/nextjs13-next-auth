'use client';

import BaseIcon from '@/components/icons/base/BaseIcon';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

export interface ISignInButton {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'text-sm' | 'text-base' | 'text-xl';
  /**
  /**
   * Button contents
   */
  label: string;
  /**
   * How large should the button be?
   */
  style?: string;
  provider: string;
  icon: string;
}

const handleSignIn = async (provider: any, callbackUrl: string | null) => {
  await signIn(provider, {
    redirect: true,
    callbackUrl: callbackUrl as string,
  });
};

const SignInButton: React.FC<ISignInButton> = ({
  primary = false,
  size,
  style,
  label,
  provider,
  icon,
}) => {
  const searchParams = useSearchParams();
  const search = searchParams && searchParams.get('callbackUrl');

  return (
    <button
      className={`inline-flex rounded-full pl-6 pr-7 py-1 shadow-lg lg:hover:bg-yellow-300/70 lg:hover:text-black duration-300 ${
        primary ? 'bg-white text-black ' : 'bg-black text-white'
      } ${style} ${size} justify-center items-center `}
      onClick={() => handleSignIn(provider, search)}
    >
      <BaseIcon icon={icon} style="w-5 h-5" />
      <p className="ml-2">{label}</p>
    </button>
  );
};

export default SignInButton;
