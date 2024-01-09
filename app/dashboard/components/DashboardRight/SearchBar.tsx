import { Search } from "lucide-react";

interface SearchBarProps {
    text: string;
    fill: boolean;
    width: string;
}

export const SearchBar = ({text, fill, width}: SearchBarProps) => {
    return (
        <div className={`h-fit w-fit flex items-center justify-start border-[1px] border-gray-400 ${fill ? 'bg-gray-300' : ''}  p-2 rounded-md`}>
            <Search className="text-gray-400 mx-1" />
            {text && <p className="text-gray-400 text-xs mx-1">{text}</p>}
        </div>
    )
}
//     return (
//         <div className="h-fit flex items-center justify-start bg-neutral-300 p-2 rounded-md w-fit">
//             <Search className="text-gray-400 mx-1" />
//             {text && <p className="text-gray-400 text-xs mx-1">{text}</p>}
//         </div>

//     )
// }
