//Components
import Link from "next/link";

interface LinkAProps {
    name: string;
    hrefLink: string;
}

export default function LinkA({ name, hrefLink }: LinkAProps) {
    return(
        <Link
            href={hrefLink}
            target="_blank"
            className="cursor-pointer text-base/7 text-[30px] uppercase group relative duration-300 hover:text-white"
        >
            {name}
            <span className="absolute bottom-0 w-0 bg-white right-0 h-[.1rem] duration-300 group-hover:w-full group-hover:left-0 group-focus-visible:w-full group-focus-visible:left-0" />
        </Link>
    );
}