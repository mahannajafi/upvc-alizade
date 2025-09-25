import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Users, Wrench } from "lucide-react";

const About = () => {
  const achievements = [
    { icon: Users, number: "۱۰۰۰+", label: "مشتری راضی" },
    { icon: Award, number: "۱۵+", label: "سال تجربه" },
    { icon: Wrench, number: "۵۰۰+", label: "پروژه تکمیل شده" },
    { icon: CheckCircle, number: "۱۰۰%", label: "رضایت مشتری" },
  ];

  const features = [
    "استفاده از بهترین مواد اولیه اروپایی",
    "تیم متخصص و مجرب",
    "گارانتی ۱۰ ساله کامل",
    "خدمات پس از فروش عالی",
    "قیمت های رقابتی و منصفانه",
    "نصب سریع و تمیز",
    "مشاوره رایگان و تخصصی",
    "طراحی سفارشی براساس نیاز شما",
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">درباره شرکت UPVC علیزاده</h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              شرکت UPVC علیزاده با بیش از ۱۵ سال تجربه در زمینه تولید، طراحی و نصب انواع پنجره و درب
              های UPVC، یکی از پیشروان این صنعت در کشور محسوب می‌شود.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              ما با استفاده از بهترین مواد اولیه اروپایی و به‌کارگیری جدیدترین تکنولوژی‌های روز،
              محصولاتی با کیفیت بالا و دوام طولانی تولید می‌کنیم که نیازهای مشتریان را به بهترین شکل
              پاسخ می‌دهد.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary ml-3 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-card transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-hover rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{achievement.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
