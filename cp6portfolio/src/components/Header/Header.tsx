import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Logo from '../../img/logofiap.png'

export default function Header() {
  return (
    <header>
      <Image 
      src={Logo}
      width={100}
      height={50}
      alt={''} />
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
