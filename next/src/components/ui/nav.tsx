import navigation from "@/lib/navigation";
import { Dock, DockIcon } from "@/components/magicui/dock";
import Link from "next/link";

// display: block;
// position: absolute;
// left: -175%;
// top: 50%;
// transform: translate(-50%, -50%);
// z-index: 1;
// background-color: rgba(180, 180, 180, 0.6);
// padding-left: 0.33rem;
// padding-right: 0.33rem;
// padding-top: 0.1rem;
// padding-bottom: 0.1rem;
// border-radius: 0.25rem;

export default function Nav() {
  return (
    <Dock className="fixed bottom-8 left-1/2 [transform:translate(-50%,0%)]">
      {navigation.map((el, index) => {
        return (
          <>
            <DockIcon key={index} className="bg-transparent" size={5}>
              <Link href={el.url} className="w-full h-full ">{el.icon}</Link>
              {/* <div className="absolute py-[0.1rem] px-[0.33rem] bg-[#b4b3b399] rounded-md z-[1] bottom-[-60%] capitalize transition-all opacity-0 peer-hover:opacity-100">{el.title}</div> */}
            </DockIcon>
          </>
        );
      })}
    </Dock>
  );
}
