export type CareerBoxProps = {
  working?: boolean;
  period: string;
  company: string;
  position: string;
  componyInfo: string;
  works: string[];
};
export type StackProps = {
  img: string;
  title: string;
};

export type ProjectProps = {
  img: string;
  logo: string;
  title: string;
  desc: string;
  stacks: StackProps[];
};
