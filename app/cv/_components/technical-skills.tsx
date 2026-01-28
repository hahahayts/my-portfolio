import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Code } from "lucide-react";
import { languages, SkillsType } from "../skill";

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
    <Card>
      <CardContent className="space-y-4">
        <CardTitle className="flex items-center gap-3">
          <div className="bg-purple-500/30 p-2 rounded-lg">
            <Code size={30} className="text-purple-500" />
          </div>
          <p className="text-2xl font-semibold">Technical Skills</p>
        </CardTitle>
        <div className="grid grid-cols-3 gap-2">
          <Skill name="Programming Languages" skills={languages} />
          <Skill name="Programming Languages" skills={languages} />
          <Skill name="Programming Languages" skills={languages} />
          <Skill name="Programming Languages" skills={languages} />
        </div>
      </CardContent>
    </Card>
  );
}
