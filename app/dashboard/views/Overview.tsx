import { ChevronDown } from "lucide-react";
import { ActionButton2 } from "../components/DashboardRight/ActionButton2";

export default function Overview() {
  return (
    <div className="w-full h-fit flex flex-col gap-2">
      <span className="w-full flex justify-between">
        <h1 className="text-base font-medium">Overview</h1>
        <ActionButton2 text={"Last month"} icon={<ChevronDown className="size-4" />} />
      </span>

      <span className="w-full flex gap-5">
        <div className=" flex-1 flex flex-col gap-2 p-4 rounded-sm shadow-md shadow-gray-100">
          <text className="font-light text-sm">Online orders</text>
          <h1 className="font-medium text-2xl">231</h1>
        </div>

        <div className="flex-1 flex flex-col gap-2 p-4 rounded-sm shadow-md shadow-gray-100">
          <text className="font-light text-sm">Amount received</text>
          <h1 className="font-medium text-2xl">{`₹23,92,312.19`}</h1>
        </div>
      </span>
    </div>
  );
}
