//Components
import LinkC from "./LinkC";

export default function FooterComponent() {
    return(
        <footer className="py-15 px-5 w-full bg-[url(/images/04_Background-300px.webp)] flex flex-col gap-5 items-center justify-center">
            <h4 className="text-[40px] text-center">BE THE FIRST TO KNOW</h4>
            <p className="text-pretty text-[20px] tracking-[1px] max-w-[35rem]">Get updates on new music, tour dates, and exclusive releases — straight from Blake himself.</p>
            <LinkC 
                name="SIGN UP FOR ALERTS"
                hrefLink="https://laylo.com/letdown/profile"
                classN="px-15"
            />
        </footer>
    );
}