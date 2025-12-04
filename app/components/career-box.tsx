"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { CareerBoxProps } from "../constants/types";

const CareerBox = ({
  period,
  company,
  position,
  works,
  componyInfo,

  working = false,
}: CareerBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full grid sm:grid-cols-3 sm:gap-x-10 sm:items-start">
      <div className="flex  justify-end items-center gap-2 pt-1">
        <Image
          src="/images/career-ing.png"
          alt="career-ing"
          width={16}
          height={16}
          className={clsx("w-4 h-4", !working && "grayscale")}
        />
        <span>{period}</span>
      </div>
      <div className="flex flex-col col-span-2 gap-2">
        <div className="flex gap-2 items-center">
          <span className="font-bold text-[20px] text-black">{company}</span>
          <span className="text-[14px] text-gray-500">{position}</span>
        </div>
        <span className="text-[14px]">회사 소개: {componyInfo}</span>

        <button
          className="flex justify-start w-fit cursor-pointer"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <span className={clsx("text-blue-600 text-[14px]")}>
            {isOpen ? "주요 업무 가리기" : "주요 업무 보기"}
          </span>
        </button>
        {isOpen && (
          <ul className="mt-2 list-disc list-inside text-sm text-gray-700">
            {works.map((w, idx) => (
              <li key={idx}>{w}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CareerBox;
