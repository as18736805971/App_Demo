<template>
	<view class="page-index">
		<view class="integral">
			<view class="integral-num">{{ integral }}</view>
			<view class="integral-desc" @click="handleJump({type: './level_instructions?type=integral'})">
				查看积分规则<image class="icon-right" :src="require('@/static/icon/right_arrow.png')"></image>
			</view>
		</view>

		<scroll-view scroll-y="true" class="list" @scrolltolower="handleGetData">
			<view class="list-item" v-for="(item, index) in integral_list" :key="index">
				<view class="top">
					<view class="top-left">{{ item.type === 1 ? '积分签到奖励' : '积分消费' }}</view>
					<view class="top-right">{{ item.status === 1 ? '+' : '-' }}{{ item.num }}</view>
				</view>
				<view class="top bottom">
					<view class="top-left">{{ item.date }}</view>
					<view class="top-right">{{ item.desc }}</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				integral: 5,
				integral_list: [{
						type: 1,
						status: 1,
						num: 1,
						date: '2021-12-11 14:25:56',
						desc: '星星'
					},
					{
						type: 2,
						status: 0,
						num: 10,
						date: '2021-12-12 08:25:56',
						desc: '云堇'
					},
					{
						type: 2,
						status: 0,
						num: 50,
						date: '2021-12-11 14:25:56',
						desc: '钟离'
					},
					{
						type: 1,
						status: 1,
						num: 15,
						date: '2021-12-11 14:25:56',
						desc: '甘雨'
					},
					{
						type: 1,
						status: 1,
						num: 40,
						date: '2021-12-11 14:25:56',
						desc: '宵'
					},
					{
						type: 2,
						status: 0,
						num: 1,
						date: '2021-12-11 14:25:56',
						desc: '申鹤'
					}
				]
			}
		},
		methods: {
			handleGetData() {
				console.log('滚动到底部 进行加载数据')
			},
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
		width: 100%;
		font-size: 24rpx;
		color: #242424;
		height: 100vh;
		background-color: #FFFFFF;

		.integral {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			height: 280rpx;
			color: #b0d342;

			&-num {
				font-size: 60rpx;
				font-weight: bold;
				margin-bottom: 20rpx;
			}

			&-desc {
				display: flex;
				align-items: center;
				font-size: 26rpx;

				.icon-right {
					width: 25rpx;
					height: 25rpx;
					margin-left: 10rpx;
				}
			}
		}

		.list {
			height: calc(100vh - 280rpx);
			overflow-y: auto;

			&-item {
				padding: 0 40rpx;
				height: 130rpx;
				border-bottom: 2rpx solid #e2e4e6;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;

				.top {
					width: 100%;
					height: 40rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					font-size: 28rpx;
					color: #2a2b2a;
				}

				.bottom {
					font-size: 24rpx;
					color: #a9acae;
				}
			}

			&-item:first-child {
				border-top: 2rpx solid #e2e4e6;
			}

			&-item:last-child {
				border-bottom: none;
			}
		}
	}
</style>
