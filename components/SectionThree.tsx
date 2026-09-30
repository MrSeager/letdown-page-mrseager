//Components
import Image from "next/image";

export default function SectionThree() {
    return(
        <div className="relative">
            <Image 
                src={'/images/03_Background-photo.webp'}
                alt="photo"
                width={2112}
                height={1434}
                className="w-full"
            />
            <div className="absolute top-0 h-full w-full grid grid-cols-2 grid-rows-1">
                <span />
                <div className="pe-30 py-15 flex flex-col items-center justify-center text-[20px] text-pretty gap-3">
                    <h3 className="uppercase text-center text-[40px] shrink-0">About</h3>
                    <div className="relative min-h-0">
                        <div className="overflow-y-auto min-h-0 w-full h-full py-10">
                            <span className="absolute top-0 w-full h-15 bg-gradient-to-b from-[#0f0d0e] to-transparent" />
                            <p className="tracking-[1px] select-text">
                                Letdown. While everyone else was learning to garden or make bread from scratch in 2020, Blake Coddington was busy finding a new way to musically express himself. The Chicago-based rocker launched Letdown. (period included), a new project that features his powerful range of vocals and deeply personal lyrics over catchy guitar hooks and hypnotizing drum beats.
                                <br /><br />
                                Or in Coddington&apos;s words, “It&apos;s just me crying about my problems.”
                                <br /><br />
                                But while the songwriter — who could pass as Jason Momoa playing the lead role in a film about rock &apos;n roll — may be a little facetious in the description of his own music, Coddington&apos;s mental health struggles have served as a primary creative focus for Letdown. thus far. The Big Loud Rock artist is looking to share his experiences to let others know that they&apos;re not alone in their own struggles, and he&apos;s found a home already in large swathes of the internet.
                                <br /><br />
                                “I write music not only as therapy for myself, but for others who feel they are spread too thin, falling short or just not good enough,” Coddington explains.
                                <br /><br />
                                In just six months, Letdown. saw 500k followers on TikTok, more than 265k monthly listeners on Spotify, and nearly 100k on Instagram — and that&apos;s before counting the 12+ million streams Coddington&apos;s singles have picked up. Of course, the emotionally vulnerable rocker is fully aware that TikTok hasn&apos;t exactly become a bastion of heavier music just yet, and his bearded and tattooed look stands out from the platform&apos;s assortment of teenage pop stars and dance routines.
                                <br /><br />
                                “I started posting on TikTok because I figured if all these guys doing pop music can do it, then I can at least put myself out there a little bit,” Coddington says. “I didn&apos;t expect much, but then I started going to bed every night and waking up with 50,000 or 100,000 new followers. The first video I posted did like 500,000 views in the first three hours, and I didn&apos;t know what to do with that because I came from a world where you make music, put it on YouTube to show to your friends, and 10 years later it has like 100 views.”
                                <br /><br />
                                At the time, Coddington was working a dead-end job (that he hated) in Indiana, and Letdown. was just supposed to be a little creative and emotional outlet for his spare time. But after achieving his initial online success, music (and getting people to listen to it on platforms outside of just TikTok)  became a much larger focus for the artist. Ten singles, a handful of music videos, and bigger streaming and social numbers than he ever thought he&apos;d see later, Coddington is ready to take the next step in his musical journey and start bringing his music live to the fans who have stuck with him throughout the pandemic.
                                <br /><br />
                                “Touring is the only thing I can think about these days,” Coddington says. “I lose sleep over it every night. I dream of playing music in front of people every day, so touring is hopefully going to be a big part of the next few years of my life. I just want to get on the damn road!”
                            </p>
                            <span className="absolute bottom-0 w-full h-15 bg-gradient-to-b from-transparent to-[#0f0d0e]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}