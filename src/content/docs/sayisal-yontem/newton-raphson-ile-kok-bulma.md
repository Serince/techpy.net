---
title: "Newton – Raphson ile kök bulma"
description: "En hızlı kök bulma yöntemi diye adlandırılabilir Newton-Raphson algoritması. Sayısal yöntemlerde hızı sebebiyle yaygınca kullanılan bir yöntem. Taylor serisinin ilk türevi ifadesine kadar açılımından "
sidebar:
  order: 2
yazar: "Serdar Turgut İnce"
yazilim: "Python + NumPy"
tarih: "2021-12-20"
kapak: "/kapaklar/newton-raphson-ile-kok-bulma.jpg"
durum: tam
---
En hızlı kök bulma yöntemi diye adlandırılabilir Newton-Raphson algoritması. Sayısal yöntemlerde hızı sebebiyle yaygınca kullanılan bir yöntem. Taylor serisinin ilk türevi ifadesine kadar açılımından çıkarılabilir ve matematiksel olarak şu şekilde ifade edilir:

<div class="wp-block-katex-display-block katex-eq" katex-display="true">

    x_{n+1}=x_n- \frac {f(x_n)}{f'(x_n)}

</div>

Yani, kökü bulurken bir başlangıç değerinden başlayarak, belirlediğimiz değerin fonksiyondaki değeri ile türevindeki değerinin oranı kadar azaltarak sonraki değerini hesapla. Bulduğumuz değeri tekrar yukarıdaki ifadede hesaplayarak ilerlersek, gidilebilecek en kısa yoldan köke yaklaşacaksınız. Ama maalesef bu yöntem kökü bulmayı garanti etmez. Yani bazen kökü bulamayabilirsiniz. Bu matematiksel ifadeyi döngü şeklinde Python’da yazarsak:

```python
def newton_raphson(initial_value, func, func_prime, tolerance=0.001):
     delta = 1000
     root = initial_value
     while tolerance < delta:
          previous=root
          root = root - func(root) / func_prime(root)
          delta=abs((root-previous)/root))
     return root
          
```

Görüleceği üzere önce fonksiyonun girdileri tanımlandı. Yukarıdaki matematiksel ifadede görüleceği için sonraki iterasyon için bir başlangıç değeri tanımlanmalı, sonra fonksiyonun kendisi ve türevi tanımlanmalı. Bu yaklaşık kök bulma yönteminde iterasyonun nerede duracağını belirlemek için bir de tolerans (ya da hata oranı) tanımladık. Yalnız dikkat ettiyseniz toleransa bir değer atadık. Bu aslında varsayılan değer. Eğer fonksiyonu kullanırken bir tolerans ifadesi yazmazsak fonksiyon 0.001 olarak hesaplamalara devam eder. Eğer bir değer tanımlarsak, o ifadeyi esas kabul ederek hesaplamalar yapılır.

2\. satırda delta tanımladık ve bu deltaya bir başlangıç değeri verdik. Bu döngünün başlayarak, deltayı kendisinin hesaplaması için gerekli. Toleransdan büyük herhangi bir değer buraya yazılabilir. Karışıklık olmaması adında başlangıç değerini ilk kökümüz kabul ederek döngü tanımlamaya geçtik.

Belli bir bilinmeyen değere yaklaşarak yapılacak çözümlerde while döngüsü tercih edilir. While döngüsünde ifadenin yanına yazılan kural doğru olduğu müddetçe iterasyonlar devam edecektir. Bizim yukarıdaki kodda tanımladığımıza göre, delta (döngüde hesaplayacağımız hata oranı) toleransdan büyük olduğu müddetçe while döngüsü çalışacaktır. Yani diğer bir ifadeyle hata oranımız toleransın altına düştüğünde döngü duracaktır.

While içindeki iterasyonlarda iki hesaplama yapılıyor: bir sonraki kök (yukarıdaki denklemin aynısı) ve hata oranı (döngünün çalışabilmesi için). Burada hata oranını gerçek kökü bilmediğimiz için hesaplamak zor. Ancak bu tip durumlar için bulduğumuz kökün bir önceki iterasyona göre değişimini bir kriter olarak kullanabiliriz. Bağıl hatayı matematiksel olarak şöyle yazabiliriz:

<div class="wp-block-katex-display-block katex-eq" katex-display="true">

    \delta =\mid \frac{ŞimdikiKök - ÖncekiKök}{ŞimdikiKök}\mid

</div>

Bu hesabı yapabilmek için bir önceki iterasyondaki kökü hafızada tutmak gerekli. Bu sebeple ilk satırda previous yazarak kök hesaplamadan önceki iterasyondaki kök hafızaya aldık. Sonraki satırda ise Newthon-Raphson ifadesiyle sonraki kökü bulduk ve bağıl hatayı hesapladık. Bu işlemler hesapladığımız bağıl hata toleransdan küçük olana kadar devam edecek ve döngü durduğunda hesaplanan en son kök değeri kök ifadesi olarak return ile geri gönderilecek. Bu algoritmayı sin(x) için kullanalım.

```python
import numpy as np    
def f(x):
    return np.sin(x)

def fprime(x):
    return np.cos(x)

r=newton_raphson(4, f, fprime)
print(r)
# bu programın çıktısı pi yani 3.141592653589793 olacak
```

**Sıra sizde**: Lütfen aynı ifadeyi bu sefer sadece 100 iterasyon çalışacak şekilde for döngüsüyle yazar mısınız!
