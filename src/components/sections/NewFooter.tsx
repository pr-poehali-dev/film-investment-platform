export default function NewFooter() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary-dark text-white/70 py-16">
      <div className="max-w-[1440px] mx-auto px-8 md:px-20">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">ПУМОРИ</h3>
            <p className="text-sm mb-6">Сервис промышленного оборудования</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">УСЛУГИ</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition">Экстренный ремонт</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition">Техаудит</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition">ПНР</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition">Запчасти</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition">Б/у станки</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition">Модернизация</button></li>
            </ul>
            <h4 className="text-white font-semibold mt-6 mb-4 text-sm uppercase tracking-wider">СПЕЦИАЛИЗАЦИЯ</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => scrollToSection('expertise')} className="hover:text-white transition">Okuma</button></li>
              <li><button onClick={() => scrollToSection('expertise')} className="hover:text-white transition">Headman</button></li>
              <li><button onClick={() => scrollToSection('expertise')} className="hover:text-white transition">DMG MORI</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">КОМПАНИЯ</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => scrollToSection('reviews')} className="hover:text-white transition">Отзывы</button></li>
              <li><button onClick={() => scrollToSection('contact-form')} className="hover:text-white transition">Контакты</button></li>
            </ul>
            <h4 className="text-white font-semibold mt-6 mb-4 text-sm uppercase tracking-wider">ИНФОРМАЦИЯ</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Политика конфиденциальности</a></li>
              <li><a href="#" className="hover:text-white transition">Договор оферты</a></li>
              <li><a href="#" className="hover:text-white transition">Гарантии</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">КОНТАКТЫ</h4>
            <div className="space-y-3 text-sm">
              <p>620085, г. Екатеринбург, ул. Монтерская, стр. 3, оф. 206/1</p>
              <a href="tel:+73432873058" className="block text-white hover:text-accent transition font-semibold">
                +7 (343) 287-30-58
              </a>
              <a href="mailto:pii@pumori.ru" className="block hover:text-white transition">
                pii@pumori.ru
              </a>
              <p className="pt-2">Пн-Пт: 9:00-18:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-xs text-center">
            © 2025 ООО "ПРОМИНЖЕНЕРИНВЕСТ". Все права защищены.
          </p>
          <p className="text-xs text-center mt-2">
            ИНН: 1234567890 | ОГРН: 1234567890123
          </p>
        </div>
      </div>
    </footer>
  );
}
