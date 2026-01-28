"use client";

import { Button } from "./ui/button";
import { Card, CardContent, CardTitle } from "./ui/card";

const technologies = [
  "React",
  "Next.js",
  "Hono",
  "Inertia",
  "Laravel",
  "JavaScript",
  "TypeScript",
  "TailwindCSS",
];

function TechBttn({ label }: { label: string }) {
  return (
    <Button size={"sm"} variant={"outline"} className="flex-1  text-center">
      {label}
    </Button>
  );
}

export default function CoreTechnologies() {
  return (
    <Card className="">
      <CardContent>
        <CardTitle className="text-lg font-bold">Core Technologies</CardTitle>
        <div className="flex flex-wrap mt-5 gap-2 ">
          {technologies.map((t, index) => (
            <TechBttn key={index} label={t} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
