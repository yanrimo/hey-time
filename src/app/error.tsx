"use client";

import { useEffect } from "react";
import { Button } from "@/components/common/Button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/common/Card";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Card className="w-[90%] shadow-xl border-0">
      <CardHeader>
        <CardTitle className="text-center text-xl flex items-center justify-center gap-2 text-red-600">
          <AlertTriangle size={24} />
          エラーが発生しました
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-center">
        <p className="text-gray-600">
          {error.message || "予期しないエラーが発生しました"}
        </p>

        <div className="space-y-2">
          <Button asChild variant="outline" className="w-full">
            <Link href="/">ホームに戻る</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
