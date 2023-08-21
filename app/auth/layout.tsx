export default function AuthLayout({ children }: any) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 w-full bg-gradient-to-r from-purple-500 to-purple-900">
      {children}
    </div>
  );
}
