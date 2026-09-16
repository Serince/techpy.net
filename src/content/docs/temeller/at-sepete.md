---
title: "At sepete"
description: "Döngülere biraz daha dalalım. Bu sefer biraz matematik kullanalım. Matematik bir dildir derler ya, o zaman matematik dilinden Python programlama diline çeviri yapalım. Toplam sembolü kodlayalım […]"
sidebar:
  order: 9
yazar: "Serdar Turgut İnce"
yazilim: "Python"
tarih: "2021-04-04"
kapak: "/kapaklar/at-sepete.jpg"
durum: tam
---
Döngülere biraz daha dalalım. Bu sefer biraz matematik kullanalım. Matematik bir dildir derler ya, o zaman matematik dilinden Python programlama diline çeviri yapalım. Toplam sembolü kodlayalım biraz.

<div class="wp-block-katex-display-block katex-eq" katex-display="true">

    \sum_{i=1}^{10}{i}

</div>

Burada i değişkeni 1’den başlayarak 10’a kadar ilerliyor ve toplam sembolü sebebiyle biz bu i’lerin hepsini topluyoruz. Şimdi Python’a çevirelim bu matematiği.

```python
sepet = 0
for i in range(1,11):
    sepet = sepet + i
```

Bu kodu yazmadaki en büyük sorun aslında *i* her bir döngüde değişiyor ve bilgisayar bir önceki değeri unutuyor. Bunu bir yerde saklamak gerek. İşte bu sebeple döngüden önce *sepet* diye bir değişken oluşturduk ve bu değişkeni toplama işlemine göre etkisiz eleman olması sebebiyle 0’a eşitledik. Böylece döngü içinde *i* her değiştiğinde *i*‘nin değerini sepetin içine atabilir ve toplaya toplaya ilerleyebiliriz.

*for* döngüsü kullandık çünkü döngünün kaç kere döneceği belli. Toplam sembolünün altındaki değerden başlayacak ve üstündeki değerde bitecek. Bunun için bir fonksiyon var; *range()* fonksiyonu. *range(1,11)* yazdığımızda 1’den başlayıp 10’a kadar giden (11 dahil değil) iteratif bir liste oluşuyor. *i*‘de bu listenin başka bir elemanı oluyor her bir döngüde. Biz de *sepet = sepet + i* koduyla aslında i her değiştiğinde önceki i’lerin değerini toplayarak eklediğimiz sepetimizi toplayarak ilerliyoruz. Biraz algılaması karışık gelebilir başta ama basit bir mantığı var aslında. Lütfen biraz kurcalamaya devam edin hızlıca kavrayacaksınız.

**Sıra sizde:** Yukarıdaki kodu değiştirerek şu matematiği de siz Python’a çevirin.

<div class="wp-block-katex-display-block katex-eq" katex-display="true">

    \sum_{i=5}^{50}{2i}

</div>
