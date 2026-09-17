---
title: "Faktöriyel"
description: "Bilgisayar programlarının en iyi yaptığı şey birşeyi tekrar etmektir. Bu tekrarlar çeşitli yöntemlerle gerçekleştirilebilir. Döngüler bu tekrarların yapılabileceği araçlardır. Bu denemde “for” döngüsü"
sidebar:
  order: 2
yazar: "Serdar Turgut İnce"
yazilim: "Python"
tarih: "2021-03-04"
kapak: "/kapaklar/faktoriyel.jpg"
durum: tam
---
Bilgisayar programlarının en iyi yaptığı şey birşeyi tekrar etmektir. Bu tekrarlar çeşitli yöntemlerle gerçekleştirilebilir. Döngüler bu tekrarların yapılabileceği araçlardır. Bu denemde “for” döngüsünü göreceğiz. Tabi ki konu anlatmak yerine bir örnek uygulamayla yapacağız. Örneğimiz faktöriyel hesaplama. Bildiğiniz üzere faktöriyel hesaplamada faktöriyeli hesaplanacak sayıdan 0’a doğru tüm sayılar sırayla çarpılır. Aşağıda bir örneği görülüyor.


$$
{1!=1} \\
    2!=2 .1=2 \\
    3!=3.2.1=6\\
    4!=4.3.2.1=24
$$


ya da serilerle şu şekilde ifade edebiliriz.


$\prod_{i=1}^{n}{i}=n!$


Şimdi bu matematiksel ifadeyi programlayalım.

```python
n = 5
fakt = 1
for i in range(1,n+1):
     fakt = fakt * i
print(fakt)
```

Lütfen yukarıdaki kodu spyder ekranınıza kopyalayın ve çalıştırın. Aşağıdaki açıklamaları okumadan önce kod üzerinde kendinizce deneme yanılma ile değişiklikler yapın ve her bir ifadenin ne anlama geldiğini tahmin etmeye çalışın. Bu, sonraki satırların daha iyi aklınızda kalması için önemli.

Şimdi gelelim satır satır kodu okumaya. İlk satırda yukarıdaki çarpım sembolü ile verilen yerdeki n tanımlandı. Yani 5! hesaplamak istiyoruz. Hemen altında fakt = 1 diye bir başlangıç değeri tanımlandı. Nedenini soruyorsanız, şimdilik çarpma işlemine göre etkisiz eleman 1 olduğu için diye aklınızda tutabilirsiniz. Sonrasında asıl bu konun temeli olan for döngüsü yazıldı.

For döngüsü, herhangi bir kodu istediğimiz sayıda tekrar çalıştırmamızı sağlar. Genel yazım kuralı, yukarıda yazıldığı gibi bir satır dönme sayısının belirtildiği kısım ve onun altında, aynı hizada olmayıp, onun girintisinde bulunan tekrar edilecek kod şekildedir.

Yukarıdaki for satırına bakarsak “*for i in range(1,n+1):*” demek; i değişkeni 1’den başlasın n’ye kadar (bizim için bu 5) sırayla değişsin demek. Yani ilk döngüde *i=1* olsun, onun altındaki girintili satırdaki kodu çalıştırsın. Sonra *i=2* olsun ve onun altındaki satırı çalıştırsın. Böyle devam etsin en son *i=5* olsun ve altındaki girintili satırı çalıştırsın. Böylece eliniz kağıt kalem alıp siz de koda bakarak yazarsanız şu tablo şeklinde değişkenler her bir döngüde tekrarlanır.

<figure class="wp-block-table">
<table>
<tbody>
<tr class="odd">
<td class="has-text-align-center" data-align="center"><strong>Döngü sayısı</strong></td>
<td class="has-text-align-center" data-align="center"><strong>i</strong></td>
<td class="has-text-align-center" data-align="center"><strong>fakt</strong></td>
</tr>
<tr class="even">
<td class="has-text-align-center" data-align="center"><strong>1</strong></td>
<td class="has-text-align-center" data-align="center">1</td>
<td class="has-text-align-center" data-align="center">1</td>
</tr>
<tr class="odd">
<td class="has-text-align-center" data-align="center"><strong>2</strong></td>
<td class="has-text-align-center" data-align="center">2</td>
<td class="has-text-align-center" data-align="center">2</td>
</tr>
<tr class="even">
<td class="has-text-align-center" data-align="center"><strong>3</strong></td>
<td class="has-text-align-center" data-align="center">3</td>
<td class="has-text-align-center" data-align="center">6</td>
</tr>
<tr class="odd">
<td class="has-text-align-center" data-align="center"><strong>4</strong></td>
<td class="has-text-align-center" data-align="center">4</td>
<td class="has-text-align-center" data-align="center">24</td>
</tr>
<tr class="even">
<td class="has-text-align-center" data-align="center"><strong>5</strong></td>
<td class="has-text-align-center" data-align="center">5</td>
<td class="has-text-align-center" data-align="center">120</td>
</tr>
</tbody>
</table>
<figcaption>Döngüdeki değişkenlerin her bir tekrada değişimi</figcaption>
</figure>

Döngü, range içindeki son değere ulaşınca durur ve girintisi olmayan sonraki ilk satırla devam eder, ki bu da bizim kodumuzda *print()* fonksiyonudur. Böylece sonuç olan 120 değeri konsola yazdırılır. Print fonksiyonunu for döngüsünün girintisine sokup kodu tekrar çalıştırır mısınız? O zaman girinti ile girinti olmamasının farkını anlayabilirsiniz.

Serdar Turgut İnce
