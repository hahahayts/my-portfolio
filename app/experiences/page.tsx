import { AlertTriangle } from "lucide-react";

export default async function Experience() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="space-y-4">
        <AlertTriangle className="text-orange-500 mx-auto" size={90} />
        <p className="text-5xl font-semibold text-orange-500">
          This Page is under construction
        </p>
      </div>
    </div>
  );
}
