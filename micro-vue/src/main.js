import Vue from 'vue'
import vueCustomElement from 'vue-custom-element';
import ExampleComponent from './components/ExampleComponent.vue';

// Vue.config.productionTip = false

// Vue.config.ignoredElements = [
//   'example-component'
// ];

Vue.use(vueCustomElement);

Vue.customElement('example-component', ExampleComponent, {
  // Additional options
});


// new Vue({
//   render: h => h(App),
// }).$mount('#app')
