import { SearchBar } from "../components/DashboardRight/SearchBar";
import ActionBar from "./ActionBar";
import Overview from "./Overview";
import Transaction from "./Transactions";

export default function RightSection() {
  return (
    <section className="flex flex-col grow justify-start items-start bg-white text-gray-800">
      <ActionBar />
      <div className="flex flex-col gap-4 justify-start items-start h-full w-full p-6 overflow-auto">
        <Overview />
        <Transaction />
      </div>
    </section>
  );
}
