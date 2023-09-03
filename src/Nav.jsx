import "./assets/css/style.css";
// import { addIcons } from "./assets/js/icons";

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
    icon: "review",
    url: "feedback",
  },
  {
    title: "Contact",
    icon: "contact",
    url: "contact",
  },
];

(function () {
  const wW = window.innerWidth;
  const wH = window.innerHeight;
  const navBar = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
    const sPosition = window.scrollY;
    if (sPosition >= wH * 0.5 && wW >= 768) navBar.classList.add("sidebar");
    else
      navBar.classList.contains("sidebar") === true
        ? navBar.classList.remove("sidebar")
        : null;
  });
})();

const Nav = ({ icon }) => {
  return (
    <>
      <ul className="nav-menu">
        {navMenu.map((item, key) => {
          return (
            <li key={key} className="nav-item">
              <a href={`#${item.url}`} className="nav-link">
                <span className={`${item.icon}-icon`}>{icon[item.icon]}</span>
              </a>
              <span className="tooltip">{`${item.title}`}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

// addIcons();
export default Nav;
