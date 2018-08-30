import Vue from 'vue'
// import VueAnalytics from 'vue-analytics'
import createApp from './create_app.js'

const {app, store, router} = createApp()

if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__)
}

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // window.addEventListener('load', function() {
    //     navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
    //         console.log('ServiceWorker registration successful with scope: ', registration.scope)
    //     }, function(err) {
    //         console.log('ServiceWorker registration failed: ', err)
    //     })
    // })
}

router.onReady(() => {
    console.log(window.location)
    router.push('/')

    app.$mount('#app')
})
