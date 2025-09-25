import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, ExternalLink } from "lucide-react";
import windowsGallery from "@/assets/windows-gallery.jpg";
import doorsGallery from "@/assets/doors-gallery.jpg";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "مجموعه مسکونی الهیه",
      category: "پنجره UPVC",
      image: windowsGallery,
      description: "نصب ۵۰ واحد پنجره UPVC سفید در مجموعه مسکونی لوکس"
    },
    {
      id: 2,
      title: "ویلای شهرک غرب",
      category: "درب و پنجره",
      image: doorsGallery,
      description: "طراحی و نصب کامل درب و پنجره های UPVC برای ویلای ۵۰۰ متری"
    },
    {
      id: 3,
      title: "برج تجاری ولیعصر",
      category: "پنجره تجاری",
      image: windowsGallery,
      description: "پروژه بزرگ پنجره های UPVC برای برج ۲۰ طبقه تجاری"
    },
    {
      id: 4,
      title: "مجتمع اداری سعادت آباد",
      category: "درب اتوماتیک",
      image: doorsGallery,
      description: "نصب درب های UPVC اتوماتیک با سیستم امنیتی پیشرفته"
    },
    {
      id: 5,
      title: "آپارتمان های فرمانیه",
      category: "پنجره عایق",
      image: windowsGallery,
      description: "پنجره های دوجداره عایق حرارتی برای ۳۰ واحد آپارتمان"
    },
    {
      id: 6,
      title: "ویلای کردان",
      category: "پروژه کامل",
      image: doorsGallery,
      description: "تمامی درب و پنجره های ویلای لوکس با طراحی اختصاصی"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            نمونه کارهای ما
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            نگاهی به برخی از پروژه های موفق ما در زمینه UPVC
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group overflow-hidden hover:shadow-card transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <Button size="sm" variant="secondary" className="flex-1">
                      <Eye className="w-4 h-4 ml-2" />
                      مشاهده
                    </Button>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8 py-3">
            مشاهده همه پروژه ها
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;