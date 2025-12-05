export type CareerBoxProps = {
  working?: boolean;
  period: string;
  company: string;
  position: string;
  componyInfo: string;
  works: string[];
};
export type StackProps = {
  key: string;
  img: string;
  title: string;
};

export type ProjectProps = {
  img: string;
  imgContain?: boolean;
  logo: string;
  title: string;
  desc: string;
  stacks: string[];
};
