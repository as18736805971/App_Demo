<template>
	<view class="page-index">
		<!-- 封面图 -->
		<swiper class="cover-list" :indicator-dots="true" :indicator-color="'rgba(0, 0, 0, 0.3)'"
			:indicator-active-color="'rgba(0, 0, 0, 0.6)'" :autoplay="true" :interval="3000" :circular="true">
			<swiper-item v-for="(item, index) in cover_list" :key="index">
				<view class="swiper-item" @click="handleCover(item)">
					<image class="swiper-item" mode="scaleToFill" :src="item.pic"></image>
				</view>
			</swiper-item>
		</swiper>
		<!-- 封面图 -->

		<!-- 会员积分 -->
		<view class="member-integral">
			<view class="left-integral">
				<view class="portrait">
					<image class="icon-portrait" :src="require('@/static/appicon/portrait.png')"></image>
					<view class="level">
						<image class="level-icon" :src="require('@/static/appicon/level.png')"></image>
					</view>
				</view>
				<view class="integral">
					<view class="name">你的眼里有星星</view>
					<view class="level-item">
						<view class="level-line" :style="{ width: getWid }">
							<view class="active" :style="{ width: activePx }"></view>
						</view>
						10/100
					</view>
				</view>
			</view>
			<view class="right-integral">
				<view class="right-item" @click="handleJump({type: '../mine/member_qr_code'})">
					<view class="item-num">99</view>
					<view class="item-txt">积分</view>
				</view>
				<view class="right-item" @click="handleJump({type: '../mine/member_card_voucher?type=mine'})">
					<view class="item-num">8</view>
					<view class="item-txt">优惠券</view>
				</view>
				<view class="right-item" @click="handleJump({type: '../mine/member_qr_code'})">
					<view class="item-num">
						<image class="ewm-item" :src="require('@/static/appicon/code1.png')"></image>
					</view>
					<view class="item-txt">会员码</view>
				</view>
			</view>
		</view>
		<!-- 会员积分 -->

		<!-- 卡片组件 -->
		<page-card :list="card_list" @handleCard="handleCard"></page-card>
		<!-- 卡片组件 -->

		<!-- 卡片列表 -->
		<view class="card-list">
			<view class="card-item" v-for="(item, index) in card_list_new" :key="index" @click="handleCardNew(item, index)">
				<view class="card-title">{{ item.title }}</view>
				<view class="card-desc">{{ item.desc }}</view>
				<view class="card-image">
					<image class="card-icon" mode="aspectFit" :src="item.icon"></image>
				</view>
			</view>
		</view>
		<!-- 卡片列表 -->

		<!-- 会员更多 -->
		<view class="member-more">
			<view class="member-title">
				<view class="left-title">会员新鲜事</view>
				<view class="left-more" @click="handleMemberMore()">更多
					<image class="icon-right" :src="require('@/static/icon/right_arrow.png')"></image>
				</view>
			</view>
			<view class="member-item">
				<image class="member-image" v-for="(item, index) in member_list" :key="index"
					@click="handleMember(item)" :src="item.image"></image>
			</view>
		</view>
		<!-- 会员更多 -->

	</view>
</template>

<script>
	import pageCard from '@/components/components/card'
	export default {
		components: {
			pageCard
		},
		data() {
			return {
				growth: {
					wid: 200, // 未选中长度 默认长度
					max_value: 100, // 最大成长值
					value: 10, // 当前成长值
				},
				// 封面图数据
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
				// 卡片数据
				card_list: [{
						id: 1,
						title: '早柚',
						icon: require('@/static/appicon/help.png'),
						desc: '神里绫华 巴巴托斯',
					},
					{
						id: 2,
						title: '宵宫',
						icon: require('@/static/appicon/password.png'),
						desc: '璃月钟离 稻妻雷神',
					},
					{
						id: 3,
						title: '甘雨',
						icon: require('@/static/appicon/price.png'),
						desc: '枫原万叶 九条裟罗',
					}
				],
				// 卡片数据
				card_list_new: [{
						id: 1,
						title: '早柚',
						icon: 'https://img9.51tietu.net/pic/2019-091200/vgkpidei2tjvgkpidei2tj.jpg',
						desc: '神里绫华 巴巴托斯',
					},
					{
						id: 2,
						title: '心意卡兑换',
						icon: 'https://img9.51tietu.net/pic/2019-091200/euzekmi5m23euzekmi5m23.jpg',
						desc: '广发生日季心意卡',
					},
					{
						id: 3,
						title: '积分商城',
						icon: 'https://img9.51tietu.net/pic/2019-091200/143tt0ta4sr143tt0ta4sr.jpg',
						desc: '兑换限量周边',
					}
				],
				// 会员新鲜事
				member_list: [{
					id: 1,
					image: 'https://img9.51tietu.net/pic/2019-091200/vgkpidei2tjvgkpidei2tj.jpg',
				}, ],
			}
		},
		computed: {
			getWid() {
				return this.growth.wid.toString() + "px"
			},
			// 选中成长值长度
			activePx() {
				return (this.growth.value / this.growth.max_value * this.growth.wid) + 'px'
			},
		},
		onLoad() {},
		methods: {
			// 点击封面图
			handleCover(data) {
				console.log('🥒', data)
			},
			// 点击卡片
			handleCard(data) {
				console.log('🥒', data)
			},
			// 点击卡片
			handleCardNew(data, index) {
				if (index === 0) {
          this.handleJump({type: '../mine/exchange_center?type=1'})
        } else if(index ===1 ) {
          this.handleJump({type: '../mine/exchange_center?type=1'})
        } else {
          this.handleJump({type: '../mine/exchange_center?type=1'})
        }
			},
			// 点击会员新鲜事更多
			handleMemberMore() {
        this.handleJump({type: '../mine/member_new_list'})
			},
			// 点击会员新鲜事
			handleMember(data) {
        this.handleJump({type: '../mine/member_new_list'})
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
		font-size: 24rpx;
		color: #262626;
		padding-bottom: 30rpx;

		.cover-list {
			width: 100%;
			height: 640rpx;

			.swiper-item {
				width: 100%;
				height: 640rpx;
			}
		}

		.member-integral {
			padding: 0 20rpx;
			height: 136rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.left-integral {
				width: 45%;
				height: 136rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.portrait {
					position: relative;
					width: 35%;
					height: 136rpx;
					display: flex;
					align-items: center;

					.icon-portrait {
						width: 90rpx;
						height: 90rpx;
						border-radius: 50%;
					}

					.level {
						position: absolute;
						top: 82rpx;
						right: 10rpx;
						width: 50rpx;
						height: 30rpx;
						background-color: #FFFFFF;
						border-radius: 30rpx;
						z-index: 99;
						display: flex;
						align-items: center;
						justify-content: center;
						box-shadow: 2rpx 3rpx 10rpx rgba(0, 0, 0, 0.1);

						.level-icon {
							width: 20rpx;
							height: 20rpx;
						}
					}
				}

				.integral {
					width: 65%;
					height: 136rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					flex-direction: column;

					.name {
						width: 200rpx;
						height: 50rpx;
						letter-spacing: 2rpx;
						font-size: 26rpx;
						text-align: center;
						line-height: 50rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}

					.level-item {
						width: 200rpx;
						height: 50rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						color: #747474;

						.level-line {
							height: 10rpx;
							background-color: #eaeaea;
							border-radius: 10rpx;
							overflow: hidden;
							margin-right: 10rpx;

							.active {
								height: 100%;
								background-color: #b0d341;
							}
						}
					}
				}
			}

			.right-integral {
				width: 55%;
				height: 136rpx;
				display: flex;
				align-items: center;
				justify-content: flex-end;

				.right-item {
					width: auto;
					height: 136rpx;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					margin-right: 20rpx;

					.item-num {
						min-width: 80rpx;
						height: 50rpx;
						font-size: 26rpx;
						font-weight: bold;
						display: flex;
						align-items: center;
						justify-content: center;

						.ewm-item {
							width: 40rpx;
							height: 40rpx;
						}
					}

					.item-txt {
						min-width: 80rpx;
						height: 50rpx;
						line-height: 50rpx;
						color: #7c7c7e;
						text-align: center;
					}
				}

				.right-item:last-child {
					margin-right: 0;
				}
			}
		}

		.card-list {
			padding: 0 20rpx;
			height: auto;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			flex-wrap: wrap;

			.card-item {
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				width: 31.44444444%;
				height: auto;
				margin-right: 20rpx;
				border-radius: 12rpx;
				background-color: #ffffff;
				margin-bottom: 20rpx;

				.card-title {
					margin-top: 20rpx;
					width: 80%;
					height: 40rpx;
					text-align: center;
					line-height: 40rpx;
					font-size: 26rpx;
					font-weight: bold;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					letter-spacing: 1rpx;
				}

				.card-desc {
					width: 80%;
					height: 40rpx;
					text-align: center;
					line-height: 40rpx;
					color: #959597;
					font-size: 20rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}

				.card-image {
					width: 80%;
					height: 150rpx;
					margin-bottom: 20rpx;
					display: flex;
					align-items: center;
					justify-content: center;

					.card-icon {
						width: 80%;
						height: 130rpx;
						overflow: hidden;
					}
				}
			}

			.card-item:nth-child(3n) {
				margin-right: 0;
			}
		}

		.member-more {
			padding: 0 20rpx;
			height: auto;

			.member-title {
				height: 70rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 10rpx;

				.left-title {
					height: 70rpx;
					line-height: 70rpx;
					font-size: 28rpx;
					font-weight: bold;
					letter-spacing: 2rpx;
				}

				.left-more {
					height: 70rpx;
					color: #77787a;
					display: flex;
					align-items: center;
					justify-content: flex-end;

					.icon-right {
						width: 20rpx;
						height: 20rpx;
						margin-left: 10rpx;
					}
				}
			}

			.member-item {
				width: 100%;
				height: auto;

				.member-image {
					border-radius: 12rpx;
					width: 100%;
					height: 250rpx;
					margin-bottom: 20rpx;
				}

				.member-image:last-child {
					margin-bottom: 0;
				}
			}
		}
	}
</style>
