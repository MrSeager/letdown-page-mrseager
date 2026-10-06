'use client';
//Components
import { useState, useEffect } from "react";
import BtnA from "./BtnA";
import LinkA from "./LinkA";
import LinkB from "./LinkB";
//Icons
import { SiTiktok, SiInstagram, SiYoutube, SiFacebook, SiX, SiDiscord } from "react-icons/si";

export default function HeaderNav() {
    const [open, setOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const listenSection = document.getElementById("Listen");
        if (!listenSection) return;

        const checkScroll = () => {
        setScrolled(window.scrollY >= listenSection.offsetTop);
        };

        checkScroll(); // run once on mount (in case page loads already scrolled)
        window.addEventListener("scroll", checkScroll, { passive: true });
        return () => window.removeEventListener("scroll", checkScroll);
    }, []);

    return(
        <header className={`z-10 fixed top-0 w-full duration-300`}>
            <nav className="relative px-0 py-5 flex flex-col lg:flex-row w-full items-center justify-between gap-0 lg:gap-5">
                <div className={`absolute -z-1 flex flex-col w-full duration-300 top-0 ${!scrolled && !open ? 'max-h-0' : 'max-h-500'}`}>
                    <span className={`w-full h-100 bg-[url(/images/04_Background-300px.webp)] duration-300 ${!open ? 'max-h-0' : 'max-h-500'}`} />
                    <span className={`w-full h-25 bg-[url(/images/05_Background-line-h100w300px.webp)] bg-repeat-x duration-300 ease-in-out`} />
                </div>
                <div className="ps-5 lg:ps-15 pe-5 lg:pe-0 w-full lg:w-auto flex items-center justify-between">
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
                <div className={`pe-0 lg:pe-15  overflow-hidden flex gap-5 items-center justify-center lg:max-h-400
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