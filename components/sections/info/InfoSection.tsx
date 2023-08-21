export interface IInfoSection {}

const InfoSection: React.FC<IInfoSection> = () => {
  return (
    <section className="snap-start snap-always pt-20 bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent h-screen">
      <h2 className="font-semibold text-4xl mb-2 ">
        This project uses{' '}
        <span className="bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent">
          various approaches
        </span>{' '}
        to achieve authentication:
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
        If you attempt to access a protected page, and you will be redirected to
        the sign-in page.
      </p>
    </section>
  );
};

export default InfoSection;
