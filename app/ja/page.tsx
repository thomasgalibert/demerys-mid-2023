import { berkeleyMono } from '@/app/styles/fonts'
import Image from 'next/image'
import ban from '@/public/images/ban_demerys.jpg'
import happy from '@/public/images/happy.jpg'
import developer from '@/public/images/developper.jpg'
import privacy from '@/public/images/privacy.jpg'
import relations from '@/public/images/relations.jpg'
import Divider from '@/app/divider'
import ContactForm from '@/app/contact_form_ja'

const features = [
  {
    name: "使命",
    description: "私たちの使命は、あなたのビジネスに真の価値を付加することです。イベントストーミングとドメイン駆動設計を利用して、あなたの特定のニーズに対応するカスタムソフトウェアソリューションを作成します。",
    image: happy,
    cta: "もっと詳しく",
    cta_url: "/ja/team",
  },

  {
    name: "製品",
    description: "私たちのERPソフトウェアがあなたのビジネスをどのように変革できるかを発見してください。直感的で使いやすい設計が、ビジネスの運用を効率的に管理し、時間を節約し、利益性を向上させるのに役立ちます。",
    image: developer,
    cta: "もっと詳しく",
    cta_url: "/ja/solutions",
  },

  {
    name: "サービス",
    description: "ソフトウェアソリューションに加えて、情報システムの最適化を支援するための一連のコンサルティングサービスを提供しています。ソフトウェアアーキテクチャ、開発コンサルティング、またはデータプライバシーの準拠に関する支援が必要であろうと、私たちはここで支えています。",
    image: relations,
    cta: "もっと詳しく",
    cta_url: "/ja/services",
  },

  {
    name: "データプライバシー",
    description: "労働法と知的財産専門の法律事務所とのパートナーシップのおかげで、私たちはまたすべてのデータプライバシーの準拠問題についてあなたにアドバイスするためにここにいます。",
    image: privacy,
    cta: "もっと詳しく",
    cta_url: "/ja/contact",
  },

]

export default function HomeEn() {
  return (
    <article>
      <h1 className={`${berkeleyMono.className} text-2xl text-center`}>
      DEMERYSでビジネスを次のレベルに引き上げましょう。ERPソリューションとカスタマイズされたコンサルティングサービスの信頼できるパートナーです
      </h1>

      <Image src={ban} alt={"Développement et architecture logicielle"} className='my-8' />

      <h2 className={`text-lg text-stone-500 text-center`}>
      10年近くにわたり、当社は革新的なERPソフトウェアとソフトウェアアーキテクチャの専門知識を駆使して、中小企業（SME）のビジネスオペレーションを最適化してきました。
      </h2>

      <Divider title="私たちの製品とサービス" />

      <div className='grid sm:grid-cols-2 gap-4'>
        {features.map((feature) => (
          <div key={feature.name} className='border border-stone-300 p-10 hover:shadow-md transition-shadow'>
            <div className="flex flex-col h-full justify-between">
              <div>
                <Image src={feature.image} alt={feature.name} className='w-full h-48' />
                <h3 className={`${berkeleyMono.className} text-xl text-center mt-3`}>
                  {feature.name}
                </h3>
                <p className={`text-left text-sm hyphens-auto`} lang='fr'>
                  {feature.description}
                </p>
              </div>
              <div className="flex justify-end">
                <a href={feature.cta_url} 
                   className={`${berkeleyMono.className} bg-stone-950 text-white text-sm py-1 px-2 flex items-center hover:pr-4 transition-all`}>
                   <span className='inline-flex'>{feature.cta}</span>
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-2 w-3 h-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Divider title="メッセージを送ってください" />

      <ContactForm />

    </article>
  )
}