/**
 ___                            _     ___                                 
|_ _|_ __ ___  _ __   ___  _ __| |_  |_ _|_ __ ___   __ _  __ _  ___  ___ 
 | || '_ ` _ \| '_ \ / _ \| '__| __|  | || '_ ` _ \ / _` |/ _` |/ _ \/ __|
 | || | | | | | |_) | (_) | |  | |_   | || | | | | | (_| | (_| |  __/\__ \
|___|_| |_| |_| .__/ \___/|_|   \__| |___|_| |_| |_|\__,_|\__, |\___||___/
              |_|                                         |___/          
 */
import { GrGithub, GrMail, GrLinkedin } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

import HeroPerson from './assets/images/hero/person.png'
import PythonLogo from './assets/images/skills/python.png';
import ReactLogo from './assets/images/skills/react.png';
import AWSLogo from './assets/images/skills/aws.jpeg';

import ProjectPerson from './assets/images/projects/person.png';
import F1Game from './assets/images/projects/f1logo.jpeg';

/**
 ____                              _         ____            _             _   
|  _ \ _   _ _ __   __ _ _ __ ___ (_) ___   / ___|___  _ __ | |_ ___ _ __ | |_ 
| | | | | | | '_ \ / _` | '_ ` _ \| |/ __| | |   / _ \| '_ \| __/ _ \ '_ \| __|
| |_| | |_| | | | | (_| | | | | | | | (__  | |__| (_) | | | | ||  __/ | | | |_ 
|____/ \__, |_| |_|\__,_|_| |_| |_|_|\___|  \____\___/|_| |_|\__\___|_| |_|\__|
       |___/                     
 */
export const content = {
    nav: [
        {
          link: "#home",
          icon: TbSmartHome,
        },
        {
          link: "#skills",
          icon: BiUser,
        },
        // {
        //   link: "#services",
        //   icon: RiServiceLine,
        // },
        {
          link: "#projects",
          icon: RiProjectorLine,
        },
        {
          link: "#contact",
          icon: MdOutlinePermContactCalendar,
        },
      ],
      hero: {
        btnText: "Hire Me",
        image: HeroPerson,
      },
      skills: {
        skills_content: [
            {
                name: "Python",
                para: "I am good at python",
                logo: PythonLogo,
                modal: [
                    "I am good at it",
                    "These are the things I can do with it",
                    "These are some of the packags"
                ]
            },
            {
                name: "ReactJS",
                para: "This is made in React",
                logo: ReactLogo,
                modal: [
                    "I am good at it",
                    "These are the things I can do with it",
                    "These are some of the packags"
                ]
            },
            {
                name: "AWS",
                para: "I know some things",
                logo: AWSLogo,
                modal: [
                    "I am good at it",
                    "These are the things I can do with it",
                    "These are some of the packags"
                ]
            }
        ],
        icon: MdArrowForward,
      },
      experience: {

      }, 
      education: {

      },
      projects: {
        image: ProjectPerson,
        projects: [
            {
                name: "Formula 1 Fantasy Game",
                description: "A game",
                link: "http://fantasy.kennylipke.com",
                image: F1Game,
            },
            // {
            //     name: "Another one...",
            //     description: "A project of some sort",
            //     image: null,
            // }
        ]
      },
      contact: {
        links: [
            {
                icon: GrMail,
                text: "kenlipke@me.com",
                link: "mailto:kenlipke@me.com",
            },
            {
                icon: GrLinkedin,
                text: "LinkedIn",
                link: "https://www.linkedin.com/in/kennylipke/"
            },
            {
                icon: GrGithub,
                text: "GitHub",
                link: "https://github.com/kel89"
            }
        ]
      }
}