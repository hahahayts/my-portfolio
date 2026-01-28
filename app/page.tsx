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
    <div className="min-h-screen  flex justify-center items-center">
      <div className="">
        <Section className="grid grid-cols-2 gap-10 ">
          {/* Profile Card */}
          <Card className="">
            <CardContent className="flex flex-col items-center gap-4">
              <div className="h-[150px] w-[150px] rounded-full overflow-hidden">
                <Image
                  alt="me"
                  src={"/images/me.jpg"}
                  width={150}
                  height={150}
                  className="rounded-full object-cover"
                />
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-semibold">John Jeric Polison</h2>
                <h3 className="text-xl font-semibold text-sky-500">
                  Web Developer
                </h3>
              </div>
              <p className="text-gray-400 text-center">
                Passionate about building modern, scalable, and maintainable web
                applications as a full-stack developer, leveraging React,
                Next.js, Laravel, Inertia JS and AI-driven solutions.
              </p>
            </CardContent>
          </Card>

          {/* Stats & Action Column */}
          <div className=" flex flex-col gap-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
            <Card className="h-full flex-1">
              <CardContent className="flex flex-col gap-4 h-full">
                <CardTitle className="font-bold text-xl">Get Started</CardTitle>
                <ActionButtons />
              </CardContent>
            </Card>
          </div>
        </Section>

        <Section className=" mt-5">
          <CoreTechnologies />
        </Section>
        <Section className="grid grid-cols-4 gap-4  mt-5">
          <Card>
            <CardContent className="space-y-5">
              <CardTitle className="text-lg font-bold">Quick Access</CardTitle>
              <div className="flex flex-col gap-3 ">
                <Button variant="outline" className="w-full bg-">
                  <Briefcase className="text-sky-500" />
                  <span>Experience</span>
                </Button>
                <Button variant="outline" className="w-full">
                  <Code className="text-purple-500" />
                  <span>Sandbox</span>
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="h-full flex flex-col items-center gap-4 justify-center">
              <div className="w-[10] h-[10] rounded-full animate-ping  bg-green-400"></div>
              <div className="text-center space-y-2">
                <h4>Available for Work</h4>
                <p className="text-sm text-gray-500">
                  Open to new opportunities
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="h-full flex flex-col items-center gap-4 justify-center">
              <Mail className="text-green-500" />
              <div className="text-center space-y-2">
                <h4>Let's Connect</h4>
                <p className="text-sm text-green-500">Get in touch</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <CardTitle>Quick Access</CardTitle>
              <div>bro bro</div>
            </CardContent>
          </Card>
        </Section>
      </div>
    </div>
  );
}
