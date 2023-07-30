"use client"

import { useCallback, useEffect, useState } from "react"
import '@/src/app/globals.css'
import { Main } from "@/src/app/copornents/Main";

export default function Home() {
  const [text, setText] = useState("");
  
  const handleChange = useCallback((e: any) => {
    if (e.target.value.length > 5){
      alert("5文字以内にして下さい");
      return;
    }
    setText(e.target.value.trim());
  },[]);
  useEffect(() => {
    document.body.style.backgroundColor = "";

    return () => {
      document.body.style.backgroundColor = "cyan";
    };
  }, []);
  
    return (
      <>
        <input className="bg-slate-200 " type ="text" value={text} onChange={handleChange} />
        <Main page="app"/>
      </>
      
  )
}
