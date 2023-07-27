import { Logo } from "@/copornents/Logo "
import { Linkarea } from "../../copornents/Linkarea"

export default function Page (){
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <Logo page="about" />
      <Linkarea />
    </main>
    
  )
}