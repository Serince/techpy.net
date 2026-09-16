---
title: "Bir ben var bende, Benden içeri.."
description: "İç içe geçmiş fonksiyonlar hesaplama olarak maliyetli olsa da bazen hayat kurtarıcı olabiliyor. Bir fonksiyon ile başka bir fonksiyonu çağırıp onunla işlem yapabildiğiniz gibi, fonksiyonla fonksiyonun"
sidebar:
  order: 5
yazar: "Serdar Turgut İnce"
yazilim: "Python"
tarih: "2021-03-18"
kapak: "/kapaklar/bir-ben-var-bende-benden-iceri.jpg"
durum: tam
---
İç içe geçmiş fonksiyonlar hesaplama olarak maliyetli olsa da bazen hayat kurtarıcı olabiliyor. Bir fonksiyon ile başka bir fonksiyonu çağırıp onunla işlem yapabildiğiniz gibi, fonksiyonla fonksiyonun kendisini çağırabiliyorsunuz (öz yinelemeli). Yani döngü ifadelerini yazmadan döngü yapıyorsunuz. Hadi şimdi biraz matematik yazalım, sonra kodlayalım matematiği. Yine faktöriyel kodlayalım ama bu sefer biraz değişik bir şekilde. Aslında burada bir işlemi yapabilmenin bir sürü yolu olabileceğini de göstermiş oluyoruz böylece.

<div class="wp-block-katex-display-block katex-eq" katex-display="true">

    n!=n \cdot (n-1)! \\
    0!=1

</div>

Yukarıdaki matematiksel ifadelere bakarsanız aslında bu faktöriyelin tanımı. Başına n doğal sayılarda ifadesini de eklesem tam olacak. Her sayının faktöriyeli sayı ile onun bir eksiğinin faktöriyelinin çarpımıdır ve 0’ın faktöriyeli 1’dir. Hadi kodlayalım!

```python
def faktoriyel(n):
    if n == 0:
        return 1
    else:
        return n*faktoriyel(n-1)
```

Şimdi yukarıdaki kodu satır satır inceleyelim. Fonksiyonun girdisi (input) faktöriyeli alınacak değer. Bu değer eğer 0 ise işlemin cevabı 1 olduğu için (bknz yukarıdaki denklem), if ifadesi ile bunu tanımladık. Else bloğunun içine de denklemin ilk satırındaki ifadeyi yazdık. Yani bir sayının faktöriyeli, sayının kendisi ile bir eksiğinin faktöriyelinin çarpımına eşittir.

Aslında böylece fonksiyon kendi kendini çağırarak bir döngü oluşturuyor. Örneğin 2! için kodun son satırındaki gibi 2\*faktoriyel(1) hesaplanıyor. Tabi bunun için de faktoriyel 1’e ihtiyaç var. O da 1\*faktoriyel(0)’dır. Bunun için ise 0! ihtiyaç var. Bu ise if bloğunda göreceğiniz üzere 1’dir. Böylece bu bulunduktan sonra tüm fonksiyonlar hesaplanarak faktöriyelimizin değeri hesaplanabilir. Dediğim gibi bu işlem hesaplama maliyeti olarak biraz fazla.

**SSıra sizde:** Hadi diğer yazdığımız fatöriyel hesaplamalarıyla bu yöntemi kıyaslayalım. Kıyaslamayı spyder console kullanarak yapabilirsiniz. %timeit faktoriyel(10) yazarsanız bunun kaç mikro hatta nano saniyede hesaplandığını görebilirsiniz. Lütfen diğer yazdıklarımızla kıyaslamalarını da siz yapın.
