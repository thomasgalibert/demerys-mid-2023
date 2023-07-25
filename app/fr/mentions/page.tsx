import { berkeleyMono } from "@/app/styles/fonts"

export default function Solutions(){
  return(
    <article>
      <h1 className={`${berkeleyMono.className} text-2xl text-center mb-4`}>Mentions légales</h1>

      <p className="text-center">
        Société Demerys Investment <br />
        SARL au capital de 200 000 <br />
        SIRET : 803 315 225 RCS Béziers
      </p>

      <p className="text-center">
        23 avenue Auguste Albertini <br />
        Espace des Arènes <br />
        34500 Béziers, France.
      </p>

      <p className="text-center">
        Responsable de la publication : <br />
        M. Thomas GALIBERT <br />
        Site hébergé chez Vercel Inc. <br />
        440 N Barranca Ave #4133 Covina, CA 91723, USA <br />
        Technologie employée : Next.js.            
      </p>
    </article>
  )
}