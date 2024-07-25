import local from 'next/font/local';

export const WixMadeForText = local({
  src: [
    {
      path: '../../public/fonts/English-Font/WixMadeforText-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/English-Font/WixMadeforText-SemiBold.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/English-Font/WixMadeforText-SemiBoldItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/English-Font/WixMadeforText-Bold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/English-Font/WixMadeforText-BoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../public/fonts/English-Font/WixMadeforText-ExtraBold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/English-Font/WixMadeforText-ExtraBoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-wixMadeForText',
});

export const arabicFont = local({
  src: [
    {
      path: '../../public/fonts/noto-sans-arabic-font/NotoSansArabic-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/noto-sans-arabic-font/NotoSansArabic-SemiBold.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/noto-sans-arabic-font/NotoSansArabic-SemiBold.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/noto-sans-arabic-font/NotoSansArabic-Bold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/noto-sans-arabic-font/NotoSansArabic-Bold.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../public/fonts/noto-sans-arabic-font/NotoSansArabic-ExtraBold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/noto-sans-arabic-font/NotoSansArabic-ExtraBold.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-arabicFont',
});
