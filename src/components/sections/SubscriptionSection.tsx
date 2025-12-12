import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

export default function SubscriptionSection() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    {
      icon: 'Shield',
      title: 'Проактивное обслуживание',
      description: 'Регулярное ТО по графику предотвращает 80% аварийных поломок. Станок всегда в рабочем состоянии.'
    },
    {
      icon: 'Calculator',
      title: 'Предсказуемые расходы',
      description: 'Фиксированная сумма каждый месяц. Никаких неожиданных счетов за экстренный ремонт.'
    },
    {
      icon: 'Zap',
      title: 'Приоритетная поддержка',
      description: 'Выезд инженера за 1-2 часа даже в выходные. Запчасти на складе — доставка за 4 часа.'
    },
    {
      icon: 'Smartphone',
      title: 'Личный кабинет и приложение',
      description: 'Онлайн мониторинг состояния станков, история обслуживания, заявки в 1 клик, push-уведомления о плановом ТО.'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="max-w-[1440px] mx-auto px-8 md:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">НОВОЕ НАПРАВЛЕНИЕ ДЛЯ НАШИХ КЛИЕНТОВ</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            После успешного ремонта и ввода в эксплуатацию мы готовы предложить вам долгосрочное партнёрство
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Clipboard" className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Аудит бесплатно</h3>
            <p className="text-sm text-white/70">Диагностика 47 точек</p>
          </div>

          <div className="text-center relative">
            <div className="hidden md:block absolute top-10 -left-8 w-16 h-0.5 bg-white/20" />
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Wrench" className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Ремонт под ключ</h3>
            <p className="text-sm text-white/70">Устранение неисправностей</p>
          </div>

          <div className="text-center relative">
            <div className="hidden md:block absolute top-10 -left-8 w-16 h-0.5 bg-white/20" />
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="CheckCircle" className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Подписка на сервис</h3>
            <p className="text-sm text-white/70">Регулярное обслуживание</p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">ЧТО ДАЁТ ПОДПИСКА</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded border border-white/20 p-6">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name={benefit.icon as any} className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                <div className="h-0.5 bg-white/20 w-12 mb-3" />
                <p className="text-sm text-white/80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-2xl mx-auto text-center bg-white/10 backdrop-blur-sm rounded border border-white/20 p-8">
          <p className="mb-6">
            Подписка на сервис — это новое направление, которое мы запускаем для постоянных клиентов. 
            Чтобы узнать подробности и условия, начните с бесплатного аудита вашего оборудования.
          </p>
          <Button 
            onClick={scrollToForm}
            className="bg-white text-primary hover:bg-white/90"
          >
            Узнать больше о подписке
          </Button>
        </div>
      </div>
    </section>
  );
}
