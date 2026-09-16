---
title: "Kıyaslama"
description: "Aslında programlama mantığın bilgisayara öğretilmesidir. Mantık, bildiğiniz doğru ve yanlışın kıyaslanması işlemi. Hatırlarsınız doğru ve doğru, doğrudur doğru ve yanlış ise yanlıştır gibi. İşte bu do"
sidebar:
  order: 1
yazar: "Serdar Turgut İnce"
yazilim: "Python"
tarih: "2021-03-01"
kapak: "/kapaklar/kiyaslama.jpg"
durum: tam
---
Aslında programlama mantığın bilgisayara öğretilmesidir. Mantık, bildiğiniz doğru ve yanlışın kıyaslanması işlemi. Hatırlarsınız doğru ve doğru, doğrudur doğru ve yanlış ise yanlıştır gibi. İşte bu doğru ve yanlış programlama dillerinde True ve False kıyaslama için kullanacağımız veri tipidir. Her zamanki gibi konuyu anlatmadan sadece uygulama yapacağız sonrasında detaylarını inceleyeceğiz. Basitçe kullanıcı adını kontrol eden bir ufak kod yazalım.

```python
ad = input("Adınız nedir?")
if ad == "Turgut":
    print("Turgut bey hoş geldiniz!")
else:
    print("İsminiz sistemimizde tanımlı değil. Lütfen tekrar deneyiniz")
```

ilk satır kullanıcıya bir soru sorup onun cevabını ad değişkenine atamamızı sağlıyor. Asıl işlem ikinci satırda. if yani Eğer, bir şart yazmamızı sağlayan ifade. Şartımız ne peki yanında yazan ve : işaretine kadar olan kısım bizim şartımız. Eğer bu şart doğruysa bir alt satırında girintili olarak yazılan kod çalışacak. Burada doğruluk önemli == operatörü kıyaslama yapıyor. ad == “Turgut” ifadesinde bir önceki satırda kullanıcın girdiği girdi ile “Turgut” kıyaslanıyor ve bunlar eşit ise Doğru yani True çıktısı veriyor. Diyelim ki Doğru konsolda “Turgut bey hoş geldiniz!” ibaresi yer alacak. Yanlışsa peki ne olacak, onun altında yer alan girintili satırları program okumayarak atlayacak. Girintisi olmayan ilk satırla devam edecek.

Bu ilk satır else yani Türkçesi yoksa. Eğer doğru değilse if’in yanındaki program, else ifadesinin altındaki girintili ifadeyi okuyacak ve “İsminiz sistemimizde tanımlı değil. Lütfen tekrar deneyiniz” çıktısını verecek.

Yukarıdaki == haricinde \>,\<, \<=, \>= gibi sezgisel olarak da anlayabileceğiniz kıyaslama operatörleri var, belki değişik gelebilecek != (eşit değildir) ibaresi olabilir, o da hemen anlaşılır zaten. Bununla ilgili çok fazla uygulama yapacağımız için şimdilik burada kısaca kesiyoruz. Lütfen siz yukarıdaki kodu kopyalayıp spyder ekranına yapıştırın ve kurcalayın biraz. Kendinizce değişik kurallar koyun. Hatta *and*, *or* gibi şartlarınızın arasına ibareler ekleyip çoklu şartlar tanımlayın.

**Sıra sizde:** Örneğin hem adını hem soy adını sorun, adı bir şey olup soyadı başka bir şey gibi iki farklı girdiyi kıyaslayın.

Serdar Turgut İnce
