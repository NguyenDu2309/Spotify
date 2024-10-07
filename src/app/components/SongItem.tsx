"use client"

import {Song} from "../../../types"
import useLoadImage from "../hooks/useLoadingImage";
import Image from "next/image"
interface SongItemProps{
    data: Song;
    onClick: (id:string) => void
}

const SongItem: React.FC<SongItemProps> = ({
    data,
    onClick
}) => {
  const imagePath = useLoadImage(data)
  return (
    <div onClick={() => onClick(data.id)}
      className="relative gruop flex flex-col items-center rounded-md justify-center overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3">
      

      <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
        <Image className="object-cover" src={imagePath || '/images/liked.jpg'} fill alt="Image"/>
      </div>
      <div className="flex flex-col items-start w-full p-4 gap-y-1">
          <p className="font-semibold truncate w-full text-white ">
            {data.title}
          </p>
          <p className="text-neutral-400 text-sm pb-4 w-full truncate ">
            By {data.author}
          </p>
      </div>
    </div>
  )
}

export default SongItem