import Icon from '@/components/ui/icon';

export default function AdditionalServicesNew() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: 'Wrench',
      title: 'Поставка запчастей',
      description: 'Оригинальные и сертифицированные запчасти для всех брендов',
      link: 'Каталог'
    },
    {
      icon: 'Factory',
      title: 'Б/у станки',
      description: 'Восстановленное оборудование с гарантией. Trade-in',
      link: 'Смотреть'
    },
    {
      icon: 'Clipboard',
      title: 'Технические консультации',
      description: 'Удалённая диагностика, подбор оборудования',
      link: 'Заказать'
    },
    {
      icon: 'Settings',
      title: 'Модернизация',
      description: 'Замена систем ЧПУ, увеличение точности',
      link: 'Узнать'
    },
    {
      icon: 'GraduationCap',
      title: 'Обучение персонала',
      description: 'Операторы ЧПУ, наладчики, программирование',
      link: 'Программы'
    },
    {
      icon: 'Lightbulb',
      title: 'Инжиниринг',
      description: 'Проектирование и технологическая подготовка производства',
      link: 'Подробнее'
    },
    {
      icon: 'Package',
      title: 'Новое оборудование',
      description: 'Поставка станков и производственного оборудования',
      link: 'Каталог'
    },
    {
      icon: 'Hammer',
      title: 'Инструмент и оснастка',
      description: 'Режущий инструмент, приспособления и оснастка для станков',
      link: 'Смотреть'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-muted">
      <div className="max-w-[1440px] mx-auto px-8 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ</h2>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 min-w-max md:grid md:grid-cols-4 md:min-w-0">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded border border-border p-6 hover:border-primary transition-colors min-w-[280px] md:min-w-0"
              >
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-4">
                  <Icon name={service.icon as any} className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <div className="h-0.5 bg-border w-12 mb-4" />
                
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                
                <button 
                  onClick={scrollToForm}
                  className="text-primary font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all"
                >
                  {service.link}
                  <Icon name="ArrowRight" className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
