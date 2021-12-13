<template>
	<view class="page-index">
		<!-- 导航栏 -->
		<base-ani-tab-bar :listArr="list" :listActive="active_index" :background="'#ffffff'" @handleActive="handleTab">
		</base-ani-tab-bar>
		<!-- 导航栏 -->

		<!-- 历史订单导航 -->
		<template v-if="active_index === 1">
			<view class="history-tab">
				<base-ani-tab-bar :type="2" :listArr="history_list" :listActive="history_index"
					@handleActive="handleHistoryTab">
				</base-ani-tab-bar>
			</view>
		</template>
		<!-- 历史订单导航 -->

		<!-- 订单列表 -->
		<view class="order-list" :class="active_index === 0 ? '' : 'margin-top'" v-if="order_list.length !== 0">
			<view class="order-item" v-for="(item, index) in order_list" :key="index" @click="handleOrderDetails(item)">
				<view class="top">
					<view class="order-name">{{ item.name }}</view>
					<view class="order-status">
						{{ item.status === 1 ? '待支付' : item.status === 2 ? '已支付' : item.status === 3 ? '待取单' : item.status === 4 ? '已取单' : item.status === 5 ? '订单已完成' : '已取消' }}
						<image class="right-icon" :src="require('@/static/icon/right_arrow.png')"></image>
					</view>
				</view>
				<view class="date">下单时间：{{ item.order_time }}</view>
				<view class="line"></view>
				<view class="images">
					<view class="left">
						<image v-for="(vv, kk) in item.goods_list.slice(0, 3)" :key="kk" class="left-icon"
							:src="vv.pic"></image>
					</view>
					<view class="right">
						<view class="total">共{{ item.goods_list.length }}件</view>
						<view class="price">实付<span>￥{{ item.price }}</span></view>
					</view>
				</view>
			</view>
		</view>
		<view class="no-data" v-else>
			<image class="no-icon" mode="aspectFit" :src="require('@/static/image/no-data.png')"></image>
			<view class="no-txt">
				<view class="txt">您还没有点餐</view>
				<view class="txt">快去犒劳一下自己吧~</view>
			</view>
			<view class="btn" @click="onSubmit()">去点餐</view>
		</view>
		<!-- 订单列表 -->
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
				list: ['当前订单', '历史订单'], // 选项卡列表
				history_list: ['全部', '自取', '外卖'], // 选项卡列表
				active_index: 0,
				history_index: 0,
				order_list: [],
			}
		},
		onLoad() {
			this.handleOrderData()
		},
		methods: {
			// 切换
			handleTab(index) {
				this.active_index = index
				this.handleOrderData()
			},
			// 历史订单切换
			handleHistoryTab(index) {
				this.history_index = index
				this.handleOrderData()
			},
			// 订单列表数据
			handleOrderData() {
				if (this.active_index === 0) {
					this.order_list = []
				} else {
					if (this.history_index === 0 || this.history_index === 1) {
						this.order_list = [{
							id: 1,
							name: '礼品卡',
							status: 1, // 0 已取消 1待支付 2已支付 3待取单 4已取单 5订单已完成
							order_time: '2021-12-11 11:50:23',
							price: '1057.59',
							goods_list: [{
									pic: 'https://dev6.sssvip.net/addons/yb_guanwangv2/core/public/images/miniapp/background.png',
								},
								{
									pic: 'https://dev6.sssvip.net/addons/yb_guanwangv2/core/public/images/miniapp/background.png',
								},
								{
									pic: 'https://dev6.sssvip.net/addons/yb_guanwangv2/core/public/images/miniapp/background.png',
								}
							],
						}, {
							id: 2,
							name: '餐饮卡',
							status: 1, // 0 已取消 1待支付 2已支付 3待取单 4已取单 5订单已完成
							order_time: '2021-12-11 11:50:23',
							price: '1057.59',
							goods_list: [{
								pic: 'https://dev6.sssvip.net/addons/yb_guanwangv2/core/public/images/miniapp/background.png',
							}],
						}, {
							id: 3,
							name: '餐饮卡',
							status: 1, // 0 已取消 1待支付 2已支付 3待取单 4已取单 5订单已完成
							order_time: '2021-12-11 11:50:23',
							price: '1057.59',
							goods_list: [{
									pic: 'https://dev6.sssvip.net/addons/yb_guanwangv2/core/public/images/miniapp/background.png',
								},
								{
									pic: 'https://dev6.sssvip.net/addons/yb_guanwangv2/core/public/images/miniapp/background.png',
								},
							],
						}]
					} else {
						this.order_list = []
					}
				}
			},
			// 订单详情
			handleOrderDetails(data) {
				uni.navigateTo({
					url: './details?id=' + data.id
				});
			},
			// 去点餐
			onSubmit() {
				uni.switchTab({
					url: '/pages/list/index'
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
	.page-index {
		width: 100%;
		font-size: 24rpx;
		color: #242424;
		padding-top: 110rpx;

		.history-tab {
			width: 100%;
			position: fixed;
		}

		.order-list {
			padding: 20rpx 30rpx;
			height: auto;

			.order-item {
				height: auto;
				padding: 30rpx;
				background-color: #FFFFFF;
				border-radius: 12rpx;
				margin-bottom: 20rpx;
				box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);

				.top {
					height: 50rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					color: #2d2d2c;

					.order-name {
						height: 50rpx;
						line-height: 50rpx;
						width: 50%;
						font-size: 32rpx;
						font-weight: bold;
					}

					.order-status {
						width: 50%;
						height: 50rpx;
						display: flex;
						align-items: center;
						justify-content: flex-end;

						.right-icon {
							width: 20rpx;
							height: 20rpx;
							margin-left: 10rpx;
						}
					}
				}

				.date {
					height: 40rpx;
					line-height: 40rpx;
					color: #a0a4a6;
				}

				.line {
					margin: 20rpx 0;
					border-bottom: 2rpx dashed #e2e4e6;
				}

				.images {
					height: 100rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;

					.left {
						display: flex;
						align-items: center;

						.left-icon {
							width: 140rpx;
							height: 100rpx;
							margin-right: 10rpx;
							border-radius: 12rpx;
						}

						.left-icon:last-child {
							margin-right: 0;
						}
					}

					.right {
						width: 180rpx;
						display: flex;
						align-items: center;
						justify-content: flex-end;
						flex-direction: column;
						height: 100rpx;

						.total {
							width: 180rpx;
							height: 50rpx;
							line-height: 50rpx;
							color: #a2a6a8;
							text-align: right;
						}

						.price {
							width: 180rpx;
							height: 50rpx;
							line-height: 50rpx;
							color: #585757;
							display: flex;
							align-items: center;
							justify-content: flex-end;

							span {
								margin-left: 10rpx;
								font-weight: bold;
								color: #242524;
							}
						}
					}
				}
			}
		}

		.margin-top {
			margin-top: 100rpx;
		}

		.no-data {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			height: 600rpx;

			.no-icon {
				width: 250rpx;
				height: 250rpx;
			}

			.no-txt {
				margin-top: 30rpx;
				color: #707274;

				.txt {
					height: 40rpx;
					text-align: center;
					line-height: 40rpx;
				}
			}

			.btn {
				margin-top: 40rpx;
				width: 250rpx;
				height: 70rpx;
				background-color: #b0d342;
				border-radius: 50rpx;
				color: #242524;
				line-height: 70rpx;
				text-align: center;
				font-weight: bold;
			}
		}
	}
</style>
