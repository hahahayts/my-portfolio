import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}
export default function Section({ children, className }: Props) {
  return <section className={cn("lg:px-40", className)}>{children}</section>;
}
