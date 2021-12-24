<template>
	<view class="page-index">
		<view class="list">
			<view class="list-item" v-for="(item, index) in list" :key="index">
				<view class="list-left">
					<image class="icon" :src="item.icon"></image>
					<view class="title">{{ item.title }}</view>
				</view>
				<view class="list-right" @click="handleJump({type: item.type})">
					<image class="arrow" :src="require('@/static/icon/right_arrow.png')"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					title: '神里绫华',
					icon: require('@/static/appicon/app.png'),
					type: '',
				}, {
					title: '荒泷一斗',
					icon: require('@/static/appicon/close.png'),
					type: '',
				}, {
					title: '雷电将军',
					icon: require('@/static/appicon/image.png'),
					type: '',
				}, {
					title: '达达利亚',
					icon: require('@/static/appicon/member.png'),
					type: '',
				}, {
					title: '九条裟罗',
					icon: require('@/static/appicon/phone.png'),
					type: '',
				}, {
					title: '摩拉克斯',
					icon: require('@/static/appicon/price.png'),
					type: '',
				}]
			}
		},
		methods: {
			handleJump(link) {
				if (link.type !== '') {
					uni.navigateTo({
						url: link.type
					});
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page-index {
		padding: 0 30rpx;
		font-size: 24rpx;
		color: #242424;
		background-color: #FFFFFF;

		.list {
			width: 100%;
			height: auto;

			&-item {
				width: 100%;
				height: 100rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 2rpx solid #e2e4e6;
			}

			&-item:last-child {
				border-bottom: none;
			}

			&-left {
				width: 80%;
				height: 100rpx;
				display: flex;
				align-items: center;

				.icon {
					width: 45rpx;
					height: 45rpx;
					margin-right: 20rpx;
				}

				.title {
					width: 300rpx;
					height: 100rpx;
					line-height: 100rpx;
					font-size: 28rpx;
					color: #484b4d;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}

			&-right {
				width: 20%;
				height: 100rpx;
				display: flex;
				align-items: center;
				justify-content: flex-end;

				.arrow {
					width: 30rpx;
					height: 30rpx;
				}
			}
		}
	}
</style>
