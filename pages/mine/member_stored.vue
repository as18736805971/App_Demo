<template>
	<view class="page-index">
    <!-- 封面图 -->
    <view class="cover"></view>
    <!-- 封面图 -->

    <!-- 价格选项 -->
    <view class="select-price"></view>
    <!-- 价格选项 -->

    <!-- 使用说明 -->
    <view class="directions"></view>
    <!-- 使用说明 -->

    <!-- 悬浮按钮 -->
    <view class="suspend-button"></view>
    <!-- 悬浮按钮 -->
  </view>
</template>

<script>
	export default {
		data() {
			return {}
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

    .cover {
      height: 350rpx;
      background-color: #4cd964;
    }


    .suspend-button {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 150rpx;
      z-index: 99;
      background-color: #2FC6CD;
    }
	}
</style>
