<template>
	<view class="page-index"></view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		onLoad(e) {
			console.log(e, '21212121')
      uni.setNavigationBarTitle({
        title: e.title || '礼品卡详情'
      });
		},
		methods: {}
	}
</script>

<style lang="scss" scoped>
	.page-index {
		width: 100%;
		min-height: 100vh;
		font-size: 24rpx;
		color: #242424;
	}
</style>
