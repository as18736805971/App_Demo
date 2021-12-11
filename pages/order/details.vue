<template>
	<view class="page-index">
		<!-- 订单状态 -->
		<view class="order-status">
			<view class="status-txt">
				订单{{ detail.status === 1 ? '待支付' : detail.status === 2 ? '已支付' : detail.status === 3 ? '待取单' : detail.status === 4 ? '已取单' : detail.status === 5 ? '订单已完成' : '已取消' }}
			</view>
			<view class="status-desc">
				{{ detail.status === 1 ? '订单待支付，请支付订单' : detail.status === 2 ? '订单已支付，请等待收取订单' : detail.status === 3 ? '待取订单，请抓紧时间取单' : detail.status === 4 ? '已取单，欢迎下次光临' : detail.status === 5 ? '订单已完成，欢迎下次光临' : '订单未支付，您已取消订单' }}
			</view>
		</view>
		<!-- 订单状态 -->

		<!-- 商品详情 -->
		<view class="goods-list">
			<view class="name">{{ detail.order_name }}</view>
			<view class="line"></view>
			<view class="goods">
				<view class="goods-item" v-for="(item, index) in goods_list" :key="index">
					<view class="left">
						<image class="image" :src="item.pic">
						</image>
						<view class="goods-name">{{ item.name }}</view>
					</view>
					<view class="right">
						<view class="goods-price">￥{{ item.price }}</view>
						<view class="goods-num">x{{ item.num }}</view>
					</view>
				</view>
			</view>

			<template v-if="more_status">
				<view class="more" @click="handleShrinkage(false)">
					展开更多详情<image class="more-icon" :src="require('@/static/icon/under_arrow.png')"></image>
				</view>
			</template>
			<template v-else>
				<view class="more" @click="handleShrinkage(true)">
					收起<image class="more-icon" :src="require('@/static/icon/top_arrow.png')"></image>
				</view>
			</template>
		</view>
		<!-- 商品详情 -->

		<!-- 订单价格 -->
		<view class="order-price">
			<view class="item">
				<view class="txt">实付</view>
				<view class="val">￥{{ detail.order_price }}</view>
			</view>
		</view>
		<!-- 订单价格 -->

		<!-- 订单信息 -->
		<view class="order-price">
			<view class="item">
				<view class="txt">下单时间</view>
				<view class="val">{{ detail.order_time }}</view>
			</view>
			<view class="item">
				<view class="txt">订单号</view>
				<view class="val">
					{{ detail.order_no }}
					<view class="copy" @click="handleCopy(detail.order_no)">复制</view>
				</view>
			</view>
			<view class="item-remark">
				<view class="txt">备注</view>
				<view class="val">{{ detail.remark === '' ? '无' : detail.remark }}</view>
			</view>
		</view>
		<!-- 订单信息 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 0,
				more_status: true,
				detail: {
					id: 1,
					order_name: '礼品卡',
					order_no: 'P45120022120132301',
					order_price: '1857.00',
					order_time: '2021-12-11 14:48:25',
					remark: '',
					status: 1, // 0 已取消 1待支付 2已支付 3待取单 4已取单 5订单已完成
					goods_list: [{
							id: 1,
							name: '心意卡',
							num: 1,
							price: '58.00',
							pic: 'https://dev6.sssvip.net/addons/yb_guanwangv2/core/public/images/miniapp/background.png',
						},
						{
							id: 1,
							name: '心意卡',
							num: 1,
							price: '58.00',
							pic: 'https://dev6.sssvip.net/addons/yb_guanwangv2/core/public/images/miniapp/background.png',
						},
						{
							id: 1,
							name: '心意卡',
							num: 1,
							price: '58.00',
							pic: 'https://dev6.sssvip.net/addons/yb_guanwangv2/core/public/images/miniapp/background.png',
						},
						{
							id: 1,
							name: '心意卡',
							num: 1,
							price: '58.00',
							pic: 'https://dev6.sssvip.net/addons/yb_guanwangv2/core/public/images/miniapp/background.png',
						},
						{
							id: 1,
							name: '心意卡',
							num: 1,
							price: '58.00',
							pic: 'https://dev6.sssvip.net/addons/yb_guanwangv2/core/public/images/miniapp/background.png',
						},
						{
							id: 1,
							name: '心意卡',
							num: 1,
							price: '58.00',
							pic: 'https://dev6.sssvip.net/addons/yb_guanwangv2/core/public/images/miniapp/background.png',
						},
					]
				}
			}
		},
		computed: {
			goods_list() {
				if (this.more_status) {
					return this.detail.goods_list.slice(0, 3)
				} else {
					return this.detail.goods_list
				}
			}
		},
		onLoad(e) {
			console.log(e, '11')
			this.id = e.id
		},
		methods: {
			// 收缩
			handleShrinkage(status) {
				this.more_status = status
			},
			// 复制
			handleCopy(data) {
				uni.setClipboardData({
					data: data,
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page-index {
		padding: 20rpx;
		font-size: 24rpx;
		color: #242524;

		.order-status {
			padding: 40rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			border-radius: 12rpx;
			background-color: #FFFFFF;
			margin-bottom: 10rpx;

			.status-txt {
				height: 60rpx;
				line-height: 60rpx;
				font-size: 36rpx;
				font-weight: bold;
			}

			.status-desc {
				height: 50rpx;
				line-height: 50rpx;
			}
		}

		.goods-list {
			position: relative;
			padding: 30rpx 30rpx 10rpx;
			border-radius: 12rpx;
			background-color: #FFFFFF;
			margin-bottom: 10rpx;

			.name {
				height: 110rpx;
				line-height: 110rpx;
				font-size: 32rpx;
				font-weight: bold;
			}

			.line {
				border-bottom: 2rpx dashed #e2e4e6;
			}

			.goods {
				padding-top: 30rpx;
				height: auto;

				.goods-item {
					height: 110rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin-bottom: 20rpx;

					.left {
						height: 110rpx;
						display: flex;
						align-items: flex-start;

						.goods-name {
							font-size: 28rpx;
							font-weight: bold;
							margin-left: 10rpx;
						}

						.image {
							border-radius: 6rpx;
							width: 180rpx;
							height: 110rpx;
						}
					}

					.right {
						height: 110rpx;
						display: flex;
						flex-direction: column;
						align-content: space-between;

						.goods-price {
							font-size: 26rpx;
							font-weight: bold;
							margin-bottom: 30rpx;
						}

						.goods-num {
							text-align: right;
							color: #a1a5a7;
						}
					}
				}

				.goods-item:last-child {
					margin-bottom: 0;
				}
			}

			.more {
				height: 60rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #999999;

				.more-icon {
					margin-left: 10rpx;
					width: 30rpx;
					height: 30rpx;
				}
			}
		}

		.goods-list::after {
			position: absolute;
			left: -14rpx;
			top: 125rpx;
			content: '';
			width: 30rpx;
			height: 30rpx;
			border-radius: 0 50% 50% 0;
			background-color: #f3f4f4;
		}

		.goods-list::before {
			position: absolute;
			right: -14rpx;
			top: 125rpx;
			content: '';
			width: 30rpx;
			height: 30rpx;
			border-radius: 50% 0 0 50%;
			background-color: #f3f4f4;
		}

		.order-price {
			padding: 26rpx 30rpx;
			border-radius: 12rpx;
			background-color: #FFFFFF;
			margin-bottom: 10rpx;

			.item {
				height: 40rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 20rpx;

				.txt {
					width: 400rpx;
				}

				.val {
					display: flex;
					align-items: center;
					justify-content: flex-end;
				}

				.copy {
					margin-left: 10rpx;
					width: 80rpx;
					height: 40rpx;
					text-align: center;
					line-height: 40rpx;
					border-radius: 8rpx;
					border: 2rpx solid #a0a4a6;
				}
			}

			.item:last-child {
				margin-bottom: 0;
			}

			.item-remark {
				min-height: 40rpx;
				display: flex;
				justify-content: space-between;

				.txt {
					width: 400rpx;
				}

				.val {
					display: flex;
					align-items: center;
					justify-content: flex-end;
				}
			}
		}
	}
</style>
