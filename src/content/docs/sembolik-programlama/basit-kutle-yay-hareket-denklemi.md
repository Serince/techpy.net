---
title: "Basit Kütle-Yay Hareket Denklemi"
description: "Bir kütle yay sistemin hareket denklemlerini çıkarabilmek için önce kinetik ve potansiyel enerji denklemlerinin çıkarılması gerekir. Bu enerjilerin farkı hareket denklemini vermektedir. Bu çalışmada s"
sidebar:
  order: 2
yazar: "Serdar Turgut İnce"
yazilim: "Python + SymPy"
tarih: "2021-11-04"
kapak: "/kapaklar/basit-kutle-yay-hareket-denklemi.jpg"
durum: tam
---
Bir kütle yay sistemin hareket denklemlerini çıkarabilmek için önce kinetik ve potansiyel enerji denklemlerinin çıkarılması gerekir. Bu enerjilerin farkı hareket denklemini vermektedir. Bu çalışmada sympy kütüphanesi kullanarak hareket denklemini çıkaracağız. Hadi başlayalım!

```python
from sympy import *
from sympy.abc import *
```

Yukarıdaki satırlar standart olarak sembolik işlemler yapacağımız sympy kütüphanesinin tüm fonksiyonlarını ve methotlarını çağırdık, ayrıca ikinci satırda sembol olarak temel sembollerin hepsini çağırdık. Yani artık x, y, z, a, b, c, mu, sigma vb. ifadelerin hepsi bir sembol.

```python
x=Function("x")(t)
f=Function("f")(t)
K=Rational(1,2)*m*diff(x,t)**2
V=Rational(1,2)*k*x**2-f*x
L=K-V
```

İlk iki satırda kuvvetimizin ve yer değişimlerimizin zamana bağlı birer fonksiyon olduğunu tanımladık. 3. satırda kinetik enerji (Kütlenin hareketinin enerjisi) ve 4. satırda ise basit kütle yay sisteminin potansiyel enerjisinin denklemini yazdık (Yayda depolanan enerji). Bu enerjilerin farkı bize hareket denklemini vermektedir. Bunu da son satırda L olarak tanımladık. Bu ifadeyi daha da basitleştiriebiliriz. Bunun için Euler-Lagrange eşitliğini kullanabiliriz.


$$\frac{\mathrm{d} \mathcal{L}}{\mathrm{d}x} - \frac{\mathrm{d}}{\mathrm{d}t} \left( \frac{\mathrm{d} \mathcal{L}}{\mathrm{d}\dot{x}} \right) = 0 \qquad \left( \dot{x} \equiv \tfrac{\mathrm{d}x}{\mathrm{d}t} \right)$$


Sympy kullanarak hareket denklemimizi tekrar hesaplayalım:

```python
Eq(diff(L,x)-diff(L,diff(x,t),t),0)
```

İlk başta *Eq* fonksiyonu eşitlik tanımlamak için yazıldı. Denklemde göreceğiniz üzere eşitliğin sağ tarafı 0. Sonrasında her bir ifade aynı şekilde eklendi. Böylece aşağıdaki hareket denklemini elde ettik.


$$-k\,x(t) - m\,\frac{\mathrm{d}^2 x}{\mathrm{d}t^2} + f(t) = 0 \quad \Longleftrightarrow \quad m\,a + k\,x = f$$


Yer değiştirmenin ikinci türevi ivmedir ($a \equiv \mathrm{d}^2x/\mathrm{d}t^2$), o yüzden yukarıdaki denklem kısaca $m\,a + k\,x = f$ diye okunur.


Euler-Lagrange hesaplamasını hızlıca yapmak için sympy fonksiyonlarını da kullanabilirsiniz. Bunun için *calculus* içindeki *euler_equations* fonksiyonu aynı işlemi yapmaktadır.

```python
calculus.euler_equations(L,x,t)[0]
```

Burada ifadenin sonunda \[0\] yazmamızın sebebi, bu fonksiyon çok boyutlu ve yüksek mertebeli ifadelerinde *euler_lagrangian* eşitliğini hesaplayarak, her birini liste elemanı olarak geri göndermesi. Bizim tek boyutlu ve birinci mertebeden bir hareket denklemimiz (L) olduğundan listenin ilk ve tek elemanını gösterebilmek için yazıldı.

**Sıra sizde:** Daha basit bir ifadeyi, sadece bir kütlenin hareket denklemini yukarıdakilere benzer prosedürle çıkarır mısınız? Cevabını ben yazayım siz bu ifadeyi yakalamaya çalışın.


$$m\,g + m\,\frac{\mathrm{d}^2 x}{\mathrm{d}t^2} = 0 \quad \text{(serbest düşen kütle; yukarı pozitif alınırsa)}$$

