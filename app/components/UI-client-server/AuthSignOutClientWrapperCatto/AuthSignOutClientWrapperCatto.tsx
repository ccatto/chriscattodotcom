"use client";

import React from "react";

async function AuthSignOutClientWrapperCatto({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}

export default AuthSignOutClientWrapperCatto;
