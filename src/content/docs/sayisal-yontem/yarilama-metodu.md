---
title: "Yarılama Metodu"
description: "Yarılama metodu eğer denklemin belli bir aralıkta değeri işaret değiştiriyorsa bu aralıkta kesin kök vardır temeline dayanıyor. Daha açık ifade edersem f(x) fonksiyonum olsun. f(3)=-2 ve […]"
sidebar:
  order: 1
yazar: "Serdar Turgut İnce"
yazilim: "Python + NumPy"
tarih: "2021-04-12"
kapak: "/kapaklar/yarilama-metodu.jpg"
durum: tam
---
Yarılama metodu eğer denklemin belli bir aralıkta değeri işaret değiştiriyorsa bu aralıkta kesin kök vardır temeline dayanıyor. Daha açık ifade edersem *f(x)* fonksiyonum olsun. *f(3)=-2* ve *f(4)=1* olsun. O zaman 3 ile 4 arasında fonksiyon 0’dan geçmiştir ve bu aralıkta bir kök vardır. Bu metotta o zaman 3 ile 4’ün tam ortasında bakarım yani 3.5’e. Bunun işareti hangisinden farklıysa, yeni kök aralığım o olur. Yani *f(3.5)* pozitifse kök 3 ile 3.5 arasında değilse 3.5 ile 4 arasındadır. Aynı şekilde yeni aralığın tam orta değerine bakıp aynı işlemi tekrarlarsak köke gittikçe yaklaşabiliriz. Yaklaşabiliriz diyorum, çünkü tam bulabilmek çoğu durumda gerçekleşemiyor. O sebeple bir tolerans aralığı belirlersek, belli bir hata oranıyla kökü bulabiliriz. Kodu yukarıda anlattığım şekliyle tasarlamaya başlarsak:

- İşlem sürekli yenilenecek, bu sebeple döngü kullanılmalı
- Döngünün kaç kere tekrar edeceği belli değil, hata oranı sağlanana kadar devam edecek, o zaman *while* döngüsü kullanılmalı.
- Her iterasyonda işaret kontrolü yapılacak, o zaman döngü içinde *if* kullanılmalı

Tüm bunlardan sonra kodlamaya geçebiliriz.

```python
def bisection(fonksiyon, alt, ust, tolerans):
    if fonksiyon(orta)*fonksiyon(ust) > 0:
         print("Girdiğiniz aralıkta bir kök yok ya da bu yöntemle kökü bulamıyoruz")
    while tolerans < abs(ust-alt):
        orta = (ust+alt)/2
        if fonksiyon(orta)*fonksiyon(ust) < 0:
            alt = orta
        elif fonksiyon(orta)*fonksiyon(alt) < 0:
            ust = orta
    return orta
```

Yukarıdaki fonksiyona bakarsak; kökünü bulacağımız fonksiyon, kökü bulacağımız aralığın alt, üst sınırı ve hesaplamayı durduracağımız tolerans fonksiyonun *input*ları. Ön bir kontrolle alt ve üst sınır arasında kök olup olmadığını kontrol ediyoruz. İlk paragraftaki tanıma bakarsanız, işaret değişimi varsa burada bir kök vardır. Eğer alt sınır ve üst sınırdaki fonksiyonun işaretleri aynıysa çarpımı pozitif değer üretecektir ki bu durumda bu aralıkta kök yoktur (ya da aralık çok geniştir, kökü bu yöntemle yakalayamıyoruz). *if* ile çarpımı kontrol edip uyarı mesajı yazdık.

Asıl işlem *while* döngüsüyle başlayacak. Döngünün çalışma şartı üst ve alt değerin farkının toleranstan büyük olması olarak belirledik. İşaret negatif yada pozitif olabileceği için *abs()* ile mutlak değerini aldık. Yani kökü aradığımız aralık bu toleransın altına düşerse döngü duracak.

Yarılama metodunun adını aldığı orta değeri bulma *while* döngüsünden hemen sonra başlıyor. Alt ve üst sınırın ortasını buluyoruz. Orta değer ile alt ve üst sınırın değerlerini kıyaslayarak kökün ortanın üstünde mi altında mı olduğunu öğreniyoruz. Bunun için fonksiyonun değerlerini çarpıp eğer zıt işaretiyse çarpımın sonucu negatif olacağından yola çıkıp *if* ve sonraki *elif*‘de bunu kıyaslıyoruz. Eğer işaret ortanın üstünde gerçekleşiyorsa sınırlarımızı güncelleyerek, yeni alt sınırımızı orta olarak güncelleyip sonraki iterasyonda yeni alt ile üst arsında kök arıyoruz. Aksi durumda üst sınırımızı güncelleyerek, alt ile yeni üst arasında kökü arıyoruz. Nereye kadar? Ta, alt ile üst arasındaki fark toleransın altına düşene kadar. Döngü durduktan sonra gelinen alt ve üst sınırın tam ortasını kök olarak *output* olarak fonksiyondan gönderiyoruz.

**Şimdi sizde:** Yukarıda anlattıklarımı anlamış olabilirsiniz ama uygulamadığınız müddetçe bunu tam kavradığınızı öğrenemezsiniz. Bu sebeple lütfen siz de tolerans ile değilde verilen iterasyon sınırıyla yukarıdaki kodu güncelleyin. Yani şöyle ki örneğin 100 iterasyonla çöz dediğim zaman, 100 kere yarılama yaptıktan sonra döngü dursun ve geldiği en son değeri kök olarak göndersin.
