<template>
	<view class="page-index">
		<!-- 会员等级 -->
		<view class="member-level"></view>
		<!-- 会员等级 -->

		<!-- 会员特权 -->
		<view class="member-privilege"></view>
		<!-- 会员特权 -->

		<!-- 会员特权列表 -->
		<view class="member-list">
			<view class="item">
				<view class="top-txt">升级特权</view>
				<view class="title">神里绫华</view>
				<view class="item-list">
					<view class="block">
						<view class="block-item">
							<image class="block-icon" :src="require('@/static/appicon/coupon1.png')"></image>
							<view class="round">x1</view>
						</view>
						<view class="desc">5元外卖券</view>
					</view>
					<view class="block">
						<view class="block-item">
							<image class="block-icon" :src="require('@/static/appicon/coupon1.png')"></image>
							<view class="round">x1</view>
						</view>
						<view class="desc">5元外卖券</view>
					</view>
					<view class="block">
						<view class="block-item">
							<image class="block-icon" :src="require('@/static/appicon/coupon1.png')"></image>
							<view class="round">x1</view>
						</view>
						<view class="desc">5元外卖券</view>
					</view>
					<view class="block">
						<view class="block-item">
							<image class="block-icon" :src="require('@/static/appicon/coupon1.png')"></image>
							<view class="round">x1</view>
						</view>
						<view class="desc">5元外卖券</view>
					</view>
					<view class="block">
						<view class="block-item">
							<image class="block-icon" :src="require('@/static/appicon/coupon1.png')"></image>
							<view class="round">x1</view>
						</view>
						<view class="desc">5元外卖券</view>
					</view>
				</view>
			</view>
			<view class="item">
				<view class="top-txt">升级特权</view>
				<view class="title">神里绫华</view>
				<view class="item-list">
					<view class="block">
						<view class="block-item">
							<image class="block-icon" :src="require('@/static/appicon/coupon1.png')"></image>
							<view class="round">x1</view>
						</view>
						<view class="desc">5元外卖券</view>
					</view>
					<view class="block">
						<view class="block-item">
							<image class="block-icon" :src="require('@/static/appicon/coupon1.png')"></image>
							<view class="round">x1</view>
						</view>
						<view class="desc">5元外卖券</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 会员特权列表 -->
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
		min-height: 100vh;
		font-size: 24rpx;
		color: #242424;

		.member-level {
			height: 330rpx;
			background-color: #FFFFFF;
			margin-bottom: 20rpx;
		}

		.member-privilege {
			height: 520rpx;
			background-color: #FFFFFF;
			margin-bottom: 20rpx;
		}

		.member-list {
			padding: 0 20rpx 80rpx;
			height: auto;

			.item {
				position: relative;
				height: auto;
				border-radius: 12rpx;
				box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);
				background-color: #FFFFFF;
				padding: 40rpx 30rpx;
				margin-bottom: 20rpx;

				.top-txt {
					position: absolute;
					top: 0;
					left: 0;
					height: 40rpx;
					width: 120rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					border-radius: 12rpx 0 12rpx 0;
					background-color: #b2d249;
					color: #FFFFFF;
					font-size: 24rpx;
					box-shadow: 2rpx 10rpx 10rpx rgba(176, 211, 67, 0.3);
				}

				.title {
					margin-top: 30rpx;
					height: 40rpx;
					line-height: 40rpx;
					font-size: 28rpx;
					color: #000000;
					font-weight: bold;
					margin-bottom: 16rpx;
				}

				.item-list {
					display: flex;
					align-items: center;
					justify-content: flex-start;
					flex-wrap: wrap;

					.block {
						width: 25%;
						height: 140rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						flex-direction: column;

						.block-item {
							position: relative;
							width: 50rpx;
							height: 50rpx;

							.block-icon {
								width: 50rpx;
								height: 50rpx;
							}

							.round {
								position: absolute;
								top: -10rpx;
								right: -35rpx;
								background-color: #f8c04f;
								border-radius: 50%;
								width: 40rpx;
								height: 40rpx;
								color: #FFFFFF;
								display: flex;
								align-items: center;
								justify-content: center;
							}
						}

						.desc {
							margin-top: 20rpx;
							color: #828385;
							font-size: 24rpx;
							text-align: center;
							display: -webkit-box;
							word-break: break-all;
							text-overflow: ellipsis;
							overflow: hidden;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2; //设置 需要显示的行数
						}
					}
				}
			}

			.item:last-child {
				margin-bottom: 0;
			}
		}
	}
</style>
