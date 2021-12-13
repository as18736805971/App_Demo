<template>
	<view class="page-index">
		<!-- 导航栏 -->
		<base-ani-tab-bar :listArr="list" :listActive="active_index" @handleActive="handleTab"></base-ani-tab-bar>
		<!-- 导航栏 -->

		<!-- 兑换优惠券 -->
		<view class="coupon-list" v-if="active_index === 0">
			<view class="input-txt">
				<input type="text" class="input" v-model="coupon_code" placeholder="请输入兑换码" />
				<image v-if="coupon_code !== ''" @click="handleClearInput('coupon_code')" class="del-icon"
					:src="require('@/static/icon/close1.png')"></image>
			</view>

			<!-- 描述 -->
			<view class="desc-title">兑换说明</view>
			<view class="desc-txt">
				<text>1.兑换码为一串字母与数字的组合 （通常为ESCE开头+19位数字的兑换码）</text>
				<text>2.输入正确兑换码后即可领取优惠券</text>
				<text>3.兑换成功后，可在小程序内“我的”—“优惠券”中查看</text>
				<text>4.优惠券存在有效期，逾期自动失效，不补发不延期，请在有效期内及时核销</text>
			</view>
			<view class="desc-title">使用说明</view>
			<view class="desc-txt">
				<text>1.兑换码仅限兑换优惠券，不可兑换现金/找零</text>
				<text>2.同一个兑换码仅限兑换一次，成功兑换后兑换码失效，不可重复兑换使用</text>
				<text>3.优惠券具体使用规则请以优惠券详情为准</text>
			</view>
			<!-- 描述 -->
		</view>
		<!-- 兑换优惠券 -->

		<!-- 兑换礼品卡 -->
		<view class="gift-list" v-else>
			<view class="tab-list">
				<view class="exchange-item" :class="exchange_index === 0 ? 'active' : ''" @click="handleTabExchange(0)">
					卡密兑换</view>
				<view class="exchange-item" :class="exchange_index === 1 ? 'active' : ''" @click="handleTabExchange(1)">
					兑换码兑换</view>
			</view>

			<template v-if="exchange_index === 0">
				<view class="input-txt margin">
					<input type="text" class="input" v-model="card_number" placeholder="请输入卡号" />
					<image v-if="card_number !== ''" @click="handleClearInput('card_number')" class="del-icon"
						:src="require('@/static/icon/close1.png')"></image>
				</view>
				<view class="input-txt">
					<input type="text" class="input" v-model="camilo" placeholder="请输入卡密" />
					<image v-if="camilo !== ''" @click="handleClearInput('camilo')" class="del-icon"
						:src="require('@/static/icon/close1.png')"></image>
				</view>

				<!-- 描述 -->
				<view class="desc-title">兑换说明</view>
				<view class="desc-txt">
					<text>1.卡号与密码为一串字母与数字的组合 （卡号通常为DE开头+18位数字，密码为10位字符）</text>
					<text>2.输入正确卡号与密码后即可兑换礼品卡</text>
					<text>3.克换成功后，可在小程序内“我的”—“礼品卡”中查看</text>
					<text>4.礼品卡存在有效期，逾期自动失效，不补发不延期，请在有效期内及时使用</text>
				</view>
				<view class="desc-title">使用说明</view>
				<view class="desc-txt">
					<text>1.卡号与密码仅限兑换礼品卡，不可兑换现金/找零</text>
					<text>2.同一个卡密仅限兑换一次，成功兑换后兑换码失效，不可重复兑换使用</text>
					<text>3.礼品卡具体使用规则请以礼品卡详情为准</text>
				</view>
				<!-- 描述 -->
			</template>
			<template v-else>
				<view class="input-txt">
					<input type="text" class="input" v-model="exchange_code" placeholder="请输入兑换码" />
					<image v-if="exchange_code !== ''" @click="handleClearInput('exchange_code')" class="del-icon"
						:src="require('@/static/icon/close1.png')"></image>
				</view>

				<!-- 描述 -->
				<view class="desc-title">兑换说明</view>
				<view class="desc-txt">
					<text>1.兑换码为一串字母与数字的组合（通常为CSCE/ESCE开头＋19位数字的兑换码）</text>
					<text>2.输入正确兑换码后即可领取礼品卡</text>
					<text>3.兑换成功后，可在小程序内“我的”—“礼品卡”中查看</text>
					<text>4.礼品卡存在有效期，逾期自动失效，不补发不延期，请在有效期内及时使用</text>
				</view>
				<view class="desc-title">使用说明</view>
				<view class="desc-txt">
					<text>1.兑换码仅限兑换礼品卡，不可兑换现金/找零</text>
					<text>2.同一个兑换码仅限兑换一次，成功兑换后兑换码失效，不可重复兑换使用</text>
					<text>3.礼品卡具体使用规则请以礼品卡详情为准</text>
				</view>
				<!-- 描述 -->
			</template>
		</view>
		<!-- 兑换礼品卡 -->

		<!-- 悬浮按钮 -->
		<view class="suspend-button">
			<view class="top" v-if="active_index === 1" @click="handleAgreement()">
				<template v-if="agreement">
					<image class="icon-check" :src="require('@/static/icon/check.png')"></image>
				</template>
				<template v-else>
					<view class="round"></view>
				</template>
				<view class="agreement">我已阅读并同意<span>《礼品卡章程》</span></view>
			</view>
			<view class="btn" @click="handleOnSubmit()">确认兑换</view>
		</view>
		<!-- 悬浮按钮 -->
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
				list: ['兑换优惠券', '兑换礼品卡'], // 选项卡列表
				active_index: 0, // 选项卡索引
				coupon_code: '', // 优惠券兑换码
				agreement: false, // 兑换码勾选
				exchange_index: 0, // 兑换码索引
				exchange_code: '', // 优惠券兑换码
				card_number: '', // 卡号
				camilo: '', // 卡密
			}
		},
		onLoad(e) {
      // e.type 0 兑换优惠券 1 兑换礼品卡
			this.active_index = Number(e.type) || 0
		},
		methods: {
			handleTab(index) {
				this.active_index = index
			},
			handleClearInput(type) {
				this[type] = ''
			},
			// 兑换码切换
			handleTabExchange(index) {
				this.exchange_index = index
			},
			// 勾选协议
			handleAgreement() {
				this.agreement = !this.agreement
			},
			// 确认兑换
			handleOnSubmit() {
				if (this.active_index === 0) {
					if (this.coupon_code === '') {
						uni.showToast({
							title: '请输入兑换码',
							icon: 'none',
							duration: 2000
						});
					}
				} else {
					if (this.agreement) {
						if (this.exchange_index === 0) {
							if (this.card_number === '' || this.camilo === '') {
								uni.showToast({
									title: '请填写完整信息',
									icon: 'none',
									duration: 2000
								});
							}
						} else {
							if (this.exchange_code === '') {
								uni.showToast({
									title: '请填写完整信息',
									icon: 'none',
									duration: 2000
								});
							}
						}
					} else {
						uni.showToast({
							title: '请勾选《礼品卡章程》',
							icon: 'none',
							duration: 2000
						});
					}
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.page-index {
		width: 100%;
		min-height: 100vh;
		font-size: 24rpx;
		color: #242424;
		background-color: #FFFFFF;
		padding-top: 110rpx;

		.coupon-list {
			width: 90%;
			margin: 0 auto;
			padding-top: 40rpx;
			height: auto;
		}

		.gift-list {
			width: 90%;
			margin: 0 auto;
			height: auto;

			.tab-list {
				height: 130rpx;
				font-size: 28rpx;
				font-weight: bold;
				color: #727272;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.exchange-item {
					width: 50%;
					height: 130rpx;
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}

			.active {
				color: #b0d341;
			}
		}

		.input-txt {
			position: relative;
			width: 100%;
			height: 80rpx;

			.input {
				height: 100%;
				border-radius: 10rpx;
				padding-left: 20rpx;
				padding-right: 80rpx;
				border: 2rpx solid #c3c4c6;
				font-size: 24rpx;
			}

			.del-icon {
				position: absolute;
				top: 20rpx;
				right: 20rpx;
				width: 50rpx;
				height: 50rpx;
				border-radius: 50%;
			}
		}

		.margin {
			margin-bottom: 40rpx;
		}

		.desc-title {
			font-size: 24rpx;
			font-weight: bold;
			height: 90rpx;
			line-height: 90rpx;
		}

		.desc-txt {
			height: auto;
			font-size: 24rpx;
			color: #727272;
			line-height: 40rpx;

			text {
				display: inline-block;
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
	}
</style>
