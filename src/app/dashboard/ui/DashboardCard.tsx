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
    <Card className="bg-gray-100 dark:bg-slate-800 ">
      <div className="flex items-center  px-5 py-2">
        <CardHeader>
          <CardTitle className="text-gray-600">
            {count} 
          </CardTitle>
          <CardDescription className="font-light text-gray-400">{title}</CardDescription>
        </CardHeader><div className=" text-[48px] ">
          {icon}
        </div>
      </div>
    </Card>
  );
};

export default DashBoardCard;
