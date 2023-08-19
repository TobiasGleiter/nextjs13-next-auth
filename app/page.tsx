import HeroSection from '@/components/sections/hero/HeroSection';
import InfoSection from '@/components/sections/info/InfoSection';

export default async function Home() {
  return (
    <div className="max-w-xs lg:max-w-4xl flex flex-col mx-auto min-h-screen">
      <div className="snap-y snap-mandatory scroll-smooth scroll-pt-0 overflow-auto h-screen">
        <HeroSection />
        <InfoSection />
      </div>
    </div>
  );
}
