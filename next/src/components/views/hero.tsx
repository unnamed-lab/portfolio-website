import { Icons } from "../ui";
import Link from "next/link";
import Image from "next/image";
import { IUser } from "@/lib/user.data";

export default function Hero({ data }: { data: IUser }) {
  const socialList = [
    {
      name: "facebook",
      icon: Icons.facebookBox,
      url: data.social.facebook,
    },
    {
      name: "twitter",
      icon: Icons.twitterBox,
      url: data.social.twitter,
    },
    {
      name: "linkedin",
      icon: Icons.linkedinBox,
      url: data.social.linkedin,
    },
  ];

  return (
    <section className="relative z-0 w-full bg-neutral-900 from-transparent to-neutral-950 after:pointer-events-none after:absolute after:bottom-0 after:z-[2] after:block after:h-16 after:w-full after:select-none after:bg-gradient-to-b after:content-['']">
      <div className="w-full overflow-hidden px-[10%] pt-10 after:content-[''] md:flex md:items-center lg:min-h-[60svh] lg:py-[5%]">
        <div className="!h-full w-full grow md:w-7/12">
          <p className="mb-4">My name is</p>
          <h1 className="blue-line text-4xl font-bold md:text-5xl lg:text-7xl">
            {data.firstname} {data.middlename.slice(0, 1) + "."} {data.lastname}
          </h1>
          <p className="py-7 uppercase text-zinc-600">
            {`I'm also known as `}
            <span className="text-xl font-bold uppercase text-zinc-400">
              {data.nickname}
            </span>
          </p>
          <p>{data.bio}</p>
          <p className="flex flex-nowrap gap-6 py-4">
            {socialList.map((el, index) => {
              return (
                <Link key={index} href={el.url} className="h-[64px] w-[64px]">
                  {el.icon}
                </Link>
              );
            })}
          </p>
        </div>
        <div className="absolute right-0 top-0 -z-10 !h-full w-full grow overflow-hidden opacity-35 md:relative md:z-0 md:w-5/12 md:opacity-100">
          <Image
            priority
            src={data.mascot}
            width={500}
            height={500}
            alt={`${data.firstname} ${data.lastname}`}
            className="pointer-events-none absolute -right-[30%] top-0 mt-auto h-auto w-full cursor-pointer select-none object-cover mix-blend-luminosity md:relative md:-right-0 md:mix-blend-normal"
          />
        </div>
      </div>
    </section>
  );
}
