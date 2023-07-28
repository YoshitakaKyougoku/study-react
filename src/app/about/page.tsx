"use client"

import { useCallback } from "react"
import { Main } from "../copornents/Main"

export default function Page (){
  const handleClick = useCallback(() => {
    alert("クリック");
  }, []);
  return (
    <Main page="about"
          onClick ={handleClick} />
    
  )
}