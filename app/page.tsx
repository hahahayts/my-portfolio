import ActionButtons from "@/components/actions-buttons";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { stats } from "./stats";
import StatCard from "@/components/stat";
import Image from "next/image";
import CoreTechnologies from "@/components/core-tech";
import { Button } from "@/components/ui/button";
import { Briefcase, Code, Mail } from "lucide-react";
import Section from "@/components/section";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center px-4 sm:px-6 py-8 sm:py-12">
      <div className="w-full max-w-7xl mx-auto space-y-6 sm:space-y-8 md:space-y-10">
        {/* Profile and Stats Section */}
        <Section className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {/* Profile Card */}
          <Card className="h-full">
            <CardContent className="flex flex-col items-center gap-3 sm:gap-4 p-6 sm:p-8">
              <div className="h-[120px] w-[120px] sm:h-[150px] sm:w-[150px] rounded-full overflow-hidden border-4 border-sky-500/20">
                <Image
                  alt="me"
                  src={"/images/me.jpg"}
                  width={150}
                  height={150}
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
              <div className="text-center">
                <h2 className="text-xl sm:text-2xl font-semibold">
                  John Jeric Polison
                </h2>
                <h3 className="text-lg sm:text-xl font-semibold text-sky-500 mt-1">
                  Web Developer
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-400 text-center">
                Passionate about building modern, scalable, and maintainable web
                applications as a full-stack developer, leveraging React,
                Next.js, Laravel, Inertia JS and AI-driven solutions.
              </p>
            </CardContent>
          </Card>

          {/* Stats & Action Column */}
          <div className="flex flex-col gap-5 sm:gap-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {stats.map((stat, idx) => (
                <StatCard
                  key={idx}
                  icon={stat.icon}
                  title={stat.title}
                  desc={stat.desc}
                />
              ))}
            </div>

            {/* Action Buttons */}
            <Card className="flex-1">
              <CardContent className="flex flex-col gap-3 sm:gap-4 p-5 sm:p-6">
                <CardTitle className="font-bold text-lg sm:text-xl">
                  Get Started
                </CardTitle>
                <ActionButtons />
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Core Technologies Section */}
        <Section className="mt-5 sm:mt-6 md:mt-8">
          <CoreTechnologies />
        </Section>

        {/* Quick Access & Status Cards */}
        <Section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mt-5 sm:mt-6 md:mt-8">
          {/* Quick Access - Experience & Sandbox */}
          <Card className="col-span-1 sm:col-span-2 lg:col-span-1">
            <CardContent className="space-y-4 sm:space-y-5 p-5 sm:p-6">
              <CardTitle className="text-base sm:text-lg font-bold">
                Quick Access
              </CardTitle>
              <div className="flex flex-col gap-3">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2 hover:bg-sky-500/10"
                >
                  <Briefcase className="text-sky-500 w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Experience</span>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2 hover:bg-purple-500/10"
                >
                  <Code className="text-purple-500 w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Sandbox</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Availability Status */}
          <Card>
            <CardContent className="h-full flex flex-col items-center gap-3 sm:gap-4 justify-center p-5 sm:p-6">
              <div className="relative">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full animate-ping bg-green-400 absolute"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500 relative"></div>
              </div>
              <div className="text-center space-y-1 sm:space-y-2">
                <h4 className="text-sm sm:text-base font-medium">
                  Available for Work
                </h4>
                <p className="text-xs sm:text-sm text-gray-500">
                  Open to new opportunities
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Connect Card */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
            <CardContent className="h-full flex flex-col items-center gap-3 sm:gap-4 justify-center p-5 sm:p-6">
              <Mail className="text-green-500 w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform" />
              <div className="text-center space-y-1 sm:space-y-2">
                <h4 className="text-sm sm:text-base font-medium">
                  Let's Connect
                </h4>
                <p className="text-xs sm:text-sm text-green-500">
                  Get in touch
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Placeholder Card (Replace with actual content) */}
          <Card>
            <CardContent className="p-5 sm:p-6">
              <CardTitle className="text-base sm:text-lg font-bold mb-3">
                Quick Access
              </CardTitle>
              <div className="text-sm text-gray-500">
                Additional content here
              </div>
            </CardContent>
          </Card>
        </Section>
      </div>
    </div>
  );
}
