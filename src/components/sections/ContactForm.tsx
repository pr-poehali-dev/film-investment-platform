import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    machines: '',
    description: '',
    agreed: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreed) {
      toast({
        title: 'Ошибка',
        description: 'Необходимо согласиться с политикой обработки данных',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Заявка отправлена! 🎉',
      description: 'Мы свяжемся с вами в ближайшее время',
    });

    setFormData({
      name: '',
      phone: '',
      email: '',
      city: '',
      machines: '',
      description: '',
      agreed: false,
    });
  };

  return (
    <section id="contact-form" className="py-20 bg-gradient-to-br from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Получите бесплатный аудит
            <br />
            вашего оборудования 📋
          </h1>
          <p className="text-xl text-muted-foreground">
            Наш инженер приедет, проведёт 47-точечную проверку
            и подготовит отчёт с рекомендациями за 24 часа
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="space-y-6">
              <div>
                <Input
                  placeholder="Ваше имя *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12"
                />
              </div>

              <div>
                <Input
                  type="tel"
                  placeholder="Телефон * +7 (___) ___-__-__"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="h-12"
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12"
                />
              </div>

              <div>
                <Input
                  placeholder="Город / адрес производства *"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  required
                  className="h-12"
                />
              </div>

              <div>
                <Select value={formData.machines} onValueChange={(v) => setFormData({ ...formData, machines: v })}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Количество станков *" />
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
                <Textarea
                  placeholder="Опишите проблему (если есть)"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="agreed"
                  checked={formData.agreed}
                  onCheckedChange={(checked) => setFormData({ ...formData, agreed: !!checked })}
                />
                <label htmlFor="agreed" className="text-sm text-muted-foreground cursor-pointer">
                  Согласен с политикой обработки персональных данных
                </label>
              </div>

              <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-lg font-bold">
                <Icon name="Wrench" className="w-5 h-5 mr-2" />
                Заказать бесплатный аудит
              </Button>
            </div>
          </form>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              {[
                'Выезд в течение 24-48 часов',
                'Отчёт с фото и рекомендациями',
                'Никаких скрытых платежей',
                'Работаем по всей России',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Icon name="Check" className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">📞 Или позвоните нам:</h3>

              <a href="tel:+73432875737" className="text-3xl font-bold text-primary hover:text-primary/80 block mb-2">
                +7 (343) 287-57-37
              </a>
              <p className="text-muted-foreground mb-6">Пн-Пт: 9:00-18:00</p>

              <h4 className="font-bold mb-4">💬 Напишите в Telegram:</h4>
              <a 
                href="https://t.me/pumori_service" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="w-full">
                  <Icon name="Send" className="w-5 h-5 mr-2" />
                  Telegram
                </Button>
              </a>

              <div className="mt-6 pt-6 border-t">
                <p className="text-muted-foreground">📧 Email:</p>
                <a href="mailto:pii@pumori.ru" className="text-lg font-semibold text-primary hover:underline">
                  pii@pumori.ru
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}