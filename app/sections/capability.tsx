import Image from "next/image";
import React from "react";
import SectionHeader from "../components/section-header";

const Capability = () => {
  return (
    <div
      id="capability"
      className="w-full flex flex-col items-center gap-4 max-w-[1200px]"
    >
      <SectionHeader img="/images/tech_header.gif" title="핵심 역량" />
      <div className="grid grid-flow-col grid-rows-1 gap-4 ">
        <div className="card rounded-md shadow-md flex flex-col gap-2">
          <Image
            src="/images/run.svg"
            alt="card_1"
            width={400}
            height={150}
            unoptimized
            className="rounded-t-md"
          />
          <div className="px-2 pb-2 flex flex-col">
            <span className=" font-bold text-[20px]">
              한계를 넘어, 더 도전적인 환경으로
            </span>
            <span className="text-gray-500">desc</span>
          </div>
        </div>
        <div className="card rounded-md shadow-md flex flex-col gap-2">
          <Image
            src="/images/controct.svg"
            alt="card_1"
            width={400}
            height={150}
            className="rounded-t-md"
          />
          <div className="px-2 pb-2 flex flex-col">
            <span className=" font-bold text-[20px]">
              성능 최적화와 안정적 구조 설계
            </span>
            <span className="text-gray-500">desc</span>
          </div>
        </div>
        <div className="card rounded-md shadow-md flex flex-col gap-2">
          <Image
            src="/images/robot.svg"
            alt="card_1"
            width={400}
            height={150}
            className="rounded-t-md"
          />
          <div className="px-2 pb-2 flex flex-col">
            <span className=" font-bold text-[20px]">
              소통으로 기준을 세우고, 중복을 없애다
            </span>
            <span className="text-gray-500">desc</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capability;
