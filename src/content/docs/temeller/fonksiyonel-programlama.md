---
title: "Fonksiyonel Programlama"
description: "Şu ana kadar olan tecrübelerime göre, tam olarak oturması biraz zaman alan bir programlama tekniği. Kodunuz biraz uzadığı zaman işler karışıyor değişkenler birbirine giriyor. Yapılacak işlemler […]"
sidebar:
  order: 4
yazar: "Serdar Turgut İnce"
yazilim: "Python"
tarih: "2021-03-08"
kapak: "/kapaklar/fonksiyonel-programlama.jpg"
durum: tam
---
Şu ana kadar olan tecrübelerime göre, tam olarak oturması biraz zaman alan bir programlama tekniği. Kodunuz biraz uzadığı zaman işler karışıyor değişkenler birbirine giriyor. Yapılacak işlemler karışıyor. Artık kod zihnen yormaya başlıyor. İşte bu programlama yöntemi sizi daha sistematik düşünmeye ve programlamaya yönlendirecek bir yöntem.

Şimdi kodlamaya yeni başladığımız için, kod üzerinden düşünmeyelim de bir şirket üzerinden düşünelim. Bir aile şirketinde çalışıyorsunuz. Ne iş yaptığınız belli değil. Nerede bir iş varsa kim o an oradaysa o işi yapıyor. Klasik anlamda programlamayı böyle düşünürseniz. Fonksiyonel programlamada, kurumsal bir şirket olarak düşünülebilir. Her işin yapılacağı departmanlar var. O departmanın girdisi ve çıktısı var. O departman başka işe karışmıyor, ne girdi olursa ona göre çıktı üretiyor, şeklinde düşünülebilir.

<figure class="wp-block-image size-large">
<img src="/uploads/2021/03/input-output.jpg" class="wp-image-2652" decoding="async" width="2188" height="1420" />
<img src="/uploads/2021/03/input-output.jpg" class="wp-image-2652" data-eio="l" width="2188" height="1420" />
</figure>

Burada anahtar kavramlar girdi ve çıktıdır. Çok basit gibi görünür ama en çok karıştırılan kısımdır bu girdi çıktı mevzusu. Matematik fonksiyonu olarak düşünürseniz, örneğin;

<div class="wp-block-katex-display-block katex-eq" katex-display="true">

    f(x,y,z)=x^2+2xy-z^3

</div>

fonksiyonunda girdiler yani (inputlar) x, y, z’dir. Bunlar sağlanmadan bu fonksiyonun çıktısı (output) hesaplanamaz. Şimdi bu girişten sonra hemen bir kod yazalım onun üzerinden python’da fonksiyonel programlamayı inceleyelim. Daha önceden *for* döngüsüyle yaptığımız faktöriyel hesabını bu sefer while döngüsüyle yapalım ve bunu aynı zamanda Fonksiyonel programlama ile gerçekleştirelim.

```python
def faktoriyel(q):
    fakt = 1
    while q >= 1:
        fakt = fakt * q
        q = q - 1
    return fakt
```

Girişteki açıklama yönünden yukarıdaki koda bakarsak bu fonksiyonun adı faktoriyel ve yanındaki parantezin içindeki input yani *q*. Bu fonksiyonun çıktısı ise en son satırda yer alan *return* anahtar kelimesinin yanında yer alan *fakt* değişkeni. Basitçe bu fonksiyona ben *q*‘yu vereceğim o da bana *fakt*‘ı verecek. Bir fonksiyon yazarken düşünülecek ilk şey “Ne vereceğim? (input), Ne alacağım?(output)”

Şekil olarak fonksiyonlar her zaman *def* ile başlar ve hemen yanına fonksiyon ismi ve input(lar) yazılır. Sonra “*:*” konulur ve girintiye fonksiyonun hesaplamaları yazılır.

fakt diye bir başlangıç değeri oluşturduk. Bu başlangıç değeri çarpma işlemine göre etkisiz eleman olduğu için 1 tanımlandı. Bir sonraki satırda *while* tanımlandı. Burada döngünün dönme şartı *q* değişkenimizin 1’den büyük eşit olması olarak belirlendi. Böylece q, 1’e eşit olana kadar bu döngü tekrar edecek. Döngünün ilk satırında ilk belirlediğimiz başlangıç değerini *q* ile çarpıyoruz, sonraki satırda *q*‘yu bir eksiltiyoruz, çünkü *while* döngüsünde her döngüde for döngüsündeki gibi bir değişken tanımlanmıyor. Yani *for i in range(10)*: gibi bir tanımda her döngüde i değişkeni artımlı olarak değişirken, *while* döngüsünde böyle bir artımlı değişim maalesef yoktur. Bu işlem *q =0* olana kadar devam ediyor ve duruyor. Böylece biz sırasıyla *q*‘dan başlayıp 1’e kadar olan tüm sayıları *fakt* ile çarparak, sayının faktöriyelini buluyoruz. Son olarak bunu *return*‘ün yanına yazarak çıktı olarak geri gönderiyoruz.
