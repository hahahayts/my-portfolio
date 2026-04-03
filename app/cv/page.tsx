import Section from "@/components/section";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Education from "./_components/education";
import Certification from "./_components/certifications";
import TechnicalSkills from "./_components/technical-skills";

export default function CV() {
  return (
    <div className="min-h-screen flex justify-center items-center pt-20 pb-10 px-4 md:px-0">
      <div className="w-full max-w-7xl mx-auto space-y-8 md:space-y-10">
        <Section className="flex flex-col text-center gap-4 md:gap-5">
          <p className="text-3xl md:text-4xl font-bold">Curriculum Vitae</p>
          <p className="text-base md:text-xl text-foreground/70">
            Professional background and qualifications
          </p>
          <div>
            <Button size={"lg"} className="bg-blue-500 text-white">
              <Download className="w-4 h-4 md:w-5 md:h-5" />
              <span>Download CV</span>
            </Button>
          </div>
        </Section>

        <Section className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
          <Education />
          <Certification />
        </Section>

        <Section>
          <TechnicalSkills />
        </Section>
      </div>
    </div>
  );
}
