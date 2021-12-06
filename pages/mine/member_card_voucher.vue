<template>
	<view class="page-index">
		<!-- 导航栏 -->
		<base-ani-tab-bar :listArr="list" @handleActive="handleTab"></base-ani-tab-bar>
		<!-- 导航栏 -->

		<!-- 卡券列表 -->
		<view class="card-list" v-if="card_list.length !== 0">
			<view class="card-item" v-for="(item, index) in card_list" :key="index">
				<view class="top">
					<view class="image">
						<image class="icon-image" mode="aspectFit" :src="item.image">
						</image>
					</view>
					<view class="title">
						<view class="name">{{ item.title }}</view>
						<view class="date">
							有效期：{{ item.star_time.split(' ')[0] }}<span>至</span>{{ item.end_time.split(' ')[0] }}</view>
					</view>
				</view>

				<view class="line"></view>

				<view class="bottom">
					<view class="date">使用时段：{{ item.star_time.split(' ')[1] }}-{{ item.end_time.split(' ')[1] }}</view>
					<view class="details">查看详情</view>
				</view>
			</view>
		</view>

		<view class="no-data" v-else>
			<image class="no-icon" mode="aspectFit" :src="require('@/static/image/no-data.png')"></image>
			<view class="no-data-txt">还没有卡券</view>
		</view>

		<view class="loading" v-if="loading">
			<image class="icon-loading" :src="require('@/static/image/loading.gif')"></image>
		</view>
		<!-- 卡券列表 -->

		<!-- 底部导航 -->
		<view class="bottom-navigation">
			<view class="txt">优惠券兑换</view>
			<view class="line"></view>
			<view class="txt">历史卡券</view>
		</view>
		<!-- 底部导航 -->
	</view>
</template>

<script>
	import BaseAniTabBar from '@/components/base/BaseAniTabBar'
	export default {
		components: {
			BaseAniTabBar,
		},
		data() {
			return {
				list: ['全部', '茶饮券', '酒屋券', '零售券'],
				active_index: 0,
				loading: false,
				card_list: [],
			}
		},
		onLoad() {
			this.handleGetData()
		},
		// 下拉刷新
		onPullDownRefresh() {
			// uni.startPullDownRefresh();
			//
			// this.card_list = []
			//
			// setTimeout((res) => {
			//   if (this.active_index === 0 || this.active_index === 3) {
			//     this.handleGetData()
			//   }
			// 	uni.stopPullDownRefresh();
			// }, 1000);
		},
		// 上拉加载
		onReachBottom() {
			this.loading = true
			setTimeout((res) => {
				this.loading = false
				this.handleGetData()
			}, 1000)
		},
		methods: {
			handleTab(index) {
				this.active_index = index
				if (this.active_index === 1 || this.active_index === 2) {
					this.card_list = []
				} else {
					if (this.card_list.length === 0) {
						this.handleGetData()
					}
				}
			},
			handleGetData() {
				for (let i = 0; i < 4; i++) {
					this.card_list.push({
						id: 1,
						title: '新人优惠券',
						image: require('@/static/appicon/exchange.png'),
						star_time: '2021-04-15 00:00:00',
						end_time: '2021-05-15 23:59:59',
						desc: '',
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page-index {
		font-size: 24rpx;
		color: #242424;
		padding-top: 110rpx;
		padding-bottom: 110rpx;

		.card-list {
			width: 85%;
			height: auto;
			margin: 20rpx auto 0;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;

			.card-item {
				position: relative;
				width: 100%;
				height: auto;
				margin-bottom: 20rpx;
				border-radius: 12rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				padding: 20rpx;
				background-color: #FFFFFF;
				box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);

				.top {
					margin-top: 20rpx;
					height: 150rpx;
					width: 92%;
					display: flex;
					align-items: center;

					.image {
						width: 150rpx;
						height: 150rpx;
						border-radius: 12rpx;
						margin-right: 30rpx;
						overflow: hidden;

						.icon-image {
							width: 150rpx;
							height: 150rpx;
							border-radius: 12rpx;
						}
					}

					.title {
						width: 70%;
						height: 150rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						flex-direction: column;

						.name {
							width: 100%;
							line-height: 50rpx;
							height: 50rpx;
							font-size: 28rpx;
							color: #242524;
							font-weight: bold;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}

						.date {
							width: 100%;
							line-height: 50rpx;
							height: 50rpx;
							font-size: 24rpx;
							color: #6f7274;

							span {
								margin: 0 10rpx;
							}
						}
					}
				}

				.line {
					margin: 20rpx 0;
					width: 92%;
					border: 2rpx dashed #e2e4e6;
				}

				.bottom {
					height: 60rpx;
					width: 92%;
					display: flex;
					align-items: center;
					justify-content: space-between;
					font-size: 24rpx;

					.date {
						color: #6f7274;
					}

					.details {
						color: #b0d342;
					}
				}
			}

			.card-item::after {
				position: absolute;
				left: -14rpx;
				bottom: 86rpx;
				content: '';
				width: 30rpx;
				height: 30rpx;
				border-radius: 0 50% 50% 0;
				background-color: #f3f4f4;
			}

			.card-item::before {
				position: absolute;
				right: -14rpx;
				bottom: 86rpx;
				content: '';
				width: 30rpx;
				height: 30rpx;
				border-radius: 50% 0 0 50%;
				background-color: #f3f4f4;
			}
		}

		.loading {
			width: 100%;
			height: 60rpx;
			display: flex;
			align-items: center;
			justify-content: center;

			.icon-loading {
				width: 50rpx;
				height: 50rpx;
			}
		}

		.no-data {
			width: 100%;
			height: 700rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			color: #707274;
			font-size: 24rpx;

			.no-icon {
				width: 300rpx;
				height: 300rpx;
			}
		}

		.bottom-navigation {
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 100rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #FFFFFF;
			z-index: 99;
			box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);

			.txt {
				width: 50%;
				height: 100rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 26rpx;
			}

			.line {
				width: 2rpx;
				height: 30rpx;
				background-color: #ccced0;
			}
		}
	}
</style>
