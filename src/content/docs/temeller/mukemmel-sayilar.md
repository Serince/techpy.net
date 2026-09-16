---
title: "Mükemmel sayılar"
description: "Mükemmel sayı sorularını hatırlarsınız belki. Matematikte önce tanımın yapıldığı sonra da bu tanıma uyan rakamların olduğu ya da olmadığı şıkları bulma sorularından. İşte bu mükemmel sayı […]"
sidebar:
  order: 13
yazar: "Serdar Turgut İnce"
yazilim: "Python"
tarih: "2021-04-23"
kapak: "/kapaklar/mukemmel-sayilar.jpg"
durum: tam
---
Mükemmel sayı sorularını hatırlarsınız belki. Matematikte önce tanımın yapıldığı sonra da bu tanıma uyan rakamların olduğu ya da olmadığı şıkları bulma sorularından. İşte bu mükemmel sayı (Nam-ı Diğer <a href="https://en.wikipedia.org/wiki/Perfect_number" data-type="URL" data-id="https://en.wikipedia.org/wiki/Perfect_number">Perfect number</a>) çarpanlarının toplamı kendisine eşit olan sayılara deniyor. Yani 6 sayısının çarpanları 1, 2, 3’dür ve bunların toplamı da 6’ya eşittir. Şimdi bu tanıma göre kod yazalım ve örneğin 500’e kadar olan tüm mükemmel sayıları bulalım. Lütfen devam etmeden önce bu tanıma göre siz bir kaç satır kod karalar mısınız? Nasıl olsa cevabı aşağıda takıldığınızda yavaş yavaş birer satır kopyalayarak siz de yapabilirsiniz. Size yardımcı olacak bir kaç adım yazayım önce.

- Öncelikle bir sayının bölenlerini bulma kodu yazmayı deneyebilirsiniz. Bu kod, bölenlerini bulmak istediğiniz sayıya kadar olan tüm sayıları tarar ve bu sayıları tek tek bölenlerini bulmak istediğimiz sayıya bölümünden kalanı kontrol eder. Örnekle ifade edersem 6 sayısının bölenleri için 6’nın 1’den 6’ya kadar olan sayıların hepsine bölümünden kalanları kontrol eder, kalan 0 ise bu tam bölendir.
- Döngü sırasında bir sayıyı depolamak için boş liste açıp, *append* metoduyla sayıları depolayabiliriz.
- Sayının bölenlerini hesaplayan kodu bulduysanız, bunu başka bir döngü içinde ki bu bizim problemimiz için 1’den 500’e kadar sayıların bölenlerini bulacağımız bir döngü olmalı.
- Eğer bölenlerini bulduğunuz sayıdaki bölenlerin toplamı sayıya eşitse bu bir mükemmel sayıdır ve bunu bir liste içinde depolamalı.

```python
mukemmel = []
for i in range(1, 501):
    bolen = []
    for j in range(1, i):
        if i % j == 0:
            bolen.append(j)
    if sum(bolen) == i:
        mukemmel.append(i)
print(mukemmel)
```

Önce mükemmel sayıları döngü içinde hesapladığımızda depolamak için boş bir *mukemmel* adında bir liste açıyoruz. Sonra 1’den 500’e kadar sayıları tek tek denemek için bir döngü başlatıyoruz. Sonra döngü içinde başka bir döngü daha kullanıyoruz. Bu iç döngüde sayının bölenlerini hesaplamak istiyoruz. Dış döngüden bölenlerini kontrol edeceğimiz sayı gelecek ve iç döngüde bu sayının bölenleri hesaplanacak. Bölenlerini depolamak için iç döngünün hemen öncesinde *bolen* adında bir boş bir liste oluşturuyoruz. İç döngüde *if* ile o sayıya kadar olan sayıların kalanını kontrol ediyoruz. Eğer kalan 0 ise bunu *bolen* listesine ekliyoruz.

Sayının bölenlerini bir listede tutup *sum()* fonksiyonuyla bu sayıların toplamını hesaplayıp bunu sayının kendisine eşit olup olmadığını kontrol ediyoruz. Eğer bu eşitse bu mükemmel sayıdır ve bunu *mukemmel* adındaki boş listeye ekliyoruz. Son olarak bunu *print()* ile konsola gösteriyoruz.
