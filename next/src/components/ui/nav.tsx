import navigation from "@/lib/navigation";
import { Dock, DockIcon } from "@/components/magicui/dock";
import Link from "next/link";


export default function Nav() {
  return (
    <Dock className="md:fixed bottom-8 left-1/2 [transform:translate(-50%,0%)] min-h-fit z-50 hidden md:flex bg-[#000000b1] backdrop-blur-sm">
      {navigation.map((el, index) => {
        return (
          <>
            <DockIcon key={index} className="bg-transparent" size={4}>
              <Link href={el.url} className="w-full h-full ">
                {el.icon}
              </Link>
              {/* <div className="absolute py-[0.1rem] px-[0.33rem] bg-[#b4b3b399] rounded-md z-[1] bottom-[-60%] capitalize transition-all opacity-0 peer-hover:opacity-100">{el.title}</div> */}
            </DockIcon>
          </>
        );
      })}
    </Dock>
  );
}
