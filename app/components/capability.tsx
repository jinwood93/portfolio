import Image from "next/image";
import React from "react";

const Capability = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center">
        <Image
          src="/images/tech_header.gif"
          alt="tech_header"
          width={32}
          height={32}
        />
        <span className="font-yeogiOttaeJalnan text-[#4E71FF] text-[20px]">
          핵심 역량
        </span>
      </div>
      <span className="font-bold text-[24px]">
        성능 최적화와 안정적 구조 설계로 사용자 경험을 완성합니다
      </span>
      <div className="grid grid-flow-col grid-rows-1 gap-4 max-w-[1200px]">
        <div className="card rounded-md shadow-md flex flex-col gap-2">
          <Image
            src="/images/card_1.jpg"
            alt="card_1"
            width={350}
            height={150}
            className="rounded-t-md"
          />
          <div className="px-2 pb-2 flex flex-col">
            <span className=" font-bold text-[24px]">title</span>
            <span className="text-gray-500">desc</span>
          </div>
        </div>
        <div className="card rounded-md shadow-md flex flex-col gap-2">
          <Image
            src="/images/card_1.jpg"
            alt="card_1"
            width={350}
            height={150}
            className="rounded-t-md"
          />
          <div className="px-2 pb-2 flex flex-col">
            <span className=" font-bold text-[24px]">title</span>
            <span className="text-gray-500">desc</span>
          </div>
        </div>
        <div className="card rounded-md shadow-md flex flex-col gap-2">
          <Image
            src="/images/card_1.jpg"
            alt="card_1"
            width={350}
            height={150}
            className="rounded-t-md"
          />
          <div className="px-2 pb-2 flex flex-col">
            <span className=" font-bold text-[24px]">title</span>
            <span className="text-gray-500">desc</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capability;
