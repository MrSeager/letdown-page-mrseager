

export default function SectionFive() {
    return(
        <div id="Contact" className="scroll-mt-10 w-full bg-[url(/images/04_Background-300px.webp)] py-15 px-5 flex flex-col items-center gap-5 border-b-2 border-white/15 border-dashed">
            <h3 className="text-center uppercase text-[40px]">Contact</h3>
            <p className="text-pretty text-[20px] tracking-[1px] select-none max-w-[35rem]">
                For tour booking, management inquiries, press requests, or general business
                opportunities, please reach out to the appropriate contact below.
                <br /><br />
                MANAGEMENT:<br />
                <span className="select-all">roger@kmamanagement.com</span>
                <br /><br />
                BOOKING:<br />
                <span className="select-all">ryan@minttalentgroup.com</span>
            </p>
        </div>
    );
}