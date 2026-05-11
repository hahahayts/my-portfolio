import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, CheckCircle2, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Experience() {
  return (
    <div className="min-h-[60vh] flex justify-center items-center px-4 py-12">
      <Card className="max-w-4xl w-full overflow-hidden border-purple-500/20 bg-card/50 backdrop-blur-sm">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            {/* Left Side: Image/Brand */}
            <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden bg-muted">
              <Image
                alt="Report Submission System Project"
                src="/images/dilg1.jpg"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white font-bold text-xl">DILG Project</p>
              </div>
            </div>

            {/* Right Side: Details */}
            <div className="p-6 md:p-8 md:w-3/5 space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-purple-400">
                    Report Submission System
                  </h3>
                  <p className="text-foreground/60 flex items-center gap-2 mt-1">
                    <Briefcase size={16} /> Web Developer Intern
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-foreground/80 leading-relaxed">
                  Contributed to a high-impact web application designed to
                  streamline report management using the modern **Laravel +
                  React (Inertia.js)** stack.
                </p>

                <ul className="grid grid-cols-1 gap-2">
                  {[
                    "Developed responsive UIs with Tailwind CSS",
                    "Implemented secure User Authentication & CRUD",
                    "Optimized system performance & reliability",
                    "Integrated Inertia.js for SPA experience",
                  ].map((task) => (
                    <li
                      key={task}
                      className="flex items-center gap-2 text-sm text-foreground/70"
                    >
                      <CheckCircle2 size={14} className="text-purple-500" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "Laravel",
                  "React",
                  "Inertia.js",
                  "Tailwind CSS",
                  "MySQL",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-md text-xs font-medium text-purple-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
