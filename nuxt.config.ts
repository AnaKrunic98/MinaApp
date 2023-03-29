// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        'nuxt-vuefire',
    ],
    vuefire: {
        config: {
            apiKey: 'AIzaSyDGypIG7ZRI8SX0QvwRWzWHpciwId8QkQ8',
            authDomain: 'minaapp-84603.firebaseapp.com',
            projectId: 'minaapp-84603',
            storageBucket: 'minaapp-84603.appspot.com',
            messagingSenderId: '346951131767',
            appId: '1:346951131767:web:fe3906ad6588cbaba89c72',
        },
    },
})