export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen mx-auto container items-center justify-center p-8">
      <div className="w-full h-full inset bg-white/50 fixed -z-20" />
      {children}
    </div>
  );
}
