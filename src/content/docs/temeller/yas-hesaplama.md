---
title: "Yaş Hesaplama"
description: "Python’da çok farklı ve çok işlevsel kütüphaneler var. Özellikle karmaşık kodlar yazmadan önce onunla ilgili olan kütüphaneleri araştırmak oldukça işimizi kolaylaştıracaktır. Yaşınızı hesaplayan bir k"
sidebar:
  order: 14
yazar: "Serdar Turgut İnce"
yazilim: "Python"
tarih: "2021-04-23"
kapak: "/kapaklar/yas-hesaplama.jpg"
durum: tam
---
Python’da çok farklı ve çok işlevsel kütüphaneler var. Özellikle karmaşık kodlar yazmadan önce onunla ilgili olan kütüphaneleri araştırmak oldukça işimizi kolaylaştıracaktır. Yaşınızı hesaplayan bir kodla hem bir kütüphane kullanalım hem de biraz Python’a alışalım. Kabaca kod, kullanıcıya yaşını sorsun ve şu anki tarihle aradaki farkı hesaplayıp kişinin yaşını göstersin.

```python
import datetime as dt
dogum=input("doğum tarihinizi giriniz: (Gün.Ay.Yıl) ")
dogum=dt.datetime.strptime(dogum,"%d.%m.%Y")
simdi=dt.datetime.now()
fark=simdi-dogum

Yıl=fark.days//365
Ay=fark.days%365//30
Gün=fark.days%365%30

print(f"{Yıl} yıl {Ay} ay {Gün} gündür hayattasınız")
```

Tarihlerle uğraşacağımız için *datetime* kütüphanesi oldukça işlevsel olacak bizim için. Bu sayede tarihler ve saatler arasındaki farkı çıkarma toplama gibi basit operatörlerle yapabiliriz. İlk satırda bu sebeple *datetime* kütüphanesini kodumuza çağırıyoruz. Her seferinde *datetime* yazmak uzun olacağı için bunu kısaca *dt* olarak kullanacağız. Kullanıcıya Doğum tarihini *input()* fonksiyonuyla soruyoruz ikinci satırda. Kullanıcının Gün.Ay.Yıl sıralamasıyla ve aralarına nokta koyarak girmesini istiyoruz. Bu önemli çünkü yoksa dönüştüremeyiz. Kullanıcının girdiği tarihi *dogum* değişkenine eşitleyerek devam ediyoruz.

Tipe bak başlığında incelediğimiz temel Python tipleri vardı. Burada ise daha başka bir tip lazım bize, tarih gibi bir tip. datetime kütüphanesi kendi tipine sahip. Bu kullanıcının girdiği tarihi (Bu Pythona göre bir string) *datetime* tipine dönüştürüyoruz 3. satırda. Dönüşüm yazarken *“%d.%m.%Y”* ifadesiyle ilk ifadenin gün sonra *“.”* ikinci ifadenin ay sonra yine *“.”* ve üçüncü ifadenin yıl olduğunu belirtiyoruz. 4. satırda ise şu anki tarihi simdi olarak *datetime* kütüphanesinden alıyoruz. Bu bilgisayarınızdaki tarihi alıyor. 5. satırda ise *simdi*‘den *dogum*‘u çıkararak, kişinin yaşını hesaplıyoruz. Bu yaş yine *datetime* tipinde.

7, 8, 9. satırlarda bu tarihi yıl, ay ve gün olarak hesaplıyoruz. *fark.days* ile kullanıcının kaç gündür hayatta olduğunu alıyoruz ve bunu 365’e bölerek kaç yıl ettiğini hesaplıyoruz. Ancak burada bir ayrıntı var *“//”* ile bölüm yapıyoruz. Normalde *“/”* ile bölüm yapılır. Bu bölümde normal bölme işlemi yapılır. *“//”* ise virgülden sonra bir hane içermeyecek şekilde bölümü alta yuvarlayan bir bölme yapıyoruz. Örneğin *10/4=2.5* iken *10//4=2*‘dir. Toplam gün sayısını alta yuvarlayarak bölünce kaç yaşında olduğunu hesaplıyoruz.

Son doğum gününden itibaren kaç ay geçtiğini ise toplam gün sayısının 365’e bölündüğünde kalan gün ile hesaplayabiliriz. Bunun için bölme işleminde kalanı veren bir işlem gerekiyor. İşte bu Python’da *“%”* ifadesi. Örneğin 10%3=1’dir yani daha yalın ifadesiyle 10, 3’e bölündüğünde 1 kalanını verir. Bizde toplam gün sayısının 365’ten kalanını hesaplıyoruz. BU son doğum gününden bugüne geçen gün sayısını veriyor. Bunu 30’a bölerek kaç ay geçtiğini hesaplıyoruz. Dikkat ediniz burada yine *“//”* kullanıyoruz.

Ay haricinde kalan günü de aslında yukarıdaki paragrafı bir kere daha tekrar ederek yapıyoruz yani toplam gün sayısının 365’e bölümünden kalan ifadenin 30’a bölümünden kalan ifade kaç gün geçtiğini verir. Biraz karışık gibi değil mi? Anlamadıysanız, lütfen kağıt kalem alarak bir kimsenin kaç gün hayatta olduğunu biliyorsanız, o kişinin kaç yıl kaç ay kaç gündür hayatta olduğunu elle hesaplayın. Son olarak bunların hepsini *print()* ile konsola yazdırıyoruz. Tabi ki önce *f* kullanarak metin içindeki süslü parantezlerin yerine yazdırıyoruz bu hesaplanan rakamları. Son not, bu yaklaşık bir hesaptır. Çünkü her dört yılda bir bir yıl 366 gündür ve ayların günü hep 30 değildir. O sebeple gerçekle az bir miktar farklı hesaplıyorsunuz. Belki ileri ki örnekleri çözdükten sonra buraya geri dönüp daha doğru bir hesaplama yapan kod geliştirebilirsiniz.

**Sıra sizde:** Siz de hem kendi doğum tarihinizi hem de arkadaşınızın doğum tarihini soran ve sonra arkadaşınız ile sizin aranızda kaç yıl kaç ay kaç gün olduğunu hesaplayan bir program yazın. Muhtaç olduğunuz bilgi yukarıdaki kodda mevcuttur.
