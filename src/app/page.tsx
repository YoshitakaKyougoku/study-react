"use client"

import '@/src/app/globals.css'
import { Main } from "@/src/app/copornents/Main";
import { useInputArray } from "@/src/app/hooks/useInputArray";
import { useBgChange } from "@/src/app/hooks/useBgChange";

export default function Home() {
  const {array, text, handleChange, handleAdd} = useInputArray()
  useBgChange()
  
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
