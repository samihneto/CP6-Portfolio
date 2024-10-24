import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Logo from '../../img/logofiap.png'


export default function Header() {
  return (
    <header className="bg-[#181818] flex justify-center gap-x-10">
      <Image 
      src={Logo}
      width={150}
      height={50}
      alt={''} />
      <nav className="flex items-center">
        <ul className="flex space-x-4">
          <li className="text-white font-montserrat font-medium hover:font-black">
            <Link href="/">HOME</Link>
          </li>
          <li className="text-white font-montserrat font-medium hover:font-black">
            <Link href="/checkpoints">CHECKPOINT</Link>
          </li>
          <li className="text-white font-montserrat font-medium hover:font-black">
            <Link href="/global">GLOBAL SOLLUTION</Link>
          </li>
          <li className="text-white font-montserrat font-medium hover:font-black">
            <Link href="/sprints">CHALLENGE</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
