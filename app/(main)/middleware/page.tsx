import MiddlewareData from '@/components/data/middleware/MiddlewareData';

export default async function MiddlewareProtectedPage() {
  return (
    <div className="pt-20  bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent h-screen">
      <div className="space-y-2 mb-4">
        <h1 className="font-bold text-4xl">
          This Page is protected through{' '}
          <span className="bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent">
            Middleware
          </span>
          .
        </h1>
        <h2 className="font-semibold text-xl">
          This represents the simplest approach to securing a page; however,
          obtaining direct user data in this manner is not feasible. Above this,
          I will incorporate a client component within this server component to
          promptly display the page. Following that, I will load the client
          component to achieve interactivity.
        </h2>
      </div>
      <MiddlewareData />
    </div>
  );
}
