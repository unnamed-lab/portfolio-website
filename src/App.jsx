import React from "react";
import "./assets/css/style.css";
import profileImg from "./assets/img/profile.png";
import htmlImg from "./assets/img/html-icon.png";
import cssImg from "./assets/img/css-icon.png";
import jsImg from "./assets/img/javascript-icon.png";
import pythonImg from "./assets/img/python-icon.png";
import sassImg from "./assets/img/sass-icon.png";
import reactImg from "./assets/img/react-icon.png";
import angularImg from "./assets/img/angular-icon.png";
import githubImg from "./assets/img/github-icon.png";
import vscodeImg from "./assets/img/vscode-icon.png";
// console.log(addIcons());

const App = ({ icon }) => {
  const data = {
    about: {
      firstName: "Anuoluwa S.",
      lastName: "Adebayo",
      alias: "Unnamed",
      imageUrl: profileImg,
      location: "Nigeria",
      jobTitle: "Software Engineer and Web Developer",
      jobBio: `As a Junior Front-end Developer with 1 year of experience, I bring
            vibrant energy and a passion for crafting visually stunning web
            experiences. My biggest achievement lies in my mastery of CSS
            styling, ensuring pixel-perfect designs that captivate users. With a
            keen eye for detail and a commitment to delivery speed, I excel at
            creating seamless and responsive interfaces that leave a lasting
            impression.`,
      lang: "English (UK)",
      nationality: "Nigerian",
      gender: "Male",
      hobbies: [
        "Coding",
        "Listening to music",
        "Cooking",
        "Watching anime shows",
      ],
      social: {
        facebook: "https://facebook.com/mradebayo2018",
        twitter: "https://twitter.com/unnamed_labs",
        linkedin: "https://linkedin.com/on/mradebayo2018",
        github: "https://github.com/unnamed-lab",
      },
      email: "adebayo.anuoluwa02@gmail.com",
      resumeUrl:
        "https://drive.google.com/file/d/1-rnba7-V8PX-XqONjJiBonrhshlU5_gx/view?usp=drive_link",
    },
    experience: [
      {
        timespan: "Jan 2023 - Present",
        title:
          "Bachelor of Technology, Federal University of Technology Owerri",
        type: "education",
        location: "Owerri, Imo",
        info: "I am currently studying Computer Science at the Federal University of Technology Owerri FUTO, pursuing a Bachelor of Technology degree. The program has provided me with a well-rounded education, covering both theoretical foundations and practical applications of computer science.",
      },

      {
        timespan: "Feb 2023 — Jun 2023",
        title: "Volunteer",
        type: "employment",
        location: "Owerri, Imo",
        info: "Over the past few months, I actively volunteered my services to friends and acquaintances, leveraging these opportunities to gain valuable hands-on experience in web development. From assisting with the creation of web section elements to building multiple web pages, I dedicated myself to reBning and expanding my development skills. Through these experiences, I have not only worked diligently but also demonstrated a commitment to continuous learning and improvement in my craft.",
      },
    ],
    skill: {
      bio: `I have a solid understand of HTML5 and CSS3, including responsive
            design principles and cross-broswer compatibility with an experience
            in creating visually appealing and accessible web interfaces. With
            quite some proficiency in intermediate-level JavaScript, including
            DOM manipulation, event handling and AJAX, and familiarity with
            popular libraries and frameworks like React, Angular and Vue.js.`,
      coding: ["html", "css", "javascript", "python"],
      framework: ["sass", "react", "angular"],
      other: ["github", "vscode"],
    },
    project: {
      bio: `Welcome to my project portfolio! Here, you'll find a curated
            collection of my creative endeavors and technical projects. Each
            piece represents a journey of innovation, problem-solving, and
            continuous learning. Feel free to explore this showcase of my
            passion and expertise in action.`,
      build: [
        //  Type 0 = Website Build, Type 1 = Application Build & Type 2 = API
        {
          id: 0,
          type: 0,
          title: "Web3 Website Landing Page (Single-Page)",
          info: "This project showcases my dedication to improving my frontend development skills. With careful design and skilled execution, I aimed to enhance my ability to create visually appealing and user-centered web interfaces.",
          url: "https://unnamed-web3-build01.vercel.app/",
          stacks: ["HTML", "CSS", "JavaScript"],
        },
      ],
    },
    feedback: {
      bio: `Discover what others have to say about working with me. In this
            testimonial section, you'll find insights and feedback from clients
            and collaborators who have experienced firsthand the value I bring
            to projects. Their words reflect the dedication, professionalism,
            and results-oriented approach that define my work. Take a moment to
            hear their stories and perspectives.`,
      testimonial: [
        // Object formatting - name, title, image, review
      ],
    },
  };

  return (
    <>
      <Intro info={data.about} icon={icon} />
      <About info={data.about} icon={icon} />
      <Experience info={data.experience} icon={icon} />
      <Skill info={data.skill} icon={icon} />
      <Projects {...data.project} icon={icon} />
      <Feedback profile={data.about} {...data.feedback} icon={icon} />
      <Contact {...data.about} icon={icon} />
      <GitHubRedirect icon={icon} git={data.about.social.github} />
    </>
  );
};

const GitHubRedirect = ({icon, git}) => (
  <>
  <div className="git-redirect">
    <a className="git-link" href={git} target="_blank" rel="noopener noreferrer">
      <span className="label">GitHub</span>
      <span className="git-icon">{icon.github}</span>
    </a>
  </div>
  </>
)

const Intro = ({ info, icon }) => {
  const { firstName, lastName, alias, imageUrl, resumeUrl, social } = info;

  return (
    <section id="intro" className="hero">
      <div className="col-lg-12">
        <div className="row">
          <div className="intro">
            <span className="phrase">My name is</span>
            <h1 className="name">
              {firstName} <br />
              {lastName}.
            </h1>
            <span className="interlude">
              I&apos;m also known as <b>{alias}</b>.
            </span>

            <div className="social-menu">
              <a href={social.facebook} className="social-link">
                <span className="fb-box-icon">{icon.facebookBox}</span>
              </a>
              <a href={social.twitter} className="social-link">
                <span className="tw-box-icon">{icon.twitterBox}</span>
              </a>
              <a href={social.linkedin} className="social-link">
                <span className="lknd-box-icon">{icon.linkedinBox}</span>
              </a> 
            </div>

            <div className="resume-tab">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="resume"
                download
              >
                <span className="icon download-icon">{icon.download}</span>{" "}
                Download Resume
              </a>
            </div>
          </div>
          <div className="sub-intro">
            <div className="profile-pic">
              <img src={imageUrl} alt={`${firstName} ${lastName}`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = ({ info, icon }) => {
  const { jobTitle, jobBio, location, lang, nationality, gender, hobbies } =
    info;

  return (
    <section id="about" className="about">
      <div className="section-tab">
        <span className="icon about-icon">{icon.about}</span>
        <span className="title">About</span>
      </div>
      <div className="section-body">
        <h1 className="title">
          {jobTitle}, based in {location}.
        </h1>
        <p className="info">{jobBio}</p>
        <div className="extra">
          <div className="item">
            <h3 className="sub-heading">
              <span className="icon lang-icon">{icon.language}</span> Languages
            </h3>
            <ul className="list-menu">
              <li className="list-item">{lang}</li>
            </ul>
          </div>
          <div className="item">
            <h3 className="sub-heading">
              <span className="icon globe-icon">{icon.globe}</span> Nationality
            </h3>
            <ul className="list-menu">
              <li className="list-item">{nationality}</li>
            </ul>
          </div>
          <div className="item">
            <h3 className="sub-heading">
              <span className="icon gender-icon">{icon.gender}</span> Gender
            </h3>
            <ul className="list-menu">
              <li className="list-item">{gender}</li>
            </ul>
          </div>
          <div className="item">
            <h3 className="sub-heading">
              <span className="icon hobby-icon">{icon.hobby}</span> Hobbies
            </h3>
            <ul className="list-menu h-list">
              {hobbies.map((el, key) => {
                return (
                  <li key={key} className="list-item">
                    {el}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Experience = ({ info, icon }) => {
  return (
    <section id="experience" className="work">
      <div className="section-tab">
        <span className="icon work-icon">{icon.work}</span>
        <span className="title">Work Experience</span>
      </div>
      <div className="section-body">
        <h1 className="title">Employment &amp; Education Experience.</h1>

        <div className="work-tree">
          {info.map((item, key) => {
            let typeID;
            if (item.type === "education") typeID = 0;
            else if (item.type === "employment") typeID = 1;

            return (
              <div key={key} className="branch">
                <div className="timespan">{item.timespan}</div>
                <div className="content">
                  <div className="header">{item.title}</div>
                  <div className="branch-info">
                    <div className={`tablet type-${typeID}`}>{item.type}</div>
                    <div className="tablet location">{item.location}</div>
                  </div>
                  <div className="brief">{item.info}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Skill = ({ info, icon }) => {
  const { bio, coding, framework, other } = info;

  const setImg = (input) => {
    let img;
    switch (input) {
      case "html":
        img = htmlImg;
        break;
      case "css":
        img = cssImg;
        break;
      case "javascript":
        img = jsImg;
        break;
      case "python":
        img = pythonImg;
        break;
      case "sass":
        img = sassImg;
        break;
      case "react":
        img = reactImg;
        break;
      case "angular":
        img = angularImg;
        break;
      case "github":
        img = githubImg;
        break;
      case "vscode":
        img = vscodeImg;
        break;
    }
    return img;
  };

  return (
    <section id="skills" className="skillset">
      <div className="section-tab">
        <span className="icon skill-icon">{icon.skill}</span>
        <span className="title">Skills</span>
      </div>
      <div className="section-body">
        <h1 className="title">Technical Experience/Skills.</h1>
        <p className="info">{bio}</p>

        <div className="extra">
          <div className="item n-r">
            <h3 className="sub-heading">Programming/Coding</h3>
            <div className="row mt-2 mb-1">
              {coding.map((item, key) => {
                return (
                  <div key={key} className="card mini">
                    <div className="body">
                      <div className="icon animate">
                        <img src={setImg(item)} alt={item} />
                      </div>
                      <div className="label">{item}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="item n-r">
            <h3 className="sub-heading">Frameworks &amp; Libraries.</h3>
            <div className="row mt-2 mb-1 mx-auto">
              {framework.map((item, key) => {
                return (
                  <div key={key} className="card mini">
                    <div className="body">
                      <div className="icon animate">
                        <img src={setImg(item)} alt={item} />
                      </div>
                      <div className="label">{item}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="item n-r">
            <h3 className="sub-heading">Version Control &amp; IDE.</h3>
            <div className="row mt-2 mb-1 mx-auto">
              {other.map((item, key) => {
                // console.log(other.findIndex(item));
                return (
                  <div key={key} className="card mini">
                    <div className="body">
                      <div className="icon animate">
                        <img src={setImg(item)} alt={item} />
                      </div>
                      <div className="label">{item}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = ({ bio, build, icon }) => {
  const pT = build.length;
  let itemCount = 5;
  let item;
  const [items, setItems] = React.useState(itemCount);
  const [itemType, setItemType] = React.useState("all");
  const convertID = (text) => {
    switch (text) {
      case "All":
        item = "all";
        break;
      case "Website":
        item = "web";
        break;
      case "Application":
        item = "app";
        break;
      case "API":
        item = "api";
        break;
    }
  };
  const useStorageState = (key, initialState) => {
    const [value, setValue] = React.useState(
      // localStorage.getItem(key) ||
      initialState
    );
    React.useEffect(() => {
      localStorage.setItem(key, value);
    }, [value, key]);

    return [value, setValue];
  };
  const [activeTab, setActiveTab] = useStorageState("tab", "projectAll");
  const [htmlText, setHTMLText] = useStorageState("text", "All");
  convertID(htmlText);
  // console.log(htmlText, item, activeTab);

  const setActiveCat = (target, id) => {
    setHTMLText(target);
    convertID(htmlText);
    setItemType(item)
    // console.log(activeTab)
    if (document.getElementById(activeTab).classList.contains("active"))
      document.getElementById(activeTab).classList.remove("active");
    setActiveTab(id);
  };

  const changeType = (event) => {
    const id = event.target.id;
    const elementID = document.getElementById(id);
    if (!elementID.classList.contains("active")) {
      try {
        if (!elementID.classList.contains("active")) {
          setActiveCat(event.target.innerHTML, id);
        } else {
          elementID.classList.add("active");
          setActiveCat(event.target.innerHTML, id);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const addItemList = () => (setItems(itemCount += 5));

  

  const pg = (
    <div className="paginator">
      <button className="pag-btn" onClick={addItemList}>
        Load more
      </button>
    </div>
  );

  return (
    <section id="project" className="projects">
      <div className="section-tab">
        <span className="icon project-icon">{icon.project}</span>
        <span className="title">Project</span>
      </div>
      <div className="section-body">
        <h1 className="title">Project Portfolio</h1>
        <p className="info">{bio}</p>

        <div className="extra">
          <div className="catalogue">
            <div className="navigation">
              <ul className="item-menu">
                <li>
                  <button
                    type="button"
                    id="projectAll"
                    className="item-option"
                    onClick={changeType}
                  >
                    All
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    id="projectWeb"
                    className="item-option"
                    onClick={changeType}
                  >
                    Website
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    id="projectApp"
                    className="item-option"
                    onClick={changeType}
                  >
                    Application
                  </button>
                </li>
                <li>
                  <button
                    id="projectAPI"
                    type="button"
                    className="item-option"
                    onClick={changeType}
                  >
                    API
                  </button>
                </li>
              </ul>
            </div>

            <div className="catalogue-body">
              <RenderProjects array={build} count={items} type={itemType} />
              {/* {render(build, itemCount, type)} */}
            </div>
            {pT > 5 ? pg : null}
          </div>
        </div>
      </div>
    </section>
  );
};

const RenderProjects = ({array, count, type}) => {
  const render = function (arr = array, sum = 5, type = "all") {
    const filterType = function (filter = type) {
      let type;
      if (filter === "web") type = 0;
      else if (filter === "app") type = 1;
      else if (filter === "api") type = 2;
      else type = 3;
      return type;
    };
    const output = arr
      .filter((item) => {
        if (filterType() < 3) return item.type === filterType();
        else return item.type < 3;
      })
      .filter((item, key) => key <= sum - 1)
      .map((item) => {
        return <ProjectItem key={item.id} {...item} />;
      })
      .sort((a, b) => a + b);

    return output.length > 0 ? output : <><h1 style={{textTransform: "capitalize"}}>Nothing to see here!</h1></>
  };

  return (
    <>
    {render(array, count, type)} 
    </>
  );
}

const ProjectItem = ({ type, title, info, url, stacks }) => {
  return (
    <div className={`item-card option-${type}`}>
      <div className="card-container">
        <div className="card-body">
          <div className="header">{title}.</div>
          <div className="info">{info}</div>
        </div>
        <h6 className="stack">Stacks: </h6>
        <ul className="stack-list">
          {stacks.map((item, id) => (
            <Stacks key={id}>{item}</Stacks>
          ))}
        </ul>
        <a href={url} className="project-btn">
          Visit Project
        </a>
      </div>
    </div>
  );
};

const Stacks = ({ children }) => <li className="stack-item">{children}</li>;

const Feedback = ({ profile, bio, testimonial, icon }) => {
  const getTestimonials = () => {
    if (testimonial.length >= 1) {
      return testimonial.map((item, key) => (
        <Review
          key={key}
          name={item.name}
          title={item.title}
          img={item.image}
          review={item.review}
        />
      ));
    } else {
      return (
        <Review
          key={0}
          name={`${profile.firstName} ${profile.lastName}`}
          title={profile.jobTitle}
          img={profile.imageUrl}
          review={`No feedback yet!  \nHopefully I get some sweet reviews from my clients.`}
        />
      );
    }
  };

  return (
    <section id="feedback" className="testimonial">
      <div className="section-tab">
        <span className="icon star-icon">{icon.review}</span>
        <span className="title">Review</span>
      </div>
      <div className="section-body">
        <h1 className="title">Testimonial</h1>
        <p className="info">{bio}</p>
        <div className="extra">
          <div className="carousel">
            <div className="carousel-body">{getTestimonials()}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Review = ({ name, title, img, review }) => {
  return (
    <div className="carousel-slide">
      <div className="quote">{review}</div>

      <div className="client-profile">
        <div className="profile-img">
          <img src={img} alt={name} />
        </div>
        <div className="detail">
          <div className="name">{name}</div>
          <div className="position">{title}</div>
        </div>
      </div>
    </div>
  );
};

const Contact = ({
  firstName,
  lastName,
  jobTitle,
  imageUrl,
  email,
  social,
  icon,
}) => {
  return (
    <section id="contact" className="contact">
      <div className="section-tab">
        <span className="icon contact-icon">{icon.contact}</span>
        <span className="title">Contact</span>
      </div>
      <div className="section-body">
        <h1 className="title">Connect with me.</h1>

        <div className="extra">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="profile-card">
              <div className="profile-img">
                <img src={imageUrl} alt={`${firstName} ${lastName}`} />
              </div>
              <div className="profile-details">
                <div className="name">{`${firstName} ${lastName}`}</div>
                <div className="role">{jobTitle}</div>
                <div className="social-menu">
                  <a
                    href={social.facebook}
                    className="social-link"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="fb-box-icon">{icon.facebookBox}</span>
                  </a>
                  <a
                    href={social.twitter}
                    className="social-link"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="tw-box-icon">{icon.twitterBox}</span>
                  </a>
                  <a
                    href={social.linkedin}
                    className="social-link"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="lknd-box-icon">{icon.linkedinBox}</span>
                  </a> 
                </div>
                <div className="hire-btn">
                  <a href={`mailto:${email}`} target="_blank" rel="noreferrer noopener" className="btn primary">
                    Hire Me!
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12">
            <div className="form">
              <h2 className="sub-heading">Send Me A Message.</h2>
              <form action="javascript.void(0)" className="form-container">
                <div className="form-group">
                  <label htmlFor="fName">Full Name:</label>
                  <input
                    className="form-input"
                    type="text"
                    name="fullname"
                    id="fName"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address:</label>
                  <input
                    className="form-input"
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject:</label>
                  <input
                    className="form-input"
                    type="text"
                    name="mailSubject"
                    id="subject"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <br />
                  <textarea
                    className="form-input"
                    name="body"
                    id="message"
                    cols="50"
                    rows="10"
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="attachFile">Attachment:</label>
                  <input type="file" name="attachFile" id="attachFile" />
                </div>
                <div className="col-5 mx-auto mt-2">
                  <input
                    type="submit"
                    className="btn form-btn primary"
                    value="Send Message"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// addIcons();
export default App;
