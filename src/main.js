import Vue from 'vue'
import Parent from './Parent.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(Parent),
}).$mount('#app')
