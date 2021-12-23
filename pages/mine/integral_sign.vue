<template>
	<view class="page-index">
		<!-- 背景 -->
		<view class="cover">
			<!-- 积分 -->
			<view class="integral">
				<view class="left">
					<image class="integral-icon" :src="userInfo.avatarUrl"></image>
					<text class="name">{{ userInfo.nickName }}</text>
				</view>
				<view class="right">签到规则</view>
			</view>
			<!-- 积分 -->

			<!-- 签到卡片 -->
			<view class="sign-the-card">
				<view class="integral-title">当前积分</view>
				<view class="integral-num">{{ userInfo.integral }}</view>
				<view class="integral-btn" :class="sign_status ? 'active' : ''" @click="handleSign()">
					{{ sign_status ? '已签到' : '立即签到' }}
				</view>
			</view>
			<!-- 签到卡片 -->
		</view>
		<!-- 背景 -->

		<!-- 日历 -->
		<date-table @handleDateItem="handleDate"></date-table>
		<!-- 日历 -->
	</view>
</template>

<script>
	import DateTable from '../../components/components/dateTable'
	export default {
		components: {
			DateTable
		},
		data() {
			return {
				userInfo: getApp()['userInfo'],
				sign_status: false, // 是否签到
			}
		},
		methods: {
			handleDate(data) {
				console.log(data, '21222')
			},
			handleSign() {
				if (!this.sign_status) {
					this.sign_status = true
				}
			},
			handleJump(link) {
				uni.navigateTo({
					url: link.type
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page-index {
		font-size: 24rpx;
		color: #242424;
		padding-bottom: 20rpx;

		.cover {
			position: relative;
			width: 100%;
			height: 270rpx;
			background-color: #b6cb71;
			margin-bottom: 310rpx;
		}

		.integral {
			position: absolute;
			top: 80rpx;
			left: 50%;
			transform: translate(-50%, -36%);
			z-index: 99;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.left {
				padding-left: 30rpx;
				display: flex;
				align-items: center;
				font-size: 36rpx;
				color: #FFFFFF;
				font-weight: bold;

				.integral-icon {
					width: 100rpx;
					height: 100rpx;
					border-radius: 50%;
					border: 2rpx solid #ffffff;
					margin-right: 10rpx;
				}
			}

			.right {
				height: 60rpx;
				padding: 0 30rpx;
				line-height: 60rpx;
				background-color: #c9d897;
				text-align: center;
				font-size: 26rpx;
				color: #ffffff;
				border-radius: 50rpx 0 0 50rpx;
			}
		}

		.sign-the-card {
			position: absolute;
			top: 305rpx;
			left: 50%;
			transform: translate(-50%, -36%);
			z-index: 99;
			width: 86%;
			height: auto;
			background-color: #ffffff;
			border-radius: 12rpx;
			box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);
			padding: 20rpx;

			.integral-title {
				margin-top: 40rpx;
				text-align: center;
				height: 40rpx;
				line-height: 40rpx;
				font-size: 26rpx;
				color: #787b7d;
				margin-bottom: 10rpx;
			}

			.integral-num {
				text-align: center;
				height: 60rpx;
				line-height: 60rpx;
				font-size: 60rpx;
				font-weight: bold;
				color: #000000;
				margin-bottom: 60rpx;
			}

			.integral-btn {
				margin: 40rpx auto;
				width: 320rpx;
				height: 80rpx;
				color: #ffffff;
				border-radius: 50rpx;
				font-size: 28rpx;
				line-height: 80rpx;
				text-align: center;
				background-color: #b0d342;
			}

			.active {
				background-color: #d3dfac !important;
			}
		}
	}
</style>
