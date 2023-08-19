import BaseIcon from '@/components/icons/base/BaseIcon';
import Link from 'next/link';

export interface IHeroSection {}

const HeroSection: React.FC<IHeroSection> = () => {
  return (
    <section className="snap-start snap-normal pt-20  bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent h-screen">
      <h1 className="font-bold text-4xl mb-4 ">
        It{"'"}s not about the{' '}
        <span className="bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent">
          color
        </span>
        , it{"'"}s about the{' '}
        <span className="bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent">
          authentification
        </span>
        .
      </h1>
      <h2 className="font-semibold text-xl">
        This project uses various approaches to achieve authentication with
        Next.js 13 and NextAuth.
      </h2>
      <Link
        href="https://github.com/TobiasGleiter/nextjs13-next-auth"
        className="flex lg:hover:font-bold duration-200 items-center w-fit py-2"
        target="_blank"
      >
        <p className="underline underline-offset-2">Pull the project from</p>
        <BaseIcon icon="github" style="ml-2 w-6 h-6 text-white" />
      </Link>
    </section>
  );
};

export default HeroSection;
