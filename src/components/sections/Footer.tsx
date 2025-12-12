export default function Footer() {
  const links = {
    services: [
      'Подписка Bronze',
      'Подписка Silver',
      'Подписка Gold',
      'Разовый ремонт',
      'Запчасти',
      'Б/у станки',
    ],
    company: ['О нас', 'Наши кейсы', 'Отзывы клиентов', 'Вакансии', 'Контакты'],
    info: ['Блог', 'FAQ', 'Политика конфиденциальности', 'Договор оферты', 'Гарантии'],
  };

  return (
    <footer className="bg-[#2C3E50] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">ПУМОРИ</h3>
            <p className="text-white/60 text-sm">Сервис ЧПУ-оборудования</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Услуги</h4>
            <ul className="space-y-2">
              {links.services.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-white/60 hover:text-white text-sm transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Компания</h4>
            <ul className="space-y-2">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-white/60 hover:text-white text-sm transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <div className="space-y-3 text-sm">
              <p className="text-white/60">Москва, ул. Промышленная, 12</p>
              <a href="tel:+74951234567" className="block text-white hover:text-accent transition">
                +7 (495) 123-45-67
              </a>
              <a href="mailto:info@pumori360.ru" className="block text-white hover:text-accent transition">
                info@pumori360.ru
              </a>
              <p className="text-white/60">Пн-Пт: 9:00-18:00</p>
              <p className="text-white/60">Сб-Вс: выходной</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
          <p>© 2025 ООО "Пумори". Все права защищены.</p>
          <p className="mt-2">ИНН: 1234567890 | ОГРН: 1234567890123</p>
        </div>
      </div>
    </footer>
  );
}
