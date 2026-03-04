import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Включаем статический экспорт для GitHub Pages
  output: 'export',
  
  // Базовый путь для GitHub Pages (имя репозитория)
  basePath: '/up2unow',
  
  // Отключаем оптимизацию изображений (не работает со статическим экспортом)
  images: {
    unoptimized: true,
  },
  
  // Игнорируем ошибки TypeScript при сборке
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Строгий режим React
  reactStrictMode: false,
  
  // Трейлинг слеш для корректной работы на GitHub Pages
  trailingSlash: true,
};

export default nextConfig;
