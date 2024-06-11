import { About, Hero } from "@/components/views";
import user from "@/lib/user.data";
export default function Home() {
  return (
    <main className="font-sans">
      <Hero data={user} />
      <About data={user} />
    </main>
  );
}
