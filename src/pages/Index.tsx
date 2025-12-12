import HeroSection from '@/components/sections/HeroSection';
import PainPoints from '@/components/sections/PainPoints';
import Solution from '@/components/sections/Solution';
import ROICalculator from '@/components/sections/ROICalculator';
import Pricing from '@/components/sections/Pricing';
import HowItWorks from '@/components/sections/HowItWorks';
import CaseStudies from '@/components/sections/CaseStudies';
import FAQ from '@/components/sections/FAQ';
import About from '@/components/sections/About';
import AdditionalServices from '@/components/sections/AdditionalServices';
import ContactForm from '@/components/sections/ContactForm';
import Footer from '@/components/sections/Footer';

export default function Index() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PainPoints />
      <Solution />
      <ROICalculator />
      <Pricing />
      <HowItWorks />
      <CaseStudies />
      <FAQ />
      <About />
      <AdditionalServices />
      <ContactForm />
      <Footer />
    </div>
  );
}
