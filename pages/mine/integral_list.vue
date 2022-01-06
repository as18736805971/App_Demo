<template>
	<view class="class-index">
		<view class="class-list">
			<!-- 左侧导航 -->
			<view class="tab-list">
				<scroll-view scroll-y="true" class="tab-list">
					<view class="tab-item" :class="index === tab_index ? 'active' : ''"
						v-for="(item, index) in tab_list" :key="index" @click="handleTab(index)">
						{{ item }}
					</view>
				</scroll-view>
			</view>
			<!-- 左侧导航 -->

			<!-- 商品列表 -->
			<view class="goods-list">
				<!-- 导航 -->
				<base-ani-tab-bar :type="2" :listArr="top_list" :listActive="top_index" :background="'#ffffff'"
					@handleActive="handleTopTab">
				</base-ani-tab-bar>
				<!-- 导航 -->

				<!-- 商品 -->
				<scroll-view scroll-y="true" class="goods-scroll">
					<view class="goods-item">
						<view class="goods-info" v-for="(item, index) in 10" :key="index"
							@click="handleJump({type: './integral_detail'})">
							<view class="goods-pic">
								<image class="goods-pic" mode="scaleToFill"
									src="https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg">
								</image>
							</view>
							<view class="goods-name">神里绫华</view>
							<view class="goods-integral"><text>9</text>积分</view>
							<view class="goods-inventory">剩余库存：4765件</view>
						</view>
					</view>
				</scroll-view>
				<!-- 商品 -->
			</view>
			<!-- 商品列表 -->
		</view>
	</view>
</template>

<script>
	import BaseAniTabBar from '@/components/base/BaseAniTabBar'
	export default {
		components: {
			BaseAniTabBar,
		},
		data() {
			return {
				tab_index: 0,
				top_index: 0,
				tab_list: ['全部', '9积分区', '优惠券', '限定礼品', '为爱碰杯 ', '零食优选', '绿野生活', '摩拉克斯'],
				top_list: ['全部', '积分', '积分+现金']
			}
		},
		methods: {
			handleTab(index) {
				this.tab_index = index
			},
			handleTopTab(index) {
				this.top_index = index
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
	.class-index {
		font-size: 24rpx;
		color: #242424;
		background: #FFFFFF;

		.class-list {
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;
			height: 100vh;

			.tab-list {
				width: 190rpx;
				height: 100%;
				background: #f5f7f9;

				.tab-item {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 190rpx;
					height: 110rpx;
					font-size: 30rpx;
					color: #6f7274;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}

				.active {
					width: 186rpx;
					background: #ffffff;
					color: #b0d342;
					border-left: 4rpx solid #b0d342;
				}
			}

			.goods-list {
				width: 620rpx;
				height: 100%;

				.goods-scroll {
					width: 100%;
					height: calc(100% - 110rpx);

					.goods-item {
						padding: 0 25rpx;
						display: flex;
						align-items: center;
						justify-content: space-between;
						flex-wrap: wrap;

						.goods-info {
							width: 245rpx;
							height: auto;
							border-radius: 12rpx;
							overflow: hidden;
							margin-bottom: 20rpx;
							padding-bottom: 10rpx;
							box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);

							.goods-pic {
								width: 100%;
								height: 200rpx;
							}

							.goods-name {
								padding: 0 15rpx;
								height: 55rpx;
								line-height: 55rpx;
								color: #5c5f62;
								font-size: 28rpx;
								font-weight: bold;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
							}

							.goods-integral {
								padding: 0 15rpx;
								height: 40rpx;
								color: #a0a4a6;
								line-height: 40rpx;
								font-size: 24rpx;

								text {
									font-size: 26rpx;
									font-weight: bold;
									color: #b0d342;
									margin-right: 5rpx;
								}
							}

							.goods-inventory {
								padding: 0 15rpx;
								height: 40rpx;
								color: #a0a4a6;
								line-height: 40rpx;
								font-size: 22rpx;
							}
						}
					}
				}
			}
		}
	}
</style>
