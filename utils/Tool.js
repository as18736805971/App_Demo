/*
 * @desc base64转缓存文件
 * */
export function base64src(base64data, filename = 'tmp_base64src') {
	let result = null
	/* #ifdef MP-WEIXIN */
	result = new Promise(resolve => {
		const fsm = wx.getFileSystemManager();
		const FILE_BASE_NAME = filename; //自定义文件名
		const [, format, bodyData] = /data:image\/(\w+);base64,(.*)/.exec(base64data) || [];
		if (!format) {
			return (new Error('ERROR_BASE64SRC_PARSE'));
		}
		const filePath = `${wx.env.USER_DATA_PATH}/${FILE_BASE_NAME}.${format}`;
		const buffer = wx.base64ToArrayBuffer(bodyData);
		fsm.writeFile({
			filePath,
			data: buffer,
			encoding: 'binary',
			success() {
				resolve(filePath);
			},
			fail() {
				return (new Error('ERROR_BASE64SRC_WRITE'));
			},
		});
	})

	/* #endif */
	/* #ifdef H5 */
	result = new Promise((resolve) => {
		var imgFile = this.base64ToBlob(base64data);
		resolve(URL.createObjectURL(imgFile))
	})
	/* #endif */

	return result
}

/*
 * @desc 判断当前是否处于微信环境
 * */
export function isWechat() {
	let ua = window && window.navigator.userAgent.toLowerCase();
	return ua && ua.match(/micromessenger/i) == 'micromessenger'
}

/*
 * @desc H5解析当前url的参数列表
 * */
export function queryString(url) {
	if (!url) {
		return {}
	}
	let query = url.replace(/^\S+\?/, '')
	let queryArray = query.split('&')
	let result = {}
	queryArray.forEach(item => {
		let params = item.split('=')
		if (params[0] !== undefined && params[1] !== undefined) {
			result[params[0]] = params[1]
		}
	})
	return result;
}

/*
 * @desc 检验提交订单
 * */
export function validateParams(data, dataInterface, requestFunction) {
	if (!dataInterface && typeof requestFunction === 'function') {
		// 需要验证的内容不存在但有请求函数，则直接提交请求
		return requestFunction()
	}
	let params = {}
	for (let key in dataInterface) {
		if (dataInterface.hasOwnProperty(key)) {
			if (((data && !data[key]) || !data) && dataInterface[key].default !== undefined) {
				// 如果数据不存在并且interface中有默认配置，则使key为interface中的默认值
				params[key] = dataInterface[key].default
			} else if (dataInterface[key].rule && dataInterface[key].rule.length) {
				// 如果有验证规则，则遍历验证规则，遇到错误时提示错误信息
				for (let i = 0; i < dataInterface[key].rule.length; i++) {
					if (typeof dataInterface[key].rule[i].validator === 'function') {
						// 有验证函数则执行验证函数
						let result = dataInterface[key].rule[i].validator.call(dataInterface)
						if (result) {
							return createErrorToast(result)
						}
					} else if (!dataInterface[key].rule[i].regexp.test(data[key])) {
						// 验证传入的数据是否符合规则，如果不符合规则，则弹出错误提示，并终止接口请求
						return createErrorToast(dataInterface[key].rule[i].message)
					}
				}
				// 全部验证通过时将该属性写入提交数据中
				params[key] = data[key]
			} else {
				// 如果没有验证规则，则直接将该属性写入提交数据中
				params[key] = data[key]
			}
		}
	}
	if (typeof requestFunction === 'function') {
		// 发起接口请求
		return requestFunction(params)
	}

	/*
	 * @desc 创建一个错误弹出toast，并返回一个Promise对象
	 * @params message: String 需要提示的消息字符串
	 * @return Promise.reject
	 * */
	function createErrorToast(message) {
		uni.showToast({
			title: message,
			icon: 'none'
		})
		return new Promise((resolve, reject) => {
			reject(message)
		})
	}
}

/*
 * @desc H5端base64转file对象
 * */
export function dataURLtoFile(dataurl, filename = 'file') {
	let arr = dataurl.split(',')
	let mime = arr[0].match(/:(.*?);/)[1]
	let suffix = mime.split('/')[1]
	let bstr = atob(arr[1])
	let n = bstr.length
	let u8arr = new Uint8Array(n)
	while (n--) {
		u8arr[n] = bstr.charCodeAt(n)
	}
	return new File([u8arr], `${filename}.${suffix}`, {
		type: mime
	})
}
/*
 * @desc base64 => blob
 * */
export function base64ToBlob(code) {
	let parts = code.split(';base64,');
	let contentType = parts[0].split(':')[1];
	let raw = atob(parts[1]);
	let rawLength = raw.length;

	let uInt8Array = new Uint8Array(rawLength);

	for (let i = 0; i < rawLength; ++i) {
		uInt8Array[i] = raw.charCodeAt(i);
	}
	return new Blob([uInt8Array], {
		type: contentType
	});
}
/*
 * @desc scene => Object
 * */
export function decodeScene(scene) {
	let hadnlerScene = decodeURIComponent(scene)
	let paramsArray = hadnlerScene.split('&')
	let paramsObj = {}
	paramsArray.forEach(item => {
		let cacheArray = item.split('=')
		paramsObj[cacheArray[0]] = cacheArray[1]
	})
	return paramsObj
}

export function handlerUserId() {
	let userId = -1
	/* #ifndef H5 */
	userId = 0
	/* #endif */
	if (userId === 0) {
		return userId
	}
	let href = location.href;
	let query = queryString(href);
	userId = query.userid
	let userIdStorage = uni.getStorageSync('userid')
	let h5UserCode = uni.getStorageSync('user_openid')
	if (userId) {
		uni.setStorageSync('userid', userId)
	} else if (userIdStorage && !userId) {
		userId = userIdStorage
	} else if (h5UserCode) {
		userId = 0
	}
	return userId
}

export function handlerOpenId() {
	let openid = -1
	/* #ifndef H5 */
	openid = 0
	/* #endif */
	if (openid === 0) {
		return openid
	}
	let href = location.href;
	let query = queryString(href);
	openid = query.openid
	return openid
}

export function isWxWork() {
	let flag = 0
	/* #ifndef H5 */
	flag = 1
	/* #endif */
	if (flag === 1) {
		return false
	}
	let href = location.href
	let query = queryString(href)
	let wxwork = query.wxwork
	return /wxwork/i.test(navigator.userAgent) && wxwork
}

export function getPlatform() {
	let userId = handlerUserId()
	let platform = 0
	/* #ifdef MP-WEIXIN */
	platform = 0
	/* #endif */
	/* #ifdef MP-BAIDU */
	platform = 1
	/* #endif */
	/* #ifdef MP-ALIPAY */
	platform = 2
	/* #endif */
	/* #ifdef MP-TOUTIAO */
	platform = 3
	/* #endif */
	/* #ifdef H5 */
	platform = 5
	if (isWechat()) {
		platform = 4
	}
	if (isWxWork()) {
		// 企业微信环境
		platform = 7
	}
	/* #endif */
	/* #ifdef MP-QQ */
	platform = 6
	/* #endif */
	return platform
}

export function getReleaseEnv() {
	return new Promise(resolve => {
		/* #ifdef MP-ALIPAY */
		my && my.getRunScene({
			success(result) {
				resolve(Number(result.envVersion.indexOf('release') > -1))
			}
		})
		/* #endif */
		/* #ifdef MP-WEIXIN */
		resolve(Number(__wxConfig && __wxConfig.envVersion.indexOf("release") > -1))
		/* #endif */
		/* #ifdef MP-TOUTIAO */
		resolve(Number(tt && tt.env.VERSION.indexOf('production') > -1))
		/* #endif */
		/* #ifdef MP-BAIDU */
		resolve(Number(swan && swan.getEnvInfoSync().env.indexOf('production') > -1))
		/* #endif */
		/* #ifdef MP-QQ */
		resolve(Number(qq && qq.getEnvVersion().indexOf('release') > -1))
		/* #endif */
		/* #ifdef H5 */
		resolve(1)
		/* #endif */
	})
}

export function getScreenWidth() {
	let width = 375
	/* #ifdef MP-TOUTIAO */
	if (process.env.NODE_ENV !== 'development') {
		const res = uni.getSystemInfoSync();
		width = res.windowWidth
	} else {
		width = 375
	}
	/* #endif */
	/* #ifndef MP-TOUTIAO */
	const res = uni.getSystemInfoSync();
	width = res.windowWidth
	/* #endif */
	return width
}

export function formatDate(date) {
	let y = date.getFullYear()
	let m = date.getMonth() + 1
	m = m < 10 ? ('0' + m) : m
	let d = date.getDate()
	d = d < 10 ? ('0' + d) : d
	let h = date.getHours()
	h = h < 10 ? ('0' + h) : h
	let minute = date.getMinutes()
	minute = minute < 10 ? ('0' + minute) : minute
	let second = date.getSeconds()
	second = second < 10 ? ('0' + second) : second
	return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second
}

export function toRgbaColor(color, a) {
	let sColor = color.toLowerCase();
	//十六进制颜色值的正则表达式
	let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
	let rgbReg = /^rgb\(([\S\s]+)\)$/
	let rgbaReg = /^rgba/
	// 如果是16进制颜色
	if (sColor && reg.test(sColor)) {
		if (sColor.length === 4) {
			let sColorNew = "#";
			for (let i = 1; i < 4; i += 1) {
				sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
			}
			sColor = sColorNew;
		}
		//处理六位的颜色值
		let sColorChange = [];
		for (let i = 1; i < 7; i += 2) {
			sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
		}
		return `rgba(${sColorChange.join(",")},${a})`;
	} else if (sColor && rgbReg.test(sColor)) {
		let result = ''
		sColor.replace(rgbReg, (item, $1) => {
			result = `rgba(${$1}, ${a})`
		})
		return result
	} else if (sColor && rgbaReg.test(sColor)) {
		let rgbaTestReg = /,([\s\d.]+)\)$/
		return sColor.replace(rgbaTestReg, `, ${a})`)
	}
	return sColor;
}

export function toHexColor(color) {
	if (color.indexOf("rgba") < 0) {
		return color
	}
	let values = color
		.replace(/rgba?\(/, '')
		.replace(/\)/, '')
		.replace(/[\s+]/g, '')
		.split(',');
	let a = parseFloat(values[3] || 1),
		r = Math.floor(a * parseInt(values[0]) + (1 - a) * 255),
		g = Math.floor(a * parseInt(values[1]) + (1 - a) * 255),
		b = Math.floor(a * parseInt(values[2]) + (1 - a) * 255);
	return "#" +
		("0" + r.toString(16)).slice(-2) +
		("0" + g.toString(16)).slice(-2) +
		("0" + b.toString(16)).slice(-2);
}


export function pageHeight(t, el, callback) {
	let query = uni.createSelectorQuery().in(t).select(el);
	query.boundingClientRect(res => {
		let height = uni.getSystemInfoSync().windowHeight;
		let pageHeight = height > res.height ? height : res.height;
		callback(pageHeight)
	}).exec();
}

/*
 * @desc url增加参数
 * @params path目标url
 * @params 需要增加的参数字符串，不带?
 * */
export function urlAppendParams(path, params) {
	if (path.indexOf('?') > -1) {
		return path + `&${params}`
	} else {
		return path + `?${params}`
	}
}

//当前日期生成时间格式
export function date(date) {
	var y = date.getFullYear()
	var m = date.getMonth() + 1
	m = m < 10 ? ('0' + m) : m
	var d = date.getDate()
	d = d < 10 ? ('0' + d) : d
	var h = date.getHours()
	h = h < 10 ? ('0' + h) : h
	var minute = date.getMinutes()
	minute = minute < 10 ? ('0' + minute) : minute
	var second = date.getSeconds()
	second = second < 10 ? ('0' + second) : second
	return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second
}
//使用picker选择日期的时候生成日期格式
export function getDate(type) {
	const date = new Date();
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();

	if (type === 'start') {
		year = year - 60;
	} else if (type === 'end') {
		year = year + 2;
	}
	month = month > 9 ? month : '0' + month;;
	day = day > 9 ? day : '0' + day;
	return `${year}-${month}-${day}`;
}

//查看大图
export function fdImage(urlArr, curUrl) {
	uni.previewImage({
		current: curUrl,
		urls: urlArr
	})
}

export default {
	base64src: base64src,
	isWechat: isWechat,
	queryString: queryString,
	validateParams: validateParams,
	dataURLtoFile: dataURLtoFile,
	base64ToBlob: base64ToBlob,
	decodeScene: decodeScene,
	handlerUserId: handlerUserId,
	handlerOpenId: handlerOpenId,
	isWxWork: isWxWork,
	getPlatform: getPlatform,
	getReleaseEnv: getReleaseEnv,
	getScreenWidth: getScreenWidth,
	formatDate: formatDate,
	toRgbaColor: toRgbaColor,
	toHexColor: toHexColor,
	pageHeight: pageHeight,
	urlAppendParams: urlAppendParams,
	date: date,
	getDate: getDate,
	fdImage: fdImage
}
