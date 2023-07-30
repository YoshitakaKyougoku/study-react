"use client"

import { useCallback, useState } from "react"
import { Main } from "../copornents/Main"

export default function Page (){
  const [count, setCount] =  useState(1)
  
  const handleClick = useCallback(() => {
    if (count < 10){
      setCount((count) => count + 1);
    }
  },[count]);
  return (
    <>
      <div className="text-3xl font-serif font-bold  text-center">
        <span className="transition duration-700 ease-in-out delay-150 hover:-translate-y-1 hover:scale-95">count  </span>{count}
      </div>
      <Main page="about"
          onClick ={handleClick} />
    </>
    
    
  )
}