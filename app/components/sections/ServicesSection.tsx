export default function ServicesSection() {
  return (
    <section id="servicos">
      {/* Background gradient - responsive */}
      <div className="w-full min-h-screen bg-white lg:bg-gradient-to-r lg:from-white lg:from-50% lg:to-[#0A1E42] lg:to-50% flex items-center justify-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        {/* Main Card */}
        <div className="w-full max-w-[1366px] relative bg-[#01174C] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12">
          {/* Title */}
          <h2 className="text-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold font-['Inter'] leading-tight sm:leading-snug md:leading-normal lg:leading-[72px] mb-8 sm:mb-10 lg:mb-12">
            Transforme Sua Estratégia em Tecnologia. Resultados em Ação.
          </h2>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {/* Service 1 */}
            <div className="p-4 sm:p-6">
              <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-medium font-['Inter'] leading-tight sm:leading-8 mb-4">
                Estratégia & Consultoria Digital
              </h3>
              <p className="text-white text-sm sm:text-base font-normal font-['Inter'] leading-relaxed mt-12">
                Identificamos as lacunas críticas e alinhamos perfeitamente sua estratégia de negócios com a tecnologia ideal. Nossos especialistas guiam a definição de roadmaps e a adoção de soluções, garantindo que cada investimento em TI impulsione seus objetivos de negócio com precisão.
              </p>
            </div>
            
            {/* Service 2 */}
            <div className="p-4 sm:p-6">
              <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-medium font-['Inter'] leading-tight sm:leading-8 mb-4">
                Experiências Imersivas & Arquitetura Evolutiva
              </h3>
              <p className="text-sm sm:text-base font-normal font-['Inter'] leading-relaxed">
                <span className="text-white">
                  Vamos além de websites e apps. Criamos experiências{' '}
                </span>
                <span className="text-[#3FEBBD]">
                  interconectadas e encantadoras
                </span>
                <span className="text-white">
                  {' '}em web, mobile e interfaces conversacionais. Sua arquitetura digital é construída para adaptar-se, reorganizar-se e evoluir continuamente, suportando qualquer mudança nas necessidades da sua organização.
                </span>
              </p>
            </div>
            
            {/* Service 3 */}
            <div className="p-4 sm:p-6">
              <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-medium font-['Inter'] leading-tight sm:leading-8 mb-4">
                Modernização do Ecossistema
              </h3>
              <p className="text-white text-sm sm:text-base font-normal font-['Inter'] leading-relaxed">
                Garantimos a evolução e execução eficiente das suas aplicações. Com equipes especializadas, modernizamos e sustentamos ecossistemas técnicos, desenvolvendo soluções à prova de futuro e migrando sua infraestrutura para as tecnologias mais estratégicas e adequadas ao seu negócio.
              </p>
            </div>
            
            {/* Service 4 */}
            <div className="p-4 sm:p-6">
              <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-medium font-['Inter'] leading-tight sm:leading-8 mb-4">
                Modernização e Desenvolvimento Ágil
              </h3>
              <p className="text-white text-sm sm:text-base font-normal font-['Inter'] leading-relaxed">
                Focamos na eficiência operacional e no future-proofing da sua tecnologia. e mantemos seus ecossistemas técnicos para criar soluções mais robustas e migrar para as tecnologias mais adequadas ao seu crescimento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
