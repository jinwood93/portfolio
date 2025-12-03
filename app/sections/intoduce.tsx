const Intoduce = () => {
  return (
    <div id="introduce" className="flex flex-col items-center gap-8">
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center text-[40px] font-yangjin">
          <span>안녕하세요.</span>
          <span>프론트엔드 개발자</span>
          <span>김진우입니다</span>
        </div>
      </div>
      <div>
        <a
          href="/files/kim_jinwoo_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-md shadow-md text-gray-600 text-sm"
        >
          이력서 보기
        </a>
      </div>
    </div>
  );
};

export default Intoduce;
