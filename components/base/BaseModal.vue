<template>
	<view class="share" @touchmove.stop.prevent>
		<!-- 遮罩层 -->
		<view :class="{'share-box': shareState}" @click="handleHiddenShare"></view>
		<!-- 遮罩层 -->
		<view class="share-item" :class="{'share-show': shareState}">
			<!-- 插槽内容 -->
			<slot name="default"></slot>
			<!-- 插槽内容 -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shareState: false,
			};
		},
		methods: {
			// 显示弹框  通过组件 this.$ref.参数.handleShowShare() 使用
			handleShowShare() {
				this.shareState = true;
			},
			// 隐藏弹框
			handleHiddenShare() {
				this.shareState = false;
			}
		}
	}
</script>

<style lang="less">
	.share {
		width: 100%;
		height: 100%;
	}

	.share-box {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0rpx;
		left: 0rpx;
		bottom: 0rpx;
		right: 0rpx;
		background-color: rgba(0, 0, 0, 0.4);
		transition: .5s;
		z-index: 99999;
	}

	// 进入弹框动画
	.share-show {
		transition: all 0.5s ease;
		transform: translateY(0%) !important;
	}

	// 离开弹框动画
	.share-item {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: auto;
		transition: all 0.5s ease;
		transform: translateY(100%);
		z-index: 1999;

		.share-to {
			width: 100%;
			height: 3rem;
			display: flex;
			justify-content: center;
			align-items: center;

			&::after {
				content: '';
				width: 240rpx;
				height: 0rpx;
				border-top: 1px solid #E4E7ED;
				-webkit-transform: scaleY(0.5);
				transform: scaleY(0.5);
				margin-left: 30rpx;
			}

			&::before {
				content: '';
				width: 240rpx;
				height: 0rpx;
				border-top: 1px solid #E4E7ED;
				-webkit-transform: scaleY(0.5);
				transform: scaleY(0.5);
				margin-right: 30rpx;
			}
		}
	}
</style>
