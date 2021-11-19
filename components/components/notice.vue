<template>
	<view class="notice">
		<image v-if="icon !== ''" class="icon" :src="icon"></image>
		<swiper class="notice-item" :autoplay="notice.autoplay" :interval="notice.interval" circular
			:vertical="notice.vertical">
			<swiper-item v-for="(item, index) in list" :key="index">
				<view class="text" @click="handleNotice(item, index)">{{item.content}}</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default: () => []
			},
			// 公告效果
			notice: {
				type: Object,
				default: function() {
					return {
						autoplay: true, // 自动切换
						interval: 3000, // 切换时间间隔
						vertical: true, // 滑动方向纵向或横向
					}
				}
			},
			// 是否显示图标
			icon: {
				type: String,
				default: ''
			}
		},
		data() {
			return {}
		},
		methods: {
			handleNotice(item, index) {
				this.$emit('handleNotice', {
					item,
					index
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.notice {
		width: 90%;
		padding: 0 20rpx;
		background-color: #FFFFFF;
		height: 80rpx;
		border-radius: 12rpx;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;

		.icon {
			width: 58rpx;
			height: 52rpx;
			margin-right: 20rpx;
			border-radius: 12rpx;
		}

		.notice-item {
			width: 100%;
			height: 60rpx;

			.text {
				height: 60rpx;
				width: 100%;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				font-size: 24rpx;
				line-height: 60rpx;
			}
		}
	}
</style>
