import Image from 'next/image';

export default function BrandsSection() {
  return (
    <section id="quem-somos" className="relative w-full min-h-screen bg-neutral-100 overflow-hidden py-12 sm:py-16 lg:py-20 xl:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1900px]">
        <div className="relative">
          <h2 className="text-center text-neutral-900 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium font-['Inter'] leading-relaxed sm:leading-9 mb-8 sm:mb-12 lg:mb-16 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto px-2">
            Somos a equipe visionária por detrás das marcas mais inovadoras do mundo:
          </h2>

          {/* Brands Grid - Responsive */}
          <div className="relative grid grid-cols-2 md:grid-cols-4 justify-items-center items-center gap-4 sm:gap-6 lg:gap-8 xl:gap-12 mb-12 sm:mb-16 lg:mb-20 px-2 sm:px-4">
            <div className="w-32 sm:w-44 md:w-52 lg:w-64 h-20 sm:h-28 lg:h-36 relative opacity-80 grayscale hover:grayscale-0 transition-all">
              <Image
                src="/guia-heineken.png"
                alt="Guia Heineken"
                fill
                className="object-contain"
              />
            </div>

            <div className="w-24 sm:w-32 md:w-36 lg:w-44 h-6 sm:h-7 lg:h-9 relative opacity-80 grayscale hover:grayscale-0 transition-all">
              <Image
                src="/onzex.png"
                alt="Onzex"
                fill
                className="object-contain"
              />
            </div>
            
            <div className="w-36 sm:w-48 md:w-60 lg:w-72 h-12 sm:h-16 lg:h-20 relative opacity-80 grayscale hover:grayscale-0 transition-all">
              <Image
                src="/heineken.png"
                alt="Heineken"
                fill
                className="object-contain"
              />
            </div>

            <div className="w-28 sm:w-36 md:w-44 lg:w-52 h-28 sm:h-36 md:h-44 lg:h-52 relative opacity-80 grayscale hover:grayscale-0 transition-all">
              <Image
                src="/n-mais.png"
                alt="N+"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Main Text */}
          <div className="relative max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto text-center mb-8 sm:mb-10 lg:mb-12 px-2">
            <div className="absolute top-1/2 left-0 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-gradient-to-b from-slate-500/20 to-cyan-400/40 rounded-full blur-3xl -z-10 pointer-events-none" />
            <p className="text-slate-950 text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold font-['Inter'] leading-relaxed sm:leading-[40px] md:leading-[50px] lg:leading-[60px] xl:leading-[72px] [text-shadow:_0px_9px_19px_rgb(0_0_0_/_0.10)]">
              Potencialize soluções digitais de próxima geração por meio de consultoria tecnológica estratégica, desenvolvimento avançado e arquiteturas escaláveis. Atuamos na transformação digital de negócios, entregando soluções eficientes, seguras e sustentáveis, alinhadas aos objetivos e desafios de cada organização.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button className="bg-[#004E6D] hover:bg-[#004E6D]/90 transition-colors rounded-2xl sm:rounded-3xl shadow-[0px_5px_11px_0px_rgba(0,0,0,0.10)] shadow-[0px_20px_20px_0px_rgba(0,0,0,0.09)] shadow-[0px_45px_27px_0px_rgba(0,0,0,0.05)] shadow-[0px_80px_32px_0px_rgba(0,0,0,0.01)] px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5">
              <span className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold font-['Inter']">
                Faça acontecer
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
