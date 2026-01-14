import HeroSection from './components/sections/HeroSection';
import BrandsSection from './components/sections/BrandsSection';
import ServicesSection from './components/sections/ServicesSection';
import FooterSection from './components/sections/FooterSection';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <div>
        <HeroSection />
        <BrandsSection />
        <ServicesSection />
      </div>

      <FooterSection />
    </main>
  );
}
