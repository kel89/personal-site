/**
 ___                            _     ___                                 
|_ _|_ __ ___  _ __   ___  _ __| |_  |_ _|_ __ ___   __ _  __ _  ___  ___ 
 | || '_ ` _ \| '_ \ / _ \| '__| __|  | || '_ ` _ \ / _` |/ _` |/ _ \/ __|
 | || | | | | | |_) | (_) | |  | |_   | || | | | | | (_| | (_| |  __/\__ \
|___|_| |_| |_| .__/ \___/|_|   \__| |___|_| |_| |_|\__,_|\__, |\___||___/
              |_|                                         |___/          
 */
import { GrGithub, GrMail, GrLinkedin } from "react-icons/gr";
import { MdArrowForward, MdCall, MdWorkOutline } from "react-icons/md";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

// import HeroPerson from './assets/images/hero/person.png'
import HeroPerson from './assets/images/hero/Subject.png'
import PythonLogo from './assets/images/skills/python.png';
import ReactLogo from './assets/images/skills/react.png';
import AWSLogo from './assets/images/skills/aws.jpeg';

import ProjectPerson from './assets/images/projects/SubjectCrop.png';
import F1Game from './assets/images/projects/f1logo.jpeg';

import BAHLogo from './assets/images/experience/bah_logo.jpeg'
import HellometerLogo from './assets/images/experience/hellometer_logo.png';
import LucidLogo from './assets/images/experience/lucid_logo.png';

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
            link: "#experience",
            icon: MdWorkOutline,
        },
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
                para: "Front-end, back-end, and everything inbetween",
                logo: PythonLogo,
                modal: [
                    "Data analytics with pandas, matplotlib, NumPy, SciPy, SciKit-Learn, PyTorch, OpenCV",
                    "Web applications utilizing Flask",
                    "Front-end with PyQt"
                ]
            },
            {
                name: "ReactJS",
                para: "This is made in React",
                logo: ReactLogo,
                modal: [
                    "Full service web applications",
                    "Small, pretty, quick webpages like this"
                ]
            },
            {
                name: "AWS",
                para: "Hosting, Databases, Analytics, and more",
                logo: AWSLogo,
                modal: [
                    "Hosting: Amplify, Cognito, ElasticBeanstalk, SAM",
                    "Data: RDS, DynamoDB, S3, Kinesis, AppSync",
                    "Infrastructure: IAM, CloudBuild, CodePipeline, EC2, Lambda, CloudFormation, ECR,  "
                ]
            }
        ],
        icon: MdArrowForward,
      },
      experience: 
        [
            {
                company: "Hellometer",
                companyDescription: "Computer Vision Start-up for QSR",
                dates: "December 2020 to December 2022",
                title: "Founding Full-Stack Engineer",
                tasks: [
                    "Designed and built customer facing web-application",
                    "Built live and historical video streaming platform",
                    "Setup company cloud infrastructure on both AWS and GCP",
                    "Created in-store Drive-Thru monitor"
                ],
                logo: HellometerLogo
            },
            {
                company: "Booz Allen Hamilton",
                companyDescription: "Defense Consulting",
                dates: "August 2018 to December 2022",
                title: "Associate",
                tasks: [
                    "Analyzed IT system data for application rationalization and cloud migration",
                    "Developed custom, interactive dashboards with D3.js",
                    "Created and implemented schedule optimization algorithm for cloud migration",
                    "DoD Secret Clearance"
                ],
                logo: BAHLogo
            },
            {
                company: "Lucid Software",
                companyDescription: "Diagraming Software",
                dates: "Summer 2017",
                title: "Data Analyst Intern",
                tasks: [
                    "Analyzed user data to understand behavior and find pricing opportunities",
                    "Preformed clusting analysis to understand user retention, leading to new user characterizations"
                ],
                logo: LucidLogo,
            }
        ], 
      education: {

      },
      projects: {
        image: ProjectPerson,
        projects: [
            {
                name: "Formula 1 Fantasy Game",
                description: "Customer league to predict race outcomes each week",
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