import BaseAnimation from "@/components/common/BaseAnimation";
import { Button } from "@/components/common/Button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/common/Card";
import { add, format } from "date-fns";
import { TZDate } from "@date-fns/tz";
import Link from "next/link";

type Props = {
  searchParams: Promise<{
    hours?: string;
    minutes?: string;
  }>;
};

export default async function ResultPage({ searchParams }: Props) {
  const { hours: paramsHours, minutes: paramsMinutes } = await searchParams;
  // TODO: 日付共通処理で共通化したい
  const currentDate = new TZDate(new Date(), "Asia/Tokyo");
  const formattedCurrentDate = format(currentDate, "H時m分");

  const hours = parseInt(paramsHours || "0", 10);
  const minutes = parseInt(paramsMinutes || "0", 10);

  if (isNaN(hours) || isNaN(minutes))
    throw new Error("時間と分の両方を指定してください");

  const newDate = add(currentDate, {
    hours,
    minutes,
  });

  const formattedDate = format(newDate, "H時m分");

  return (
    <BaseAnimation
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md flex justify-center"
    >
      <Card className="w-[90%] shadow-xl border-0">
        <CardHeader>
          <CardTitle className="text-center text-xl">
            {formattedCurrentDate}から
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-center">
          <BaseAnimation
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-2"
          >
            <p className="text-gray-600 text-lg">
              {hours}時間{minutes}分後は
            </p>
          </BaseAnimation>

          <BaseAnimation
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100 text-3xl">
              {formattedDate}
            </div>
          </BaseAnimation>

          <BaseAnimation
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="text-gray-500 mt-4"
          >
            <Button>
              <Link href="/">もどる</Link>
            </Button>
          </BaseAnimation>
        </CardContent>
      </Card>
    </BaseAnimation>
  );
}
