---
title: "Sıcaklık Dönüşümleri"
description: "Fonksiyonel programlama kod satırları biraz uzadıkça oldukça önemli hale geliyor. Bol uygulama yaparak mantığını hazmetmek oldukça önemli. Şimdi sıcaklık birimlerini dönüştüren bir fonksiyon yazalım. "
sidebar:
  order: 12
yazar: "Serdar Turgut İnce"
yazilim: "Python"
tarih: "2021-04-19"
kapak: "/kapaklar/sicaklik-donusumleri.jpg"
durum: tam
---
Fonksiyonel programlama kod satırları biraz uzadıkça oldukça önemli hale geliyor. Bol uygulama yaparak mantığını hazmetmek oldukça önemli. Şimdi sıcaklık birimlerini dönüştüren bir fonksiyon yazalım. Önce bir hatırlarsak neydi bu sıcaklık birimlerinin ilişkileri;


$\frac {C}{100}=\frac {F-32}{180}=\frac {K-273.15}{100}$


Programı yazmadan önce programın tasarımını yaparsak:

- Öncelikle fonksiyon bizden ne isteyecek ve bize ne verecek sorusunu cevaplarsak. Bizden dönüştürülecek sıcaklığın değerini, birimini ve çıktının birimini isteyek ve bize çıktı biriminin değerini hesaplayarak geri verecek
- Farklı birimler olduğu için girdinin birimine göre kıyaslama yapacağız. Bunun için *if* kullanabiliriz.
- Girdi biriminin hangi birime dönüştürüleceği de 2 şart içerdiğinden burada bir *if* kalıbı daha kullanağız.
- Son olarak yukarıdakii formülasyonla değeri hesaplayıp çıktı olarak geri döndüreceğiz.

```python
def sicaklik(deger, birim="Celcius", cikti="Fahrenheit"):
    if birim == "Celsius" or birim == "C":
        if cikti == "Fahreheit" or cikti == "F":
            return 180*deger/100+32
        elif cikti == "Kelvin" or cikti == "K":
            return deger+273.15
```

*def* yazıp yanına fonksiyonumuzun adını yazdıktan sonra parantez içine fonksiyonun girdileri’ni (*input*) yazdık. Üç tane girdimiz var; dönüştürülmek istenen sıcaklığın değeri, dönüştürülmek istenen sıcaklığın birimi ve dönüştürülecek sıcaklığın birimi. 2.ve 3. girdinin yanında *=* ve birim yazıyor. Bunun anlamı şu oluyor: fonksiyona 3 girdi vermek gerekir, normalde bu 3’ü sağlanmazsa çalışmaz. Ancak eşitlik ile bir değer tanımlarsanız bu varsayılan değer olur. Yani tek bir girdi ile fonksiyonu çağırısam mesela *sicaklik(20)* Celcius’tan, Fahrenheit’a dönüşüm yapar. İki girdi versem sicaklik(20, “Kelvin”) 20 Kelvin’i Fahrenheit’a dönüştürür. Eksik girdi olması durumunda varsayılan değeri kullanarak fonksiyon çalışmaya devam eder.

Hemen fonksiyonun ilk satırında birim’i kontrol ediyoruz. Girilen değerin birimi Celcius ise ya da kullanıcı kısaca C yazdıysa bu *if* kalıbının iç satırına giriyoruz. Bu iç satırda çiktinin birimini kıyaslıyoruz. Eğer Fahrenheit ise Celcius’tan Fahrenheit’a, Kelvin ise Celcius’tan Kelvin’e dönüşüm yapıyoruz. Bunun için de *return*‘ün yanına dönüşüm formülümüzü yazıyoruz. Böylece çıktı hesaplanarak geri döndürülüyor.

**Sıra sizde:** Göreceğiniz üzere kod eksik. Daha Fahrenheit’tan ve Kelvin’den dönüşümler yapılması gerekiyor. Yukarıdaki kodu kullanarak lütfen sizde bu kodu genişletin.
