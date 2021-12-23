<template>
	<view class="page-index">
		<view class="item-title" @click="handleFolding()">
			<view class="item-name">折叠列表</view>
			<image class="arrow-icon" :class="folding ? 'folding' : 'folding1'" :src="require('@/static/icon/right_arrow.png')"></image>
		</view>
		<view class="list" :class="folding ? 'list1' : 'list2'">
			<view class="item" v-for="(item, index) in 4" :key="index">你的眼里有星星 神里绫华 雷电将军</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        folding: true,
      }
		},
		methods: {
      handleFolding() {
        this.folding = !this.folding
      }
    }
	}
</script>

<style lang="scss" scoped>
	.page-index {
		width: 100%;
		min-height: 100vh;
		background-color: #FFFFFF;
		padding: 20rpx 0;

		.item-title {
			padding: 0 50rpx;
			height: 70rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			background-color: #4cd964;

			.item-name {
				height: 70rpx;
				line-height: 70rpx;
				font-size: 26rpx;
			}

			.arrow-icon {
				width: 25rpx;
				height: 25rpx;
			}

      .folding {
        transition: all 0.2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
        transform: rotate(90deg);
      }

      .folding1 {
        transition: all 0.2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
        transform: rotate(0);
      }
		}

		.list {
			padding: 0 50rpx;

			.item {
				width: 100%;
				height: 70rpx;
				line-height: 70rpx;
				border-bottom: 2rpx solid #e3e4e6;
			}
		}

    .list1 {
      height: 400rpx;
      transition: height 0.5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .list2 {
      height: 0;
      overflow: hidden;
      transition: height 0.2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
	}
</style>
