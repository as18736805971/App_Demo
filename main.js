import App from './App'
import Tool from './utils/Tool.js'
import CommonTool from './utils/common.js'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()

// getApp 必须在 const app 全局变量app 定义后再进行操作
getApp()['CommonTool'] = CommonTool

// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
