"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/common/Card";
import { Timer } from "lucide-react";
import { Button } from "@/components/common/Button";
import TimeInput from "@/components/home/TimeInput";
import BaseAnimation from "@/components/common/BaseAnimation";
import { Label } from "@/components/common/Label";
import { Switch } from "@/components/common/Switch";

export default function HomePage() {
  const router = useRouter();
  const [time, setTime] = useState("00:00");
  const [useCurrentTime, setUseCurrentTime] = useState(true);

  const getCurrentTimeString = () => {
    const now = new Date();
    return `${now.getHours().toString().padStart(2, "0")}:${now
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  };

  const [baseTime, setBaseTime] = useState(() => getCurrentTimeString());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const [hours, minutes] = time.split(":").map(Number);

    if (isNaN(hours) || isNaN(minutes) || (hours === 0 && minutes === 0)) {
      alert("有効な値を入力してください。");
      return;
    }

    router.push(`/result?hours=${hours}&minutes=${minutes}`);
  };

  const handleUseCurrentTimeChange = (enabled: boolean) => {
    setUseCurrentTime(enabled);
    setBaseTime(getCurrentTimeString());
  };

  return (
    <BaseAnimation
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md flex justify-center"
    >
      <Card className="w-[90%] shadow-xl border-0">
        <CardHeader>
          <CardTitle className="text-center text-2xl flex items-center justify-center gap-2">
            <Timer size={32} color="#7c3aed" />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              何分後ですか？
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <BaseAnimation
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="space-y-3"
            >
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between">
                  <Label
                    htmlFor="use-current-time"
                    className="text-sm font-medium text-gray-700"
                  >
                    現在時刻を基準にする
                  </Label>
                  <Switch
                    id="use-current-time"
                    checked={useCurrentTime}
                    onCheckedChange={handleUseCurrentTimeChange}
                  />
                </div>

                {!useCurrentTime && (
                  <div className="pt-2 border-t border-gray-200 mt-2">
                    <TimeInput
                      value={baseTime}
                      onChange={setBaseTime}
                      labelClassName="text-sm font-medium text-gray-600 mb-1"
                      inputClassName="text-base"
                    />
                  </div>
                )}
              </div>
            </BaseAnimation>
            <BaseAnimation
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="space-y-2"
            >
              <TimeInput
                value={time}
                onChange={setTime}
                inputClassName="text-md"
                labelClassName="text-md"
              />
            </BaseAnimation>
            <BaseAnimation
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105"
              >
                計算する
              </Button>
            </BaseAnimation>
          </form>
        </CardContent>
      </Card>
    </BaseAnimation>
  );
}
