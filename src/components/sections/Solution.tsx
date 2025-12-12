import Icon from '@/components/ui/icon';

export default function Solution() {
  const comparisons = [
    { other: 'Непредсказуемые расходы', ours: 'Фиксированная цена каждый мес' },
    { other: '"Приедем через 2-3 дня"', ours: 'Выезд за 1-8 часов (SLA)' },
    { other: 'Ждёте поломки', ours: 'Профилактика — нет поломок' },
    { other: 'Цены "после осмотра"', ours: 'Все цены публично на сайте' },
    { other: 'Запчасти под заказ', ours: '200+ позиций на складе' },
    { other: '9:00-18:00 (раб. дни)', ours: 'Поддержка 24/7' },
  ];

  const advantages = [
    {
      icon: 'Shield',
      title: 'Проактивный подход',
      description: 'Регулярное ТО выявляет проблемы ДО того, как станок сломается. Снижение поломок на 80%.',
    },
    {
      icon: 'Zap',
      title: 'Быстрая реакция',
      description: 'От 1 до 8 часов на выезд инженера (по тарифу). Минимизация простоев.',
    },
    {
      icon: 'DollarSign',
      title: 'Фиксированная цена',
      description: 'Один платёж в месяц — всё включено. Никаких сюрпризов в конце месяца.',
    },
    {
      icon: 'TrendingUp',
      title: 'Рост производительности',
      description: 'Станок работает стабильно → производство не останавливается → клиенты довольны.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            «Пумори 360» — ваше решение 💡
          </h2>
          <p className="text-xl text-muted-foreground">
            Первая и единственная подписка на комплексное обслуживание ЧПУ-станков
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="grid md:grid-cols-2">
            <div className="bg-destructive/5 p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Icon name="X" className="w-6 h-6 text-destructive" />
                ДРУГИЕ СЕРВИСЫ
              </h3>
              <p className="text-sm text-muted-foreground mb-6">(как все работают)</p>
              <div className="space-y-4">
                {comparisons.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Icon name="X" className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{item.other}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-success/5 p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Icon name="Check" className="w-6 h-6 text-success" />
                ПУМОРИ 360
              </h3>
              <p className="text-sm text-muted-foreground mb-6">(как работаем мы)</p>
              <div className="space-y-4">
                {comparisons.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Icon name="Check" className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                    <span className="font-semibold">{item.ours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Icon name={advantage.icon as any} className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{advantage.title}</h3>
              <p className="text-muted-foreground">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
