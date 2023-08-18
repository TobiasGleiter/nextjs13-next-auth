import BaseIcon from '@/components/icons/base/BaseIcon';
import Link from 'next/link';

export default async function Home() {
  return (
    <div className="max-w-xs lg:max-w-4xl flex flex-col pt-20 mx-auto min-h-screen">
      <section className=" bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent mt-10">
        <h1 className="font-bold text-4xl mb-4 ">
          Hi, this is a Next.js 13 with NextAuth Example.
        </h1>
        <h2 className="font-semibold text-xl mb-2 ">
          This project uses various approaches to achieve authentication:
        </h2>
        <ul className="mb-6 space-y-2 cursor-default">
          <li className="bg-violet-200 px-2 py-2.5 rounded-lg text-black text-sm">
            Client-side protection /w{' '}
            <span className="font-semibold">useSession</span>
          </li>
          <li className="bg-violet-200 px-2 py-2.5 rounded-lg text-black text-sm">
            Server-side protection /w{' '}
            <span className="font-semibold">Middleware</span>
          </li>
          <li className="bg-violet-200 px-2 py-2.5 rounded-lg text-black text-sm">
            Server-side protection /w{' '}
            <span className="font-semibold">getServerSession</span>
          </li>
        </ul>
        <p className="mb-2">
          If yoou attempt to access a protected page, and you will be redirected
          to the sign-in page.
        </p>
        <Link
          href="https://github.com/TobiasGleiter/nextjs13-next-auth"
          className="flex group items-center  underline-offset-2 w-fit py-2"
          target="_blank"
        >
          <p className="group-hover:underline">Pull the project from</p>
          <BaseIcon
            icon="Github"
            style="group-hover:animate-bounce ml-2 w-6 h-6 duration:200 text-white"
          />
        </Link>
      </section>
    </div>
  );
}
