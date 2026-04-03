import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Award, Calendar } from "lucide-react";

interface Props {
  certification: string;
  issuer: string;
  year: string;
  status: string;
}

function CertificationItem({ certification, issuer, year, status }: Props) {
  return (
    <div className="flex gap-3 md:gap-5">
      <div className="flex flex-col items-center gap-1">
        <div className="w-3 h-4 md:w-4 md:h-5 rounded-full bg-linear-to-r from-green-500 via-emerald-300 to-emerald-100"></div>
        <div className="w-px h-full bg-green-900"></div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="space-y-1 md:space-y-2">
          <p className="text-sm sm:text-base md:text-xl font-semibold wrap-break-word">
            {certification}
          </p>
          <p className="text-xs sm:text-sm md:text-lg text-emerald-500 font-semibold wrap-break-word">
            {issuer}
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 md:gap-4">
            <div className="flex gap-1 md:gap-2 text-foreground/70 items-center">
              <Calendar size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
              <p className="text-xs sm:text-sm md:text-base">{year}</p>
            </div>
            <div className="text-xs sm:text-sm bg-blue-800 text-blue-300 py-0.5 px-2 md:py-1 md:px-3 rounded-full w-fit">
              <p className="capitalize whitespace-nowrap">{status}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Certification() {
  return (
    <Card className="h-full">
      <CardContent className="space-y-3 md:space-y-4 p-4 sm:p-5 md:p-6">
        <CardTitle className="flex items-center gap-2 md:gap-3">
          <div className="bg-emerald-500/30 p-1.5 md:p-2 rounded-lg">
            <Award
              size={20}
              className="sm:w-6 sm:h-6 md:w-[30px] md:h-[30px] text-emerald-500"
            />
          </div>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold">
            Certifications
          </p>
        </CardTitle>
        <div className="space-y-3 md:space-y-4">
          <CertificationItem
            certification="AWS Certified Cloud Practitioner"
            issuer="Amazon Web Services"
            year="2024"
            status="active"
          />
          <CertificationItem
            certification="Meta Frontend Developer"
            issuer="Meta"
            year="2023"
            status="completed"
          />
          <CertificationItem
            certification="Google IT Support"
            issuer="Google"
            year="2023"
            status="completed"
          />
        </div>
      </CardContent>
    </Card>
  );
}
