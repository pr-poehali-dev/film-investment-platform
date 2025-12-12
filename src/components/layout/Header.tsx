import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-[1440px] mx-auto px-8 md:px-20 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div>
            <h2 className="text-xl font-bold text-primary">ПУМОРИ</h2>
            <p className="text-xs text-muted-foreground">Сервис промышленного оборудования</p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-foreground hover:text-primary transition">
            Услуги
          </button>
          <button onClick={() => scrollToSection('expertise')} className="text-sm font-medium text-foreground hover:text-primary transition">
            Экспертиза
          </button>
          <button onClick={() => scrollToSection('reviews')} className="text-sm font-medium text-foreground hover:text-primary transition">
            Отзывы
          </button>
          <button onClick={() => scrollToSection('contact-form')} className="text-sm font-medium text-foreground hover:text-primary transition">
            Контакты
          </button>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <div className="text-right">
            <a href="tel:+73432873058" className="text-sm font-semibold text-foreground hover:text-primary transition">
              +7 (343) 287-30-58
            </a>
            <p className="text-xs text-muted-foreground">Пн-Пт: 9:00-18:00</p>
          </div>
          <a 
            href="https://t.me/pumori_service" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded hover:bg-muted transition"
          >
            <Icon name="Send" className="w-5 h-5 text-primary" />
          </a>
          <Button onClick={() => scrollToSection('contact-form')} size="sm" className="bg-accent hover:bg-accent/90">
            Заказать аудит
          </Button>
        </div>

        <button 
          className="lg:hidden flex flex-col gap-1.5 w-10 h-10 items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`w-6 h-0.5 bg-foreground transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-foreground transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-foreground transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="flex flex-col py-4 px-8">
            <button onClick={() => scrollToSection('services')} className="py-3 text-sm font-medium text-foreground hover:text-primary transition text-left">
              Услуги
            </button>
            <button onClick={() => scrollToSection('expertise')} className="py-3 text-sm font-medium text-foreground hover:text-primary transition text-left">
              Экспертиза
            </button>
            <button onClick={() => scrollToSection('reviews')} className="py-3 text-sm font-medium text-foreground hover:text-primary transition text-left">
              Отзывы
            </button>
            <button onClick={() => scrollToSection('contact-form')} className="py-3 text-sm font-medium text-foreground hover:text-primary transition text-left">
              Контакты
            </button>
            <div className="py-3 border-t mt-2">
              <a href="tel:+73432873058" className="text-sm font-semibold text-foreground hover:text-primary transition">
                +7 (343) 287-30-58
              </a>
              <p className="text-xs text-muted-foreground mt-1">Пн-Пт: 9:00-18:00</p>
            </div>
            <Button onClick={() => scrollToSection('contact-form')} className="bg-accent hover:bg-accent/90 mt-3">
              Заказать аудит
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
