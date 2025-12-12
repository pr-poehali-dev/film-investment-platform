import Header from '@/components/layout/Header';
import NewHeroSection from '@/components/sections/NewHeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import Calculator from '@/components/sections/Calculator';
import SubscriptionSection from '@/components/sections/SubscriptionSection';
import ContactForm from '@/components/sections/ContactForm';
import NewFooter from '@/components/sections/NewFooter';

export default function NewIndex() {
  return (
    <div className="min-h-screen">
      <Header />
      <NewHeroSection />
      <ServicesSection />
      <Calculator />
      <SubscriptionSection />
      <ContactForm />
      <NewFooter />
      
      <a 
        href="https://t.me/pumori_service" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-14 h-14 bg-[#0088CC] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
        title="Написать в Telegram"
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.053 5.56-5.023c.242-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
        </svg>
      </a>
    </div>
  );
}