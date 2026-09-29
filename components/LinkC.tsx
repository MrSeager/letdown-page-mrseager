//Components
import Link from "next/link";

interface LinkCProps {
    name: string;
    hrefLink: string;
}

export default function LinkC ({ name, hrefLink }: LinkCProps) {
    return(
        <Link
            href={hrefLink}
            target="_blank"
            className="border text-center text-[30px] px-15 uppercase border-3 border-[#f5f5f5CC]/80 duration-300 outline-none
                        hover:text-[#f5f5f5CC] hover:border-[#f5f5f5CC]
                        focus:text-white focus:border-white"
        >
            {name}
        </Link>
    );
}