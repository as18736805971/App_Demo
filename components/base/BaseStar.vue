<template>
	<view class="custom-star">
		<view class="custom-star-item" :class="{active: starNum >= 1}" @click="changeStar(1)"></view>
		<view class="custom-star-item" :class="{active: starNum >= 2}" @click="changeStar(2)"></view>
		<view class="custom-star-item" :class="{active: starNum >= 3}" @click="changeStar(3)"></view>
		<view class="custom-star-item" :class="{active: starNum >= 4}" @click="changeStar(4)"></view>
		<view class="custom-star-item" :class="{active: starNum >= 5}" @click="changeStar(5)"></view>
	</view>
</template>

<script>
	export default {
		name: "BaseStar",
		props: {
			starNum: {
				type: Number,
				default: 0
			},
			disabled: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {

			}
		},
		methods: {
			changeStar(num) {
				if (this.disabled) return
				this.$emit('update:starNum', num)
			}
		}
	}
</script>

<style lang="scss">
	@import "../../style/base";
	@import "../../style/mixin";

	.custom-star {
		margin: 0 4rpx;
		display: flex;
		align-items: center;

		&-item {
			width: 40rpx;
			height: 40rpx;
			@include setFrameworkBackground('icon/icon_star');

			&.active {
				@include setFrameworkBackground('icon/icon_star_active');
			}
		}
	}
</style>
