interface BtnAProps {
    name: string;
}

export default function BtnA({ name }: BtnAProps) {
    return(
        <button
            type="button"
            className="pt-1 outline-none cursor-pointer text-base/7 text-[30px] uppercase group relative duration-300 hover:text-white focus:text-white"
        >
            {name}
            <span className="absolute bottom-0 w-0 bg-white right-0 h-[.1rem] duration-300 group-hover:w-full group-hover:left-0 group-focus-visible:w-full group-focus-visible:left-0" />
        </button>
    );
}