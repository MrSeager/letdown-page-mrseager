//Components
import HeaderNav from "@/components/HeaderNav";
import MainComponent from "@/components/MainComponent";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center text-[#f5f5f5CC]/80 font-thin bg-black font-teko">
      <HeaderNav />
      <MainComponent />
    </div>
  );
}
