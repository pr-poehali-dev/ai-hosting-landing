import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [demoText, setDemoText] = useState('Привет, мир!');
  const [isEditing, setIsEditing] = useState(false);

  const handleAIEdit = () => {
    setIsEditing(true);
    setTimeout(() => {
      setDemoText('Готово! AI изменил текст за секунду ✨');
      setIsEditing(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--darker-bg))] to-[hsl(var(--dark-bg))]">
      <nav className="fixed w-full z-50 glass border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gradient">AI Hosting</h1>
          <div className="flex gap-6 items-center">
            <a href="#features" className="text-foreground/80 hover:text-foreground transition">Возможности</a>
            <a href="#pricing" className="text-foreground/80 hover:text-foreground transition">Тарифы</a>
            <a href="#faq" className="text-foreground/80 hover:text-foreground transition">FAQ</a>
            <a href="#contact" className="text-foreground/80 hover:text-foreground transition">Контакты</a>
            <Button className="glow-cyan">Начать</Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-6xl font-black mb-6 leading-tight">
                Редактируй сайты через{' '}
                <span className="text-gradient">AI</span>
              </h2>
              <p className="text-xl text-foreground/70 mb-8">
                Первый хостинг с встроенным ИИ-редактором. Меняй контент голосом или текстом — без программирования.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="glow-cyan text-lg px-8">
                  <Icon name="Rocket" className="mr-2" />
                  Попробовать бесплатно
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Icon name="Play" className="mr-2" />
                  Смотреть демо
                </Button>
              </div>
            </div>

            <Card className="glass p-8 animate-fade-in glow-purple">
              <div className="mb-4 flex justify-between items-center">
                <span className="text-sm text-foreground/60">Живая демонстрация AI</span>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              
              <div className="bg-background/50 rounded-lg p-6 mb-4 min-h-[120px] flex items-center justify-center">
                <p className={`text-2xl font-semibold ${isEditing ? 'animate-pulse-glow' : ''}`}>
                  {demoText}
                </p>
              </div>

              <div className="space-y-3">
                <Input 
                  placeholder="Скажи AI что изменить..." 
                  className="bg-background/30 border-primary/30"
                />
                <Button 
                  onClick={handleAIEdit} 
                  className="w-full glow-cyan"
                  disabled={isEditing}
                >
                  {isEditing ? (
                    <>
                      <Icon name="Loader2" className="mr-2 animate-spin" />
                      AI думает...
                    </>
                  ) : (
                    <>
                      <Icon name="Wand2" className="mr-2" />
                      Применить изменения
                    </>
                  )}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-black text-center mb-16 text-gradient">Возможности</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Sparkles',
                title: 'AI-редактор',
                description: 'Меняй дизайн и контент через естественный язык. Просто скажи что хочешь изменить.'
              },
              {
                icon: 'Zap',
                title: 'Молниеносная скорость',
                description: 'CDN в 50+ странах. Время загрузки < 100мс. Твой сайт быстрее конкурентов.'
              },
              {
                icon: 'Shield',
                title: 'Защита 24/7',
                description: 'DDoS-защита, SSL-сертификаты, автобэкапы. Спи спокойно.'
              },
              {
                icon: 'BarChart3',
                title: 'Умная аналитика',
                description: 'AI анализирует посетителей и дает рекомендации по улучшению конверсии.'
              },
              {
                icon: 'Cpu',
                title: 'Автомасштабирование',
                description: 'Система сама добавляет ресурсы при нагрузке. Забудь про падения.'
              },
              {
                icon: 'Globe',
                title: 'Мультиязычность',
                description: 'AI переводит сайт на 50+ языков за секунды. Выходи на мировой рынок.'
              }
            ].map((feature, i) => (
              <Card key={i} className="glass p-6 hover:glow-cyan transition-all duration-300 cursor-pointer group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={feature.icon} size={28} className="text-background" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6 bg-gradient-to-b from-transparent to-background/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-black text-center mb-4 text-gradient">Тарифы</h2>
          <p className="text-center text-foreground/70 mb-16 text-lg">Выбери план под свои задачи</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Старт',
                price: '990',
                features: ['1 сайт', '10 GB хранилища', '100 AI-правок/месяц', 'SSL-сертификат', 'Базовая поддержка']
              },
              {
                name: 'Про',
                price: '2990',
                popular: true,
                features: ['5 сайтов', '50 GB хранилища', 'Безлимит AI-правок', 'Priority CDN', 'Приоритетная поддержка', 'Кастомные домены']
              },
              {
                name: 'Бизнес',
                price: '9990',
                features: ['Безлимит сайтов', '500 GB хранилища', 'Безлимит AI-правок', 'Dedicated CDN', 'VIP поддержка 24/7', 'White Label', 'API доступ']
              }
            ].map((plan, i) => (
              <Card key={i} className={`glass p-8 relative ${plan.popular ? 'glow-purple border-2 border-secondary' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-secondary to-accent px-6 py-1 rounded-full text-sm font-bold">
                    Популярный
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-black text-gradient">{plan.price}</span>
                  <span className="text-foreground/60"> ₽/мес</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-0.5" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className={`w-full ${plan.popular ? 'glow-purple' : ''}`} variant={plan.popular ? 'default' : 'outline'}>
                  Выбрать план
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-5xl font-black text-center mb-16 text-gradient">FAQ</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: 'Как работает AI-редактор?',
                a: 'Ты пишешь на русском что хочешь изменить (например: "сделай заголовок синим"), AI анализирует запрос и моментально применяет изменения к сайту.'
              },
              {
                q: 'Нужны ли навыки программирования?',
                a: 'Абсолютно нет! Весь интерфейс построен на естественном языке. Просто описывай что хочешь — AI сделает за тебя.'
              },
              {
                q: 'Можно ли перенести существующий сайт?',
                a: 'Да, мы поддерживаем миграцию с любых платформ. Просто загрузи файлы или дай нам доступ — перенесем за 5 минут.'
              },
              {
                q: 'Что если сайт упадет?',
                a: 'Гарантия uptime 99.99%. Автоматические бэкапы каждые 6 часов. Если что-то сломается — откатим за секунду.'
              },
              {
                q: 'Можно ли отменить подписку?',
                a: 'Конечно! Никаких обязательств. Отменяй в любой момент из личного кабинета. Деньги вернем за неиспользованные дни.'
              }
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="glass border-white/10">
                <AccordionTrigger className="px-6 text-left hover:text-primary">
                  <span className="font-semibold">{item.q}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-foreground/70">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-gradient-to-t from-background/50 to-transparent">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-5xl font-black text-center mb-4 text-gradient">Остались вопросы?</h2>
          <p className="text-center text-foreground/70 mb-12 text-lg">Напиши нам — ответим за 15 минут</p>
          
          <Card className="glass p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input 
                  placeholder="Твое имя" 
                  className="bg-background/30 border-white/10"
                />
                <Input 
                  type="email"
                  placeholder="Email" 
                  className="bg-background/30 border-white/10"
                />
              </div>
              
              <Textarea 
                placeholder="Расскажи о своем проекте..." 
                rows={5}
                className="bg-background/30 border-white/10 resize-none"
              />
              
              <Button className="w-full glow-cyan text-lg" size="lg">
                <Icon name="Send" className="mr-2" />
                Отправить сообщение
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="border-t border-white/10 py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-gradient">AI Hosting</h3>
              <p className="text-foreground/60 text-sm">
                Будущее веб-разработки уже здесь
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-primary transition">Возможности</a></li>
                <li><a href="#" className="hover:text-primary transition">Тарифы</a></li>
                <li><a href="#" className="hover:text-primary transition">Документация</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-primary transition">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition">Блог</a></li>
                <li><a href="#" className="hover:text-primary transition">Карьера</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Связь</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:glow-cyan transition">
                  <Icon name="Twitter" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:glow-cyan transition">
                  <Icon name="Github" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:glow-cyan transition">
                  <Icon name="Linkedin" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center text-foreground/60 text-sm">
            © 2024 AI Hosting. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
