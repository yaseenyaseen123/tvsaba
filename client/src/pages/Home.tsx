import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { APP_LOGO, APP_TITLE } from "@/const";
import { useState } from "react";
import { Play, Tv, Film, Trophy } from "lucide-react";

export default function Home() {
  const [channel1Url, setChannel1Url] = useState("");
  const [channel2Url, setChannel2Url] = useState("");
  const [activeChannel, setActiveChannel] = useState<1 | 2>(1);

  const currentStreamUrl = activeChannel === 1 ? channel1Url : channel2Url;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={APP_LOGO} alt={APP_TITLE} className="h-12 w-auto" />
            <div>
              <h1 className="text-2xl font-bold text-primary">sabaTV</h1>
              <p className="text-xs text-muted-foreground">قناة البث المباشر الفلسطينية</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#channels" className="text-foreground hover:text-primary transition">
              القنوات
            </a>
            <a href="#content" className="text-foreground hover:text-primary transition">
              المحتوى
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition">
              عننا
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent py-12 text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">مرحبا بك في sabaTV</h2>
          <p className="text-lg md:text-xl mb-6 opacity-90">
            قناة فلسطينية 100% تبث من قلقيلية إلى كل مكان
          </p>
          <p className="text-base md:text-lg opacity-80">
            تابع أفضل المباريات والمسلسلات والأفلام العربية والعالمية
          </p>
        </div>
      </section>

      {/* Player Section */}
      <section id="channels" className="container py-12">
        <h3 className="text-3xl font-bold text-center mb-8 text-primary">القنوات المتاحة</h3>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Channel 1 */}
          <Card className="p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-2 mb-4">
              <Tv className="w-6 h-6 text-primary" />
              <h4 className="text-2xl font-bold text-primary">sabaTV 1</h4>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-foreground mb-2">
                رابط البث:
              </label>
              <input
                type="url"
                value={channel1Url}
                onChange={(e) => setChannel1Url(e.target.value)}
                placeholder="أدخل رابط البث (M3U8 أو HLS)"
                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <Button
              onClick={() => setActiveChannel(1)}
              variant={activeChannel === 1 ? "default" : "outline"}
              className="w-full gap-2"
              disabled={!channel1Url}
            >
              <Play className="w-4 h-4" />
              اختر هذه القناة
            </Button>
          </Card>

          {/* Channel 2 */}
          <Card className="p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-2 mb-4">
              <Tv className="w-6 h-6 text-primary" />
              <h4 className="text-2xl font-bold text-primary">sabaTV 2</h4>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-foreground mb-2">
                رابط البث:
              </label>
              <input
                type="url"
                value={channel2Url}
                onChange={(e) => setChannel2Url(e.target.value)}
                placeholder="أدخل رابط البث (M3U8 أو HLS)"
                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <Button
              onClick={() => setActiveChannel(2)}
              variant={activeChannel === 2 ? "default" : "outline"}
              className="w-full gap-2"
              disabled={!channel2Url}
            >
              <Play className="w-4 h-4" />
              اختر هذه القناة
            </Button>
          </Card>
        </div>

        {/* Video Player */}
        {currentStreamUrl && (
          <Card className="p-6 bg-black">
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <video
                key={currentStreamUrl}
                controls
                autoPlay
                className="w-full h-full"
                controlsList="nodownload"
              >
                <source src={currentStreamUrl} type="application/x-mpegURL" />
                متصفحك لا يدعم تشغيل الفيديو. يرجى استخدام متصفح حديث.
              </video>
            </div>
            <div className="mt-4 text-center text-white">
              <p className="text-lg font-semibold">
                تشغيل: {activeChannel === 1 ? "sabaTV 1" : "sabaTV 2"}
              </p>
            </div>
          </Card>
        )}

        {!currentStreamUrl && (
          <Card className="p-12 bg-muted text-center">
            <Tv className="w-16 h-16 mx-auto text-muted-foreground mb-4 opacity-50" />
            <p className="text-lg text-muted-foreground">
              أضف رابط بث لأحد القناتين لبدء المشاهدة
            </p>
          </Card>
        )}
      </section>

      {/* Content Section */}
      <section id="content" className="bg-secondary py-12">
        <div className="container">
          <h3 className="text-3xl font-bold text-center mb-8 text-primary">محتوى القنوات</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Sports */}
            <Card className="p-6 text-center hover:shadow-lg transition">
              <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2 text-foreground">المباريات الرياضية</h4>
              <p className="text-muted-foreground">
                تابع أهم مباريات الدوريات الكبرى والبطولات العالمية
              </p>
            </Card>

            {/* Series */}
            <Card className="p-6 text-center hover:shadow-lg transition">
              <Film className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2 text-foreground">المسلسلات</h4>
              <p className="text-muted-foreground">
                مسلسلات قديمة وحديثة بجودة عالية
              </p>
            </Card>

            {/* Movies */}
            <Card className="p-6 text-center hover:shadow-lg transition">
              <Film className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2 text-foreground">الأفلام</h4>
              <p className="text-muted-foreground">
                أحدث الأفلام العربية والعالمية
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container py-12">
        <h3 className="text-3xl font-bold text-center mb-8 text-primary">عن sabaTV</h3>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h4 className="text-xl font-bold mb-4 text-primary">من نحن</h4>
            <p className="text-foreground leading-relaxed mb-4">
              sabaTV هي قناة فلسطينية 100% تبث من مدينة قلقيلية إلى كل مكان في العالم.
            </p>
            <p className="text-foreground leading-relaxed">
              نسعى لتقديم محتوى متنوع وعالي الجودة يلبي احتياجات جمهورنا الكريم.
            </p>
          </Card>

          <Card className="p-6">
            <h4 className="text-xl font-bold mb-4 text-primary">رؤيتنا المستقبلية</h4>
            <p className="text-foreground leading-relaxed mb-4">
              نتطلع إلى توسع شبكتنا وإضافة قنوات جديدة في المستقبل القريب.
            </p>
            <p className="text-foreground leading-relaxed">
              حالياً نوفر قناتي sabaTV 1 و sabaTV 2 بمحتوى متنوع وشامل.
            </p>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container text-center">
          <p className="mb-2">© 2025 sabaTV - جميع الحقوق محفوظة</p>
          <p className="text-sm opacity-80">قناة فلسطينية من قلقيلية</p>
        </div>
      </footer>
    </div>
  );
}
