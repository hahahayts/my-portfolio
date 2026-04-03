"use client";

import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Briefcase, FileText, User, FolderGit2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export default function Navigations() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px is lg breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const navItems = [
    { href: "/", icon: User, label: "Profile" },
    { href: "/cv", icon: FileText, label: "Curriculum Vitae" },
    { href: "/projects", icon: FolderGit2, label: "Projects" },
    { href: "/experiences", icon: Briefcase, label: "Experiences" },
  ];

  return (
    <>
      {/* Mobile Navigation - Bottom Bar */}
      {isMobile && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-4">
          <Card className="shadow-lg border-t">
            <CardContent className="flex justify-around items-center py-3 px-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link key={item.href} href={item.href}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex flex-col items-center gap-1 group">
                          <Icon
                            className={cn(
                              "w-5 h-5 transition-all duration-200",
                              isActive
                                ? "text-sky-500 scale-110"
                                : "text-foreground/70 group-hover:text-sky-500",
                            )}
                          />
                          <span
                            className={cn(
                              "text-xs transition-colors duration-200",
                              isActive
                                ? "text-sky-500"
                                : "text-foreground/70 group-hover:text-sky-500",
                            )}
                          >
                            {item.label === "Curriculum Vitae"
                              ? "CV"
                              : item.label}
                          </span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent side="top">
                        <p>{item.label}</p>
                      </TooltipContent>
                    </Tooltip>
                  </Link>
                );
              })}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Desktop Navigation - Vertical Sidebar */}
      {!isMobile && (
        <div className="hidden lg:block">
          <Card className="shadow-lg">
            <CardContent className="flex flex-col gap-5 py-6 px-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link key={item.href} href={item.href}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Icon
                          className={cn(
                            "w-6 h-6 transition-all duration-200 cursor-pointer hover:scale-110",
                            isActive
                              ? "text-sky-500"
                              : "text-foreground/70 hover:text-sky-500",
                          )}
                        />
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        <p>{item.label}</p>
                      </TooltipContent>
                    </Tooltip>
                  </Link>
                );
              })}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Add padding to main content on mobile to prevent overlap with bottom nav */}
      <style jsx global>{`
        @media (max-width: 1023px) {
          main {
            padding-bottom: 80px;
          }
        }
      `}</style>
    </>
  );
}
