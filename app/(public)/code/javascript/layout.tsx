import React, { ReactNode, useState } from "react";
import JSNavDrawerCatto from "@/app/components/JavaScript/JSNavDrawerCatto/JSNavDrawerCatto";

type LayoutProps = {
  children: ReactNode;
}

const JavaScriptLayout = ({ children }: LayoutProps) => {

  return (
    <>
      <div className="flex h-full">
        {/* <aside className="lg:flex-[20] h-full"> */}
        <aside className="lg:flex-[20] h-full">
          <JSNavDrawerCatto />
        </aside>
        <article className="lg:flex-[80] h-full">
          {children}
        </article>
      </div>
      <hr className="m-3" />
    </>
  )
}

export default JavaScriptLayout;
