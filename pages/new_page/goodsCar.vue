<template>
	<view class="page-shop-car">
		<!-- 购物车列表 -->
		<view class="shop-car" v-for="(item, index) in 3" :key="index">
			<view class="shop-item" v-for="(item, index) in 2" :key="index">
				<!-- 勾选按钮 -->
				<view class="select-icon">
					<!--<image class="icon-select" model="aspectFit" :src="require('@/static/new_image/ring.png')"></image>-->
					<image class="icon-select" model="aspectFit" :src="require('@/static/new_image/select_icon.png')">
					</image>
				</view>
				<!-- 勾选按钮 -->
				<!-- 商品信息 -->
				<view class="car-item">
					<view class="goods-top">
						<view class="left">
							<view class="fold">满件折</view>
							<view class="desc">日用家居2件9折</view>
						</view>
						<view class="together">
							凑单<image :src="require('@/static/new_image/right_arrow.png')"></image>
						</view>
					</view>
					<view class="goods-center">
						<image class="goods-pic" model="aspectFit" :src="require('@/static/appicon/about.png')"></image>
						<view class="goods-item">
							<view class="goods-name">雷神911MP17.3英寸游戏笔记本电脑双十一低价特卖雷神911MP17.3英寸游戏笔记本电脑双十一低价特卖</view>
							<view class="goods-label">
								<view class="label-item">银灰色<image class="arrow"
										:src="require('@/static/new_image/down_arrow.png')"></image>
								</view>
								<view class="label-item">银灰色<image class="arrow"
										:src="require('@/static/new_image/top_arrow.png')"></image>
								</view>
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
				<!-- 商品信息 -->
			</view>
		</view>
		<!-- 购物车列表 -->

		<!-- 选择按钮 -->
		<view class="suspension">
			<view class="btn-txt">
				<image class="icon-select" model="aspectFit" :src="require('@/static/new_image/select_icon.png')">
				</image>
				<text class="all-txt">全选</text>
				<text :class="edit ? 'active' : ''" @click="edit = !edit">{{ edit ? '完成' : '编辑' }}</text>
			</view>
			<view class="btn-item">
				<view class="all-price">
					合计:<text class="shop-price">￥999.00</text>
				</view>
				<view class="all-btn">{{ edit ? '删除' : '结算(1)' }}</view>
			</view>
		</view>
		<!-- 选择按钮 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				edit: false,
			}
		},
		methods: {}
	}
</script>

<style lang="scss" scoped>
	.page-shop-car {
		font-size: 24rpx;
		padding: 20rpx 20rpx 110rpx;
		color: #333333;
		background-color: #F5F5F4;

		.shop-car {
			height: auto;
			padding: 25rpx 20rpx;
			border-radius: 20rpx;
			background-color: #ffffff;
			margin-bottom: 20rpx;

			.shop-item {
				width: 100%;
				height: auto;
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 40rpx;

				.select-icon {
					height: auto;
					width: 10%;
					display: flex;
					align-items: center;
					justify-content: center;

					.icon-select {
						width: 37rpx;
						height: 37rpx;
					}
				}

				.car-item {
					width: 90%;
					height: auto;

					.goods-top {
						width: 100%;
						height: 40rpx;
						margin-bottom: 20rpx;
						display: flex;
						align-items: center;
						justify-content: space-between;
						color: #FFB319;

						.left {
							height: 40rpx;
							display: flex;
							align-items: center;

							.fold {
								font-size: 20rpx;
								padding: 4rpx 7rpx;
								border: 1rpx solid #FFB319;
								border-radius: 8rpx;
							}

							.desc {
								margin-left: 20rpx;
								font-size: 24rpx;
								font-weight: 400;
								color: #333333;
							}
						}

						.together {
							font-size: 24rpx;
							color: #FFB319;
							display: flex;
							align-items: center;

							image {
								width: 9rpx;
								height: 16rpx;
								margin-left: 11rpx;
							}
						}
					}

					.goods-center {
						width: 100%;
						height: auto;
						display: flex;
						align-items: center;
						justify-content: space-between;

						.goods-pic {
							width: 170rpx;
							height: 170rpx;
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

									.arrow {
										margin-left: 20rpx;
										width: 10rpx;
										height: 7rpx;
									}
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
				}
			}
		}

		.suspension {
			position: fixed;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 108rpx;
			background: #FFFFFF;
			border-top: 1rpx solid #E4E4E4;
			display: flex;
			align-items: center;
			justify-content: center;

			.btn-txt {
				width: 34%;
				height: 108rpx;
				display: flex;
				align-items: center;
				font-size: 24rpx;
				font-weight: 500;
				color: #333333;

				.icon-select {
					margin-left: 44rpx;
					width: 36rpx;
					height: 36rpx;
				}

				.all-txt {
					margin: 0 20rpx;
				}
			}

			.btn-item {
				width: 66%;
				height: 108rpx;
				display: flex;
				align-items: center;
				justify-content: flex-end;

				.all-price {
					display: flex;
					align-items: center;
					font-size: 28rpx;
					font-weight: bold;
					color: #333333;

					.shop-price {
						font-size: 32rpx;
						font-weight: bold;
						color: #FFB319;
					}
				}

				.all-btn {
					min-width: 192rpx;
					background: #FFB319;
					border-radius: 50rpx;
					font-size: 32rpx;
					font-weight: bold;
					color: #FFFFFF;
					line-height: 76rpx;
					text-align: center;
					margin-right: 20rpx;
					margin-left: 20rpx;
				}
			}

			.active {
				color: #FFB319;
			}
		}
	}
</style>
