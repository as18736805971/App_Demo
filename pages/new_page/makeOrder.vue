<template>
	<view class="mack-order-index">
		<!-- 门店 -->
		<view class="stores-list">
			<view class="left">
				<image :src="require('@/static/new_image/select_icon.png')"></image> 壹佰网络 (洛阳)
			</view>
			<view class="right">
				交易成功<image :src="require('@/static/new_image/right_arrow1.png')"></image>
			</view>
		</view>
		<!-- 门店 -->

		<!-- 配送地址 -->
		<view class="address-list">
			<image class="address-icon" :src="require('@/static/new_image/address.png')"></image>
			<view class="address-item">
				<view class="address-txt">北京市朝阳区东大桥路三号楼二单元201</view>
				<view class="txt-phone">邓依凡<text>17610392017</text></view>
			</view>
			<image class="right-icon" :src="require('@/static/new_image/right_arrow1.png')"></image>
		</view>
		<!-- 配送地址 -->

		<!-- 商品信息 -->
		<view class="goods-list list-label">
			<view class="list-title">商品信息</view>
			<view class="shop-item">
				<view class="goods-center">
					<image class="goods-pic" model="aspectFit" :src="require('@/static/appicon/about.png')"></image>
					<view class="goods-item">
						<view class="goods-name">雷神911MP17.3英寸游戏笔记本电脑双十一低价特卖雷神911MP17.3英寸游戏笔记本电脑双十一低价特卖</view>
						<view class="goods-label">
							<view class="label-item">银灰色</view>
						</view>
						<view class="goods-price">
							<view class="price"><text>￥</text>9898.00</view>
							<view class="calculator">
								<view class="minus">-</view>
								<view class="number">2</view>
								<view class="minus add">+</view>
							</view>
						</view>
					</view>
				</view>
				<view class="goods-line"></view>
				<view class="goods-center">
					<image class="goods-pic" model="aspectFit" :src="require('@/static/appicon/about.png')"></image>
					<view class="goods-item">
						<view class="goods-name">雷神911MP17.3英寸游戏笔记本电脑双十一低价特卖雷神911MP17.3英寸游戏笔记本电脑双十一低价特卖</view>
						<view class="goods-label">
							<view class="label-item">银灰色</view>
						</view>
						<view class="goods-price">
							<view class="price"><text>￥</text>9898.00</view>
							<view class="calculator">
								<view class="minus">-</view>
								<view class="number">2</view>
								<view class="minus add">+</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="other-list">
				<view class="left-title">配送方式</view>
				<view class="right-item">
					<view class="label-btn btn-active">快递物流</view>
					<view class="label-btn margin">同城配送</view>
					<view class="label-btn">上门自提</view>
				</view>
			</view>
			<view class="other-list">
				<view class="left-title">订单留言</view>
				<view class="right-item">选填，请先和商家协商一致</view>
			</view>
		</view>
		<!-- 商品信息 -->

		<!-- 商品金额 -->
		<view class="goods-price-list list-label">
			<view class="other-list">
				<view class="left-title">商品金额<text class="length">(2件商品)</text></view>
				<view class="right-item">
					<text class="price">￥249.<text class="min">99</text></text>
				</view>
			</view>
			<view class="other-list">
				<view class="left-title">优惠券</view>
				<view class="right-item">暂无可用优惠券<image class="icon-right"
						:src="require('@/static/new_image/right_arrow1.png')"></image>
				</view>
			</view>
			<view class="other-list">
				<view class="left-title">运费</view>
				<view class="right-item">
					<text class="price freight">￥249.<text class="min">99</text></text>
				</view>
			</view>
			<view class="other-list">
				<view class="left-title">红包</view>
				<view class="right-item">
					<text class="price">-￥249.<text class="min">99</text></text>
				</view>
			</view>
			<view class="other-list">
				<view class="left-title">满减</view>
				<view class="right-item">
					<text class="price">-￥249.<text class="min">99</text></text>
				</view>
			</view>
			<view class="other-list">
				<view class="left-title"></view>
				<view class="right-item">
					<text class="price"><text class="combined">合计</text>￥249.<text class="min">99</text></text>
				</view>
			</view>
		</view>
		<!-- 商品金额 -->

		<!-- 发票 -->
		<view class="invoice-list list-label">
			<view class="other-list">
				<view class="left-title">发票</view>
				<view class="right-item">不开发票<image class="icon-right"
						:src="require('@/static/new_image/right_arrow1.png')"></image>
				</view>
			</view>
			<view class="other-list">
				<view class="left-title">支付方式</view>
				<view class="right-item">在线支付<image class="icon-right"
						:src="require('@/static/new_image/right_arrow1.png')"></image>
				</view>
			</view>
		</view>
		<!-- 发票 -->

		<!-- 提交按钮 -->
		<view class="submit-list">
			<view class="btn-txt">合计:<text class="shop-price">￥999.<text class="min">00</text></text></view>
			<view class="btn-item">提交订单</view>
		</view>
		<!-- 提交按钮 -->

	</view>
</template>

<script>
	export default {
		name: "makeOrder",
		data() {
			return {}
		}
	}
</script>

<style lang="scss" scoped>
	.mack-order-index {
		padding: 20rpx 20rpx 110rpx;
		font-size: 24rpx;
		color: #242424;
		background: #F5F5F5;

		.list-label {
			padding: 0 30rpx;
			height: auto;
			background: #FFFFFF;
			border-radius: 16rpx;
			margin-bottom: 20rpx;
		}

		.other-list {
			width: 100%;
			height: 88rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.left-title {
				height: 88rpx;
				font-size: 28rpx;
				font-weight: 500;
				color: #333333;
				line-height: 88rpx;

				.length {
					margin-left: 20rpx;
					font-size: 24rpx;
					font-weight: 400;
					color: #999999;
				}
			}

			.right-item {
				height: 88rpx;
				display: flex;
				align-items: center;
				justify-content: flex-end;
				color: #666666;
				font-size: 28rpx;

				.icon-right {
					width: 14rpx;
					height: 24rpx;
					margin-left: 20rpx;
				}

				.price {
					font-size: 28rpx;
					font-weight: bold;
					color: #FFAA00;

					.min {
						font-size: 20rpx;
					}
				}

				.combined {
					color: #333333;
					margin-right: 5rpx;
				}

				.freight {
					color: #666666 !important;
				}

				.margin {
					margin: 0 20rpx;
				}

				.label-btn {
					width: 140rpx;
					height: 44rpx;
					line-height: 44rpx;
					text-align: center;
					background: #F5F5F5;
					border-radius: 50rpx;
					font-size: 26rpx;
					font-weight: 400;
					color: #666666;
				}

				.btn-active {
					background-color: #FFF7E8;
					color: #FFB319;
				}
			}
		}

		.stores-list {
			padding: 0 30rpx;
			height: 88rpx;
			background: #FFFFFF;
			border-radius: 16rpx;
			font-size: 24rpx;
			color: #333333;
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 20rpx;

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
					margin-right: 19rpx;
				}
			}

			.right {
				display: flex;
				align-items: center;
				height: 88rpx;
				font-size: 24rpx;
				font-weight: 500;
				color: #666666;

				image {
					width: 14rpx;
					height: 24rpx;
					margin-left: 20rpx;
				}
			}
		}

		.address-list {
			padding: 0 30rpx;
			height: 140rpx;
			background: #FFFFFF;
			border-radius: 16rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 20rpx;

			.address-icon {
				width: 24rpx;
				height: 36rpx;
				margin-right: 30rpx;
			}

			.address-item {
				width: 85%;
				height: 100rpx;

				.address-txt {
					width: 100%;
					height: 66rpx;
					line-height: 34rpx;
					font-size: 28rpx;
					font-weight: 500;
					color: #333333;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
				}

				.txt-phone {
					width: 100%;
					height: 34rpx;
					font-size: 2r8px;
					font-weight: 500;
					color: #999999;
					line-height: 34rpx;

					tetx {
						margin-left: 29rpx;
					}
				}
			}

			.right-icon {
				width: 20rpx;
				height: 28rpx;
				margin-left: 30rpx;
			}
		}

		.goods-list {
			.list-title {
				height: 80rpx;
				line-height: 80rpx;
				font-size: 32rpx;
				font-weight: bold;
				color: #333333;
			}

			.shop-item {
				width: 100%;
				height: auto;

				.goods-center {
					width: 100%;
					height: auto;
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin-bottom: 30rpx;

					.goods-pic {
						width: 180rpx;
						height: 180rpx;
						border-radius: 10rpx;
					}

					.goods-item {
						width: 69%;
						height: auto;

						.goods-name {
							height: 80rpx;
							font-size: 28rpx;
							font-weight: 500;
							color: #333333;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2;
							overflow: hidden;
							margin-bottom: 15rpx;
						}

						.goods-label {
							width: 100%;
							height: auto;
							display: flex;
							align-items: center;
							flex-wrap: wrap;
							margin-bottom: 10rpx;

							.label-item {
								padding: 8rpx 9rpx;
								background: #F4F4F4;
								border-radius: 10rpx;
								display: flex;
								align-items: center;
								color: #666666;
								font-size: 24rpx;
								margin-right: 10rpx;
							}
						}

						.goods-price {
							width: 100%;
							display: flex;
							align-items: center;
							justify-content: space-between;

							.price {
								font-size: 24rpx;
								font-weight: 500;
								color: #FFB319;

								text {
									font-size: 18rpx;
									margin-right: 5rpx;
								}
							}

							.calculator {
								display: flex;
								align-items: center;

								.minus {
									width: 52rpx;
									height: 40rpx;
									background: #FFFFFF;
									border: 1rpx solid #ECE9E9;
									border-radius: 20rpx 0 0 20rpx;
									display: flex;
									align-items: center;
									justify-content: center;
									color: #333333;
									font-size: 28rpx;
									font-weight: bold;
								}

								.number {
									width: 83rpx;
									height: 40rpx;
									background: #F4F4F4;
									border: 1rpx solid #ECE9E9;
									display: flex;
									align-items: center;
									justify-content: center;
								}

								.add {
									border-radius: 0 20rpx 20rpx 0 !important;
								}
							}
						}
					}
				}

				.goods-line {
					width: 100%;
					height: 1rpx;
					background: #F5F5F5;
					margin-bottom: 30rpx;
				}
			}
		}

		.submit-list {
			position: fixed;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 108rpx;
			background: #FFFFFF;
			border-top: 1rpx solid #E4E4E4;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.btn-txt {
				font-size: 30rpx;
				font-weight: bold;
				color: #333333;
				margin-left: 40rpx;

				.shop-price {
					margin-left: 5rpx;
					font-size: 30rpx;
					font-weight: bold;
					color: #FFAA00;

					.min {
						font-size: 24rpx;
					}
				}
			}

			.btn-item {
				width: 210rpx;
				height: 76rpx;
				background: #FFAA00;
				border-radius: 50rpx;
				line-height: 76rpx;
				text-align: center;
				font-size: 28rpx;
				font-weight: bold;
				color: #ffffff;
				margin-right: 22rpx;
			}
		}
	}
</style>
