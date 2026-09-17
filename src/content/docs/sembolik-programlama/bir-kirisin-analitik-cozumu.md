---
title: "Bir Kirişin Analitik Çözümü"
description: "Mukavemet dersinde işlenmekte olan elastik eğrinin denkleminin çeşitli sınır şartlarında analitik olarak çözümünü Python sympy kütüphanesi kullanarak yapacağız. sympy kütüphanesindeki tüm fonksiyonlar"
sidebar:
  order: 1
yazar: "Serdar Turgut İnce"
yazilim: "Python + SymPy"
tarih: "2021-10-17"
kapak: "/kapaklar/bir-kirisin-analitik-cozumu.jpg"
durum: tam
---
Mukavemet dersinde işlenmekte olan elastik eğrinin denkleminin çeşitli sınır şartlarında analitik olarak çözümünü Python sympy kütüphanesi kullanarak yapacağız.

```python
from sympy import *
from sympy.abc import *
```

sympy kütüphanesindeki tüm fonksiyonları ve kullanabileceğimiz tüm sembol isimlerini çağırdık. Örneğin bir f(x,y,z) fonksiyonunun x, y ve z’ye bağlı olduğunu belirtmek için öncelikle x,y ve z’nin birer sembol olduğunu belirtmemiz gerekir. Bunu from sympy.abc import x,y,z şeklinde de yapabilirdik. Ancak ikinci satırda yazıldığı gibi tanımlanabilecek tüm sembolleri çağırmayı tercih ettik. Şimdi bir ince kirişin elastik eğri denklemini tanımlayalım. Aşağıda yayılı yük altındaki bir kirişin elastik eğri denklemi verilmiştir.


$$E I \frac{\mathrm{d}^4 w}{\mathrm{d}x^4} = -q$$


Python içerisinde yukarıdaki denklemi tanımlarken eşitliğin sağında bir verinin kalmaması gerekmektedir. -q değerini de denklemin soluna atarak Python içerisinde yazıyoruz.

```python
w = Function("w")(x)
sol = E * I * w.diff(x, 4) + q
```

Kirişin çökme fonksiyonu w(x)’i analitik olarak elde edebilmek için yukarıdaki denklemi dört sefer integral almak gerekmektedir. Her bir integral sonunda bir adet bilinmeyen C katsayısı ortaya çıkmaktadır. Yani dört sefer integral aldıktan sonra elimizde dört adet bilineyen olacaktır.


$$
\begin{aligned}
E I \frac{\mathrm{d}^3 w}{\mathrm{d}x^3} &= -q x + C_{1} \\
E I \frac{\mathrm{d}^2 w}{\mathrm{d}x^2} &= -\frac{q x^2}{2} + C_{1} x + C_{2} \\
E I \frac{\mathrm{d} w}{\mathrm{d}x} &= -\frac{q x^3}{6} + \frac{C_{1} x^2}{2} + C_{2} x + C_{3} \\
E I \, w &= -\frac{q x^4}{24} + \frac{C_{1} x^3}{6} + \frac{C_{2} x^2}{2} + C_{3} x + C_{4}
\end{aligned}
$$


Yukarıda görülen bilinmeyen katsayıları (C<sub>1</sub> , C<sub>2</sub> , C<sub>3</sub> , C<sub>4</sub> ) elde edebilmek için dört adet sınır şartına ihtiyaç duyulmaktadır. Örneğin iki ucu basit mesnetli bir kiriş için sınır şartları:


$$w(0) = 0, \qquad w(L) = 0, \qquad \left. \frac{\mathrm{d}^2 w}{\mathrm{d}x^2} \right|_{x=0} = 0, \qquad \left. \frac{\mathrm{d}^2 w}{\mathrm{d}x^2} \right|_{x=L} = 0$$


Sınır şartlarını kullanarak bilinmeyen katsayılar elde edilir ve yer değiştirme denklemi w(x) elde edilir.


$$w(x) = \frac{q\,x\,\left(x^3 - 2Lx^2 + L^3\right)}{24\,E\,I}$$

> Aşağı sarkma yönünde negatif alınır.


Bu işlemleri Python içerisinde dsolve komutu ile kolayca yapabilirsiniz.

```python
SS = dsolve(sol,
            ics={w.subs(x, 0): 0,
                 w.subs(x, L): 0,
                 w.diff(x,2).subs(x, 0): 0,
                 w.diff(x,2).subs(x, L): 0})
W = SS.rhs
```

Yukarıda W ile tanımladığımız denklem iki ucu basit mesnetli yayılı yük altındaki bir kirişin çökme denklemidir. Bulduğumuz denklemi kullanarak bir örnek çözelim.


$$
\begin{aligned}
q &= 0{,}1 \ \mathrm{N/m} \\
L &= 100 \ \mathrm{mm} \\
h = b &= 1 \ \mathrm{mm} \\
E &= 210\,000 \ \mathrm{MPa}
\end{aligned}
$$


```python
graphSS = plot(W.evalf(subs={L: 100,
                             E: 210000,
                             I: 1 / 12,
                             q: 0.1}), (x, 0, 100))
```

<div class="wp-block-image">

<figure class="aligncenter size-full">
<img src="/uploads/2021/10/Beam.png" class="wp-image-2678" decoding="async" width="424" height="288" />
<img src="/uploads/2021/10/Beam.png" class="wp-image-2678" data-eio="l" width="424" height="288" />
</figure>

</div>

Aynı kirişin iki ucunun ankastre mesnetli olduğu durumu veya bir ucunun ankastre, diğer ucunun serbest olduğu durumları çözebilirsiniz.

**Sıra sizde…**
