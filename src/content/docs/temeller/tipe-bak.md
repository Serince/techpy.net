---
title: "Tipe bak!"
description: "Tüm programlama dillerinde oluşturacağınız değişkenin tipi önemlidir. Bazı dillerde değişkenin tipini önceden tanımlamak gereklidir. Tip falan derken ne demek istediğimi örnek bir alıştırma yaptıktan "
sidebar:
  order: 7
yazar: "Serdar Turgut İnce"
yazilim: "Python"
tarih: "2021-03-21"
kapak: "/kapaklar/tipe-bak.jpg"
durum: tam
---
Tüm programlama dillerinde oluşturacağınız değişkenin tipi önemlidir. Bazı dillerde değişkenin tipini önceden tanımlamak gereklidir. Tip falan derken ne demek istediğimi örnek bir alıştırma yaptıktan sonra anlatacağım. Şimdi çarpma işlemi yapan bir kod yazalım.

```python
ilk = input("Lütfen bir sayı giriniz?")
ilk = int(ilk)
ikinci = input("Lütfen bir sayı daha giriniz?")
ikinci = float(ikinci)
carpim= ilk * ikinci
print(f"Girdiğiniz sayıların çarpımı {carpim}'dır")
```

Altı üstü çarpma işlemi ama ne kadar çok kod yazdık. Başlangıç için biraz fazla gibi ama birazdan her şey netleşir merak etmeyin. Öncesinde siz biraz kurcalarsanız kodu güzel olur. Yukarıdaki kodu kopyalayıp çalıştırırsanız bilgisayarınızda, konsol ekranında ilk satırdaki tırnak içindeki ifadeyi göreceksiniz. oraya tıklayıp bir sayı yazın ve enter’a basın. Sonra 3. satırdaki soru yazacak ekranınızda, yine bir sayı girip *enter*‘a basın. Bu sefer ekranınızda son satırdaki tırnak içindeki ifade yazacak bir farkla oradaki {} ifadesi yerine girdiğiniz sayıların çarpımı yazacak.

Satır satır inceleyelim kodu, *input()* fonksiyonu programın kullanıcıya bir soru sorması için kullanıyoruz. Böylece python tırnak içindeki ifadeyi *console* ekranında soruyor ve bir şey yazmanızı bekliyor. Güzel, diyelim sordu ve siz 10 yazdınız. Böylece program *ilk = “10”* olarak alıyor. Dikkat ettiyseniz 10’u tırnak içinde yazdım. İşte bu yazının asıl konusu tipler burada devreye giriyor.

Şimdilik size 3 tane tip anlatacağım:

1.  string (*str*) – Metin
2.  integer (*int*) – Tam sayı
3.  float (*float*) – Ondalıklı sayı

Yani siz python’da *a=”ali”* yazarsanız, yani tırnak içinde bir şeyler yazarsanız eşitliğin sağına, program bunun bir string olduğunu anlıyor ve öyle depoluyor. *b=10* yazdığınızda, tırnak yok gördüğünüz gibi bu sefer bunun bir integer olduğunu, *c=3.14* yazdığınızda ise bunun bir float olduğunu anlıyor ve böylece saklıyor. İyi de program bunları zaten otomatik anlıyorsa neden size anlatıyorum? Çünkü her zaman anlayamıyor ya da biz dönüştürmek istiyoruz tipini. Mesela, *input()* ile sorduğunuz sorunun cevabını her zaman string (metin) olarak alıyor python. Yukarıda yazmıştım ya *ilk =”10*“, işte sayı tırnak içinde. Yani bir metin. Çarpma işlemi yapılamaz bir metinle. E o zaman ne yapacağız, dönüştürme fonksiyonları kullanacağız. Bir sayıyı metine dönüştürmek istersek *str()* fonksiyonunu, ondalıklı sayıya çevirmek istersek *float()* fonksiyonunu ve bir tam sayıya çevirmek istersek *int()* fonksiyonunu kullanacağız. Böylece 2. ve 4. satırda neden bu fonksiyonları kullandığımı anlayabilirsiniz. Tam kafanıza yatmadıysa, devam edin, ileri ki örneklerle yeterince pekiştireceğiz zaten.

Son satıra gelirsek, *print()* fonksiyonu bir şeyi *console* ekranına yazdırmak için kullandığımız fonksiyondur. Burada bir string ve integer’ı birlikte yazdırmak istersek burada kullandığımız gibi yapabiliriz. String (metin) içinde sayı yazdırmak için hemen tırnağın öncesine f eklersek ve istediğimiz yere {} içine de yazmak istediğimiz değişkeni koyarak yapabiliriz. Biraz da siz kurcalayın.

**Sıra sizde:** Mesela “*{} sayısı ile {} sayısının çarpımı {}’dır”* yazdırın konsol ekranına. Tabi ki süslü parantezlerin yerine *ilk, ikinci* ve *carpim* sayıları yazsın.
