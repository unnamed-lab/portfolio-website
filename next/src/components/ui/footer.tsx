import user from "@/lib/user.data";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-wrap text-sm font-light font-sans text-center w-full py-4 px-3 justify-center">
      &copy; Copyright {year}. Made by{" "}
      <Link href={user.social.twitter} className="font-semibold mx-1">
        Unnamed
      </Link>{" "}
      with{" "}
      <Link href="https://magicui.design" className="font-semibold mx-1">
        MagicUI
      </Link>
      {" , "}
      <Link href="https://ui.shadcn.com" className="font-semibold mx-1">
        shadcn
      </Link>
      and much love 💙
    </footer>
  );
}
