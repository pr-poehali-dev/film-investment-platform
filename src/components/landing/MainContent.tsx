import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

interface MainContentProps {
  scrollToForm: () => void;
}

const MainContent = ({ scrollToForm }: MainContentProps) => {
  return (
    <>
      {/* Problems Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">Знакомо? 👇</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: "XCircle",
                title: "Неожиданные поломки",
                description: "Станок встал — производство остановилось. Клиент ждёт заказ, вы теряете деньги и репутацию."
              },
              {
                icon: "DollarSign",
                title: "Дорогие экстренные ремонты",
                description: "Аварийный выезд в выходные — х2 к цене. Запчасти срочно — наценка 30-40%. Бюджет не предсказуем."
              },
              {
                icon: "Clock",
                title: "Длительные простои",
                description: "Нет запчастей на складе — ждём неделю. Каждый час простоя = потери 15 000 ₽. Срываются сроки поставок."
              }
            ].map((item, index) => (
              <Card key={index} className="p-8 border-2 border-red-100 animate-fade-in transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-6 mx-auto">
                  <Icon name={item.icon as any} size={32} className="text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-primary">{item.title}</h3>
                <p className="text-muted-foreground text-center">{item.description}</p>
              </Card>
            ))}
          </div>
          <div className="mt-16 text-center">
            <div className="inline-block bg-red-50 border-2 border-red-200 rounded-2xl p-8">
              <p className="text-3xl md:text-4xl font-bold text-red-600 font-robotoMono">120 000 ₽ + 48 часов</p>
              <p className="text-muted-foreground mt-2">Средние потери от одной поломки</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-success/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">«Пумори 360» — ваше решение 💡</h2>
            <p className="text-xl text-muted-foreground">Подписка на комплексное обслуживание ЧПУ-станков</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "Shield",
                title: "Проактивный подход",
                description: "Регулярное ТО выявляет проблемы до того, как станок сломается"
              },
              {
                icon: "Zap",
                title: "Быстрая реакция",
                description: "От 1 до 8 часов на выезд инженера. Минимизация простоев."
              },
              {
                icon: "DollarSign",
                title: "Фиксированная цена",
                description: "Никаких сюрпризов. Один платёж в месяц — всё включено."
              },
              {
                icon: "TrendingUp",
                title: "Рост производительности",
                description: "Станок работает стабильно, производство не останавливается, клиенты довольны."
              }
            ].map((item, index) => (
              <Card key={index} className="p-6 bg-white animate-fade-in transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="w-14 h-14 rounded-xl bg-success/10 flex items-center justify-center mb-4">
                  <Icon name={item.icon as any} size={28} className="text-success" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-primary">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">Выберите свой пакет 📦</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Bronze */}
            <Card className="p-8 border-2 animate-fade-in transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-4">
                  <span className="text-3xl">🥉</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-primary">BRONZE</h3>
                <p className="text-4xl font-bold text-primary font-robotoMono">30 000 ₽<span className="text-lg font-normal">/месяц</span></p>
                <p className="text-sm text-muted-foreground mt-2">Для малого бизнеса (1-3 станка)</p>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Техобслуживание 4 раза/год",
                  "Реакция инженера: 4-8 часов",
                  "Скидка 15% на запчасти",
                  "Поддержка: email + телефон",
                  "Диагностика и настройка"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Icon name="Check" size={18} className="text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button onClick={scrollToForm} variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                Выбрать Bronze
              </Button>
            </Card>

            {/* Silver */}
            <Card className="p-8 border-4 border-accent relative animate-fade-in scale-105 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl" style={{ animationDelay: "0.15s" }}>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold">
                ПОПУЛЯРНЫЙ
              </div>
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                  <span className="text-3xl">🥈</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-primary">SILVER</h3>
                <p className="text-4xl font-bold text-primary font-robotoMono">80 000 ₽<span className="text-lg font-normal">/месяц</span></p>
                <p className="text-sm text-muted-foreground mt-2">Для среднего бизнеса (3-10 станков)</p>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Техобслуживание 6 раз/год",
                  "Реакция инженера: 2-4 часа",
                  "Запчасти до 50 000 ₽/год включены",
                  "Скидка 20% на доп. запчасти",
                  "1 модернизация в год БЕСПЛАТНО",
                  "Поддержка: 24/5 + мессенджеры"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Icon name="Check" size={18} className="text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button onClick={scrollToForm} className="w-full bg-accent hover:bg-accent/90 text-white">
                Выбрать Silver 🔥
              </Button>
            </Card>

            {/* Gold */}
            <Card className="p-8 border-2 animate-fade-in transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" style={{ animationDelay: "0.3s" }}>
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 mb-4">
                  <span className="text-3xl">🥇</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-primary">GOLD</h3>
                <p className="text-4xl font-bold text-primary font-robotoMono">250 000 ₽<span className="text-lg font-normal">/месяц</span></p>
                <p className="text-sm text-muted-foreground mt-2">Для крупного производства (10+ станков)</p>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Техобслуживание ЕЖЕМЕСЯЧНО",
                  "Реакция инженера: 1-2 часа (24/7)",
                  "Запчасти до 200 000 ₽/год включены",
                  "Скидка 25% на доп. запчасти",
                  "Опция резервного станка",
                  "Персональный инженер",
                  "Приоритет в очереди"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Icon name="Check" size={18} className="text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button onClick={scrollToForm} variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                Выбрать Gold
              </Button>
            </Card>
          </div>
          <div className="text-center mt-12">
            <p className="text-lg mb-4">💡 Не знаете, какой пакет выбрать?</p>
            <p className="text-muted-foreground mb-6">Закажите бесплатный аудит — подберём оптимальное решение.</p>
            <Button onClick={scrollToForm} size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-success/5 to-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">Как начать работать с «Пумори 360»? 🚀</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                number: "1",
                icon: "ClipboardList",
                title: "Бесплатный аудит",
                description: "Оставляете заявку → наш инженер приезжает → проводит 47-точечную проверку станка → выявляет скрытые проблемы",
                result: "Полный отчёт + смета на ремонт (если нужен)",
                time: "24-48 часов"
              },
              {
                number: "2",
                icon: "Wrench",
                title: "Ремонт (если требуется)",
                description: "Вы получаете 3 варианта: минимум / оптимальный / полный → выбираете удобный → мы делаем качественный ремонт → станок работает как новый",
                result: "Оборудование в идеальном состоянии",
                time: "Гарантия: 6-12 месяцев на работы"
              },
              {
                number: "3",
                icon: "CheckCircle",
                title: "Подписка «Пумори 360»",
                description: "Выбираете пакет (Bronze/Silver/Gold) → подписываете договор → спите спокойно",
                result: "Станок обслуживается регулярно, работает стабильно, поломки предотвращаются",
                time: ""
              }
            ].map((step, index) => (
              <Card key={index} className="p-8 bg-white animate-fade-in transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-primary text-white flex items-center justify-center text-4xl font-bold font-robotoMono">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon name={step.icon as any} size={28} className="text-accent" />
                      <h3 className="text-2xl font-bold text-primary">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <div className="bg-success/10 border-l-4 border-success p-4 rounded">
                      <p className="text-sm font-semibold text-primary">Результат: <span className="font-normal text-muted-foreground">{step.result}</span></p>
                      {step.time && <p className="text-sm text-muted-foreground mt-1">Сроки: {step.time}</p>}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button onClick={scrollToForm} size="lg" className="bg-accent hover:bg-accent/90 text-white">
              <Icon name="Wrench" size={24} className="mr-2" />
              Начать с бесплатного аудита
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">Остались вопросы? 🤔</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: "Аудит действительно бесплатный?",
                  a: "Да, полностью. Мы не берём деньги за диагностику. Вы получаете отчёт и рекомендации без обязательств."
                },
                {
                  q: "Что делать, если станок сломается ночью?",
                  a: "Пакеты Silver и Gold включают круглосуточную поддержку. Инженер выезжает в течение 2-4 часов (Silver) или 1-2 часов (Gold)."
                },
                {
                  q: "Можно ли расторгнуть подписку?",
                  a: "Да, вы можете отказаться в любой момент. Минимальный срок — 3 месяца."
                },
                {
                  q: "Запчасти от вас или оригинальные?",
                  a: "Используем только оригинальные или сертифицированные аналоги. На все запчасти — гарантия производителя."
                },
                {
                  q: "Работаете ли вы с оборудованием других брендов?",
                  a: "Да, обслуживаем станки всех производителей. Наши инженеры имеют сертификаты Haas, DMG MORI, Fanuc и др."
                },
                {
                  q: "Сколько времени занимает переход на подписку?",
                  a: "От заявки до первого ТО — 5-7 дней. Начинаем с аудита, потом (если нужен) ремонт, затем регулярное обслуживание по графику."
                },
                {
                  q: "Что, если проблема окажется сложнее, чем в тарифе?",
                  a: "Обсуждаем индивидуально. Никаких скрытых доплат — всё прозрачно, согласовываем заранее."
                }
              ].map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-secondary/30">
                  <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline">
                    ❓ {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    ✅ {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainContent;
