import navigation from "@/lib/navigation";
import { Dock, DockIcon } from "@/components/magicui/dock";
import Link from "next/link";

export default function Nav() {
  return (
    <Dock className="bottom-8 left-1/2 z-50 hidden min-h-fit bg-[#000000b1] backdrop-blur-sm [transform:translate(-50%,0%)] md:fixed md:flex">
      {navigation.map((el, index) => {
        const itemId = "item-" + index;
        return (
          <>
            <DockIcon key={itemId} className="bg-transparent" size={4}>
              <Link href={el.url} className="h-full w-full">
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
