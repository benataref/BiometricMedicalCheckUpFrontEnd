import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['pdfjs-dist'],
  },
  resolve: {
    alias: {
      'pdfjs-dist/build/pdf.worker.min.js': 'pdfjs-dist/es5/build/pdf.worker.min.js',
    },
  },
 /*  server:{
    proxy:{  
      '/api':{
        target:'http://192.168.1.9:8000',
        changeOrigin:true
      }
    }
  } 
 
})*/
 'react-pdf': 'react-pdf/dist/esm/entry.webpack.js',
server: {
  host: '0.0.0.0',
  port: 3000
}
})