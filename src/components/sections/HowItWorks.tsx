import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

export default function HowItWorks() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const steps = [
    {
      number: 1,
      icon: 'Clipboard',
      title: 'БЕСПЛАТНЫЙ АУДИТ',
      items: [
        'Оставляете заявку',
        'Инженер приезжает',
        '47-точечная проверка',
        'Отчёт + смета за 24-48 часов',
      ],
    },
    {
      number: 2,
      icon: 'Wrench',
      title: 'РЕМОНТ (если нужен)',
      items: [
        '3 варианта смет',
        'Выбираете удобный',
        'Качественный ремонт',
        'Гарантия: 6-12 месяцев',
      ],
    },
    {
      number: 3,
      icon: 'CheckCircle',
      title: 'ПОДПИСКА',
      items: [
        'Выбираете пакет',
        'Регулярное ТО по графику',
        'Станок работает стабильно',
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Как начать работать с «Пумори 360»? 🚀
          </h2>
          <p className="text-xl text-muted-foreground">
            Простой процесс в 3 шага — от заявки до стабильной работы
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-primary/20">
                  <Icon name="ArrowRight" className="absolute -right-4 -top-3 w-8 h-8 text-primary" />
                </div>
              )}

              <div className="bg-white border-2 border-primary/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all relative z-10">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mb-6 mx-auto">
                  {step.number}
                </div>

                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Icon name={step.icon as any} className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-2xl font-bold text-center mb-6">{step.title}</h3>

                <ul className="space-y-3">
                  {step.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button onClick={scrollToForm} size="lg" className="bg-accent hover:bg-accent/90">
            <Icon name="Wrench" className="w-5 h-5 mr-2" />
            Начать с бесплатного аудита 🔧
          </Button>
        </div>
      </div>
    </section>
  );
}