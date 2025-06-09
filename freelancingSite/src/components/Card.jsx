export const Card = () => {
    return(
        <div className="p-6 rounded-[38px] font-inter font-semibold border-[1px] border-neutral-200 ring-8 ring-white max-w-md w-full shadow-2xl">
                <div className="text-sm bg-neutral-200/50 rounded-md py-1.5 px-3 w-min text-nowrap font-normal tracking-tight">15 Days Delivery</div>
                <div className="text-4xl mt-3 font-semibold tracking-[-1px]">Hero Section <span className="font-serif font-thin italic tracking-tighter">Revamp</span>
                </div>
                <div className="text-sm font-normal tracking-tight text-neutral-500 mt-3">
                    Redesigning your hero section to be more conversion-friendly, visually engaging, and impactful.
                </div>
                <div className="bg-neutral-900 rounded-full w-full py-3 text-md text-neutral-50 font-normal text-center cursor-pointer mt-6">Revamp my Hero</div>
            
        </div>
    )
}