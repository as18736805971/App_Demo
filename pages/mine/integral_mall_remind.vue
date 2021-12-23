<template>
	<view class="page-index">
		<view class="sign-in">
			<image class="check" :src="require('@/static/icon/check.png')"></image>
			签到成功
		</view>

		<view class="sign-in-txt">
			<image class="icon" :src="require('@/static/icon/check.png')"></image>
			<view class="txt">每天签到可获得 1 积分</view>
		</view>
		<view class="sign-in-txt">
			<image class="icon" :src="require('@/static/icon/check.png')"></image>
			<view class="txt">连续 7 天额外得 9 积分</view>
		</view>
		<view class="sign-in-txt">
			<image class="icon" :src="require('@/static/icon/check.png')"></image>
			<view class="txt">可兑优惠券及周边好礼</view>
		</view>

		<view class="sign-in-btn">明天提醒我</view>
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
	.page-index {
		width: 100%;
		height: 100vh;
		font-size: 24rpx;
		color: #242424;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: column;

		.sign-in {
			margin-top: 150rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			font-size: 32rpx;
			font-weight: bold;
			margin-bottom: 40rpx;

			.check {
				width: 120rpx;
				height: 120rpx;
				margin-bottom: 20rpx;
			}
		}

		.sign-in-txt {
			height: 60rpx;
			display: flex;
			align-items: center;
			justify-content: center;

			.icon {
				width: 40rpx;
				height: 40rpx;
				margin-right: 15rpx;
			}

			.txt {
				width: 270rpx;
				height: 60rpx;
				font-size: 26rpx;
				color: #797c7e;
				line-height: 60rpx;
			}
		}

		.sign-in-btn {
			width: 350rpx;
			height: 70rpx;
			background-color: #b2d543;
			color: #FFFFFF;
			font-size: 26rpx;
			line-height: 70rpx;
			text-align: center;
			border-radius: 50rpx;
			margin: 80rpx auto;
		}
	}
</style>
