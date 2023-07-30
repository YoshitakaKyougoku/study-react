"use client"

import { useCallback, useState } from "react"
import { Main } from "../copornents/Main"

export default function Page (){
  const [foo, setfoo] =  useState(1)
  // let foo = 1;
  const handleClick = () => {
    setfoo((foo) => foo + 1);
    // foo = foo + 1;
  };
  return (
    <>
      <div className="text-3xl font-serif font-bold  text-center">
        <span className="transition duration-700 ease-in-out delay-150 hover:-translate-y-1 hover:scale-95">count  </span>{foo}
      </div>
      <Main page="about"
          onClick ={handleClick} />
    </>
    
    
  )
}