<template>
	<view class="page-index">
		<view class="page-search">
			<view class="block">
				<image class="icon-cup" :src="require('@/static/appicon/cup.png')"></image>
				一起喝
			</view>
			<view class="input">
				<image class="icon-search" :src="require('@/static/icon/search.png')"></image>
				搜索商品
			</view>
			<view class="hidden"></view>
		</view>

		<view class="page-distance">
			<view class="distance-left">
				<view class="address">
					你的眼里有星星
					<image class="icon-right" :src="require('@/static/icon/right_arrow.png')"></image>
				</view>
				<view class="distance">距离您2.7km</view>
			</view>
			<view class="distance-right">
				<view class="switch-item">
					<view class="switch" :class="take_type === 1 ? 'active' : ''" @click="handleTake(1)">自取</view>
					<view class="switch" :class="take_type === 2 ? 'active' : ''" @click="handleTake(2)">外卖</view>
				</view>
			</view>
		</view>

		<view class="page-rules">
			<view class="rules-left">
				<swiper class="notice-item" autoplay vertical circular :interval="10000">
					<swiper-item v-for="(item, index) in notice_list" :key="index">
						<view class="notice-item align-center" @click="handleNotice(item, index)">
							<image class="notice-icon" :src="item.icon"></image>
							<view class="notice-txt">{{ item.text }}</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
			<view class="rules-right">
				查看更多<image class="icon-under" :src="require('@/static/icon/under_arrow.png')"></image>
			</view>
		</view>

		<view class="page-list">
			<view class="page-list-left"></view>
			<view class="page-list-right"></view>
		</view>

		<view class="page-shop"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				take_type: 1, // 1自取 2外卖
				notice_list: [{
					id: 1,
					icon: require('@/static/appicon/about.png'),
					text: '安抚巾克拉克斯顿积分·',
				}, {
					id: 2,
					icon: require('@/static/appicon/app.png'),
					text: '安抚巾克拉克斯顿积分·',
				}], // 轮播公告
			}
		},
		methods: {
			// 点击配送状态
			handleTake(type) {
				this.take_type = type
			},
			// 点击公告
			handleNotice(item) {},
		}
	}
</script>

<style lang="scss" scoped>
	.page-index {
		position: relative;
		padding-top: 98rpx;
		font-size: 24rpx;
		color: #242424;
		background-color: #FFFFFF;

		.align-center {
			display: flex;
			align-items: center;
		}

		.page-search {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 15rpx;
			height: 60rpx;

			.block {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 170rpx;
				height: 60rpx;
				font-size: 26rpx;
				color: #242524;
				border: 2rpx solid #e3e5e7;
				border-radius: 50rpx;

				.icon-cup {
					width: 35rpx;
					height: 35rpx;
					margin-right: 15rpx;
				}
			}

			.input {
				width: 260rpx;
				height: 60rpx;
				border-radius: 50rpx;
				background-color: #f9f9f9;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #a0a4a6;
				font-size: 26rpx;

				.icon-search {
					width: 35rpx;
					height: 35rpx;
					margin-right: 10rpx;
				}
			}

			.hidden {
				width: 170rpx;
				height: 60rpx;
			}
		}

		.page-distance {
			margin-top: 20rpx;
			margin-bottom: 10rpx;
			height: 95rpx;
			padding: 0 30rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.distance-left {
				width: 70%;
				height: 95rpx;
				display: flex;
				align-items: center;
				flex-wrap: wrap;

				.address {
					width: 100%;
					height: 55rpx;
					display: flex;
					align-items: center;
					font-size: 30rpx;
					font-weight: bold;
					color: #242524;

					.icon-right {
						margin-left: 10rpx;
						width: 20rpx;
						height: 20rpx;
					}
				}

				.distance {
					width: 100%;
					height: 40rpx;
					line-height: 40rpx;
					font-size: 24rpx;
					color: #a4a7aa;
				}
			}

			.distance-right {
				width: 30%;
				height: 95rpx;
				display: flex;
				align-items: center;
				justify-content: flex-end;
				overflow: hidden;

				.switch-item {
					height: 60rpx;
					width: 180rpx;
					padding: 1rpx 4rpx;
					border-radius: 50rpx;
					background-color: #f5f5f5;
					display: flex;
					align-items: center;
					justify-content: space-between;

					.switch {
						height: 54rpx;
						width: 90rpx;
						font-size: 24rpx;
						color: #676a69;
						display: flex;
						align-items: center;
						justify-content: center;
					}

					.active {
						color: #FFFFFF;
						border-radius: 50rpx;
						background-color: #242524;
					}
				}
			}
		}

		.page-rules {
			width: 100%;
			height: 70rpx;
			color: #5a5959;
			font-size: 24rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			box-shadow: 0 10rpx 10rpx -10rpx rgba(0, 0, 0, 0.1);

			.rules-left {
				width: 70%;
				height: 70rpx;
				margin-left: 30rpx;

				.notice-item {
					width: 100%;
					height: 70rpx;

					.notice-icon {
						width: 40rpx;
						height: 40rpx;
						margin-right: 10rpx;
					}

					.notice-txt {
						width: 430rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
				}
			}

			.rules-right {
				width: 30%;
				height: 70rpx;
				display: flex;
				align-items: center;
				justify-content: flex-end;
				margin-right: 30rpx;

				.icon-under {
					margin-left: 10rpx;
					width: 25rpx;
					height: 25rpx;
				}
			}
		}

		.rules-show {
			position: fixed;
			z-index: 66;
			top: 342rpx;
			left: 0;
			height: 200rpx !important;
			box-shadow: none !important;
		}

		.page-list {
			width: 100%;
			height: calc(100vh - 453rpx);
			display: flex;
			align-items: center;
			justify-content: space-between;
			background-color: #4cd964;

			&-left {
				width: 180rpx;
				height: 100%;
				background-color: #f5f5f5;
			}

			&-right {
				width: 570rpx;
				height: 100%;
				background-color: #1A78FD;
			}
		}

		.list-show {
			margin-top: 70rpx;
		}

		.page-shop {
			position: relative;
			width: 100%;
			height: 100rpx;
			background-color: #1A78FD;
		}
	}
</style>
