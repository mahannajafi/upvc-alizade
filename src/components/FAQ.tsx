import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "مزایای پنجره UPVC نسبت به سایر انواع چیست؟",
      answer: "پنجره‌های UPVC دارای عایق حرارتی و صوتی عالی، مقاومت بالا در برابر آب و هوا، عدم نیاز به نگهداری خاص، قیمت مناسب و عمر طولانی هستند. همچنین در برابر UV مقاوم بوده و رنگ خود را حفظ می‌کنند."
    },
    {
      question: "گارانتی محصولات شما چقدر است؟",
      answer: "ما برای تمامی محصولات خود 10 سال گارانتی ارائه می‌دهیم که شامل نقص ساخت، تغییر رنگ، و مشکلات عملکردی می‌شود. همچنین خدمات پس از فروش رایگان نیز ارائه می‌دهیم."
    },
    {
      question: "زمان تحویل و نصب چقدر طول می‌کشد؟",
      answer: "معمولاً بعد از اندازه‌گیری دقیق، تولید محصولات 7 تا 14 روز کاری زمان می‌برد. نصب نیز بسته به تعداد و پیچیدگی کار، 1 تا 3 روز زمان نیاز دارد."
    },
    {
      question: "آیا امکان سفارش در رنگ‌های مختلف وجود دارد؟",
      answer: "بله، ما امکان تولید در رنگ‌های مختلف از جمله سفید، کرم، قهوه‌ای، طوسی و رنگ‌های چوبی را داریم. همچنین امکان رنگ‌آمیزی سفارشی نیز وجود دارد."
    },
    {
      question: "هزینه مشاوره و اندازه‌گیری چقدر است؟",
      answer: "مشاوره و اندازه‌گیری کاملاً رایگان است. کارشناسان ما به محل شما مراجعه کرده و بهترین راه‌حل را بر اساس نیاز شما ارائه می‌دهند."
    },
    {
      question: "نحوه نگهداری و تمیز کردن پنجره‌های UPVC چگونه است؟",
      answer: "نگهداری پنجره‌های UPVC بسیار آسان است. کافی است با آب و صابون ملایم تمیز کنید. از مواد شیمیایی قوی و ساینده استفاده نکنید. یکی از مزایای UPVC همین سادگی نگهداری است."
    },
    {
      question: "آیا امکان تعمیر و تعویض قطعات وجود دارد؟",
      answer: "بله، تمامی قطعات قابل تعمیر و تعویض هستند. ما خدمات تعمیرات و تعویض قطعات آسیب‌دیده را ارائه می‌دهیم. همچنین قطعات یدکی نیز موجود است."
    },
    {
      question: "پنجره‌های شما دارای چه نوع شیشه‌ای هستند؟",
      answer: "ما از شیشه‌های دو و سه جداره با کیفیت بالا استفاده می‌کنیم. این شیشه‌ها دارای لایه Low-E برای بهبود عایق حرارتی و کاهش هزینه‌های سرمایش و گرمایش هستند."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
            سوالات متداول
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            پاسخ سوالات رایج در مورد محصولات و خدمات ما
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 hover:shadow-sm transition-shadow animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-right hover:no-underline py-6">
                  <span className="font-semibold text-foreground text-lg">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12 animate-fade-in-up">
          <p className="text-muted-foreground mb-6">
            سوال دیگری دارید؟
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-hover transition-colors"
            >
              تماس با ما
            </a>
            <a 
              href="tel:+982112345678" 
              className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-muted/50 transition-colors"
            >
              ۰۲۱-۱۲۳۴۵۶۷۸
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;