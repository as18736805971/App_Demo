<template>
	<view class="page-index">
		<!-- 封面图 -->
		<view class="cover">
			<swiper class="image-list">
				<swiper-item>
					<view class="swiper-item">
						<image class="image" mode="scaleToFill" :src="cover"></image>
					</view>
				</swiper-item>
			</swiper>
			<view class="image-icon">
				<view class="line"></view>
			</view>
		</view>
		<!-- 封面图 -->

		<!-- 标题 -->
		<view class="detail-title">
			<view class="title">{{ detail.title }}</view>
			<view class="desc">选择礼品卡</view>
		</view>
		<!-- 标题 -->

		<!-- 价格卡 -->
		<scroll-view :scroll-x="true">
			<view class="price-list">
				<view class="price-item" @click="handleEditStatus(item, index)" :class="item.status ? 'active' : ''"
					v-for="(item, index) in card_price" :key="index">
					<view class="price">￥{{ item.price }}</view>
					<view class="price-desc">面值 ￥{{ item.price }}</view>
					<view class="price-number" v-if="item.status">
						<image class="price-add" @click.stop="handleNumAdd(item, index, 1)"
							:src="require('@/static/icon/reduction.png')"></image>
						<view class="price-num">{{ item.num }}</view>
						<image class="price-add" @click.stop="handleNumAdd(item, index, 2)"
							:src="require('@/static/icon/add.png')"></image>
					</view>
				</view>
			</view>
		</scroll-view>
		<!-- 价格卡 -->

		<!-- 描述 -->
		<view class="page-desc">
			<view class="desc-item">
				<view class="desc-title">适用门店：</view>
				<view class="desc-txt">所有门店</view>
			</view>
			<view class="desc-item">
				<view class="desc-title">适应商品：</view>
				<view class="desc-txt">全部商品</view>
			</view>
			<view class="desc-item">
				<view class="desc-title">有 效 期：</view>
				<view class="desc-txt">自绑定之日起3年内有效</view>
			</view>
			<view class="desc-item1">
				<view class="desc-title">使用说明：</view>
				<view class="desc-txt-desc">
					<view>1.有效期：此卡为电子卡（非实体卡面），电子心意卡自购买之日起三年有效</view>
					<view>2.适用范围：凭此卡可在中国大陆地区门店购买任意商品使用，单个订单可使用多张心意卡进行支付。</view>
					<view>
						3.转赠功能：购买心意卡后可转赠给好友旦仅可转赠次，赠送后不可再次转赠；若在赠送后24小时内末被好友领取，则该心意卡将自动退回至购卡人礼品卡列表。每笔订单中的所有卡可在购买完成后，进入礼品卡列表，点击礼品卡详情分别赠送。
					</view>
					<view>4.个人绑定使用：如需留用礼品卡，在礼品卡详情页点击“立即激活”，绑定成功后即可使用；赠送给好友的礼品卡被退回后也可绑定给个人使用。</view>
					<view>
						5.积分：购买奈雪的茶心意卡时不积分，在“奈雪点单”小程序下单或线下门店出示会员码使用心意卡付款时累计积分。如转赠心意卡给好友，转赠成功后赠送人获得对应积分。如使用心意卡消费的订单发生退款，对应的积分将被回收。
					</view>
					<view>
						6.发票及退款：如需发票，可在“奈雪点单”小程序-我的-我的订单中找到购买心意卡订单的记录，点击“开发票”。开票说明：心意卡订单支持开票，开具类型为预付卡；使用心意卡消费的订单，心意卡金额支付部分不支持开票。退款细则查询礼品卡列表底部“购买须知”
					</view>
					<view>7.电子心意卡可多次使用，不可兑换现金，不设找零。</view>
					<view>8.卡面图片仅供参考，产品以实物为准。</view>
					<view>9.更多心意卡信息，可查看礼品卡列表底部“礼品卡章程”。</view>
				</view>
			</view>
		</view>
		<!-- 描述 -->

		<!-- 支付按钮 -->
		<view class="suspend-button">
			<view class="top" @click="handleAgreement()">
				<template v-if="agreement">
					<image class="icon-check" :src="require('@/static/icon/check.png')"></image>
				</template>
				<template v-else>
					<view class="round"></view>
				</template>
				<view class="agreement">阅读并同意<span>《心意卡购买及使用规则》《礼品卡章程》</span></view>
			</view>
			<view class="btn" @click="handleOnSubmit()">共{{ totalNum }}张 确认支付 ￥{{ totalPrice }}</view>
		</view>
		<!-- 支付按钮 -->

		<!-- 支付弹窗 -->
		<base-modal ref="pay">
			<view class="pay-model">
				<view class="pay-price">
					<view>￥</view>{{ totalPrice }}
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
	export default {
		components: {
			BaseModal,
		},
		data() {
			return {
				detail: {
					title: '',
				},
				agreement: false,
				cover: 'https://dev6.sssvip.net/addons/yb_guanwangv2/core/public/images/miniapp/background.png',
				card_price: [{
						id: 1,
						price: '58',
						num: 1,
						status: true,
					},
					{
						id: 1,
						price: '100',
						num: 1,
						status: false,
					},
					{
						id: 1,
						price: '180',
						num: 1,
						status: false,
					},
					{
						id: 1,
						price: '520',
						num: 1,
						status: false,
					},
					{
						id: 1,
						price: '999',
						num: 1,
						status: false,
					},
				],
			}
		},
		computed: {
			totalNum() {
				let num = 0
				this.card_price.map((item, index) => {
					if (item.status) {
						num += item.num
					}
				})
				return num
			},
			totalPrice() {
				let totalCount = 0
				let allPrice = 0
				this.card_price.map((item) => {
					if (item.status) {
						totalCount += parseInt(item.num)
						allPrice += item.num * Number(item.price)
					}
				})
				return allPrice
			},
		},
		onLoad(e) {
			this.detail.title = e.title
			uni.setNavigationBarTitle({
				title: e.title || '礼品卡详情'
			});
		},
		methods: {
			// 点击卡状态
			handleEditStatus(data, index) {
				this.card_price[index].status = true
			},
			// 修改数量
			handleNumAdd(data, index, type) {
				let num = data.num
				if (type === 1) {
					num = num - 1
					if (num < 1) {
						this.card_price[index].status = false
						this.card_price[index].num = 1
					} else {
						this.card_price[index].num = num
					}
				} else {
					num = num + 1
					this.card_price[index].num = num
				}
			},
			// 勾选协议
			handleAgreement() {
				this.agreement = !this.agreement
			},
			// 支付按钮
			handleOnSubmit() {
				if (this.agreement) {
					if (this.totalPrice <= 0) {
						uni.showToast({
							icon: 'none',
							title: '请选择需要购买的礼品卡',
							duration: 1500
						});
					} else {
						this.$refs.pay.handleShowModal()
					}
				} else {
					uni.showToast({
						title: '请勾选《礼品卡章程》',
						icon: 'none',
						duration: 2000
					});
				}
			},
			// 支付
			handlePay() {
				uni.showToast({
					title: '支付成功',
					duration: 1500
				});
				setTimeout(() => {
					this.$refs.pay.handleHiddenModal()
				}, 1000)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page-index {
		width: 100%;
		min-height: 100vh;
		font-size: 24rpx;
		color: #242424;
		background-color: #ffffff;

		.cover {
			width: 100%;
			padding: 50rpx 0 0;
			height: auto;

			.image-list {
				height: 380rpx;
				overflow: hidden;
				display: flex;
				align-items: center;
				justify-content: center;

				.swiper-item {
					width: 85%;
					margin: 0 auto;
					height: 380rpx;
					overflow: hidden;

					.image {
						width: 100%;
						height: 380rpx;
						border-radius: 12rpx;
						box-shadow: 0rpx 10rpx 10rpx rgba(0, 0, 0, 0.1);
					}
				}
			}

			.image-icon {
				height: 68rpx;
				display: flex;
				align-items: center;
				justify-content: center;

				.line {
					width: 40rpx;
					height: 10rpx;
					background-color: #b0d342;
					border-radius: 6rpx;
				}
			}
		}

		.detail-title {
			height: auto;
			padding: 0 40rpx;
			color: #484b4d;

			.title {
				height: 80rpx;
				line-height: 80rpx;
				font-size: 32rpx;
				font-weight: bold;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;

			}

			.desc {
				height: 65rpx;
				line-height: 65rpx;
				font-size: 24rpx;
			}
		}

		.price-list {
			height: auto;
			display: flex;
			flex-wrap: nowrap;
			align-items: flex-start;
			margin: 0 40rpx;

			.price-item {
				width: auto;
				height: 110rpx;
				border: 2rpx solid #cfd1d3;
				border-radius: 12rpx;
				margin-right: 20rpx;
				padding: 10rpx 20rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;

				.price {
					width: 170rpx !important;
					height: 45rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 40rpx;
					font-weight: bold;
					color: #484b4d;
					margin-bottom: 10rpx;
				}

				.price-desc {
					width: 170rpx !important;
					height: 30rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 24rpx;
					color: #a0a4a6;
				}

				.price-number {
					width: 170rpx !important;
					height: 60rpx;
					display: flex;
					align-items: flex-end;
					color: #b0d342;
					justify-content: center;

					.price-num {
						font-size: 28rpx;
						color: #383838;
						height: 28rpx;
						line-height: 28rpx;
						margin: 0 35rpx 0;
					}

					.price-add {
						width: 28rpx;
						height: 28rpx;
					}
				}
			}

			.active {
				height: 176rpx;
				border: 4rpx solid #b0d342;
			}
		}

		.page-desc {
			height: auto;
			margin-top: 40rpx;
			padding-bottom: 200rpx;

			.desc-item {
				height: auto;
				display: flex;
				align-items: center;
				justify-content: center;
				padding: 0 40rpx;

				.desc-title {
					height: 60rpx;
					width: 23%;
					letter-spacing: 8rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					color: #78797b;
					font-size: 24rpx;
					line-height: 80rpx;
				}

				.desc-txt {
					height: 60rpx;
					width: 77%;
					display: flex;
					align-items: center;
					color: #4f5153;
					font-size: 24rpx;
					line-height: 80rpx;
				}
			}

			.desc-item1 {
				height: auto;
				display: flex;
				justify-content: center;
				padding: 0 40rpx;

				.desc-title {
					height: 60rpx;
					width: 23%;
					letter-spacing: 8rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					color: #78797b;
					font-size: 24rpx;
					line-height: 80rpx;
				}

				.desc-txt-desc {
					height: auto;
					width: 77%;
					padding-top: 10rpx;
					line-height: 40rpx;
					color: #4f5153;
					font-size: 24rpx;
				}
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
				justify-content: center;

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
				font-size: 32rpx;
				line-height: 80rpx;
				text-align: center;
				background-color: #b0d341;
				border-radius: 50rpx;
				font-weight: bold;
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
