import { DashboardData } from "@/components/dashboardData/DashboardData";
import { Badge } from "@/components/ui/badge";
import { ArrowDown } from "lucide-react";

const page = () => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-xl">Realtime Dashboard</h1>
        <Badge className="gap-2 bg-white px-1 text-[11px] font-normal text-black">
          <ArrowDown size={14} className="text-red-500" /> Attendance Status
        </Badge>
      </div>

      <DashboardData />
    </div>
  );
};

export default page;
