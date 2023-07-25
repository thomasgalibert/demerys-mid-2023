import GoogleAppointmentScript from "./google_appointment_script_ja"
import { berkeleyMono } from "./styles/fonts"

export default function ContactFormJa() {
  return (
    <div className="relative isolate bg-white">      
      <div className="">
        <p className="mt-2 text-lg leading-8 text-stone-600">
          私たちは商用目的でメールを使用しません。それらはあなたに対応するためだけに使用します。
        </p>
        <div className="mt-2 flex flex-col gap-16 sm:gap-y-10 lg:flex-row">
          <form action="#" method="POST" className="lg:flex-auto">
            <div className="grid grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-stone-900">
                  姓
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    required={true}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-stone-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-stone-900">
                  名
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    required={true}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-stone-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="budget" className="block sm:col-span-2 text-sm font-semibold leading-6 text-stone-900">
                  メール
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required={true}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-stone-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-stone-900">
                  メッセージ
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required={true}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-stone-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className="mt-2">
              <button
                type="submit"
                className={`${berkeleyMono.className} block w-full bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-800`}
              >
                フォームを送信する
              </button>
            </div>
            <p className="mt-4 text-sm leading-6 text-stone-500">
              送信をクリックするとあなたは私たちの個人{' '}
              <a href="/fr/privacy" className="font-semibold text-black">
                データポリシーに同意することになります。
              </a>
              .
            </p>
          </form>
          <div className="lg:mt-6 lg:w-80 lg:flex-none text-stone-500">
            <p className="text-sm">
              Société Demerys Investment <br />
              SARL au capital de 200 000 <br />
              SIRET : 803 315 225 RCS Béziers
            </p>

            <p className="text-sm">
              23 avenue Auguste Albertini <br />
              Espace des Arènes <br />
              34500 Béziers, France.
            </p>

            <p className="text-sm">
              Responsable de la publication : <br />
              M. Thomas GALIBERT <br />
              Site hébergé chez Vercel Inc. <br />
              440 N Barranca Ave #4133 Covina, CA 91723, USA <br />
              Technologie employée : Next.js.            
            </p>

            <GoogleAppointmentScript />
          </div>
        </div>
      </div>
    </div>
  )
}
