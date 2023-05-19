// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/supabase'
    ],
    router: {
        extendRoutes(routes, resolve) {
            routes.push({
              path: '/users/:id/update',
              component: resolve('~/pages/users/_id/update.vue')
        });
        }
      }
})