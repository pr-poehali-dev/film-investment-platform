import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    machines: "",
    description: "",
    agree: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Спасибо! Мы свяжемся с вами в течение 24 часов.");
  };

  const scrollToForm = () => {
    document.getElementById("audit-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-secondary">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Mountain" size={32} className="text-primary" />
            <div>
              <h1 className="text-2xl font-bold text-primary">ПУМОРИ</h1>
              <p className="text-xs text-muted-foreground">Сервис ЧПУ-оборудования</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+74951234567" className="hidden md:flex items-center gap-2 text-primary font-semibold">
              <Icon name="Phone" size={20} />
              +7 (495) 123-45-67
            </a>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Icon name="MessageCircle" size={20} className="text-success" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Icon name="Send" size={20} className="text-primary" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=2000')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            Ваше ЧПУ-оборудование работает<br />
            24/7 без простоев и поломок
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Подписка «Пумори 360» — регулярное обслуживание, быстрая поддержка и предсказуемые расходы
          </p>
          <Button 
            onClick={scrollToForm}
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            <Icon name="Wrench" size={24} className="mr-2" />
            Получить бесплатный аудит
          </Button>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center text-sm text-white/90">
            <div className="flex items-center justify-center gap-2">
              <Icon name="CheckCircle2" size={18} className="text-success" />
              <span>47-точечная проверка станка</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Icon name="CheckCircle2" size={18} className="text-success" />
              <span>Отчёт с рекомендациями за 24 часа</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Icon name="CheckCircle2" size={18} className="text-success" />
              <span>Полностью бесплатно, без обязательств</span>
            </div>
          </div>
        </div>
      </section>

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

      {/* Form Section */}
      <section id="audit-form" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Получите бесплатный аудит вашего оборудования 📋</h2>
              <p className="text-xl text-muted-foreground">Наш инженер приедет, проведёт 47-точечную проверку и подготовит отчёт с рекомендациями за 24 часа</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="md:col-span-2 p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-2"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="city">Город / адрес производства *</Label>
                    <Input
                      id="city"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="machines">Количество станков *</Label>
                    <Select
                      value={formData.machines}
                      onValueChange={(value) => setFormData({ ...formData, machines: value })}
                      required
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Выберите..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-3">1-3 станка</SelectItem>
                        <SelectItem value="3-5">3-5 станков</SelectItem>
                        <SelectItem value="5-10">5-10 станков</SelectItem>
                        <SelectItem value="10+">Более 10 станков</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="description">Опишите проблему (если есть)</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="mt-2"
                      rows={4}
                    />
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Checkbox
                      id="agree"
                      checked={formData.agree}
                      onCheckedChange={(checked) => setFormData({ ...formData, agree: checked as boolean })}
                      required
                    />
                    <Label htmlFor="agree" className="text-sm leading-tight cursor-pointer">
                      Согласен с политикой обработки персональных данных
                    </Label>
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-white text-lg py-6">
                    <Icon name="Wrench" size={24} className="mr-2" />
                    Заказать бесплатный аудит
                  </Button>
                </form>
                
                <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-success" />
                    <span>Выезд в течение 24-48 часов</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-success" />
                    <span>Отчёт с фото и рекомендациями</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-success" />
                    <span>Никаких скрытых платежей</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-success" />
                    <span>Работаем по всей России</span>
                  </div>
                </div>
              </Card>
              
              <Card className="p-8 bg-white h-fit">
                <h3 className="text-xl font-bold mb-6 text-primary">📞 Или позвоните нам:</h3>
                <a href="tel:+74951234567" className="block text-2xl font-bold text-primary hover:text-accent transition-colors mb-8">
                  +7 (495) 123-45-67
                </a>
                
                <h4 className="text-lg font-semibold mb-4 text-primary">💬 Напишите в мессенджер:</h4>
                <div className="space-y-3 mb-8">
                  <Button variant="outline" className="w-full justify-start" size="lg">
                    <Icon name="MessageCircle" size={20} className="mr-2 text-success" />
                    WhatsApp
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="lg">
                    <Icon name="Send" size={20} className="mr-2 text-primary" />
                    Telegram
                  </Button>
                </div>
                
                <h4 className="text-lg font-semibold mb-2 text-primary">📧 Email:</h4>
                <a href="mailto:info@pumori360.ru" className="text-accent hover:underline">info@pumori360.ru</a>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Mountain" size={32} />
                <h3 className="text-2xl font-bold">ПУМОРИ</h3>
              </div>
              <p className="text-white/70 text-sm">15 лет на рынке сервиса промышленного оборудования</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Услуги</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Кейсы</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Москва, ул. Промышленная, 12</li>
                <li><a href="tel:+74951234567" className="hover:text-white transition-colors">+7 (495) 123-45-67</a></li>
                <li><a href="mailto:info@pumori360.ru" className="hover:text-white transition-colors">info@pumori360.ru</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-3">
                <Button variant="ghost" size="icon" className="rounded-full bg-white/10 hover:bg-white/20">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full bg-white/10 hover:bg-white/20">
                  <Icon name="Send" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full bg-white/10 hover:bg-white/20">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>© 2025 ООО "Пумори". Все права защищены.</p>
            <p>ИНН: 1234567890 | ОГРН: 1234567890123</p>
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;