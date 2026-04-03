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
    <div className="flex gap-3 md:gap-5">
      <div className="flex flex-col items-center gap-1">
        <div className="w-3 h-4 md:w-4 md:h-5 rounded-full bg-linear-to-r from-purple-500 via-blue-300 to-blue-100"></div>
        <div className="w-px h-full bg-purple-900"></div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="space-y-1 md:space-y-2">
          <p className="text-sm sm:text-base md:text-xl font-semibold wrap-break-word">
            {course}
          </p>
          <p className="text-xs sm:text-sm md:text-lg text-sky-500 font-semibold wrap-break-word">
            {address}
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 md:gap-4">
            <div className="flex gap-1 md:gap-2 text-foreground/70 items-center">
              <Calendar size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
              <p className="text-xs sm:text-sm md:text-base">{year}</p>
            </div>
            <div className="text-xs sm:text-sm bg-green-800 text-green-300 py-0.5 px-2 md:py-1 md:px-3 rounded-full w-fit">
              <p className="capitalize whitespace-nowrap">{status}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <Card className="h-full">
      <CardContent className="space-y-3 md:space-y-4 p-4 sm:p-5 md:p-6">
        <CardTitle className="flex items-center gap-2 md:gap-3">
          <div className="bg-blue-500/30 p-1.5 md:p-2 rounded-lg">
            <GraduationCap
              size={20}
              className="sm:w-6 sm:h-6 md:w-[30px] md:h-[30px] text-blue-500"
            />
          </div>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold">
            Education
          </p>
        </CardTitle>
        <div className="space-y-3 md:space-y-4">
          <Career
            course="BS in Information Technology"
            address="Mater Dei College"
            year="2021 - 2026"
            status="completed"
          />
          <Career
            course="ICT (Senior High)"
            address="Tubigon West National High School"
            year="2020 - 2021"
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
