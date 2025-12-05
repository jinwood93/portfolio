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
      title: "GiantMammoth Mainnet",
      desc: "Mammoth 재단 홈페이지 제작 프로젝트",
      stacks: [
        "reactjs",
        "typescript",
        "remix",
        "nodejs",
        "tailwind",
        "docker",
      ],
    },
    {
      img: "/images/cock_fight.gif",
      logo: "",
      title: "Cockfight Network",
      desc: "블록체인 기반 투계 육성 P2E 게임",
      stacks: [
        "nextjs",
        "typescript",
        "styled",
        "nodejs",
        "docker",
        "aws",
        "graphql",
        "prisma",
      ],
    },
    {
      img: "/images/gmwallet.gif",
      imgContain: true,
      logo: "",
      title: "GM Wallet 2 리뉴얼 및 Flutter 컨버팅",
      desc: "GM Wallet2 Flutter 컨버팅 프로젝트",
      stacks: ["flutter", "reactnative", "nodejs", "firebase", "git"],
    },
    {
      img: "/images/edem.gif",
      logo: "",
      title: "EDEM NFT Market",
      desc: "NFT 등록/거래 할 수 있는 Market 플랫폼",
      stacks: [
        "nextjs",
        "typescript",
        "styled",
        "nodejs",
        "docker",
        "aws",
        "graphql",
        "prisma",
      ],
    },
    {
      img: "/images/alock.gif",
      logo: "",
      title: "에이락 월렛",
      desc: "가상 자산 리워드 보관용 전자지갑 프로젝트",
      imgContain: true,
      stacks: ["reactnative", "typescript", "prisma", "graphql", "docker"],
    },
    {
      img: "/images/mamegel.gif",
      logo: "",
      title: "마이메타갤러리",
      desc: "전시작품을 NFT로 발행해 디지털 자산으로 보존하는 프로젝트",
      stacks: [
        "nextjs",
        "reactnative",
        "typescript",
        "prisma",
        "graphql",
        "docker",
        "aws",
      ],
    },
  ];

  return (
    <div
      id="tech"
      className="flex flex-col items-center gap-4 max-w-[340px] md:max-w-2xl lg:max-w-[1100px]"
    >
      <SectionHeader img="/images/projects.gif" title="프로젝트" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-10">
        {projectList.map((item, idx) => {
          return <ProjectBox key={idx} {...item} />;
        })}
      </div>
    </div>
  );
};
