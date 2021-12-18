<template>
	<view class="order-index">
		<!-- tab导航栏 -->
		<view class="fixed-item">
			<view class="order-tab">
				<view class="tab-item" :class="order_tab_index === index ? 'tab-active' : ''"
					v-for="(item, index) in order_tab" :key="index">{{ item }}</view>
			</view>
		</view>
		<!-- tab导航栏 -->

		<!-- 列表 -->
		<view class="order-list">
			<view class="order-item">
				<view class="order-title">
					<view class="left">
						<image :src="require('@/static/new_image/select_icon.png')"></image> 壹佰网络 (洛阳)
					</view>
					<view class="right">交易成功</view>
				</view>

				<view class="line"></view>

				<view class="order-goods">
					<view class="goods-info">
						<image class="goods-pic" model="aspectFit" :src="require('@/static/appicon/about.png')"></image>
						<view class="info">
							<view class="info-left">
								<view class="goods-name">小米手环5NFC版黑色版睡眠监测运动模式</view>
								<view class="goods-desc">标配+腕带</view>
								<view class="goods-num">×1</view>
							</view>
							<view class="info-right">
								<text class="txt">￥<text class="price">128</text>.99</text>
							</view>
						</view>
					</view>
					<view class="goods-info">
						<image class="goods-pic" model="aspectFit" :src="require('@/static/appicon/about.png')"></image>
						<view class="info">
							<view class="info-left">
								<view class="goods-name">小米手环5NFC版黑色版睡眠监测运动模式</view>
								<view class="goods-desc">标配+腕带</view>
								<view class="goods-num">×1</view>
							</view>
							<view class="info-right">
								<text class="txt">￥<text class="price">128</text>.99</text>
							</view>
						</view>
					</view>
				</view>

				<view class="order-price">
					合计<text class="txt">￥<text class="price">52</text>.99</text>
				</view>

				<view class="line"></view>

				<view class="order-btn">删除订单</view>
			</view>

			<view class="order-item">
				<view class="order-title">
					<view class="left">订单编号：5451284147231</view>
					<view class="right">待收货</view>
				</view>

				<view class="line"></view>

				<view class="order-goods">
					<view class="goods-info">
						<image class="goods-pic" model="aspectFit" :src="require('@/static/appicon/about.png')"></image>
						<view class="info">
							<view class="info-left">
								<view class="goods-name">小米手环5NFC版黑色版睡眠监测运动模式</view>
								<view class="goods-desc">标配+腕带</view>
								<view class="goods-num">×1</view>
							</view>
							<view class="info-right">
								<text class="txt">￥<text class="price">128</text>.99</text>
							</view>
						</view>
					</view>
				</view>

				<view class="order-price">
					合计<text class="txt">￥<text class="price">52</text>.99</text>
				</view>

				<view class="line"></view>

				<view class="order-btn">
					删除订单
					<view class="return-index">确认收货</view>
				</view>
			</view>

			<view class="order-item">
				<view class="order-title">
					<view class="left">订单编号：5451284147231</view>
					<view class="right">待付款</view>
				</view>

				<view class="line"></view>

				<view class="order-goods">
					<view class="goods-info">
						<image class="goods-pic" model="aspectFit" :src="require('@/static/appicon/about.png')"></image>
						<view class="info">
							<view class="info-left">
								<view class="goods-name">小米手环5NFC版黑色版睡眠监测运动模式</view>
								<view class="goods-desc">标配+腕带</view>
								<view class="goods-num">×1</view>
							</view>
							<view class="info-right">
								<text class="txt">￥<text class="price">128</text>.99</text>
							</view>
						</view>
					</view>
				</view>

				<view class="order-price">
					合计<text class="txt">￥<text class="price">52</text>.99</text>
				</view>

				<view class="line"></view>

				<view class="order-btn">
					<view class="return-see">取消订单</view>
					<view class="return-index">付款</view>
				</view>
			</view>

			<view class="order-item">
				<view class="order-title">
					<view class="left">订单编号：5451284147231</view>
					<view class="right">待评价</view>
				</view>

				<view class="line"></view>

				<view class="order-goods">
					<view class="goods-info">
						<image class="goods-pic" model="aspectFit" :src="require('@/static/appicon/about.png')"></image>
						<view class="info">
							<view class="info-left">
								<view class="goods-name">小米手环5NFC版黑色版睡眠监测运动模式</view>
								<view class="goods-desc">标配+腕带</view>
								<view class="goods-num">×1</view>
							</view>
							<view class="info-right">
								<text class="txt">￥<text class="price">128</text>.99</text>
							</view>
						</view>
					</view>
				</view>

				<view class="order-price">
					合计<text class="txt">￥<text class="price">52</text>.99</text>
				</view>

				<view class="line"></view>

				<view class="order-btn">
					删除订单
					<view class="return-index">待评价</view>
				</view>
			</view>
		</view>
		<!-- 列表 -->
	</view>
</template>

<script>
	export default {
		name: "orderList",
		data() {
			return {
				order_tab: ['全部', '待付款', '待发货', '待收货', '待评价'],
				order_tab_index: 0,
			}
		}
	}
</script>

<style lang="scss" scoped>
	.order-index {
		padding-top: 108rpx;
		font-size: 24rpx;
		color: #242424;
		background: #F5F5F5;
		padding-bottom: 20rpx;

		.fixed-item {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			background: #FFFFFF;

			.order-tab {
				height: 88rpx;
				padding: 0 50rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.tab-item {
					height: 88rpx;
					font-size: 28rpx;
					font-weight: 500;
					line-height: 88rpx;
					color: #333333;
				}

				.tab-active {
					color: #FFB319;
				}
			}
		}

		.order-list {
			padding: 0 20rpx 0;
			height: auto;

			.order-item {
				padding: 10rpx 30rpx;
				height: auto;
				background: #FFFFFF;
				border-radius: 16rpx;
				margin-bottom: 20rpx;

				.order-title {
					width: 100%;
					height: 88rpx;
					font-size: 24rpx;
					color: #333333;
					display: flex;
					align-items: center;
					justify-content: space-between;

					.left {
						height: 88rpx;
						font-size: 24rpx;
						font-weight: 500;
						color: #333333;
						display: flex;
						align-items: center;

						image {
							width: 40rpx;
							height: 40rpx;
							margin-right: 20rpx;
						}
					}

					.right {
						text-align: right;
						height: 88rpx;
						font-size: 24rpx;
						font-weight: 500;
						color: #FFB319;
						line-height: 88rpx;
					}
				}

				.order-price {
					width: 100%;
					height: 70rpx;
					display: flex;
					align-items: center;
					justify-content: flex-end;
					font-size: 28rpx;
					font-weight: bold;
					color: #333333;

					.txt {
						height: 70rpx;
						text-align: right;
						font-size: 20rpx;
						line-height: 70rpx;

						.price {
							font-size: 24rpx;
							font-weight: bold;
						}
					}
				}

				.order-goods {
					width: 100%;
					height: auto;

					.goods-info {
						margin-top: 30rpx;
						width: 100%;
						height: 180rpx;
						display: flex;
						align-items: center;
						justify-content: space-between;

						.goods-pic {
							width: 180rpx;
							height: 180rpx;
							border-radius: 16rpx;
							margin-right: 29rpx;
						}

						.info {
							display: flex;
							align-items: center;
							justify-content: space-between;
							height: 180rpx;

							.info-left {
								width: 296rpx;
								height: 180rpx;
								font-size: 28rpx;
								font-weight: 500;
								color: #333333;

								.goods-name {
									width: 296rpx;
									height: 74rpx;
									font-weight: 500;
									color: #333333;
									margin-bottom: 10rpx;
									display: -webkit-box;
									-webkit-box-orient: vertical;
									-webkit-line-clamp: 2;
									overflow: hidden;
								}

								.goods-desc {
									width: 296rpx;
									height: 66rpx;
									font-size: 24rpx;
									font-weight: 500;
									color: #999999;
									display: -webkit-box;
									-webkit-box-orient: vertical;
									-webkit-line-clamp: 2;
									overflow: hidden;
								}

								.goods-num {
									width: 296rpx;
									height: 33rpx;
									font-size: 24rpx;
									line-height: 33rpx;
									font-weight: 500;
									color: #999999;
								}
							}

							.info-right {
								width: 150rpx;
								height: 180rpx;
								display: flex;
								align-items: flex-start;
								justify-content: flex-end;

								.txt {
									text-align: right;
									font-size: 20rpx;

									.price {
										font-size: 24rpx;
										font-weight: bold;
									}
								}
							}
						}
					}
				}

				.line {
					width: 100%;
					height: 1rpx;
					background: #F5F5F5;
				}

				.order-btn {
					margin-top: 10rpx;
					height: 88rpx;
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: flex-end;
					color: #FFAA00;

					.return-see {
						width: 140rpx;
						height: 52rpx;
						background: #FFF6E5;
						border-radius: 50rpx;
						font-size: 24rpx;
						font-weight: 400;
						color: #FFAA00;
						line-height: 52rpx;
						text-align: center;
					}

					.return-index {
						width: 140rpx;
						height: 52rpx;
						background: #FFB319;
						border-radius: 50rpx;
						font-size: 24rpx;
						font-weight: 400;
						color: #ffffff;
						line-height: 52rpx;
						text-align: center;
						margin-left: 20rpx;
					}
				}
			}

			.order-item:last-child {
				margin-bottom: 0;
			}
		}
	}
</style>
