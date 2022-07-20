import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
/** Importar los iconos a utilizar */
import { faSun, faMoon} from '@fortawesome/free-regular-svg-icons';
/* import { faMoon } from '@fortawesome/free-regular-svg-icons'; */
import { faBars, faXmark, faHome, faAddressCard, faSuitcase, faBarsProgress, faEnvelope, faMicrochip, faGraduationCap, faEthernet, faComputer, faDatabase} from '@fortawesome/free-solid-svg-icons';
import { faBootstrap, faCss3, faCss3Alt, faHtml5, faJs, faLaravel, faLinkedin, faPhp, faVuejs, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


import axios from "axios";
import VueAxios from 'vue-axios'
import router from "./routes/routes"
import 'tw-elements'
import './index.css'

library.add(faBars, faSun, faMoon, faXmark, faHome, faLinkedin, faAddressCard, 
    faBarsProgress, faSuitcase, faWhatsapp, faEnvelope, faMicrochip, faGraduationCap, 
    faEthernet, faComputer, faHtml5, faCss3Alt, faJs, faPhp, faDatabase, faLaravel, faVuejs, faBootstrap)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(VueAxios,axios)
app.mount('#app')
