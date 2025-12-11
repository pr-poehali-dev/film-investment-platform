import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Icon name="Mountain" size={32} className="text-primary" />
          <div>
            <h1 className="text-2xl font-bold text-primary">ПУМОРИ</h1>
            <p className="text-xs text-muted-foreground">Сервис ЧПУ-оборудования</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:+74951234567" className="hidden md:flex items-center gap-2 text-primary font-semibold">
            <Icon name="Phone" size={20} />
            +7 (495) 123-45-67
          </a>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Icon name="MessageCircle" size={20} className="text-success" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Icon name="Send" size={20} className="text-primary" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
