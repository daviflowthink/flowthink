import Image from 'next/image';

const imgHome = "/home-background.png";
const imgChatGptImage14DeDezDe20251513261 = "/flowthink-icon.png";
const imgFlowThink = "/flowthink-logo.png";
const imgEllipse1 = "/hero-ellipse.png";

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full min-h-screen md:min-h-[800px] lg:min-h-[1000px] xl:min-h-[1165px] shadow-[0px_530px_148px_0px_rgba(0,0,0,0),0px_339px_136px_0px_rgba(0,0,0,0.01),0px_191px_114px_0px_rgba(0,0,0,0.05),0px_85px_85px_0px_rgba(0,0,0,0.09),0px_21px_47px_0px_rgba(0,0,0,0.1)]">
      {/* Background */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#03081b] inset-0" />
        <div className="absolute inset-0 opacity-[0.61] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              alt="Home Background"
              src={imgHome}
              fill
              className="object-cover"
              priority
              quality={90}
            />
          </div>
        </div>
        {/* Decorative Ellipse */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="relative w-full h-full max-w-[600px] max-h-[600px] lg:max-w-[800px] lg:max-h-[800px]">
            <div className="absolute inset-[-36.76%]">
              <img alt="" className="block max-w-none size-full" src={imgEllipse1} />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation - Hidden on mobile, visible on tablet+ */}
      <nav className="hidden md:flex absolute top-6 lg:top-12 xl:top-[81px] left-1/2 -translate-x-1/2 bg-[#03081B] rounded-full px-6 lg:px-8 py-3 lg:py-4 gap-4 lg:gap-6 xl:gap-8 z-20">
        <a href="#home" className="font-bold text-base lg:text-xl xl:text-2xl text-white hover:text-white/80 transition-colors whitespace-nowrap">
          Home
        </a>
        <a href="#servicos" className="font-bold text-base lg:text-xl xl:text-2xl text-white hover:text-white/80 transition-colors whitespace-nowrap">
          Serviços
        </a>
        <a href="#quem-somos" className="font-bold text-base lg:text-xl xl:text-2xl text-white hover:text-white/80 transition-colors whitespace-nowrap">
          Quem somos
        </a>
        <a href="#contato" className="font-bold text-base lg:text-xl xl:text-2xl text-white hover:text-white/80 transition-colors whitespace-nowrap">
          Contato
        </a>
      </nav>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center min-h-screen md:min-h-[800px] lg:min-h-[1000px] xl:min-h-[1165px] px-4 sm:px-6 lg:px-8 pt-16 md:pt-32 pb-12 md:pb-16 lg:pb-20">
        {/* Content Wrapper */}
        <div className="flex-1 flex flex-col items-center justify-center">
          {/* Logo Section */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 lg:mb-12">
          {/* Logo Icon */}
          <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[85px] lg:h-[89px] overflow-hidden pointer-events-none">
            <Image
              alt="FlowThink Logo Icon"
              src={imgChatGptImage14DeDezDe20251513261}
              fill
              className="object-contain"
              priority
            />
          </div>
          
          {/* Logo Text */}
          <div className="relative w-32 h-8 sm:w-48 sm:h-12 md:w-72 md:h-14 lg:w-96 lg:h-16 xl:w-[504px] xl:h-[79px]">
            <img
              alt="FlowThink"
              className="block max-w-none size-full object-contain"
              src={imgFlowThink}
            />
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center max-w-[90%] sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-[822px] mb-8 sm:mb-12 lg:mb-16">
          <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-[28px] xl:text-[32px] text-white leading-snug sm:leading-normal">
            Inovação tecnologica que transcende o digital
          </p>
        </div>
        </div>

        {/* CTA Button */}
        <button className="px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28 py-3 sm:py-4 bg-[#1a7a99] hover:bg-[#15647d] text-white font-bold text-base sm:text-lg md:text-xl rounded-full shadow-lg transition-all duration-300 hover:shadow-xl">
          Fale conosco
        </button>
      </div>
    </section>
  );
}
