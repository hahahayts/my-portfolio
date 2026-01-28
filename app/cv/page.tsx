import Section from "@/components/section";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Education from "./_components/education";
import Certification from "./_components/certifications";
import TechnicalSkills from "./_components/technical-skills";

export default function CV() {
  return (
    <div className="min-h-screen flex justify-center items-center pt-20 pb-10  ">
      <div className="w-full space-y-10">
        <Section className="flex flex-col text-center gap-5 ">
          <p className="text-4xl font-bold">Curriculum Vitae</p>
          <p className="text-xl text-foreground/70">
            Professional background and qualifications
          </p>
          <div>
            <Button size={"lg"} className="bg-blue-500 text-white">
              <Download />
              <span>Download CV</span>
            </Button>
          </div>
        </Section>
        <Section className="grid grid-cols-2 gap-10  ">
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
