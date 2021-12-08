<template>
	<view class="page-index">
		<!-- 导航栏 -->
		<base-ani-tab-bar :listArr="list" @handleActive="handleTab"></base-ani-tab-bar>
		<!-- 导航栏 -->

		<!-- 卡券列表 -->
		<view class="card-list" v-if="card_list.length !== 0">
			<view class="card-item" v-for="(item, index) in card_list" :key="index" @click="handleShowDetail(item)">
				<view class="top">
					<view class="image">
						<image class="icon-image" mode="aspectFit" :src="item.image">
						</image>
					</view>
					<view class="title">
						<view class="name">{{ item.title }}</view>
						<view class="date">
							有效期：{{ item.star_time.split(' ')[0] }}<span>至</span>{{ item.end_time.split(' ')[0] }}</view>
					</view>
				</view>

				<view class="line"></view>

				<view class="bottom">
					<view class="date">使用时段：{{ item.star_time.split(' ')[1] }}-{{ item.end_time.split(' ')[1] }}</view>
					<view class="details">查看详情</view>
				</view>
			</view>
		</view>

		<view class="no-data" v-else>
			<image class="no-icon" mode="aspectFit" :src="require('@/static/image/no-data.png')"></image>
			<view class="no-data-txt">还没有卡券</view>
		</view>

		<view class="loading" v-if="loading">
			<image class="icon-loading" :src="require('@/static/image/loading.gif')"></image>
		</view>
		<!-- 卡券列表 -->

		<!-- 底部导航 -->
		<view class="bottom-navigation" v-if="page_type === 'mine'">
			<view class="txt" @click="handleJump({
				type: './exchange_center',
			})">优惠券兑换</view>
			<view class="line"></view>
			<view class="txt" @click="handleJump({
				type: './member_card_voucher?type=history',
			})">历史卡券</view>
		</view>
		<!-- 底部导航 -->

		<!-- 详情 -->
		<view class="suspension" v-if="detail_status">
			<view class="suspension-box"></view>
			<view class=" block-item">
				<view class="item">
					<view class="item-title">{{ card_detail.title }}</view>
					<view class="item-date">{{ card_detail.star_time }}-{{ card_detail.end_time }}</view>
					<view class="item-time">(具体请以门店营业时间为准)</view>
					<view class="item-desc" v-html="card_detail.desc"></view>
				</view>
				<view class="block-icon">
					<image class="del-icon-image" @click.stop="handleHideDetail()"
						:src="require('@/static/appicon/del1.png')"></image>
				</view>
			</view>
		</view>
		<!-- 详情 -->
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
				list: [], // 选项卡列表
				page_type: 'mine', // 页面类型
				active_index: 0, // 选项卡索引
				loading: false, // 上拉刷新 loading
				detail_status: false, // 优惠券详情弹框显示
				card_list: [], // 优惠券列表
				card_detail: {}, // 优惠券详情
			}
		},
		onLoad(e) {
			// type mine 我的卡券 history 历史卡券
			this.page_type = e.type
			let title = e.type === 'mine' ? '我的卡券' : e.type === 'history' ? '历史卡券' : '我的卡券'
			this.list = e.type === 'mine' ? ['全部', '茶饮券', '酒屋券', '零售券'] : e.type === 'history' ? ['已使用', '已失效'] : ['全部',
				'茶饮券', '酒屋券', '零售券'
			]
			uni.setNavigationBarTitle({
				title: title
			});
			this.handleGetData()
		},
		// 下拉刷新
		onPullDownRefresh() {
			// uni.startPullDownRefresh();
			//
			// this.card_list = []
			//
			// setTimeout((res) => {
			//   if (this.active_index === 0 || this.active_index === 3) {
			//     this.handleGetData()
			//   }
			// 	uni.stopPullDownRefresh();
			// }, 1000);
		},
		// 上拉加载
		onReachBottom() {
			this.loading = true
			setTimeout((res) => {
				this.loading = false
				this.handleGetData()
			}, 1000)
		},
		methods: {
			handleTab(index) {
				this.active_index = index
				if (this.active_index === 1 || this.active_index === 2) {
					this.card_list = []
				} else {
					if (this.card_list.length === 0) {
						this.handleGetData()
					}
				}
			},
			handleGetData() {
				for (let i = 0; i < 6; i++) {
					this.card_list.push({
						id: 1,
						title: '新人优惠券' + i,
						image: require('@/static/appicon/exchange.png'),
						star_time: '2021-04-15 00:00:00',
						end_time: '2021-05-15 23:59:59',
						desc: '<p>1. 适用商品：下单购买饮品或软欧包立减5元优惠</p><p>2.适用门店：奈雪中国地区内地门店(不含机场店)</p><p>3. 适用场景：仅限奈雪线下门店出示会员码或【奈雪点单】小程序“自取”/“外卖”使用，不适用于第三方外送服务</p><p>4. 在有效期内每单仅限使用一张优惠券，不可叠加使用不与其他优惠活动共享，不可兑换现金，不设找零优惠券抵扣金额不予积分</p><p>5. 此券不适用于保温袋/运费</p><p>6. 券面图片仅供参考，商品以实物为准</p>',
					})
				}
			},
			// 页面跳转
			handleJump(link) {
				uni.navigateTo({
					url: link.type
				});
			},
			// 显示详情
			handleShowDetail(data) {
				this.detail_status = true
				this.card_detail = data
			},
			// 隐藏详情
			handleHideDetail() {
				this.detail_status = false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page-index {
		font-size: 24rpx;
		color: #242424;
		padding-top: 110rpx;
		padding-bottom: 110rpx;

		.card-list {
			width: 85%;
			height: auto;
			margin: 20rpx auto 0;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;

			.card-item {
				position: relative;
				width: 100%;
				height: auto;
				margin-bottom: 20rpx;
				border-radius: 12rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				padding: 10rpx;
				background-color: #FFFFFF;
				box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);

				.top {
					height: 150rpx;
					width: 92%;
					display: flex;
					align-items: center;

					.image {
						width: 150rpx;
						height: 150rpx;
						border-radius: 12rpx;
						margin-right: 15rpx;
						overflow: hidden;

						.icon-image {
							width: 150rpx;
							height: 150rpx;
							border-radius: 12rpx;
						}
					}

					.title {
						width: 70%;
						height: 150rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						flex-direction: column;

						.name {
							width: 100%;
							line-height: 40rpx;
							height: 40rpx;
							font-size: 28rpx;
							color: #242524;
							font-weight: bold;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}

						.date {
							width: 100%;
							line-height: 40rpx;
							height: 40rpx;
							font-size: 24rpx;
							color: #6f7274;

							span {
								margin: 0 10rpx;
							}
						}
					}
				}

				.line {
					margin: 10rpx 0;
					width: 90%;
					border: 1rpx dashed #e2e4e6;
				}

				.bottom {
					height: 60rpx;
					width: 92%;
					display: flex;
					align-items: center;
					justify-content: space-between;
					font-size: 24rpx;

					.date {
						color: #6f7274;
					}

					.details {
						color: #b0d342;
					}
				}
			}

			.card-item::after {
				position: absolute;
				left: -14rpx;
				bottom: 66rpx;
				content: '';
				width: 30rpx;
				height: 30rpx;
				border-radius: 0 50% 50% 0;
				background-color: #f3f4f4;
			}

			.card-item::before {
				position: absolute;
				right: -14rpx;
				bottom: 66rpx;
				content: '';
				width: 30rpx;
				height: 30rpx;
				border-radius: 50% 0 0 50%;
				background-color: #f3f4f4;
			}
		}

		.loading {
			width: 100%;
			height: 60rpx;
			display: flex;
			align-items: center;
			justify-content: center;

			.icon-loading {
				width: 50rpx;
				height: 50rpx;
			}
		}

		.no-data {
			width: 100%;
			height: 700rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			color: #707274;
			font-size: 24rpx;

			.no-icon {
				width: 300rpx;
				height: 300rpx;
			}
		}

		.bottom-navigation {
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 100rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #FFFFFF;
			z-index: 99;
			box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);

			.txt {
				width: 50%;
				height: 100rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 26rpx;
			}

			.line {
				width: 2rpx;
				height: 30rpx;
				background-color: #ccced0;
			}
		}

		.suspension {
			width: 100%;
			height: 100%;

			.suspension-box {
				width: 100%;
				height: 100%;
				position: fixed;
				top: 0;
				left: 0;
				bottom: 0;
				right: 0;
				background-color: rgba(0, 0, 0, 0.4);
				z-index: 10000;
			}

			.block-item {
				position: fixed;
				top: 45%;
				left: 50%;
				transform: translate(-50%, -50%);
				width: 90%;
				height: 800rpx;
				border-radius: 12rpx;
				overflow: hidden;
				z-index: 10001;

				.item {
					height: auto;
					border-radius: 12rpx;
					background-color: #FFFFFF;
					display: flex;
					flex-direction: column;
					padding: 40rpx;

					.item-title {
						height: 40rpx;
						line-height: 40rpx;
						font-size: 30rpx;
						font-weight: bold;
						text-align: center;
						color: #242524;
					}

					.item-date {
						margin-top: 10rpx;
						height: 40rpx;
						line-height: 40rpx;
						font-size: 24rpx;
						color: #707274;
					}

					.item-time {
						height: 40rpx;
						line-height: 40rpx;
						font-size: 26rpx;
						color: #242524;
						margin-top: 20rpx;
						margin-bottom: 10rpx;
					}

					.item-desc {
						height: auto;
						line-height: 45rpx;
						font-size: 24rpx;
						color: #707274;
					}
				}

				.block-icon {
					width: 100%;
					height: 150rpx;
					display: flex;
					align-items: center;
					justify-content: center;

					.del-icon-image {
						width: 60rpx;
						height: 60rpx;
						border-radius: 50%;
					}
				}
			}
		}
	}
</style>
