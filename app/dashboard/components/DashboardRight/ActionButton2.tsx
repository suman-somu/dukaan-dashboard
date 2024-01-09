import { ChevronDown } from "lucide-react"

interface ActionButtonProps {
    text?: string;
    icon: any;
}

export const ActionButton2 = ({text, icon}: ActionButtonProps)=>{
    return (
        <button className="h-8 border-[1px] border-gray-400 py-1 px-2 rounded-sm">
          <span className="flex gap-1 items-center justify-center font-light text-sm">
            {text?text:null}{icon}
          </span>
        </button>
    )
}
