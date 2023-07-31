"use client"

import { useCallback, useEffect, useState } from "react"
import '@/src/app/globals.css'
import { Main } from "@/src/app/copornents/Main";

export default function Home() {
  const [array, setArray] = useState<string[]>([]);

  const [text, setText] = useState("");
  
  // テキストフォーム
  const handleChange = useCallback((e: any) => {
    if (e.target.value.length > 5){
      alert("5文字以内にして下さい");
      return;
    }
    setText(e.target.value.trim());
  },[]);

  // 追加
  const handleAdd = useCallback(() => {
    setArray((prevArray: string[]) => {
      if (prevArray.some(item => item === text)) {
        alert("same text");
        return prevArray;
      }
      return [...prevArray, text];
    })
  },[text])
  useEffect(() => {
    document.body.style.backgroundColor = "";

    return () => {
      document.body.style.backgroundColor = "cyan";
    };
  }, []);

    return (
      <>
        <input className="bg-slate-200 " type ="text" value={text} onChange={handleChange} />
        <button onClick={handleAdd}>add</button>
        <ul>
          {array.map(item => {
            return (
              <li key={item}>{item}</li>
            )
          })}
        </ul>
        <Main page="app"/>
      </>
      
  )
}
