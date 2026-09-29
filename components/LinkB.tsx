//Components
import { ReactNode } from "react";
import Link from "next/link";

interface LinkBProps {
    icon: ReactNode;
    hrefLink: string;
}

export default function LinkB({ icon, hrefLink }: LinkBProps) {
    return(
        <Link
            href={hrefLink}
            className="cursor-pointer outline-none duration-300 hover:text-white focus:text-white"
        >
            {icon}
        </Link>
    );
}