"use client"

import { useEffect } from "react"
import '@/src/app/globals.css'
import { Main } from "@/src/app/copornents/Main";

export default function Home() {

  useEffect(() => {
    document.body.style.backgroundColor = "red";

    return () => {
      document.body.style.backgroundColor = "yellow";
    };
  }, []);
    return (
    <Main page="app"/>
  )
}
