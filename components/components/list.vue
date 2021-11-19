<template>
	<view class="listmenu">
		<view class="list-container">
			<view class="bg">
				<template v-for="(item, index) in list">
					<view v-if="item.hidden" :key="index" class="menu-item" @click="handleJump(item, index)">
						<p class="lefttit">
							<image v-if="item.show_icon" class="menu-item-icon" :src="item.icon"></image>
							<span class="tit">
								{{ item.content }}
							</span>
						</p>
						<p v-if="item.show_more" class="righttit">
							<span class="a_title">
								{{ item.more_text }}
							</span>
							<image v-if="item.right_icon" class="menu-item-righttit-icon" :src="item.right_icon">
							</image>
						</p>
					</view>
				</template>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {}
		},
		methods: {
			handleJump(item, index) {
				this.$emit('handleListJump', {
					item,
					index
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.listmenu {
		padding: 10rpx 20rpx;

		.list-container {
			padding-left: 24rpx;
			padding-right: 24rpx;
			background-color: #FFFFFF;
			border-radius: 12rpx;
		}

		.bg {
			width: 100%;
			display: flex;
			position: relative;
			box-sizing: border-box;
			flex-direction: column;

			.menu-item {
				width: 100%;
				display: flex;
				position: relative;
				box-sizing: border-box;
				height: 96rpx;
				border-top: 0 !important;
				border-left: 0 !important;
				border-right: 0 !important;
				border-bottom: 1px solid #eee;
			}

			.menu-item:last-child {
				border-bottom: 0 !important;
			}

			.lefttit {
				display: flex;
				font-size: 28rpx;
				justify-content: center;
				align-items: center;

				span {
					//margin: auto;
					margin-left: 8rpx;
					line-height: 36rpx;
				}

				.menu-item-icon {
					width: 40rpx;
					height: 40rpx;
				}
			}

			.righttit {
				position: absolute;
				cursor: pointer;
				right: 0;
				display: flex;
				top: 0;
				bottom: 0;
				margin: auto;
				justify-content: center;
				align-items: center;
				font-size: 24rpx;
				font-style: normal;
				font-weight: normal;
				color: #8a8a8a;

				.menu-item-righttit-icon {
					width: 20rpx;
					height: 20rpx;
					margin-left: 5rpx;
				}
			}
		}
	}
</style>
