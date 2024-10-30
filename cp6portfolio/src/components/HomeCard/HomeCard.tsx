import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

export default function HomeCard(props: {
    linkCard: Url;
    tituloCard: string | null | undefined; 
}) {
    return (
        <div className="bg-gray-200 w-60 flex flex-col
        justify-center items-center gap-1 p-3 rounded-md shadow-xl">
            <h2 className="text-rosa font-montserrat font-black text-2xl">{props.tituloCard}</h2>
            <p className="text-preto font-montserrat font-thin 
            text-md px-4 flex justify-center text-center"
            >Para saber mais, clique no botão abaixo</p>
            <button className="bg-rosa rounded-md p-2 hover:scale-110">
                <Link href={props.linkCard} className="text-white font-montserrat font-medium">VEJA MAIS</Link>
            </button>
        </div>
    )
}