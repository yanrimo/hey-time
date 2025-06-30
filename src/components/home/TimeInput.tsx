import { cn } from "@/lib/utils";
import { Input } from "@/components/common/Input";
import { Label } from "@/components/common/Label";

type Props = {
  value: string;
  onChange: (value: string) => void;
  labelClassName?: string;
  inputClassName?: string;
};

export default function TimeInput({
  value,
  onChange,
  labelClassName,
  inputClassName,
}: Props) {
  return (
    <>
      <Label
        htmlFor="time"
        className={cn("font-medium", "text-gray-700", labelClassName)}
      >
        時間を選択
      </Label>
      <Input
        id="time"
        type="time"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn("font-mono", inputClassName)}
      />
    </>
  );
}
