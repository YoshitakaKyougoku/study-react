import Image from 'next/image'
import { Linkarea } from "../copornents/Linkarea"
import { Logo } from '@/copornents/Logo '

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Logo page ="app" />

      <Linkarea />
    </main>
  )
}
