import type { StudentPaymentMethodId } from "@/types/student-payment-history.types";
import { cn } from "@/utils";

function BkashLogo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-8 min-w-[72px] items-center justify-center rounded-lg bg-[#e2136e] px-3 text-[12px] font-black tracking-tight text-white",
        className
      )}
    >
      bKash
    </span>
  );
}

function NagadLogo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-8 min-w-[72px] items-center justify-center rounded-lg bg-[#f6921e] px-3 text-[12px] font-black tracking-tight text-white",
        className
      )}
    >
      Nagad
    </span>
  );
}

function RocketLogo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-8 min-w-[72px] items-center justify-center rounded-lg bg-[#8b3f98] px-3 text-[12px] font-black tracking-tight text-white",
        className
      )}
    >
      Rocket
    </span>
  );
}

function VisaLogo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-8 min-w-[72px] items-center justify-center rounded-lg bg-[#1a1f71] px-3 text-[12px] font-black italic tracking-tight text-white",
        className
      )}
    >
      VISA
    </span>
  );
}

function MastercardLogo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex h-8 min-w-[72px] items-center justify-center gap-0.5", className)}>
      <span className="h-5 w-5 rounded-full bg-[#eb001b]" />
      <span className="-ml-3 h-5 w-5 rounded-full bg-[#f79e1b]" />
    </span>
  );
}

const paymentMethodLogos: Record<StudentPaymentMethodId, React.ReactNode> = {
  bkash: <BkashLogo />,
  nagad: <NagadLogo />,
  rocket: <RocketLogo />,
  visa: <VisaLogo />,
  mastercard: <MastercardLogo />,
};

interface PaymentHistoryPaymentMethodProps {
  method: StudentPaymentMethodId;
  className?: string;
}

export function PaymentHistoryPaymentMethod({
  method,
  className,
}: PaymentHistoryPaymentMethodProps) {
  return <div className={cn("flex items-center", className)}>{paymentMethodLogos[method]}</div>;
}
