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

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center text-white animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          Сэкономьте до 4.7M₽ в год на сервисе ЧПУ-оборудования
        </h1>
      </div>
    </section>
  );
}