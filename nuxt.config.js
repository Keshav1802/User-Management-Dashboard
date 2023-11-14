// nuxt.config.js
export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
      title: 'User Management Dashboard',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'User Management Dashboard' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  
    // Global CSS: https://go.nuxtjs.dev/config-css
    // css: ['@/assets/styles.css'],
  
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],
  
    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,
  
    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: ['@nuxtjs/tailwindcss'],
  
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [],
  
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
  
    // Customize the progress-bar color
    loading: { color: '#41b883' },
  
    // Router configuration
    router: {
      // Add your custom routes or configuration here
    },
  };
  