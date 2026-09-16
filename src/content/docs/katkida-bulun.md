---
title: Katkıda Bulun
description: techpy'ye ders ekleme rehberi.
---

Yeni ders eklemenin iki yolu var:

- **Kolay yol:** sitedeki `/admin.html` panelini aç, formu doldur, Kaydet'e bas (GitHub token gerekir, sadece kendi tarayıcında saklanır).
- **Elle yol:** `src/content/docs/<kurs>/<slug>.md` dosyası oluştur, frontmatter alanlarını doldur (`title`, `description`, `youtube`, `yazar`, `yazarKanal`, `yazilim`, `tarih`), commit + push yap. Cloudflare Pages otomatik yayınlar.
