"use client";
import { useEffect, useState } from "react";

import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Offline = ({ children }: { children: React.ReactNode }) => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return (
    <div>
      {!isOnline && (
        <div className="">
          <Alert
            variant="destructive"
            className="w-full"
            style={{ color: "red" }}
          >
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              You are currently offline. Please check your internet connection.
            </AlertDescription>
          </Alert>
        </div>
      )}
      <div>{children}</div>
    </div>
  );
};

export default Offline;
