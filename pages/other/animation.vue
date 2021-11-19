<template>
	<view class="page-index">
		<!-- 放大缩小样式动画 -->
		<view class="amplification margin">你的眼里有星星诶</view>

		<!-- 两张叠加图片循环显示 -->
		<div class="pics">
			<image src="../../static/logo.png" class="pic1"></image>
			<image src="../../static/image/logo.png" class="pic2"></image>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		onLoad() {

		},
		methods: {}
	}
</script>

<style lang="scss" scoped>
	.page-index {
		width: 100%;
		min-height: 100vh;
		background-color: #FFFFFF;
		padding: 20rpx 0;

		.margin {
			margin-bottom: 40rpx;
		}

		// 放大缩小样式动画
		.amplification {
			width: 240rpx;
			height: 50rpx;
			margin: 0 auto;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 24rpx;
			border-radius: 50rpx;
			border: 1rpx solid #222222;
			/*  组合写 */
			-webkit-animation: scaleDraw 5s ease-in-out infinite;

			// -webkit-animation-name: scaleDraw;
			// /* 关键帧名称 */
			// -webkit-animation-timing-function: ease-in-out;
			// /* 动画的速度曲线 */
			// -webkit-animation-iteration-count: infinite;
			// /* 动画播放的次数 */
			// -webkit-animation-duration: 5s;
			// /* 动画所花费的时间 */
		}

		@keyframes scaleDraw {

			/*定义关键帧、scaleDrew是需要绑定到选择器的关键帧名称*/
			0% {
				transform: scale(1);
				/*开始为原始大小*/
			}

			25% {
				transform: scale(1.1);
				/*放大1.1倍*/
			}

			50% {
				transform: scale(1);
			}

			75% {
				transform: scale(1.1);
			}
		}

		// 两张叠加图片循环显示
		.pics {
			position: relative;
			width: 200rpx;
			height: 200rpx;
			margin: 20rpx auto;
		}

		.pic1 {
			width: 200rpx;
			height: 200rpx;
		}

		@keyframes picDraw {
			0% {
				opacity: 0;
			}

			50% {
				opacity: 1;
			}

			100% {
				opacity: 0;
			}
		}

		.pic2 {
			position: absolute;
			width: 200rpx;
			height: 200rpx;
			left: 0;
			top: 0;
			-webkit-animation: picDraw 5s ease-in-out infinite;
		}
	}
</style>
