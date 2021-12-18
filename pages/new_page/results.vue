<template>
	<view class="results-index">
		<view class="results-item">
			<view class="success">
				<view class="icon-image">
					<image class="icon-select" model="aspectFit" :src="require('@/static/new_image/order_pay.png')">
					</image>
				</view>
				<view class="pay-success">支付成功！</view>
				<view class="pay-desc">您的包裹正在整装待发，请耐心等待哦~</view>
			</view>

			<view class="line"></view>

			<view class="integral-list">
				<view class="integral-item">
					<view class="integral-item-left">
						<image class="icon" model="aspectFit" :src="require('@/static/new_image/integral.png')">
						</image>
						<text>恭喜您获得<text class="receive">50积分</text></text>
					</view>
					<view class="receive">立即领取</view>
				</view>
			</view>

			<view class="line"></view>

			<view class="button-list">
				<view class="return-see">查看订单</view>
				<view class="return-index">返回首页</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {}
	}
</script>

<style lang="scss" scoped>
	.results-index {
		font-size: 24rpx;
		color: #242424;
		padding: 20rpx;
		background: #F5F5F5;

		.results-item {
			min-height: 1100rpx;
			display: flex;
			align-items: center;
			flex-direction: column;
			padding: 30rpx;
			background: #FFFFFF;
			border-radius: 16rpx;

			.success {
				width: 100%;
				height: auto;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;

				.icon-image {
					margin-top: 80rpx;
					width: 180rpx;
					height: 180rpx;
					background: #FFF7E8;
					border-radius: 50%;
					margin-bottom: 39rpx;
					display: flex;
					align-items: center;
					justify-content: center;

					.icon-select {
						width: 90rpx;
						height: 90rpx;
					}
				}

				.pay-success {
					height: 44rpx;
					font-size: 36rpx;
					font-weight: bold;
					color: #333333;
					margin-bottom: 39rpx;
				}

				.pay-desc {
					height: 30rpx;
					font-size: 24rpx;
					font-weight: 400;
					color: #999999;
					margin-bottom: 39rpx;
				}
			}

			.line {
				width: 100%;
				height: 1rpx;
				background: #F0F0F0;
				margin-bottom: 40rpx;
			}

			.integral-list {
				width: 100%;
				height: auto;
				margin-bottom: 40rpx;

				.integral-item {
					height: 80rpx;
					background: #FFF7E8;
					padding: 0 35rpx;
					border-radius: 16rpx;
					margin-bottom: 10rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;


					.integral-item-left {
						display: flex;
						align-items: center;
						color: #333333;
					}

					.receive {
						margin-left: 5rpx;
						font-size: 24rpx;
						font-weight: bold;
						color: #FFB319;
					}

					.icon {
						width: 28rpx;
						height: 28rpx;
						margin-right: 19rpx;
					}
				}
			}

			.button-list {
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: center;

				.return-see {
					width: 180rpx;
					height: 60rpx;
					background: #F5F5F5;
					border-radius: 50rpx;
					margin-right: 40rpx;
					font-size: 28rpx;
					font-weight: 400;
					color: #333333;
					line-height: 60rpx;
					text-align: center;
				}

				.return-index {
					width: 180rpx;
					height: 60rpx;
					background: #FFB319;
					border-radius: 50rpx;
					font-size: 28rpx;
					font-weight: 400;
					color: #ffffff;
					line-height: 60rpx;
					text-align: center;
				}
			}
		}
	}
</style>
