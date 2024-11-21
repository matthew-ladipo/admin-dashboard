import DashBoardCard from "./dashboard/ui/DashboardCard";
import { SiTether } from "react-icons/si";
import { GiPiggyBank } from "react-icons/gi";
import { GiWallet } from "react-icons/gi";
import { TbCalendarDue } from "react-icons/tb";
import PostTage from "./dashboard/ui/PostTable";
import Charts from "./dashboard/ui/Chart";

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row ml-5 gap-5 mb-5">
        <DashBoardCard title="Performance" count='0.00%' icon={<SiTether className="text-teal-700 bg-teal-100 rounded-[50%] py-2 px-2" />} />
        <DashBoardCard title="Savings" count="$0.00" icon={<GiPiggyBank className="text-yellow-600 bg-yellow-100 rounded-[50%] py-2 px-2" />} />
        <DashBoardCard title="Total Bal" count="$0.00" icon={<GiWallet className="text-green-700 bg-green-100 rounded-[50%] py-2 px-2" />} />
        <DashBoardCard title="Due Payment" count="$0.00" icon={<TbCalendarDue className="text-red-700 bg-red-100 rounded-[50%] py-2 px-2" />} />
      </div>
      <Charts/>
      {/* <PostTage /> */}
    </>
  );
}
