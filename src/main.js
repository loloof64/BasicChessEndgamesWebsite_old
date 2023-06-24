/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

import messages from './i18n';

const getNavigatorLanguage = () => (navigator.languages && navigator.languages.length) ?
    navigator.languages[0]
    : navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en';


// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

import { createI18n } from 'vue-i18n'

// Plugins
import { registerPlugins } from '@/plugins'

const i18n = createI18n({
    locale: getNavigatorLanguage(),
    fallbackLocale: 'en',
    messages,
})

const app = createApp(App)

app.use(i18n);
registerPlugins(app)

app.mount('#app')
