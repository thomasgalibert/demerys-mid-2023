import { berkeleyMono } from "./styles/fonts"

export default function GoogleAppointmentScript() {
  return (
    <div className="my-4">
      <a href="https://calendar.app.google/9mThT7G5vMMeCXuL6" target="_blank" 
          className={`${berkeleyMono.className} bg-sky-600 text-white text-sm py-2.5 px-3.5 flex items-center justify-end hover:pr-4 transition-all`}>
          <span className='inline-flex'>Prendre RDV en ligne</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-2 w-3 h-3">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
        </svg>
      </a>
    </div>
    
  )
}