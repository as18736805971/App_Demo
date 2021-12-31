<template>
	<view class="page-index" @touchmove.stop.prevent>
		<view class="page-search">
			<view class="block">
				<image class="icon-cup" :src="require('@/static/appicon/cup.png')"></image>
				一起喝
			</view>
			<view class="input">
				<image class="icon-search" :src="require('@/static/icon/search.png')"></image>
				搜索商品
			</view>
			<view class="hidden"></view>
		</view>

		<view class="page-distance">
			<view class="distance-left">
				<view class="address">
					你的眼里有星星
					<image class="icon-right" :src="require('@/static/icon/right_arrow.png')"></image>
				</view>
				<view class="distance">距离您2.7km</view>
			</view>
			<view class="distance-right">
				<view class="switch-item">
					<view class="switch" :class="take_type === 1 ? 'active' : ''" @click="handleTake(1)">自取</view>
					<view class="switch" :class="take_type === 2 ? 'active' : ''" @click="handleTake(2)">外卖</view>
				</view>
			</view>
		</view>

		<view class="page-rules">
			<view class="rules-left">
				<swiper class="notice-item" autoplay vertical circular :interval="10000">
					<swiper-item v-for="(item, index) in notice_list" :key="index">
						<view class="notice-item align-center" @click="handleNotice(item, index)">
							<image class="notice-icon" :src="item.icon"></image>
							<view class="notice-txt">{{ item.text }}</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
			<view class="rules-right">
				查看更多<image class="icon-under" :src="require('@/static/icon/under_arrow.png')"></image>
			</view>
		</view>

		<view class="page-list" :class="shop_car.length === 0 ? 'page-shop-show' : ''">
			<view class="page-list-left">
				<scroll-view scroll-y="true" class="list-scroll">
					<view class="scroll-item" :class="class_id === item.id ? 'active' : ''"
						v-for="(item, index) in class_list" :key="index" @click="handleClassSet(item.id)">
						<text class="scroll-item-txt">{{ item.title }}</text>
						<view class="item-hot" v-if="item.hot_txt">{{ item.hot_txt }}</view>
					</view>
				</scroll-view>
			</view>
			<view class="page-list-right">
				<scroll-view scroll-y="true" class="list-scroll" :class="shop_car.length === 0 ? 'list-shop-show' : ''">
					<swiper class="swiper" indicator-dots indicator-color="rgba(0, 0, 0, 0.3)"
						indicator-active-color="rgba(0, 0, 0, 0.6)" autoplay>
						<swiper-item v-for="(item, index) in cover_list" :key="index">
							<view class="swiper-item">
								<image class="swiper-item" mode="scaleToFill" :src="item.pic"></image>
							</view>
						</swiper-item>
					</swiper>

					<view class="goods-info">
						<view class="class-title">当季限定</view>
						<view class="goods-item" v-for="(item, index) in 5" :key="index">
							<view class="goods-item-left">
								<image class="goods-item-left" mode="aspectFit"
									:src="require('@/static/appicon/help.png')"></image>
							</view>
							<view class="goods-item-right">
								<view class="goods-name">霸气车厘子</view>
								<view class="goods-attr">
									<view class="hot-item">人气爆品</view>
									<view class="hot-item hot-active">人气爆品</view>
								</view>
								<view class="goods-desc">【650ml】 经典人气产品。酸甜草莓，四季出品。搭配金奖茉莉初雪，淋上轻盈香滑的芝士奶糖。喝上一口，酸甜鲜爽，满满的幸福感！
								</view>
								<view class="goods-price">
									<view class="price">￥36.00</view>
									<view class="select-space">选规格</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>

		<view class="page-shop" v-if="shop_car.length !== 0">
			<view class="shop-car" @click="handleShowBounced()">
				<image class="car-icon" :src="require('@/static/appicon/shop_car.png')"></image>
			</view>
			<view class="shop-car-num">1</view>
			<view class="shop-car-price">￥27.00</view>
			<view class="shop-car-btn">选好了</view>
		</view>

		<!-- 购物车弹框 -->
		<view class="bounced" :class="bounced_show ? '' : 'bounced-car-show'">
			<!-- 遮罩层 -->
			<view :class="{'bounced-box': modalState}" @click="handleHiddenModal()"></view>
			<!-- 遮罩层 -->
			<view class="bounced-item" :class="{'bounced-show': modalState}">
				<view class="shop-car-list">
					<view class="car-del">
						<image class="del-icon" :src="require('@/static/icon/del.png')"></image>清空
					</view>
					<scroll-view scroll-y="true" class="car-list-scroll">
						<view class="car-list-item" v-for="(item ,index) in 6" :key="index"></view>
					</scroll-view>
				</view>
			</view>
		</view>
		<!-- 购物车弹框 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				take_type: 1, // 1自取 2外卖
				notice_list: [{
					id: 1,
					icon: require('@/static/appicon/about.png'),
					text: '安抚巾克拉克斯顿积分·',
				}, {
					id: 2,
					icon: require('@/static/appicon/app.png'),
					text: '安抚巾克拉克斯顿积分·',
				}], // 轮播公告
				class_id: 1,
				business_status: 0, // 是否营业
				business_time: '10:00-22:00', // 营业时间
				shop_car: [{}], // 加入购物车
				class_list: [{
						id: 1,
						title: '神里绫华',
						hot_txt: '新品',
					},
					{
						id: 2,
						title: '摩拉克斯',
						hot_txt: 'HOT',
					},
					{
						id: 3,
						title: '早柚',
					},
					{
						id: 4,
						title: '宵宫',
					},
					{
						id: 5,
						title: '优菈',
					},
					{
						id: 6,
						title: '琴',
					},
					{
						id: 7,
						title: '迪奥娜',
					},
					{
						id: 8,
						title: '胡桃',
					},
					{
						id: 9,
						title: '枫原万叶',
					},
					{
						id: 10,
						title: '荒泷一斗',
					},
					{
						id: 11,
						title: '雷电将军',
					},
					{
						id: 12,
						title: '甘雨',
					},
					{
						id: 13,
						title: '宵',
					}
				],
				cover_list: [{
					id: 1,
					pic: 'https://img9.51tietu.net/pic/2019-091200/vgkpidei2tjvgkpidei2tj.jpg',
				}, {
					id: 2,
					pic: 'https://img9.51tietu.net/pic/2019-091200/euzekmi5m23euzekmi5m23.jpg',
				}, {
					id: 3,
					pic: 'https://img9.51tietu.net/pic/2019-091200/143tt0ta4sr143tt0ta4sr.jpg',
				}, {
					id: 4,
					pic: 'https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg',
				}],
				bounced_show: false, // 显示弹框
				modalState: false, // 弹框内容
			}
		},
		methods: {
			// 点击配送状态
			handleTake(type) {
				this.take_type = type
			},
			// 点击公告
			handleNotice(item) {},
			// 点击分类
			handleClassSet(id) {
				this.class_id = id
			},
			// 点击显示购物车列表
			handleShowBounced() {
				this.bounced_show = !this.bounced_show
				this.modalState = !this.modalState
			},
			// 显示弹框
			handleShowModal() {
				this.modalState = true;
			},
			// 隐藏弹框
			handleHiddenModal() {
				this.modalState = false;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page-index {
		position: relative;
		padding-top: 98rpx;
		font-size: 24rpx;
		color: #242424;
		background-color: #FFFFFF;

		.align-center {
			display: flex;
			align-items: center;
		}

		.page-search {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 15rpx;
			height: 60rpx;

			.block {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 166rpx;
				height: 56rpx;
				font-size: 26rpx;
				color: #242524;
				border: 2rpx solid #e3e5e7;
				border-radius: 50rpx;

				.icon-cup {
					width: 35rpx;
					height: 35rpx;
					margin-right: 15rpx;
				}
			}

			.input {
				width: 280rpx;
				height: 60rpx;
				border-radius: 50rpx;
				background-color: #f9f9f9;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #a0a4a6;
				font-size: 26rpx;

				.icon-search {
					width: 35rpx;
					height: 35rpx;
					margin-right: 10rpx;
				}
			}

			.hidden {
				width: 170rpx;
				height: 60rpx;
			}
		}

		.page-distance {
			margin-top: 20rpx;
			margin-bottom: 10rpx;
			height: 95rpx;
			padding: 0 30rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.distance-left {
				width: 70%;
				height: 95rpx;
				display: flex;
				align-items: center;
				flex-wrap: wrap;

				.address {
					width: 100%;
					height: 55rpx;
					display: flex;
					align-items: center;
					font-size: 30rpx;
					font-weight: bold;
					color: #242524;

					.icon-right {
						margin-left: 10rpx;
						width: 20rpx;
						height: 20rpx;
					}
				}

				.distance {
					width: 100%;
					height: 40rpx;
					line-height: 40rpx;
					font-size: 24rpx;
					color: #a4a7aa;
				}
			}

			.distance-right {
				width: 30%;
				height: 95rpx;
				display: flex;
				align-items: center;
				justify-content: flex-end;
				overflow: hidden;

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
		}

		.page-rules {
			width: 100%;
			height: 70rpx;
			margin-bottom: 4rpx;
			color: #5a5959;
			font-size: 24rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			z-index: 55;
			box-shadow: 0 10rpx 10rpx -10rpx rgba(0, 0, 0, 0.1);

			.rules-left {
				width: 70%;
				height: 70rpx;
				margin-left: 30rpx;

				.notice-item {
					width: 100%;
					height: 70rpx;

					.notice-icon {
						width: 40rpx;
						height: 40rpx;
						margin-right: 10rpx;
					}

					.notice-txt {
						width: 430rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
				}
			}

			.rules-right {
				width: 30%;
				height: 70rpx;
				display: flex;
				align-items: center;
				justify-content: flex-end;
				margin-right: 30rpx;

				.icon-under {
					margin-left: 10rpx;
					width: 25rpx;
					height: 25rpx;
				}
			}
		}

		.rules-show {
			position: fixed;
			z-index: 66;
			top: 342rpx;
			left: 0;
			height: 200rpx !important;
			box-shadow: none !important;
		}

		.page-list {
			width: 100%;
			height: calc(100vh - 472rpx);
			display: flex;
			align-items: center;
			justify-content: space-between;

			&-left {
				width: 180rpx;
				height: 100%;
				background-color: #f5f5f5;

				.list-scroll {
					width: 180rpx;
					height: 100%;

					.scroll-item {
						position: relative;
						width: 180rpx;
						height: 100rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						font-size: 24rpx;
						color: #707274;

						.scroll-item-txt {
							width: 150rpx;
							height: 100rpx;
							text-align: center;
							line-height: 100rpx;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}

						.item-hot {
							position: absolute;
							top: 0;
							right: 0;
							color: #b0d342;
							font-size: 18rpx;
							padding: 2rpx 8rpx;
							font-weight: bold;
							display: flex;
							align-items: center;
							justify-content: center;
							background-color: #ecf1dd;
						}
					}

					.active {
						width: 170rpx;
						font-size: 24rpx;
						font-weight: bold;
						color: #242524;
						background-color: #FFFFFF;
						border-left: 10rpx solid #b0d342;
					}
				}
			}

			&-right {
				margin-top: 15rpx;
				width: 570rpx;
				height: auto;
				padding: 0 20rpx;
				background-color: #FFFFFF;

				.list-scroll {
					width: 100%;
					height: calc(100vh - 489rpx);

					.swiper {
						width: 100%;
						height: 300rpx;

						.swiper-item {
							width: 100%;
							height: 300rpx;
							border-radius: 4rpx;
						}
					}

					.goods-info {
						height: auto;

						.class-title {
							font-size: 26rpx;
							height: 60rpx;
							color: #242524;
							line-height: 60rpx;
						}

						.goods-item {
							height: auto;
							display: flex;
							align-items: flex-start;
							justify-content: space-between;
							margin-bottom: 10rpx;

							&-left {
								width: 140rpx;
								height: 150rpx;
							}

							&-right {
								width: 380rpx;
								height: auto;

								.goods-name {
									height: 55rpx;
									font-size: 28rpx;
									line-height: 55rpx;
									color: #242524;
									overflow: hidden;
									text-overflow: ellipsis;
									white-space: nowrap;
								}

								.goods-attr {
									height: auto;
									display: flex;
									flex-wrap: wrap;
									align-items: center;

									.hot-item {
										display: flex;
										align-items: center;
										justify-content: center;
										border-radius: 4rpx;
										padding: 4rpx 8rpx;
										font-size: 18rpx;
										color: #a0a4a6;
										background-color: #f7f7f7;
										margin-right: 10rpx;
										margin-bottom: 10rpx;
									}

									.hot-active {
										color: #eea2b1;
										background-color: #f9f3f3;
									}
								}

								.goods-desc {
									height: 36rpx;
									line-height: 36rpx;
									font-size: 20rpx;
									color: #a0a4a6;
									overflow: hidden;
									text-overflow: ellipsis;
									white-space: nowrap;
								}

								.goods-price {
									display: flex;
									align-items: center;
									justify-content: space-between;
									height: 60rpx;

									.price {
										font-size: 30rpx;
										font-weight: bold;
									}

									.select-space {
										width: 110rpx;
										height: 45rpx;
										font-size: 24rpx;
										color: #242524;
										line-height: 45rpx;
										text-align: center;
										border-radius: 50rpx;
										background-color: #b0d342;
									}
								}
							}
						}

						.goods-item:last-child {
							margin-bottom: 20rpx;
						}
					}
				}
			}
		}

		.page-shop-show {
			height: calc(100vh - 356rpx) !important;
		}

		.list-shop-show {
			height: calc(100vh - 373rpx) !important;
		}

		.list-show {
			margin-top: 70rpx;
		}

		.page-shop {
			position: relative;
			bottom: 0;
			width: 100%;
			height: 116rpx;
			box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);
			background-color: #FFFFFF;
			display: flex;
			align-items: center;
			justify-content: space-between;
			z-index: 100;

			.shop-car {
				position: absolute;
				top: -30rpx;
				left: 36rpx;
				width: 116rpx;
				height: 116rpx;
				background-color: #b0d342;
				border-radius: 50%;
				display: flex;
				align-items: center;
				justify-content: center;

				.car-icon {
					width: 70rpx;
					height: 70rpx;
				}
			}

			.shop-car-num {
				position: absolute;
				top: -30rpx;
				left: 130rpx;
				width: 36rpx;
				height: 36rpx;
				border-radius: 50%;
				color: #242524;
				line-height: 36rpx;
				text-align: center;
				font-size: 20rpx;
				background-color: #f7e965;
			}

			.shop-car-price {
				width: 75%;
				height: 116rpx;
				padding-left: 170rpx;
				color: #242524;
				font-size: 32rpx;
				font-weight: bold;
				line-height: 116rpx;
			}

			.shop-car-btn {
				width: 25%;
				height: 116rpx;
				font-size: 30rpx;
				line-height: 116rpx;
				text-align: center;
				color: #242524;
				background-color: #b0d342;
			}
		}

		.bounced {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: calc(100vh - 116rpx);
			z-index: 99;

			.bounced-box {
				width: 100%;
				height: 100%;
				position: fixed;
				top: 0rpx;
				left: 0rpx;
				bottom: 0rpx;
				right: 0rpx;
				background-color: rgba(0, 0, 0, 0.4);
				transition: .5s;
				z-index: 999;
			}

			// 进入弹框动画
			.bounced-show {
				transition: all 0.5s ease;
				transform: translateY(0%) !important;
			}

			// 离开弹框动画
			.bounced-item {
				position: fixed;
				left: 0;
				bottom: 0;
				width: 100%;
				height: auto;
				transition: all 0.5s ease;
				transform: translateY(100%);
				z-index: 1999;
				background-color: #FFFFFF;
				border-top-left-radius: 20rpx;
				border-top-right-radius: 20rpx;
				overflow: hidden;
			}

			.shop-car-list {
				width: 100%;
				height: auto;
				margin-bottom: 116rpx;

				.car-del {
					display: flex;
					align-items: center;
					justify-content: flex-end;
					padding: 0 30rpx;
					height: 70rpx;
					color: #757679;
					font-size: 24rpx;
					background-color: #f9fafa;

					.del-icon {
						width: 25rpx;
						height: 25rpx;
						margin-right: 10rpx;
					}
				}

				.car-list-scroll {
					max-height: 830rpx;

					.car-list-item {
						width: 92%;
						margin: 0 auto;
						height: 150rpx;
						border-bottom: 2rpx solid #4cd964;
					}

					.car-list-item:last-child {
						border-bottom: none;
					}
				}
			}
		}

		.bounced-car-show {
			transition: all 1s ease;
			z-index: -1000 !important;
		}
	}
</style>
