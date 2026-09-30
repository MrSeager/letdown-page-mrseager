//Components
import LinkC from "./LinkC";

export default function SectionTwo() {
    return(
        <div className="bg-[url(/images/02_Background-300px.webp)] border-t border-b border-white/15 bg-size-[300px_300px]">
            <div className="grid grid-cols-2 max-w-[120rem] mx-auto">
                <div 
                    className="px-25 py-15 grid grid-cols-2 items-start gap-5
                                bg-[url(/images/02_1_Background-lightening.webp)] bg-contain bg-no-repeat bg-bottom"
                >
                    <h2 className="uppercase text-[40px] col-span-2 text-center">Listen</h2>
                    <LinkC 
                        name="Spotify"
                        hrefLink="https://open.spotify.com/artist/2rP19mjQlqtCScJ3zqLUb1"
                    />
                    <LinkC 
                        name="Youtube music"
                        hrefLink="https://music.youtube.com/channel/UCao7WJ5SANg_kt9gsL7-7fw"
                    />
                    <LinkC 
                        name="Apple music"
                        hrefLink="https://music.apple.com/us/artist/letdown/1493317188"
                    />
                    <LinkC 
                        name="Deezer"
                        hrefLink="https://www.deezer.com/artist/82204842"
                    />
                    <LinkC 
                        name="Amazon music"
                        hrefLink="https://music.amazon.com/artists/B083H2G912"
                    />
                    <LinkC 
                        name="Tidal"
                        hrefLink="http://www.tidal.com/artist/17867730"
                    />
                    <LinkC 
                        name="Shazam"
                        hrefLink="https://www.shazam.com/artist/-/1493317188"
                    />
                    <LinkC 
                        name="Soundcloud"
                        hrefLink="https://soundcloud.com/letdown-sc"
                    />
                    <p className="col-span-2 text-[20px] tracking-[1px]">Letdown. delivers high-energy alternative rock crafted for late-night drives, cathartic screaming, and reminding you that you’re never as isolated as you think. Pick your favorite streaming service and turn it up.</p>
                </div>
                <div className="px-25 py-15 flex flex-col gap-5 items-center">
                    <h2 className="uppercase text-[40px]">Start here</h2>
                    <iframe data-testid="embed-iframe" className="border-radius:12px" src="https://open.spotify.com/embed/artist/2rP19mjQlqtCScJ3zqLUb1?utm_source=generator&theme=0&si=968347b9268e4f14" width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    );
}