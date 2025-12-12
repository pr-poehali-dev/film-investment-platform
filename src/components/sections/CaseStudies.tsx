export default function CaseStudies() {
  const cases = [
    {
      company: 'ООО "ТехПром"',
      location: 'Москва',
      machines: '5 станков',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200',
      problemBefore: [
        '8 аварийных поломок в год',
        'Потери 6.5M₽ на ремонты и простои',
        'Срыв сроков по заказам',
      ],
      solution: 'Подписка SILVER + регулярное ТО',
      results: [
        { label: 'Поломок', value: '2 вместо 8 (-75%)' },
        { label: 'Простои', value: '96 часов вместо 384 (-75%)' },
        { label: 'Экономия', value: '4,200,000 ₽' },
        { label: 'ROI подписки', value: '438%' },
      ],
      quote: 'Окупилось за 3 месяца. Теперь можем планировать производство без страха перед внезапными остановками.',
      author: 'Дмитрий К., технический директор',
    },
    {
      company: 'ИП Соколов',
      location: 'Екатеринбург',
      machines: '3 станка',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200',
      problemBefore: [
        'Непредсказуемые расходы на ремонт',
        'Срыв сроков по заказам',
        'Потеря 2 крупных клиентов',
      ],
      solution: 'Подписка BRONZE + профилактика',
      results: [
        { label: 'Экстренных ремонтов', value: '0' },
        { label: 'Производительность', value: '+22%' },
        { label: 'Клиенты получают заказы', value: 'в срок' },
        { label: 'Экономия', value: '380,000 ₽' },
      ],
      quote: 'Самое ценное — предсказуемость. Знаю, сколько плачу, знаю, что станок не подведёт.',
      author: 'Алексей С., владелец',
    },
  ];

  const stats = [
    { value: '↓ 73%', label: 'Сократили\nполомки' },
    { value: '↑ 28%', label: 'Увеличили\nпроизв-ть' },
    { value: '4.8M₽', label: 'Средняя\nэкономия\nна 5 ст.' },
    { value: '98%', label: 'Остаются\nс нами\nпосле 1-го\nгода' },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Наши клиенты экономят миллионы ₽ 💼
          </h2>
          <p className="text-xl text-muted-foreground">
            Реальные истории производств, которые перешли на подписку
          </p>
        </div>

        <div className="space-y-8 mb-12">
          {cases.map((caseStudy, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
              <div className="grid md:grid-cols-2">
                <div
                  className="h-64 md:h-auto bg-cover bg-center"
                  style={{ backgroundImage: `url(${caseStudy.image})` }}
                />

                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {caseStudy.company} | {caseStudy.location} | {caseStudy.machines}
                    </h3>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold mb-3">Проблема до "Пумори 360":</h4>
                    <ul className="space-y-2">
                      {caseStudy.problemBefore.map((problem, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-destructive">•</span>
                          <span className="text-sm">{problem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold mb-2">Решение:</h4>
                    <p className="text-primary font-semibold">{caseStudy.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold mb-3">Результаты за 1 год:</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {caseStudy.results.map((result, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-success">✅</span>
                          <div>
                            <p className="text-xs text-muted-foreground">{result.label}:</p>
                            <p className="font-bold">{result.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                    <p className="italic mb-2">"{caseStudy.quote}"</p>
                    <p className="text-sm text-muted-foreground">— {caseStudy.author}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-success/10 border-2 border-success rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">За 2024 год наши клиенты:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-robotoMono font-bold text-success mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground whitespace-pre-line">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
