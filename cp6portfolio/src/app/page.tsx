import HomeCard from "@/components/HomeCard/HomeCard";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center p-6 gap-12">
      <h1 className="font-montserrat font-black text-4xl text-black">Portfólio FIAP</h1>
      <div className="flex flex-row gap-12">
        <HomeCard linkCard="/checkpoints" tituloCard="Checkpoints" />
        <HomeCard linkCard="/global" tituloCard="Global" />
        <HomeCard linkCard="/sprints" tituloCard="Challenge" />
      </div>
      {/* Tabela */}
    </div>
  )
}
