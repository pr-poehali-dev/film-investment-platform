import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

export default function Calculator() {
  const [hours, setHours] = useState(24);
  const [engineers, setEngineers] = useState(2);
  const [urgency, setUrgency] = useState('planned');
  const [weekend, setWeekend] = useState(false);
  const [location, setLocation] = useState('moscow');
  const [parts, setParts] = useState('');

  const baseRate = 6000;
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const baseCost = hours * engineers * baseRate;
    let coefficients = 0;

    if (urgency === 'urgent') coefficients += baseCost * 0.2;
    if (urgency === 'emergency') coefficients += baseCost * 0.5;
    if (weekend) coefficients += baseCost * 0.3;
    if (location === 'region500') coefficients += baseCost * 0.15;
    if (location === 'region500plus') coefficients += baseCost * 0.3;

    const workCost = baseCost + coefficients;
    const partsCost = parts ? parseInt(parts.replace(/\s/g, '')) || 0 : 0;
    
    setTotalCost(workCost + partsCost);
  }, [hours, engineers, urgency, weekend, location, parts]);

  const formatPrice = (price: number) => {
    return price.toLocaleString('ru-RU') + ' ₽';
  };

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-8 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">РАССЧИТАЙТЕ СТОИМОСТЬ РЕМОНТА</h2>
          <p className="text-xl text-muted-foreground mb-2">Прозрачное ценообразование</p>
          <p className="text-sm text-muted-foreground">
            Базовая ставка: 6 000 ₽/час на одного сервисного инженера + стоимость запчастей
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-6">ПАРАМЕТРЫ РЕМОНТА</h3>

            <div>
              <label className="text-sm font-medium mb-3 block">Тип работ:</label>
              <select 
                className="w-full p-3 border rounded text-sm"
                onChange={(e) => setHours(parseInt(e.target.value))}
                value={hours}
              >
                <option value="3">Диагностика и настройка (2-4 часа)</option>
                <option value="6">Мелкий ремонт (4-8 часов)</option>
                <option value="12">Средний ремонт (8-16 часов)</option>
                <option value="24">Крупный ремонт (16-40 часов)</option>
                <option value="80">Капитальный ремонт (40-120 часов)</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium mb-3 block">
                Предполагаемое время работ: <span className="font-mono text-primary">{hours}</span> часов
              </label>
              <Slider 
                min={1} 
                max={120} 
                step={1} 
                value={[hours]}
                onValueChange={(value) => setHours(value[0])}
                className="mb-2"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>1 час</span>
                <span>120 часов</span>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-3 block">
                Количество инженеров: <span className="font-mono text-primary">{engineers}</span> чел.
              </label>
              <Slider 
                min={1} 
                max={4} 
                step={1} 
                value={[engineers]}
                onValueChange={(value) => setEngineers(value[0])}
                className="mb-2"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>1</span>
                <span>4</span>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-3 block">Срочность выезда:</label>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 border rounded cursor-pointer hover:bg-muted">
                  <input 
                    type="radio" 
                    name="urgency" 
                    value="planned" 
                    checked={urgency === 'planned'}
                    onChange={(e) => setUrgency(e.target.value)}
                  />
                  <span className="text-sm">Плановый (2-5 дней) — без наценки</span>
                </label>
                <label className="flex items-center gap-3 p-3 border rounded cursor-pointer hover:bg-muted">
                  <input 
                    type="radio" 
                    name="urgency" 
                    value="urgent" 
                    checked={urgency === 'urgent'}
                    onChange={(e) => setUrgency(e.target.value)}
                  />
                  <span className="text-sm">Срочный (24 часа) — +20%</span>
                </label>
                <label className="flex items-center gap-3 p-3 border rounded cursor-pointer hover:bg-muted">
                  <input 
                    type="radio" 
                    name="urgency" 
                    value="emergency" 
                    checked={urgency === 'emergency'}
                    onChange={(e) => setUrgency(e.target.value)}
                  />
                  <span className="text-sm">Экстренный (2-4 часа) — +50%</span>
                </label>
              </div>
            </div>

            <label className="flex items-center gap-3 p-3 border rounded cursor-pointer hover:bg-muted">
              <input 
                type="checkbox" 
                checked={weekend}
                onChange={(e) => setWeekend(e.target.checked)}
              />
              <span className="text-sm">Выезд в выходные/праздники (+30%)</span>
            </label>

            <div>
              <label className="text-sm font-medium mb-3 block">Удалённость объекта:</label>
              <select 
                className="w-full p-3 border rounded text-sm"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="moscow">Москва / Московская область</option>
                <option value="region500">Регионы (до 500 км) — +15%</option>
                <option value="region500plus">Регионы (500+ км) — +30% + командировочные</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium mb-3 block">Необходимые запчасти (опционально):</label>
              <input 
                type="text" 
                placeholder="0"
                className="w-full p-3 border rounded text-sm"
                value={parts}
                onChange={(e) => setParts(e.target.value)}
              />
              <p className="text-xs text-muted-foreground mt-2">Ориентировочная стоимость, если известна</p>
            </div>
          </div>

          <div>
            <div className="bg-muted rounded p-8 sticky top-24">
              <h3 className="text-xl font-semibold mb-6">СТОИМОСТЬ РАБОТ</h3>
              <div className="h-0.5 bg-border w-16 mb-6" />

              <div className="space-y-3 text-sm mb-6">
                <div className="flex justify-between">
                  <span>Базовая ставка:</span>
                  <span className="font-mono">6,000 ₽/час</span>
                </div>
                <div className="flex justify-between">
                  <span>Количество часов:</span>
                  <span className="font-mono">{hours} часа</span>
                </div>
                <div className="flex justify-between">
                  <span>Количество инженеров:</span>
                  <span className="font-mono">{engineers} чел.</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between font-medium">
                    <span>Работы (базовая):</span>
                    <span className="font-mono">{formatPrice(hours * engineers * baseRate)}</span>
                  </div>
                </div>
              </div>

              {(urgency !== 'planned' || weekend || location !== 'moscow') && (
                <div className="mb-6">
                  <p className="text-sm font-medium mb-2">Коэффициенты:</p>
                  <div className="space-y-2 text-sm">
                    {urgency === 'urgent' && (
                      <div className="flex justify-between">
                        <span>• Срочность (+20%):</span>
                        <span className="font-mono">+{formatPrice(hours * engineers * baseRate * 0.2)}</span>
                      </div>
                    )}
                    {urgency === 'emergency' && (
                      <div className="flex justify-between">
                        <span>• Экстренный (+50%):</span>
                        <span className="font-mono">+{formatPrice(hours * engineers * baseRate * 0.5)}</span>
                      </div>
                    )}
                    {weekend && (
                      <div className="flex justify-between">
                        <span>• Выходной день (+30%):</span>
                        <span className="font-mono">+{formatPrice(hours * engineers * baseRate * 0.3)}</span>
                      </div>
                    )}
                    {location === 'region500' && (
                      <div className="flex justify-between">
                        <span>• Удалённость (+15%):</span>
                        <span className="font-mono">+{formatPrice(hours * engineers * baseRate * 0.15)}</span>
                      </div>
                    )}
                    {location === 'region500plus' && (
                      <div className="flex justify-between">
                        <span>• Удалённость (+30%):</span>
                        <span className="font-mono">+{formatPrice(hours * engineers * baseRate * 0.3)}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {parts && (
                <div className="mb-6">
                  <div className="flex justify-between text-sm">
                    <span>Запчасти:</span>
                    <span className="font-mono">+{formatPrice(parseInt(parts.replace(/\s/g, '')) || 0)}</span>
                  </div>
                </div>
              )}

              <div className="border-t-2 border-primary pt-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">ОБЩАЯ СТОИМОСТЬ:</span>
                  <span className="text-2xl font-bold text-primary font-mono">{formatPrice(totalCost)}</span>
                </div>
              </div>

              <Button onClick={scrollToForm} className="w-full bg-accent hover:bg-accent/90 mb-4">
                Заказать выезд инженера
              </Button>

              <div className="text-xs text-muted-foreground space-y-1">
                <p>* Точная стоимость определяется после диагностики</p>
                <p>* Бесплатный аудит для оценки объёма работ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
