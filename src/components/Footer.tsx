import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">شرکت UPVC علیزاده</h3>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              با بیش از ۱۵ سال تجربه در تولید و نصب پنجره و درب UPVC، بهترین کیفیت را به شما ارائه
              می‌دهیم.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">لینک های سریع</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  خانه
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  خدمات
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  نمونه کارها
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  درباره ما
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  تماس با ما
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">خدمات ما</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-primary-foreground/80">پنجره UPVC</span>
              </li>
              <li>
                <span className="text-primary-foreground/80">درب UPVC</span>
              </li>
              <li>
                <span className="text-primary-foreground/80">توری و حفاظ</span>
              </li>
              <li>
                <span className="text-primary-foreground/80">نصب و تعمیر</span>
              </li>
              <li>
                <span className="text-primary-foreground/80">مشاوره رایگان</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">اطلاعات تماس</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 ml-3" />
                <span className="text-primary-foreground/80">021-12345678</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 ml-3" />
                <span className="text-primary-foreground/80">info@upvcpars.ir</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 ml-3 mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">گیلان, لنگرود , میدان غدیر </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-primary-foreground/60">
            © ۱۴۰۳ شرکت UPVC علیزاده. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
