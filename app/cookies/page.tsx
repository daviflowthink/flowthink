import Link from 'next/link';
import Image from 'next/image';

export default function CookiesPage() {
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
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-[85px] lg:h-[89px] flex-shrink-0">
                <Image
                  src="/logo-icon.png"
                  alt="FlowThink Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 241 38" fill="none" className="w-[140px] h-[22px] sm:w-[180px] sm:h-[28px] lg:w-[241px] lg:h-[37.776px]">
                <path d="M0 37.2595V2.01356H23.4036V8.15751H7.47327V16.556H21.8503V22.6999H7.47327V37.2595H0Z" fill="white"/>
                <path d="M35.6447 2.01356V37.2595H28.2923V2.01356H35.6447Z" fill="white"/>
                <path d="M53.5124 37.7758C50.8315 37.7758 48.513 37.2079 46.5569 36.072C44.6124 34.9247 43.1108 33.3299 42.0522 31.2876C40.9937 29.2339 40.4644 26.8532 40.4644 24.1455C40.4644 21.4149 40.9937 19.0284 42.0522 16.9862C43.1108 14.9325 44.6124 13.3377 46.5569 12.2018C48.513 11.0545 50.8315 10.4808 53.5124 10.4808C56.1933 10.4808 58.5061 11.0545 60.4506 12.2018C62.4067 13.3377 63.914 14.9325 64.9726 16.9862C66.0311 19.0284 66.5604 21.4149 66.5604 24.1455C66.5604 26.8532 66.0311 29.2339 64.9726 31.2876C63.914 33.3299 62.4067 34.9247 60.4506 36.072C58.5061 37.2079 56.1933 37.7758 53.5124 37.7758ZM53.5469 32.0965C54.7666 32.0965 55.7849 31.7523 56.6018 31.0639C57.4188 30.364 58.0343 29.4118 58.4486 28.2071C58.8743 27.0024 59.0872 25.6313 59.0872 24.0939C59.0872 22.5565 58.8743 21.1854 58.4486 19.9807C58.0343 18.776 57.4188 17.8237 56.6018 17.1239C55.7849 16.424 54.7666 16.0741 53.5469 16.0741C52.3158 16.0741 51.2802 16.424 50.4403 17.1239C49.6118 17.8237 48.9847 18.776 48.559 19.9807C48.1448 21.1854 47.9377 22.5565 47.9377 24.0939C47.9377 25.6313 48.1448 27.0024 48.559 28.2071C48.9847 29.4118 49.6118 30.364 50.4403 31.0639C51.2802 31.7523 52.3158 32.0965 53.5469 32.0965Z" fill="white"/>
                <path d="M75.9063 37.2595L68.6919 10.825H76.1307L80.2384 28.5857H80.48L84.7603 10.825H92.061L96.4104 28.4824H96.6347L100.673 10.825H108.095L100.898 37.2595H93.1138L88.5574 20.6347H88.2295L83.673 37.2595H75.9063Z" fill="white"/>
                <path d="M108.341 8.15751V2.01356H137.371V8.15751H126.549V37.2595H119.162V8.15751H108.341Z" fill="white"/>
                <path d="M149.366 21.9771V37.2595H142.014V2.01356H149.159V15.4889H149.47C150.068 13.9286 151.035 12.7067 152.369 11.8232C153.704 10.9283 155.378 10.4808 157.392 10.4808C159.233 10.4808 160.838 10.8824 162.207 11.6855C163.588 12.4772 164.658 13.6188 165.417 15.1103C166.188 16.5904 166.568 18.363 166.556 20.4282V37.2595H159.204V21.7361C159.215 20.1069 158.801 18.8391 157.961 17.9327C157.133 17.0264 155.971 16.5732 154.475 16.5732C153.474 16.5732 152.588 16.7854 151.817 17.2099C151.058 17.6344 150.459 18.254 150.022 19.0686C149.596 19.8717 149.378 20.8412 149.366 21.9771Z" fill="white"/>
                <path d="M172.343 37.2595V10.825H179.695V37.2595H172.343ZM176.036 7.41748C174.943 7.41748 174.005 7.05607 173.223 6.33325C172.452 5.59896 172.066 4.72126 172.066 3.70013C172.066 2.69049 172.452 1.82425 173.223 1.10144C174.005 0.367146 174.943 0 176.036 0C177.129 0 178.061 0.367146 178.832 1.10144C179.614 1.82425 180.006 2.69049 180.006 3.70013C180.006 4.72126 179.614 5.59896 178.832 6.33325C178.061 7.05607 177.129 7.41748 176.036 7.41748Z" fill="white"/>
                <path d="M192.937 21.9771V37.2595H185.585V10.825H192.592V15.4889H192.903C193.49 13.9515 194.473 12.7353 195.854 11.8404C197.235 10.934 198.909 10.4808 200.876 10.4808C202.717 10.4808 204.323 10.8824 205.692 11.6855C207.061 12.4887 208.125 13.636 208.885 15.1275C209.644 16.6076 210.024 18.3745 210.024 20.4282V37.2595H202.671V21.7361C202.683 20.1184 202.269 18.8563 201.429 17.95C200.589 17.0321 199.432 16.5732 197.96 16.5732C196.97 16.5732 196.096 16.7854 195.336 17.2099C194.588 17.6344 194.002 18.254 193.576 19.0686C193.162 19.8717 192.949 20.8412 192.937 21.9771Z" fill="white"/>
                <path d="M222.481 29.6527L222.498 20.8584H223.568L232.06 10.825H240.499L229.091 24.1111H227.348L222.481 29.6527ZM215.819 37.2595V2.01356H223.171V37.2595H215.819ZM232.388 37.2595L224.586 25.7461L229.488 20.5659L241 37.2595H232.388Z" fill="white"/>
              </svg>
            </Link>

            {/* Mobile Menu Button */}
            <Link href="/" className="md:hidden text-white hover:text-white/80">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex absolute top-12 lg:top-20 xl:top-[120px] left-1/2 -translate-x-1/2 bg-[#03081B]/80 backdrop-blur-md rounded-full px-6 lg:px-8 py-3 lg:py-4 gap-4 lg:gap-6 xl:gap-8 z-20 border border-white/10 shadow-2xl transition-all duration-300 hover:bg-[#03081B]/90 hover:shadow-cyan-500/20 hover:border-cyan-400/30">
              <Link href="/#home" className="font-bold text-base lg:text-xl xl:text-2xl text-white hover:text-cyan-400 transition-all duration-300 hover:scale-110 whitespace-nowrap">
                Home
              </Link>
              <Link href="/#servicos" className="font-bold text-base lg:text-xl xl:text-2xl text-white hover:text-cyan-400 transition-all duration-300 hover:scale-110 whitespace-nowrap">
                Serviços
              </Link>
              <Link href="/#quem-somos" className="font-bold text-base lg:text-xl xl:text-2xl text-white hover:text-cyan-400 transition-all duration-300 hover:scale-110 whitespace-nowrap">
                Quem somos
              </Link>
              <Link href="/#contato" className="font-bold text-base lg:text-xl xl:text-2xl text-white hover:text-cyan-400 transition-all duration-300 hover:scale-110 whitespace-nowrap">
                Contato
              </Link>
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
              Política de Cookies – Flowthink
            </h1>
          </div>

          {/* Content */}
          <div className="text-white space-y-8 sm:space-y-10 lg:space-y-12 text-center">
            {/* Introduction */}
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed">
              Última atualização: 13/01/2026
            </p>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed">
              A Flowthink respeita a sua privacidade e está comprometida com a transparência no uso de dados. Esta Política de Cookies explica como utilizamos cookies e tecnologias semelhantes em nosso site institucional, bem como as opções disponíveis para o usuário.
            </p>

            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold">
                1. O que são Cookies?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você acessa um site. Eles servem para garantir o funcionamento adequado da página, melhorar a navegação e entender como o site é utilizado.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold">
                2. Por que utilizamos Cookies?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                Utilizamos cookies para:
              </p>
              <ul className="text-base sm:text-lg lg:text-xl leading-relaxed text-left max-w-3xl mx-auto space-y-2">
                <li>• Garantir o funcionamento correto do site</li>
                <li>• Melhorar a experiência de navegação</li>
                <li>• Analisar o desempenho e uso do site institucional</li>
                <li>• Manter a segurança da plataforma</li>
              </ul>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed font-medium">
                Não utilizamos cookies para fins de venda de dados pessoais.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold">
                3. Tipos de Cookies Utilizados
              </h2>
              <div className="space-y-4 text-left max-w-3xl mx-auto">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">
                    Cookies Necessários
                  </h3>
                  <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                    Essenciais para o funcionamento do site. Permitem navegação segura e acesso às funcionalidades básicas.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">
                    Cookies de Desempenho e Estatística
                  </h3>
                  <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                    Coletam informações anônimas sobre como os visitantes utilizam o site, ajudando a melhorar estrutura, conteúdo e usabilidade.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">
                    Cookies de Funcionalidade
                  </h3>
                  <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                    Permitem que o site lembre preferências do usuário, como idioma ou configurações básicas.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold">
                4. Cookies de Terceiros
              </h2>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                O site institucional da Flowthink pode utilizar serviços de terceiros, como ferramentas de análise de tráfego. Esses cookies são gerenciados por terceiros e estão sujeitos às suas próprias políticas de privacidade.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold">
                5. Gerenciamento de Cookies
              </h2>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                O usuário pode configurar seu navegador para bloquear ou excluir cookies a qualquer momento. Ressaltamos que a desativação de cookies essenciais pode impactar o funcionamento correto do site.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold">
                6. Conformidade com a LGPD
              </h2>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                A Flowthink trata os dados pessoais de acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), prezando pela segurança, finalidade e necessidade das informações coletadas.
              </p>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                Para mais detalhes, consulte nossa <Link href="/privacidade" className="text-[#3febbd] hover:underline">Política de Privacidade</Link>.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold">
                7. Atualizações desta Política
              </h2>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                Esta Política de Cookies pode ser atualizada periodicamente para refletir melhorias no site ou mudanças legais. A data da última atualização será sempre informada no início deste documento.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold">
                8. Contato
              </h2>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                Em caso de dúvidas sobre esta Política de Cookies, entre em contato conosco:
              </p>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                Flowthink<br />
                E-mail: contato@flowthink.com
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
