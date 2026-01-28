"use client";

import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Briefcase, FileText, User, FolderGit2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navigations() {
  const pathname = usePathname();

  console.log(pathname);
  return (
    <div className="min-h-screen flex items-center">
      <Card className="">
        <CardContent className="flex flex-col gap-5">
          <Link href="/">
            <Tooltip>
              <TooltipTrigger asChild>
                <User
                  className={cn(
                    "w-6 h-6 text-foreground/70 ",
                    pathname === "/" ? "text-sky-500 " : ""
                  )}
                />
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Profile</p>
              </TooltipContent>
            </Tooltip>
          </Link>

          <Link href="/cv">
            <Tooltip>
              <TooltipTrigger asChild>
                <FileText
                  className={cn(
                    "w-6 h-6  text-foreground/70",
                    pathname === "/cv" ? "text-sky-500 " : ""
                  )}
                />
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Curriculum Vitae</p>
              </TooltipContent>
            </Tooltip>
          </Link>

          <Link href="/projects">
            <Tooltip>
              <TooltipTrigger asChild>
                <FolderGit2
                  className={cn(
                    "w-6 h-6  text-foreground/70",
                    pathname === "/projects" ? "text-sky-500 " : ""
                  )}
                />
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Projects</p>
              </TooltipContent>
            </Tooltip>
          </Link>

          {/* <Link href="https://github.com/yourusername" target="_blank">
            <Tooltip>
              <TooltipTrigger asChild>
                <Github
                  className={cn(
                    "w-6 h-6  text-foreground/70 ",
                    pathname === "/" ? "text-sky-500 " : ""
                  )}
                />
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Github</p>
              </TooltipContent>
            </Tooltip>
          </Link> */}

          <Link href="/experiences">
            <Tooltip>
              <TooltipTrigger asChild>
                <Briefcase
                  className={cn(
                    "w-6 h-6  text-foreground/70 ",
                    pathname === "/experiences" ? "text-sky-500 " : ""
                  )}
                />
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Experiences</p>
              </TooltipContent>
            </Tooltip>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
