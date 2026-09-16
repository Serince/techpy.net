# techpy — Teknik Python (Astro 5 + Starlight)

Çöken WordPress sitesinin yerine sıfırdan kurulan statik eğitim sitesi.
Tema renkleri techpy logosundan: lacivert `#131A2B`, teknoloji mavisi `#2F7CBF`, logo sarısı `#FFB034`.

## İçerik

- 47 ders (`src/content/docs/<kurs>/<slug>.md`): 25 tam metin + 22 Telegram özeti
- 7 kurs: temeller, sayisal-yontem, istatistik, sembolik-programlama, goruntu-isleme, makine-ogrenmesi, veri-hazirlama
- Frontmatter: title, description, sidebar.order, youtube, yazar, yazarKanal, yazilim, tarih, kapak, durum
- 58 satır `public/_redirects` (eski tarihli URL → yeni adres, 301)
- `public/admin.html`: siteden ders ekleme paneli (GitHub Contents API, token localStorage'da)
- `.pages.yml`: Pages CMS yapılandırması

## Kurulum

```bash
cd techpy-astro
npm install
npx astro build   # hatasız bitmeli -> dist/
```

## Yayınlama (ücretsiz)

1. **GitHub'a gönder (GitHub Desktop):** klasörü aç → repo oluştur (`KULLANICI/techpy.net`) → Commit → Push. `node_modules/` ve `dist/` gönderilmez (`.gitignore` içinde).
2. **Cloudflare Pages:** Workers & Pages → Create → Pages → Connect to Git → repo seç → preset **Astro** (build: `npm run build`, output: `dist`) → env `NODE_VERSION=20` → Deploy.
3. **Domain:** Pages projesinde Custom domains → `techpy.net` ekle → alan adı panelinde nameserver'ları Cloudflare'e çevir. `public/_redirects` eski linkleri otomatik taşır.

## Kurtarma notları

- Kaynaklar: `techpy_TAM_kurtarma.zip` (Wayback aynası), Telegram `t.me/techpy_net` (49 mesaj → 47 URL envanteri).
- Sunucu IP'si archive.org'dan 429 yediği için CDX yoklaması kullanıcı tarayıcısından yapıldı; 2025 yazıları origin-403'lü, Telegram özeti olarak eklendi.
- Fotoğraflar: şeffaf PNG → beyaza flat + JPEG (ekip 400px, kapak 800px).
