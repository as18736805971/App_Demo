let url = 'https://www.baidu.com/'

/**
 * @param action   接口名称
 * @param data     传递数据
 * @param method   请求方式
 */
const ajax = (action, data, method) => {
	let opt = opt || {};
	opt.data = data || null;
	opt.method = method || 'GET';
	opt.header = opt.header || {
		// #ifndef H5
		"Content-Type": "application/json"
		// #endif
	};
	if (opt.method == 'POST') {
		opt.header = {
			"Content-Type": "application/x-www-form-urlencoded"
		}
	}
	uni.request({
		url: url + action,
		data: opt.data,
		method: opt.method,
		header: opt.header,
		// #ifndef MP-BAIDU
		dataType: 'text',
		// #endif
		success: function(res) {
			if (res.code === 200) {
				// 请求成功
			} else {
				console.log("接口访问失败: ", res);
				uni.hideLoading()
				uni.showModal({
					content: data.msg,
					showCancel: false
				})
			}
		},
		fail: function(res) {
			if (res.errMsg == "request:fail") {
				uni.showModal({
					title: '接口访问失败',
					showCancel: false,
				})
				return
			}
		}
	})
}

const get = function(action, data) {
	ajax(action, data, 'GET');
}

const post = function(action, data) {
	ajax(action, data, 'POST');
}

module.exports = {
	get: get,
	post: post,
}
