//Components
import LinkC from "./LinkC";
import Image from "next/image";

export default function SectionFour() {
    return(
        <div 
            id="Press"
            className="relative scroll-mt-10 border-t border-b border-white/15 flex flex-col items-center gap-5 py-15 px-5
                        bg-[url(/images/02_Background-300px.webp)]"
        >
            <Image 
                src={'/images/02_1_Background-lightening.webp'}
                alt="img"
                width={912}
                height={296}
                className="bottom-0 absolute pointer-events-none select-none left-1/2 -translate-x-1/2"
            />
            <h3 className="text-[40px] uppercase">Press</h3>
            <p className="text-[20px] mb-5 max-w-[35rem] tracking-[1px]">Everything you need for press coverage, event promotion, and media features. Access high-resolution promo photos, official logos, biography, and media assets in one place.</p>
            <LinkC 
                name="Open press kit"
                classN="px-15"
                hrefLink="https://drive.google.com/drive/folders/1P5-HNBuOqQdiXXbjNV5Qb-UVCwmHaqVM?usp=sharing"
            />
        </div>
    );
}