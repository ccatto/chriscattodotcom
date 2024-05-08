'use client';

import { useRouter } from 'next/navigation';

interface HeaderAuthProps {
  label: string;
}

export const HeaderAuthCatto = ({ label }: HeaderAuthProps) => {
  return (
    <div className="flex w-full flex-col items-center gap-y-4">
      <h1 className="text-3xl font-semibold">🔐 Auth</h1>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};
