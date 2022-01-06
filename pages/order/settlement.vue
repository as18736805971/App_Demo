<template>
	<view class="page-index">
		<view class="block-info">
			<view class="block-item between">
				<view class="invite-left align-items">
					<view class="shop-title align-items">你的眼里有星星门店<image class="shop-icon"
							:src="require('@/static/icon/right_arrow.png')"></image>
					</view>
					<view class="shop-desc">距离您2.7km，请确认下单门店是否正确</view>
				</view>
				<view class="invite-right">
					<view class="switch-item">
						<view class="switch" :class="take_type === 1 ? 'active' : ''"
							@click="handleTakeType('take_type', 1)">自取</view>
						<view class="switch" :class="take_type === 2 ? 'active' : ''"
							@click="handleTakeType('take_type', 2)">外卖</view>
					</view>
				</view>
			</view>
			<view class="block-item between">
				<view class="block-left">联系电话</view>
				<view class="block-right flex-end">18736805971</view>
			</view>
			<view class="block-item between">
				<view class="block-left">取餐时间</view>
				<view class="block-right flex-end active-txt">
					立即取餐<image class="shop-icon" :src="require('@/static/icon/right_arrow.png')"></image>
				</view>
			</view>
			<view class="block-item between">
				<view class="block-left line center" @click="handleTakeType('take_away', 1)">
					<template v-if="take_away === 1">
						<image class="select-icon" :src="require('@/static/icon/check.png')"></image>
					</template>
					<template v-else>
						<view class="select"></view>
					</template>
					店内堂食
				</view>
				<view class="block-right center" @click="handleTakeType('take_away', 2)">
					<template v-if="take_away === 2">
						<image class="select-icon" :src="require('@/static/icon/check.png')"></image>
					</template>
					<template v-else>
						<view class="select"></view>
					</template>
					打包带走
				</view>
			</view>
		</view>

		<view class="block-info" :class="goods_list.length > 3 ? '' : 'padding'">
			<view class="block-goods"
				v-for="(item, index) in goods_list.length > 3 && !more_show ? goods_list.slice(0, 3) : goods_list"
				:key="index">
				<view class="goods-left between">
					<view class="goods-name">{{ item.goods_name }}</view>
					<view class="goods-price">￥{{ item.goods_price }}</view>
				</view>
				<view class="goods-right between">
					<view class="goods-desc">{{ item.goods_desc }}</view>
					<view class="goods-num">x{{ item.goods_num }}</view>
				</view>
			</view>

			<view class="block-more center" @click="handleMoreShow()" v-if="goods_list.length > 3">
				<template v-if="more_show">
					收起<image class="more-icon" :src="require('@/static/icon/top_arrow.png')"></image>
				</template>
				<template v-else>
					展开更多详情<image class="more-icon" :src="require('@/static/icon/under_arrow.png')"></image>
				</template>
			</view>
		</view>

		<view class="block-info top">
			<view class="triangle"></view>
			<view class="triangle-txt">热卖</view>
			<view class="block-item-float between" @click="handleJump({type: '../mine/member_stored'})">
				<view class="float-txt">限时储值单品免费券</view>
				<view class="float-image active-txt">
					立即购买<image class="float-icon" :src="require('@/static/icon/right_arrow.png')"></image>
				</view>
			</view>
			<view class="block-item between">
				<view class="block-left align-items">
					<view class="block-txt">券</view>优惠券
				</view>
				<view class="block-right flex-end no-txt">暂无可用</view>
			</view>
			<view class="block-item between">
				<view class="block-left align-items">
					<view class="block-txt">卡</view>礼品卡
				</view>
				<view class="block-right flex-end no-txt">暂无可用礼品卡</view>
			</view>
			<view class="block-item flex-end">
				<view class="preferential center">已优惠<text class="price">￥0.00</text></view>
				<view class="cope-with center">应付<text class="price active-txt">￥27.00</text></view>
			</view>
		</view>

		<view class="block-info padding">
			<view class="pay-type align-items">支付方式</view>
			<view class="pay-item">
				<view class="left">
					<view class="icon-pay">
						<image class="icon-pay-wx" :src="require('@/static/icon/wx_pay.png')"></image>
					</view>
					微信
				</view>
				<view class="right">
					<image class="icon-pay" :src="require('@/static/icon/check.png')"></image>
				</view>
			</view>
		</view>

		<view class="block-info padding">
			<view class="note-item between" @click="handleJump({type: './note?note=' + note })">
				<view class="note">备注</view>
				<view class="note-desc">{{ note === '' ? '点击填写备注' : note }}</view>
				<image class="note-icon" :src="require('@/static/icon/right_arrow.png')"></image>
			</view>
		</view>

		<view class="floating between">
			<view class="pay-price align-items">
				<view class="align-items">待支付<view class="all-price">￥122.00</view>
				</view>
			</view>
			<view class="pay-btn center">付款</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				take_type: 1, // 1自取 2外卖
				take_away: 1, // 1店内堂食 2打包带走
				more_show: false, // 展开更多
				note: '', // 备注
				goods_list: [{
						id: 1,
						goods_name: '霸气芝士葡萄',
						goods_desc: '标准(冰沙)/标准甜(推荐)/标准(芝士)/金观音/不分装 PLA可降解吸管',
						goods_price: '28.00',
						goods_num: 1,
					},
					{
						id: 2,
						goods_name: '霸气黑桑葚',
						goods_desc: '标准(冰沙)/标准甜(推荐)/茉莉花 PLA可降解吸管',
						goods_price: '29.00',
						goods_num: 1,
					},
					{
						id: 3,
						goods_name: '霸气火炬车厘子',
						goods_desc: '标准冰(冰沙)/标准甜(推荐)/金观音(果香味) PLA可降解吸管',
						goods_price: '38.00',
						goods_num: 1,
					},
					{
						id: 4,
						goods_name: '热厚厚芋泥宝藏茶',
						goods_desc: '热/标准甜(推荐)/标准(奶油顶)/金色山脉 PLA可降解吸管',
						goods_price: '28.00',
						goods_num: 1,
					},
				]
			}
		},
		onShow() {
			uni.$off('setNote')
			uni.$on('setNote', (res) => {
				this.note = res.note
			})
		},
		methods: {
			// 点击配送状态
			handleTakeType(name, type) {
				this[name] = type
			},
			// 展开更多
			handleMoreShow() {
				this.more_show = !this.more_show
			},
			// 页面跳转
			handleJump(link) {
				uni.navigateTo({
					url: link.type
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
	.page-index {
		padding: 20rpx 20rpx 120rpx;
		font-size: 24rpx;
		color: #242424;

		.between {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.align-items {
			display: flex;
			align-items: center;
		}

		.center {
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.flex-end {
			display: flex;
			align-items: center;
			justify-content: flex-end;
		}

		.active-txt {
			color: #b0d342;
		}

		.no-txt {
			color: #a0a4a6;
		}

		.block-info {
			position: relative;
			height: auto;
			padding: 20rpx 30rpx 0;
			margin-bottom: 20rpx;
			border-radius: 12rpx;
			background-color: #FFFFFF;
			box-shadow: 0 0 2rpx rgba(0, 0, 0, 0.1);
			overflow: hidden;

			.triangle {
				position: absolute;
				z-index: 10;
				top: 0;
				left: 0;
				width: 0;
				height: 0;
				border-top: 60rpx solid #f5c446;
				border-right: 60rpx solid transparent;
			}

			.triangle-txt {
				position: absolute;
				z-index: 11;
				top: 8rpx;
				left: 5rpx;
				font-size: 18rpx;
				color: #FFFFFF;
				transform: rotate(-45deg);
			}

			.block-item-float {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 80rpx;
				background-color: #fef9ea;

				.float-txt {
					margin-left: 70rpx;
					font-size: 24rpx;
					font-weight: bold;
				}

				.float-icon {
					width: 20rpx;
					height: 20rpx;
					margin-left: 10rpx;
					margin-right: 30rpx;
				}
			}

			.block-item {
				width: 100%;
				height: 110rpx;
				border-bottom: 2rpx solid #e2e4e6;

				.line {
					border-right: 2rpx solid #e2e4e6;
				}

				.shop-icon {
					width: 20rpx;
					height: 20rpx;
					margin-left: 10rpx;
				}

				.select {
					width: 31rpx;
					height: 31rpx;
					border-radius: 50%;
					border: 2rpx solid #e2e4e6;
					margin-right: 15rpx;
				}

				.select-icon {
					width: 35rpx;
					height: 35rpx;
					margin-right: 15rpx;
				}

				.block-txt {
					width: 40rpx;
					height: 40rpx;
					font-size: 28rpx;
					text-align: center;
					line-height: 40rpx;
					color: #FFFFFF;
					border-radius: 10rpx;
					background-color: #b0d342;
					margin-right: 15rpx;
				}

				.invite-left {
					width: 70%;
					height: 80rpx;
					flex-wrap: wrap;

					.shop-title {
						height: 40rpx;
						line-height: 40rpx;
						font-size: 28rpx;
						font-weight: bold;
						color: #242524;
					}

					.shop-desc {
						height: 40rpx;
						line-height: 40rpx;
						font-size: 24rpx;
						color: #acafb1;
					}
				}

				.invite-right {
					width: 30%;
					height: 110rpx;
					display: flex;
					align-items: center;
					justify-content: flex-end;

					.switch-item {
						height: 60rpx;
						width: 180rpx;
						padding: 1rpx 4rpx;
						border-radius: 50rpx;
						background-color: #f5f5f5;
						display: flex;
						align-items: center;
						justify-content: space-between;

						.switch {
							height: 54rpx;
							width: 90rpx;
							font-size: 24rpx;
							color: #676a69;
							display: flex;
							align-items: center;
							justify-content: center;
						}

						.active {
							color: #FFFFFF;
							border-radius: 50rpx;
							background-color: #242524;
						}
					}
				}

				.block-left {
					width: 50%;
					height: 110rpx;
					line-height: 110rpx;
					font-size: 28rpx;
				}

				.block-right {
					width: 50%;
					height: 110rpx;
					font-size: 28rpx;
				}

				.preferential {
					font-size: 24rpx;
					color: #242524;

					.price {
						margin-left: 5rpx;
						font-size: 28rpx;
						font-weight: bold;
					}
				}

				.cope-with {
					margin-left: 30rpx;
					font-size: 24rpx;
					color: #242524;

					.price {
						margin-left: 5rpx;
						font-size: 28rpx;
						font-weight: bold;
					}
				}
			}

			.block-item:last-child {
				border-bottom: none;
			}

			.block-goods {
				width: 100%;
				height: auto;
				margin-bottom: 20rpx;

				.goods-left {
					height: 60rpx;
					font-size: 28rpx;

					.goods-name {
						width: 70%;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}

					.goods-price {
						width: 30%;
						text-align: right;
						font-weight: bold;
					}
				}

				.goods-right {
					height: auto;
					align-items: flex-start !important;
					font-size: 24rpx;

					.goods-desc {
						width: 85%;
						color: #a4a8aa;
					}

					.goods-num {
						width: 15%;
						text-align: right;
						color: #242524;
					}
				}
			}

			.block-goods:last-child {
				margin-bottom: 0;
			}

			.block-more {
				height: 80rpx;
				font-size: 24rpx;
				color: #242524;

				.more-icon {
					width: 25rpx;
					height: 25rpx;
					margin-left: 10rpx;
				}
			}

			.pay-type {
				height: 80rpx;
				font-size: 28rpx;
				font-weight: bold;
			}

			.pay-item {
				display: flex;
				align-items: center;
				justify-content: space-between;
				height: 80rpx;

				.left {
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 30rpx;

					.icon-pay {
						border-radius: 50%;
						width: 45rpx;
						height: 45rpx;
						margin-right: 10rpx;
						background-color: #83c93d;
						display: flex;
						align-items: center;
						justify-content: center;

						.icon-pay-wx {
							width: 25rpx;
							height: 25rpx;
						}
					}
				}

				.right {
					display: flex;
					align-items: center;
					justify-content: flex-end;

					.icon-pay {
						border-radius: 50%;
						width: 35rpx;
						height: 35rpx;
					}
				}
			}

			.note-item {
				height: 60rpx;

				.note {
					width: 100rpx;
					height: 60rpx;
					font-size: 28rpx;
					line-height: 60rpx;
				}

				.note-desc {
					width: 516rpx;
					height: 60rpx;
					font-size: 24rpx;
					color: #76787a;
					line-height: 60rpx;
					text-align: right;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}

				.note-icon {
					margin-left: 10rpx;
					width: 25rpx;
					height: 25rpx;
				}
			}
		}

		.padding {
			padding-bottom: 20rpx !important;
		}

		.top {
			padding-top: 80rpx !important;
		}

		.floating {
			position: fixed;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 120rpx;
			background-color: #FFFFFF;

			.pay-price {
				width: 70%;
				height: 120rpx;
				margin-left: 30rpx;
				font-size: 24rpx;

				.all-price {
					font-size: 32rpx;
					font-weight: bold;
					margin-left: 5rpx;
				}
			}

			.pay-btn {
				width: 30%;
				height: 120rpx;
				font-size: 28rpx;
				background-color: #b0d342;
			}
		}
	}
</style>
