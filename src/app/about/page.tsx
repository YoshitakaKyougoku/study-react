"use client"

import { Main } from "../copornents/Main"

export default function Page (){
  return (
    <Main page="about"
          onClick ={() => alert("クリック")} />
    
  )
}