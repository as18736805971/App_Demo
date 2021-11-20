<template>
	<view class="progress-box">
		<view class="progress-box-sgin" v-if="content !== ''" :style="{width:getSginWid}">
			<view :animation="animationData" class="progress-box-sgin-n" :style="{background:contentBacColor}">
				<text :style="{color:contentColor}">{{content}}</text>
			</view>
		</view>
		<view class="progress-box-w" :style="[{background:progressColor,width:getWid}]">
			<view class="progress-box-w-w" :style="{background:progressBckColor}" :animation="animationData">
				<view class="progress-box-w-n" :style="{background:progressColor}"></view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		props: {
			// 当前值
			nowD: {
				type: Number,
				default: 0
			},
			// 最大值
			sumD: {
				type: Number,
				default: 100
			},
			// 提示框内容
			content: {
				type: String,
				default: ''
			},
			// 提示框文字内容颜色
			contentColor: {
				type: String,
				default: 'rgba(3,144,252,1)'
			},
			// 提示框文字内容背景颜色
			contentBacColor: {
				type: String,
				default: '#F4F4F4'
			},
			// 滚动条默认背景色
			progressBckColor: {
				type: String,
				default: 'rgba(184, 224, 255,1)'
			},
			// 滚动条选中背景色
			progressColor: {
				type: String,
				default: '#FFFFFF'
			},
			// 滚动条宽度
			wid: {
				type: Number,
				default: 280
			},
			// 动画效果
			type: {
				type: String,
				default: "ease"
			},
			// 动画时长
			time: {
				type: Number,
				default: 1000
			},
		},
		computed: {
			getWid() {
				return this.wid.toString() + "px"
			},
			getSginWid() {
				return (this.wid + 56).toString() + "px"
			}
		},
		data() {
			return {
				animationData: {},
				mobilePx: 0,
			};
		},
		watch: {
			nowD: {
				handler() {
					this.handleAnimation()
				},
				immediate: true,
				deep: true,
			}
		},
		methods: {
			handleAnimation() {
				let animation = uni.createAnimation({
					duration: this.time,
					timingFunction: this.type,
				})
				this.animation = animation
				this.cpMobile()
				setTimeout(function() {
					animation.translate(this.mobilePx).step()
					this.animationData = animation.export()
				}.bind(this), 100)
			},
			cpMobile() {
				this.mobilePx = this.nowD / this.sumD * this.wid
			}
		}
	}
</script>

<style lang="scss">
	.progress-box {
		display: flex;
		margin: auto auto;
		flex-direction: column;
	}

	.progress-box-sgin {
		height: 70rpx;
		margin: auto auto;
	}

	.progress-box-sgin-n {
		position: relative;
		width: 120rpx;
		height: 44rpx;
		border-radius: 50rpx;
		box-shadow: 0 0 8rpx rgba(3, 144, 252, 1);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.progress-box-sgin-n>text {
		font-size: 24rpx;
		opacity: 1;
	}

	.progress-box-sgin-n:after {
		position: absolute;
		left: 0;
		right: 0;
		top: 45rpx;
		content: '';
		width: 0;
		height: 0;
		margin: auto auto;
		border: 16rpx solid #ffffff;
		border-color: #ffffff transparent transparent transparent;
	}

	.progress-box-w {
		overflow: hidden;
		margin: auto auto;
		border-radius: 10rpx !important;
		background-color: #FFFFFF;
	}

	.progress-box-w-w {
		border-radius: 10rpx;
		width: 100%;
		height: 20rpx;
	}

	.progress-box-w-n {
		height: 20rpx;
		background-color: #FFFFFF;
		width: 20rpx;
		border-radius: 50%;
	}
</style>
