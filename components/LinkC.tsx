//Components
import Link from "next/link";

interface LinkCProps {
    name: string;
    hrefLink: string;
    classN?: string;
}

export default function LinkC ({ name, hrefLink, classN }: LinkCProps) {
    return(
        <Link
            href={hrefLink}
            target="_blank"
            className={`${classN} pt-1 shadow-white/25 text-shadow-white/25 border text-center text-[30px] uppercase border-3 border-[#f5f5f5CC]/80 duration-300 outline-none
                        hover:text-white hover:border-white hover:shadow-md hover:text-shadow-md
                        focus:text-white focus:border-white focus:shadow-md`}
        >
            {name}
        </Link>
    );
}