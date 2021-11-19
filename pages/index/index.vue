<template>
	<view class="page-index">
		<!-- 轮播图组件 -->
		<Shuffling :img-list="imgList" @selected="selectedBanner"></Shuffling>
		<!-- 轮播图组件 -->

		<!-- 列表导航 -->
		<view class="navigation margin">
			<view class="item" v-for="(item, index) in navigation" :key="index" @click="handleNavigation(item, index)">
				<image class="icon" mode="aspectFit" :src="item.icon"></image>
				<view class="title">{{item.title}}</view>
			</view>
		</view>
		<!-- 列表导航 -->

		<!-- 公告组件 -->
		<notice :list="notice" :icon="require('@/static/appicon/notice.png')" @handleNotice="handleNotice"></notice>
		<!-- 公告组件 -->

		<!-- 列表组件 -->
		<diy-list :list="list" @handleListJump="handleList"></diy-list>
		<!-- 列表组件 -->
	</view>
</template>

<script>
	import Shuffling from '@/components/components/Shuffling'
	import diyList from '@/components/components/list'
	import notice from '@/components/components/notice'

	export default {
		components: {
			Shuffling,
			diyList,
			notice,
		},
		data() {
			return {
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
		onLoad() {},
		methods: {
			// 点击轮播图图片
			selectedBanner(item, index) {
				console.log('🥒', item, index)
			},
			// 点击导航列表
			handleNavigation(item, index) {
				console.log('🥒', item, index)
			},
			// 点击列表
			handleList(data) {
				console.log('🥒', data)
			},
			// 点击公告
			handleNotice(data) {
				console.log('🥒', data)
			},
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f4f6f9;
	}

	.page-index {
		width: 100%;
		min-height: 100vh;

		.margin {
			margin-bottom: 10rpx !important;
		}

		/* 列表导航  */
		.navigation {
			width: 90%;
			height: auto;
			margin: 0 auto;
			background-color: #FFFFFF;
			// box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.4);
			border-radius: 12rpx;
			padding: 20rpx 20rpx 0;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;

			.item {
				width: 130rpx;
				height: 130rpx;
				margin-bottom: 20rpx;
				border-radius: 10rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-wrap: wrap;

				.icon {
					width: 90rpx;
					height: 90rpx;
					border-radius: 10rpx;
				}

				.title {
					font-size: 24rpx;
					text-align: center;
				}
			}
		}

		/* 列表导航  */

		/* 公告组件 */


		/* 公告组件 */
	}
</style>
