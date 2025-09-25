import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      name: "احمد محمدی",
      role: "صاحب خانه",
      content: "پنجره‌های UPVC که نصب کردند واقعاً فوق‌العاده هستند. کیفیت بالا، نصب حرفه‌ای و خدمات پس از فروش عالی. به همه توصیه می‌کنم.",
      rating: 5,
      location: "تهران"
    },
    {
      name: "فاطمه رضایی",
      role: "مدیر پروژه",
      content: "برای ساختمان اداری‌مان از خدمات این شرکت استفاده کردیم. زمان‌بندی دقیق، کیفیت عالی و قیمت مناسب. کاملاً راضی هستیم.",
      rating: 5,
      location: "اصفهان"
    },
    {
      name: "علی اکبری",
      role: "سازنده",
      content: "سال‌هاست با این شرکت همکاری می‌کنم. کیفیت محصولات و سرعت تحویل همیشه مرا راضی کرده. پارتنر قابل اعتماد من هستند.",
      rating: 5,
      location: "شیراز"
    },
    {
      name: "مریم حسینی",
      role: "صاحب خانه",
      content: "درب ورودی و پنجره‌های خانه‌ام را تعویض کردم. نتیجه فراتر از انتظارم بود. عایق صوتی و حرارتی فوق‌العاده‌ای دارند.",
      rating: 5,
      location: "مشهد"
    },
    {
      name: "رضا یوسفی",
      role: "معمار",
      content: "به عنوان معمار، کیفیت محصولات برایم خیلی مهمه. این شرکت همیشه بهترین کیفیت را ارائه می‌ده و تو پروژه‌هام ازشون استفاده می‌کنم.",
      rating: 5,
      location: "کرج"
    },
    {
      name: "زهرا صالحی",
      role: "صاحب خانه",
      content: "مشاوره رایگان‌شون واقعاً کاربردی بود. کمک کردند بهترین نوع پنجره رو برای خونه‌م انتخاب کنم. خیلی خوشحالم از انتخابم.",
      rating: 5,
      location: "تبریز"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
            نظرات مشتریان ما
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            تجربه واقعی مشتریان ما از کیفیت خدمات و محصولات شرکت
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover:shadow-card transition-all duration-300 animate-scale-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-12 h-12 text-primary" />
                </div>
                
                <div className="flex items-center mb-4">
                  <Avatar className="w-12 h-12 ml-4">
                    <AvatarFallback className="bg-primary text-primary-foreground text-lg font-bold">
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role} • {testimonial.location}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed text-sm">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="font-bold text-lg">4.9</span>
            <span className="text-muted-foreground">از 5 | بر اساس +500 نظر</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;