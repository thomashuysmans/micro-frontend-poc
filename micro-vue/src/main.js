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

Vue.customElement('widget-vue', {
  props: [
    'prop1',
    'prop2',
    'prop3'
  ],
  data: {
    message: 'Hello Vue!'
  },
  template: '<p>{{ message }}, {{ prop1  }}, {{prop2}}, {{prop3}}</p>'
});


new Vue({
  render: h => h(ExampleComponent),
}).$mount('#app')
