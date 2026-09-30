

export default function SectionOne() {
    return(
        <div className="w-full relative h-screen overflow-hidden flex items-center justify-center">
            <video 
                src={'/videos/01 Background-video.mp4'}
                autoPlay
                loop
                muted
                playsInline
                className="inset-0 w-full h-full object-cover pointer-events-none select-none"
            />
            <p className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[18px]">SCROLL DOWN</p>
        </div>
    );
}