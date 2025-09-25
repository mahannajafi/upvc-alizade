import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background shadow-sm border-b">
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>021-12345678</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>لنگرود ,میدان غدیر</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">شرکت UPVC علیزاده</div>

          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              خانه
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              خدمات
            </a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">
              نمونه کارها
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              درباره ما
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              تماس
            </a>
          </div>

          <Button variant="default" className="bg-gradient-to-r from-primary to-primary-hover">
            مشاوره رایگان
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
