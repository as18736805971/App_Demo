<template>
	<view class="page-index">
		<view class="textarea">
			<textarea v-model="note" :maxlength="maxlength" placeholder-style="color:#a1a4a7" placeholder="请输入备注信息" />
			<view class="length">{{ note.length }} / {{ maxlength }}</view>
		</view>

		<view class="keep" @click="handleJump()">保存</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				note: '',
				maxlength: 50,
			}
		},
		onLoad(e) {
			this.note = e.note || ''
		},
		methods: {
			// 页面跳转
			handleJump() {
				uni.$emit('setNote', {
					note: this.note
				})
				uni.navigateBack({
					delta: 1
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
	.page-index {
		padding: 20rpx;
		font-size: 24rpx;
		color: #242424;

		.textarea {
			position: relative;
			border-radius: 12rpx;
			height: auto;
			padding: 30rpx;
			background-color: #FFFFFF;

			textarea {
				width: 100%;
				height: 200rpx;
				line-height: 35rpx;
			}

			.length {
				position: absolute;
				bottom: 20rpx;
				right: 31rpx;
				color: #707274;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}

		.keep {
			position: fixed;
			left: 50%;
			bottom: 2%;
			transform: translate(-50%, -50%);
			margin: 0 auto;
			width: 90%;
			height: 80rpx;
			border-radius: 50rpx;
			color: #FFFFFF;
			font-size: 26rpx;
			text-align: center;
			line-height: 80rpx;
			background-color: #b0d342;
		}
	}
</style>
