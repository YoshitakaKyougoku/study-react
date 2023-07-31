"use client"

import Link from "next/link"
import { useSelectedLayoutSegment } from 'next/navigation'

export function Segment () {
    const segment = useSelectedLayoutSegment()
    
    return (
        <div className="opacity-75 space-x-10 " >
            <p className="absolute top-1 inset-x-1/2">{segment}</p>

            <Link className="transition ease-in-out delay-150 hover:text-black" href="/">
              app
            </Link>
            <Link className="transition ease-in-out delay-150 hover:text-black" href="/about">
              about
            </Link>
          </div>
    )
}