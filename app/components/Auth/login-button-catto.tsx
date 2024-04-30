"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect",
  asChild? : boolean;
};

export const LoginButtonCatto = ({
  children,
  mode = "redirect",
  asChild
} : LoginButtonProps) => {
  const router = useRouter();

  const onClick = () => {
    console.log("LOGIN Click YO");
    router.push("/auth/login");
  }

  if (mode === 'modal') {
    return (
      <span>
        #Todo: implement modal
      </span>
    )
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
