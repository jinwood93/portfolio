import Capability from "./components/capability";
import Header from "./components/header";
import Intoduce from "./components/intoduce";
import Tech from "./components/tech";

export default function Home() {
  return (
    <div className="min-h-screen max-w-[1920px] px-6 md:px-8 lg:px-10 w-full mx-auto flex flex-col items-center gap-8">
      <Intoduce />
      <Header />
      <Capability />
      <Tech />
      <div>경력</div>
      <div>프로젝트 상세</div>
      <div>etc</div>
      <div>contact me</div>
    </div>
  );
}
