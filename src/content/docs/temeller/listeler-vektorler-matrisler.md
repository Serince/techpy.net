---
title: "Listeler, Vektörler, Matrisler"
description: "Listeleri oluşturmak bilhassa sayısal hesaplamalar yapmakta ve döngüler oluşturmakta oldukça önemli. O sebeple burada, bundan sonraki örneklerde kullanacağımız temel liste, matrisleri listeledim. Bunl"
sidebar:
  order: 8
yazar: "Serdar Turgut İnce"
yazilim: "Python"
tarih: "2021-03-29"
kapak: "/kapaklar/listeler-vektorler-matrisler.jpg"
durum: tam
---
Listeleri oluşturmak bilhassa sayısal hesaplamalar yapmakta ve döngüler oluşturmakta oldukça önemli. O sebeple burada, bundan sonraki örneklerde kullanacağımız temel liste, matrisleri listeledim. Bunları kopyalayıp biraz denerseniz iyi olacağı kanaatindeyim. Şimdilik sadece Python’da böyle bir şeylerin olduğunun farkında olun, zaten sonraki örneklerde sarmal olarak dönüp dolaşıp bunları anlatacağız.

```python
a = range(10) # [0,1,2,3,4,5,6,7,8,9]
b = range(2,10) # [2,3,4,5,6,7,8,9]
c = range(2,10,2) # [2,4,6,8]
```

Bu ilk tip, *range*() fonksiyonu. Bu iteratif bir liste oluşturuyor. Kabaca şöyle anlayabilirsiniz, satırların yanındaki hashtag’den (#) sonraki listeleri oluşturuyor. Bu fonksiyon kod yazarken en çok kullanacağımız fonksiyonlardan diyebiliriz. Gördüğünüz üzere tek rakam yazarsanız, 0’dan başlayıp o rakama kadar ama o rakam dahil olmayacak şekilde bir liste oluşturuyor. İçine 2 rakam yazarsanız, ilk rakamdan başlıyor son rakama kadar birer birer sayan bir liste oluşturuyor ama yine son rakam değil. 3 rakam yazarsanız, ilk sayıdan başlayıp, ikinci sayıya kadar, üçüncü sayı kadar artışlarla ilerleyen bir liste oluşturuyor. Bu arada \#’den sonraki ifadeleri Python yorumlamaz. Böylece siz kodla ilgili yorumlarınızı ve notlarınızı bu şekilde tutabilirsiniz.

```python
import numpy as np

d = np.linspace(0,10) # standart 50 değer
e = np.linspace(0,10,100) 
f = np.arange(0,10,0.1)
```

Tabi *range*() fonksiyonu biraz sınırlı. Sadece tam sayılarda sayıyor. Bize daha fazla işlem yapabileceğimiz ondalıklı sayılarda oluşturabileceğimiz listeler de çok lazım oluyor. Bunun için 2 fonksiyon oldukça önemli; *np.linspace()* ve *np.arange()*. İkiside içine yazılan ilk iki rakam arasında liste oluşturuyor. *np.linspace()*‘de 3. rakamı yazmazsanız standart olarak 50 tane eşit aralıklı sayı üretiyor. 3. sayıyı yazarsanız, o sayı kadar ilk iki rakam arasında eşit aralıklı bir liste oluşturuyor. *np.arange()*‘de ise adım sayısını veriyoruz aynı *range()*‘de olduğu gibi ama *range()*‘den farklı olarak bu ondalıklı’da olabiliyor.

```python
import numpy as np

g = np.zeros((10,10))
h = np.random.random((10,10))
i = np.array([[1,2],
              [3,4]])
```

Yukarıdaki fonksiyonlarla’da matris ve ya vektör oluşturabiliyoruz. *np.zeros()* ile içinde sadece sıfır olan istediğimiz boyutta matris oluşturabiliriz. Örneğin bur da 10×10 ve tüm elemanları sıfır olan bir matris üretildi. Rasgele bir matris üretmek istiyorsanız *np.random.random()* kullanabilirsiniz. Sadece boyutunu fonksiyonun içine yazmanız yeterli. Yok ben kendi matris elemanımı kendim yazacağım diyorsanız o zaman *np.array()* yazıp içine liste olarak elemanları yazacaksınız. Bunun spyder’da kısayolu ise *ctrl* + *m* kısayolu ile istediğiniz matris ya da vektörü oluşturabilirsiniz. Tüm bunların daha fazlası ancak siz bu yazdıklarımdan daha fazlasını deneme yanılmayla bu neymiş diyerek öğrenebilirsiniz. Ben bunları sonraki denemeleri anlatabilmek için genel bilginiz olması açısından yazdım.
