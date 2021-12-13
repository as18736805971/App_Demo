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

/**
 * getApp 必须在 const app 全局变量app 定义后再进行操作
 * getApp().user = {} 直接赋值 let user = getApp().user 直接使用  使用时要先定义
 */
getApp()['Req'] = Req
getApp()['CommonTool'] = CommonTool
getApp()['userInfo'] = {}

/**
 * 检测用户信息是否已存缓存
 */
let userInfo = uni.getStorageSync('userInfo')
if (userInfo && userInfo.id) {
	getApp()['userInfo'] = userInfo
} else {
	getApp()['userInfo'] = {
		auth: false
	}
	uni.switchTab({
		url: './pages/mine/index'
	});
}

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
