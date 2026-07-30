"use client";

import dynamic from "next/dynamic";

const GlobalScene = dynamic(() => import("./global-scene").then(mod => mod.GlobalScene), {
  ssr: false,
});

export function GlobalSceneWrapper() {
  return <GlobalScene />;
}
