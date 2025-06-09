import { LuMoveLeft } from "react-icons/lu";

export const Hero = () => {
    return (
        <div className="flex flex-col w-full max-w-4xl mt-96 mb-20">
            <div className="flex justify-between">
                <div className="flex max-w-xs w-full rounded-full bg-neutral-200 p-6  font-inter font-semibold border-[1px] border-neutral-200 ring-8 ring-white shadow-2xl shadow-purple-200"></div>
                <div className="text-6xl font-medium tracking-tighter text-neutral-800">Reflect your vision</div>
            </div>

            <div className="flex flex-row-reverse justify-between mt-10 ">
                <div className="flex max-w-xs w-full rounded-full bg-neutral-200 p-6  font-inter font-semibold border-[1px] border-neutral-200 ring-8 ring-white shadow-2xl shadow-orange-200"></div>
                <div className="text-6xl font-medium tracking-tighter text-neutral-800 ">Expert Design Solutions</div>
            </div>
            <div className="flex w-full border-b-[1px] border-neutral-200 py-12"></div>
            <div className="flex mt-8 text-md tracking-tighter text-neutral-800 font-normal cursor-pointer items-center ">view our work <span className="rotate-180 ml-2 "><LuMoveLeft size={22} /></span> </div>
        </div>
    )
}