import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://techpy.net',
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
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
        { icon: 'github', label: 'GitHub', href: 'https://github.com/' },
      ],
      editLink: { baseUrl: 'https://github.com/Serince/techpy.net/edit/main/' },
      customCss: ['./src/styles/custom.css'],
      components: { MarkdownContent: './src/components/DersIcerik.astro', Head: './src/components/SidebarScroll.astro' },
      sidebar: [
        { label: 'Başla', items: [{ slug: 'buradan-basla', label: 'Buradan Başla' }, { slug: 'katkida-bulun', label: 'Katkıda Bulun' }] },
        { label: 'Python Temelleri', autogenerate: { directory: 'temeller' }, collapsed: true },
        { label: 'Sayısal Yöntem', autogenerate: { directory: 'sayisal-yontem' }, collapsed: true },
        { label: 'İstatistik ve Veri Analizi', autogenerate: { directory: 'istatistik' } },
        { label: 'Sembolik Programlama', autogenerate: { directory: 'sembolik-programlama' }, collapsed: true },
        { label: 'Görüntü İşleme', autogenerate: { directory: 'goruntu-isleme' }, collapsed: true },

        { label: 'Hakkımızda', link: '/hakkimizda/' },
      ],
    }),
  ],
});
