'use client';
//Components
import { useState } from "react";
import BtnA from "./BtnA";
import LinkA from "./LinkA";
import LinkB from "./LinkB";
//Icons
import { SiTiktok, SiInstagram, SiYoutube, SiFacebook, SiX, SiDiscord } from "react-icons/si";

export default function HeaderNav() {
    const [open, setOpen] = useState<boolean>(false);

    return(
        <header className="py-5 px-5 md:px-15 z-10 fixed top-0 w-full bg-gradient-to-b from-[#000000] via-[#000000] to-transparent">
            <nav className="flex flex-col lg:flex-row w-full items-center justify-between gap-0 lg:gap-5">
                <div className="w-full lg:w-auto flex items-center justify-between">
                    <h1 className="font-staatliches text-white text-[40px]">LETDOWN.</h1>
                    <button
                        type="button"
                        className="uppercase text-[30px] cursor-pointer flex gap-1 lg:hidden"
                        onClick={() => setOpen(!open)}
                    >
                        Menu <span className={`duration-300 ${open ? "-rotate-90 ps-1" : "rotate-90 pe-1"}`}>&gt;</span>
                    </button>
                </div>
                <div className={`overflow-hidden w-full lg:w-auto flex flex-col lg:flex-row gap-4 lg:max-h-400 items-center justify-center lg:me-auto
                                ${open ? "max-h-400 my-5" : "max-h-0 my-0"} duration-300 ease-in-out`}>
                    <BtnA 
                        name="Listen"
                        itemId="Listen"
                    />
                    <LinkA 
                        name="Tour"
                        hrefLink="https://www.bandsintown.com/a/15463392-letdown"
                    />
                    <LinkA 
                        name="Merch"
                        hrefLink="https://www.letdownmerch.com/"
                    />
                    <BtnA 
                        name="About"
                        itemId="About"
                    />
                    <BtnA 
                        name="Press"
                        itemId="Press"
                    />
                    <BtnA 
                        name="Contact"
                        itemId="Contact"
                    />
                </div>
                <div className={`overflow-hidden flex gap-5 items-center justify-center lg:max-h-400
                                ${open ? "max-h-400 pb-50" : "max-h-0 pb-0"} duration-300 ease-in-out`}>
                    <LinkB 
                        icon={<SiTiktok size={20} />}
                        hrefLink="https://www.tiktok.com/@foreveraletdown"
                    />
                    <LinkB 
                        icon={<SiInstagram size={20} />}
                        hrefLink="https://www.instagram.com/letdown"
                    />
                    <LinkB 
                        icon={<SiYoutube size={20} />}
                        hrefLink="https://www.youtube.com/@letdown"
                    />
                    <LinkB 
                        icon={<SiFacebook size={20} />}
                        hrefLink="https://www.facebook.com/foreveraletdown"
                    />
                    <LinkB 
                        icon={<SiX size={20} />}
                        hrefLink="https://twitter.com/letdownmusic"
                    />
                    <LinkB 
                        icon={<SiDiscord size={20} />}
                        hrefLink="https://discord.gg/g4r7bYEHP7"
                    />
                </div>
            </nav>
        </header>
    );
}