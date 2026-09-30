//Components
import BtnA from "./BtnA";
import LinkA from "./LinkA";
import LinkB from "./LinkB";
//Icons
import { SiTiktok, SiInstagram, SiYoutube, SiFacebook, SiX, SiDiscord } from "react-icons/si";

export default function HeaderNav() {
    return(
        <header className="py-5 px-15 z-10 fixed top-0 w-full bg-gradient-to-b from-[#000000] via-[#000000] to-transparent">
            <nav className="flex w-full items-center justify-between">
                <div className="flex gap-4 items-center justify-center ">
                    <h1 className="font-staatliches text-white text-[40px]">LETDOWN.</h1>
                    <BtnA 
                        name="Listen"
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
                    />
                    <BtnA 
                        name="Press"
                    />
                    <BtnA 
                        name="Contact"
                    />
                </div>
                <div className="flex gap-5 items-center justify-center">
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