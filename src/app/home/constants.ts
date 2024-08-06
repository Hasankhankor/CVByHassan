import {
  initialEducation,
  initialProfile,
  initialProject,
  initialWorkExperience,
} from "lib/redux/resumeSlice";
import type { Resume } from "lib/redux/types";
import { deepClone } from "lib/deep-clone";

export const END_HOME_RESUME: Resume = {
  profile: {
    name: "Hassan Tariq",
    summary:
      "Software engineer obsessed with building exceptional products that people love",
    email: "hkhankor@gmail.com",
    phone: "03469413675",
    location: "Pakistan Islamabad",
    url: "https://www.linkedin.com/in/hasan-khankor-038795199/",
  },
  workExperiences: [
    {
      company: " Cloud Computing (AWS) ",
      jobTitle: "Software Engineer Intern",
      date: "May 2022 - ",
      descriptions: [
        "AWS Services (e.g., EC2, S3)",
        "Linux and Windows Environments",
        "Scripting (e.g., Python, Bash)",
      ],
    },
    {
      company: " Great future Pakistan",
      jobTitle: " UI/UX",
      date: "Summer 2022 -2023",
      descriptions: [
        " Closely collaborated with internal business departments and cross-functional teams to create",
        "Great Future Pakistan Website (Wordpress)",
        "Social Media Management",
      ],
    },
    {
      company: " Invovision Technologies",
      jobTitle: " Full Stack",
      date: "Summer 2023 -2024",
      descriptions: [
        "Developed a range of unique designs and/or React code, and updated pre-existing design concepts for publications, ads, brochures, websites, and catalogs. ",
        "Har Cheez Video Downloader Mobile App (React Native)",
        " Movies Mobile App (React Native)",
        " ShadiHall Booking Website (NextJs,NodeJs)",

      ],
    },
  ],
  educations: [
    {
      school: " Abasyn University Islamabad",
      degree: "BS-Software Engineering ",
      date: "Sep 2019 - May 2023",
      gpa: "2.6",
      descriptions: [
        "Teaching Assistant for Programming for the Web (2022 - 2023)",
        "Coursework: Object-Oriented Programming (A+), Programming for the Web (A+), Cloud Computing (A), Introduction to Machine Learning (A-), Algorithms Analysis (A-)",
      ],
    },
  ],
  projects: [
    {
      project: "",
      date: "Spring 2023",
      descriptions: [
        " Created and launched wedding booking Website  ",
      ],
    },
  ],
  skills: {
    featuredSkills: [
      { skill: "NextJS", rating: 4 },
      { skill: "Tailwind", rating: 4 },
      { skill: "Python", rating: 3 },
      { skill: "TypeScript", rating: 3 },
      { skill: "React", rating: 3 },
      { skill: "C++", rating: 2 },
    ],
    descriptions: [
      "Tech: React Hooks, GraphQL, Node.js, SQL, Postgres, NoSql, Redis, REST API, Git",
      "Soft: Teamwork, Creative Problem Solving, Communication, Learning Mindset, Agile",
    ],
  },
  custom: {
    descriptions: [],
  },
};

export const START_HOME_RESUME: Resume = {
  profile: deepClone(initialProfile),
  workExperiences: END_HOME_RESUME.workExperiences.map(() =>
    deepClone(initialWorkExperience)
  ),
  educations: [deepClone(initialEducation)],
  projects: [deepClone(initialProject)],
  skills: {
    featuredSkills: END_HOME_RESUME.skills.featuredSkills.map((item) => ({
      skill: "",
      rating: item.rating,
    })),
    descriptions: [],
  },
  custom: {
    descriptions: [],
  },
};
