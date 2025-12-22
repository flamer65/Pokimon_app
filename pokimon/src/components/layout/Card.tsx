type CardDetail = {
    id: string;
    category: string;
    value: string;
}

export default function Card({ details, imageUrl }: { details: CardDetail[], imageUrl: string }) {
    return (
        <div className="w-[320px] h-[400px]  flex flex-col max-md:justify-center gap-2 p-2 rounded-md border-2 border-neutral-700">
            <div className="w-full h-[220px] bg-neutral-900  rounded-md"><img src={imageUrl} alt="" className="object-fill w-full h-full" /></div>
            {details.map((detail) => (
                <CardComponent key={detail.id} category={detail.category} value={detail.value} />
            ))}
        </div>
  )
}

function CardComponent({category, value}: {category: string, value: string}) {
    return (
            <div className="font-bold p-2 rounded-md flex items-center gap-2 text-neutral-300 text-[14px]">
                <p className="bg-red-700 py-1 px-2 xl:text-[16px] rounded-md">{`${category}: `}</p>
                <p className="xl:text-[18px] flex-1 truncate">{value}</p>
            </div>
                       
    )
}
