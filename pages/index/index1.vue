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

		<!-- 进度条组件 -->
		<progress class="margin_top" :nowD="nowD" :sumD="100" :contentColor='"rgba(3,144,252,1)"'
			:contentBacColor='"#ffffff"' :wid="380" :type='"linear"'></progress>
		<!-- 进度条组件 -->

		<!-- 列表组件 -->
		<diy-list :list="list" @handleListJump="handleList"></diy-list>
		<!-- 列表组件 -->

		<!-- 卡片组件 -->
		<card :list="card" @handleCard="handleCard"></card>
		<!-- 卡片组件 -->
	</view>
</template>

<script>
	import Shuffling from '@/components/components/Shuffling'
	import diyList from '@/components/components/list'
	import notice from '@/components/components/notice'
	import progress from '@/components/components/progress'
	import card from '@/components/components/card'

	import index from './index.js'
	export default {
		components: {
			Shuffling,
			diyList,
			notice,
			progress,
			card,
		},
		mixins: [index],
		data() {
			return {
				nowD: 20,
			}
		},
		onLoad() {},
		methods: {
			// 点击轮播图图片
			selectedBanner(item, index) {
				// console.log('🥒', item, index)
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
				this.nowD = this.nowD + 10
				console.log('🥒', data)
			},
			// 点击卡片
			handleCard(data) {
				console.log('🥒', data)
				console.log('🥒', data)
			}
		}
	}
</script>

<style lang="scss">
	.page-index {
		width: 100%;
		min-height: 100vh;
		padding-bottom: 20rpx;

		.margin {
			margin-bottom: 10rpx !important;
		}

		.margin_top {
			margin-top: 10rpx !important;
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

		/* 卡片组件 */
		/* 卡片组件 */
	}
</style>
