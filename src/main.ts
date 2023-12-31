import Vue from 'vue'
import App from './App.vue'
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
library.add(faChevronDown, faChevronUp);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
