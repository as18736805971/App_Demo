<template>
	<view class="goods-more">
		<view class="more-title">
			<view class="line"></view>
			<view class="title">更多精选商品</view>
			<view class="line"></view>
		</view>
		<view class="goods-list">
			<view class="goods-item" v-for="(item, index) in 9" :key="index">
				<view class="goods-img">
					<image class="pic-img" mode="aspectFit" :src="require('@/static/appicon/help.png')"></image>
				</view>
				<view class="goods-content">
					<view class="title name">正和白酒 酱香56度</view>
					<view class="desc name">方便携带，免拆磁吸充电，快速方便携带，免拆磁吸充电，快速</view>
					<view class="price">
						<view class="price-txt">
							￥<span>199</span>
						</view>
						<view class="price-icon">
							<image class="icon-shop" :src="require('@/static/appicon/help.png')"></image>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.goods-more {
		background-color: #F4F4F4;

		.more-title {
			height: 80rpx;
			display: flex;
			align-items: center;
			justify-content: center;

			.title {
				font-size: 28rpx;
				font-weight: 500;
				color: #252020;
				margin: 0 20rpx;
			}

			.line {
				width: 162rpx;
				height: 1rpx;
				background: #E4E2E2;
			}
		}

		.goods-list {
			padding: 20rpx 20rpx;
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			justify-content: space-between;

			.goods-item {
				width: 48%;
				height: auto;
				margin-bottom: 20rpx;
				border-radius: 16rpx;
				overflow: hidden;
				background-color: #FFFFFF;

				.goods-img {
					width: 100%;
					height: 345rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					overflow: hidden;

					.pic-img {}
				}

				.goods-content {
					margin-top: 10rpx;
					height: 160rpx;
					padding: 0 20rpx;

					.title {
						height: 48rpx;
						font-size: 28rpx;
						font-weight: 500;
						color: #252020;
						line-height: 48rpx;
					}

					.desc {
						height: 30rpx;
						font-size: 24rpx;
						font-weight: 400;
						color: #666666;
						line-height: 30rpx;
						margin-bottom: 23rpx;
					}

					.name {
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}

					.price {
						height: 40rpx;
						display: flex;
						align-items: center;
						justify-content: space-between;

						.price-txt {
							font-size: 24rpx;
							color: #F92415;

							span {
								font-size: 32rpx;
							}
						}

						.price-icon {
							width: 36rpx;
							height: 36rpx;

							.icon-shop {
								width: 36rpx;
								height: 36rpx;
							}
						}
					}
				}
			}
		}
	}
</style>
