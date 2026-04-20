import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

export function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-policy-page">
      <motion.section
        className="privacy-hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="privacy-hero-content">
          <Link to="/" className="back-link">
            ← Ana Sayfaya Dön
          </Link>
          <h1 className="privacy-title">Gizlilik Politikası</h1>
          <p className="privacy-date">Son Güncelleme: 21 Nisan 2026</p>
        </div>
      </motion.section>

      <motion.section
        className="privacy-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="privacy-text-block glass">
          <h2>1. Giriş</h2>
          <p>
            Bu Gizlilik Politikası, mobil uygulamamızı (Google Play Store üzerinden indirilen) ve web sitemizi kullanırken kişisel verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır. Hizmetlerimizi kullanarak, bu politikayı okuduğunuzu ve kabul ettiğinizi beyan edersiniz.
          </p>

          <h2>2. Toplanan Bilgiler</h2>
          <p>Uygulamamızı / Hizmetimizi kullanırken aşağıdaki bilgileri toplayabiliriz:</p>
          <ul>
            <li><strong>Kişisel Tanımlayıcı Bilgiler:</strong> Hesap oluşturduğunuzda sağladığınız ad, e-posta adresi gibi bilgiler.</li>
            <li><strong>Kullanım Verileri:</strong> Uygulama içi etkileşimleriniz, tercih ettiğiniz özellikler ve hata günlükleri dahil olmak üzere uygulamayı nasıl kullandığınıza dair veriler otomatik olarak toplanabilir.</li>
            <li><strong>Cihaz Bilgileri:</strong> Cihaz modeli, işletim sistemi sürümü ve benzersiz cihaz kimlikleri gibi teknik bilgiler.</li>
          </ul>

          <h2>3. Bilgilerin Kullanımı</h2>
          <p>Topladığımız bilgileri aşağıdaki amaçlar doğrultusunda kullanmaktayız:</p>
          <ul>
            <li>Hizmetlerimizi sağlamak, sürdürmek ve iyileştirmek.</li>
            <li>Kullanıcı deneyimini kişiselleştirmek.</li>
            <li>Teknik destek sağlamak ve sorunları gidermek.</li>
            <li>Güvenliği sağlamak ve dolandırıcılığı önlemek.</li>
          </ul>

          <h2>4. Üçüncü Taraflarla Paylaşım</h2>
          <p>
            Kişisel verileriniz, yasal bir zorunluluk olmadığı veya hizmetin temel işlevlerini sağlamak için (örneğin analitik sağlayıcıları veya barındırma hizmetleri) gerekmediği sürece üçüncü taraflarla satılmaz veya paylaşılmaz. Üçüncü taraf hizmetleri (Google Analytics, RevenueCat vb.) kendi gizlilik politikalarına sahiptir.
          </p>

          <h2>5. Veri Güvenliği</h2>
          <p>
            Verilerinizi korumak için endüstri standartlarında güvenlik önlemleri uygulamaktayız. Ancak, internet üzerinden hiçbir veri aktarımının veya elektronik depolama yönteminin %100 güvenli olmadığını ve mutlak güvenlik garanti edemeyeceğimizi lütfen unutmayın.
          </p>

          <h2>6. Kullanıcı Hakları</h2>
          <p>
            Kişisel verilerinize erişme, bunları düzeltme veya silme hakkına sahipsiniz. Hesabınızın ve verilerinizin silinmesini talep etmek veya gizlilik politikamızla ilgili sorular sormak için lütfen bizimle iletişime geçin.
          </p>

          <h2>7. Çocukların Gizliliği</h2>
          <p>
            Hizmetlerimiz 13 yaşın altındaki bireylere yönelik değildir. 13 yaşın altındaki çocuklardan bilerek kişisel bilgi toplamıyoruz. Eğer böyle bir bilgi topladığımızı fark edersek, bu verileri sistemlerimizden derhal sileceğiz.
          </p>

          <h2>8. Politika Değişiklikleri</h2>
          <p>
            Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Herhangi bir değişiklik olması durumunda yeni politika bu sayfada yayınlanacak ve "Son Güncelleme" tarihi değiştirilecektir. Düzenli aralıklarla bu sayfayı kontrol etmeniz önerilir.
          </p>

          <h2>9. İletişim</h2>
          <p>
            Gizlilik politikamız ile ilgili soru ve talepleriniz için lütfen web sitemizdeki iletişim yollarını kullanarak veya destek kanallarımız üzerinden bizimle iletişime geçin.
          </p>
        </div>
      </motion.section>
    </div>
  );
}
