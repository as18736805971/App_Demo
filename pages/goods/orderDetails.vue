<template>
	<view class="orderDetails">
		<view class="title">
			<view class="center">
				<view class="line"></view>
				<view class="text hiddenText">商品信息</view>
			</view>
		</view>

		<view class="goods">
			<view class="goodsItem center">
				<view class="message">
					<view class="goodsImg">
						<image :src="require('@/static/appicon/app.png')" @click="handleGoods()"></image>
					</view>
					<view class="goodsMessage">
						<view class="name">
							<view class="text noHiddenText">冬季美白水乳秋冬干性皮肤补水美白套装秋冬季节专用护肤</view>
							<view class="number">
								<view class="price"><text>￥</text>220.00</view>
								<view class="num">x1</view>
							</view>
						</view>
						<view class="attr">
							<view class="attrname">套装：水乳套装</view>
						</view>
					</view>
				</view>
			</view>

			<view class="goodsItem center">
				<view class="message">
					<view class="goodsImg">
						<image :src="require('@/static/appicon/app.png')" @click="handleGoods()"></image>
					</view>
					<view class="goodsMessage">
						<view class="name">
							<view class="text noHiddenText">冬季美白水乳秋冬干性皮肤补水美白套装秋冬季节专用护肤</view>
							<view class="number">
								<view class="price"><text>￥</text>220.00</view>
								<view class="num">x1</view>
							</view>
						</view>
						<view class="attr">
							<view class="attrname">套装：水乳套装</view>
						</view>
					</view>
				</view>
			</view>

			<view class="freight center">
				<view class="text">运费</view>
				<view class="price">￥0.00</view>
			</view>

		</view>

		<view class="title">
			<view class="center">
				<view class="line"></view>
				<view class="text hiddenText">物流信息</view>
			</view>
		</view>

		<view class="userInfo">
			<view class="item center">
				<view class="text">快递公司：</view>
				<view class="data">暂无</view>
			</view>
			<view class="item center">
				<view class="text">快递单号：</view>
				<view class="data">暂无</view>
			</view>
		</view>

		<view class="title">
			<view class="center">
				<view class="line"></view>
				<view class="text hiddenText">收件人信息</view>
			</view>
		</view>

		<view class="userInfo">
			<view class="item center">
				<view class="text">收件人：</view>
				<view class="data">你的眼里有星星</view>
			</view>
			<view class="item center">
				<view class="text">收件人电话：</view>
				<view class="data">18736805971</view>
			</view>
			<view class="item center">
				<view class="text">收货地址：</view>
				<view class="data">河南省洛阳市涧西区</view>
			</view>
			<view class="item center">
				<view class="text">买家留言：</view>
				<view class="data">保温杯颜色不要弄错哦</view>
			</view>
		</view>

		<view class="title">
			<view class="center">
				<view class="line"></view>
				<view class="text hiddenText">订单信息</view>
			</view>
		</view>

		<view class="userInfo">
			<view class="item center">
				<view class="text">订单编号：</view>
				<view class="data">5451284147231</view>
			</view>
			<view class="item center">
				<view class="text">下单时间：</view>
				<view class="data">2019-09-10 16:23:10</view>
			</view>

		</view>

		<view class="contact">
			<view class="item">
				<view class="itemName lvcenter">
					<view class="icon lvcenter">
						<image :src="require('@/static/appicon/tips.png')"></image>
					</view>
					<view class="text">联系卖家</view>
				</view>
				<view class="xian"></view>
				<view class="itemName lvcenter">
					<view class="icon lvcenter">
						<image :src="require('@/static/appicon/phone.png')"></image>
					</view>
					<view class="text">拨打电话</view>
				</view>
			</view>
		</view>

		<view class="float">
			<view class="pay">支付定金</view>
		</view>

	</view>
</template>

<script>
	export default {
		name: "orderDetails",
		data() {
			return {
				type: ''
			}
		},
		methods: {
			handleGoods() {
				uni.navigateTo({
					url: './details'
				});
			}
		}
	}
</script>

<style lang="scss">
	.orderDetails {
		width: 100%;

		.goods {
			width: 750rpx;
			background: #ffffff;
			margin-bottom: 20rpx;

			.goodsItem {
				overflow: hidden;

				.message {
					width: 700rpx;
					margin-top: 25rpx;
					margin-bottom: 20rpx;
					border-radius: 10rpx 0 0 10rpx;
					display: flex;


					.goodsImg {
						width: 180rpx;
						height: 180rpx;
						margin-right: 21rpx;
						border-radius: 10rpx;

						image {
							width: 180rpx;
							height: 180rpx;
							border-radius: 10rpx;
						}
					}

					.goodsMessage {
						width: 500rpx;

						.name {
							width: 500rpx;
							height: 60rpx;
							margin-top: 11rpx;
							margin-bottom: 19rpx;
							display: flex;

							.text {
								width: 320rpx;
								height: 60rpx;
								font-size: 26rpx;
								font-weight: 400;
								text-align: left;
								color: #0f0f0f;
								line-height: 30rpx;
								letter-spacing: 0rpx;
							}

							.number {
								width: 180rpx;
								height: 60rpx;

								.price {
									width: 180rpx;
									height: 35rpx;
									font-size: 26rpx;
									font-weight: 500;
									text-align: right;
									color: #2a2a2a;
									line-height: 35rpx;

									text {
										font-size: 24rpx;
									}

								}

								.num {
									width: 180rpx;
									height: 25rpx;
									font-size: 24rpx;
									font-weight: 400;
									text-align: right;
									color: #888888;
									line-height: 30rpx;
									letter-spacing: 1rpx;
								}

							}
						}

						.attr {
							width: 500rpx;
							display: flex;
							flex-wrap: wrap;
							overflow: hidden;

							.attrname {
								height: 35rpx;
								font-size: 22rpx;
								font-weight: 400;
								text-align: center;
								color: #999999;
								line-height: 40rpx;
								margin-right: 15rpx;
							}
						}
					}
				}
			}

			.freight {
				height: 50rpx;
				font-size: 24rpx;
				font-weight: 400;
				color: #161616;
				line-height: 10rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.price {
					color: #2A2A2A;
				}
			}

			.center {
				margin: 0 auto;
				width: 700rpx;
			}

		}

		.userInfo {
			background-color: #FFFFFF;
			margin-bottom: 20rpx;

			.item {
				display: flex;
				align-items: center;
				font-size: 24rpx;
				font-weight: 400;
				text-align: left;
				color: #5d5d5d;
				line-height: 36rpx;
				letter-spacing: 1rpx;
				padding: 10rpx 0rpx;

				.data {
					width: 460rpx;
					line-height: 30rpx;
				}
			}

			.center {
				margin: 0 auto;
				width: 700rpx;
			}
		}

		.contact {
			width: 750rpx;
			height: 88rpx;
			margin: 0 auto 100rpx;
			background-color: #FFFFFF;

			.item {
				width: 700rpx;
				height: 88rpx;
				margin: 0 auto;
				display: flex;
				align-items: center;

				.xian {
					width: 1rpx;
					height: 40rpx;
					background: #eeeeee;
				}

				.itemName {
					width: 50%;
					height: 88rpx;

					.icon {
						width: 30rpx;
						height: 30rpx;
						margin-right: 10rpx;

						image {
							width: 30rpx;
							height: 30rpx;
						}
					}

					.text {
						font-size: 30rpx;
						font-weight: 500;
						text-align: left;
						color: #2a2a2a;
						letter-spacing: 1rpx;
					}
				}
			}
		}

		.float {
			width: 750rpx;
			height: 100rpx;
			position: fixed;
			bottom: 0;
			background-color: #f5f4f4;
		}

		.pay {
			margin: 20rpx auto;
			width: 700rpx;
			height: 68rpx;
			text-align: center;
			line-height: 68rpx;
			background: #409eff;
			border-radius: 34rpx;
			font-size: 30rpx;
			font-weight: 500;
			color: #ffffff;
		}

		.title {
			width: 750rpx;
			height: 90rpx;
			background-color: #FFFFFF;
			border-bottom: 1rpx solid #EEEEEE;

			.center {
				width: 700rpx;
				margin: 0 auto;
				display: flex;
				align-items: center;
			}

			.line {
				width: 8rpx;
				height: 30rpx;
				background: #409eff;
				border-radius: 3rpx;
				margin-right: 20rpx;
			}

			.text {
				height: 90rpx;
				font-size: 34rpx;
				font-weight: 500;
				text-align: left;
				color: #0f0f0f;
				line-height: 90rpx;
			}
		}

		.lvcenter {
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.lvxcenter {
			display: flex;
			align-items: center;
			justify-content: space-around;
		}

		.noHiddenText {
			overflow: hidden;
			text-overflow: ellipsis;
		}

		.hiddenText {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

	}
</style>
