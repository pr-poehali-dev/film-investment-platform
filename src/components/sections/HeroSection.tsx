import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen bg-gradient-to-br from-primary/90 to-primary flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1565008576549-57569a49371d?q=80&w=2000')",
        }}
      />

      <nav className="absolute top-0 left-0 right-0 z-10 flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 md:py-6 gap-4">
        <div className="flex items-center gap-2">
          <div className="text-white">
            <h2 className="text-xl md:text-2xl font-bold">ПУМОРИ</h2>
            <p className="text-xs md:text-sm text-white/80">Сервис ЧПУ-оборудования</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
          <a href="tel:+73432873058" className="text-white text-sm md:text-base font-semibold hover:text-accent transition">
            +7 (343) 287-30-58
          </a>
          <div className="flex gap-3">
            <Button size="sm" variant="ghost" className="text-white hover:bg-white/10">
              <Icon name="MessageCircle" className="w-5 h-5" />
            </Button>
            <Button size="sm" variant="ghost" className="text-white hover:bg-white/10">
              <Icon name="Send" className="w-5 h-5" />
            </Button>
          </div>
          <Button onClick={scrollToForm} variant="secondary" size="sm">
            Заказать звонок
          </Button>
        </div>
      </nav>

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center text-white animate-fade-in-up mt-24 md:mt-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-5">
          Ваше ЧПУ-оборудование работает 24/7 без простоев и поломок
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8">
          «Пумори 360» — регулярное обслуживание, быстрая поддержка и предсказуемые расходы
        </p>

        <Button 
          onClick={scrollToForm} 
          size="lg" 
          className="bg-accent hover:bg-accent/90 text-white font-semibold shadow-lg transition-all w-[220px] h-[52px] text-base"
        >
          <Icon name="Wrench" className="w-4 h-4 mr-2" />
          Получить бесплатный аудит
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-8 text-left max-w-3xl mx-auto">
          <div className="flex items-start gap-2">
            <Icon name="Check" className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-xs">Платите от 30,000 ₽/мес</p>
              <p className="text-white/70 text-xs">всё включено</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Icon name="Check" className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-xs">Реакция от 1 часа</p>
              <p className="text-white/70 text-xs">по договору SLA</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Icon name="Check" className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-xs">Запчасти на складе</p>
              <p className="text-white/70 text-xs">доставка за 4 часа</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center animate-bounce-slow">
          <p className="text-white/70 text-xs mb-1">Узнать, как это работает</p>
          <Icon name="ChevronDown" className="w-6 h-6 text-white/60" />
        </div>
      </div>
    </section>
  );
}