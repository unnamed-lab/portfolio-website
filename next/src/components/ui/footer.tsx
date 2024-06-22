import user from "@/lib/user.data";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex w-full flex-wrap justify-center px-3 py-4 text-center font-sans text-sm font-light">
      &copy; Copyright {year}. Made by{" "}
      <Link href={user.social.twitter} className="mx-1 font-semibold">
        Unnamed
      </Link>{" "}
      with{" "}
      <Link href="https://magicui.design" className="mx-1 font-semibold">
        MagicUI
      </Link>
      {" , "}
      <Link href="https://ui.shadcn.com" className="mx-1 font-semibold">
        shadcn
      </Link>
      and much love 💙
    </footer>
  );
}
