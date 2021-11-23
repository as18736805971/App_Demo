<template>
	<view class="page-index">
		<!-- 顶部导航栏 -->
		<view class="navigation-top">
			<view class="member-item">
				<view class="portrait">
					<image class="icon" :src="userInfo.avatarUrl"></image>
				</view>
				<view class="nick-name">
					{{ userInfo.nickName }}
					<image class="icon" :src="require('@/static/icon/right_arrow.png')"></image>
				</view>
				<view class="member-level">
					<template v-if="userInfo.auth">
						<view class="level">
							<view class="level-name">LV20</view>
							<view class="level-desc">
								会员权益
								<image class="icon" :src="require('@/static/icon/right_arrow.png')"></image>
							</view>
						</view>
						<view class="content">
							<view class="left">
								<view class="level-num">{{ userInfo.growth_value }}/100</view>
								<view class="level-line"></view>
								<view class="level-desc">
									距离下一等级只差100成长值
									<image class="icon" :src="require('@/static/icon/right_arrow.png')"></image>
								</view>
							</view>
							<view class="right">
								<image class="icon" :src="require('@/static/appicon/code.png')"></image>
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
			</view>
		</view>
		<!-- 顶部导航栏 -->

		<!-- 我的资产 -->
		<view class="assets"></view>
		<!-- 我的资产 -->

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
		data() {
			return {
        userInfo: {
					auth: false, // 授权
					nickName: '亲爱的用户',
					avatarUrl: require('@/static/appicon/portrait.png'),
					growth_value: 50, // 成长值
				}
			}
		},
		onLoad() {

		},
		methods: {
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
								width: 400rpx;
								height: 10rpx;
								background-color: #FFFFFF;
								border-radius: 10rpx;
								margin: 20rpx 0;
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
			height: 200rpx;
			background-color: #4cd964;
		}
	}
</style>
