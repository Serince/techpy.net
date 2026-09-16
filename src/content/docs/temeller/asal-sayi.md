---
title: "Asal Sayı"
description: "“Asal sayılar, sadece iki pozitif tam sayı böleni (kendisi ve 1) olan doğal sayılardır” diyor Wikipedia. Pek çok matematikçiyi de meşgul etmiş asal sayıların dağılımı. Biz […]"
sidebar:
  order: 15
yazar: "Serdar Turgut İnce"
yazilim: "Python"
tarih: "2021-10-17"
kapak: "/kapaklar/asal-sayi.jpg"
durum: tam
---
“Asal sayılar, sadece iki pozitif tam sayı böleni (kendisi ve 1) olan doğal sayılardır” diyor Wikipedia. Pek çok [matematikçiyi](https://tr.wikipedia.org/wiki/Asal_say%C4%B1#Asal_oturanlar) de meşgul etmiş asal sayıların dağılımı. Biz bunların hepsini temsil eden bir matematikle ilgilenmesek de, elimizde bilgiyi hızlıca sayan bir makineye tek tek bölenlerini kontrol ettirerek bulabiliriz asal sayıları. Biz bunu Python’da nasıl kodlayabiliriz? Aşağıdaki kodlara geçmeden önce şu yazacaklarımı dikkate alarak bir kaç deneme yaparsanız Python’da bu dersin vermek istedikleri daha rahat kavranacaktır.

Yazacağımız kod, bir fonksiyon olsun ve bu fonksiyon *input* değerine kadar olan sayıları tarayarak, o sayıya kadar kaç asal sayı var onu göndersin. İlk önce fonksiyonumuzu *input* ve *output*’unu yazın sonra arayı dolduracağız.

1.  Sonra [“çeşme akarken küpü doldur”](/temeller/cesme-akarken-kupu-doldur/) örneğinde olduğu gibi, bir liste açacağız. Bu asal sayıları depolayacağımız listemiz olsun.
2.  Bir *for* döngüsü alalım bu döngü 2’den başlasın, çünkü 1 asal sayı değil (sadece 1 böleni var) ve aradığımız maksimum sayı (*input*) bir fazlasına kadar saysın.
3.  Sayının bölenlerini tutacağımız bir boş bir liste daha açalım (bknz. [çeşme akarken küpü doldur”](/temeller/cesme-akarken-kupu-doldur/)).
4.  Yukarıdaki döngüden sonra bir döngü daha açalım ve sayımıza (döngüde bölenlerini araştırdığımız sayı) kadar olan tüm sayıları tek tek saysın.
5.  2 döngü içinde bir *if* ile tam bölen mi onu kontrol edelim (% kalan hesaplama için, bknz. [yaş hesaplama](/temeller/yas-hesaplama/)). Eğer bölen ise bu *if* altında 4. basamakta oluşturduğumuz boş listeye ekleyelim.
6.  Yukarıdaki wikipedia tanımına göre sadece 2 böleni olursa asal sayı olacak. ikinci *for* döngüsünün dışında ama ilk *for* döngüsünün içinde bölenlerini hesapladığımız sayının bölen sayısını kontrol edelim. Eğer 2 tane bölen varsa 2. basamaktaki asal sayıları tuttuğumuz listeye sayıyı ekleyelim. En son bu listeyi *return* ile geri gönderelim.

```python
def asal(x):
    asal_sayilar = []
    for i in range(2, x+1):
        bolen = []
        for j in range(1, i+1):
            if i % j == 0:
                bolen.append(j)
        if len(bolen) == 2:
            asal_sayilar.append(i)
    return asal_sayilar
```

Yukarıda 7 basamakta yaptığımız kodu 10 satırda hızlıca tamamladık. Aslında satır satır kodların anlatımı önceki maddelerde var. Burada kodu tam tanımına göre hazırladık. kodunuzun çözüm hızını python *console* kısmında *%timeit* *asal(5000)* ile ölçebilirsiniz. Daha hızlı bir kod yazılabilir miydi? Evet, mesela asal sayıların hepsinin tek sayı olduğunu biliyoruz (2 hariç, o zaman 2. satırdaki asal sayılar listesinin ilk elemanı olarak 2’yi eklerdik ve döngüyü 3’den başlatıp 2 şer 2 şer saydırarak hesaplama maliyetini yarıya indirebilirdik.

**SSıra sizde 1:** Bir önceki paragrafın sonundaki gibi 2 şer 2 şer sayarak yeni ve daha hızlı bir asal sayı bulma kodu yazın.

**Sıra sizde 2:** Siz de kaç tane asal sayı istiyorsak o kadar asal sayı bulan program yazın. Örneğin asal(100) yazdığımda 100 tane asal sayı bulsun.
