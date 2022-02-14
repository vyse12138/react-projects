import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default {
  plugins: [react()],
  builld: {
    assetsInlineLimit: 0
  }
}
