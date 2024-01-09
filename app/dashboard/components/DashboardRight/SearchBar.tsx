import { Search } from "lucide-react";
import { colors } from "@/app/consts/color";

interface SearchBarProps {
    text: string;
    fill: boolean;
    width: string;
}

export const SearchBar = ({ text, fill, width }: SearchBarProps) => {
    return (
        <div className={`h-fit w-fit flex items-center justify-start border-[1px] border-[${colors.darkgray}] text-[${colors.darkgray}] ${fill ? `bg-[${colors.lightgray}]` : ''}  py-1 px-2 rounded-md`}>
            <Search className=" mx-1" />
            {text && <p className=" text-xs mx-1 mr-5">{text}</p>}
        </div>
    )
}