import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function AdditionalServices() {
  const services = [
    {
      icon: 'Wrench',
      title: 'Разовый ремонт',
      price: 'От 50,000 ₽',
      description: 'Если не готовы к подписке — выполним ремонт любой сложности. Гарантия 6 месяцев.',
    },
    {
      icon: 'Package',
      title: 'Запчасти',
      price: 'Склад 200+ позиций',
      description: 'Оригинальные и сертифицированные аналоги. Доставка за 4 часа. Наценка от 30%.',
    },
    {
      icon: 'Factory',
      title: 'Б/у станки',
      price: 'Восстановленные, с гарантией',
      description: 'Купим ваш старый станок. Продадим восстановленный. Trade-in доступен.',
    },
    {
      icon: 'ClipboardList',
      title: 'Технический аудит',
      price: '15,000 ₽',
      description: '47-точечная проверка для тех, кто уже с другим сервисом. Отчёт за 24 часа.',
    },
    {
      icon: 'Cog',
      title: 'Инжиниринг и модернизация',
      price: 'По запросу',
      description: 'Увеличим производительность на 20-40%. Автоматизация рабочих процессов.',
    },
    {
      icon: 'Sparkles',
      title: 'Новое оборудование',
      price: 'Официальный дилер',
      description: 'Поставка + ввод в эксплуатацию + сервис. Лизинг, рассрочка.',
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Дополнительные услуги 🛠
          </h2>
          <p className="text-xl text-muted-foreground">
            Полный комплекс решений для вашего производства
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Icon name={service.icon as any} className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>

              <p className="text-lg font-semibold text-primary mb-4">{service.price}</p>

              <p className="text-muted-foreground mb-6">{service.description}</p>

              <Button variant="outline" className="w-full">
                Подробнее →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
