import { ChevronDown, HelpCircleIcon, Megaphone } from "lucide-react";
import { SearchBar } from "../components/DashboardRight/SearchBar";
import { ActionButton } from "../components/DashboardRight/ActionButton1";

export default function ActionBar() {
  return (
    <div className="w-full py-2 px-8 flex items-center justify-between border-b-2">
      <span className="flex items-center gap-4">
        <p>Payments</p>
        <p className="flex font-thin text-xs gap-1">
          <HelpCircleIcon className="size-4" /> How it works
        </p>
      </span>
      <SearchBar
        text={"Search features, tutorials, etc."}
        fill={true}
        width={"100px"}
      />
      <span className="flex items-center justify-end gap-2">
        <ActionButton icons={<Megaphone size={18} />} />
        <ActionButton icons={<ChevronDown size={18} />} />
      </span>
    </div>
  );
}
