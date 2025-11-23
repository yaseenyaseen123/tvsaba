import { useState } from "react";
import { APP_LOGO } from "@/const";
import { CHANNELS, Channel } from "@/lib/channels";
import { Play, Volume2, Clock, Zap } from "lucide-react";

export default function Home() {
  const [selectedChannel, setSelectedChannel] = useState<Channel | null>(
    CHANNELS[1] // اختر sabaTV 2 افتراضيًا
  );
  const [isPlaying, setIsPlaying] = useState(true);



  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header with Palestinian theme */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-green-700 via-black to-red-700 shadow-2xl border-b-4 border-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={APP_LOGO} alt="sabaTV" className="h-14 w-auto drop-shadow-lg" />
              <div>
                <h1 className="text-3xl font-black text-white drop-shadow-lg">sabaTV</h1>
                <p className="text-sm text-green-200 font-semibold">📍 من قلقيلية إلى العالم</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6 text-white">
              <a href="#about" className="hover:text-green-300 transition font-semibold">
                عن sabaTV
              </a>
              <a href="#content" className="hover:text-green-300 transition font-semibold">
                المحتوى
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Palestinian colors */}
      <section className="relative overflow-hidden py-12 bg-gradient-to-b from-green-900/30 to-transparent">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-lg">
            sabaTV
          </h2>
          <p className="text-2xl text-green-200 font-bold mb-2">قناة فلسطينية 100%</p>
          <p className="text-lg text-gray-300 mb-6">تبث من قلقيلية إلى كل مكان في العالم</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <div className="bg-green-700/50 backdrop-blur px-6 py-3 rounded-full text-white font-semibold">
              🎬 محتوى متنوع
            </div>
            <div className="bg-red-700/50 backdrop-blur px-6 py-3 rounded-full text-white font-semibold">
              ⚽ مباريات حية
            </div>
            <div className="bg-black/50 backdrop-blur px-6 py-3 rounded-full text-white font-semibold">
              🌍 بث عالمي
            </div>
          </div>
        </div>
      </section>

      {/* Main Player Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <div className="bg-black rounded-2xl overflow-hidden shadow-2xl border-4 border-green-700">
              {selectedChannel && selectedChannel.streamUrl ? (
                <div className="aspect-video bg-black relative flex flex-col items-center justify-center">
                  <iframe
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "none",
                    }}
                    allowFullScreen
                    src="http://62.171.186.42:8080/monw3at/embed.html"
                    title="sabaTV Player"
                  />
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                  <button
                    onClick={() => window.open("http://62.171.186.42:8080/monw3at/embed.html", "_blank", "width=800,height=600")}
                    className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg font-semibold transition flex items-center gap-2 shadow-lg"
                  >
                    <Play className="w-4 h-4" />
                    فتح البث
                  </button>
                  </div>
                </div>
              ) : (
                <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  <div className="text-center">
                    <Volume2 className="w-20 h-20 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-400 text-lg">اختر قناة لبدء البث</p>
                  </div>
                </div>
              )}
            </div>

            {/* Channel Info */}
            {selectedChannel && (
              <div className="mt-6 bg-gradient-to-r from-green-900/50 to-red-900/50 backdrop-blur rounded-xl p-6 border border-green-700/50">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedChannel.displayName}</h3>
                <p className="text-gray-300">{selectedChannel.description}</p>
                <div className="flex gap-4 mt-4 text-sm text-gray-400">
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-green-400" />
                    بث مباشر
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-green-400" />
                    متاح الآن
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Channels Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl p-6 border-2 border-green-700 shadow-2xl">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Play className="w-5 h-5 text-green-400" />
                القنوات المتاحة
              </h4>

              <div className="space-y-4">
                {CHANNELS.map((channel) => (
                  <button
                    key={channel.id}
                    onClick={() => {
                      setSelectedChannel(channel);
                      setIsPlaying(true);
                    }}
                    disabled={!channel.streamUrl}
                    className={`w-full p-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                      selectedChannel?.id === channel.id
                        ? "bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg border-2 border-green-400"
                        : "bg-slate-700 text-gray-300 hover:bg-slate-600 border-2 border-slate-600"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{channel.displayName}</span>
                      {selectedChannel?.id === channel.id && (
                        <span className="animate-pulse text-green-300">●</span>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Channel Status */}
              <div className="mt-8 p-4 bg-green-900/30 rounded-lg border border-green-700/50">
                <p className="text-sm text-green-300 font-semibold">✓ القنوات المتاحة</p>
                <p className="text-xs text-gray-400 mt-2">
                  جميع القنوات تبث محتوى حي وحصري
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gradient-to-b from-transparent to-green-900/20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-black text-white text-center mb-12 drop-shadow-lg">
            عن sabaTV
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Who We Are */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border-l-4 border-green-600 shadow-xl hover:shadow-2xl transition">
              <h4 className="text-2xl font-bold text-green-400 mb-4">من نحن</h4>
              <p className="text-gray-300 leading-relaxed mb-4">
                sabaTV هي قناة فلسطينية حرة وشجاعة تبث من مدينة قلقيلية إلى كل مكان في العالم. نحن نقدم محتوى متنوع وعالي الجودة يعكس الواقع الفلسطيني ويخدم جمهورنا الكريم.
              </p>
              <p className="text-gray-300 leading-relaxed">
                تأسست sabaTV برؤية واضحة: تقديم إعلام حر وموثوق يحدث عن قضايا الشعب الفلسطيني ويجمع الأسرة الفلسطينية حول محتوى متميز.
              </p>
            </div>

            {/* Our Content */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border-l-4 border-red-600 shadow-xl hover:shadow-2xl transition">
              <h4 className="text-2xl font-bold text-red-400 mb-4">محتوانا</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">⚽</span>
                  <span>مباريات الدوريات الكبرى والبطولات العالمية</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">🎬</span>
                  <span>مسلسلات عربية وعالمية قديمة وحديثة</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">🎥</span>
                  <span>أحدث الأفلام العربية والعالمية</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">📺</span>
                  <span>برامج إخبارية وتوثيقية متميزة</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Vision */}
          <div className="mt-8 bg-gradient-to-r from-green-900/40 to-red-900/40 backdrop-blur rounded-2xl p-8 border-2 border-green-700/50">
            <h4 className="text-2xl font-bold text-white mb-4 text-center">رؤيتنا المستقبلية</h4>
            <p className="text-gray-300 text-center leading-relaxed">
              نتطلع إلى توسع شبكتنا وإضافة قنوات متخصصة جديدة في المستقبل القريب. حالياً نوفر قناتي sabaTV 1 و sabaTV 2 بمحتوى متنوع وشامل، ونسعى لتحسين جودة البث والخدمات المقدمة لجمهورنا الكريم.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section id="content" className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-black text-white text-center mb-12 drop-shadow-lg">
            محتوى sabaTV
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "⚽", title: "المباريات", desc: "أهم البطولات العالمية" },
              { icon: "🎬", title: "المسلسلات", desc: "محتوى درامي متميز" },
              { icon: "🎥", title: "الأفلام", desc: "أحدث الإصدارات" },
              { icon: "📺", title: "البرامج", desc: "محتوى إخباري وتوثيقي" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-green-700/30 hover:border-green-600 transition text-center hover:shadow-xl"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h5 className="text-lg font-bold text-white mb-2">{item.title}</h5>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-green-900 via-black to-red-900 border-t-4 border-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white font-bold mb-2">© 2025 sabaTV - جميع الحقوق محفوظة</p>
          <p className="text-green-300 text-sm">قناة فلسطينية حرة من قلقيلية 🇵🇸</p>
          <p className="text-gray-400 text-xs mt-4">
            sabaTV | البث المباشر الفلسطيني | من قلقيلية إلى العالم
          </p>
        </div>
      </footer>
    </div>
  );
}
