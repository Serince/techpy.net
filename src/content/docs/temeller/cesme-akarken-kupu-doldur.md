---
title: "Çeşme akarken küpü doldur"
description: "Başlangıçta döngüler biraz kafa karıştırıcı olabiliyor. Döngü ilerlerken içinde hesaplanan işlem de akıp gidiyor. İşte bizim hesaplamalar akarken küpü doldurmamız lazım. Şimdi bir liste oluşturalım ve"
sidebar:
  order: 10
yazar: "Serdar Turgut İnce"
yazilim: "Python"
tarih: "2021-04-04"
kapak: "/kapaklar/cesme-akarken-kupu-doldur.jpg"
durum: tam
---
Başlangıçta döngüler biraz kafa karıştırıcı olabiliyor. Döngü ilerlerken içinde hesaplanan işlem de akıp gidiyor. İşte bizim hesaplamalar akarken küpü doldurmamız lazım. Şimdi bir liste oluşturalım ve bu listenin 2 katını elde etmeye çalışalım.

```python
a = [2, 3, 5, 20, 25]

for i in a:
    b = 2 * i
```

Yukarıdaki kod kabaca *a* listesinin elemanlarını 2 ile çarpıyor. Döngüye bakarsanız *i, a* listesinin her bir elemanı olarak döngüde ilerliyor. ilk döngüde *i = 2* oluyor, ikinci döngüde *i=3*, üçüncü döngüde *i=5* oluyor böylece *a*‘nın son elemanına kadar gidiyor. Bu kodu çalıştırınca biz *b = \[4, 6, 10, 40, 50\]* elde etmeyi ümit ediyorduk ama kodu bilgisayarınızda çalıştırınca göreceğiniz üzere sadece *b=50*‘yi elde edebildik. Çünkü döngüde her *i* değiştiğinde *b*‘de değişiyordu ve en son *i=25* olduğu için de biz *b=50* elde ettik. Yani çeşme akarken küpü dolduramadık. Yeni bir deneme daha yapalım.

```python
a = [2, 3, 5, 20, 25]
b = []
for i in a:
    b.append(2 * i)
```

Burada yukarıdakinden farklı olarak döngüden önce *b*‘yi boş bir liste olarak tanımladık ( *b = \[\]* ). Böylece bu boş listeye döngü dönerken yaptığımız hesabı ekleyebiliriz. Listeye bir eleman eklemenin yolu liste isminden sonra “.” koyup append yazmak. Böylece parantez içindeki ifade böylece her döngüde listenin içine eklenebilir. Her döngüde *i, a*‘nın başka bir elemanı olacak ve biz de o elemanı 2 ile çarpıp *b* listesine ekleyeceğiz.

**Sıra sizde:** Peki listenin tüm elemanlarını kendinden önceki tüm elemanların toplamı olacak şeklinde bir liste oluşturmak istesek.Yani b=\[2, 5, 10, 30, 55\]. Buyrun bunu da siz deneyin.
