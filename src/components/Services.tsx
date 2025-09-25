import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RectangleHorizontal, DoorOpen, Shield, Wrench, PaintBucket, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: RectangleHorizontal,
      title: "پنجره UPVC",
      description: "انواع پنجره های کشویی، بازشویی، فیکس و ترکیبی با بهترین کیفیت",
      features: ["عایق حرارتی عالی", "ضد آب و نم", "عایق صوتی", "مقاوم در برابر UV"]
    },
    {
      icon: DoorOpen,
      title: "درب UPVC",
      description: "درب های ورودی و داخلی با طراحی مدرن و کیفیت اروپایی",
      features: ["ضد سرقت", "عایق کامل", "طراحی زیبا", "قفل چندنقطه‌ای"]
    },
    {
      icon: Shield,
      title: "توری و حفاظ",
      description: "توری های پلیسه ای و حفاظ های تزیینی برای امنیت و زیبایی",
      features: ["آنتی باگ", "قابل شستشو", "مقاوم", "طراحی شیک"]
    },
    {
      icon: Wrench,
      title: "نصب و تعمیر",
      description: "خدمات نصب حرفه‌ای و تعمیرات تخصصی با گارانتی کامل",
      features: ["نصب فوری", "گارانتی ۱۰ ساله", "خدمات پس از فروش", "تیم متخصص"]
    },
    {
      icon: PaintBucket,
      title: "رنگ و طراحی",
      description: "امکان سفارش در رنگ های مختلف و طراحی های سفارشی",
      features: ["رنگ های متنوع", "طراحی سفارشی", "رنگ بندی دوام", "انتخاب شخصی"]
    },
    {
      icon: Sparkles,
      title: "مشاوره رایگان",
      description: "مشاوره تخصصی رایگان برای انتخاب بهترین گزینه برای شما",
      features: ["بازدید رایگان", "مشاوره تخصصی", "محاسبه دقیق", "پیشنهاد بهترین"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            خدمات ما
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            تمامی خدمات مربوط به UPVC را با بالاترین کیفیت و بهترین قیمت ارائه می‌دهیم
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-500 hover:-translate-y-2 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-hover rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;