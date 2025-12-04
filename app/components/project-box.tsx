import Image from "next/image";
import React from "react";
import { ProjectProps, StackProps } from "../constants/types";

const ProjectBox = (item: ProjectProps) => {
  return (
    <div className="card rounded-md shadow-md flex flex-col gap-2">
      <Image
        src={item.img}
        alt={item.title}
        width={400}
        height={150}
        className="rounded-t-md"
      />
      <div className="px-2 pb-2 flex flex-col">
        <span className=" font-bold text-[20px]">{item.title}</span>
        <span className="text-gray-500">{item.desc}</span>
        <div className="flex relative group">
          {item.stacks.map((item: StackProps, idx) => {
            return (
              <div key={idx} className="flex relative group">
                <Image src={item.img} alt={item.title} width={24} height={24} />
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

export default ProjectBox;
