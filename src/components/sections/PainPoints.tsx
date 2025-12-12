import Icon from '@/components/ui/icon';

export default function PainPoints() {
  const problems = [
    {
      icon: 'AlertCircle',
      title: 'Неожиданные поломки',
      description: 'Станок встал — производство остановилось. Клиент ждёт заказ, вы теряете деньги и репутацию.',
      loss: '720,000 ₽/поломка',
    },
    {
      icon: 'Banknote',
      title: 'Дорогие экстренные ремонты',
      description: 'Аварийный выезд в выходные — х2. Запчасти срочно — наценка 40%. Бюджет непредсказуем.',
      loss: '120,000 ₽',
    },
    {
      icon: 'Clock',
      title: 'Длительные простои',
      description: 'Нет запчастей — ждём 7-14 дней. Каждый час = потери 15,000 ₽. Срываются сроки поставок.',
      loss: '48 часов',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Знакомо? 👇
          </h2>
          <p className="text-xl text-muted-foreground">
            Проблемы, которые мешают вашему производству расти
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white border-2 border-destructive/20 rounded-xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-6">
                <Icon name={problem.icon as any} className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{problem.title}</h3>
              <p className="text-muted-foreground mb-6">{problem.description}</p>
              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground">Средний убыток:</p>
                <p className="text-2xl font-bold text-destructive">{problem.loss}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-destructive/10 border-2 border-destructive rounded-2xl p-10 text-center">
          <p className="text-xl mb-4">
            Без регулярного обслуживания
            <br />
            среднее производство теряет:
          </p>
          <div className="text-6xl font-robotoMono font-bold text-destructive mb-4">
            7,220,000 ₽/год
          </div>
          <p className="text-muted-foreground">
            (простои + аварийные ремонты + запчасти)
          </p>
        </div>
      </div>
    </section>
  );
}
