

export default function SectionOne() {
    return(
        <div className="w-full relative">
            <video 
                src={'/videos/01 Background-video.mp4'}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto pointer-events-none select-none"
            />
            <p className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[30px]">SCROLL DOWN</p>
        </div>
    );
}