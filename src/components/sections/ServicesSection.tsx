import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

export default function ServicesSection() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: 'Zap',
      title: 'Экстренный ремонт 24/7',
      description: 'Аварийные поломки, восстановление работоспособности станков любой сложности. Выезд инженера за 2-4 часа.',
      items: [
        'Диагностика на месте',
        'Ремонт критичных узлов',
        'Поставка запчастей срочно',
        'Гарантия 12 месяцев'
      ],
      cta: 'Подробнее'
    },
    {
      icon: 'Clipboard',
      title: 'Бесплатный технический аудит',
      description: 'Комплексная диагностика состояния оборудования. Отчёт с рекомендациями и сметой на устранение проблем.',
      items: [
        '47-точечная проверка станка',
        'Тепловизионная диагностика',
        'Анализ вибраций и точности',
        'Отчёт за 24-48 часов'
      ],
      cta: 'Заказать аудит',
      primary: true
    },
    {
      icon: 'Settings',
      title: 'Пуско-наладка и обслуживание',
      description: 'Ввод в эксплуатацию нового оборудования, плановое техническое обслуживание.',
      items: [
        'Монтаж и выставка по уровню',
        'Настройка и калибровка',
        'Обучение операторов',
        'Гарантийное ТО по графику'
      ],
      cta: 'Подробнее'
    },
    {
      icon: 'Package',
      title: 'Поставка оригинальных запчастей',
      description: 'Оригинальные и сертифицированные запчасти для станков Okuma, Headman и других брендов. Работаем под санкциями.',
      items: [
        'Оригинальные запчасти Okuma',
        'Поставка из Европы/Азии',
        'Срочная доставка за 3-7 дней',
        'Сертификаты и гарантия завода'
      ],
      cta: 'Каталог'
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-muted">
      <div className="max-w-[1440px] mx-auto px-8 md:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">НАШИ УСЛУГИ</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Комплексное сервисное обслуживание промышленного оборудования
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded border-2 border-border hover:border-primary transition-colors p-8 shadow-sm hover:shadow-md"
            >
              <div className="w-14 h-14 bg-primary/10 rounded flex items-center justify-center mb-6">
                <Icon name={service.icon as any} className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <div className="h-0.5 bg-border w-16 mb-6" />

              <p className="text-muted-foreground mb-6">{service.description}</p>

              <ul className="space-y-3 mb-6">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <span className="text-primary">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {service.primary ? (
                <Button onClick={scrollToForm} className="bg-accent hover:bg-accent/90">
                  {service.cta}
                </Button>
              ) : (
                <button className="text-primary font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  {service.cta}
                  <Icon name="ArrowRight" className="w-4 h-4" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
