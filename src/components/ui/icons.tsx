import { twMerge } from "tailwind-merge";

export function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={twMerge("mt-0.5 size-5 shrink-0", className)}
    >
      <path d="M4 12.5l5 5L20 6.5" />
    </svg>
  );
}

export function CrossIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      className={twMerge("mt-0.5 size-4 shrink-0", className)}
    >
      <path d="M5 5l14 14M19 5L5 19" />
    </svg>
  );
}
