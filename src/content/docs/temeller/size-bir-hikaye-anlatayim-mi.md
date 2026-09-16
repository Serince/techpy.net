---
title: "Size bir hikaye anlatayım mı?"
description: "Bitmez tükenmek bilmez çocukluk döngü hikayesi. Olay şöyle gerçekleşir, muzip olduğunu iddia eden arkadaş ile arada geçen konuşma: A: Sana bir hikaye anlatayım mı? B: Anlat! […]"
sidebar:
  order: 3
yazar: "Serdar Turgut İnce"
yazilim: "Python"
tarih: "2021-03-04"
kapak: "/kapaklar/size-bir-hikaye-anlatayim-mi.jpg"
durum: tam
---
Bitmez tükenmek bilmez çocukluk döngü hikayesi. Olay şöyle gerçekleşir, muzip olduğunu iddia eden arkadaş ile arada geçen konuşma:

A: Sana bir hikaye anlatayım mı?

B: Anlat!

A: Anlat demekle olmaz. Sana bir hikaye anlatayım mı?

B: Anlatma o zaman.

A: Anlatma o zaman demekle olmaz. Sana bir hikaye anlatayım mı?

B: Yürü git başımdan.

A: Yürü git başımdan demekle olmaz. Sana bir hikaye anlatayım mı?

şeklinde sonsuza kadar bitmez tükenmez bir geyik. Madem bilgisayar bir şeyleri tekrar etmekte çok mahir. O zaman bu hikayeyi tekrarlasın.

Yukarıdaki durumu kodlayalım. For döngüsünde belirli bir sayı tanımlıyorduk, burada ise bir sayı yok, sonsuza kadar tekrar etsin istiyoruz bu eylemin. Bunun için while döngüsü kullanacağız. Bu döngü for döngüsünün şartlı hali. Yani biz bir şart tanımlayacağız o şart doğru olduğu müddetçe bu döngü dönecek. Peki bu şart hep doğruysa, o zaman sonsuza kadar dönecek.

```python
while 4>3:
     cevap = input("Sana bir hikaye anlatayım mı?")
     print("{} demekle olmaz.".format(cevap))
```

Yazım kuralı for döngüsüne benziyor. while yazıyoruz yanına şartımızı yazıyoruz sonra iki nokta üst üste koyuyor ve alt satırda tekrarlamasını istediğimiz kodu girintili bir şekilde yazıyoruz. Buradaki şartımız ne 4\>3. Peki bu her zaman doğru mu? Evet. O zaman sonsuz döngüye hoş geldiniz. Virüs gibi insanın ömrünü tüketen bu döngüde takılmaya hazır olun.

Döngünün girintisinde bulunan ilk tekrar edilecek kod, *input()* fonksiyonuyla kullanıcıya sorularak cevap istenen soru. “Sana bir hikaye anlatayım mı?” kullanıcın konsola yazıp enter’a bastığı yazıyı cevap değişkenine atıyoruz. Sonraki satırda print fonksiyonun içinde bunu kullanacağız. *Print()* fonksiyonun içindeki {} kısma cevabımızı yazdırmak için tırnağı kapattıktan hemen sonra .format yazarak, oraya ne yazması gerektiğini belirtiyoruz ve işte döngümüz hazır.

Kötü haberim var çalıştırdıktan sonra python durmuyor hep soruyor. Durdurmanın bir yolu yok mu? derseniz. Klavyenizdeki *ctrl + c* tuş kombinasyonuyla durdurabilirsiniz. Ya da konsolun üstündeki kırmızı stop tuşuna yada konsolun üzerindeki çarpı tuşuna basarak konsolu yenileyerek durdurabilirsiniz.

**Sıra sizde:** Peki sizden ne isteyeceğim şimdi: Bir anahtar kelime olsa ve o anahtar kelimeyi girdiğimizde döngü dursa. Bunu da yukarıdaki kodun üzerinde oynayarak yapabilirsiniz. Size güveniyorum vaz geçmeyin biraz uğraşla her şey olur.
