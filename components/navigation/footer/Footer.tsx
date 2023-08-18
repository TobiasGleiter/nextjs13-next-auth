import Link from 'next/link';

export interface IFooter {}

const copyrightYear = new Date().getFullYear();

const Footer: React.FC<IFooter> = () => {
  return (
    <footer className="flex w-screen py-3 lg:py-2 z-20 mt-10">
      <div className="mx-auto text-xs flex max-w-7xl items-center lg:justify-center px-4 lg:px-8 mb-20">
        <div className="flex xs:flex-col md:flex-row xs:items-center gap-4">
          <Link href="https://tobiasgleiter.de/" target="_blank">
            © {copyrightYear} Tobias Gleiter, nah, you can use that!
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
