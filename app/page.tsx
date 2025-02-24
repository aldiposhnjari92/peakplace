import { ModeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <h1>Welcome dear costumer</h1>
      <ModeToggle />
    </main>
  );
}
