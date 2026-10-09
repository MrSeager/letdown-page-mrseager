'use client';
//Components
import { useState } from "react";
import Image from "next/image";
import LinkC from "./LinkC";
import Link from "next/link";
//Icons
import { BiMehBlank } from "react-icons/bi";

export default function FooterComponent() {
    const [open, setOpen] = useState<boolean>(false);

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
                <div className={`flex shadow-white/25 gap-1 items-center justify-center rounded rounded-3 duration-300 ${open ? 'bg-white text-black shadow-md' : 'bg-transparent'}`}>
                    <Link 
                        href={"https://www.linkedin.com/in/yevgen-kaverin-6a7082399/"}
                        target="_blank"
                        className={`uppercase text-[20px] text-shadow-black/25 pt-1 duration-300 overflow-hidden
                                    hover:text-shadow-sm
                                    ${!open ? 'px-0 w-0 ' : 'px-3 w-full'}`}
                    >
                        #Design
                    </Link>
                    <button
                        type="button"
                        onClick={() => setOpen(!open)}
                        className="cursor-pointer rounded-full outline-none shadow-white/25 duration-300 
                        hover:text-black hover:bg-white hover:shadow-md
                        focus:text-black focus:bg-white focus:shadow-md"
                    >
                        <BiMehBlank size={25} />
                    </button>
                    <Link 
                        href={"https://www.linkedin.com/in/sergiy-b-623426159/"}
                        target="_blank"
                        className={`uppercase text-[20px] text-shadow-black/25 pt-1 duration-300 overflow-hidden
                                    hover:text-shadow-sm
                                    ${!open ? 'px-0 w-0' : 'px-3 w-full'}`}
                    >
                        #Code
                    </Link>
                </div>
            </div>
            <p className="mb-5 mx-5 tracking-[1px] text-[15px] text-center">COPYRIGHT ©2026. ALL RIGHTS RESERVED. UNAUTHORIZED REPRODUCTION, IN WHOLE OR IN PART, IS STRICTLY PROHIBITED.</p>
        </footer>
    );
}