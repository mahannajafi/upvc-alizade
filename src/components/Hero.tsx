import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-upvc.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl text-right">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            پنجره و درب
            <span className="text-secondary block">UPVC</span>
            با کیفیت اروپایی
          </h1>

          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            با بیش از ۱۵ سال تجربه در تولید و نصب پنجره و درب UPVC، بهترین کیفیت و خدمات پس از فروش
            را به شما ارائه می‌دهیم.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary-hover text-secondary-foreground font-semibold px-8 py-4 text-lg"
            >
              مشاهده نمونه کارها
              <ArrowLeft className="mr-2 w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white text-black hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg"
            >
              تماس با ما
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="text-white">
              <div className="flex justify-center mb-2">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-2xl font-bold">۱۰۰۰+</div>
              <div className="text-sm opacity-90">مشتری راضی</div>
            </div>

            <div className="text-white">
              <div className="flex justify-center mb-2">
                <Award className="w-8 h-8" />
              </div>
              <div className="text-2xl font-bold">۱۵+</div>
              <div className="text-sm opacity-90">سال تجربه</div>
            </div>

            <div className="text-white">
              <div className="flex justify-center mb-2">
                <Shield className="w-8 h-8" />
              </div>
              <div className="text-2xl font-bold">۱۰</div>
              <div className="text-sm opacity-90">سال گارانتی</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
