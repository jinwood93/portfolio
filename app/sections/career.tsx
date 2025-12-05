import SectionHeader from "../components/section-header";
import CareerBox from "../components/career-box";

const Career = () => {
  const careerList = [
    {
      id: 1,
      working: true,
      period: "2022.11 ~ 재직중",
      company: "맘모스 랩스 ㈜",
      componyInfo:
        "블록체인 생태계 및 월렛 개발, NFT 마켓 플레이스 플랫폼 기획, 개발",
      position: "웹, 앱 블록체인 관련 프론트엔드 개발자",
      works: [
        "웹 서비스(지갑, NFT 마켓, 랜딩 페이지 등) 프론트엔드 설계 및 개발",
        "모바일 앱 개발 및 운영 (React Native, Flutter 기반)",
        "프론트엔드 아키텍처 설계, 상태 관리 최적화, 배포 자동화 환경 구축",
      ],
    },
    {
      id: 2,
      period: "2021.10 ~ 2022.10",
      company: "에이락",
      componyInfo:
        "핀테크 기업과 디지털자산 기업의 상생 플랫폼을 제공, 암호화폐 리워드 플랫폼 개발",
      position: "웹, 앱 프론트엔드 & 블록체인 개발 담당자",
      works: [
        "블록체인 코인, 토큰 송금 기능 등 구현",
        "월렛 리워드 페이지 설계 및 AWS 기반 서비스 배포, 운영",
        "NFT 서비스(마이메타갤러리) 백엔드 아키텍처 설계 및 주요 페이지 개발",
        "제휴사 페이지 및 Admin 페이지 구축",
        "NFT 메타데이터, 이미지 관리 및 월렛 연동 기능 개발",
      ],
    },
  ];
  const etcList = [
    {
      id: 1,
      period: "2018.02 ~ 2020.04",
      company: "Tamice Inc. 뉴욕 본사",
      componyInfo: "뉴욕 관광 여행사",
      position: "사원",
      works: ["투어 상품 세일즈", "한국, 일본인 응대 및 투어 가이드"],
    },
  ];
  return (
    <div
      id="career"
      className="flex flex-col items-center gap-8 w-full max-w-3xl"
    >
      <SectionHeader img="/images/career.gif" title="경력 사항" />
      <div className="flex w-full items-center gap-2">
        <div className="h-px flex-1 bg-[linear-gradient(to_left,rgba(0,0,0,0.3),rgba(0,0,0,0))]"></div>
        <div className="w-fit whitespace-pre text-[14px] text-gray-500">
          개발 경력
        </div>
        <div className="h-px flex-1 bg-[linear-gradient(to_right,rgba(0,0,0,0.3),rgba(0,0,0,0))]"></div>
      </div>
      <div className="flex flex-col gap-6 w-full">
        {careerList.map((career) => (
          <CareerBox key={career.id} {...career} />
        ))}
      </div>
      <div className="flex w-full items-center gap-2">
        <div className="h-px flex-1 bg-[linear-gradient(to_left,rgba(0,0,0,0.3),rgba(0,0,0,0))]"></div>
        <div className="w-fit whitespace-pre text-[14px] text-gray-500">
          etc
        </div>
        <div className="h-px flex-1 bg-[linear-gradient(to_right,rgba(0,0,0,0.3),rgba(0,0,0,0))]"></div>
      </div>
      <div className="flex flex-col gap-6 w-full">
        {etcList.map((career) => (
          <CareerBox key={career.id} {...career} />
        ))}
      </div>
    </div>
  );
};

export default Career;
