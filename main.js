import App from './App'
import Req from './utils/request.js'
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
// getApp().user = {} // 直接赋值 let user = getApp().user // 直接使用  使用时要先定义
getApp()['Req'] = Req
getApp()['CommonTool'] = CommonTool
getApp()['userInfo'] = {}

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
