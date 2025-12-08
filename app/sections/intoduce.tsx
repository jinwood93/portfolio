import Image from "next/image";

const Intoduce = () => {
  const descText = `저는 동료들과 협업할 때 서로 신뢰할 수 있는 개발 환경을 구성하는 것이 중요하다고 생각합니다. 
  팀의 신뢰도가 높아질수록 개인은 망설임 없이 실험하고 책임 있게 결정하며, 자연스럽게 능률이 오른다고 믿고 있기 때문입니다.

  이에 기여하기 위해 저는 합의된 규칙과 예측 가능한 프로세스, 투명한 소통으로 동료들과의 심리적 안전을 높이기 위해 노력합니다. 이후 완성된 프로젝트를 팀과 함께 회고하며 같이 발전해나갈 때 가장 큰 성취감을 느낍니다.`;
  return (
    <div
      id="introduce"
      className="relative flex flex-col items-center gap-8 max-w-[1200px]"
    >
      <Image
        src="/images/work.svg"
        alt="card_1"
        width={400}
        height={400}
        className="absolute top-0"
      />
      <div className="flex flex-col items-center justify-center mt-[332px] p-8 pattern-wall">
        <div className="flex flex-col items-center text-[40px] font-yangjin">
          <span>안녕하세요.</span>
          <span>프론트엔드 개발자</span>
          <span>김진우입니다</span>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-2xl items-center gap-8">
        <a
          href="/files/kim_jinwoo_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit px-4 py-2 rounded-md shadow-md text-gray-600 text-sm"
        >
          이력서 보기
        </a>
        <div className="p-4 bg-gray-100 rounded-md">
          <span className="text-[14px] md:text-[16px] whitespace-pre-line leading-relaxed">
            {descText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Intoduce;
