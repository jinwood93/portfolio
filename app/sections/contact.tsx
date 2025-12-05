import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div>
      <span>Contact Me</span>
      <div className="flex gap-2">
        <div className="w-5 h-auto">
          <Image src="/images/phone.png" alt="phone" width={20} height={20} />
        </div>
        <span className="text-[20px]">010-7756-3251</span>
      </div>
    </div>
  );
};

export default Contact;
