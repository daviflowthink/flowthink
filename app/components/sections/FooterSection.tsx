'use client';

import Link from 'next/link';
import { useState, FormEvent } from 'react';

const imgChatGptImage = "/footer-illustration.png";
const imgWhatsAppIcon = "/whatsapp-icon.png";
const imgFlowthinkLogo = "/flowthink-logo-footer.png";
const imgGroup = "/footer-group-text.png";
const imgBackgroundGlow = "/footer-background-glow.png";

interface FormData {
  nome: string;
  sobrenome: string;
  email: string;
  empresa: string;
  pais: string;
  mensagem: string;
  newsletter: boolean;
}

export default function FooterSection() {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    sobrenome: '',
    email: '',
    empresa: '',
    pais: '',
    mensagem: '',
    newsletter: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5511999999999', '_blank');
  };

  return (
    <footer 
      id="contato"
      className="w-full relative overflow-hidden" 
    >
      {/* Background with glow effect */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[#01174c]" />
        <img 
          src={imgBackgroundGlow} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ minWidth: '100%', minHeight: '100%' }}
        />
      </div>
      
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(3, 8, 27, 0.00) 70%, #03081B 95%)'
        }}
      />
      
      <div className="max-w-[1920px] mx-auto relative">
        {/* Logo Section */}
        <section className="pt-16 sm:pt-24 lg:pt-[150px] pb-8 sm:pb-12 lg:pb-16 flex justify-center px-4">
          <div className="w-full max-w-[300px] sm:max-w-[500px] lg:max-w-[764px] h-auto aspect-[764/256] overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <img src={imgGroup} alt="We are" className="absolute left-0 top-0 w-[60.45%] h-[43.97%]" />
              <img src={imgFlowthinkLogo} alt="flowthink" className="absolute left-[11.78%] top-[60.49%] w-[80.89%] h-[39.48%]" />
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="pb-8 sm:pb-12 lg:pb-16 px-4 sm:px-6 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-24 items-center lg:items-start justify-center">
              {/* Text Content */}
              <div className="w-full lg:w-[512px] max-w-xl text-center lg:text-left">
                <h2 className="text-white text-xl sm:text-2xl lg:text-[28px] font-semibold font-['Inter'] leading-relaxed sm:leading-9 mb-4 sm:mb-6 lg:mb-8">
                  Expertise em tecnologia que transforma indústrias, cria experiências digitais eficientes e maximiza o desempenho de plataformas empresariais.
                </h2>
                
                <p className="text-white text-base sm:text-lg lg:text-xl font-normal font-['Inter'] leading-relaxed sm:leading-7 mb-4 sm:mb-6">
                  Transformamos negócios por meio da tecnologia, criando soluções digitais eficientes e plataformas que impulsionam resultados. Atuamos em diversos setores, oferecendo consultoria e desenvolvimento sob medida para apoiar empresas em sua transformação digital com foco em desempenho e crescimento.
                </p>
                
                <p className="text-[#3febbd] text-base sm:text-lg lg:text-xl font-bold font-['Inter'] leading-relaxed sm:leading-7">
                  Transformamos experiência em impacto real por meio da inovação digital.
                </p>
              </div>
              
              {/* Illustration */}
              <div className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[425px] h-[250px] sm:h-[300px] lg:h-[446px] relative overflow-hidden flex-shrink-0">
                <img
                  src={imgChatGptImage}
                  alt="Ilustração de transformação digital"
                  className="absolute w-[370.42%] h-[352.78%] left-[-135.83%] top-[-92.46%] max-w-none"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA and Form Section */}
        <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-0 relative">
              {/* Left Side - WhatsApp CTA */}
              <div className="w-full lg:w-[690px] bg-[#03081b] py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-16 flex flex-col items-center justify-center text-center rounded-t-2xl lg:rounded-t-none lg:rounded-l-2xl">
              <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold font-['Inter'] leading-tight lg:leading-[64px] mb-4 sm:mb-6 lg:mb-8 max-w-[471px]">
                Leve o seu negocio para outro nível
              </h3>
              
              <p className="text-white text-lg sm:text-xl lg:text-2xl font-extrabold font-['Inter'] mb-4 sm:mb-6 lg:mb-8 max-w-[481px]">
                Entre em Contato por nosso WhatsApp
              </p>
              
              <button
                onClick={openWhatsApp}
                className="bg-[#3febbd] hover:bg-[#35d4a8] transition-colors rounded-[20px] w-[200px] sm:w-[230px] lg:w-[255px] h-12 sm:h-14 lg:h-16 flex items-center justify-center cursor-pointer"
                aria-label="Contato via WhatsApp"
              >
                <img src={imgWhatsAppIcon} alt="WhatsApp" className="w-[60px] sm:w-[70px] lg:w-[85.095px] h-auto" />
              </button>
              </div>

              {/* OU separator */}
              <div className="hidden lg:flex w-auto bg-[#03081b] items-center justify-center px-8">
                <span className="text-white text-4xl lg:text-5xl font-semibold font-['Inter'] leading-[64px]">
                  OU
                </span>
              </div>
              
              {/* Mobile OU */}
              <div className="lg:hidden bg-[#03081b] py-4 sm:py-6 flex items-center justify-center">
                <span className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold font-['Inter']">
                  OU
                </span>
              </div>

              {/* Right Side - Contact Form */}
              <div className="w-full lg:w-[565px] bg-[#03081b] py-6 sm:py-8 px-4 sm:px-6 lg:px-12 rounded-b-2xl lg:rounded-b-none lg:rounded-r-2xl">
              <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-extrabold font-['Inter'] text-center mb-4 sm:mb-6 lg:mb-8">
                FALE CONOSCO
              </h3>
              
              <form onSubmit={handleSubmit} className="w-full max-w-[388px] mx-auto space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-white text-xs font-normal font-['Inter'] leading-6 sm:leading-7 mb-1">
                      Nome<span className="text-[#e50101]">*</span>
                    </label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      placeholder="Nome"
                      required
                      className="w-full h-10 sm:h-[47px] bg-white rounded-[5px] border border-[#69727d] px-3 sm:px-4 text-sm font-normal font-['Inter'] text-[#333] placeholder:text-[#9a9a9a] focus:outline-none focus:ring-2 focus:ring-[#3febbd]"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white text-xs font-normal font-['Inter'] leading-6 sm:leading-7 mb-1">
                      Sobrenome<span className="text-[#e50101]">*</span>
                    </label>
                    <input
                      type="text"
                      name="sobrenome"
                      value={formData.sobrenome}
                      onChange={handleInputChange}
                      placeholder="Sobrenome"
                      required
                      className="w-full h-10 sm:h-[47px] bg-white rounded-[5px] border border-[#69727d] px-3 sm:px-4 text-sm font-normal font-['Inter'] text-[#333] placeholder:text-[#9a9a9a] focus:outline-none focus:ring-2 focus:ring-[#3febbd]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-white text-xs font-normal font-['Inter'] leading-6 sm:leading-7 mb-1">
                      Email<span className="text-[#e50101]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      required
                      className="w-full h-10 sm:h-[47px] bg-white rounded-[5px] border border-[#69727d] px-3 sm:px-4 text-sm font-normal font-['Inter'] text-[#333] placeholder:text-[#9a9a9a] focus:outline-none focus:ring-2 focus:ring-[#3febbd]"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white text-xs font-normal font-['Inter'] leading-6 sm:leading-7 mb-1">
                      Empresa<span className="text-[#e50101]">*</span>
                    </label>
                    <input
                      type="text"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleInputChange}
                      placeholder="Empresa"
                      required
                      className="w-full h-10 sm:h-[47px] bg-white rounded-[5px] border border-[#69727d] px-3 sm:px-4 text-sm font-normal font-['Inter'] text-[#333] placeholder:text-[#9a9a9a] focus:outline-none focus:ring-2 focus:ring-[#3febbd]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white text-xs font-normal font-['Inter'] leading-6 sm:leading-7 mb-1">
                    País<span className="text-[#e50101]">*</span>
                  </label>
                  <select
                    name="pais"
                    value={formData.pais}
                    onChange={handleInputChange}
                    required
                    className="w-full h-10 sm:h-[47px] bg-white rounded-[5px] border border-[#69727d] px-3 sm:px-4 text-sm font-normal font-['Inter'] text-[#333] focus:outline-none focus:ring-2 focus:ring-[#3febbd] appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='black'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 12px center',
                      backgroundSize: '20px'
                    }}
                  >
                    <option value="">Escolha o seu país...</option>
                    <option value="BR">Brasil</option>
                    <option value="PT">Portugal</option>
                    <option value="US">Estados Unidos</option>
                    <option value="ES">Espanha</option>
                    <option value="AR">Argentina</option>
                    <option value="CL">Chile</option>
                    <option value="MX">México</option>
                    <option value="CO">Colômbia</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white text-xs font-normal font-['Inter'] leading-6 sm:leading-7 mb-1">
                    Mensagem<span className="text-[#e50101]">*</span>
                  </label>
                  <textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    placeholder="Mensagem"
                    required
                    className="w-full h-20 sm:h-[94px] bg-white rounded-[5px] border border-[#69727d] px-3 sm:px-4 py-2 text-sm font-normal font-['Inter'] text-[#333] placeholder:text-[#9a9a9a] focus:outline-none focus:ring-2 focus:ring-[#3febbd] resize-none"
                  />
                </div>

                <div className="flex items-start gap-2 sm:gap-3">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                    className="w-4 h-4 mt-1 bg-white rounded border border-[#717171] cursor-pointer accent-[#3febbd] flex-shrink-0"
                  />
                  <span className="text-white text-xs sm:text-sm font-normal font-['Inter'] leading-5 sm:leading-[22px]">
                    Inscreva-se com seu endereço de e-mail para receber o boletim informativo do FlowThink com atualizações, recursos valiosos e dicas úteis.
                  </span>
                </div>

                <div className="text-white text-xs sm:text-sm font-normal font-['Inter'] leading-5 sm:leading-[22px]">
                  Ao enviar este formulário, você confirma que concorda com os termos da{' '}
                  <Link href="/privacidade" className="text-[#3febbd] hover:underline">
                    política de privacidade
                  </Link>
                  {' '}da FlowThink.
                </div>

                <div className="flex justify-center pt-2 sm:pt-4">
                  <button
                    type="submit"
                    className="bg-[#3febbd] hover:bg-[#35d4a8] transition-colors rounded-[20px] w-20 sm:w-[86.59px] h-9 sm:h-10 text-center text-[#0f1014] text-xs sm:text-sm font-medium font-['Heebo'] leading-4 cursor-pointer"
                  >
                    Enviar
                  </button>
                </div>
              </form>
              </div>
            </div>
          </div>
        </section>

       

        {/* Navigation Bar */}
        <div className="w-full bg-[#060915] py-4 sm:py-6">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            {/* Left: Logo and Copyright */}
            <div className="flex flex-col gap-1 sm:gap-2 items-center sm:items-start text-center sm:text-left">
              <Link href="/" className="font-extrabold text-lg sm:text-xl lg:text-2xl text-white">FlowThink</Link>
              <p className="text-[#B8B8B8] font-['Heebo'] text-xs sm:text-[14px] font-normal leading-[14px]">
                Todos os direitos reservados 2025
              </p>
            </div>

            {/* Center: Navigation Links */}
            <nav aria-label="Primary" className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-8">
              <a href="#home" className="text-xs sm:text-sm md:text-base font-medium text-white hover:opacity-80 transition-opacity">
                Home
              </a>
              <Link href="/privacidade" className="text-xs sm:text-sm md:text-base font-medium text-white hover:opacity-80 transition-opacity">
                Política de privacidade
              </Link>
              <Link href="/cookies" className="text-xs sm:text-sm md:text-base font-medium text-white hover:opacity-80 transition-opacity">
                Política de Cookies
              </Link>
            </nav>

            {/* Right: Social Icons */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="#"
                title="Facebook"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 flex items-center justify-center rounded-full border border-white hover:bg-white/10 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-[18px] lg:h-[18px]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="white"/>
                </svg>
              </a>
              <a
                href="#"
                title="Instagram"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 flex items-center justify-center rounded-full border border-white hover:bg-white/10 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-[18px] lg:h-[18px]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="white"/>
                </svg>
              </a>
              <a
                href="#"
                title="YouTube"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 flex items-center justify-center rounded-full border border-white hover:bg-white/10 transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-[18px] lg:h-[18px]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="white"/>
                </svg>
              </a>
              <a
                href="#"
                title="Twitter"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 flex items-center justify-center rounded-full border border-white hover:bg-white/10 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-[18px] lg:h-[18px]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="white"/>
                </svg>
              </a>
              <a
                href="#"
                title="LinkedIn"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 flex items-center justify-center rounded-full border border-white hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-[18px] lg:h-[18px]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="white"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
