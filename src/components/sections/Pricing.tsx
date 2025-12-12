import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Pricing() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const plans = [
    {
      name: 'Bronze',
      icon: '🥉',
      price: '30,000',
      priceYear: '360,000',
      subtitle: 'Для малого бизнеса',
      description: '(1-3 станка)',
      features: [
        'ТО 4 раза/год',
        'Реакция: 4-8 часов',
        'Скидка 15% на запчасти',
        'Поддержка: email + телефон',
        'Диагностика',
      ],
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200',
      popular: false,
    },
    {
      name: 'Silver',
      icon: '🥈',
      price: '80,000',
      priceYear: '960,000',
      subtitle: 'Для среднего бизнеса',
      description: '(3-10 станков)',
      features: [
        'ТО 6 раз/год',
        'Реакция: 2-4 часа',
        'Запчасти до 50К₽ включены',
        'Скидка 20% на доп.',
        '1 модернизация БЕСПЛАТНО',
        'Поддержка 24/5',
      ],
      bgColor: 'bg-primary/5',
      borderColor: 'border-primary',
      popular: true,
    },
    {
      name: 'Gold',
      icon: '🥇',
      price: '250,000',
      priceYear: '3,000,000',
      subtitle: 'Для крупного производства',
      description: '(10+ станков)',
      features: [
        'ТО ЕЖЕМЕСЯЧНО',
        'Реакция: 1-2ч',
        'Запчасти до 200К₽ включены',
        'Скидка 25%',
        'Резервный станок',
        'Персональный инженер',
        'Поддержка 24/7',
      ],
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-400',
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Выберите свой пакет 📦
          </h2>
          <p className="text-xl text-muted-foreground">
            Фиксированная цена каждый месяц — всё включено, никаких доплат
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative ${plan.bgColor} border-2 ${plan.borderColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all ${
                plan.popular ? 'md:-translate-y-4 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                  ⭐ ПОПУЛЯРНЫЙ
                </div>
              )}

              <div className="text-center mb-6">
                <div className="text-5xl mb-3">{plan.icon}</div>
                <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
                <div className="space-y-1">
                  <div className="text-4xl font-robotoMono font-bold text-primary">
                    {plan.price} ₽/мес
                  </div>
                  <div className="text-muted-foreground">
                    {plan.priceYear} ₽/год
                  </div>
                </div>
              </div>

              <div className="text-center mb-6">
                <p className="font-semibold">{plan.subtitle}</p>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Icon name="Check" className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                onClick={scrollToForm}
                className={`w-full ${plan.popular ? 'bg-accent hover:bg-accent/90' : 'bg-primary hover:bg-primary/90'}`}
                size="lg"
              >
                Выбрать {plan.name} {plan.popular ? '🔥' : '→'}
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-muted/50 border-2 border-border rounded-2xl p-8 text-center max-w-2xl mx-auto">
          <p className="text-lg mb-4">💡 Не знаете, какой пакет выбрать?</p>
          <p className="text-muted-foreground mb-6">
            Закажите бесплатный аудит — мы подберём оптимальное решение
            исходя из ваших потребностей.
          </p>
          <Button onClick={scrollToForm} size="lg" variant="outline">
            Получить консультацию
          </Button>
        </div>
      </div>
    </section>
  );
}
