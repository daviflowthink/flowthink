'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full min-h-screen md:min-h-[800px] lg:min-h-[1000px] xl:min-h-[1165px] shadow-[0px_530px_148px_0px_rgba(0,0,0,0),0px_339px_136px_0px_rgba(0,0,0,0.01),0px_191px_114px_0px_rgba(0,0,0,0.05),0px_85px_85px_0px_rgba(0,0,0,0.09),0px_21px_47px_0px_rgba(0,0,0,0.1)]">
      {/* Background Video */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover md:object-center object-[center_20%] z-0"
        >
          <source src="/document_1440w-3WBM9YeuYPs (1).mp4" type="video/mp4" />
          Seu navegador não suporta vídeo HTML5.
        </video>

        {/* Overlay for better text readability */}
        <div className="absolute bg-[#03081b]/60 inset-0 z-10" />
        <div className="absolute inset-0 opacity-[0.61] overflow-hidden">
          <div className="absolute h-full w-full bg-gradient-to-br from-[#0a1929] via-[#03081b] to-[#0a1929]" />
        </div>
        {/* Decorative Ellipse */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="relative w-full h-full max-w-[600px] max-h-[600px] lg:max-w-[800px] lg:max-h-[800px]">
            <div className="absolute inset-[-36.76%]">
              <div className="block size-full rounded-full bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-transparent blur-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation - Hidden on mobile, visible on tablet+ */}
      <nav className="hidden md:flex absolute top-6 lg:top-12 xl:top-[81px] left-1/2 -translate-x-1/2 bg-[#03081B]/80 backdrop-blur-md rounded-full px-6 lg:px-8 py-3 lg:py-4 gap-4 lg:gap-6 xl:gap-8 z-20 border border-white/10 shadow-2xl transition-all duration-300 hover:bg-[#03081B]/90 hover:shadow-cyan-500/20 hover:border-cyan-400/30">
        <a href="#home" className="font-bold text-base lg:text-xl xl:text-2xl text-white hover:text-cyan-400 transition-all duration-300 hover:scale-110 whitespace-nowrap">
          Home
        </a>
        <a href="#servicos" className="font-bold text-base lg:text-xl xl:text-2xl text-white hover:text-cyan-400 transition-all duration-300 hover:scale-110 whitespace-nowrap">
          Serviços
        </a>
        <a href="#quem-somos" className="font-bold text-base lg:text-xl xl:text-2xl text-white hover:text-cyan-400 transition-all duration-300 hover:scale-110 whitespace-nowrap">
          Quem somos
        </a>
        <a href="#contato" className="font-bold text-base lg:text-xl xl:text-2xl text-white hover:text-cyan-400 transition-all duration-300 hover:scale-110 whitespace-nowrap">
          Contato
        </a>
      </nav>


      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center min-h-screen md:min-h-[800px] lg:min-h-[1000px] xl:min-h-[1165px] px-4 sm:px-6 lg:px-8 pt-20 md:pt-32 pb-20 md:pb-16 lg:pb-20">
        {/* Content Wrapper */}
        <div className="flex-1 flex flex-col items-center justify-center">
          {/* Logo Section */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-8 lg:mb-12">
          {/* Logo Icon */}
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[85px] lg:h-[89px]">
            <Image
              src="/logo-icon.png"
              alt="FlowThink Logo Icon"
              fill
              className="object-contain"
            />
          </div>
          
          {/* Logo Text */}
          <div className="relative">
            <h1 className="text-white font-extrabold text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight">
              FlowThink
            </h1>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center max-w-[90%] sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-[822px] mb-10 sm:mb-12 lg:mb-16">
          <p className="font-bold text-xl sm:text-xl md:text-2xl lg:text-[28px] xl:text-[32px] text-white leading-snug sm:leading-normal">
            Inovação tecnologica que transcende o digital
          </p>
        </div>
        </div>

        {/* CTA Button */}
        <a
          href="#contato"
          className="px-10 sm:px-12 md:px-16 lg:px-20 xl:px-28 py-4 sm:py-4 bg-[#1a7a99]/70 hover:bg-[#1a7a99] text-white font-bold text-lg sm:text-lg md:text-xl rounded-full shadow-lg shadow-cyan-500/25 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-400/40 hover:scale-105 hover:-translate-y-1 inline-block cursor-pointer border border-cyan-400/20 hover:border-cyan-400/60"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
        >
          Fale conosco
        </a>
      </div>
    </section>
  );
}
