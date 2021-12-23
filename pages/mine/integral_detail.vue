<template>
	<view class="page-index">
		<view class="cover">
			<image class="cover-image" mode="aspectFit"
				src="https://dev6.sssvip.net/addons/yb_guanwangv2/core/public/images/miniapp/background.png"></image>
		</view>
		<view class="integral-info">
			<view class="name">神里绫华8元兑换券</view>
			<view class="item">
				<view class="integral-txt"><text class="num big">9</text>积分</view>
				<view class="integral-txt">剩余<text class="num">4565</text>件</view>
			</view>
		</view>

		<!-- 使用须知 -->
		<view class="information margin">
			<view class="information-title">使用须知</view>
			<view class="information-txt"><text>兑换日期：</text>以商品详情展示的时间为准，请及时兑换</view>
			<view class="information-txt"><text>使用日期：</text>领取后30天内有效</view>
			<view class="information-txt"><text>使用限制：</text>每单仅限使用1张</view>
			<view class="information-txt"><text>适用商品：</text>原神系列，具体以券详情为准</view>
			<view class="information-txt"><text>使用规则：</text>可在你的眼里有星星小程序内出示会员码使用</view>
			<view class="information-txt"><text>是否与其他优惠共享：</text>否</view>
		</view>
		<!-- 使用须知 -->

		<!-- 兑换须知 -->
		<view class="information">
			<view class="information-title">兑换须知</view>
			<view class="information-txt"><text>售后服务：</text>虚拟券不支持退换货服务，请先确认后兑换</view>
		</view>
		<!-- 兑换须知 -->

		<!-- 悬浮按钮 -->
		<view class="suspend-button">
			<view class="btn">积分不足</view>
		</view>
		<!-- 悬浮按钮 -->
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
		font-size: 24rpx;
		color: #242424;
		padding-bottom: 140rpx;

		.cover {
			width: 100%;
			height: 750rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #FFFFFF;

			.cover-image {
				width: 100%;
				height: 750rpx;
			}
		}

		.integral-info {
			padding: 20rpx 40rpx;
			height: 120rpx;
			background-color: #ffffff;
			margin-bottom: 20rpx;

			.name {
				height: 60rpx;
				font-size: 32rpx;
				font-weight: bold;
				line-height: 60rpx;
			}

			.item {
				height: 60rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				color: #747678;
				font-size: 24rpx;

				.integral-txt {
					height: 60rpx;
					line-height: 60rpx;

					.num {
						color: #b0d342;
					}

					.big {
						font-size: 32rpx;
						margin-right: 5rpx;
						font-weight: bold;
					}
				}
			}
		}

		.information {
			height: auto;
			padding: 30rpx 40rpx;
			background-color: #ffffff;

			.information-title {
				height: 60rpx;
				line-height: 60rpx;
				font-size: 28rpx;
				font-weight: bold;
				margin-bottom: 20rpx;
			}

			.information-txt {
				color: #242524;
				font-size: 26rpx;
				height: auto;
				min-height: 50rpx;

				text {
					font-size: 28rpx;
					font-weight: bold;
				}
			}
		}

		.margin {
			margin-bottom: 20rpx;
		}

		.suspend-button {
			position: fixed;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 140rpx;
			background-color: #FFFFFF;
			display: flex;
			align-items: center;
			justify-content: center;
			box-shadow: 0 -4rpx 10rpx rgba(0, 0, 0, 0.1);

			.btn {
				width: 90%;
				height: 80rpx;
				border-radius: 50rpx;
				color: #FFFFFF;
				text-align: center;
				font-size: 30rpx;
				line-height: 80rpx;
				background-color: #d3dfac;
			}
		}
	}
</style>
