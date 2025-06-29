import Image from "next/image";
import Link from "next/link";
import { GitHub, Email, ExpandMore } from "@mui/icons-material";

import SkillCard from "./../components/skillCard";
import ExperienceCard from "./../components/experienceCard";

import apiIcon from "./../../public/api.svg";
import cIcon from "./../../public/c.svg";
import cssIcon from "./../../public/css.svg";
import dockerIcon from "./../../public/docker.svg";
import dpIcon from "./../../public/dp.svg";
import dsaIcon from "./../../public/dsa.svg";
import eventIcon from "./../../public/event.svg";
import gitIcon from "./../../public/git.svg";
import graphqlIcon from "./../../public/graphql.svg";
import htmlIcon from "./../../public/html.svg";
import javaIcon from "./../../public/java.svg";
import jsIcon from "./../../public/js.svg";
import k8sIcon from "./../../public/k8s.svg";
import kafkaIcon from "./../../public/kafka.svg";
import microserviceIcon from "./../../public/microservice.svg";
import mongoIcon from "./../../public/mongo.svg";
import muiIcon from "./../../public/mui.svg";
import mysqlIcon from "./../../public/mysql.svg";
import nestIcon from "./../../public/nestjs.svg";
import nextIcon from "./../../public/nextjs.svg";
import nodeIcon from "./../../public/nodejs.svg";
import oodIcon from "./../../public/ood.svg";
import pgsqlIcon from "./../../public/pgsql.svg";
import phpIcon from "./../../public/php.svg";
import pythonIcon from "./../../public/python.svg";
import reactIcon from "./../../public/react.svg";
import redisIcon from "./../../public/redis.svg";
import seoIcon from "./../../public/seo.svg";
import tsIcon from "./../../public/ts.svg";

export default function Home() {
  const btnClass =
    "hover:bg-white hover:text-black border border-white py-2 px-4 m-3 rounded-md text-center";
  const iconClass = "pr-2 pb-1";
  const skillCardClass =
    "bg-gray-900 m-4 rounded-lg p-4 border border-neutral-600";
  const skillContainerClass =
    "flex flex-col md:flex-row flex-wrap justify-center items-center";
  const skillHeadingClass = "text-xl font-semibold mb-3";
  const contactClass =
    "px-3 py-2 bg-gray-950 m-2 outline outline-neutral-700/50 rounded";
  const contactLinkClass = "hover:underline hover:underline-offset-2";

  return (
    <div className="bg-gray-950 text-white w-full overflow-x-hidden">
      <div className="w-full min-h-screen flex flex-col items-center justify-center p-4 bg-radial to-gray-950 from-blue-950 shadow-md shadow-black">
        <Image
          src="/me.jpg"
          className="rounded-full w-60 h-auto"
          alt=""
          width={200}
          height={200}
          priority
        />
        <p className="text-6xl font-bold my-4">Bryan Christy</p>
        <p className="font-semibold text-2xl mb-1">Software Engineer</p>
        <p className="text-neutral-400 mb-4">
          Code you path in lines you own, let the logic set the tone.
        </p>
        <div className="flex flex-col md:flex-row py-4">
          <Link href="https://github.com/bryanC29" className={btnClass}>
            <GitHub className={iconClass} />
            Github
          </Link>
          <Link href="mailto:bryan.christy29@gmail.com" className={btnClass}>
            <Email className={iconClass} />
            Contact
          </Link>
        </div>
        <ExpandMore className="absolute bottom-8 animate-bounce" />
      </div>

      <div className="text-center mt-5">
        <p className="text-3xl font-bold">Skillset</p>
        <p className="text-neutral-400">
          Key skills gathered over the years of journey
        </p>

        <div className={skillCardClass}>
          <p className={skillHeadingClass}>Programming Languages</p>
          <div className={skillContainerClass}>
            <SkillCard
              name="JavaScript"
              description="Most popular language for Fullstack applications"
              icon={jsIcon}
            />
            <SkillCard
              name="Java"
              description="Most robust language used for backend servers"
              icon={javaIcon}
            />
            <SkillCard
              name="C/C++"
              description="Basic and direct programming language"
              icon={cIcon}
            />
            <SkillCard
              name="Python"
              description="Versatile and general purpose programming language"
              icon={pythonIcon}
            />
            <SkillCard
              name="HTML"
              description="Most popular website markup language"
              icon={htmlIcon}
            />
            <SkillCard
              name="CSS"
              description="Most popular webpage styling syntax"
              icon={cssIcon}
            />
            <SkillCard
              name="NodeJS"
              description="Efficient server side javascript runtime environment"
              icon={nodeIcon}
            />
            <SkillCard
              name="TypeScript"
              description="Type safe feature rich for javascript"
              icon={tsIcon}
            />
            <SkillCard
              name="PHP"
              description="Fast language for building MVP backend servers"
              icon={phpIcon}
            />
          </div>
        </div>

        <div className={skillCardClass}>
          <p className={skillHeadingClass}>Concepts and Methodologies</p>
          <div className={skillContainerClass}>
            <SkillCard
              name="DSA"
              description="Data Structures and Algorithms"
              icon={dsaIcon}
            />
            <SkillCard
              name="OOD"
              description="Object Oriented system Design"
              icon={oodIcon}
            />
            <SkillCard
              name="DP"
              description="Dynamic problem solving approach"
              icon={dpIcon}
            />
            <SkillCard
              name="Microservice"
              description="Microservice system architecture for highly scalable systems"
              icon={microserviceIcon}
            />
            <SkillCard
              name="Event driven"
              description="Event-driven system architecture for decoupled components"
              icon={eventIcon}
            />
            <SkillCard
              name="API Security"
              description="Security architecture and principles for API Security"
              icon={apiIcon}
            />
            <SkillCard
              name="SEO Optmization"
              description="SEO Optimization for webpages"
              icon={seoIcon}
            />
          </div>
        </div>

        <div className={skillCardClass}>
          <p className={skillHeadingClass}>Tools and Technologies</p>
          <div className={skillContainerClass}>
            <SkillCard
              name="Git"
              description="Source code version controlling system"
              icon={gitIcon}
            />
            <SkillCard
              name="PostgreSQL"
              description="Highly efficient SQL Database"
              icon={pgsqlIcon}
            />
            <SkillCard
              name="MySQL"
              description="Opensource and lightweight SQL Database"
              icon={mysqlIcon}
            />
            <SkillCard
              name="MongoDB"
              description="Most popular NoSQL Database"
              icon={mongoIcon}
            />
            <SkillCard
              name="GraphQL"
              description="Efficient API calling protocol and methodology"
              icon={graphqlIcon}
            />
            <SkillCard
              name="Redis"
              description="In-memory database for fast reads and writes"
              icon={redisIcon}
            />
            <SkillCard
              name="Kafka"
              description="Message queue for event-drive system architecture"
              icon={kafkaIcon}
            />
            <SkillCard
              name="Docker"
              description="Most popular containerization software for applications"
              icon={dockerIcon}
            />
            <SkillCard
              name="Kubernetes"
              description="Reliable container orchestration tool"
              icon={k8sIcon}
            />
            <SkillCard
              name="NextJS"
              description="Efficient framework for frontend"
              icon={nextIcon}
            />
            <SkillCard
              name="NestJS"
              description="Robust framework for backend"
              icon={nestIcon}
            />
            <SkillCard
              name="React"
              description="Popular and fast frontend framework"
              icon={reactIcon}
            />
            <SkillCard
              name="MaterialUI"
              description="Popular UI library framework for frontend"
              icon={muiIcon}
            />
          </div>
        </div>
      </div>

      <div className="text-center my-5">
        <p className="text-3xl font-bold">Experience</p>
        <p className="text-neutral-400">Stepping stones in my Journey</p>
        <div className={`${skillContainerClass} p-3`}>
          <ExperienceCard
            name="Kris Computer Point"
            description="Kris Computer Point is an educational computer institute imparting computer education since 2000 in Kanpur, Uttar Pradesh. Built complete website for business"
            tag1="Fullstack"
            tag2="Professional Project"
          />
          <ExperienceCard
            name="Dark & Dusky"
            description="Dark & Dusky is an online ecommerce platform selling geniune leather products. Built and deployed complete website for business"
            tag1="Fullstack"
            tag2="Professional Project"
          />
          <ExperienceCard
            name="Lending Buddha"
            description="Lending Buddha is an online P2P fintech money lending platform. Worked in a team to build an online platform for business"
            tag1="Fullstack"
            tag2="Professional Project"
          />
          <ExperienceCard
            name="Authentication System"
            description="Authentication System built for a business which included student authentication and management system. Built Windows 10 Software"
            tag1="Software"
            tag2="Professional Project"
          />
          <ExperienceCard
            name="Online Classroom"
            description="Online teaching platform that supports upto 20 participants at a time. It includes features like teacher and student management and admin controls"
            tag1="Fullstack"
            tag2="Personal Project"
          />
          <ExperienceCard
            name="Template CLI"
            description="Template CLI enables developers to generate a basic starter templates for frontend and backend nodejs framework templates including full authentication pipelines"
            tag1="Tool"
            tag2="Personal Project"
          />
          <ExperienceCard
            name="Medix Connect"
            description="Medix Connect is a centralized medical records management system which enables patients and doctors to read and add medical records"
            tag1="Software"
            tag2="Team Project"
          />
          <ExperienceCard
            name="Video Check Pro"
            description="Video Check Pro is a video tampering detection software and video recognition software which enables users to identify original source and author of a video sample"
            tag1="Software"
            tag2="Team Project"
          />
        </div>
      </div>

      <div className="text-center m-5 p-4 bg-gray-900 rounded-md">
        <p className="text-3xl font-bold">Contact</p>
        <p className="text-neutral-400 mb-5">Get in touch with me</p>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <p className={contactClass}>
            <strong>Contact number: </strong>
            <Link href="tel:8090234437" className={contactLinkClass}>
              +91 8090234437
            </Link>
          </p>
          <p className={contactClass}>
            <strong>Email address: </strong>
            <Link
              href="mailto:bryan.christy29@gmail.com?subject=Query regarding work"
              className={contactLinkClass}
            >
              bryan.christy29@gmail.com
            </Link>
          </p>
          <p className={contactClass}>
            <strong>Github profile: </strong>
            <Link
              href="https://github.com/bryanC29"
              className={contactLinkClass}
            >
              @bryanC29
            </Link>
          </p>
          <p className={contactClass}>
            <strong>Download resume: </strong>
            <Link
              href="https://drive.google.com/file/d/1-TiuGExzqynN_wslpOf_1wPj38GmPWxa/view?usp=drive_link"
              className={contactLinkClass}
            >
              Click here
            </Link>
          </p>
          <p className={contactClass}>
            <strong>Artstation profile: </strong>
            <Link
              href="https://artstation.com/bryanchristy"
              className={contactLinkClass}
            >
              @bryanchristy
            </Link>
          </p>
        </div>
      </div>

      <p className="text-center pt-2 pb-4 text-sm text-neutral-400">
        &copy; All rights reserved | Designed and Build by Bryan Christy
      </p>
    </div>
  );
}
