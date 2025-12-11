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
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";

const AuditForm = () => {
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

  return (
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
  );
};

export default AuditForm;
