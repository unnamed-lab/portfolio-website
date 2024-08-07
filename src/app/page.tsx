import React from "react";
import { About, Hero, Project, Review, Skill, Work } from "@/components/views";
import user from "@/lib/user.data";
export default function Home() {
  return (
    <main className="font-sans">
      <Hero data={user} />
      <About data={user} />
      <Work data={user} />
      <Skill data={user} />
      <Project data={user} />
      <Review data={user} />
    </main>
  );
}
