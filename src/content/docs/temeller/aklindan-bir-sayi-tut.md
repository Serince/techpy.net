---
title: "Aklından bir sayı tut"
description: "Öğrendiklerimizi şöyle toparlayıp bir tekrar edelim. Basit bir oyun yazalım. Bilgisayar aklından bir sayı tutsun ve kullanıcıdan tahmin etmesini istesin. Tahmine göre aşağı ya da yukarı […]"
sidebar:
  order: 11
yazar: "Serdar Turgut İnce"
yazilim: "Python"
tarih: "2021-04-10"
kapak: "/kapaklar/aklindan-bir-sayi-tut.jpg"
durum: tam
---
Öğrendiklerimizi şöyle toparlayıp bir tekrar edelim. Basit bir oyun yazalım. Bilgisayar aklından bir sayı tutsun ve kullanıcıdan tahmin etmesini istesin. Tahmine göre aşağı ya da yukarı yönlendirmeleriyle, sayıyı bulmaya yardımcı olsun. Kodu önce bir tasarlayalım:

- Programın aklında rastgele bir sayı tutması için rastgele sayı üreten kodlara ya da kütüphaneye ihtiyacımız var.
- Sürekli soru soracağı için döngü kullanmalıyız
- Döngünün kaç kere döneceğini biliyor muyuz? Hayır, kullanıcının cevabına göre değişir. Kullanıcı doğru cevabı verene kadar soracak. O zaman *while* döngüsü kullanmalıyız.
- *while* döngüsünün durma şartı kullanıcıdan aldığımız cevabın bilgisayarın tuttuğu sayıyla eşleşmesi durumu olacak.
- Kullanıcının cevabına göre, bilgisayar tarafından sayıyı kıyaslayarak kullanıcıya aşağı ya da yukarı git diyebiliriz. Bunun için *if* ile cevabı döngü içinde kontrol etmeliyiz.

Bunları neden yazıyorum kodu vereceksem? Çünkü kod yazma sürecinden önce ne yazacağımızı tasarlamalıyız. Ben de aşağıdaki kodu yazarken düşüncelerimi sizle paylaşarak, nasıl bir metodoloji izlememiz gerektiğini göstermek istiyorum. Şimdi bu tasarım fikirlerinden sonra kodumuza geçebiliriz.

```python
import random

alt = 0
ust = 100
tut = random.randint(alt, ust)
sayac = 0
cevap = 101
while cevap != tut:
    cevap = int(input("Aklımdaki sayıyı tahmin edin [{},{}]: ".format(alt, ust)))
    sayac = sayac + 1
    if cevap > tut:
        print("Olmadı biraz aşağı inin!")
        ust = cevap
    elif cevap < tut:
        print("Olmadı biraz yukarı çıkın!")
        alt = cevap
print("Tebrikler {} denemede bildiniz!".format(sayac))
```

Açıklamalara geçmeden hemen önce yukarıdaki kodu kendi ekranınıza kopyalayıp biraz değiştirir misiniz? Örneğin 0 ile 100 arasında değilde 0 ile 10 arasında olsun. Sonra Bilgisayar aşağı yukarı demek yerine sonuca %10 yaklaştınız desin. Ya da 10 puan yaklaştıysa sıcak, 20 puan yaklaştıysa ılık desin, daha fazlası için soğuk desin. Tüm bu dediklerimi yapabilmeniz için aşağıdaki açıklamalara ihtiyacınız yok. Yukarıdaki kodu kurcalayarak bulabilirsiniz.

Şimdi detaylara geçersek. Önce rastgele sayı üretebilmek için *random* kütüphanesini çağırdık. Sonra alt ve üst diye tahmin edeceğimiz sayının sınırlarını belirten iki değişken oluşturduk. tut diye *random.randint(*) fonksiyonuyla *alt* ile *ust* arasında (bunlar dahil) rastgele integer (*int*) sayı ürettik. Bu sayıyı kodu yazan olarak biz de bilmiyoruz. Çünkü kod her çalıştırıldığında bu fonksiyon rastgele sayıyı değiştirecek. Sonra başlangıç değeri olarak cevap adında bir değişken oluşturduk ve bunun değerini yanlış olacak bir cevabı yazdık. 0 ile 100 arasında bir sayı üreteceğimiz için bunu 101 seçtik. Neden yanlış bir cevap oluşturuyoruz derseniz *while* döngüsünün hemen yanındaki kıyas sebebiyle.

*while* döngüsünün çalışma şartı cevap != tut, yani cevap tutulan sayıya eşit olmadığı müddetçe bu döngü döner. *!=* ifadesi eşit değil anlamına geldiği için örneğin *5 !=5* işleminin cevabı yanlış olacaktır. Aynı bu mantıkla kullanıcı tutulan sayıyı doğru tahmin ederse bu ifade yanlış olacak ve *while* döngüsü duracaktır. Aslında işte bu sebeple bir önceki satırda *cevap = 101* dedik. Böylece cevap *!=* tut ifadesi doğru olacak ve döngü başlayacak.

Döngüde hemen kullanıcıdan sayıyı tahmin etmesini istedik ve girdiği sayıyı cevap değişkenine atadık. Böylece onun verdiği cevabı tuttuğumuz sayıyla kıyaslayarak, yukarı ve aşağı ifadelerini *if* ve *elif* ile yazdık. Aynı zamanda verilen cevaba göre alt ve üst sınırları ayarlayarak, soruda hangi aralıkta tahmin etmesi gerektiğini kullanıcıya sorduğumuz sorunun içinde güncelledik.

Unutmadan bir de döngüden önce *sayac* diye bir değişken oluşturduk ve her soruyu sorduktan sonra bunu bir artırdık. Böylece kaç kere soru sorduğunu sayabildik ve kullanıcı doğru cevabı verince döngü duracak ve en son satırdaki *print* ile kaç kere soru sorulduğunu yani kaç tahminde doğru cevabı bulduğunu gösterebildik.

**Sıra sizde:** Daha önce print içinde değişkenleri göstermek istediğimizde .format gibi birşey kullanmamıştık. Bu da başka bir yöntem print içinde göstermek için. Lütfen siz de çıktıları daha önce gösterdiğimiz şekilde (*f*) yaparak kodu değiştirir misiniz?
