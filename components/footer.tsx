"use client";

import {
  Calendar,
  Code,
  Github,
  Linkedin,
  LucideIcon,
  Mail,
  MapPin,
  Pin,
} from "lucide-react";
import { Card, CardContent, CardTitle } from "./ui/card";
import Link from "next/link";

const links = ["Profile", "Projects", "Experience", "CV"];

function Header() {
  return (
    <div className="flex items-center gap-5">
      <div className=" bg-linear-to-r from-purple-700   to-blue-500 p-2 rounded-lg">
        <Code />
      </div>
      <div>
        <p className="text-xl font-bold">John Jeric Polison</p>
        <p className="text-sky-500">Web Developer</p>
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
    <div className="bg-blue-900/20 p-3 rounded-lg">
      <Icon size={size} className="text-foreground/70" />
    </div>
  );
}

export default function Footer() {
  return (
    <div className="px-8">
      <Card>
        <CardContent>
          <div className="grid grid-cols-2 mb-10">
            {/* first */}
            <div className="space-y-3">
              <Header />
              <div className="mb-5">
                <p className="text-foreground/70 text-shadow-lg">
                  While others are busy building and fighting for their empire,
                  I am here planting and growing my own trees to benefit future
                  generations
                </p>
              </div>
              <div className="flex justify-start items-center gap-5">
                <Social icon={Github} />
                <Social icon={Linkedin} />
                <Social icon={Mail} />
              </div>
            </div>
            <div className="flex justify-end gap-36  ">
              {/* second */}
              <div>
                <p className="text-lg font-semibold">Quick Links</p>
                <div className="flex flex-col ">
                  {links.map((link) => (
                    <Link key={link} href={`/${link}`}>
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
              {/* third */}
              <div className="space-y-2">
                <p className="text-lg font-semibold">Get in Touch</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Social icon={Mail} size={15} />
                    <span>johnjericpolison@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Social icon={MapPin} size={15} />
                    <span>Philippines</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Social icon={Calendar} size={15} />
                    <span>Available for Hire</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center text-sm text-foreground/70  border-t pb-5 pt-9">
            <div>
              <p>
                © 2025 John Jeric Polison. Built with using Next.js &
                TailwindCSS
              </p>
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
