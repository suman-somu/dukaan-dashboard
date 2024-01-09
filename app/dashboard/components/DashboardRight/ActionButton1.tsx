interface ActionButtonProps {
    icons: any;
}
export const ActionButton = ({ icons}:ActionButtonProps) => {
    return(
        <button className="rounded-full h-10 w-10 flex items-center justify-center bg-gray-400 p-1">
            {icons}
        </button>
    )
}