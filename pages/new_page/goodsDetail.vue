<template>
	<view class="page-index">
		<!-- 商品图片 -->
		<view class="goods-pic">
			<swiper class="goods-pic" @change="bannerChange">
				<swiper-item v-for="(item, index) in bannerList" :key="index">
					<view class="bannerItem">
						<image mode="aspectFit" src="../../static/image/noface.png"></image>
					</view>
				</swiper-item>
			</swiper>
			<view class="share">分享此商品最高可得￥5.00</view>
			<view class="number">{{current + 1}}/{{bannerList.length}}</view>
		</view>
		<!-- 商品图片 -->

		<!-- 商品信息 -->
		<view class="goods-info">
			<view class="goods-price">
				<view class="price-left">
					<text class="unit">￥</text><text class="price">199.99</text><text class="y-price">245.99</text>
					<image class="gift" src="../../static/new_image/gift.png"></image>
				</view>
				<view class="price-right">
					<view class="collection">
						<image class="icon-collection" src="../../static/new_image/no_star.png"></image>
						<!--<image class="icon-collection" src="../../static/new_image/no_star1.png"></image>-->
						收藏
					</view>
					<view class="gift-box">
						<image class="box-icon" src="../../static/new_image/gift_box.png"></image>
						<view class="share-txt">分享有礼</view>
					</view>
				</view>
			</view>
			<view class="goods-preferential">
				<view class="preferential-left">
					<view class="block">满减</view>
					<view class="block">优惠券</view>
					<view class="block">赠品</view>
				</view>
				<view class="preferential-right">
					查看<image class="right-arrow" src="../../static/new_image/right_arrow3.png"></image>
				</view>
			</view>
			<view class="goods-name">小米手环6 NFC版 黑色 腕带五色可选</view>
			<view class="goods-desc">方便携带，免拆磁吸充电，快速充电，1.56英寸跑道屏方便携带</view>
			<view class="goods-vip-item">
				<view class="goods-vip">
					<image class="svip" src="../../static/new_image/svip.png"></image>
					<view class="sivp-txt">￥160</view>
				</view>
				<view class="sales">销量100</view>
			</view>
			<view class="goods-line"></view>
			<view class="goods-more">
				<view class="more-left"><text class="selected">已选</text><text class="num">黑色 ×1</text></view>
				<image class="right-arrow" src="../../static/new_image/right_arrow2.png"></image>
			</view>
		</view>
		<!-- 商品信息 -->

		<!-- 会员折扣 -->
		<view class="member-discount">
			<view class="discount-item">
				<image class="level-icon" src="../../static/new_image/vip.png"></image>
				<view class="level-name">VIP会员</view>
				<view class="level-txt">· 全场包邮 · 会员折扣价</view>
				<view class="level-see">查看详情</view>
			</view>
		</view>
		<!-- 会员折扣 -->

		<!-- tab详细 -->
		<view class="tab-list">
			<view class="tab-item">
				<view class="tabItem" v-for="(item, index) in tab_list" :key="index">
					<view class="title" :class="tab_index === index ? 'active' : ''">{{ item }}</view>
					<view class="line" v-if="tab_index === index"></view>
				</view>
			</view>

			<view class="content-item"></view>
		</view>
		<!-- tab详细 -->

		<!-- 优惠活动弹框 -->
		<base-modal ref="preferential">
			<view class="preferential-list">
				<view class="title">
					优惠活动
					<image class="icon" @click="handleAuthModal()" src="../../static/icon/close-x.png"></image>
				</view>
				<view class="line"></view>
				<view class="content-list">
					<view class="coupon-item">
						<view class="coupon-title">满减</view>
						<view class="coupon-txt">两件8折，送5元优惠券+100积分；三件7折，送10元优惠券+200积分</view>
					</view>
					<view class="coupon-item">
						<view class="coupon-title">满减</view>
						<view class="coupon-txt">两件8折，送5元优惠券+100积分；三件7折，送10元优惠券+200积分</view>
					</view>
				</view>
				<view class="desc-txt">可领取优惠券</view>
				<view class="coupon-list">
					<view class="coupon-item" v-for="(item, index) in 3" :key="index">
						<view class="coupon-item-left">
							<view class="top-coupon">
								<view class="coupon-price">
									<view class="unit">￥</view>
									<view class="price">5</view>
									<view class="price-name">优惠券</view>
								</view>
								<view class="coupon-name">自动选择优惠券满50减5</view>
							</view>
							<view class="desc-coupon">· 满50使用</view>
							<view class="desc-coupon">· 有效期2020.08.31-2020.10.30</view>
						</view>
						<view class="coupon-line"></view>
						<view class="coupon-item-right">
							<view class="round">点击 领取</view>
						</view>
					</view>
				</view>
			</view>
		</base-modal>
		<!-- 优惠活动弹框 -->
	</view>
</template>

<script>
	import BaseModal from '@/components/base/BaseModal'
	export default {
		components: {
			BaseModal,
		},
		onLoad() {
			this.$refs.preferential.handleShowModal()
		},
		data() {
			return {
				bannerList: ['', '', ''],
				current: 0,
				tab_list: ['产品详情', '产品参数', '用户评价'],
				tab_index: 0,
			}
		},
		methods: {
			bannerChange(e) {
				this.current = e.detail.current
			},
			handleAuthModal() {
				this.$refs.preferential.hide()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page-index {
		font-size: 24rpx;
		color: #242424;

		.goods-pic {
			width: 100%;
			height: 750rpx;
			position: relative;

			.bannerItem {
				width: 100%;
				height: 750rpx;
				display: inline-block;

				image {
					width: 100%;
					height: 750rpx;
				}
			}

			.share {
				position: absolute;
				top: 0;
				right: 0;
				padding: 0 15rpx;
				height: 50rpx;
				background: #FFF0DB;
				border-radius: 0 0 0 25rpx;
				font-size: 24rpx;
				font-weight: 500;
				color: #683F13;
				line-height: 50rpx;
			}

			.number {
				position: absolute;
				width: 80rpx;
				height: 46rpx;
				color: #FFFFFF;
				text-align: center;
				line-height: 46rpx;
				background-color: rgba(0, 0, 0, 0.4);
				border-radius: 23rpx;
				font-size: 26rpx;
				letter-spacing: 1rpx;
				bottom: 30rpx;
				right: 30rpx;
			}
		}

		.goods-info {
			height: auto;
			padding: 0 30rpx;

			.goods-price {
				width: 100%;
				height: 90rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.price-left {
					width: 50%;
					display: flex;
					align-items: center;

					.unit {
						margin-top: 12rpx;
						font-size: 32rpx;
						font-weight: bold;
						color: #F92415;
						margin-right: 5rpx;
					}

					.price {
						font-size: 48rpx;
						font-weight: bold;
						color: #F92415;
						margin-right: 10rpx;
					}

					.y-price {
						margin-top: 12rpx;
						font-size: 28rpx;
						font-weight: 500;
						text-decoration: line-through;
						color: #999999;
					}

					.gift {
						margin-top: 12rpx;
						margin-left: 10rpx;
						width: 35rpx;
						height: 28rpx;
					}
				}

				.price-right {
					width: 50%;
					display: flex;
					align-items: center;
					justify-content: flex-end;

					.collection {
						display: flex;
						align-items: center;
						justify-content: center;
						font-size: 24rpx;
						font-weight: 500;
						color: #999999;

						.icon-collection {
							width: 28rpx;
							height: 28rpx;
							margin-right: 10rpx;
						}
					}

					.gift-box {
						position: relative;
						margin-left: 40rpx;
						width: 146rpx;
						height: 36rpx;
						background: #FCE3E3;
						border-radius: 15rpx;

						.box-icon {
							position: absolute;
							top: -2rpx;
							left: -2rpx;
							width: 38rpx;
							height: 38rpx;
						}

						.share-txt {
							position: absolute;
							top: 0;
							right: 14rpx;
							font-size: 24rpx;
							font-weight: bold;
							font-style: italic;
							color: #FE6869;
						}
					}
				}
			}

			.goods-preferential {
				width: 100%;
				height: 60rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.preferential-left {
					width: 80%;
					height: 60rpx;
					display: flex;
					align-items: center;

					.block {
						padding: 0 10rpx;
						height: 42rpx;
						background: #FEE9E7;
						border-radius: 4rpx;
						font-size: 26rpx;
						font-weight: 500;
						color: #F92415;
						line-height: 42rpx;
						margin-right: 10rpx;
					}
				}

				.preferential-right {
					height: 60rpx;
					font-size: 26rpx;
					font-weight: 500;
					color: #F92415;
					display: flex;
					align-items: center;
					justify-content: flex-end;

					.right-arrow {
						width: 18rpx;
						height: 18rpx;
						margin-left: 10rpx;
					}
				}
			}

			.goods-name {
				width: 100%;
				height: 50rpx;
				font-size: 32rpx;
				font-weight: bold;
				color: #252020;
				line-height: 50rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.goods-desc {
				width: 100%;
				height: 40rpx;
				font-size: 28rpx;
				font-weight: 500;
				color: #666666;
				line-height: 40rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.goods-vip-item {
				height: 50rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.sales {
					font-size: 24rpx;
					color: #999999;
				}

				.goods-vip {
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
			}

			.goods-line {
				margin: 10rpx 0;
				width: 100%;
				height: 1rpx;
				background: #E6E6E6;
			}

			.goods-more {
				height: 50rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.more-left {

					.selected {
						font-size: 28rpx;
						font-weight: 500;
						color: #999999;
						margin-right: 30rpx;
					}

					.num {
						font-weight: 500;
						color: #333333;
					}
				}

				.right-arrow {
					width: 18rpx;
					height: 18rpx;
				}
			}
		}

		.member-discount {
			padding: 20rpx;
			background-color: #F5F5F4 !important;

			.discount-item {
				width: 100%;
				height: 100rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				background: linear-gradient(90deg, #877155, #2C241F);
				border-radius: 20rpx;

				.level-icon {
					width: 32rpx;
					height: 32rpx;
					margin-right: 10rpx;
				}

				.level-name {
					font-size: 28rpx;
					font-weight: bold;
					color: #FEDAB6;
				}

				.level-txt {
					font-size: 24rpx;
					font-weight: bold;
					color: #FFFFFF;
					margin: 0 60rpx;
				}

				.level-see {
					width: 126rpx;
					height: 40rpx;
					background: linear-gradient(90deg, #FFF8DB, #FFE4BA);
					border-radius: 20rpx;
					font-size: 24rpx;
					text-align: center;
					line-height: 40rpx;
					font-weight: 500;
					color: #633A0D;
				}

			}
		}

		.tab-list {
			width: 100%;
			height: auto;

			.tab-item {
				margin: 0 auto;
				height: 100rpx;
				display: flex;
				align-items: center;
				justify-content: center;

				.tabItem {
					width: 170rpx;
					height: 70rpx;

					.title {
						height: 66rpx;
						font-size: 28rpx;
						font-weight: bold;
						text-align: center;
						line-height: 66rpx;
						color: #0F0F0F;
					}

					.line {
						width: 32rpx;
						height: 6rpx;
						background: #BC7C11;
						border-radius: 3rpx;
						margin: 0 auto;
					}

					.active {
						color: #BC7C11;
					}

				}
			}
		}

		.content-item {
			width: 100%;
			height: 300rpx;
		}

		.preferential-list {
			height: auto;
			border-radius: 20rpx 20rpx 0 0;
			background-color: #FFFFFF;
			padding: 20rpx;

			.title {
				position: relative;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 60rpx;

				.icon {
					position: absolute;
					top: 10rpx;
					right: 0;
					width: 40rpx;
					height: 40rpx;
				}
			}

			.line {
				width: 100%;
				height: 2rpx;
				background: #EEEEEE;
			}

			.content-list {
				margin-top: 30rpx;
				height: auto;

				.coupon-item {
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin-bottom: 40rpx;

					.coupon-title {
						height: 42rpx;
						padding: 0 10rpx;
						background-color: #FEE9E7;
						border-radius: 4rpx;
						font-size: 26rpx;
						font-weight: 500;
						color: #F92415;
						line-height: 42rpx;
					}

					.coupon-txt {
						width: 85%;
						max-height: 80rpx;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						overflow: hidden;
					}
				}
			}

			.desc-txt {
				width: 100%;
				height: 40rpx;
				font-size: 24rpx;
				font-weight: 400;
				color: #666666;
				line-height: 40rpx;
				margin-bottom: 20rpx;

			}

			.coupon-list {
				width: 100%;
				height: auto;

				.coupon-item {
					position: relative;
					width: 100%;
					height: 140rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					margin-bottom: 20rpx;

					.coupon-item-left {
						width: 80%;
						height: 140rpx;
						background: #F64B37;
						border-radius: 10rpx;

						.top-coupon {
							padding-left: 35rpx;
							padding-right: 40rpx;
							display: flex;
							align-items: center;
							justify-content: space-between;

							.coupon-price {
								display: flex;
								align-items: center;

								.unit {
									font-size: 28rpx;
									font-weight: 500;
									font-style: italic;
									color: #FFFFFF;
									margin-bottom: 12rpx;
								}

								.price {
									margin: 0 8rpx;
									font-size: 48rpx;
									font-weight: bold;
									font-style: italic;
									color: #FFFFFF;
								}

								.price-name {
									margin-top: 12rpx;
									margin-left: 5rpx;
									font-size: 24rpx;
									font-weight: 500;
									font-style: italic;
									color: #FFFFFF;
									overflow: hidden;
									text-overflow: ellipsis;
									white-space: nowrap;
								}

							}

							.coupon-name {
								width: 255rpx;
								height: 50rpx;
								line-height: 50rpx;
								font-size: 24rpx;
								font-weight: 400;
								color: #FFFFFF;
							}
						}

						.desc-coupon {
							padding-left: 35rpx;
							padding-right: 40rpx;
							height: 30rpx;
							font-size: 20rpx;
							font-weight: 400;
							color: #FFFFFF;
							line-height: 30rpx;
							margin-bottom: 5rpx;
						}

						.desc-coupon:last-child {
							margin-bottom: 0;
						}
					}

					.coupon-line {
						position: absolute;
						top: 5rpx;
						right: 140rpx;
						width: 1rpx;
						height: 120rpx;
						border-right: 1rpx dashed #FFFFFF;
					}

					.coupon-item-right {
						width: 140rpx;
						height: 140rpx;
						background: #F64B37;
						border-radius: 10rpx 0 0 10rpx;
						display: flex;
						align-items: center;
						justify-content: center;

						.round {
							width: 84rpx;
							height: 84rpx;
							background: #FFFFFF;
							border-radius: 50%;
							font-size: 24rpx;
							line-height: 30rpx;
							text-align: center;
							color: #EC211B;
							display: flex;
							align-items: center;
							justify-content: center;
							letter-spacing: 2rpx;
						}
					}
				}

				.coupon-item::after {
					position: absolute;
					left: -14rpx;
					bottom: 55rpx;
					content: '';
					width: 30rpx;
					height: 30rpx;
					border-radius: 0 50% 50% 0;
					background-color: #FFFFFF;
				}

				.coupon-item::before {
					position: absolute;
					right: -14rpx;
					bottom: 55rpx;
					content: '';
					width: 30rpx;
					height: 30rpx;
					border-radius: 50% 0 0 50%;
					background-color: #FFFFFF;
				}
			}
		}
	}
</style>
