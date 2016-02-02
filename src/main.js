import Vue from 'vue'
import Router from 'vue-router'
import vueAsync from 'vue-async-data'
import vueResource from 'vue-resource'
import App from './App'
import admin from './components/admin'
import login from './components/login'
import Hello from './components/Hello'

Vue.use(Router);
Vue.use(vueAsync);
Vue.use(vueResource);

var router = new Router();

router.map({
	'/admin': {
		component: admin
	},
	'/login': {
		component: login
	},
	'/hello': {
		component: Hello
	}
});

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.start(App, 'app');

// /* eslint-disable no-new */
// new Vue({
// 	el: 'body',
// 	components: { App }
// })
