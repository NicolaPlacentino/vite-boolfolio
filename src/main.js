import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'

library.add(faEye)

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app');
