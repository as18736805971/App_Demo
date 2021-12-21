<template>
	<view class="page-index">
		<view class="gift-list">
			<!-- 左侧 -->
			<view class="gift-item">
				<view class="gift-info" v-for="(item, index) in 5" :key="index">
					<view class="goods-pic">
						<image class="pic-image" mode="aspectFit" src="../../static/image/noface.png"></image>
					</view>
					<view class="goods-name">倍轻松 眼部按摩</view>
					<view class="goods-desc">方便携带，免拆磁吸充电，快速方便携带，免拆磁吸充电，快速</view>
					<view class="goods-svip">
						<view class="goods-vip">
							<image class="svip" src="../../static/new_image/svip.png"></image>
							<view class="sivp-txt">￥160</view>
						</view>
						<view class="block">满减</view>
						<view class="block blue">包邮</view>
					</view>
					<view class="goods-price">
						<view class="price">￥198.99</view>
						<view class="preferential">￥198</view>
						<image class="gift" src="../../static/new_image/gift.png"></image>
					</view>
					<view class="goods-car">
						<view class="sales">
							销量658<text class="line"></text>99%好评
						</view>
						<image class="shop-car" src="../../static/new_image/shop_car.png"></image>
					</view>
				</view>
			</view>
			<!-- 左侧 -->

			<!-- 右侧 -->
			<view class="gift-item">
				<view class="gift-info" v-for="(item, index) in 5" :key="index">
					<view class="goods-pic">
						<image class="pic-image" mode="aspectFit" src="../../static/image/noface.png"></image>
					</view>
					<view class="goods-name">倍轻松 眼部按摩</view>
					<view class="goods-desc">方便携带，免拆磁吸充电，快速方便携带，免拆磁吸充电，快速</view>
					<view class="goods-svip">
						<view class="goods-vip">
							<image class="svip" src="../../static/new_image/svip.png"></image>
							<view class="sivp-txt">￥160</view>
						</view>
						<view class="block">满减</view>
						<view class="block blue">包邮</view>
					</view>
					<view class="goods-price">
						<view class="price">￥198.99</view>
						<view class="preferential">￥198</view>
						<image class="gift" src="../../static/new_image/gift.png"></image>
					</view>
					<view class="goods-car">
						<view class="sales">
							销量658<text class="line"></text>99%好评
						</view>
						<image class="shop-car" src="../../static/new_image/shop_car.png"></image>
					</view>
				</view>
			</view>
			<!-- 右侧 -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goods_list: [],
				left_list: [],
				right_list: [],
			}
		},
		methods: {
			handleDate() {
				this.goods_list.map((item, index) => {
					if (index % 2 === 0) {
						this.left_list.push(item)
					} else {
						this.right_list.push(item)
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page-index {
		width: 100%;
		font-size: 24rpx;
		color: #242424;

		.gift-list {
			padding: 20rpx;
			height: auto;
			display: flex;
			align-items: center;
			justify-content: space-between;
			background-color: #F5F5F4;

			.gift-item {
				width: 48%;
				border-radius: 16rpx;

				.gift-info {
					width: 100%;
					height: auto;
					background: #FFFFFF;
					border-radius: 16rpx;
					overflow: hidden;
					margin-bottom: 20rpx;

					.goods-pic {
						width: 100%;
						height: 345rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						margin-bottom: 21rpx;

						.pic-image {
							width: 100%;
							height: 345rpx;
						}
					}

					.goods-name {
						padding: 0 20rpx;
						min-height: 40rpx;
						max-height: 73rpx;
						font-size: 28rpx;
						font-weight: 500;
						color: #252020;
						line-height: 37rpx;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						overflow: hidden;
					}

					.goods-desc {
						padding: 0 20rpx;
						height: 30rpx;
						font-size: 20rpx;
						font-weight: 400;
						color: #666666;
						line-height: 30rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}

					.goods-svip {
						padding: 10rpx 20rpx;
						height: auto;
						display: flex;
						align-items: center;
						flex-wrap: wrap;

						.goods-vip {
							position: relative;
							width: 110rpx;
							height: 28rpx;
							margin-right: 10rpx;

							.svip {
								width: 110rpx;
								height: 28rpx;
							}

							.sivp-txt {
								position: absolute;
								top: 0;
								right: 6rpx;
								font-size: 20rpx;
								font-weight: 500;
								color: #333333;
							}
						}

						.block {
							padding: 0 6rpx;
							height: 28rpx;
							border: 1rpx solid #F92415;
							border-radius: 4rpx;
							font-size: 20rpx;
							font-weight: 400;
							color: #F92415;
							line-height: 28rpx;
							margin-right: 10rpx;
						}

						.block:last-child {
							margin-right: 0;
						}

						.blue {
							border: 1rpx solid #1A78FD;
							color: #1A78FD;
						}

					}

					.goods-price {
						padding: 0 20rpx;
						height: 50rpx;
						display: flex;
						align-items: center;

						.price {
							font-size: 26rpx;
							font-weight: 500;
							color: #F92415;
							margin-right: 10rpx;
						}

						.preferential {
							font-size: 20rpx;
							font-weight: 400;
							text-decoration: line-through;
							color: #999999;
							margin-top: 5rpx;
							margin-right: 10rpx;
						}

						.gift {
							width: 35rpx;
							height: 28rpx;
						}
					}

					.goods-car {
						padding: 0 20rpx;
						height: 50rpx;
						display: flex;
						align-items: center;
						justify-content: space-between;

						.sales {
							display: flex;
							align-items: center;
							font-size: 20rpx;
							font-weight: 400;
							color: #666666;

							.line {
								width: 1rpx;
								height: 16rpx;
								background: #999999;
								margin: 0 15rpx;
							}
						}

						.shop-car {
							width: 36rpx;
							height: 36rpx;
						}
					}
				}

				.gift-info:last-child {
					margin-bottom: 0;
				}
			}
		}
	}
</style>
