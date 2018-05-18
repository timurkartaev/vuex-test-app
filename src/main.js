import Vue from 'vue'
import App from './App.vue'

import {store} from './store/store';


new Vue({
  el: '#app',
  store: store,  // could be just store
  render: h => h(App)
})
