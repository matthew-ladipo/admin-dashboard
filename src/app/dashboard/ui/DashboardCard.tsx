import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SiTether } from "react-icons/si";

interface DasnboardProp {
  title: string;
  count: string;
  icon: any
}

const DashBoardCard = ({ title, count, icon }: DasnboardProp) => {
  return (
    <Card className="bg-gray-100 dark:bg-slate-800">
    <div className="flex flex-col sm:flex-row items-center justify-between px-2 sm:px-5 py-2 sm:py-4">
      <CardHeader>
        <CardTitle className="text-gray-600 text-[24px] sm:text-[25px] lg:text-[30px]">
          {count}
        </CardTitle>
        <CardDescription className="font-light text-gray-400 text-[12px] sm:text-[14px] lg:text-[16px]">
          {title}
        </CardDescription>
      </CardHeader>
      <div className="text-[40px] sm:text-[45px] lg:text-[50px]">
        {icon}
      </div>
    </div>
  </Card>
  
  );
};

export default DashBoardCard;
