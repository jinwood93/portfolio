import Image from "next/image";
import React from "react";
import { ProjectProps } from "../constants/types";
import clsx from "clsx";
import { stackList } from "../constants/stacks";

const ProjectBox = (item: ProjectProps) => {
  return (
    <div className="card h-full rounded-md shadow-md flex flex-col justify-between gap-2 hover:bg-foreground/10 cursor-pointer">
      <div>
        <div className="relative w-full h-[200px]">
          <Image
            src={item.img}
            alt={item.title}
            fill
            className={clsx(
              "rounded-t-md w-full",
              item.imgContain ? "object-contain" : "object-cover"
            )}
          />
        </div>
        <div className="px-2 pt-2 flex flex-col gap-2 ">
          <span className=" font-bold text-[20px]">{item.title}</span>
          <span className="text-gray-500 text-[14px]">{item.desc}</span>
        </div>
      </div>
      <div className="px-2 pb-2 flex relative gap-2">
        {item.stacks.map((key) => {
          const stack = stackList.find((s) => s.key === key);
          if (!stack) return null;

          return (
            <div key={key} className="flex relative group">
              <Image
                key={key}
                src={stack.img}
                alt={stack.title}
                width={24}
                height={24}
                className="p-0.5 rounded-sm shadow-sm"
              />
              <span className="font-semibold px-1 py-0.5 absolute -bottom-1 translate-y-full left-1/2 -translate-x-1/2 z-10 rounded-md bg-foreground/70 text-white text-[12px] hidden group-hover:block whitespace-pre">
                {stack.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectBox;
