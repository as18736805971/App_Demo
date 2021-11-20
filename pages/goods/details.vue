<template>
	<view class="goodsDetails">
		<!-- 轮播图 -->
		<view class="banner">

			<swiper class="banner" @change="bannerChange">
				<swiper-item v-for="(item, index) in bannerList" :key="index">
					<view class="bannerItem">
						<image :src="item.banner_img"></image>
					</view>
				</swiper-item>
			</swiper>

			<view class="bannerNum">{{current + 1}}/{{bannerList.length}}</view>

		</view>
		<!-- 轮播图 -->

		<view class="preSale">
			<view class="preSaleList">
				<view class="preSaleTitle">
					<view class="title">
						<view class="sale">预约价</view>
					</view>
					<view class="price">
						<view class="money">￥<text>200</text></view>
						<view class="discount">原价:<text>￥220</text></view>
					</view>
				</view>
				<view class="count-down">
					<text>已预约32</text>
					<text>剩余160</text>
				</view>
			</view>
		</view>

		<view class="details">
			<view class="detailsContent">
				<view class="name">
					<view class="goodsName">冬季美白水乳秋冬干性皮肤补水美白套装</view>
					<view class="share">
						<view class="shareImg">
							<image :src="require('@/static/appicon/share.png')"></image>
						</view>
						<view class="text">
							<!-- <button hover-class='none'>分享</button> -->
							分享
						</view>
					</view>
				</view>
				<view class="describe">秋冬干性皮肤补水美白，让你的肌肤美好整个冬季，本品适合干性、油性皮肤。</view>
			</view>
		</view>

		<view class="tabbar">

			<view class="tab">
				<view class="tabItem" @click="tabCut(0)">
					<view class="title" :class="[tabbar == 0 ? 'active' : '']">商品详情</view>
					<view class="line" v-if="tabbar == 0"></view>
				</view>
				<view class="tabItem" @click="tabCut(1)">
					<view class="title" :class="[tabbar == 1 ? 'active' : '']">商品属性</view>
					<view class="line" v-if="tabbar == 1"></view>
				</view>
				<view class="tabItem" @click="tabCut(2)">
					<view class="title" :class="[tabbar == 2 ? 'active' : '']">商品评价</view>
					<view class="line" v-if="tabbar == 2"></view>
				</view>
			</view>

		</view>

		<view class="tabSwipe">

			<swiper class="tabSwipe" circular :current="tabbar" @change="tabChange">
				<swiper-item>
					<view class="tabDetails">暂无内容</view>
				</swiper-item>
				<swiper-item>
					<view class="tabAttr">暂无内容</view>
				</swiper-item>
				<swiper-item>
					<view class="tabComment">暂无内容</view>
				</swiper-item>
			</swiper>

		</view>

		<view class="float">
			<view class="content">
				<view class="conleft">

					<view class="icon" v-for="(item, index) in footerIcon" :key="index" @click="iconChange(index)">
						<view class="iconImg">
							<image :src="item.icon" v-if="item.status == 0"></image>
							<image :src="item.selectIcon" v-if="item.status == 1"></image>
						</view>
						<view class="iconText" :class="[item.status == 1 ? 'active' : '']">{{item.name}}</view>
					</view>

				</view>
				<view class="conright">
					<view class="right" @click="cutOrder">支付</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		name: "goodsDetails",
		data() {
			return {
				current: 0,
				bannerList: [{
						banner_id: 1,
						banner_name: 'banner1',
						banner_img: require('@/static/appicon/image.png')
					},
					{
						banner_id: 2,
						banner_name: 'banner2',
						banner_img: require('@/static/appicon/order.png')
					},
					{
						banner_id: 3,
						banner_name: 'banner3',
						banner_img: require('@/static/appicon/member.png')
					}
				],
				tabbar: 0,
				footerIcon: [{
						id: 1,
						name: '首页',
						status: 0,
						icon: require('@/static/icon/index1.png'),
					},
					{
						id: 2,
						name: '收藏',
						status: 1,
						icon: require('@/static/icon/icon_star.png'),
						selectIcon: require('@/static/icon/icon_star_active.png'),
					},
					{
						id: 3,
						name: '客服',
						status: 0,
						icon: require('@/static/appicon/app.png'),
					}
				]
			}
		},
		methods: {
			bannerChange(e) {
				this.current = e.detail.current
			},
			tabCut(index) {
				this.tabbar = index
			},
			tabChange(e) {
				this.tabbar = e.detail.current
			},
			iconChange(index) {
				if (index == 0) {
					uni.switchTab({
						url: '/pages/index/index'
					});
				} else if (index == 1) {
					let status = this.footerIcon[index].status;
					if (status == 1) {
						this.footerIcon[index].status = 0
						uni.showToast({
							icon: 'none',
							title: '取消收藏',
							duration: 1500
						});
					} else {
						this.footerIcon[index].status = 1
						uni.showToast({
							icon: 'none',
							title: '已收藏',
							duration: 1500
						});
					}

				} else if (index == 2) {
					uni.showToast({
						icon: 'none',
						title: '暂无客服服务',
						duration: 2000,
					});
				} else {
					uni.switchTab({
						url: '/pages/index/index'
					});
				}
			},
			cutOrder() {
				uni.navigateTo({
					url: './orderDetails'
				});
			}
		}
	}
</script>

<style lang="scss">
	page {
		font-size: 24rpx;
		background-color: #f5f4f4;
	}

	button::after {
		border: none;
		width: 100rpx;
		background-color: none;
	}

	.goodsDetails {
		width: 100%;
		background-color: #f5f4f4;

		.banner {
			width: 750rpx;
			height: 750rpx;
			background-color: #FFFFFF;
			white-space: nowrap;
			box-sizing: border-box;
			position: relative;

			.bannerItem {
				width: 750rpx;
				height: 750rpx;
				display: inline-block;

				image {
					width: 750rpx;
					height: 750rpx;
				}
			}

			.bannerNum {
				position: absolute;
				width: 80rpx;
				height: 46rpx;
				opacity: 0.4;
				color: #FFFFFF;
				text-align: center;
				line-height: 46rpx;
				background: #000000;
				border-radius: 23rpx;
				font-size: 26rpx;
				letter-spacing: 1rpx;
				top: 90%;
				left: 85%;
			}

		}

		.preSale {
			width: 750rpx;
			height: 110rpx;
			background-color: #eab656;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #FFFFFF;
			font-size: 22rpx;

			.preSaleList {
				width: 700rpx;
				height: 90rpx;
				display: flex;
				justify-content: space-between;

				.preSaleTitle {
					width: 380rpx;
					height: 90rpx;

					.title {
						width: 500rpx;
						height: 40rpx;
						display: flex;

						.sale {
							height: 40rpx;
							font-size: 26rpx;
							line-height: 40rpx;
							margin-right: 20rpx;
						}

						.number {
							height: 40rpx;
							font-size: 20rpx;
							line-height: 48rpx;
						}
					}

					.price {
						width: 500rpx;
						height: 50rpx;
						display: flex;
						align-items: center;

						.money {
							height: 50rpx;
							font-size: 26rpx;
							line-height: 55rpx;
							margin-right: 20rpx;
							letter-spacing: 0rpx;

							text {
								font-size: 34rpx;
								font-weight: 800;
							}
						}

						.discount {
							height: 38rpx;
							line-height: 40rpx;
							letter-spacing: 1rpx;

							text {
								text-decoration: line-through;
							}
						}
					}
				}

				.count-down {
					width: 300rpx;
					height: 90rpx;
					line-height: 90rpx;
					margin-right: 20rpx;
					display: flex;
					justify-content: flex-end;

					text {
						margin-right: 20rpx;
					}
				}
			}
		}

		.details {
			width: 750rpx;
			height: 190rpx;
			background-color: #FFFFFF;
			display: flex;
			justify-content: center;
			align-items: center;
			border-bottom: 1rpx solid #e9e9e9;

			.detailsContent {
				width: 700rpx;
				height: 160rpx;

				.name {
					width: 700rpx;
					height: 75rpx;
					display: flex;
					justify-content: space-between;

					.goodsName {
						width: 474rpx;
						height: 75rpx;
						font-size: 28rpx;
						font-family: PingFang SC Medium, PingFang SC Medium-Medium;
						font-weight: 600;
						text-align: left;
						color: #222222;
						line-height: 38rpx;
						letter-spacing: 1rpx;
						overflow: hidden;
						text-overflow: ellipsis;
					}


					.share {
						width: 80rpx;
						height: 75rpx;
						border-left: 1rpx dotted #CCCCCC;

						.shareImg {
							width: 32rpx;
							height: 32rpx;
							margin: 0 auto;

							image {
								width: 32rpx;
								height: 32rpx;
							}
						}

						.text {
							width: 80rpx;
							height: 43rpx;
							font-size: 22rpx;
							font-family: PingFang SC Regular, PingFang SC Regular-Regular;
							font-weight: 400;
							text-align: center;
							color: #888888;
							line-height: 50rpx;
						}
					}

				}

				.describe {
					width: 700rpx;
					height: 60rpx;
					margin-top: 17rpx;
					font-size: 22rpx;
					font-family: PingFang SC Regular, PingFang SC Regular-Regular;
					font-weight: 400;
					text-align: left;
					color: #999999;
					line-height: 30rpx;
					letter-spacing: 1rpx;
					overflow: hidden;
					text-overflow: ellipsis;
				}

			}

		}

		.tabbar {
			width: 750rpx;
			background-color: #FFFFFF;

			.tab {
				width: 700rpx;
				height: 108rpx;
				margin: 0 auto;
				display: flex;
				align-items: center;
				justify-content: space-around;
				background-color: #FFFFFF;

				.tabItem {
					width: 150rpx;
					height: 70rpx;

					.title {
						width: 150rpx;
						height: 66rpx;
						font-size: 28rpx;
						font-weight: 700;
						text-align: center;
						line-height: 65rpx;
						color: #0F0F0F;
					}

					.line {
						width: 80rpx;
						height: 6rpx;
						background: #eab656;
						border-radius: 2rpx;
						margin: 0 auto;
					}

					.active {
						color: #eab656;
					}

				}

			}

		}

		.tabSwipe {
			width: 750rpx;
			height: 500rpx;
			background-color: #f5f4f4;
			font-size: 28rpx;
			text-align: center;
			margin-bottom: 120rpx;
		}

		.float {
			width: 750rpx;
			height: 100rpx;
			position: fixed;
			bottom: 0;
			background: #ffffff;
			box-shadow: 0rpx 1rpx 15rpx rgba(0, 0, 0, 0.12);
			display: flex;
			justify-content: center;
			align-items: center;

			.content {
				width: 700rpx;
				height: 80rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.conleft {
					width: 280rpx;
					height: 80rpx;
					display: flex;
					justify-content: space-around;

					.icon {
						width: 90rpx;
						height: 80rpx;

						.iconImg {
							width: 40rpx;
							height: 40rpx;
							margin: 0 auto;

							image {
								width: 40rpx;
								height: 40rpx;
							}
						}

						.iconText {
							height: 40rpx;
							width: 90rpx;
							text-align: center;
							line-height: 50rpx;
							color: #888888;
							font-size: 24rpx;
						}

						.active {
							color: #409eff;
						}

					}

				}

				.conright {
					width: 200rpx;
					height: 60rpx;
					border-radius: 50rpx;
					background: #409eff;
					display: flex;
					align-items: center;
					justify-content: center;

					.left {
						width: 190rpx;
						height: 60rpx;
						font-size: 22rpx;
						font-family: PingFang SC Medium, PingFang SC Medium-Medium;
						font-weight: 500;
						text-align: center;
						color: #ffffff;
						line-height: 32rpx;
						letter-spacing: 1rpx;
						overflow: hidden;
						text-overflow: ellipsis;
					}

					.right {
						width: 190rpx;
						height: 60rpx;
						text-align: center;
						line-height: 60rpx;
						color: #FFFFFF;
						font-size: 30rpx;
						font-weight: 500;
					}

				}

			}

		}

		.tabDetails {
			width: 750rpx;
			height: 500rpx;
			color: #C8C7CC;
			background-color: #FFFFFF;
		}

		.tabAttr {
			width: 750rpx;
			height: 500rpx;
			color: #C8C7CC;
			background-color: #FFFFFF;
		}

		.tabComment {
			width: 750rpx;
			height: 500rpx;
			color: #C8C7CC;
			background-color: #FFFFFF;
		}

	}
</style>
