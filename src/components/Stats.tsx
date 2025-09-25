import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Award, Clock } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: "2000+",
      label: "پروژه موفق",
      description: "پنجره و درب نصب شده"
    },
    {
      icon: Users,
      number: "1500+",
      label: "مشتری راضی",
      description: "در سراسر کشور"
    },
    {
      icon: Award,
      number: "15+",
      label: "سال تجربه",
      description: "در صنعت UPVC"
    },
    {
      icon: Clock,
      number: "10",
      label: "سال گارانتی",
      description: "روی تمام محصولات"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
            آمار و ارقام ما
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            اعتماد هزاران مشتری، نتیجه سال‌ها تلاش و کیفیت بالا
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-card transition-all duration-300 animate-scale-in border-0 bg-background/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2 font-vazir">
                  {stat.number}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;