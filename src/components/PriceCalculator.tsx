import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calculator, Plus, Trash2, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface WindowItem {
  id: string;
  type: string;
  area: number;
  price: number;
}

const PriceCalculator = () => {
  const [windows, setWindows] = useState<WindowItem[]>([]);
  const [currentType, setCurrentType] = useState("");
  const [currentArea, setCurrentArea] = useState("");
  const { toast } = useToast();

  const windowTypes = [
    { value: "sliding", label: "کشویی", pricePerSqm: 850000 },
    { value: "casement", label: "بازشو", pricePerSqm: 920000 },
    { value: "fixed", label: "فیکس", pricePerSqm: 750000 },
    { value: "tilt-turn", label: "بازشو-کشویی", pricePerSqm: 1100000 },
    { value: "bay", label: "خلیجی", pricePerSqm: 1350000 },
    { value: "arched", label: "قوسی", pricePerSqm: 1250000 }
  ];

  const addWindow = () => {
    if (!currentType || !currentArea || parseFloat(currentArea) <= 0) {
      toast({
        title: "خطا",
        description: "لطفاً نوع پنجره و متراژ معتبر وارد کنید",
        variant: "destructive"
      });
      return;
    }

    const selectedType = windowTypes.find(t => t.value === currentType);
    if (!selectedType) return;

    const area = parseFloat(currentArea);
    const price = area * selectedType.pricePerSqm;

    const newWindow: WindowItem = {
      id: Date.now().toString(),
      type: selectedType.label,
      area,
      price
    };

    setWindows([...windows, newWindow]);
    setCurrentArea("");
    setCurrentType("");

    toast({
      title: "افزودن موفق",
      description: "پنجره به لیست محاسبه اضافه شد",
    });
  };

  const removeWindow = (id: string) => {
    setWindows(windows.filter(w => w.id !== id));
  };

  const totalPrice = windows.reduce((sum, window) => sum + window.price, 0);
  const totalArea = windows.reduce((sum, window) => sum + window.area, 0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price) + " تومان";
  };

  const getDiscountInfo = () => {
    if (totalArea >= 50) return { percent: 15, label: "تخفیف ویژه" };
    if (totalArea >= 30) return { percent: 10, label: "تخفیف عالی" };
    if (totalArea >= 20) return { percent: 7, label: "تخفیف خوب" };
    if (totalArea >= 10) return { percent: 5, label: "تخفیف پایه" };
    return null;
  };

  const discount = getDiscountInfo();
  const finalPrice = discount ? totalPrice - (totalPrice * discount.percent / 100) : totalPrice;

  return (
    <section id="calculator" className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
            <Calculator className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            محاسبه قیمت آنلاین
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            قیمت پنجره‌های خود را به سادگی محاسبه کنید و از تخفیف‌های ویژه بهره‌مند شوید
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Input */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="w-5 h-5" />
                  افزودن پنجره
                </CardTitle>
                <CardDescription>
                  نوع پنجره و متراژ آن را وارد کنید
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="window-type">نوع پنجره</Label>
                  <Select value={currentType} onValueChange={setCurrentType}>
                    <SelectTrigger>
                      <SelectValue placeholder="نوع پنجره را انتخاب کنید" />
                    </SelectTrigger>
                    <SelectContent>
                      {windowTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          <div className="flex justify-between items-center w-full">
                            <span>{type.label}</span>
                            <span className="text-sm text-muted-foreground mr-4">
                              {formatPrice(type.pricePerSqm)}/متر
                            </span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="area">متراژ (متر مربع)</Label>
                  <Input
                    id="area"
                    type="number"
                    placeholder="مثال: 2.5"
                    value={currentArea}
                    onChange={(e) => setCurrentArea(e.target.value)}
                    min="0"
                    step="0.1"
                  />
                </div>

                <Button onClick={addWindow} className="w-full" size="lg">
                  <Plus className="w-4 h-4 mr-2" />
                  افزودن به محاسبه
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  خلاصه محاسبه
                </CardTitle>
                <CardDescription>
                  جزئیات قیمت‌گذاری شما
                </CardDescription>
              </CardHeader>
              <CardContent>
                {windows.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    هنوز پنجره‌ای اضافه نکرده‌اید
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Window List */}
                    <div className="space-y-3">
                      {windows.map((window) => (
                        <div key={window.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                          <div>
                            <span className="font-medium">{window.type}</span>
                            <span className="text-sm text-muted-foreground mr-2">
                              ({window.area} متر)
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="font-bold">
                              {formatPrice(window.price)}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeWindow(window.id)}
                              className="text-destructive hover:text-destructive"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Summary */}
                    <div className="border-t pt-4 space-y-3">
                      <div className="flex justify-between">
                        <span>مجموع متراژ:</span>
                        <span className="font-bold">{totalArea} متر مربع</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span>قیمت اولیه:</span>
                        <span>{formatPrice(totalPrice)}</span>
                      </div>

                      {discount && (
                        <>
                          <div className="flex justify-between items-center">
                            <span>تخفیف:</span>
                            <Badge variant="secondary" className="bg-green-100 text-green-800">
                              {discount.percent}% {discount.label}
                            </Badge>
                          </div>
                          <div className="flex justify-between text-lg font-bold text-primary">
                            <span>قیمت نهایی:</span>
                            <span>{formatPrice(finalPrice)}</span>
                          </div>
                        </>
                      )}

                      {!discount && (
                        <div className="flex justify-between text-lg font-bold text-primary">
                          <span>قیمت نهایی:</span>
                          <span>{formatPrice(totalPrice)}</span>
                        </div>
                      )}
                    </div>

                    {/* Discount Info */}
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">تخفیف‌های ویژه:</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• 10 متر به بالا: 5% تخفیف</li>
                        <li>• 20 متر به بالا: 7% تخفیف</li>
                        <li>• 30 متر به بالا: 10% تخفیف</li>
                        <li>• 50 متر به بالا: 15% تخفیف ویژه</li>
                      </ul>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          {windows.length > 0 && (
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                برای دریافت پیشنهاد نهایی و هماهنگی نصب با ما تماس بگیرید
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">
                  درخواست مشاوره رایگان
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  ذخیره محاسبه
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PriceCalculator;