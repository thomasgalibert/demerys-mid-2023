import Image from "next/image"
import frFlag from "../public/images/flags/fr.svg"
import ukFlag from "../public/images/flags/uk.svg"
import jpFlag from "../public/images/flags/jp.svg"

export default function Flags() {
  return(
    <div className="absolute top-2 right-2">
      <div className="justify-end flex items-center space-x-2">
        <a href="/"><Image className="w-6 h-6" src={frFlag} alt="french flag"/></a>
        <a href="/en"><Image className="w-6 h-6" src={ukFlag} alt="union jack flag"/></a>
        <a href="/ja"><Image className="w-6 h-6" src={jpFlag} alt="japanses flag"/></a>
      </div>
    </div>
  )
}