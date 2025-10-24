/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shaurya Panhale",
  title: "Hello, I'm Shaurya Panhale",
  subTitle: emoji(
    "A passionate Full Stack Software Developer and a Student in MIT-WPU having an experience of building Web applications with JavaScript / Python / JAVA / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/10ScXh--UTNGqwMH0zXfLWF4-oyOOwG3W/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/shauryapanhale",
  linkedin: "https://www.linkedin.com/in/shaurya-panhale-29958934a/",
  gmail: "panhaleshaurya@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=100092731795076",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Managing data using tools like MySQL, Supabase, MongoDB"),
    emoji(
      "⚡ Deployment of web applications using serices like Netlify, Render"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Gopalan National School, Bangalore",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "9th -10th",
      duration: "2020-2022",
      desc: "Scored 89.9% in 10th Board exams conducted by ICSE.",
    },
    {
      schoolName: "MIT World Peace University, Pune",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "BTECH-INT in CSE/AI-DS",
      duration: "2023-Present",
      desc: "Current CGPA: 9.09",
      descBullets: ["Till now have participated in 2 polytechnic workathons and reached final round in one of them."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 â€“ Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 â€“ May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 â€“ Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "MY NOTABLE PROJECTS AND WORK",
  projects: [
    {
      image: require("./assets/images/project1.png"),
      projectName: "ESRA (Emergency situation rescue assistance)",
      projectDesc: "Life-saving mobile application streamlining disaster response coordination through real-time resource allocation and intelligent agency matching. Features one-tap SOS signal system with automatic geolocation forwarding to nearby rescue agencies, offline cached database for zero-connectivity emergency access, and real-time tracking of agency availability with ETA updates.",
      footerLink: []
    },
    {
      image: require("./assets/images/project2.png"),
      projectName: "Kisaan Setu",
      projectDesc: "An intelligent agricultural decision-support platform that empowers Indian farmers with data-driven crop recommendations using machine learning algorithms. Addressing critical challenges in the agriculture sectorâ€”which contributes 17% to India's GDP and employs 60% of the populationâ€”KISAAN SETU helps reduce farmer debt, cultivation costs, and crop failures by predicting optimal crops based on environmental and soil parameters.",
      footerLink: []
    },
    {
      image: require("./assets/images/project3.png"),
      projectName: "English to SQL converter",
      projectDesc: "An intelligent command-line application that leverages Gemini 1.0 API to translate natural language queries into structured SQL statements, democratizing database access for non-technical users. This tool eliminates the need for SQL syntax knowledge by enabling users to interact with databases using plain English, making data retrieval accessible to business analysts, managers, and stakeholders without programming backgrounds.",
      footerLink: []
    },
    {
      image: require("./assets/images/project4.png"),
      projectName: "Capstone registeration portal",
      projectDesc: "A comprehensive web-based registration system developed for MIT WPU Pune's Computer Science capstone projects, featuring AI-powered duplicate idea detection and multi-role access management.",
      footerLink: []
    },
    {
      image: require("./assets/images/project5.png"),
      projectName: "Fitz.ai",
      projectDesc: "An intelligent fashion recommendation platform that uses advanced AI to deliver personalized styling solutions, helping users optimize their wardrobes and make confident outfit choices for any occasion. The application addresses fashion decision fatigue while promoting sustainable wardrobe usage through smart outfit generation and virtual try-on technology.",
      footerLink: []
    },
    {
      image: require("./assets/images/project6.png"),
      projectName: "Studdy Buddy",
      projectDesc: "An advanced educational web application featuring a 3D animated avatar that provides interactive, voice-synchronized explanations on any topic. The system combines artificial intelligence, real-time animations, and text-to-speech technology to create an immersive learning experience.",
      footerLink: []
    },
    {
      image: require("./assets/images/project7.png"),
      projectName: "EVA",
      projectDesc: "A voice-controlled desktop automation system combining speech recognition (Whisper), computer vision (OmniParser), and custom ML models for intelligent command classification and execution. Features hybrid AI architecture with Gemini for contextual understanding, custom-trained models for step generation, and low-level C executors for system controlâ€”achieving 95%+ accuracy with <600ms per-action latency.",
      footerLink: []
    }
  ],
  display: true
};



// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Certifications and courses completed",
  achievementsCards: [
    {
      title: "Power BI Course Certificate",
      subtitle: "This certificate is for completing the Power BI course from Microsoft",
      image: require("./assets/images/cert1.png"),
      imageAlt: "Certificate 1",
      footerLink: [
        { name: "View Certificate", url: "https://drive.google.com/file/d/1PbcameqSUXHYY6Gxa-3zANa5l7lQzUF5/view?usp=sharing" }
      ]
    },
    {
      title: "Full Stack Java Script Course Certificate",
      subtitle: "This certificate is for completing the Full Stack JavaScript course from Udemy in 2 months.",
      image: require("./assets/images/cert2.png"),
      imageAlt: "Certificate 2",
      footerLink: [
        { name: "View Certificate", url: "https://drive.google.com/file/d/1xy6_J-W4xFX6efU3YdfxyiOosEYwM61r/view?usp=sharing" }
      ]
    },
    {
      title: "Polytechnic Workathon certificate",
      subtitle: "This certificate is for participating in the Hack-MIT 2024 workathon conducted by MIT WPU Pune.",
      image: require("./assets/images/cert3.png"),
      imageAlt: "Certificate 3",
      footerLink: [
        { name: "View Certificate", url: "https://in.docworkspace.com/d/sIP3avevaAZea2ccG?lg=en-US&sa=601.1074&ps=1&fn=Workathon.pdf" }
      ]
    }
  ],
  display: true
};


// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE ðŸ˜…"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast ðŸŽ™ï¸"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9136549202",
  email_address: "panhaleshaurya@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
