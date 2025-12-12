import { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

export default function ROICalculator() {
  const [machines, setMachines] = useState(5);
  const [downtimeCost, setDowntimeCost] = useState(15000);
  const [breakdowns, setBreakdowns] = useState(8);
  const [downtimeHours, setDowntimeHours] = useState(48);
  const [emergencyRepairCost, setEmergencyRepairCost] = useState(120000);
  const [selectedPlan, setSelectedPlan] = useState<'bronze' | 'silver' | 'gold'>('silver');

  const plans = {
    bronze: { name: 'Bronze', price: 30000 },
    silver: { name: 'Silver', price: 80000 },
    gold: { name: 'Gold', price: 250000 },
  };

  const currentDowntimeLoss = breakdowns * downtimeHours * downtimeCost;
  const currentRepairCost = breakdowns * emergencyRepairCost;
  const currentPartsCost = 500000;
  const currentTotal = currentDowntimeLoss + currentRepairCost + currentPartsCost;

  const subscriptionYearlyCost = plans[selectedPlan].price * 12;
  const withSubDowntimeLoss = Math.round(currentDowntimeLoss * 0.2);
  const withSubRepairCost = Math.round(currentRepairCost * 0.3);
  const withSubPartsCost = Math.round(currentPartsCost * 0.3);
  const withSubTotal = subscriptionYearlyCost + withSubDowntimeLoss + withSubRepairCost + withSubPartsCost;

  const savings = currentTotal - withSubTotal;
  const roi = Math.round((savings / subscriptionYearlyCost) * 100);
  const paybackMonths = (subscriptionYearlyCost / (savings / 12)).toFixed(1);

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="calculator" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            💰 Рассчитайте свою экономию за 60 секунд
          </h2>
          <p className="text-xl text-muted-foreground">
            Введите ваши данные — увидите, сколько сэкономите с подпиской
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-yellow-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-8">📊 Введите ваши данные:</h3>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-3">
                  <label className="font-semibold">Количество станков ЧПУ:</label>
                  <span className="text-primary font-bold text-lg">{machines} шт</span>
                </div>
                <Slider value={[machines]} onValueChange={(v) => setMachines(v[0])} min={1} max={20} step={1} />
                <p className="text-sm text-muted-foreground mt-2">От 1 до 20</p>
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <label className="font-semibold">Стоимость часа простоя:</label>
                  <span className="text-primary font-bold text-lg">{downtimeCost.toLocaleString()} ₽/час</span>
                </div>
                <Slider value={[downtimeCost]} onValueChange={(v) => setDowntimeCost(v[0])} min={5000} max={50000} step={1000} />
                <p className="text-sm text-muted-foreground mt-2">Потери при остановке производства</p>
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <label className="font-semibold">Поломок в год (сейчас):</label>
                  <span className="text-primary font-bold text-lg">{breakdowns} раз</span>
                </div>
                <Slider value={[breakdowns]} onValueChange={(v) => setBreakdowns(v[0])} min={1} max={20} step={1} />
                <p className="text-sm text-muted-foreground mt-2">Сколько аварийных ремонтов было в прошлом году?</p>
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <label className="font-semibold">Средний простой:</label>
                  <span className="text-primary font-bold text-lg">{downtimeHours} часов</span>
                </div>
                <Slider value={[downtimeHours]} onValueChange={(v) => setDowntimeHours(v[0])} min={12} max={168} step={12} />
                <p className="text-sm text-muted-foreground mt-2">Сколько времени станок не работает при поломке</p>
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <label className="font-semibold">Стоимость аварийного ремонта:</label>
                  <span className="text-primary font-bold text-lg">{emergencyRepairCost.toLocaleString()} ₽</span>
                </div>
                <Slider value={[emergencyRepairCost]} onValueChange={(v) => setEmergencyRepairCost(v[0])} min={50000} max={300000} step={10000} />
                <p className="text-sm text-muted-foreground mt-2">Средний чек экстренного ремонта</p>
              </div>

              <div>
                <label className="font-semibold block mb-3">Выберите пакет:</label>
                <Select value={selectedPlan} onValueChange={(v: any) => setSelectedPlan(v)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bronze">Bronze (30,000 ₽/мес)</SelectItem>
                    <SelectItem value="silver">Silver (80,000 ₽/мес) ⭐ Популярный</SelectItem>
                    <SelectItem value="gold">Gold (250,000 ₽/мес)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-red-50 border-2 border-destructive rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                📉 ВАШИ ТЕКУЩИЕ РАСХОДЫ
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Потери от простоев:</span>
                  <span className="font-bold">{currentDowntimeLoss.toLocaleString()} ₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Аварийные ремонты:</span>
                  <span className="font-bold">{currentRepairCost.toLocaleString()} ₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Запчасти:</span>
                  <span className="font-bold">{currentPartsCost.toLocaleString()} ₽</span>
                </div>
              </div>
              <div className="border-t-2 border-destructive pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">ИТОГО в год:</span>
                  <span className="text-3xl font-robotoMono font-bold text-destructive">
                    {currentTotal.toLocaleString()} ₽ ❌
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-2 border-success rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                📈 С ПОДПИСКОЙ {plans[selectedPlan].name.toUpperCase()}
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Стоимость подписки:</span>
                  <span className="font-bold">{subscriptionYearlyCost.toLocaleString()} ₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Потери от простоев (-80%):</span>
                  <span className="font-bold">{withSubDowntimeLoss.toLocaleString()} ₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Аварийные ремонты (-70%):</span>
                  <span className="font-bold">{withSubRepairCost.toLocaleString()} ₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Запчасти (-70%):</span>
                  <span className="font-bold">{withSubPartsCost.toLocaleString()} ₽</span>
                </div>
              </div>
              <div className="border-t-2 border-success pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">ИТОГО в год:</span>
                  <span className="text-3xl font-robotoMono font-bold text-success">
                    {withSubTotal.toLocaleString()} ₽ ✅
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-success text-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">✅ ВАША ЭКОНОМИЯ</h3>
              <div className="text-6xl font-robotoMono font-bold mb-6">
                💰 {savings.toLocaleString()} ₽/год
              </div>
              <div className="flex gap-8 pb-6 border-b border-white/30">
                <div>
                  <p className="text-white/80">ROI:</p>
                  <p className="text-3xl font-bold">{roi}%</p>
                </div>
                <div>
                  <p className="text-white/80">Окупаемость:</p>
                  <p className="text-3xl font-bold">{paybackMonths} мес</p>
                </div>
              </div>
              <Button onClick={scrollToForm} size="lg" className="w-full mt-6 bg-white text-success hover:bg-white/90 font-bold text-lg">
                Получить бесплатный аудит →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
