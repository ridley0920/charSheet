import Vue from 'vue'
import App from './components/App.vue'
import Home from './components/Home.vue'
import SecretQuote from './components/SecretQuote.vue'
import Signup from './components/Signup.vue'
import Login from './components/Login.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(VueRouter)

export var router = new VueRouter()

router.map({
	'/home':{
		component: Home
	}
	/*
	'sheet':({
		component: Sheet
	}),
	'addThing':({
		component: add
	})
	*/
})

router.redirect({
	'*': '/home'
})

router.start(App, #app)

router.set({
  el: 'body',
  data: 
  {
  	message: "Hello Vue"
  }
})