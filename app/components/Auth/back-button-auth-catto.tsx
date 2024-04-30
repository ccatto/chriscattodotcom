"use client";
import { Button } from "@/app/ui/button";
import Link from "next/link";
interface BackButtonProps {
  href: string;
  label: string;
}

export const BackButtonAuthCatto = ({
  href,
  label
}: BackButtonProps) => {
  return (
    <Button className="font-normal w-full">
      <Link href={href}>
        {label}
      </Link>
    </Button>
  );
}