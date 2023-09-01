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
// import { addIcons } from "./assets/js/icons";
// console.log(addIcons());

const App = () => {
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
        github: "https://github.com/unnamed_lab",
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
          info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure similique modi alias pariatur reprehenderit? Reprehenderit voluptatem dolorum laboriosam, nam illum saepe corporis nobis iusto.",
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
      <Intro info={data.about} />
      <About info={data.about} />
      <Experience info={data.experience} />
      <Skill info={data.skill} />
      <Projects {...data.project} />
      <Feedback profile={data.about} {...data.feedback} />
      <Contact {...data.about} />
    </>
  );
};

const Intro = ({ info }) => {
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
              {/* {<Socials info={social} />} */}
              {/* {socialMedia.map((el) => {
                return el;
              })} */}
            </div>

            <div className="resume-tab">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="resume"
                download
              >
                <span className="icon download-icon"></span> Download Resume
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

const Socials = ({ info }) => {
  const { social } = info;

  const socialLinks = () => {
    let socialMedia = [];
    for (const key of Object.keys(social)) {
      let abbr = String(key);
      if (key === "facebook") abbr = "fb";
      else if (key === "twitter") abbr = "tw";
      else if (key === "linkedin") abbr = "lknd";
      else if (key === "github") abbr = "git";
      socialMedia.push(
        <SocialButton
          key={key}
          link={social.keys(key)}
          classStyle={"social-link"}
        >
          <span className={`${abbr}-box-icon`}></span>
        </SocialButton>
      );
    }

    return socialMedia.map((item) => {
      return item;
    });
  };

  return socialLinks();
};

const SocialButton = ({ key, link, classStyle, children }) => (
  <a key={key} href={link} className={classStyle}>
    {children}
  </a>
);

const About = ({ info }) => {
  const { jobTitle, jobBio, location, lang, nationality, gender, hobbies } =
    info;

  return (
    <section id="about" className="about">
      <div className="section-tab">
        <span className="icon about-icon"></span>
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
              <span className="icon lang-icon"></span> Languages
            </h3>
            <ul className="list-menu">
              <li className="list-item">{lang}</li>
            </ul>
          </div>
          <div className="item">
            <h3 className="sub-heading">
              <span className="icon globe-icon"></span> Nationality
            </h3>
            <ul className="list-menu">
              <li className="list-item">{nationality}</li>
            </ul>
          </div>
          <div className="item">
            <h3 className="sub-heading">
              <span className="icon gender-icon"></span> Gender
            </h3>
            <ul className="list-menu">
              <li className="list-item">{gender}</li>
            </ul>
          </div>
          <div className="item">
            <h3 className="sub-heading">
              <span className="icon hobby-icon"></span> Hobbies
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

const Experience = ({ info }) => {
  return (
    <section id="experience" className="work">
      <div className="section-tab">
        <span className="icon work-icon"></span>
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

const Skill = ({ info }) => {
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
        <span className="icon skill-icon"></span>
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

const Projects = ({ bio, build }) => {
  const pT = build.length;
  let itemCount = 5;
  let type = "all";

  const changeType = (input) => {
    type = input;
    console.log(`New input: ${input}`);
    return type;
  };

  const projChange = () => {};

  const addItemList = () => (itemCount += 5);

  const render = function (arr = build, sum = 5, type = "all") {
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
        const output = <ProjectItem key={item.id} {...item} />;
        return output;
      })
      .sort((a, b) => a + b);

    return output;
  };

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
        <span className="icon project-icon"></span>
        <span className="title">Project</span>
      </div>
      <div className="section-body">
        <h1 className="title">Project Portfolio</h1>
        <p className="info">{bio}</p>

        <div className="extra">
          <div className="catalogue">
            <div className="navigation">
              <ul className="item-menu">
                <li
                  id="projectAll"
                  className="item-option active"
                  onClick={projChange}
                >
                  All
                </li>
                <li
                  id="projectWeb"
                  className="item-option"
                  onClick={projChange.call(changeType, "web")}
                >
                  Website
                </li>
                <li
                  id="projectApp"
                  className="item-option"
                  onClick={projChange}
                >
                  Application
                </li>
                <li
                  id="projectAPI"
                  className="item-option"
                  onClick={projChange}
                >
                  API
                </li>
              </ul>
            </div>
            <div className="catalogue-body">{render(build, itemCount)}</div>
            {pT > 5 ? pg : null}
          </div>
        </div>
      </div>
    </section>
  );
};

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

const Feedback = ({ profile, bio, testimonial }) => {
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
          review={`No feedback yet!  \nHopefully I get some seet reviews from my clients.`}
        />
      );
    }
  };

  return (
    <section id="feedback" className="testimonial">
      <div className="section-tab">
        <span className="icon star-icon"></span>
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

const Contact = () => {

  return (
    <section id="contact" class="contact">
      <div class="section-tab">
        <span class="icon contact-icon"></span>
        <span class="title">Contact</span>
      </div>
      <div class="section-body">
        <h1 class="title">Connect with me.</h1>

        <div class="extra">
          <div class="col-lg-4 col-md-12 col-sm-12">
            <div class="profile-card">
              <div class="profile-img">
                <img
                  src="./assets/img/profile-img.png"
                  alt="Anuoluwa S. Adebayo"
                />
              </div>
              <div class="profile-details">
                <div class="name">Anuoluwa S. Adebayo</div>
                <div class="role">Software Engineer &amp; Web Developer</div>
                <div class="social-menu">
                  <a href="#" class="social-link">
                    <span class="fb-box-icon"></span>
                  </a>
                  <a href="#" class="social-link">
                    <span class="tw-box-icon"></span>
                  </a>
                  <a href="#" class="social-link">
                    <span class="lknd-box-icon"></span>
                  </a>
                </div>
                <div class="hire-btn">
                  <a href="#" class="btn primary">
                    {" "}
                    Hire Me!{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8 col-md-12 col-sm-12">
            <div class="form">
              <h2 class="sub-heading">Send Me A Message.</h2>
              <div class="form-container">
                <div class="form-group">
                  <label for="fName">Full Name:</label>
                  <input
                    class="form-input"
                    type="text"
                    name="fullname"
                    id="fName"
                  />
                </div>
                <div class="form-group">
                  <label for="email">Email Address:</label>
                  <input
                    class="form-input"
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>
                <div class="form-group">
                  <label for="subject">Subject:</label>
                  <input
                    class="form-input"
                    type="text"
                    name="mailSubject"
                    id="subject"
                  />
                </div>
                <div class="form-group">
                  <label for="message">Message:</label>
                  <br />
                  <textarea
                    class="form-input"
                    name="body"
                    id="message"
                    cols="50"
                    rows="10"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="attachFile">Attachment:</label>
                  <input type="file" name="attachFile" id="attachFile" />
                </div>
                <div class="col-5 mx-auto mt-2">
                  <input
                    type="submit"
                    class="btn form-btn primary"
                    value="Send Message"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// addIcons();
export default App;
