<template>
	<view class="page-index">
		<view class="code-item">
			<!-- 头像 -->
			<view class="portrait">
				<image class="portrait-icon" :src="userInfo.portrait"></image>
				<view class="level">
					<image class="level-icon" :src="userInfo.level"></image>
				</view>
			</view>
			<!-- 头像 -->

			<!-- 昵称/积分 -->
			<view class="nick-name">
				<view class="name">{{ userInfo.nickName }}</view>
				<view class="list">
					<view class="item" v-for="(item, index) in list" :key="index">
						<view class="num">{{ item.num }}</view>
						<view class="title">{{ item.title }}</view>
					</view>
				</view>
			</view>
			<!-- 昵称/积分 -->

			<!-- 二维码 -->
			<view class="code">
				<image class="code-icon" :src="userInfo.code"></image>
			</view>
			<!-- 二维码 -->

			<!-- 简述 -->
			<view class="desc">支付前出示可累计积分，会员码每30秒更新</view>
			<!-- 简述 -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				timing: null, // 定时请求 二维码
				userInfo: {
					portrait: require('@/static/appicon/portrait.png'),
					level: require('@/static/appicon/level.png'),
					nickName: '你的眼里有星星',
					code: require('@/static/image/code.png'),
				},
				list: [{
						title: '优惠券',
						num: 10,
					},
					{
						title: '积分商城',
						num: 100,
					},
					{
						title: '余额(元)',
						num: '120.00',
					},
					{
						title: '礼品卡',
						num: 0,
					}
				],
			}
		},
		onLoad() {
			this.handleGetCode()
			if (!this.timing) {
				this.timing = setInterval((res) => {
					this.handleGetCode()
				}, 3000)
			}
		},
		// 监听页面卸载/关闭 即返回其他页面
		onUnload() {
			// 清除定时器
			clearInterval(this.timing)
		},
		methods: {
			// 请求二维码
			handleGetCode() {
				console.log('关闭5446451')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page-index {
		font-size: 24rpx;
		color: #242424;
		padding: 150rpx 20rpx 0rpx;

		.code-item {
			position: relative;
			margin: 0 auto;
			height: auto;
			padding: 130rpx 20rpx 100rpx;
			background-color: #ffffff;
			border-radius: 12rpx;
			box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);

			.portrait {
				position: absolute;
				top: 0;
				left: 50%;
				transform: translate(-50%, -50%);
				width: 170rpx;
				height: 170rpx;
				background-color: #FFFFFF;
				padding: 10rpx;
				border-radius: 50%;
				box-shadow: 0 4rpx 10rpx rgba(0, 0, 0, 0.1);

				.portrait-icon {
					width: 100%;
					height: 100%;
					border-radius: 50%;
				}

				.level {
					position: absolute;
					top: 155rpx;
					right: 0;
					width: 65rpx;
					height: 38rpx;
					background-color: #FFFFFF;
					border-radius: 28rpx;
					z-index: 99;
					display: flex;
					align-items: center;
					justify-content: center;
					box-shadow: 3rpx 4rpx 10rpx rgba(0, 0, 0, 0.1);

					.level-icon {
						width: 28rpx;
						height: 28rpx;
					}
				}
			}

			.nick-name {
				height: auto;
				margin-bottom: 50rpx;

				.name {
					height: 50rpx;
					text-align: center;
					font-size: 30rpx;
					line-height: 50rpx;
					margin-bottom: 20rpx;
				}

				.list {
					display: flex;
					align-items: center;
					justify-content: space-between;
					flex-wrap: wrap;

					.item {
						width: 25%;
						height: 100rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						flex-direction: column;

						.num {
							font-size: 30rpx;
							color: #484b4d;
							font-weight: bold;
							text-align: center;
							margin-bottom: 10rpx;
						}

						.title {
							font-size: 26rpx;
							color: #707274;
							text-align: center;
						}
					}
				}
			}

			.code {
				height: 300rpx;
				display: flex;
				align-items: center;
				justify-content: center;

				.code-icon {
					width: 300rpx;
					height: 300rpx;
				}
			}

			.desc {
				height: 100rpx;
				color: #545658;
				font-size: 24rpx;
				text-align: center;
				line-height: 100rpx;
			}
		}
	}
</style>
