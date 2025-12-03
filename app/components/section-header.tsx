import Image from "next/image";

interface Props {
  img: string;
  title: string;
  desc?: string;
}

const SectionHeader = (props: Props) => {
  const { img, title, desc } = props;
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-2">
        <Image src={img} alt={img} width={32} height={32} />
        <span className="font-yeogiOttaeJalnan text-[#4E71FF] text-[20px] ">
          {title}
        </span>
      </div>
      <span className="font-bold text-[24px]">{desc ? desc : ""}</span>
    </div>
  );
};

export default SectionHeader;
