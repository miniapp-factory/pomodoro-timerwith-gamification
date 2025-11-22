"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function RewardSession() {
  const [completed, setCompleted] = useState(false);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    // Simulate a session that completes after 5 seconds
    const timer = setTimeout(() => {
      setCompleted(true);
      setPoints((prev) => prev + 10);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 mt-6">
      {completed ? (
        <div className="text-green-600 font-semibold">
          🎉 You earned {points} points!
        </div>
      ) : (
        <div className="text-muted-foreground">Completing session...</div>
      )}
      <Button variant="outline" disabled={!completed}>
        {completed ? "View Rewards" : "Waiting..."}
      </Button>
    </div>
  );
}
