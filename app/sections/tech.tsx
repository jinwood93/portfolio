import Image from "next/image";
import React from "react";
import SectionHeader from "../components/section-header";
import { StackProps } from "../constants/types";
import { stackList } from "../constants/stacks";

const Tech = () => {
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
