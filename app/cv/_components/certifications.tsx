import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Calendar, GraduationCap } from "lucide-react";

interface Props {
  course: string;
  address: string;
  year: string;
  status: string;
}

function Career({ address, course, year, status }: Props) {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center gap-1">
        <div className="w-4 h-5 rounded-full bg-linear-to-r from-purple-500 via-blue-300  to-blue-100"></div>
        <div className="w-px h-full bg-purple-900"></div>
      </div>
      <div>
        <div className="space-y-2">
          <p className="text-xl font-semibold">{course}</p>
          <p className="text-lg text-sky-500 font-semibold">{address}</p>
          <div className="flex items-center gap-4">
            <div className="flex gap-2 text-foreground/70">
              <Calendar size={20} />
              <p>{year}</p>
            </div>
            <div className="text-sm bg-green-800 text-green-300  py-1  px-3 rounded-full">
              <p className="capitalize">{status}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Certification() {
  return (
    <Card>
      <CardContent className="space-y-4">
        <CardTitle className="flex items-center gap-3">
          <div className="bg-blue-500/30  p-2 rounded-lg">
            <GraduationCap size={30} className="text-blue-500" />
          </div>
          <p className="text-2xl font-semibold">Education</p>
        </CardTitle>
        <div className="space-y-4">
          <Career
            course="BS in Information Technology"
            address="Mater Dei College"
            year="2021 - 2026"
            status="completed"
          />
          <Career
            course="ICT (Seniior High)"
            address="Tubigon West National High School"
            year="2021 - 2026"
            status="completed"
          />
          <Career
            course="BS in Information Technology"
            address="Mater Dei College"
            year="2021 - 2026"
            status="completed"
          />
        </div>
      </CardContent>
    </Card>
  );
}
