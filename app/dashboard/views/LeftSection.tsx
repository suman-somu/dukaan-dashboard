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
import { colors } from "@/app/consts/color";

export default function LeftSection() {
  return (
    <section className={`h-full w-56 bg-[#1E2640] text-[#FFFFFF] p-2 flex flex-col justify-between`}>
      <div className="flex flex-col justify-start items-start">
        <LeftProfile />
        <div className="flex flex-col w-full gap-1 my-8">
          <LeftButton icon={<Home size={20} />} text="Home" selected={false} />
          <LeftButton icon={<ClipboardList size={20} />} text="Orders" selected={false} />
          <LeftButton icon={<LayoutGrid size={20} />} text="Products" selected={false} />
          <LeftButton icon={<Truck size={20} />} text="Delivery" selected={false} />
          <LeftButton icon={<Megaphone size={20} />} text="Marketing" selected={false} />
          <LeftButton icon={<BarChartBigIcon size={20} />} text="Analytics" selected={false} />
          <LeftButton icon={<Banknote size={20} />} text="Payments" selected={true} />
          <LeftButton icon={<Navigation size={20} />} text="Tools" selected={false} />
          <LeftButton icon={<BadgePercent size={20} />} text="Discount" selected={false} />
          <LeftButton icon={<UsersRound size={20} />} text="Audience" selected={false} />
          <LeftButton icon={<Palette size={20} />} text="Appearance" selected={false} />
          <LeftButton icon={<Zap size={20} />} text="Plugins" selected={false} />
        </div>
      </div>
      <LeftCredits />
    </section>
  );
}
