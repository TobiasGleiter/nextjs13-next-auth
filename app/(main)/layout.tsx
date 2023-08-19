import Header from '@/components/navigation/header/Header';

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="max-w-xs lg:max-w-4xl flex flex-col mx-auto min-h-screen">
        {children}
      </div>
    </>
  );
}
