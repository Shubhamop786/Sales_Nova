import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    // Increase warning limit slightly — bundle size is expected with Tailwind
    chunkSizeWarningLimit: 600,

    // Enable CSS code splitting
    cssCodeSplit: true,

    // Rollup options for better chunking
    rollupOptions: {
      output: {
        // Split vendor chunks for better caching
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-emailjs': ['emailjs-com'],
        },
        // Deterministic file names for caching
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },

    // Minification
    minify: 'esbuild',

    // Source maps disabled in production (smaller build)
    sourcemap: false,

    // Target modern browsers (better tree-shaking, smaller output)
    target: 'es2020',
  },

  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'emailjs-com'],
  },
})
