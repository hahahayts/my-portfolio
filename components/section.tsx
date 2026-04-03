import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className }: Props) {
  return (
    <section
      className={cn("px-4 sm:px-6 md:px-8 lg:px-16 xl:px-40", className)}
    >
      {children}
    </section>
  );
}
