//Components
import Image from "next/image";
import LinkC from "./LinkC";
//Icons
import { BiMehBlank } from "react-icons/bi";

export default function FooterComponent() {
    return(
        <footer className="w-full bg-[url(/images/04_Background-300px.webp)] flex flex-col gap-5 items-center justify-center text-white/50">
            <div className="relative py-10 px-5 w-full flex flex-col items-center gap-5 border-b border-white/15">
                <Image 
                    src={'/images/02_1_Background-lightening.webp'}
                    alt="img"
                    width={912}
                    height={296}
                    className="border bottom-0 absolute pointer-events-none select-none left-1/2 -translate-x-1/2"
                />
                <h4 className="text-[40px] text-center">BE THE FIRST TO KNOW</h4>
                <p className="text-pretty text-[20px] tracking-[1px] max-w-[35rem]">Get updates on new music, tour dates, and exclusive releases — straight from Blake himself.</p>
                <LinkC 
                    name="SIGN UP FOR ALERTS"
                    hrefLink="https://laylo.com/letdown/profile"
                    classN="px-15 border-white/50 mb-5"
                />
                <BiMehBlank size={25} />
            </div>
            <p className="mb-5 mx-5 tracking-[1px] text-[15px] text-center">COPYRIGHT ©2026. ALL RIGHTS RESERVED. UNAUTHORIZED REPRODUCTION, IN WHOLE OR IN PART, IS STRICTLY PROHIBITED.</p>
        </footer>
    );
}