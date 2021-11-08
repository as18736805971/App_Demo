<template>
	<view class="custom-counter">
		<view class="custom-counter-button left" @click.stop="reduce">-</view>
		<input :value="value" class="custom-counter-input" @click.stop @focus.stop @input="valueChange" />
		<view class="custom-counter-button right" @click.stop="plus">+</view>
	</view>
</template>

<script>
	export default {
		name: "BaseCounter",
		props: {
			/*
			 * @desc 计数器显示的值
			 * */
			value: {
				type: Number,
				default: 1
			},
			// 例如多个计数器 传递索引
			index: {
				type: Number,
				default: 0
			}
		},
		methods: {
			/*
			 * @desc 计数器数字减1
			 * @params null
			 * */
			reduce() {
				if (this.value === 1) return
				this.$emit('input', this.value - 1, this.index)
			},
			/*
			 * @desc 计数器数字加1
			 * @params null
			 * */
			plus() {
				this.$emit('input', this.value + 1, this.index)
			},
			/*
			 * @desc 处理计数器数值改变，触发input事件，用于外层v-model
			 * @params event: Native Event 事件对象
			 * */
			valueChange(event) {
				let value = Number(event.target.value)
				this.$emit('input', Number.isNaN(value) || value <= 0 ? 1 : value, this.index)
			}
		}
	}
</script>

<style lang="scss">
	@import "../../style/mixin";

	.custom-counter {
		display: flex;
		justify-content: center;
		align-items: center;
		color: $color-text-desc;
		font-size: 40rpx;

		&-button {
			display: inline-flex;
			justify-content: center;
			align-items: center;
			width: 80rpx;
			height: 52rpx;
			background: #f5f5f5;

			&.left {
				margin-right: 4rpx;
				border-radius: 6rpx;
			}

			&.right {
				margin-left: 4rpx;
				border-radius: 6rpx;
			}
		}

		&-input {
			display: inline-flex;
			justify-content: center;
			align-items: center;
			width: 80rpx;
			height: 52rpx;
			line-height: 52rpx;
			min-height: 52rpx;
			text-align: center;
			background: #f5f5f5;
			box-sizing: border-box;
			color: $color-text-input;
			font-size: 24rpx;
		}
	}
</style>
