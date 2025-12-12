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
              <p className="text-white/60">620085, г. Екатеринбург, ул. Монтерская, стр. 3, оф. 206/1</p>
              <a href="tel:+73432873058" className="block text-white hover:text-accent transition">
                +7 (343) 287-30-58
              </a>
              <a href="mailto:pii@pumori.ru" className="block text-white hover:text-accent transition">
                pii@pumori.ru
              </a>
              <p className="text-white/60">Пн-Пт: 9:00-18:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
          <p>© 2025 ООО "ПРОМИНЖЕНЕРИНВЕСТ". Все права защищены.</p>
          <p className="mt-2">ИНН: 1234567890 | ОГРН: 1234567890123</p>
        </div>
      </div>
    </footer>
  );
}