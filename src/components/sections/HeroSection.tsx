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
          <a href="tel:+74951234567" className="text-white text-sm md:text-base font-semibold hover:text-accent transition">
            +7 (495) 123-45-67
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

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center text-white animate-fade-in-up mt-20 md:mt-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight">
          Сэкономьте до 4.7M₽ в год на сервисе ЧПУ-оборудования
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 text-white/90 leading-relaxed">
          Подписка «Пумори 360» — фиксированная цена, регулярное ТО, быстрый ремонт, 0 неожиданных поломок
        </p>

        <Button onClick={scrollToForm} size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 md:px-12 py-4 md:py-6 text-base md:text-lg font-bold shadow-xl hover:scale-105 transition-transform">
          <Icon name="Wrench" className="w-5 h-5 md:w-6 md:h-6 mr-2" />
          Получить бесплатный аудит
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12 text-left">
          <div className="flex items-start gap-3">
            <Icon name="Check" className="w-5 h-5 md:w-6 md:h-6 text-success flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-sm md:text-base">Платите от 30,000 ₽/мес</p>
              <p className="text-white/80 text-xs md:text-sm">всё включено</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Icon name="Check" className="w-5 h-5 md:w-6 md:h-6 text-success flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-sm md:text-base">Реакция от 1 часа</p>
              <p className="text-white/80 text-xs md:text-sm">по договору SLA</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Icon name="Check" className="w-5 h-5 md:w-6 md:h-6 text-success flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-sm md:text-base">Запчасти на складе</p>
              <p className="text-white/80 text-xs md:text-sm">доставка за 4 часа</p>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-16 animate-bounce-slow">
          <Icon name="ChevronDown" className="w-8 h-8 md:w-10 md:h-10 mx-auto text-white/60" />
        </div>
      </div>
    </section>
  );
}