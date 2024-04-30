"use client";

import { useRouter } from "next/navigation";

interface HeaderAuthProps {
  label: string;
};

export const HeaderAuthCatto = ({
  label,
}: HeaderAuthProps) => {
  return (
<div className="w-full flex flex-col gap-y-4 items-center">
  <h1 className="text-3xl font-semibold">
    🔐 Auth
  </h1>
  <p className="text-muted-foreground text-sm">
    {label}
  </p>
</div>
  );
};