//Components
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";

export default function MainComponent() {
    return(
        <main className="w-full max-w-[120rem] h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-[#f5f5f5CC]/80 scrollbar-track-transparent">
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
        </main>
    );
}