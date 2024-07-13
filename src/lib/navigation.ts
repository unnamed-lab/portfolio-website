import { JSX } from "react";
import { Icons } from "@/components/ui";

type TNavigation = { title: string; icon: JSX.Element; url: string }[];

const navigation: TNavigation = [
  { title: "home", icon: Icons.home, url: "/" },
  { title: "about", icon: Icons.about, url: "#about" },
  { title: "resume", icon: Icons.work, url: "#work" },
  { title: "skills", icon: Icons.skill, url: "#skill" },
  { title: "project", icon: Icons.project, url: "#project" },
  { title: "testimonal", icon: Icons.review, url: "#review" },
  { title: "contact", icon: Icons.contact, url: "#contact" },
];

export default navigation;
