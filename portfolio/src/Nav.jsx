import "./assets/css/style.css";
import { addIcons } from "./assets/js/icons";

const navMenu = [
  {
    title: "Introduction",
    icon: "home",
    url: "intro",
  },
  {
    title: "About",
    icon: "about",
    url: "about",
  },
  {
    title: "Resume",
    icon: "work",
    url: "experience",
  },
  {
    title: "Skills",
    icon: "skill",
    url: "skills",
  },
  {
    title: "Project",
    icon: "project",
    url: "project",
  },
  {
    title: "Testimonial",
    icon: "star",
    url: "feedback",
  },
  {
    title: "Contact",
    icon: "contact",
    url: "contact",
  },
];

const Nav = () => {
  return (
    <>
      <ul className="nav-menu">
        {navMenu.map((item) => {
          const keyID = navMenu.findIndex((el) => el.title === item.title);
          return (
            <li key={keyID} className="nav-item">
              <a href={`#${item.url}`} className="nav-link">
                <span className={`${item.icon}-icon`}></span>
              </a>
              <span className="tooltip">{`${item.title}`}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

console.log(addIcons());
addIcons();
export default Nav;
