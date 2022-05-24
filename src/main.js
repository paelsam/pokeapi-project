import { createApp } from 'vue'
import App from './App.vue'


// Icons modules
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas);


// Import App.vue and and FontAwesome
createApp(App)
    .component("fa", FontAwesomeIcon)
    .mount('#app')