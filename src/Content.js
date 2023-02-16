/**
 ___                            _     ___                                 
|_ _|_ __ ___  _ __   ___  _ __| |_  |_ _|_ __ ___   __ _  __ _  ___  ___ 
 | || '_ ` _ \| '_ \ / _ \| '__| __|  | || '_ ` _ \ / _` |/ _` |/ _ \/ __|
 | || | | | | | |_) | (_) | |  | |_   | || | | | | | (_| | (_| |  __/\__ \
|___|_| |_| |_| .__/ \___/|_|   \__| |___|_| |_| |_|\__,_|\__, |\___||___/
              |_|                                         |___/          
 */
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

import HeroPerson from './assets/images/hero/person.png'
import PythonLogo from './assets/images/skills/python.png';
import ReactLogo from './assets/images/skills/react.png';
import AWSLogo from './assets/images/skills/aws.jpeg';

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
        {
          link: "#services",
          icon: RiServiceLine,
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
                para: "I am good at python",
                logo: PythonLogo,
            },
            {
                name: "ReactJS",
                para: "This is made in React",
                logo: ReactLogo,
            },
            {
                name: "AWS",
                para: "I know some things",
                logo: AWSLogo,
            }
        ],
        icon: MdArrowForward,
      }
}