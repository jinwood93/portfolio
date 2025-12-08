import Image from "next/image";
import React from "react";
import SectionHeader from "../components/section-header";

const Contact = () => {
  return (
    <div className="flex flex-col items-center mb-8">
      <SectionHeader img="/images/projects.gif" title="Contact Me" />
      <div className="flex flex-col items-center  py-4">
        <Image src="/images/contact.svg" alt="phone" width={400} height={400} />
        <div className="flex gap-2 items-center">
          <div className="w-5 h-auto">
            <Image src="/images/email.png" alt="phone" width={20} height={20} />
          </div>
          <span className="text-[20px] ">: dhehdid1@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
