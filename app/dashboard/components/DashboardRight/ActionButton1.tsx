import { colors } from "@/app/consts/color";

interface ActionButtonProps {
    icons: any;
}
export const ActionButton = ({ icons}:ActionButtonProps) => {
    return(
        <button className={`rounded-full h-10 w-10 flex items-center justify-center bg-[${colors.black90}] text-[${colors.black30}] p-1`}>
            {icons}
        </button>
    )
}