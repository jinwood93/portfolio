import Image from "next/image";
import React from "react";
import SectionHeader from "../components/section-header";
import { StackProps } from "../constants/types";

const Tech = () => {
  const stackList = [
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      title: "Next.js",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      title: "React.js",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      title: "TypeScript",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      title: "JavaScript",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original-wordmark.svg",
      title: "React Native",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
      title: "Flutter",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/styledcomponents/styledcomponents-original.svg",
      title: "Styled-components",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      title: "TailWind",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
      title: "Vite",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/remix/remix-original.svg",
      title: "Remix",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
      title: "Redux",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      title: "MySQL",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      title: "Node.js",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
      title: "GraphQL",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg",
      title: "Docker",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      title: "Github, Github Workflow",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      title: "AWS",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
      title: "Firebase",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
      title: "Prisma",
    },
  ];
  return (
    <div id="tech" className="flex flex-col items-center gap-4">
      <SectionHeader img="/images/tech_image.gif" title="기술 스택 및 도구" />
      <div>
        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5">
          {stackList.map((item: StackProps, idx) => {
            return (
              <div key={idx} className="flex relative group">
                <Image src={item.img} alt={item.title} width={40} height={40} />
                <span className="font-semibold px-1 py-0.5 absolute -bottom-1 translate-y-full left-1/2 -translate-x-1/2 z-10 rounded-md bg-foreground/70 text-white text-[12px] hidden group-hover:block whitespace-pre">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tech;
