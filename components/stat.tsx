import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface Props {
  icon: LucideIcon;
  title: string;
  desc: string;
}
export default function StatCard({ icon: Icon, desc, title }: Props) {
  return (
    <Card className="h-full">
      <CardContent className="flex flex-col items-center gap-2 h-full justify-between">
        <div className="p-3 bg-sky-900 rounded-full">
          <Icon className="text-sky-500 w-6 h-6" />
        </div>
        <div className="text-center space-y-1">
          <p className="text-xl font-semibold">{title}</p>
          <p className="text-sm text-gray-400">{desc}</p>
        </div>
      </CardContent>
    </Card>
  );
}
