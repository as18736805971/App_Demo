export default {
	data() {
		return {
			// 轮播图数据
			imgList: [{
				url: 'https://img9.51tietu.net/pic/2019-091200/vgkpidei2tjvgkpidei2tj.jpg',
				id: 1,
			}, {
				url: 'https://img9.51tietu.net/pic/2019-091200/euzekmi5m23euzekmi5m23.jpg',
				id: 2
			}, {
				url: 'https://img9.51tietu.net/pic/2019-091200/143tt0ta4sr143tt0ta4sr.jpg',
				id: 3
			}, {
				url: 'https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg',
				id: 4
			}, ],
			// 导航数据
			navigation: [{
				id: 1,
				title: '地图',
				icon: require('@/static/appicon/address.png'),
			}, {
				id: 1,
				title: '文章列表',
				icon: require('@/static/appicon/app.png'),
			}, {
				id: 1,
				title: '文章列表',
				icon: require('@/static/appicon/article.png'),
			}, {
				id: 1,
				title: '文章列表',
				icon: require('@/static/appicon/cate.png'),
			}, {
				id: 1,
				title: '文章列表',
				icon: require('@/static/appicon/close.png'),
			}, {
				id: 1,
				title: '文章列表',
				icon: require('@/static/appicon/code.png'),
			}, {
				id: 1,
				title: '文章列表',
				icon: require('@/static/appicon/coupon.png'),
			}, {
				id: 1,
				title: '文章列表',
				icon: require('@/static/appicon/data.png'),
			}, {
				id: 1,
				title: '文章列表',
				icon: require('@/static/appicon/email.png'),
			}, {
				id: 1,
				title: '文章列表',
				icon: require('@/static/appicon/file.png'),
			}, ],
			// 列表数据
			list: [{
				id: 1,
				hidden: true,
				show_more: true,
				more_text: '更多',
				right_icon: require('@/static/icon/right_arrow.png'),
				show_icon: true,
				icon: require('@/static/appicon/data.png'),
				content: '列表标题',
			}, {
				id: 2,
				hidden: true,
				show_more: true,
				more_text: '更多',
				right_icon: require('@/static/icon/right_arrow.png'),
				show_icon: true,
				icon: require('@/static/appicon/goods.png'),
				content: '商品列表',
			}, {
				id: 3,
				hidden: true,
				show_more: true,
				more_text: '更多',
				right_icon: require('@/static/icon/right_arrow.png'),
				show_icon: true,
				icon: require('@/static/appicon/image.png'),
				content: '图片列表',
			}, {
				id: 4,
				hidden: true,
				show_more: false,
				more_text: '更多',
				right_icon: require('@/static/icon/right_arrow.png'),
				show_icon: true,
				icon: require('@/static/appicon/about.png'),
				content: '关于我们',
			}],
			// 公告数据
			notice: [{
					id: 1,
					content: '这是第一条公告内容，可设置向上或向左滚动哦！'
				},
				{
					id: 2,
					content: '这是第二条公告内容，可设置向上或向左滚动哦！'
				},
				{
					id: 3,
					content: '这是第三条公告内容，可设置向上或向左滚动哦！'
				},
				{
					id: 4,
					content: '这是第四条公告内容，可设置向上或向左滚动哦！'
				},
			],
		}
	},
}
