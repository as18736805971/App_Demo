<template>
	<view class="page-index">
		<!-- 顶部导航栏 -->
		<view class="navigation-top">
      <view class="member-item">
        <view class="nick-name"></view>
        <view class="member-level"></view>
      </view>
    </view>
		<!-- 顶部导航栏 -->

    <!-- 我的资产 -->
    <view class="assets"></view>
    <!-- 我的资产 -->

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

<style lang="scss">
	.page-index {
		width: 100%;
		min-height: 100vh;

    .navigation-top {
      position: relative;
      width: 100%;
      height: 380rpx;
      background-color: #2FC6CD;
      margin-bottom: 390rpx;

      .member-item {
        position: absolute;
        left: 50%;
        top: 500rpx;
        transform: translate(-50%, -50%);
        width: 80%;
        height: 400rpx;
        background-color: #FFFFFF;
        border-radius: 12rpx;
        box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);
        padding: 40rpx;

        .nick-name {
          width: 100%;
          height: 100rpx;
          background-color: #007AFF;
        }

        .member-level {
          width: 100%;
          height: 300rpx;
          background-color: #4cd964;
        }
      }
    }

    .assets {
      padding: 20rpx;
      height: 200rpx;
      background-color: #4cd964;
    }
	}
</style>
