import HTMLParser from './htmlparser'
import wxDiscode from './wxDiscode'
module.exports = {
	//event.currentTarget返回绑定事件的元素
	pdata: function(t) {
		return t.currentTarget.dataset
	},
	//event.target返回触发事件的元素
	data: function(t) {
		return t.target.dataset
	},
	phone: function(t) {
		var e = this.pdata(t).phone;
		uni.makePhoneCall({
			phoneNumber: e
		})
	},
	/**
	 * 时间戳转时间字符串
	 */
	time_format: function(time) {
		var timestamp = time;
		var d = new Date(timestamp * 1000); //根据时间戳生成的时间对象
		var date = (d.getFullYear()) + "-" +
			(d.getMonth() + 1) + "-" +
			(d.getDate()) + " " +
			(d.getHours()) + ":" +
			(d.getMinutes()) + ":" +
			(d.getSeconds());
		return date;
	},
	/**
	 * 时间字符串转时间戳
	 */
	time_str: function(date) {
		date = date.substring(0, 19);
		date = date.replace(/-/g, '/');
		var timestamp = new Date(date).getTime();
		return timestamp / 1000;
	},
	/**
	 * 倒计时
	 */
	Countdown: function(time, obj, k = 0, down = 0) {
		var e = {},
			// aaa=0,
			interval = 'interval' + k,
			totalSecond = time - Date.parse(new Date()) / 1000;
		if (totalSecond <= 0) {
			e.show_time = false;
			typeof obj == "function" & obj(e)
		} {

			interval = setInterval(function() {
				// 秒数  
				var second = totalSecond;
				// aaa++;
				// if (aaa > 3) {
				//   console.log(aaa);
				//   clearInterval(interval);
				// }
				// 天数位  
				var day = Math.floor(second / 3600 / 24);
				var dayStr = day.toString();
				if (dayStr.length == 1) dayStr = '0' + dayStr;

				// 小时位  
				var hr = Math.floor((second - day * 3600 * 24) / 3600);
				var hrStr = hr.toString();
				if (hrStr.length == 1) hrStr = '0' + hrStr;

				// 分钟位  
				var min = Math.floor((second - day * 3600 * 24 - hr * 3600) / 60);
				var minStr = min.toString();
				if (minStr.length == 1) minStr = '0' + minStr;

				// 秒位  
				var sec = second - day * 3600 * 24 - hr * 3600 - min * 60;
				var secStr = sec.toString();
				if (secStr.length == 1) secStr = '0' + secStr;
				e.countDownDay = dayStr,
					e.countDownHour = hrStr,
					e.countDownMinute = minStr,
					e.countDownSecond = secStr,
					e.show_time = true,
					typeof obj == "function" && obj(e)
				totalSecond--;
				if (totalSecond < 0) {
					clearInterval(interval);
					uni.showToast({
						title: '活动已结束',
					});
					e.countDownDay = "0",
						e.countDownHour = "0",
						e.countDownMinute = "0",
						e.countDownSecond = "0",
						e.show_time = false;
					typeof obj == "function" && obj(e)
				}
			}.bind(this), 1000);
		}
	},
	/**
	 * json字符串转对象
	 */
	json_parse: function(str) {
		var jsonStr = str;
		jsonStr = jsonStr.replace(" ", "");
		if (typeof jsonStr != 'object') {
			jsonStr = jsonStr.replace(/\ufeff/g, ""); //重点
			var obj = JSON.parse(jsonStr);
			return obj
		}
	},
	/**
	 * 对象转json字符串
	 */
	str: function(obj) {
		var aToStr = JSON.stringify(obj);
		return aToStr;
	},
	/**
	 * 腾讯地图
	 * lat 纬度
	 * lng 经度
	 * name 地址名称
	 */
	tx_map: function(lat, lng, name) {
		lat = parseFloat(lat);
		lng = parseFloat(lng);
		var that = this,
			cache = getApp().getCache("map");
		if (cache) {
			uni.openLocation({
				latitude: lat,
				longitude: lng,
				scale: 28,
				name: name
			})
		} else {
			uni.getLocation({
				type: 'wgs84',
				success: function(res) {
					getApp().setCache("map", res, 1200);
					var latitude = res.latitude
					var longitude = res.longitude
					uni.openLocation({
						latitude: lat,
						longitude: lng,
						scale: 28,
						name: name
					})
				},
				fail: function() {
					that.alert('未授权位置信息')
				}
			})
		}
	},
	//设置页面标题
	setNavigationBarTitle: function(title) {
		uni.setNavigationBarTitle({
			title: title
		});
	},
	//设置导航栏字体和背景颜色
	setNavigationBarColor: function(pagedata) {
		console.log('非头条下设置标题背景数据')
		//头条不支持
		try {
			// #ifndef MP-TOUTIAO
			uni.setNavigationBarColor({
				frontColor: pagedata.text_color,
				backgroundColor: pagedata.nv_color,
				animation: {
					duration: 400,
					timingFunc: 'easeIn'
				}
			});
			// #endif
		} catch (e) {
			// error
			console.log("获取首页缓存数据出错");
			return {};
		}
	},
	// 跳转
	jump: function(url, type) {
		if (type == 1) {
			// 保留当前页面，跳转到应用内的某个页面，使用uni.navigateBack可以返回到原页面
			uni.navigateTo({
				url: url,
				fail: function(i) {}
			})
		} else if (type == 2) {
			// 关闭当前页面，跳转到应用内的某个页面
			uni.redirectTo({
				url: url
			})
		} else if (type == 3) {
			// 关闭所有页面，打开到应用内的某个页面
			uni.reLaunch({
				url: url
			})
		} else if (type == 4) {
			// 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
			uni.switchTab({
				url: url
			})
		} else if (type == 5) {
			// 关闭当前页面，返回上一页面或多级页面
			uni.navigateBack()
		}
	},
	toast: function(t, e) {
		e || (e = "loading"),
			uni.showToast({
				title: t,
				icon: e,
				duration: 1000
			})
	},
	warning: function(t) {
		uni.showToast({
			title: t,
			image: "/static/image/icon-warning.png",
			duration: 2000
		})
	},
	error: function(t) {
		uni.showToast({
			title: t,
			icon: 'success',
			image: "/static/images/x.png",
			duration: 2000
		})
	},
	success: function(t) {
		uni.showToast({
			title: t,
			icon: "success",
			duration: 1000,
		})
	},
	/*
	 * @desc 富文本html转换为小程序nodes
	 * */
	html2Nodes(data) {
		// #ifdef H5
		return data
		// #endif
		let domJson = []
		/*
		 * @desc
		 * @params tag: 需要插入的标签对象
		 * @params data: domJson对象
		 * */
		function pushTagToDomData(tag, data) {
			if (!data.length || data.findIndex(child => child.close === false) === -1) {
				data.push(tag)
				return data
			} else {
				return data.map(item => {
					if (item.close !== false) {
						// 如果标签已闭合，则不能再操作标签内的内容
						return item
					} else if (item.close === false && item.children && !item.children.length) {
						// 如果标签未闭合，并且标签内没有子标签，说明当前标签应该插入子标签中
						item.children.push(tag)
						return item
					} else if (item.children) {
						// 如果标签未闭合，并且标签内有子标签
						item.children = pushTagToDomData(tag, item.children)
						return item
					}
				})
			}
		}
		/*
		 * @desc
		 * @params tag: 标签名
		 * @params data: domJson对象
		 * */
		function closeTagDomData(tag, data) {
			for (let i = 0; i < data.length; i++) {
				if (data[i].close === false) {
					if (data[i].name === tag && data[i].children.findIndex(child => child.close === false) === -1) {
						// 如果标签名相同，并且该同名标签下面没有未闭合的标签，则闭合该标签
						data[i].close = true
						return
					} else if (data[i].children) {
						// 如果未闭合的标签和当前标签名称不一致，则向下查找
						closeTagDomData(tag, data[i].children)
					}
				}
			}
		}
		HTMLParser(data, {
			start(tag, attrs, unary) {
				/* 开始标签 */
				let attr = {}
				attrs.forEach(item => {
					if (item.name.indexOf('data-') === -1) {
						attr[item.name] = item.escaped
					}
				})

				if (unary) {
					// 单标签，无结束标签

					/* 判断是否是图片，如果是图片则给图片最长宽度为100% */
					if (tag === 'img') {
						if (attr.style) {
							attr.style = attr.style +
								';max-width:100%;width:100%;height:auto;vertical-align: middle;'
						} else {
							attr.style = 'width:100%;height:auto;vertical-align: middle;'
						}
					}

					pushTagToDomData({
						name: tag,
						attrs: attr,
						close: true
					}, domJson)
				} else {
					// 双标签
					if (tag === 'section' || tag === 'figure') {
						tag = 'div'
					}
					if (attr.style) {
						attr.style = attr.style.replace(/width(\s+)?:(\s+)?([\d.]+)px/, (value, $1, $2,
							$3) => `width:${$3}rpx`)
						attr.style = attr.style.replace(/height(\s+)?:(\s+)?([\d.]+)px/, (value, $1, $2,
							$3) => `height:${$3}rpx`)
					}
					/* 判断是否有默认字体大小，如果没有则给一个 */
					if (tag === 'div' || tag === 'p') {
						if (attr.style) {
							if (attr.style.indexOf('font-size') === -1) {
								attr.style = 'font-size: 14px;' + attr.style
							}
						} else {
							attr.style = 'font-size: 14px;'
						}
					}

					pushTagToDomData({
						name: tag,
						attrs: attr,
						close: false,
						children: []
					}, domJson)
				}
			},
			end(tagName) {
				/* 结束标签 */
				closeTagDomData(tagName, domJson)
			},
			chars(text) {
				/* 文字内容 */
				if (text.replace(/\s+/g, '')) {
					pushTagToDomData({
						type: 'text',
						text: wxDiscode.strDiscode(text)
					}, domJson)
				}
			},
			comment(text) {
				/* 注释标签 */
			}
		})
		return domJson
	},
	/**
	 * 获取任意时间
	 */
	getDate(date, AddDayCount = 0, str = 'day') {
		if (!date) {
			date = new Date()
		}
		if (typeof date !== 'object') {
			date = date.replace(/-/g, '/')
		}
		const dd = new Date(date)
		switch (str) {
			case 'day':
				dd.setDate(dd.getDate() + AddDayCount) // 获取AddDayCount天后的日期
				break
			case 'month':
				if (dd.getDate() === 31) {
					dd.setDate(dd.getDate() + AddDayCount)
				} else {
					dd.setMonth(dd.getMonth() + AddDayCount) // 获取AddDayCount天后的日期
				}
				break
			case 'year':
				dd.setFullYear(dd.getFullYear() + AddDayCount) // 获取AddDayCount天后的日期
				break
		}
		const y = dd.getFullYear()
		const m = dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1 // 获取当前月份的日期，不足10补0
		const d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate() // 获取当前几号，不足10补0
		return {
			fullDate: y + '-' + m + '-' + d,
			year: y,
			month: m,
			date: d,
			day: dd.getDay()
		}
	}
}
