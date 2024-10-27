import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(
  ...classNames: Parameters<typeof clsx> & Parameters<typeof twMerge>
) {
  return twMerge(clsx(classNames));
}
