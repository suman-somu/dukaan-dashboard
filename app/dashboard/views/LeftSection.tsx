import {
  BadgePercent,
  Banknote,
  BarChartBigIcon,
  ClipboardList,
  Home,
  LayoutGrid,
  Megaphone,
  Navigation,
  Palette,
  Settings,
  Truck,
  UsersRound,
  Zap,
} from "lucide-react";
import LeftButton from "../components/DashboardLeft/LeftButton";
import LeftCredits from "../components/DashboardLeft/LeftCredits";
import LeftProfile from "../components/DashboardLeft/LeftProfile";

export default function LeftSection() {
  return (
    <section className="h-full w-56 bg-[#1E2640] p-2 flex flex-col justify-between">
      <div className="flex flex-col justify-start items-start">
        <LeftProfile />
        <div className="flex flex-col w-full gap-1 my-8">
          <LeftButton icon={<Home size={20} />} text="Home" />
          <LeftButton icon={<ClipboardList size={20} />} text="Orders" />
          <LeftButton icon={<LayoutGrid size={20} />} text="Products" />
          <LeftButton icon={<Truck size={20} />} text="Delivery" />
          <LeftButton icon={<Megaphone size={20} />} text="Marketing" />
          <LeftButton icon={<BarChartBigIcon size={20} />} text="Analytics" />
          <LeftButton icon={<Banknote size={20} />} text="Payments" />
          <LeftButton icon={<Navigation size={20} />} text="Tools" />
          <LeftButton icon={<BadgePercent size={20} />} text="Discount" />
          <LeftButton icon={<UsersRound size={20} />} text="Audience" />
          <LeftButton icon={<Palette size={20} />} text="Appearance" />
          <LeftButton icon={<Zap size={20} />} text="Plugins" />
        </div>
      </div>
      <LeftCredits />
    </section>
  );
}
