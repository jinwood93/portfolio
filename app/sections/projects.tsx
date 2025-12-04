import React from "react";
import SectionHeader from "../components/section-header";
import Image from "next/image";
import { ProjectProps } from "../constants/types";
import ProjectBox from "../components/project-box";

export const Projects = () => {
  const projectList: ProjectProps[] = [
    {
      img: "/images/gmmt_mainnet.gif",
      logo: "",
      title: "",
      desc: "",
      stacks: [
        {
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
          title: "React.js",
        },
        {
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
          title: "TypeScript",
        },
        {
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/remix/remix-original.svg",
          title: "Remix",
        },
        {
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
          title: "Node.js",
        },
      ],
    },
  ];

  return (
    <div id="tech" className="flex flex-col items-center gap-4">
      <SectionHeader img="/images/projects.gif" title="프로젝트" />
      <div>
        {projectList.map((item, idx) => {
          return <ProjectBox key={idx} {...item} />;
        })}
      </div>
    </div>
  );
};
