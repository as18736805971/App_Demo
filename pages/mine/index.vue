<template>
	<view class="page-index">
		<!-- 顶部导航栏 -->
		<view class="navigation-top">
			<view class="member-item">
				<view class="portrait" @click="handleJump({
			  type:'./info'
			})">
					<image class="icon" :src="userInfo.avatarUrl"></image>
				</view>
				<view class="nick-name" @click="handleJump({
			  type:'./info'
			})">
					{{ userInfo.nickName }}
					<image class="icon" :src="require('@/static/icon/right_arrow.png')"></image>
				</view>

				<!-- 会员卡 -->
				<view class="member-level">
					<template v-if="userInfo.auth">
						<view class="level">
							<view class="level-name" @click.stop="handleJump({
                type:'./member_interests'
              })">LV20</view>
							<view class="level-desc" @click.stop="handleJump({
                type:'./member_interests'
              })">
								会员权益
								<image class="icon" :src="require('@/static/icon/right_arrow.png')"></image>
							</view>
						</view>
						<view class="content">
							<view class="left">
								<view class="level-num">{{ growth.value }}/{{ growth.max_value }}</view>
								<view class="level-line" :style="{ width: getWid }">
									<view class="active" :style="{ width: activePx }"></view>
								</view>
								<view class="level-desc" @click="handleJump({
                  type:'./member_interests'
                })">
									距离下一等级只差{{ poor_value }}成长值
									<image class="icon" :src="require('@/static/icon/right_arrow.png')"></image>
								</view>
							</view>
							<view class="right" @click.stop="handleJump({
                type:'./member_qr_code'
              })">
								<image class="icon" :src="require('@/static/appicon/code1.png')"></image>
								<view class="ewm">会员码</view>
							</view>
						</view>
					</template>
					<tempalte v-else>
						<view class="member-desc">
							成为会员
						</view>
						<view class="member-desc">
							享受更多会员权益
						</view>
						<view class="member-btn" @click="handleAuthModal(1)">立即授权</view>
					</tempalte>
				</view>
				<!-- 会员卡 -->
			</view>
		</view>
		<!-- 顶部导航栏 -->

		<!-- 我的资产 -->
		<view class="assets">
			<view class="top-item">
				<view>积分变动可第一时间得到通知</view>
				<view class="btn" @click="handleAuthEdit()">去领取</view>
			</view>
			<view class="content-item">
				<view class="title">我的资产</view>
				<view class="list">
					<view class="item" v-for="(item, index) in assets" :key="index" @click="handleJump(item.link)">
						<view class="block">{{ item.number }}</view>
						<view class="num">{{ item.title }}</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 我的资产 -->

		<!-- 我的服务 -->
		<view class="assets">
			<view class="content-item">
				<view class="title">我的服务</view>
				<view class="list">
					<view class="item distance" v-for="(item, index) in service" :key="index"
						@click="handleJump(item.link)">
						<view class="block">
							<image class="item-icon" :src="item.icon"></image>
							<view class="hot" v-if="item.hot">HOT</view>
						</view>
						<view class="num">{{ item.title }}</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 我的服务 -->

		<!-- 版权 -->
		<view class="copyright">
			会员卡最终解释权归你的眼里有星星诠释
		</view>
		<!-- 版权 -->

		<!-- 授权弹窗 -->
		<base-modal ref="modal_auth">
			<view class="modal-auth">
				<view class="title">
					<image class="icon" @click="handleAuthModal(2)" :src="require('@/static/icon/close-x.png')"></image>
				</view>
				<view class="content">
					<image class="icon" :src="require('@/static/image/cat.png')"></image>
					<view class="name">神里绫华，摩拉克斯钟离</view>
					<view class="name">在原神遇见游戏乐趣</view>
					<view class="desc">在原神遇见游戏乐趣班尼特</view>
					<view class="wechat-btn" @click="handleWeChatAuth()">
						<image class="wechat-icon" :src="require('@/static/icon/wechat.png')"></image>
						微信一键登录
					</view>
					<view class="auth-desc">
						授权登录即表示已阅读并同意<span class="active">《会员须知》</span><span class="active">《隐私权益》</span>
					</view>
				</view>
			</view>
		</base-modal>
		<!-- 授权弹窗 -->

	</view>
</template>

<script>
	import BaseModal from '@/components/base/BaseModal'
	export default {
		components: {
			BaseModal,
		},
		computed: {
			poor_value() {
				return Number(this.growth.max_value) - Number(this.growth.value)
			},
			getWid() {
				return this.growth.wid.toString() + "px"
			},
			// 选中成长值长度
			activePx() {
				return (this.growth.value / this.growth.max_value * this.growth.wid) + 'px'
			},
		},
		data() {
			return {
				growth: {
					wid: 200, // 未选中长度 默认长度
					max_value: 1000, // 最大成长值
					value: 100, // 当前成长值
				},
				userInfo: {
					auth: true, // 授权
					nickName: '亲爱的用户',
					avatarUrl: require('@/static/appicon/portrait.png'),
				},
				assets: [{
					title: '优惠券',
					number: 10,
					link: {
						type: './member_card_voucher',
					}
				}, {
					title: '积分商城',
					number: 98,
					link: {
						type: 'integral_shop',
					}
				}, {
					title: '余额(元)',
					number: 112.00,
					link: {
						type: 'price',
					}
				}, {
					title: '礼品卡',
					number: 6,
					link: {
						type: 'gift',
					}
				}, ], // 我的资产
				service: [{
					title: '储值有礼',
					icon: require('@/static/appicon/coupon.png'),
					hot: true,
					link: {
						type: './member_stored',
					}
				}, {
					title: '积分签到',
					icon: require('@/static/appicon/sign_in.png'),
					hot: false,
					link: {
						type: 'sign_in',
					}
				}, {
					title: '送TA心意',
					icon: require('@/static/appicon/gift.png'),
					hot: false,
					link: {
						type: 'heart',
					}
				}, {
					title: '联系客服',
					icon: require('@/static/appicon/mine.png'),
					hot: false,
					link: {
						type: 'service',
					}
				}, {
					title: '兑换中心',
					icon: require('@/static/appicon/exchange.png'),
					hot: false,
					link: {
						type: 'exchange',
					}
				}, {
					title: '收货地址',
					icon: require('@/static/appicon/address.png'),
					hot: false,
					link: {
						type: 'address',
					}
				}, {
					title: '开发票',
					icon: require('@/static/appicon/invoice.png'),
					hot: false,
					link: {
						type: 'invoice',
					}
				}, {
					title: '更多服务',
					icon: require('@/static/appicon/more.png'),
					hot: false,
					link: {
						type: 'more',
					}
				}, ], // 我的服务
			}
		},
		onLoad() {

		},
		methods: {
			// 成长值增加
			handleGrowthAdd() {
				if (this.growth.value < this.growth.max_value) {
					this.growth.value += 20
					if (this.growth.value > this.growth.max_value) {
						this.growth.value = this.growth.max_value
					}
				}
			},
			// 权限状态
			handleAuthEdit() {
				this.userInfo.auth = !this.userInfo.auth
			},
			// 授权弹窗
			handleAuthModal(type) {
				if (type === 2) {
					this.$refs.modal_auth.handleHiddenModal()
				} else {
					this.$refs.modal_auth.handleShowModal()
				}
			},
			// 微信授权登录
			handleWeChatAuth() {
				// 获取微信用户openid
				// uni.login({
				// 	success: function(data) {
				//     console.log(data.code, '授权')
				//   }
				// })
				// 获取微信用户信息
				uni.getUserProfile({
					desc: 'Wexin',
					success: res => {
						this.userInfo = {
							...this.userInfo,
							...res.userInfo
						}
						this.userInfo.auth = true
						this.$refs.modal_auth.handleHiddenModal()
					},
					fail: err => {}
				})
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

<style lang="scss">
	.page-index {
		width: 100%;
		min-height: 100vh;

		.modal-auth {
			height: auto;
			border-radius: 20rpx 20rpx 0 0;
			background-color: #FFFFFF;
			padding: 20rpx;

			.title {
				display: flex;
				align-items: center;
				justify-content: flex-end;
				height: 60rpx;

				.icon {
					width: 40rpx;
					height: 40rpx;
				}
			}

			.content {
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;

				.icon {
					width: 150rpx;
					height: 150rpx;
					border-radius: 50%;
					margin-bottom: 30rpx;
				}

				.name {
					height: 40rpx;
					text-align: center;
					line-height: 40rpx;
					color: #707274;
					font-size: 24rpx;
					margin-bottom: 5rpx;
				}

				.desc {
					margin-top: 30rpx;
					height: 40rpx;
					text-align: center;
					line-height: 40rpx;
					color: #707274;
					font-size: 24rpx;
					margin-bottom: 60rpx;
				}

				.wechat-btn {
					color: #FFFFFF;
					width: 100%;
					height: 80rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					line-height: 80rpx;
					background-color: #b0d342;
					border-radius: 50rpx;
					font-size: 26rpx;

					.wechat-icon {
						width: 36rpx;
						height: 36rpx;
						margin-right: 10rpx;
					}
				}

				.auth-desc {
					text-align: center;
					line-height: 40rpx;
					font-size: 24rpx;
					height: 40rpx;
					color: #a0a4a6;
					margin: 20rpx 0;

					.active {
						color: #bcda4f;
					}
				}
			}
		}

		.navigation-top {
			position: relative;
			width: 100%;
			height: 380rpx;
			background-color: #b0d341;
			margin-bottom: 400rpx;

			.member-item {
				position: absolute;
				left: 50%;
				top: 500rpx;
				transform: translate(-50%, -50%);
				width: 80%;
				height: auto;
				background-color: #FFFFFF;
				border-radius: 12rpx;
				box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);
				padding: 40rpx;

				.portrait {
					position: absolute;
					top: -10rpx;
					left: 50%;
					transform: translate(-50%, -50%);
					width: 140rpx;
					height: 140rpx;
					border-radius: 50%;
					overflow: hidden;

					.icon {
						width: 140rpx;
						height: 140rpx;
						border-radius: 50%;
					}
				}

				.nick-name {
					width: 100%;
					height: 120rpx;
					font-size: 32rpx;
					font-weight: bold;
					display: flex;
					align-items: center;
					justify-content: center;

					.icon {
						margin-left: 10rpx;
						width: 20rpx;
						height: 20rpx;
					}
				}

				.member-level {
					height: 260rpx;
					border-radius: 20rpx;
					background-color: #f6f8eb;
					padding: 20rpx 40rpx;

					.level {
						height: 80rpx;
						display: flex;
						align-items: center;
						justify-content: space-between;
						margin-bottom: 20rpx;

						.level-name {
							font-size: 30rpx;
							font-weight: bold;
							text-align: left;
						}

						.level-desc {
							font-size: 26rpx;
							color: #22231e;
							display: flex;
							align-items: center;

							.icon {
								margin-top: 2rpx;
								margin-left: 10rpx;
								width: 20rpx;
								height: 20rpx;
							}
						}
					}

					.content {
						height: 160rpx;
						display: flex;
						align-items: center;
						justify-content: space-between;

						.left {
							width: 85%;
							height: 160rpx;
							display: flex;
							flex-direction: column;

							.level-num {
								height: 46rpx;
								font-size: 24rpx;
								color: #72736e;
								line-height: 54rpx;
							}

							.level-line {
								height: 10rpx;
								background-color: #FFFFFF;
								border-radius: 10rpx;
								margin: 20rpx 0;
								overflow: hidden;

								.active {
									height: 100%;
									background-color: #b0d341;
								}
							}

							.level-desc {
								color: #22231d;
								font-size: 26rpx;
								height: 60rpx;
								display: flex;
								align-items: center;

								.icon {
									width: 20rpx;
									height: 20rpx;
									margin-left: 20rpx;
									margin-top: 2rpx;
								}
							}
						}

						.right {
							width: 15%;
							height: 160rpx;
							display: flex;
							flex-direction: column;
							align-items: center;
							justify-content: center;

							.icon {
								width: 50rpx;
								height: 50rpx;
								margin-bottom: 20rpx;
							}

							.ewm {
								font-size: 24rpx;
								color: #707267;
								text-align: center;
							}
						}
					}

					.member-desc {
						text-align: center;
						color: #242524;
						font-size: 28rpx;
						height: 64rpx;
						line-height: 64rpx;
					}

					.member-btn {
						width: 220rpx;
						height: 70rpx;
						color: #242524;
						margin: 40rpx auto 0;
						font-size: 26rpx;
						border-radius: 50rpx;
						text-align: center;
						line-height: 70rpx;
						background-color: #b0d342;
					}
				}
			}
		}

		.assets {
			padding: 20rpx;

			.top-item {
				width: 86%;
				margin: 0 auto;
				height: 80rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				background-color: #f6fbdd;
				border-radius: 20rpx 20rpx 0 0;
				font-size: 26rpx;
				color: #272a19;
				padding: 0 20rpx;
				box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);

				.btn {
					width: 120rpx;
					height: 50rpx;
					font-size: 24rpx;
					color: #272a19;
					line-height: 50rpx;
					background-color: #b0d341;
					border-radius: 50rpx;
					text-align: center;
				}
			}

			.content-item {
				border-radius: 20rpx;
				background-color: #FFFFFF;
				padding: 40rpx;
				box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);

				.title {
					height: 60rpx;
					font-size: 28rpx;
					line-height: 60rpx;
					color: #272a19;
					font-weight: bold;
				}

				.list {
					display: flex;
					align-items: center;
					flex-wrap: wrap;

					.item {
						width: 25%;
						display: flex;
						align-items: center;
						justify-content: center;
						flex-direction: column;

						.block {
							position: relative;
							width: 80rpx;
							height: 80rpx;
							display: flex;
							align-items: center;
							justify-content: center;
							font-size: 30rpx;
							font-weight: bold;

							.hot {
								position: absolute;
								top: -5rpx;
								right: -48rpx;
								width: 60rpx;
								height: 30rpx;
								font-size: 24rpx;
								display: flex;
								align-items: center;
								justify-content: center;
								transform: scale(0.7);
								color: #FFFFFF;
								padding: 4rpx 8rpx;
								background-color: #e05653;
								border-radius: 50rpx 50rpx 50rpx 0;
							}

							.item-icon {
								width: 60rpx;
								height: 60rpx;
							}
						}

						.num {
							height: 30rpx;
							font-size: 24rpx;
							text-align: center;
							line-height: 30rpx;
							color: #737373;
						}
					}

					.distance {
						margin-bottom: 15rpx;
					}
				}
			}
		}

		.copyright {
			height: 80rpx;
			line-height: 40rpx;
			text-align: center;
			color: #a0a1a3;
			font-size: 24rpx;
		}
	}
</style>
