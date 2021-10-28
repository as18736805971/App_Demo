<template>
	<view class="base-dialog" @touchmove.stop.prevent v-if="visible">
		<view class="base-dialog-mask" @touchmove.stop.prevent @click="hide('mask')" v-if="mask"></view>
		<view class="base-dialog-content" :class="[{animation: animation}, styleType, contentClass]"
			:style="contentStyle">
			<slot name="default"></slot>
		</view>
	</view>
</template>
<script>
	export default {
		name: 'BaseDialog',
		props: {
			contentStyle: {
				type: String,
				default: ''
			},
			contentClass: {
				type: String,
				default: ''
			},
			styleType: {
				type: String,
				default: 'style1'
			},
			maskCancel: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				visible: false,
				mask: false,
				animation: true
			}
		},
		methods: {
			show() {
				this.visible = true
				this.mask = true
				setTimeout(() => {
					this.animation = false
				}, 0)
			},
			hide(type) {
				if (type === 'mask' && !this.maskCancel) {
					return Promise.reject()
				}
				return new Promise(resolve => {
					this.mask = false
					setTimeout(() => {
						this.animation = true
						setTimeout(() => {
							this.visible = false
							resolve()
						}, 300)
					}, 0)
				})
			}
		}
	}
</script>
<style lang="scss">
	@import "../../style/base";
	@import "../../style/mixin";
	
	.base-dialog {
		position: fixed;
		top: 0;
		left: 0;
		z-index: $z-index-dialog;
		width: 100%;
		height: 100%;

		.base-dialog-mask {
			position: absolute;
			top: 0;
			left: 0;
			z-index: $z-index-dialog + 10;
			width: 100%;
			height: 100%;
			background: rgba(0, 0, 0, 0.6);
		}

		.base-dialog-content {
			position: absolute;
			z-index: $z-index-dialog + 100;
			transition: 0.3s all linear;

			&.style1 {
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}

			&.style2 {
				bottom: 0;
				left: 0;
				width: 100%;
			}
		}

		.animation {
			opacity: 0;

			&.style1 {
				transform: translate(-50%, -30%);
			}

			&.style2 {
				transform: translate(0, 30%);
			}
		}
	}
</style>
