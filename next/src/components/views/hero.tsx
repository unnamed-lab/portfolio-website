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
    <section className="relative bg-neutral-900 z-0 after:content-[''] after:w-full after:h-16 after:block after:bg-gradient-to-b from-transparent to-neutral-950 after:z-[2] after:absolute after:bottom-0 w-full">
      <div className="md:flex md:items-center px-[10%] pt-10 lg:py-[5%] after:content-[''] lg:min-h-[60svh] w-full overflow-hidden">
        <div className="w-full md:w-7/12 !h-full grow">
          <p className="mb-4">My name is</p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold blue-line">
            {data.firstname} {data.middlename.slice(0, 1) + "."} {data.lastname}
          </h1>
          <p className="py-7 text-zinc-600 uppercase">
            {`I'm also known as `}
            <span className="uppercase font-bold text-zinc-400 text-xl">
              {data.nickname}
            </span>
          </p>
          <p>{data.bio}</p>
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
        <div className="absolute grow !h-full -z-10 opacity-35 md:opacity-100 md:z-0 top-0 right-0 md:relative w-full md:w-5/12 overflow-hidden">
          <Image
            src={data.mascot}
            width={500}
            height={500}
            alt={`${data.firstname} ${data.lastname}`}
            className="mix-blend-luminosity md:mix-blend-normal mt-auto w-full object-cover md:relative absolute top-0 -right-[30%] md:-right-0 h-auto pointer-events-none select-none cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}
