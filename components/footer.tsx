"use client";

import {
  Calendar,
  Code,
  Github,
  Linkedin,
  LucideIcon,
  Mail,
  MapPin,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";

const links = ["profile", "projects", "experience", "cv"];

function Header() {
  return (
    <div className="flex items-center gap-3 sm:gap-5">
      <div className="bg-linear-to-r from-purple-700 to-blue-500 p-1.5 sm:p-2 rounded-lg">
        <Code className="w-4 h-4 sm:w-5 sm:h-5" />
      </div>
      <div>
        <p className="text-base sm:text-lg md:text-xl font-bold">
          John Jeric Polison
        </p>
        <p className="text-sm sm:text-base text-sky-500">Web Developer</p>
      </div>
    </div>
  );
}

function Social({
  icon: Icon,
  size = 20,
}: {
  icon: LucideIcon;
  size?: number;
}) {
  return (
    <div className="bg-blue-900/20 p-2 sm:p-3 rounded-lg hover:bg-blue-900/40 transition-colors">
      <Icon size={size} className="text-foreground/70 w-4 h-4 sm:w-5 sm:h-5" />
    </div>
  );
}

export default function Footer() {
  return (
    <div className="px-4 sm:px-6 md:px-8">
      <Card>
        <CardContent className="p-4 sm:p-5 md:p-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 mb-8 lg:mb-10">
            {/* First Column - Profile */}
            <div className="flex-1 space-y-3 sm:space-y-4">
              <Header />
              <div className="mb-3 sm:mb-5">
                <p className="text-sm sm:text-base text-foreground/70">
                  While others are busy building and fighting for their empire,
                  I am here planting and growing my own trees to benefit future
                  generations
                </p>
              </div>
              <div className="flex justify-start items-center gap-3 sm:gap-5">
                <Social icon={Github} />
                <Social icon={Linkedin} />
                <Social icon={Mail} />
              </div>
            </div>

            {/* Second & Third Columns - Right side */}
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-24 lg:gap-36">
              {/* Quick Links */}
              <div>
                <p className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">
                  Quick Links
                </p>
                <div className="flex flex-col space-y-1.5 sm:space-y-2">
                  {links.map((link) => (
                    <Link key={link} href={`/${link}`}>
                      <span className="text-sm sm:text-base hover:text-sky-500 transition-colors">
                        {link === links[links.length - 1]
                          ? "CV"
                          : link.charAt(0).toUpperCase() + link.slice(1)}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Get in Touch */}
              <div className="space-y-2 sm:space-y-3">
                <p className="text-base sm:text-lg font-semibold">
                  Get in Touch
                </p>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Social icon={Mail} size={15} />
                    <span className="text-xs sm:text-sm break-all">
                      johnjericpolison@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Social icon={MapPin} size={15} />
                    <span className="text-sm sm:text-base">Philippines</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Social icon={Calendar} size={15} />
                    <span className="text-sm sm:text-base">
                      Available for Hire
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-foreground/70 border-t pt-5 sm:pt-6 md:pt-9">
            <div className="text-center md:text-left">
              <p>© 2025 John Jeric Polison. Built with Next.js & TailwindCSS</p>
            </div>
            <div>
              <p>Last updated: December 2025 Version 2.0</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
