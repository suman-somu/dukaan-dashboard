import { SearchBar } from "../components/DashboardRight/SearchBar";
import ActionBar from "./ActionBar";
import Overview from "./Overview";
import Transaction from "./Transactions";

export default function RightSection() {
  return (
    <section className="flex flex-col grow justify-start items-start bg-white text-gray-800">
      <ActionBar />
      <div className="flex flex-col gap-2 justify-start items-start h-full w-full p-8">
        <Overview />
        <Transaction />
        
      </div>
    </section>
  );
}
