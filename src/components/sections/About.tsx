import Icon from '@/components/ui/icon';

export default function About() {
  const advantages = [
    {
      icon: 'GraduationCap',
      title: 'Сертифицированные инженеры',
      description: 'Все специалисты имеют дипломы от производителей (Haas, DMG MORI, Fanuc, Siemens)',
    },
    {
      icon: 'Building2',
      title: 'Собственный склад запчастей',
      description: '200+ позиций в наличии. Доставка критичных деталей за 4 часа.',
    },
    {
      icon: 'Settings',
      title: 'Современное диагностическое оборудование',
      description: 'Лазерный интерферометр, тепловизор, вибродиагностика — выявляем проблемы до их появления.',
    },
    {
      icon: 'Handshake',
      title: 'Прозрачность и гарантии',
      description: 'Договор с фиксированными SLA. Гарантия 6-12 месяцев на работы. Возврат денег, если не выполнили.',
    },
  ];

  const partners = ['Haas', 'DMG MORI', 'FANUC', 'Mazak', 'Okuma', 'Siemens'];

  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Почему «Пумори»? 🏔
          </h2>
          <p className="text-xl text-white/80">
            15 лет на рынке сервиса промышленного оборудования
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white text-foreground rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Icon name={advantage.icon as any} className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{advantage.title}</h3>
              <p className="text-muted-foreground">{advantage.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-6 text-white/80">Наши партнёры:</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="text-2xl font-bold text-white/60 hover:text-white transition-colors"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
