<template>
	<view class="label-index">
		<!-- 会员卡 -->
		<view class="member-car">
			<view class="top-info">
				<image class="portrait" model="aspectFit" src="../../static/image/noface.png"></image>
				<view class="member-name">邓依凡</view>
				<view class="member-level">
					<image class="level-icon" model="aspectFit" src="../../static/new_image/level.png"></image>
					<view class="level-name">普通会员</view>
				</view>
			</view>
			<view class="btn-info">
				<view class="growth-value">
					等级成长值<text class="active-val">100</text>/300
				</view>
				<view class="activation-level">激活等级</view>
			</view>
		</view>
		<!-- 会员卡 -->

		<!-- 会员卡描述 -->
		<view class="member-car-desc">
			<view class="title">会员等级说明</view>
			<view class="title1">什么是成长值</view>
			<view class="title-desc">成长值是消费者在店铺成为会员后，通过消费计算出来的值。</view>
			<view class="title-desc1">成长值决定会员等级，会员等级越高，所享受的会员权益就越多越给力。</view>
			<view class="title1">如何获得成长值</view>
			<view class="desc-info">1. 会员<text>消费X元，</text>交易完成即可获得X个的成长值；</view>
			<view class="desc-info">2. 会员<text>完成X笔订单，</text>交易完成即可获得X个成长值。</view>
		</view>
		<!-- 会员卡描述 -->
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
	.label-index {
		font-size: 24rpx;
		color: #242424;
		padding: 30rpx 20rpx;
		background: #F5F5F5;

		.member-car {
			padding: 40rpx 40rpx 50rpx;
			background: linear-gradient(90deg, #877155, #2C241F);
			border-radius: 16rpx;
			margin-bottom: 30rpx;

			.top-info {
				width: 100%;
				height: auto;
				display: flex;
				align-items: center;
				margin-bottom: 56rpx;

				.portrait {
					width: 80rpx;
					height: 80rpx;
					border-radius: 50%;
					margin-right: 20rpx;
				}

				.member-name {
					max-width: 200rpx;
					height: 80rpx;
					line-height: 80rpx;
					font-size: 32rpx;
					font-weight: bold;
					color: #FEDAB6;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					margin-right: 20rpx;
				}

				.member-level {
					position: relative;

					.level-icon {
						width: 134rpx;
						height: 38rpx;
					}

					.level-name {
						position: absolute;
						top: 6rpx;
						right: 10rpx;
						font-size: 20rpx;
						font-weight: 400;
						color: #333333;
					}
				}
			}

			.btn-info {
				width: 100%;
				height: auto;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.growth-value {
					height: 40rpx;
					font-size: 24rpx;
					font-weight: 500;
					color: #FEDAB6;
					text-shadow: 0rpx 5rpx 10rpx rgba(0, 0, 0, 0.2);
					display: flex;
					align-items: center;

					.active-val {
						margin-left: 5rpx;
						font-size: 34rpx;
					}
				}

				.activation-level {
					width: 140rpx;
					height: 40rpx;
					background: linear-gradient(90deg, #FFF8DB, #FFE4BA);
					border-radius: 20rpx;
					font-size: 24rpx;
					font-weight: 500;
					color: #633A0D;
					line-height: 40rpx;
					text-align: center;
				}
			}
		}

		.member-car-desc {
			padding: 30rpx;
			background: #FFFFFF;
			border-radius: 16rpx;

			.title {
				width: 100%;
				font-size: 32rpx;
				font-weight: bold;
				color: #333333;
				margin-bottom: 52rpx;
			}

			.title1 {
				width: 100%;
				font-size: 28rpx;
				font-weight: bold;
				color: #333333;
				margin-bottom: 30rpx;
			}

			.title-desc {
				width: 100%;
				font-size: 24rpx;
				font-weight: 400;
				color: #252020;
			}

			.title-desc1 {
				width: 100%;
				font-size: 24rpx;
				font-weight: bold;
				color: #252020;
				margin-bottom: 50rpx;
			}

			.desc-info {
				width: 100%;
				font-size: 24rpx;
				font-weight: 400;
				color: #252020;
				margin-bottom: 29rpx;

				text {
					font-weight: bold;
				}
			}

			.desc-info:last-child {
				margin-bottom: 0;
			}
		}
	}
</style>
