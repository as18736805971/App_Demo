<template>
	<radio-group class="radio-content" @change="radioChange" :class="[type, size]">
		<label class="radio-label" :class="{checked: value === radio.value, 'last-child': index === list.length - 1}"
			v-for="(radio, index) in list" :key="index" @click="clickRadio(radio.value)">
			<view class="radio-icon"></view>
			<view class="text">{{radio.label}}</view>
			<radio class="input" :value="String(radio.value)" :checked="radio.value === value" />
		</label>
	</radio-group>
</template>

<script>
	export default {
		name: 'BaseRadioGroup',
		props: {
			size: {
				type: String,
				default: 'normal'
			},
			/*
			 * @desc 单选的样式类型，radio、button
			 * */
			type: {
				type: String,
				default: 'radio'
			},
			/*
			 * @desc 单选框被选中的value值，通过该值与每个单选数据所携带的value比较得出该单选框是否被选中
			 * */
			value: {
				type: [String, Number],
				default: ''
			},
			/*
			 * @desc 单选数据列表
			 * */
			list: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {
				flag: false //区分点击时是否带有radio切换，true是有切换，false则是单独的点击事件
			}
		},
		mounted() {},
		methods: {
			/*
			 * @desc 单选被点击
			 * @params: null
			 * */
			clickRadio() {
				this.$emit('radioClick', this.flag)
			},
			/*
			 * @desc radio被选择，传递被选择radio的value
			 * @params event: Native Event
			 * */
			radioChange(event) {
				this.flag = true
				this.$nextTick(() => {
					this.flag = false
				})
				let current = this.list.find(item => item.value === Number(event.target.value))
				this.$emit('input', current.value)
			}
		}
	}
</script>

<style lang="scss">
	@import "../../style/base";
	@import "../../style/mixin";

	.radio-content {
		&.button {
			display: flex;
			align-items: center;
			flex-wrap: wrap;

			.radio-label {
				margin-right: 20rpx;
				margin-bottom: 20rpx;
				display: inline-block;
				vertical-align: middle;
				padding: 16rpx 32rpx;
				background-color: #f4f4f4;
				border-radius: 34rpx;
				line-height: normal;

				.text {
					font-size: 28rpx;
					line-height: 28rpx;
					height: 28rpx;
					color: #222;
				}

				&.checked {
					background-color: #fff;
					border: solid 1rpx $color-normal;

					.text {
						color: $color-normal;
					}
				}
			}

			&.small {
				.radio-label {
					margin-bottom: 0;
					padding: 10rpx 16rpx;
					border-radius: 24rpx;
				}
			}

			.radio-label.last-child {
				margin-right: 0;
			}
		}

		&.radio {
			.radio-label {
				display: inline-flex;
				align-items: center;
				line-height: normal;

				.radio-icon {
					margin-left: 30rpx;
					margin-right: 14rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					width: 20rpx;
					height: 20rpx;
					border: 2rpx solid #999;
					border-radius: 50%;
				}

				&.checked .radio-icon::before {
					content: '';
					width: 12rpx;
					height: 12rpx;
					border-radius: 50%;
					background-color: #ffac4b;
				}

				.text {
					font-size: 24rpx;
					color: #444444;
				}
			}
		}

		.input {
			display: none;
		}
	}
</style>
