import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    messages: "",
  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_0n3pvtq", // 👈 از EmailJS بگیر
        "template_d9wlml7", // 👈 می‌تونی همون default template باشه
        formRef.current,
        "roQT0mz0CCaYdRonV" // 👈 از EmailJS Dashboard
      )
      .then(
        () => {
          toast({
            title: "پیام شما ارسال شد ✅",
            description: "ما در اسرع وقت با شما تماس خواهیم گرفت",
          });
          setFormData({ name: "", phone: "", messages: "" });
        },
        error => {
          console.error(error);
          toast({
            title: "خطا در ارسال پیام ❌",
            description: "لطفاً دوباره تلاش کنید",
          });
        }
      );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">تماس با ما</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            برای مشاوره رایگان و دریافت قیمت با ما در تماس باشید
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center ml-4">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">تلفن تماس</h3>
                    <p className="text-muted-foreground">021-12345678</p>
                    <p className="text-muted-foreground">09123456789</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center ml-4">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">آدرس</h3>
                    <p className="text-muted-foreground">
                      تهران، میدان ولیعصر، خیابان کریمخان زند، پلاک ۱۲۳
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center ml-4">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">ساعات کاری</h3>
                    <p className="text-muted-foreground">شنبه تا پنج‌شنبه: ۸ تا ۱۸</p>
                    <p className="text-muted-foreground">جمعه: ۹ تا ۱۳</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">فرم تماس سریع</CardTitle>
              </CardHeader>
              <CardContent>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      نام و نام خانوادگی *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="نام خود را وارد کنید"
                      required
                      className="text-right"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      شماره موبایل *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="09123456789"
                      required
                      className="text-right"
                    />
                  </div>

                  <div>
                    <label htmlFor="messages" className="block text-sm font-medium mb-2">
                      پیام شما
                    </label>
                    <Textarea
                      id="messages"
                      name="messages"
                      value={formData.messages}
                      onChange={handleChange}
                      placeholder="توضیحات پروژه خود را بنویسید..."
                      rows={5}
                      className="text-right"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-primary-hover"
                  >
                    ارسال پیام و درخواست تماس
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    پس از ارسال فرم، کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
