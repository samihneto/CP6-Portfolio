import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/checkpoints">Checkpoints</Link>
          </li>
          <li>
            <Link href="/globals">Global Sollutions</Link>
          </li>
          <li>
            <Link href="/sprints">Challenge Sprints</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
