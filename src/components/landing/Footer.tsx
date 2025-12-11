import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Mountain" size={32} />
              <h3 className="text-2xl font-bold">ПУМОРИ</h3>
            </div>
            <p className="text-white/70 text-sm">15 лет на рынке сервиса промышленного оборудования</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">О компании</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Услуги</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Тарифы</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Кейсы</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Москва, ул. Промышленная, 12</li>
              <li><a href="tel:+74951234567" className="hover:text-white transition-colors">+7 (495) 123-45-67</a></li>
              <li><a href="mailto:info@pumori360.ru" className="hover:text-white transition-colors">info@pumori360.ru</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="rounded-full bg-white/10 hover:bg-white/20">
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-white/10 hover:bg-white/20">
                <Icon name="Send" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-white/10 hover:bg-white/20">
                <Icon name="Youtube" size={20} />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
          <p>© 2025 ООО "Пумори". Все права защищены.</p>
          <p>ИНН: 1234567890 | ОГРН: 1234567890123</p>
          <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
