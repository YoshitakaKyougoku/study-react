import { Linkarea } from "@/src/app/copornents/Linkarea";
import { Logo } from "@/src/app/copornents/Logo ";

export function Main(props: any) {
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <Logo page ={props.page}
            onClick = {props.onClick}
      >
        <code className="font-mono font-bold">{props.page}/page.tsx</code>
      </Logo>

      <Linkarea />
    </main>
  )
}
