import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

// Import translations
import en from '../locales/en.json';
import am from '../locales/am.json';
import ar from '../locales/ar.json';

const translations: { [key: string]: any } = { en, am, ar };

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [t, setT] = useState(translations.en);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    setT(translations[currentLanguage]);
  }, [currentLanguage]);

  const faqData: { [key: string]: FAQItem[] } = {
    en: [
      {
        question: "What subjects do you offer for academic tutoring?",
        answer: "We offer comprehensive tutoring for all core subjects including Mathematics, Science, English, Social Studies, and Languages from elementary to high school level. Our curriculum is designed to complement school education."
      },
      {
        question: "How do you make your platform accessible for visually impaired students?",
        answer: "Our platform features screen reader compatibility, high contrast modes, keyboard navigation, audio descriptions, and Braille-friendly materials. We also provide specialized training for our teachers to support visually impaired students effectively."
      },
      {
        question: "What Quran teaching methods do you use?",
        answer: "We use the Noorani Qaida method for beginners, followed by Tajweed rules for proper pronunciation. Our teachers are certified in Quranic studies and use interactive methods including audio-visual aids and one-on-one sessions for better learning."
      },
      {
        question: "Is door-to-door service available in my area?",
        answer: "Our door-to-door service is currently available in major cities. Please contact us with your location, and we'll check availability. We're continuously expanding our service areas to reach more students."
      },
      {
        question: "What qualifications do your teachers have?",
        answer: "All our teachers are certified professionals with degrees in Education or their respective subjects. Quran teachers are certified in Islamic studies and Tajweed. They undergo regular training in child psychology and modern teaching methodologies."
      },
      {
        question: "How do online classes work?",
        answer: "We use secure video conferencing platforms with interactive whiteboards, screen sharing, and digital learning materials. Classes are scheduled at convenient times, recorded for review, and include regular progress assessments."
      }
    ],
    am: [
      {
        question: "ለትምህርት ማጠናከሪያ ምን ምን ዓይነት የትምህርት ክፍሎችን ትሰጣላችሁ?",
        answer: "ከመጀመሪያ ደረጃ እስከ ሁለተኛ ደረጃ ትምህርት ቤት ደረጃ ድረስ ሒሳብ፣ ሳይንስ፣ እንግሊዝኛ፣ ማኅበረሰብ ሳይንስ እና ቋንቋዎችን ጨምሮ ሁሉንም ዋና ዋና የትምህርት ክፍሎች እንሰጣለን። የእኛ ሥርዓተ ትምህርት የትምህርት ቤት ትምህርትን ለማጠናከር የተዘጋጀ ነው።"
      },
      {
        question: "ለእይታ ጉዳተኞች ተማሪዎች መሣሪያዎቻችሁን እንዴት ተደራሽ አድርገውታላችሁ?",
        answer: "የእኛ መሣሪያ ስክሪን ሪደር ተኳሪነት፣ ከፍተኛ ንፅፅር ሁነቶች፣ የቁልፍ ሰሌዳ አሰሳ፣ የድምፅ መግለጫዎች እና ብሬይል የሚደግፉ ቁሳቁሶችን ያካትታል። እንዲሁም ለእይታ ጉዳተኞች ተማሪዎች በተለማመደ ሁኔታ ለመደገፍ ለአስተማሪዎቻችን ልዩ ስልጠና እንሰጣለን።"
      },
      {
        question: "ለቁርአን ትምህርት ምን ዓይነት ዘዴዎችን ትጠቀማላችሁ?",
        answer: "ለጀማሪዎች ኑራኒ ቃዕዳ ዘዴን እንጠቀማለን፣ ከዚያም ትክክለኛውን አነባበብ ለማግኘት የተጅዊድ ህጎችን እንጠቀማለን። አስተማሪዎቻችን በቁርአን ትምህርት የተፈቀዱ ሲሆኑ የተሻለ መማር ለማግኘት የድምፅ-ማየት መሳሪያዎችን እና አንድ ለአንድ ክፍሎችን ጨምሮ በበይነመረብ ዘዴዎች ይጠቀማሉ።"
      },
      {
        question: "ከበር ለበር አገልግሎት በአካባቤዬ ይገኛል?",
        answer: "ከበር ለበር አገልግሎታችን በአሁኑ ጊዜ በዋና ዋና ከተሞች ይገኛል። እባክዎን አካባቢዎን በመጥቀስ ያግኙን፣ እናም መገኘት እንፈትሻለን። ተጨማሪ ተማሪዎች ለማድረስ የአገልግሎት አካባቢዎቻችንን በቀጣይነት እያሰፋን ነው።"
      },
      {
        question: "አስተማሪዎቻችሁ ምን ዓይነት ብቃቶች አሏቸው?",
        answer: "ሁሉም አስተማሪዎቻችን በትምህርት ወይም በራሳቸው የትምህርት ክፍሎች ዲግሪ ያላቸው የተፈቀዱ ባለሙያዎች ናቸው። የቁርአን አስተማሪዎች በእስላማዊ ጥናት እና ተጅዊድ የተፈቀዱ ናቸው። በህፃናት ሳይኮሎጂ እና ዘመናዊ የትምህርት ዘዴዎች ወጥ በሆነ ስልጠና ይማራሉ።"
      },
      {
        question: "የመስመር ላይ ክፍሎች እንዴት ይሠራሉ?",
        answer: "የበይነመረብ የቪዲዮ ኮንፈሬንስ መድረኮችን ከበይነመረብ ነጭ ሰሌዳዎች፣ ማያ ገጽ መጋራት እና ዲጂታል የትምህርት ቁሳቁሶች ጋር እንጠቀማለን። ክፍሎቹ በምቹ ሰዓቶች ይቀመጣሉ፣ ለግምገማ ይመዘገባሉ እና ወጥ በሆነ የሂደት ግምገማዎች ያካትታሉ።"
      }
    ],
    ar: [
      {
        question: "ما هي المواد التي تقدمونها للدروس الأكاديمية؟",
        answer: "نقدم دروسًا شاملة لجميع المواد الأساسية بما في ذلك الرياضيات والعلوم واللغة الإنجليزية والدراسات الاجتماعية واللغات من المرحلة الابتدائية إلى الثانوية. تم تصميم منهجنا لتكملة التعليم المدرسي."
      },
      {
        question: "كيف تجعلون منصتكم متاحة للطلاب ضعاف البصر؟",
        answer: "تتميز منصتنا بتوافق قارئ الشاشة، ووضعيات التباين العالي، والتنقل باستخدام لوحة المفاتيح، والوصف الصوتي، والمواد الصديقة للبرايل. كما نقدم تدريبًا متخصصًا لمعلمينا لدعم الطلاب ضعاف البصر بشكل فعال."
      },
      {
        question: "ما هي طرق تعليم القرآن التي تستخدمونها؟",
        answer: "نستخدم طريقة القاعدة النورانية للمبتدئين، تليها قواعد التجويد للنطق الصحيح. معلمونا معتمدون في الدراسات القرآنية ويستخدمون طرقًا تفاعلية تشمل الوسائل السمعية والبصرية وجلسات فردية لتحسين التعلم."
      },
      {
        question: "هل خدمة من الباب إلى الباب متاحة في منطقتي؟",
        answer: "خدمة من الباب إلى الباب متاحة حاليًا في المدن الرئيسية. يرجى الاتصال بنا مع موقعك، وسنتحقق من التوفر. نحن نوسع باستمرار مناطق خدمتنا للوصول إلى المزيد من الطلاب."
      },
      {
        question: "ما هي مؤهلات معلميكم؟",
        answer: "جميع معلمينا محترفون معتمدون يحملون شهادات في التربية أو في تخصصاتهم respective. معلمو القرآن معتمدون في الدراسات الإسلامية والتجويد. يخضعون لتدريب منتظم في علم نفس الطفل ومناهج التدريس الحديثة."
      },
      {
        question: "كيف تعمل الفصول الدراسية عبر الإنترنت؟",
        answer: "نستخدم منصات مؤتمرات فيديو آمنة مع سبورات بيضاء تفاعلية ومشاركة الشاشة والمواد التعليمية الرقمية. يتم جدولة الفصول في أوقات مناسبة، وتسجيلها للمراجعة، وتشمل تقييمات منتظمة للتقدم."
      }
    ]
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Head>
        <title>FAQ - Hilal Kids</title>
        <meta name="description" content="Frequently asked questions about Hilal Kids services" />
      </Head>

      <Header 
        t={t} 
        currentLanguage={currentLanguage} 
        onLanguageChange={setCurrentLanguage} 
      />

      {/* FAQ Hero Section */}
      <section className="bg-green-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {currentLanguage === 'en' && 'Frequently Asked Questions'}
            {currentLanguage === 'am' && 'በተደጋጋሚ የሚጠየቁ ጥያቄዎች'}
            {currentLanguage === 'ar' && 'الأسئلة الشائعة'}
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            {currentLanguage === 'en' && 'Find answers to common questions about our services, teaching methods, and accessibility features.'}
            {currentLanguage === 'am' && 'ስለ አገልግሎቶቻችን፣ የትምህርት ዘዴዎቻችን እና የተደራሽነት ባህሪዎቻችን ለተለመዱ ጥያቄዎች መልስ ያግኙ።'}
            {currentLanguage === 'ar' && 'ابحث عن إجابات للأسئلة الشائعة حول خدماتنا وطرق التدريس وميزات الوصول.'}
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {faqData[currentLanguage]?.map((faq, index) => (
              <div 
                key={index}
                className="border-b border-green-100 last:border-b-0"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-green-50 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-lg md:text-xl font-semibold text-green-800 pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-green-600 transform transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`px-6 pb-6 transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'block' : 'hidden'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12">
            <p className="text-xl text-gray-600 mb-6">
              {currentLanguage === 'en' && "Didn't find your answer? We're here to help!"}
              {currentLanguage === 'am' && 'መልስ አላገኙም? ለመርዳት እዚህ አለን!'}
              {currentLanguage === 'ar' && 'لم تجد إجابتك؟ نحن هنا لمساعدتك!'}
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg"
            >
              <span>
                {currentLanguage === 'en' && 'Contact Us'}
                {currentLanguage === 'am' && 'ያግኙን'}
                {currentLanguage === 'ar' && 'اتصل بنا'}
              </span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}