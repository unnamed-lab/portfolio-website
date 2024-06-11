import user from "@/lib/user.data";
import { Icons } from "../ui";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const socialList = [
    {
      name: "facebook",
      icon: Icons.facebookBox,
      url: user.social.facebook,
    },
    {
      name: "twitter",
      icon: Icons.twitterBox,
      url: user.social.twitter,
    },
    {
      name: "linkedin",
      icon: Icons.linkedinBox,
      url: user.social.linkedin,
    },
  ];

  return (
    <section className="relative bg-neutral-900 z-0 after:content-[''] after:w-full after:h-16 after:block after:bg-gradient-to-b from-transparent to-neutral-950 after:z-[2] after:absolute after:bottom-0">
      <div className="md:flex md:items-center px-[10%] pt-10 lg:py-[5%] after:content-[''] lg:min-h-[60svh] w-full overflow-hidden">
        <div className="w-full md:w-7/12 !h-full grow">
          <p className="mb-4">My name is</p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold blue-line">
            {user.firstname} {user.middlename.slice(0, 1) + "."} {user.lastname}
          </h1>
          <p className="py-7 text-zinc-600 uppercase">
            {`I'm also known as `}
            <span className="uppercase font-bold text-zinc-400 text-xl">
              {user.nickname}
            </span>
          </p>
          <p>{user.bio}</p>
          <p className="flex flex-nowrap gap-6 py-4">
            {socialList.map((el, index) => {
              return (
                <Link key={index} href={el.url} className="w-[64px] h-[64px]">
                  {el.icon}
                </Link>
              );
            })}
          </p>
        </div>
        <div className="absolute grow !h-full -z-10 opacity-35 md:opacity-100 md:z-0 top-0 right-0 md:relative w-full md:w-5/12">
          <Image
            src={"/profile.png"}
            width={500}
            height={500}
            alt={`${user.firstname} ${user.lastname}`}
            className="mix-blend-luminosity md:mix-blend-normal mt-auto w-full object-cover md:relative absolute top-0 -right-[30%] md:-right-0 h-auto pointer-events-none select-none cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}
