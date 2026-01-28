"use client";

import { Code, Download, LucideIcon, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface Props {
  icon: LucideIcon;
  label: string;
  classname?: string;
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
}
function ActionButton({ icon: Icon, label, classname, variant }: Props) {
  return (
    <Button
      size={"lg"}
      variant={variant}
      className={cn(
        "flex flex-1 items-center justify-center gap-2 w-full sm:w-auto ",
        classname
      )}
    >
      <Icon />
      <span>{label}</span>
    </Button>
  );
}

export default function ActionButtons() {
  return (
    <div className="flex flex-wrap  gap-5 mt-2">
      <ActionButton
        icon={Download}
        label="View CV"
        classname="bg-blue-500 text-white"
      />
      <ActionButton icon={Code} label="View Projects" variant={"outline"} />
      <ActionButton icon={Mail} label="Contact" variant={"outline"} />
    </div>
  );
}
