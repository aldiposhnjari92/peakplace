export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="flex items-start h-screen w-screen">
        <aside>Sidebar</aside>
        <div>{children}</div>
      </div>
  );
}
