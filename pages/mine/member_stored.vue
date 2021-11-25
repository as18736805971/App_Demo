<template>
	<view class="page-index">
		<!-- 封面图 -->
		<view class="cover">
			<view class="account">账户余额 (元)</view>
			<view class="account-price">{{ userInfo.price }}</view>
			<view class="record">
				<view class="text">交易记录</view>
				<image class="icon-arrow" :src="require('@/static/icon/right_arrow1.png')"></image>
			</view>
		</view>
		<!-- 封面图 -->

		<!-- 价格选项 -->
		<view class="select-price">
			<view class="price-item" :class="price_index === index ? 'price-active' : ''"
				v-for="(item, index) in price_list" :key="index" @click="handlePrice(item, index)">
				<view class="hot" v-if="item.hot">HOT</view>
				<view class="price" :class="price_index === index ? 'active' : ''">{{ item.price }}
					<view>元</view>
				</view>
				<view class="line" :class="price_index === index ? 'line-active' : ''"></view>
				<view class="desc" :class="price_index === index ? 'active' : ''">
					<view>{{ item.unit }}</view>
					<span>{{ item.desc }}*{{ item.num }}</span>
				</view>
			</view>
		</view>
		<!-- 价格选项 -->

		<!-- 使用说明 -->
		<view class="directions">
			<view class="title">使用说明</view>
			<view class="desc">
				<base-rich-text :content="desc"></base-rich-text>
			</view>
		</view>
		<!-- 使用说明 -->

		<!-- 悬浮按钮 -->
		<view class="suspend-button">
			<view class="top" @click.stop="handleAgreement()">
				<template v-if="agreement">
					<image class="icon-check" :src="require('@/static/icon/check.png')"></image>
				</template>
				<template v-else>
					<view class="round"></view>
				</template>
				<view class="agreement">我已阅读并同意<span>《会员储值协议》</span></view>
			</view>
			<view class="btn" @click="handleOnSubmit()">立即储值</view>
		</view>
		<!-- 悬浮按钮 -->

		<!-- 支付弹窗 -->
		<base-modal ref="pay">
			<view class="pay-model">
				<view class="pay-price">
					<view>￥</view>{{ price }}
				</view>
				<view class="pay-title">支付方式</view>
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
				<view class="pay-btn" @click="handlePay()">
					确认支付
				</view>
			</view>
		</base-modal>
		<!-- 支付弹窗 -->
	</view>
</template>

<script>
	import BaseModal from '@/components/base/BaseModal'
	import BaseRichText from '@/components/base/BaseRichText'

	export default {
		components: {
			BaseModal,
			BaseRichText,
		},
		data() {
			return {
				userInfo: {
					price: '998.00',
				},
				price: '0.00',
				agreement: false, // 勾选协议
				price_index: -1, // 选择价格索引
				price_list: [{
						id: 1,
						price: '100',
						desc: '单品免费券',
						num: 1,
						unit: '赠',
						hot: true,
					},
					{
						id: 2,
						price: '200',
						desc: '5元代金券',
						num: 1,
						unit: '赠',
						hot: false,
					},
					{
						id: 3,
						price: '300',
						desc: '第2件半价券',
						num: 1,
						unit: '赠',
						hot: false,
					},
					{
						id: 4,
						price: '500',
						desc: '第2件半价券',
						num: 3,
						unit: '赠',
						hot: false,
					},
				],
				desc: '<p>1.储值金额不可提现、不计利息、不可转赠；<br/>2.储值金额可在其他门店出示会员码，或在小程序支付时使用；<br/>3.特别注意：<br/>储值赠券有效期为30天，可在门店出示会员码或在小程序可兑换商品一件，限33元及以下商品，单个订单中购买多件商品抵扣最低价格商品，请在有效期内核销，逾期失效；<br/>4.开票说明：储值订单不支持开票，开具类型为预付卡；使用储值消费的订单储值部分不支持开票。</p>'
			}
		},
		methods: {
			// 勾选协议
			handleAgreement() {
				this.agreement = !this.agreement
			},
			// 选择价格储值
			handlePrice(data, index) {
				if (this.price_index === index) {
					this.price_index = -1
					this.price = 0.00
				} else {
					this.price_index = index
					this.price = data.price + '.00'
				}
			},
			// 支付弹窗
			handleOnSubmit() {
				if (!this.agreement) {
					uni.showToast({
						title: '请勾选《会员储值协议》',
						icon: 'none',
						duration: 1500
					});
				} else {
					if (this.price_index === -1) {
						uni.showToast({
							title: '请选择储值金额',
							icon: 'none',
							duration: 1500
						});
					} else {
						this.$refs.pay.handleShowModal()
					}
				}
			},
			// 支付
			handlePay() {
				uni.showToast({
					title: '支付成功',
					duration: 1500
				});
				this.userInfo.price = parseInt(this.userInfo.price) + parseInt(this.price)
				this.userInfo.price = this.userInfo.price.toFixed(2)
				setTimeout(() => {
					this.$refs.pay.handleHiddenModal()
				}, 1000)
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #FFFFFF !important;
	}

	.page-index {
		width: 100%;
		min-height: 100vh;
		font-size: 24rpx;
		color: #242424;

		.cover {
			position: relative;
			height: 350rpx;
			background-color: #fbfbe3;

			.account {
				position: absolute;
				top: 50rpx;
				left: 40rpx;
				font-size: 26rpx;
				font-weight: bold;
			}

			.account-price {
				position: absolute;
				top: 100rpx;
				left: 40rpx;
				font-size: 60rpx;
				font-weight: bold;
			}

			.record {
				position: absolute;
				left: 40rpx;
				bottom: 50rpx;
				color: #b7c66b;
				font-size: 26rpx;
				display: flex;
				align-items: center;

				.text {
					height: 40rpx;
					border-bottom: 1rpx solid #b7c66b;
					margin-right: 10rpx;
				}

				.icon-arrow {
					width: 24rpx;
					height: 24rpx;
				}
			}
		}

		.select-price {
			padding: 40rpx 40rpx 20rpx 40rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			flex-wrap: wrap;
			background-color: #FFFFFF;

			.price-item {
				width: 45%;
				height: 174rpx;
				background-color: #f5f5f5;
				border-radius: 12rpx;
				margin-bottom: 20rpx;
				display: flex;
				align-items: center;
				flex-direction: column;
				justify-content: center;
				position: relative;

				.hot {
					position: absolute;
					top: 0;
					left: 0;
					width: 64rpx;
					height: 36rpx;
					line-height: 36rpx;
					text-align: center;
					font-size: 24rpx;
					color: #FFFFFF;
					background-color: #ecac54;
					border-top-left-radius: 8rpx;
					border-bottom-right-radius: 8rpx;
				}

				.price {
					margin-top: 20rpx;
					font-size: 40rpx;
					font-weight: bold;
					display: flex;
					align-items: center;
					justify-content: center;

					view {
						margin-top: 10rpx;
						margin-left: 10rpx;
						font-size: 24rpx;
					}
				}

				.line {
					width: 100%;
					height: 1rpx;
					margin-top: 25rpx;
					margin-bottom: 20rpx;
					background-color: #e4e4e6;
				}

				.desc {
					width: 100%;
					height: 30rpx;
					font-size: 24rpx;
					color: #a1a2a4;
					display: flex;
					align-items: center;
					justify-content: center;
					margin-bottom: 20rpx;

					view {
						margin-right: 10rpx;
					}
				}

				.active {
					color: #f3cc63;
				}

				.line-active {
					width: 50%;
					background-color: #f3cc63;
				}
			}

			.price-active {
				height: 170rpx;
				border: 4rpx solid #ecac54;
			}
		}

		.directions {
			padding: 0 40rpx;
			background-color: #FFFFFF;
			margin-bottom: 180rpx;

			.title {
				height: 40rpx;
				line-height: 40rpx;
				text-align: left;
				font-size: 26rpx;
				font-weight: bold;
				margin-bottom: 20rpx;
			}

			.desc {
				height: auto;
				font-size: 24rpx !important;
				color: #808082;
			}
		}

		.suspend-button {
			position: fixed;
			left: 0;
			bottom: 0;
			width: 100%;
			height: auto;
			z-index: 99;
			background-color: #FFFFFF;
			padding: 20rpx 0 30rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;

			.top {
				width: 90%;
				height: 40rpx;
				font-size: 24rpx;
				margin-bottom: 20rpx;
				color: #6f7072;
				display: flex;
				align-items: center;

				.round {
					width: 28rpx;
					height: 28rpx;
					border-radius: 50%;
					border: 1rpx solid #c3c4c6;
				}

				.icon-check {
					width: 30rpx;
					height: 30rpx;
					border-radius: 50%;
				}

				.agreement {
					margin-left: 10rpx;
				}

				span {
					color: #b0d341;
				}
			}

			.btn {
				width: 90%;
				height: 80rpx;
				font-size: 30rpx;
				line-height: 80rpx;
				text-align: center;
				background-color: #b0d341;
				border-radius: 50rpx;
			}
		}

		.pay-model {
			height: auto;
			background-color: #FFFFFF;
			padding: 40rpx;

			.pay-price {
				height: 150rpx;
				font-size: 60rpx;
				font-weight: bold;
				display: flex;
				align-items: center;
				justify-content: center;

				view {
					margin-top: 25rpx;
					font-size: 26rpx;
				}
			}

			.pay-title {
				height: 30rpx;
				line-height: 30rpx;
				font-size: 26rpx;
				margin-top: 20rpx;
				margin-bottom: 20rpx;
			}

			.pay-item {
				display: flex;
				align-items: center;
				justify-content: space-between;
				height: 80rpx;
				border-bottom: 1rpx solid #f3f4f4;
				margin-bottom: 60rpx;

				.left {
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 30rpx;

					.icon-pay {
						border-radius: 50%;
						width: 60rpx;
						height: 60rpx;
						margin-right: 10rpx;
						background-color: #83c93d;
						display: flex;
						align-items: center;
						justify-content: center;

						.icon-pay-wx {
							width: 30rpx;
							height: 30rpx;
						}
					}
				}

				.right {
					display: flex;
					align-items: center;
					justify-content: flex-end;

					.icon-pay {
						border-radius: 50%;
						width: 45rpx;
						height: 45rpx;
					}
				}
			}

			.pay-btn {
				width: 90%;
				height: 80rpx;
				color: #FFFFFF;
				border-radius: 50rpx;
				background-color: #b0d342;
				line-height: 80rpx;
				text-align: center;
				font-size: 30rpx;
				margin: 20rpx auto;
			}
		}
	}
</style>
