//Components
import HeaderNav from "@/components/HeaderNav";
import MainComponent from "@/components/MainComponent";
import FooterComponent from "@/components/FooterComponent";

export default function Home() {
  return (
    <div className="select-none flex flex-col flex-1 items-center justify-center text-white/80 font-thin bg-black font-teko scrollbar-thin scrollbar-thumb-[#f5f5f5CC]/80 scrollbar-track-transparent">
      <HeaderNav />
      <MainComponent />
      <FooterComponent />
    </div>
  );
}
