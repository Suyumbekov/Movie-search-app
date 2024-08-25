"use client";
import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Error = ({ error }: { error: Error }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Alert variant="destructive" className="w-1/2" style={{ color: "red" }}>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error.message}</AlertDescription>
      </Alert>
    </div>
  );
};

export default Error;
