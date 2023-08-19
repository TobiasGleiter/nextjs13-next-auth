import dynamic from 'next/dynamic';

const LazyHeader = dynamic(
  () => import('../../components/navigation/header/Header'),
  {
    loading: () => <></>,
  }
);

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LazyHeader />
      <div className="max-w-xs lg:max-w-4xl flex flex-col mx-auto min-h-screen">
        {children}
      </div>
    </>
  );
}
