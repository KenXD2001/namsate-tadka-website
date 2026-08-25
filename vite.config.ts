import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  
  const host = env.VITE_HOST
  const port = parseInt(env.VITE_PORT || '3333', 10)
  
  if (!host) {
    throw new Error('VITE_HOST environment variable is required')
  }
  
  if (!env.VITE_PORT) {
    throw new Error('VITE_PORT environment variable is required')
  }

  return {
    plugins: [react()],
    server: {
      host,
      port,
      strictPort: true,
    },
    preview: {
      host,
      port,
    },
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, './src'),
      },
    },
    build: {
      sourcemap: env.VITE_BUILD_SOURCEMAP === 'true',
    },
  }
})
