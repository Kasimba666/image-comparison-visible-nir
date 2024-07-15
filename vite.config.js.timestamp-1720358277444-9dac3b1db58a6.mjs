// vite.config.js
import { defineConfig } from "file:///D:/_projects/image-comparison-visible-nir/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/_projects/image-comparison-visible-nir/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var vite_config_default = defineConfig({
  base: "/image-comparison-visible-nir/",
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag === "img-comparison-slider"
      }
    }
  })],
  resolve: {
    alias: {
      "@": "/src"
      // '@': fileURLToPath(new URL('/src', import.meta.url))
      // '@': fileURLToPath(new URL('/image-comparison-visible-nir', import.meta.url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxfcHJvamVjdHNcXFxcaW1hZ2UtY29tcGFyaXNvbi12aXNpYmxlLW5pclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcX3Byb2plY3RzXFxcXGltYWdlLWNvbXBhcmlzb24tdmlzaWJsZS1uaXJcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L19wcm9qZWN0cy9pbWFnZS1jb21wYXJpc29uLXZpc2libGUtbmlyL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XG5pbXBvcnQge2ZpbGVVUkxUb1BhdGgsIFVSTH0gZnJvbSAnbm9kZTp1cmwnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBiYXNlOiAnL2ltYWdlLWNvbXBhcmlzb24tdmlzaWJsZS1uaXIvJyxcbiAgcGx1Z2luczogW3Z1ZSh7XG4gICAgdGVtcGxhdGU6IHtcbiAgICAgIGNvbXBpbGVyT3B0aW9uczoge1xuICAgICAgICBpc0N1c3RvbUVsZW1lbnQ6IHRhZyA9PiB0YWcgPT09ICdpbWctY29tcGFyaXNvbi1zbGlkZXInXG4gICAgICB9XG4gICAgfVxuICB9KV0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiAnL3NyYydcbiAgICAgIC8vICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcvc3JjJywgaW1wb3J0Lm1ldGEudXJsKSlcbiAgICAgIC8vICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcvaW1hZ2UtY29tcGFyaXNvbi12aXNpYmxlLW5pcicsIGltcG9ydC5tZXRhLnVybCkpXG4gICAgfVxuICB9XG5cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtVCxTQUFTLG9CQUFvQjtBQUNoVixPQUFPLFNBQVM7QUFHaEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBLEVBQ04sU0FBUyxDQUFDLElBQUk7QUFBQSxJQUNaLFVBQVU7QUFBQSxNQUNSLGlCQUFpQjtBQUFBLFFBQ2YsaUJBQWlCLFNBQU8sUUFBUTtBQUFBLE1BQ2xDO0FBQUEsSUFDRjtBQUFBLEVBQ0YsQ0FBQyxDQUFDO0FBQUEsRUFDRixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLO0FBQUE7QUFBQTtBQUFBLElBR1A7QUFBQSxFQUNGO0FBRUYsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
