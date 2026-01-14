import Link from 'next/link';
import Image from 'next/image';

export default function PrivacidadePage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#01174c]" />
        <Image 
          src="/footer-bg.png"
          alt="" 
          fill
          className="object-cover opacity-80" 
          priority
        />
      </div>

      {/* Header Navigation */}
      <header className="sticky top-0 z-50 w-full py-4 sm:py-6 lg:py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col gap-4 lg:gap-6">
            {/* Logo */}
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2 sm:gap-3">
              <div className="relative w-[50px] h-[53px] sm:w-[65px] sm:h-[68px] lg:w-[85px] lg:h-[89px] flex-shrink-0">
                <Image
                  src="/logo-icon.png"
                  alt="FlowThink Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-white font-extrabold text-xl sm:text-2xl lg:text-3xl">FlowThink</span>
            </Link>

            {/* Mobile Menu Button */}
            <Link href="/" className="md:hidden text-white hover:text-white/80">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center justify-center">
              <div className="bg-[#03081B] rounded-full px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 flex gap-4 lg:gap-6 xl:gap-8">
                <Link href="/#home" className="font-bold text-sm sm:text-base lg:text-xl xl:text-2xl text-white hover:text-white/80 transition-colors whitespace-nowrap">
                  Home
                </Link>
                <Link href="/#servicos" className="font-bold text-sm sm:text-base lg:text-xl xl:text-2xl text-white hover:text-white/80 transition-colors whitespace-nowrap">
                  Serviços
                </Link>
                <Link href="/#quem-somos" className="font-bold text-sm sm:text-base lg:text-xl xl:text-2xl text-white hover:text-white/80 transition-colors whitespace-nowrap">
                  Quem somos
                </Link>
                <Link href="/#contato" className="font-bold text-sm sm:text-base lg:text-xl xl:text-2xl text-white hover:text-white/80 transition-colors whitespace-nowrap">
                  Contato
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pb-16 sm:pb-20 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {/* Title */}
          <div className="text-center py-12 sm:py-16 lg:py-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-tight">
              Declaração de Privacidade FlowThink
            </h1>
          </div>

          {/* Content */}
          <div className="text-white space-y-8 sm:space-y-10 lg:space-y-12 text-center">
            {/* Introduction */}
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed">
              A FlowThink respeita a sua privacidade e está comprometida com a proteção dos dados pessoais de todos os usuários que acessam nosso site, entram em contato conosco ou utilizam nossos serviços. Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos e protegemos suas informações, em conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018).
            </p>

            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold">
                1. Quem Somos
              </h2>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                A FlowThink é uma consultoria tecnológica especializada em estratégia digital, desenvolvimento avançado e arquiteturas escaláveis, atuando na transformação digital de negócios por meio de soluções eficientes, seguras e sustentáveis.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold">
                2. Quais dados são coletados
              </h2>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                Podemos coletar os seguintes dados pessoais, conforme sua interação com nosso site:
                Nome completo, Endereço de e-mail, Número de telefone / WhatsApp, Nome da empresa,
                Cargo ou função Informações fornecidas voluntariamente em formulários de contato.
                Dados técnicos como endereço IP, tipo de navegador e páginas acessadas (para fins estatísticos e de segurança).
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold">
                3. Como utilizamos seus dados
              </h2>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                Os dados coletados são utilizados para: Entrar em contato com você mediante solicitação.
                Responder dúvidas, solicitações ou propostas comerciais, Melhorar a experiência do usuário em nosso site, Cumprir obrigações legais e regulatórias, Garantir a segurança e funcionamento adequado da plataforma.
              </p>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed font-medium">
                A FlowThink não comercializa, aluga ou vende dados pessoais.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold">
                4. Compartilhamento de dados
              </h2>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                Seus dados poderão ser compartilhados apenas quando necessário: Com parceiros ou fornecedores essenciais à execução dos serviços Para cumprimento de obrigações legais ou determinações judiciais Para proteção dos direitos da FlowThink e de seus usuários.
              </p>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed font-medium">
                Sempre exigimos que terceiros sigam padrões adequados de segurança e confidencialidade.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold">
                5. Armazenamento e segurança
              </h2>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                Adotamos medidas técnicas e organizacionais para proteger seus dados contra acessos não autorizados, perda, uso indevido, alteração ou divulgação indevida, incluindo: Controle de acesso, Ambientes seguros Boas práticas de segurança da informação.
                Os dados são armazenados apenas pelo tempo necessário para cumprir as finalidades descritas nesta política.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold">
                6. Direitos do titular dos dados
              </h2>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                Você tem o direito de: Confirmar a existência de tratamento de seus dados Acessar, corrigir ou atualizar seus dados pessoais Solicitar a exclusão ou anonimização dos dados Revogar o consentimento a qualquer momento Solicitar a portabilidade dos dados, quando aplicável.
                Para exercer seus direitos, entre em contato conosco pelos canais indicados abaixo.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold">
                7. Uso de cookies
              </h2>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                Nosso site pode utilizar cookies para melhorar a navegação e a experiência do usuário. Você pode configurar seu navegador para recusar cookies, se desejar.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold">
                8. Alterações nesta Política
              </h2>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                A FlowThink poderá atualizar esta Política de Privacidade periodicamente para refletir melhorias, mudanças legais ou operacionais. Recomendamos que você revise este documento regularmente.
              </p>
            </section>

            {/* Section 9 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold">
                9. Contato
              </h2>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                Se tiver qualquer dúvida sobre esta Política de Privacidade ou sobre o tratamento dos seus dados pessoais, entre em contato conosco:
              </p>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                E-mail: contato@flowthink.com<br />
                WhatsApp: disponível em nosso site
              </p>
            </section>

            {/* Consentimento */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold">
                Consentimento
              </h2>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                Ao enviar qualquer formulário em nosso site, você declara que leu, compreendeu e concorda com os termos desta Política de Privacidade da FlowThink.
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-transparent py-4 sm:py-6">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            {/* Left: Logo and Copyright */}
            <div className="flex flex-col gap-1 sm:gap-2 items-center sm:items-start text-center sm:text-left">
              <Link href="/" className="font-extrabold text-lg sm:text-xl lg:text-2xl text-white">FlowThink</Link>
              <p className="text-[#B8B8B8] text-xs sm:text-sm font-normal">
                Todos os direitos reservados 2025
              </p>
            </div>

            {/* Center: Navigation Links */}
            <nav className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-8">
              <Link href="/#home" className="text-xs sm:text-sm md:text-base font-medium text-white hover:opacity-80 transition-opacity">
                Home
              </Link>
              <Link href="/privacidade" className="text-xs sm:text-sm md:text-base font-medium text-white hover:opacity-80 transition-opacity">
                Política de privacidade
              </Link>
              <Link href="/privacidade" className="text-xs sm:text-sm md:text-base font-medium text-white hover:opacity-80 transition-opacity">
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
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="white"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
