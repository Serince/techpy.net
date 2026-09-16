---
title: "İlk grafik"
description: "Belki de Python’u değerli kılan en önemli şey, sahip olduğu kütüphanelerdir. Kütüphaneler hazır kodlar içerir ve detaylarla uğraşmadan hızlıca öze geçmeyi sağlar. Bu yazıda bir sinüs […]"
sidebar:
  order: 6
yazar: "Serdar Turgut İnce"
yazilim: "Python"
tarih: "2021-03-20"
kapak: "/kapaklar/ilk-grafik.jpg"
durum: tam
---
Belki de Python’u değerli kılan en önemli şey, sahip olduğu kütüphanelerdir. Kütüphaneler hazır kodlar içerir ve detaylarla uğraşmadan hızlıca öze geçmeyi sağlar. Bu yazıda bir sinüs ve kosinüs grafiği çizeceğiz. Bunun için sinüs, kosinüsün hesaplanabileceği ve grafik araçlarını içeren iki kütüphane kullanacağız. Başlayalım 0 ile *π* arasında sinüs ve kosinüs grafiği ile.

```python
import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(0, np.pi, 100)
y = np.sin(x)
z = np.cos(x)

plt.plot(x, y, label="sin grafiği")
plt.plot(x, z, label="cos grafiği")
plt.legend()
```

Lütfen yukarıdaki kodun açıklamalarını okumadan önce kodu kendi ekranınıza kopyalayın ve kurcalayın. Bu kurcalama benim açıklamamdan daha fazla öğretecektir.

*import* bir kütüphaneyi kodunuza çağırmak için kullandığımız ifade. Biz bu kodda iki kütüphane kullandık NUMPY (nümerik kütüphane) ve MATPLOTLİB (görselleştirme kütüphanesi). Bu kütüphaneler içindeki hazır kodları kullanırken her seferinde kütüphanenin ismini yazmamız gerekecek. Ancak bu her seferinde uğraştıracağı için kısa isimler verdik biz bu kütüphanelere. Yani *numpy* yerine *np* diyeceğiz ve *matplotlib.pyplot* yerine kısaca *plt* diyeceğiz kodun içerisinde.

0 ile *π* arasında sinüs ve cosünüz eğrisi çizeceğimiz için keşke bir kod olsa da 0 ile *π* arasında 100 tane değer üretse. Evet var, *numpy* kütüphanesinde *linspace* kodu bunu yapıyor. parantez içine başlangıç ve bitiş değerini yazıyorsunuz, sonuna da kaç tane değer üretmesini istiyorsunuz size otomatik olarak oluşturuyor. Böylece *np.linspace(0,np.pi,100)* koduyla tam olarak bunu yapıyoruz. dikkat ettiyseniz *π*‘yi tanımlamak için bile hazır kod var *np.pi*. Numpy kütüphanesini kısaltarak *np* yapmıştık ilk satırda hatırlarsanız.

Sonrasında ürettiğimiz bu x değerleri için sinüs ve kosinüs değerlerini hesaplamamız gerekecek. Bunun da hazır kodu var. *np.sin* ve *np.cos* içine yazdığınız değerlerin hepsinin sinüs ve kosinüsünü hesaplıyor. Böylece y ve z değerlerimizi hesaplıyoruz. Böylece elimizde 3 tane liste var. x 0 ile *π* arasında 100 tane sayı içeriyor, y bu x değerlerinin hepsinin sinüslerinin değerlerini içeriyor. ve z ise x değerlerinin kosinüs değerlerini içeriyor. Her bir listenin 100 tane elemanı var.

Çizim için *matplotlib* kütüphanesini kullanacağız. 2. satırda çağırarak kısaca *plt* demiştik bu kütüphaneye. Biz çizgi grafik kullanacağız, bunu içeren hazır kod *plot*. Böylece sinüs ve kosinüs grafiğinin koordinatlarını bu kütüphaneye gönderiyoruz ve çizgi grafiğe bir isim veriyoruz. İsim vermek için parantez içine *label* yazıp tırnak içinde ismini yazıyoruz. En son satırda ise bu koyduğumuz isimleri grafik üzerinde bir kutucuk ile göstermesini istiyoruz. İşte bu da kodumuzun çıktısı olan grafik.

<figure class="wp-block-image size-large">
<img src="/uploads/2021/03/sincosgraph.png" class="wp-image-2563" decoding="async" width="864" height="576" />
<img src="/uploads/2021/03/sincosgraph.png" class="wp-image-2563" data-eio="l" width="864" height="576" />
<figcaption>Matplotlib kütüphanesi kullanarak sinüs ve kosinüs grafiği</figcaption>
</figure>

**Sıra sizde:** Sİzde aynı şekilde tanjant ve kotanjant grafiklerini çizdirebilir misiniz? Kotanjantı internet araştırmanıza rağmen bulamazsanız cot(x)=1/tan(x) ile çizdirebilirsiniz.
