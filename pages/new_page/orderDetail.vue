<template>
	<view class="order-detail-index">
		<!-- 配送地址 -->
		<view class="address-list">
			<image class="address-icon" :src="require('@/static/new_image/address.png')"></image>
			<view class="address-item">
				<view class="address-txt">北京市朝阳区东大桥路三号楼二单元201</view>
				<view class="txt-phone">邓依凡<text>17610392017</text></view>
			</view>
		</view>
		<!-- 配送地址 -->

		<!-- 订单状态 -->
		<view class="order-status list-label">
			<view class="other-list">
				<view class="left-title">订单状态：</view>
				<view class="right-item">已完成</view>
			</view>
			<view class="other-list">
				<view class="left-title">快递公司：</view>
				<view class="right-item">申通快递</view>
			</view>
			<view class="other-list">
				<view class="left-title">快递单号：</view>
				<view class="right-item">723423424234234<view class="copy">复制</view>
				</view>
			</view>
			<view class="line"></view>
			<view class="other-list right-list">
				<view class="left-title">快递单号：</view>
				<view class="right-item right">
					<image class="icon-right" :src="require('@/static/new_image/right_arrow1.png')"></image>
				</view>
			</view>
		</view>
		<!-- 订单状态 -->

		<!-- 商品信息 -->
		<view class="goods-list list-label">
			<view class="list-title">商品信息</view>
			<view class="order-goods">
				<view class="goods-list">
					<view class="goods-info">
						<image class="goods-pic" model="aspectFit" :src="require('@/static/appicon/about.png')"></image>
						<view class="info">
							<view class="info-left">
								<view class="goods-name">小米手环5NFC版黑色版睡眠监测运动模式</view>
								<view class="goods-desc">标配+腕带</view>
								<view class="goods-num">×1</view>
							</view>
							<view class="info-right">
								<text class="txt">￥<text class="price">66</text>.99</text>
							</view>
						</view>
					</view>
					<view class="button-list goods-button-list">
						<view class="return-index">查看留言</view>
						<view class="return-index margin">去评价</view>
					</view>
					<view class="line"></view>
				</view>
				<view class="goods-list">
					<view class="goods-info">
						<image class="goods-pic" model="aspectFit" :src="require('@/static/appicon/about.png')"></image>
						<view class="info">
							<view class="info-left">
								<view class="goods-name">小米手环5NFC版黑色版睡眠监测运动模式</view>
								<view class="goods-desc">标配+腕带</view>
								<view class="goods-num">×1</view>
							</view>
							<view class="info-right">
								<text class="txt">￥<text class="price">66</text>.99</text>
							</view>
						</view>
					</view>
					<view class="button-list goods-button-list">
						<view class="return-index">查看留言</view>
						<view class="return-index margin">去评价</view>
					</view>
					<view class="line"></view>
				</view>
			</view>
			<view class="other-list right-list">
				<view class="left-title">商品总额</view>
				<view class="right-item right">¥13.99</view>
			</view>
			<view class="other-list right-list">
				<view class="left-title">运费</view>
				<view class="right-item right">¥13.99</view>
			</view>
			<view class="other-list right-list">
				<view class="left-title">优惠券</view>
				<view class="right-item right">-¥13.99</view>
			</view>
			<view class="other-list right-list">
				<view class="left-title">满减</view>
				<view class="right-item right">-¥13.99</view>
			</view>
			<view class="other-list right-list">
				<view class="left-title"></view>
				<view class="right-item right">
					<text class="price"><text class="combined">实付款</text>￥249.<text class="min">99</text></text>
				</view>
			</view>
		</view>
		<!-- 商品信息 -->

		<!-- 订单信息 -->
		<view class="order-detail list-label">
			<view class="list-title">订单信息</view>
			<view class="other-list">
				<view class="left-title">下单门店：</view>
				<view class="right-item">邓依凡的小店</view>
			</view>
			<view class="other-list">
				<view class="left-title">下单时间：</view>
				<view class="right-item">2020.12.16 11:10:30</view>
			</view>
			<view class="other-list">
				<view class="left-title">订单编号：</view>
				<view class="right-item">5451284147231<view class="copy">复制</view>
				</view>
			</view>
			<view class="other-list">
				<view class="left-title">配送方式：</view>
				<view class="right-item">快递发货</view>
			</view>
			<view class="other-list">
				<view class="left-title">支付方式：</view>
				<view class="right-item">余额支付</view>
			</view>
			<view class="line"></view>
			<view class="button-list">
				<view class="return-index">联系卖家</view>
				<view class="return-index margin">拨打电话</view>
			</view>
		</view>
		<!-- 订单信息 -->
	</view>
</template>

<script>
	export default {
		name: "orderDetail"
	}
</script>

<style lang="scss" scoped>
	.order-detail-index {
		padding: 20rpx;
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
			height: 66rpx;
			display: flex;
			align-items: center;

			.left-title {
				height: 66rpx;
				font-size: 28rpx;
				font-weight: 500;
				color: #333333;
				line-height: 66rpx;
			}

			.right-item {
				margin-left: 60rpx;
				height: 66rpx;
				display: flex;
				align-items: center;
				justify-content: flex-start;
				color: #333333;
				font-size: 24rpx;

				.copy {
					margin-left: 20rpx;
					width: 76rpx;
					height: 36rpx;
					text-align: center;
					line-height: 36rpx;
					background: #F5F5F5;
					border-radius: 18rpx;
					font-size: 24rpx;
					font-weight: 400;
					color: #999999;
				}

				.icon-right {
					width: 14rpx;
					height: 24rpx;
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
			}

			.right {
				font-weight: bold;
				justify-content: flex-end !important;
			}
		}

		.right-list {
			justify-content: space-between !important;
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
				width: 90%;
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
		}

		.goods-list {
			padding-bottom: 20rpx;

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
		}

		.line {
			margin-top: 10rpx;
			width: 100%;
			height: 1rpx;
			background: #F5F5F5;
		}

		.list-title {
			height: 80rpx;
			line-height: 80rpx;
			font-size: 32rpx;
			font-weight: bold;
			color: #333333;
		}

		.goods-button-list {
			height: 100rpx !important;
		}

		.button-list {
			width: 100%;
			height: 120rpx;
			display: flex;
			align-items: center;
			justify-content: flex-end;

			.return-index {
				padding: 0 22rpx;
				height: 60rpx;
				background: #FFF6E5;
				border-radius: 50rpx;
				font-size: 28rpx;
				font-weight: 400;
				color: #FFB319;
				line-height: 60rpx;
				text-align: center;
			}

			.margin {
				margin-left: 20rpx;
			}
		}

	}
</style>
