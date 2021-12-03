<template>
	<view class="page-index">
		<!-- 会员等级 -->
		<view class="member-level">
			<view class="level-name">{{ userInfo.member_level }}</view>

			<view class="level-center">
				<view class="level-top">
					<view class="num-list">
						<view class="num" :class="index !== 0 ? 'num-right' + index : ''"
							v-for="(item, index) in level_list" :key="index">{{ item.growth }}</view>
					</view>
					<view class="level-line">
						<view class="round-list">
							<view class="round" :class="item.status ? 'active' : ''" v-for="(item, index) in level_list"
								:key="index"></view>
						</view>
					</view>
					<view class="txt-list">
						<view class="txt" v-for="(item, index) in level_list" :key="index">{{ item.name }}</view>
					</view>
				</view>
				<view class="level-desc">当前成长值为<span class="active">{{ userInfo.member_growth }}</span>，距离下一等级只差<span
						class="active">{{ userInfo.next_growth }}</span>成长值
				</view>
			</view>
		</view>
		<!-- 会员等级 -->

		<!-- 会员特权 -->
		<view class="member-privilege">
			<!-- 轮播图组件 -->
			<Shuffling :img-list="imgList" :autoplay="false" :circular="false" @selected="selectedBanner"></Shuffling>
			<!-- 轮播图组件 -->

			<view class="shuffling-item">{{ imgList[imgIndex].name }}会员特权</view>
		</view>
		<!-- 会员特权 -->

		<!-- 会员特权列表 -->
		<view class="member-list">
			<view class="item">
				<view class="top-txt">升级特权</view>
				<view class="title">神里绫华</view>
				<view class="item-list">
					<view class="block">
						<view class="block-item">
							<image class="block-icon" :src="require('@/static/appicon/coupon1.png')"></image>
							<view class="round">x1</view>
						</view>
						<view class="desc">5元外卖券</view>
					</view>
					<view class="block">
						<view class="block-item">
							<image class="block-icon" :src="require('@/static/appicon/coupon1.png')"></image>
							<view class="round">x1</view>
						</view>
						<view class="desc">5元外卖券</view>
					</view>
					<view class="block">
						<view class="block-item">
							<image class="block-icon" :src="require('@/static/appicon/coupon1.png')"></image>
							<view class="round">x1</view>
						</view>
						<view class="desc">5元外卖券</view>
					</view>
					<view class="block">
						<view class="block-item">
							<image class="block-icon" :src="require('@/static/appicon/coupon1.png')"></image>
							<view class="round">x1</view>
						</view>
						<view class="desc">5元外卖券</view>
					</view>
					<view class="block">
						<view class="block-item">
							<image class="block-icon" :src="require('@/static/appicon/coupon1.png')"></image>
							<view class="round">x1</view>
						</view>
						<view class="desc">5元外卖券</view>
					</view>
				</view>
			</view>
			<view class="item">
				<view class="top-txt">升级特权</view>
				<view class="title">神里绫华</view>
				<view class="item-list">
					<view class="block">
						<view class="block-item">
							<image class="block-icon" :src="require('@/static/appicon/coupon1.png')"></image>
							<view class="round">x1</view>
						</view>
						<view class="desc">5元外卖券</view>
					</view>
					<view class="block">
						<view class="block-item">
							<image class="block-icon" :src="require('@/static/appicon/coupon1.png')"></image>
							<view class="round">x1</view>
						</view>
						<view class="desc">5元外卖券</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 会员特权列表 -->
	</view>
</template>

<script>
	import Shuffling from '@/components/components/Shuffling'

	export default {
		components: {
			Shuffling,
		},
		data() {
			return {
				userInfo: {
					member_level: 'V1',
					member_growth: 80,
					next_growth: 20,
				},
				level_list: [{
						name: 'V1',
						growth: 0,
						status: true,
					},
					{
						name: 'V2',
						growth: 100,
						status: false,
					},
					{
						name: 'V3',
						growth: 500,
						status: false,
					},
					{
						name: 'V4',
						growth: 1000,
						status: false,
					},
					{
						name: 'V5',
						growth: 2000,
						status: false,
					},
					{
						name: 'V6',
						growth: 5000,
						status: false,
					},
				],
				imgList: [{
					url: 'https://img9.51tietu.net/pic/2019-091200/vgkpidei2tjvgkpidei2tj.jpg',
					id: 1,
					name: 'V1'
				}, {
					url: 'https://img9.51tietu.net/pic/2019-091200/euzekmi5m23euzekmi5m23.jpg',
					id: 2,
					name: 'V2'
				}, {
					url: 'https://img9.51tietu.net/pic/2019-091200/143tt0ta4sr143tt0ta4sr.jpg',
					id: 3,
					name: 'V3'
				}, {
					url: 'https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg',
					id: 4,
					name: 'V4'
				}, {
					url: 'https://img9.51tietu.net/pic/2019-091200/vgkpidei2tjvgkpidei2tj.jpg',
					id: 5,
					name: 'V5'
				}, {
					url: 'https://img9.51tietu.net/pic/2019-091200/euzekmi5m23euzekmi5m23.jpg',
					id: 6,
					name: 'V6'
				}],
				imgIndex: 0,
			}
		},
		methods: {
			// 点击轮播图图片
			selectedBanner(item, index) {
				this.imgIndex = index
				// console.log('🥒', item, index)
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

		.member-level {
			height: 260rpx;
			background-color: #FFFFFF;
			margin-bottom: 20rpx;
			padding: 30rpx 20rpx 20rpx;

			.level-name {
				height: 40rpx;
				font-size: 30rpx;
				color: #444444;
				line-height: 40rpx;
				font-weight: bold;
			}

			.level-center {
				height: 220rpx;
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				justify-content: center;

				.level-top {
					width: 100%;
					height: 160rpx;
					display: flex;
					align-content: center;
					justify-content: center;
					flex-wrap: wrap;

					.num-list {
						width: 80%;
						height: 40rpx;
						display: flex;
						align-items: center;

						.num {
							font-size: 24rpx;
							color: #a2a2a2;
						}

						.num-right1 {
							margin-left: 85rpx;
						}

						.num-right2 {
							margin-left: 75rpx;
						}

						.num-right3 {
							margin-left: 65rpx;
						}

						.num-right4 {
							margin-left: 55rpx;
						}

						.num-right5 {
							margin-left: 55rpx;
						}
					}

					.txt-list {
						width: 80%;
						height: 40rpx;
						display: flex;
						align-items: center;
						justify-content: space-between;

						.txt {
							font-size: 24rpx;
							color: #4b4c4e;
						}
					}

					.level-line {
						position: relative;
						width: 80%;
						height: 4rpx;
						background-color: #d8d8d8;
						border-radius: 20rpx;
						margin: 20rpx 0;

						.round-list {
							position: absolute;
							top: -8rpx;
							left: 0;
							width: 101%;
							height: 20rpx;
							z-index: 99;
							display: flex;
							align-items: center;
							justify-content: space-between;

							.round {
								width: 18rpx;
								height: 18rpx;
								border-radius: 50%;
								background-color: #d8d8d8;
							}

							.active {
								background-color: #f6c54e;
							}
						}
					}
				}

				.level-desc {
					width: 100%;
					height: 40rpx;
					text-align: center;
					line-height: 40rpx;
					color: #727375;
					margin-top: 10rpx;

					.active {
						color: #f6c54e;
						margin: 0 5rpx;
					}
				}
			}
		}

		.member-privilege {
			height: 460rpx;
			padding-top: 20rpx;
			background-color: #FFFFFF;
			margin-bottom: 20rpx;

			.shuffling-item {
				margin-top: 30rpx;
				height: 50rpx;
				text-align: center;
				line-height: 50rpx;
				font-size: 32rpx;
				color: #48494b;
				font-weight: bold;
			}
		}

		.member-list {
			padding: 0 20rpx 80rpx;
			height: auto;

			.item {
				position: relative;
				height: auto;
				border-radius: 12rpx;
				box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);
				background-color: #FFFFFF;
				padding: 40rpx 30rpx;
				margin-bottom: 20rpx;

				.top-txt {
					position: absolute;
					top: 0;
					left: 0;
					height: 40rpx;
					width: 120rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					border-radius: 12rpx 0 12rpx 0;
					background-color: #b2d249;
					color: #FFFFFF;
					font-size: 24rpx;
					box-shadow: 2rpx 10rpx 10rpx rgba(176, 211, 67, 0.3);
				}

				.title {
					margin-top: 30rpx;
					height: 40rpx;
					line-height: 40rpx;
					font-size: 28rpx;
					color: #000000;
					font-weight: bold;
					margin-bottom: 16rpx;
				}

				.item-list {
					display: flex;
					align-items: center;
					justify-content: flex-start;
					flex-wrap: wrap;

					.block {
						width: 25%;
						height: 140rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						flex-direction: column;

						.block-item {
							position: relative;
							width: 50rpx;
							height: 50rpx;

							.block-icon {
								width: 50rpx;
								height: 50rpx;
							}

							.round {
								position: absolute;
								top: -10rpx;
								right: -35rpx;
								background-color: #f8c04f;
								border-radius: 50%;
								width: 40rpx;
								height: 40rpx;
								color: #FFFFFF;
								display: flex;
								align-items: center;
								justify-content: center;
							}
						}

						.desc {
							margin-top: 20rpx;
							color: #828385;
							font-size: 24rpx;
							text-align: center;
							display: -webkit-box;
							word-break: break-all;
							text-overflow: ellipsis;
							overflow: hidden;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2; //设置 需要显示的行数
						}
					}
				}
			}

			.item:last-child {
				margin-bottom: 0;
			}
		}
	}
</style>
