import Capability from "./sections/capability";
import Career from "./sections/career";
import Header from "./sections/header";
import Intoduce from "./sections/intoduce";
import Tech from "./sections/tech";

export default function Home() {
  return (
    <div className="min-h-screen max-w-[1920px] px-6 md:px-8 lg:px-10 w-full mx-auto flex flex-col items-center gap-32">
      <Intoduce />
      <Header />
      <Capability />
      <Tech />
      <Career />
      <div>프로젝트 상세</div>
      <div>etc</div>
      <div>contact me</div>
    </div>
  );
}
