<template>
	<view class="page-index">
		<!-- 导航栏 -->
		<base-ani-tab-bar :listArr="list" :listActive="active_index" :background="'#ffffff'" @handleActive="handleTab">
		</base-ani-tab-bar>
		<!-- 导航栏 -->

		<!-- 购买礼品卡 -->
		<template v-if="active_index === 0">
			<!-- 封面图 -->
			<view class="cover">
				<!--<image class="icon-cover" :src="require('@/static/appicon/coupon.png')"></image>-->
			</view>
			<!-- 封面图 -->
			<!-- 列表 -->
			<view class="card-list">
				<view class="card-item" v-for="(item, index) in card_list" :key="index">
					<view class="card-title">{{ item.title }}</view>
					<view class="item-list">
						<view class="item" v-for="(vv, kk) in item.list" :key="kk"
							@click="handleJump({type: `./gift_card_details?id=${kk}&title=${vv.name}`})">
							<image class="icon-image" mode="aspectFit" :src="vv.image"></image>
							<view class="item-desc">{{ vv.name }}</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 列表 -->
		</template>
		<!-- 购买礼品卡 -->

		<!-- 我的礼品卡 -->
		<template v-else>
			<view class="mine-list">
				<view class="btn" @click="handleJump({type: './exchange_center?type=1'})"
					v-if="mine_card_list.length === 0">
					<view class="left">
						<image class="left-icon" :src="require('@/static/appicon/coupon.png')"></image>
						<view class="left-txt">兑换礼品卡</view>
					</view>
					<view class="right">
						<image class="left-icon" :src="require('@/static/icon/right_arrow.png')"></image>
					</view>
				</view>
				<view class="no-data">
					<image class="no-icon" mode="aspectFit" :src="require('@/static/image/no-data.png')"></image>
					<view class="no-txt">暂无礼品卡</view>
				</view>

			</view>
		</template>
		<!-- 我的礼品卡 -->
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
				list: ['购买礼品卡', '我的礼品卡'], // 选项卡列表
				active_index: 0,
				card_list: [{
						title: '神里绫华',
						list: [{
								image: require('@/static/appicon/coupon.png'),
								name: '神里绫华神里绫华',
							},
							{
								image: require('@/static/appicon/coupon.png'),
								name: '神里绫华神里绫华',
							},
						]
					},
					{
						title: '神里绫华',
						list: [{
								image: require('@/static/appicon/coupon.png'),
								desc: '神里绫华神里绫华',
							},
							{
								image: require('@/static/appicon/coupon.png'),
								name: '神里绫华神里绫华',
							},
						]
					},
					{
						title: '神里绫华',
						list: [{
								image: require('@/static/appicon/coupon.png'),
								name: '神里绫华神里绫华',
							},
							{
								image: require('@/static/appicon/coupon.png'),
								name: '神里绫华神里绫华',
							},
						]
					},
					{
						title: '神里绫华',
						list: [{
								image: require('@/static/appicon/coupon.png'),
								name: '神里绫华神里绫华',
							},
							{
								image: require('@/static/appicon/coupon.png'),
								name: '神里绫华神里绫华',
							},
						]
					},
					{
						title: '神里绫华',
						list: [{
								image: require('@/static/appicon/coupon.png'),
								name: '神里绫华神里绫华',
							},
							{
								image: require('@/static/appicon/coupon.png'),
								name: '神里绫华神里绫华',
							},
						]
					},
				],
				mine_card_list: [],
			}
		},
		methods: {
			handleTab(index) {
				this.active_index = index
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
		color: #242424;
		padding-top: 110rpx;

		.cover {
			width: 100%;
			height: 600rpx;
			background-color: #4cd964;

			.icon-cover {
				width: 100%;
				height: 600rpx;
			}
		}

		.card-list {
			padding: 30rpx 40rpx;
			height: auto;

			.card-item {
				height: auto;

				.card-title {
					height: 90rpx;
					line-height: 90rpx;
					font-size: 30rpx;
					font-weight: bold;
					color: #484b4d;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}

				.item-list {
					display: flex;
					align-items: center;
					justify-content: space-between;
					flex-wrap: wrap;

					.item {
						width: 48%;
						height: auto;
						margin-bottom: 20rpx;
						border-radius: 12rpx;
						overflow: hidden;
						display: flex;
						align-items: center;
						justify-content: center;
						flex-direction: column;
						box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);

						.icon-image {
							width: 100%;
							height: 200rpx;
						}

						.item-desc {
							width: 100%;
							height: 70rpx;
							text-align: center;
							line-height: 70rpx;
							font-size: 26rpx;
							background-color: #FFFFFF;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
					}
				}
			}
		}

		.mine-list {
			position: relative;
			padding: 30rpx 40rpx;
			height: auto;
			min-height: 600rpx;

			.btn {
				position: absolute;
				top: 0;
				left: 50%;
				transform: translate(-50%, 20%);
				width: 80%;
				height: 80rpx;
				background-color: #FFFFFF;
				border-radius: 50rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 40rpx;
				box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);

				.left {
					display: flex;
					align-items: center;

					.left-icon {
						width: 40rpx;
						height: 40rpx;
						margin-right: 10rpx;
					}

					.left-txt {
						font-size: 28rpx;
						color: #b0d342;
					}
				}

				.right {
					display: flex;
					align-items: center;
					justify-content: flex-end;

					.left-icon {
						width: 30rpx;
						height: 30rpx;
					}
				}
			}

			.no-data {
				margin-top: 100rpx;
				height: 300rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;

				.no-icon {
					width: 300rpx;
					height: 250rpx;
				}

				.no-txt {
					height: 40rpx;
					line-height: 40rpx;
					text-align: center;
					color: #707274;
				}
			}
		}
	}
</style>
