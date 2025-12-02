import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="w-full flex justify-center">
        <div className="backdrop-blur bg-white/30 w-fit flex items-center justify-center gap-4 p-1 rounded-[24px] shadow-md">
          <div className="transition duration-300 ease-in-out hover:bg-[#D1F8EF] text-gray-500 font-semibold  cursor-pointer rounded-[24px] px-4 py-2">
            핵심역량
          </div>
          <div className="transition duration-300 ease-in-out hover:bg-[#D1F8EF] text-gray-500 font-semibold cursor-pointer rounded-[24px] px-4 py-2">
            기술
          </div>
          <div className="transition duration-300 ease-in-out hover:bg-[#D1F8EF] text-gray-500 font-semibold cursor-pointer rounded-[24px] px-4 py-2">
            경력
          </div>
          <div className="transition duration-300 ease-in-out hover:bg-[#D1F8EF] text-gray-500 font-semibold cursor-pointer rounded-[24px] px-4 py-2">
            프로젝트
          </div>
        </div>
      </div>
      <div>짧은 소개</div>
      <div>이력서 다운로드</div>
      <div>카테고리 목록(고정)</div>
      <div>핵심역량</div>
      <div>기술스택및도구</div>
      <div>경력</div>
      <div>프로젝트 상세</div>
      <div>etc</div>
      <div>contact me</div>
    </div>
  );
}
