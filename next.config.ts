import type { NextConfig } from "next";

// basePath применяется только при статическом экспорте для GitHub Pages
// В режиме разработки сайт доступен на корневом пути /

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  // Включаем статический экспорт только при сборке для GitHub Pages
  ...(isGitHubPages && { output: 'export' as const }),
  
  // Базовый путь для GitHub Pages (имя репозитория)
  // Применяется только при GITHUB_PAGES=true
  ...(isGitHubPages && { basePath: '/up2unow' }),
  
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
  ...(isGitHubPages && { trailingSlash: true }),
};

export default nextConfig;
