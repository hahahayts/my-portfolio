import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Code } from "lucide-react";
import { database, languages, others, SkillsType, web } from "../skill";

interface Props {
  name: string;
  skills: SkillsType;
}

function Skill({ name, skills }: Props) {
  return (
    <div>
      <div className="text-purple-500 text-xl font-semibold pb-4 border-b border-purple-500/70 mb-2">
        <p>{name}</p>
      </div>

      <div>
        {skills.map((skill) => (
          <div key={skill} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
            <div className="text-lg text-foreground/70 space-y-2">
              <p>{skill}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default function TechnicalSkills() {
  return (
    <Card className="w-full">
      <CardContent className="p-4 sm:p-6 space-y-6">
        <CardTitle className="flex items-center gap-3">
          <div className="bg-purple-500/30 p-2 rounded-lg">
            <Code size={30} className="text-purple-500" />
          </div>
          <p className="text-xl sm:text-2xl font-semibold">Technical Skills</p>
        </CardTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <Skill name="Tech Stack" skills={web} />
          <Skill name="Databases" skills={database} />
          <Skill name="Programming Languages" skills={languages} />
          {/* <Skill name="Others" skills={others} /> */}
        </div>
      </CardContent>
    </Card>
  );
}
