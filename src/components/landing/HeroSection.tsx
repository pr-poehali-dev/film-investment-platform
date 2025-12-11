import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeroSectionProps {
  scrollToForm: () => void;
}

const HeroSection = ({ scrollToForm }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=2000')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
          Ваше ЧПУ-оборудование работает<br />
          24/7 без простоев и поломок
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
          Подписка «Пумори 360» — регулярное обслуживание, быстрая поддержка и предсказуемые расходы
        </p>
        <Button 
          onClick={scrollToForm}
          size="lg" 
          className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-2xl hover:scale-105 transition-transform duration-300"
        >
          <Icon name="Wrench" size={24} className="mr-2" />
          Получить бесплатный аудит
        </Button>
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center text-sm text-white/90">
          <div className="flex items-center justify-center gap-2">
            <Icon name="CheckCircle2" size={18} className="text-success" />
            <span>47-точечная проверка станка</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Icon name="CheckCircle2" size={18} className="text-success" />
            <span>Отчёт с рекомендациями за 24 часа</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Icon name="CheckCircle2" size={18} className="text-success" />
            <span>Полностью бесплатно, без обязательств</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
