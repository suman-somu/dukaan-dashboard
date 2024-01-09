import { Search } from "lucide-react";
import { colors } from "@/app/consts/color";

interface SearchBarProps {
    text: string;
    fill: boolean;
    width: string;
}

export const SearchBar = ({ text, fill, width }: SearchBarProps) => {
    return (
        <div className={`h-fit flex items-center justify-start text-[${colors.darkgray}] ${fill ? `bg-[${colors.lightgray}]` : `border-[1px] border-[${colors.darkgray}]`} cursor-pointer py-1 px-2 rounded-md`}style={{ width, minWidth: 100 }}>
            <Search className=" mx-1" />
            {text && <p className=" text-xs mx-1 text-ellipsis">{text}</p>}
        </div>
    )
}