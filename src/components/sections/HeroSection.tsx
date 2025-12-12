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

      <nav className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-2">
          <div className="text-white">
            <h2 className="text-2xl font-bold">ПУМОРИ</h2>
            <p className="text-sm text-white/80">Сервис ЧПУ-оборудования</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <a href="tel:+74951234567" className="text-white font-semibold hover:text-accent transition">
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

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white animate-fade-in-up">
        <p className="text-accent text-lg font-semibold mb-4">
          Единственная в России подписка на сервис ЧПУ-оборудования
        </p>

        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Сэкономьте до 4.7M₽ в год
          <br />
          на сервисе ЧПУ-оборудования
        </h1>

        <p className="text-xl md:text-2xl mb-10 text-white/90">
          Подписка «Пумори 360» — фиксированная цена,
          <br />
          регулярное ТО, быстрый ремонт, 0 неожиданных поломок
        </p>

        <Button onClick={scrollToForm} size="lg" className="bg-accent hover:bg-accent/90 text-white px-12 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-transform">
          <Icon name="Wrench" className="w-6 h-6 mr-2" />
          Получить бесплатный аудит
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left">
          <div className="flex items-start gap-3">
            <Icon name="Check" className="w-6 h-6 text-success flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold">Платите от 30,000 ₽/мес</p>
              <p className="text-white/80 text-sm">всё включено</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Icon name="Check" className="w-6 h-6 text-success flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold">Реакция от 1 часа</p>
              <p className="text-white/80 text-sm">по договору SLA</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Icon name="Check" className="w-6 h-6 text-success flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold">Запчасти на складе</p>
              <p className="text-white/80 text-sm">доставка за 4 часа</p>
            </div>
          </div>
        </div>

        <div className="mt-16 animate-bounce-slow">
          <Icon name="ChevronDown" className="w-10 h-10 mx-auto text-white/60" />
        </div>
      </div>
    </section>
  );
}
