import { defineConfig, type PluginOption, type UserConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  const plugins: PluginOption[] = [react()];

  if (mode === "development") {
    const { componentTagger } = await import("lovable-tagger");
    const maybePlugins = (componentTagger as unknown as () => PluginOption | PluginOption[])();
    const taggerPlugins = Array.isArray(maybePlugins) ? maybePlugins : [maybePlugins];
    plugins.push(...taggerPlugins);
  }

  const config: UserConfig = {
    server: {
      host: "::",
      port: 8080,
    },
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      // Optimize for production
      minify: 'terser',
      target: 'es2015',
      cssCodeSplit: true,
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            router: ['react-router-dom'],
            ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-tabs']
          }
        }
      },
      // Compress assets
      assetsInlineLimit: 4096,
      chunkSizeWarningLimit: 500
    },
    // Enable gzip compression
    preview: {
      port: 4173,
      host: true
    }
  };
  return config;
});
