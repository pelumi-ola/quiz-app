import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function FancyButton({
  children,
  href,
  className = "",
  fullWidth = false,
  showArrow = true,
  icon = "/drop 1.svg",
  ...props
}) {
  const buttonClass = cn(
    "relative inline-flex items-center justify-center overflow-hidden",
    "bg-[#6B2A91] text-white font-bold whitespace-nowrap",
    "rounded-[18px]",
    "border-b-[6px] border-b-[#35104D]",
    "shadow-sm",
    "transition-all duration-200",
    "hover:bg-[#5D237F] active:translate-y-[2px] active:border-b-[3px]",
    "h-[56px] px-8 text-[20px]",
    fullWidth && "w-full",
    className
  );

  const content = (
    <button className={buttonClass} {...props}>
      <img
        src={icon}
        alt=""
        className="absolute left-[14px] top-[8px] w-[20px] h-[20px] object-contain"
      />

      <span className="flex items-center justify-center gap-2 pl-4 whitespace-nowrap leading-none">
        <span className="whitespace-nowrap">{children}</span>

        {showArrow && (
          <ArrowRight className="w-5 h-5 shrink-0" />
        )}
      </span>
    </button>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}