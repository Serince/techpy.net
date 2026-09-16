import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://techpy.net',
  integrations: [
    starlight({
      title: 'techpy',
      tagline: 'Teknik Python — Fikir uçar, kod kalır!',
      description: 'Mühendislik problemlerini Python ile çözen Türkçe eğitim sitesi.',
      logo: { src: './src/assets/logo.png', alt: 'techpy — Teknik Python' },
      favicon: '/favicon.png',
      defaultLocale: 'root',
      locales: { root: { label: 'Türkçe', lang: 'tr' } },
      social: [
        { icon: 'telegram', label: 'Telegram', href: 'https://t.me/techpy_net' },
        { icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/results?search_query=techpy' },
        { icon: 'github', label: 'GitHub', href: 'https://github.com/' },
      ],
      editLink: { baseUrl: 'https://github.com/Serince/techpy.net/edit/main/' },
      customCss: ['./src/styles/custom.css'],
      components: { MarkdownContent: './src/components/DersIcerik.astro' },
      sidebar: [
        { label: 'Başla', items: [{ slug: 'buradan-basla', label: 'Buradan Başla' }, { slug: 'katkida-bulun', label: 'Katkıda Bulun' }] },
        { label: 'Python Temelleri', autogenerate: { directory: 'temeller' }, collapsed: true },
        { label: 'Sayısal Yöntem', autogenerate: { directory: 'sayisal-yontem' }, collapsed: true },
        { label: 'İstatistik ve Veri Analizi', autogenerate: { directory: 'istatistik' }, collapsed: true },
        { label: 'Sembolik Programlama', autogenerate: { directory: 'sembolik-programlama' }, collapsed: true },
        { label: 'Görüntü İşleme', autogenerate: { directory: 'goruntu-isleme' }, collapsed: true },
        { label: 'Makine Öğrenmesi', autogenerate: { directory: 'makine-ogrenmesi' }, collapsed: true },
        { label: 'Veri Hazırlama', autogenerate: { directory: 'veri-hazirlama' }, collapsed: true },
        { label: 'Hakkımızda', link: '/hakkimizda/' },
      ],
    }),
  ],
});
