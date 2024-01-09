import { ChevronDown } from "lucide-react";

export default function Overview() {
  return (
    <div className="w-full h-fit flex flex-col gap-2">
      <span className="w-full flex justify-between">
        <h1 className="text-base font-medium">Overview</h1>
        <button className="border-[1px] border-gray-400 py-1 px-2 rounded-sm">
          <span className="flex items-center justify-center font-light text-sm">
            Last month <ChevronDown className="size-4" />
          </span>
        </button>
      </span>

      <span className="w-full flex gap-5">
        <div className=" flex-1 flex flex-col gap-2 p-4 rounded-sm shadow-md shadow-gray-200">
          <text className="font-light text-sm">Online orders</text>
          <h1 className="font-medium text-2xl">231</h1>
        </div>

        <div className="flex-1 flex flex-col gap-2 p-4 rounded-sm shadow-md shadow-gray-200">
          <text className="font-light text-sm">Amount received</text>
          <h1 className="font-medium text-2xl">{`₹23,92,312.19`}</h1>
        </div>
      </span>
    </div>
  );
}
