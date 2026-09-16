---
title: "Yüz Algılama ve Grafik ekrana çizdirme"
description: "*Hazırlayan: Volkan Bayrak - Görece basit bir uygulama yapalım. Basit diyorum çünkü kameraların neredeyse hepsinde yüzü algılama özelliği var. Biz buna biraz derinlik katalım. Yüzümüzü takip edip yüzü"
sidebar:
  order: 2
youtube: 61H6oIo9Odk
yazar: "Volkan Bayrak"
yazarKanal: "https://www.youtube.com/@volkanbayrak8896"
yazilim: "Python + OpenCV"
tarih: "2022-05-25"
kapak: "/kapaklar/yuz-algilama-ve-grafik.jpg"
durum: tam
---
\**Hazırlayan: Volkan Bayrak*

Görece basit bir uygulama yapalım. Basit diyorum çünkü kameraların neredeyse hepsinde yüzü algılama özelliği var. Biz buna biraz derinlik katalım. Yüzümüzü takip edip yüzümüzün konumunu bir grafik ekranına çizdiren kod yazalım. İsterseniz biraz derinleşince baş hareketlerinizi bilgisayarınızın faresi gibi kullanacak bir kod yazarsınız zaten siz 🙂

Videoyu hazırlarken kullandığımız kaynaklar belki size de yardımcı olur. Buyrun linkleri:

1.  <a href="https://pyimagesearch.com/2021/04/05/opencv-face-detection-with-haar-cascades/" data-type="URL" data-id="https://pyimagesearch.com/2021/04/05/opencv-face-detection-with-haar-cascades/">Pyimagesearch haarcascade</a>
2.  <a href="https://matplotlib.org/stable/api/animation_api.html" data-type="URL" data-id="https://matplotlib.org/stable/api/animation_api.html">Matplotlib animation</a>

Son olarak uygulamada kullanacağınız <a href="https://drive.google.com/drive/folders/1F23WW6lAZPpG-HBmVfAgHFBAVgyqZetu" data-type="URL" data-id="https://drive.google.com/drive/folders/1F23WW6lAZPpG-HBmVfAgHFBAVgyqZetu">haarcascade frontal face modeli şu linkten</a> indirebilirsiniz.

**Sıra sizde:** Lütfen yukarıdaki videoyu örnek alarak, yüzünüzün ekranda tam ortalanması için konsolda öneriler verecek şekilde düzenler misiniz? Yani yüzünüz ekranın ortasının solundaysa biraz sağa kaydırın, yukarıdaysa lütfen biraz aşağı kaydırın şeklinde. Ortada yaklaşık bir alan içindeyse yüzünüz tam ortalandı şeklinde bir uyarı veren bir kod.
