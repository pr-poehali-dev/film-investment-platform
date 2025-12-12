import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function NewHeroSection() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-primary-dark flex items-center pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1565008576549-57569a49371d?q=80&w=2000')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-primary-dark/90" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-20 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-white">
          <p className="text-xs uppercase tracking-wider text-white/70 mb-4">
            ЭКСПЕРТНЫЙ СЕРВИС ЧПУ-ОБОРУДОВАНИЯ С 2000 ГОДА
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight mb-6">
            Профессиональный ремонт и обслуживание станков
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Экстренный ремонт, пуско-наладка, гарантийное обслуживание. Поставка оригинальных запчастей, в том числе под санкциями.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button 
              onClick={scrollToForm} 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white font-semibold"
            >
              Заказать бесплатный аудит
              <Icon name="ArrowRight" className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              onClick={scrollToForm} 
              size="lg" 
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10"
            >
              Экстренный ремонт 24/7
            </Button>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Icon name="Check" className="w-5 h-5 text-success flex-shrink-0" />
              <span className="text-sm">Выезд инженера за 2-4 часа</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="Check" className="w-5 h-5 text-success flex-shrink-0" />
              <span className="text-sm">Оригинальные запчасти</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="Check" className="w-5 h-5 text-success flex-shrink-0" />
              <span className="text-sm">Гарантия на работы 6 месяцев</span>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded border border-white/20 p-8">
          <h3 className="text-xl font-semibold text-white mb-6">ПУМОРИ В ЦИФРАХ</h3>
          <div className="border-t border-white/20 mb-6" />
          
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div>
              <div className="text-3xl font-bold text-white mb-1">20+</div>
              <div className="text-xs text-white/70">лет опыта</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">200+</div>
              <div className="text-xs text-white/70">проектов в год</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-xs text-white/70">клиентов с нами остаются</div>
            </div>
          </div>

          <div>
            <p className="text-xs text-white/70 mb-3 uppercase tracking-wider">Работаем с брендами</p>
            <div className="flex flex-wrap gap-3 text-sm font-semibold text-white">
              <span>OKUMA</span>
              <span className="text-white/50">|</span>
              <span>DMG MORI</span>
              <span className="text-white/50">|</span>
              <span>FANUC</span>
              <span className="text-white/50">|</span>
              <span>HEADMAN</span>
              <span className="text-white/50">|</span>
              <span>MAZAK</span>
              <span className="text-white/50">|</span>
              <span>HAAS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
