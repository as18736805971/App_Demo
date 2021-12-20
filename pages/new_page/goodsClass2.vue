<template>
	<view class="class-index">
		<!-- 左侧导航 -->
		<scroll-view scroll-x="true" class="tab-list">
			<view class="tab-item" v-for="(item, index) in tab_list" :key="index">
				<view :class="index === tab_index ? 'active-item' : ''">{{ item }}</view>
			</view>
		</scroll-view>
		<!-- 左侧导航 -->

		<!-- 商品列表 -->
		<view class="goods-list">
			<!-- 提示封面 -->
			<view class="cover">
				<!--<image src="../../static/" model="aspectFit"></image>-->
			</view>
			<!-- 提示封面 -->

			<!-- 商品 -->
			<scroll-view scroll-y="true" class="goods-scroll">
				<view class="goods-info" v-for="(item, index) in 10" :key="index">
					<image class="goods-pic" model="aspectFit" src="../../static/image/noface.png"></image>
					<view class="goods-detail">
						<view class="goods-name">小米手环6 黑色</view>
						<view class="goods-vip">
							<image class="svip" src="../../static/new_image/svip.png"></image>
							<view class="sivp-txt">￥160</view>
						</view>
						<view class="goods-price">
							<view class="price">￥198.99</view>
							<view class="preferential">￥198</view>
							<image class="gift" src="../../static/new_image/gift.png"></image>
						</view>
						<view class="goods-car">
							<view class="sales">销量658</view>
							<image class="shop-car" src="../../static/new_image/shop_car.png"></image>
						</view>
					</view>
				</view>
			</scroll-view>
			<!-- 商品 -->
		</view>
		<!-- 商品列表 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tab_index: 0,
				tab_list: ['推荐产品', '文具文创', '手机', '鞋帽配饰', '儿童玩具', '母婴童装', '美妆护肤']
			}
		},
		methods: {}
	}
</script>

<style lang="scss" scoped>
	.class-index {
		font-size: 24rpx;
		color: #242424;
		background-color: #FFFFFF;

		.tab-list {
			width: 100%;
			height: 88rpx;
			padding: 0 20rpx;
			flex-direction: row;
			white-space: nowrap;

			.tab-item {
				display: inline-block;
				width: 170rpx;
				line-height: 88rpx;
				font-size: 28rpx;
				font-weight: 400;
				color: #222222;
				text-align: center;

				.active-item {
					text-align: center;
					line-height: 48rpx;
					background: #FFB319;
					border-radius: 24rpx;
					font-weight: 500;
					color: #FFFFFF;
				}
			}
		}

		.goods-list {
			padding: 20rpx;
			height: 100%;

			.cover {
				width: 100%;
				height: 160rpx;
				border-radius: 16rpx;
				background-color: #4cd964;
				margin-bottom: 20rpx;

				image {
					width: 100%;
					height: 160rpx;
					border-radius: 16rpx;
				}
			}

			.goods-scroll {
				width: 100%;
				height: calc(100vh - 220rpx);

				.goods-info {
					width: 100%;
					height: auto;
					background: #FFFFFF;
					border-radius: 16rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin-bottom: 20rpx;

					.goods-pic {
						width: 180rpx;
						height: 180rpx;
						border-radius: 16rpx;
						margin-right: 30rpx;
					}

					.goods-detail {
						width: 70%;
						height: 180rpx;

						.goods-name {
							width: 100%;
							margin-top: 20rpx;
							height: 35rpx;
							font-size: 28rpx;
							font-weight: 500;
							color: #252020;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}

						.goods-vip {
							margin-top: 15rpx;
							position: relative;
							width: 110rpx;
							height: 28rpx;

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

						.goods-price {
							margin-top: 20rpx;
							width: 100%;
							display: flex;
							align-items: center;

							.price {
								font-size: 20rpx;
								font-weight: 500;
								color: #FFB319;
								margin-right: 10rpx;
							}

							.preferential {
								font-size: 20rpx;
								font-weight: 400;
								text-decoration: line-through;
								color: #999999;
								margin-right: 10rpx;
							}

							.gift {
								width: 35rpx;
								height: 28rpx;
							}
						}

						.goods-car {
							margin-top: 2rpx;
							width: 100%;
							display: flex;
							align-items: center;
							justify-content: space-between;

							.sales {
								font-size: 20rpx;
								font-weight: 400;
								color: #999999;
							}

							.shop-car {
								width: 36rpx;
								height: 36rpx;
								border-radius: 12rpx;
							}
						}
					}
				}

				.goods-info:last-child {
					margin-bottom: 0;
				}
			}
		}
	}
</style>
