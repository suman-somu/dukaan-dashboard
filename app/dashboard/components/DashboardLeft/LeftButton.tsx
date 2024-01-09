interface LeftButtonProps {
  icon: any;
  text: string;
  selected: boolean;
}

export default function LeftButton({ icon, text, selected }: LeftButtonProps) {
  return (
    <button
      className={` hover:bg-white hover:bg-opacity-10 hover:text-white w-full h-fit text-gray-400 font-medium text-sm rounded-md py-2 px-4 ${selected ? 'bg-white bg-opacity-10 text-white' : 'bg-transparent'
        }`}
    >
      <div className="w-full flex flex-row items-center justify-start">
        <div className="flex items-center justify-center h-fit w-fit">{icon}</div>
        <p className="ml-2">{text}</p>
      </div>
    </button>
  );
}
