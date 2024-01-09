interface LeftButtonProps {
  icon: any;
  text: string;
}

export default function LeftButton({ icon, text }: LeftButtonProps) {
  return (
    <button className="hover:bg-white hover:bg-opacity-10 w-full h-fit text-gray-400 hover:text-white font-medium rounded-md p-2">
      <div className="w-full flex flex-row items-center justify-start">
        <div className="flex items-center justify-center h-fit w-fit">{icon}</div>
        <p className="ml-2">{text}</p>
      </div>
    </button>
  );
}
