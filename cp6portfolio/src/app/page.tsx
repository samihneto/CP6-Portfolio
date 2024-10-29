import HomeCard from "@/components/HomeCard/HomeCard";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center p-6 gap-10">
      <h1 className="font-montserrat font-black text-6xl text-black">PORTFÓLIO FIAP</h1>
      <div className="flex flex-row gap-12">
        <HomeCard linkCard="/checkpoints" tituloCard="CHECKPOINTS" />
        <HomeCard linkCard="/global" tituloCard="GLOBAL" />
        <HomeCard linkCard="/sprints" tituloCard="CHALLENGE" />
      </div>
      {/* Tabela */}
    </div>
  )
}
