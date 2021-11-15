<template>
	<view class="page-index">
		<base-ani-tab-bar :listArr="listArr" @handleActive="handleClick"></base-ani-tab-bar>
		<view class="folat"></view>
		<view class="list"></view>
	</view>
</template>

<script>
	import BaseAniTabBar from '../../components/base/BaseAniTabBar'
	export default {
		components: {
			BaseAniTabBar,
		},
		data() {
			return {
				listArr: ['压箱好书', '最新上架', '名著', '历史', '童书', '生活', '心理学', '艺术', '推理', '外国文学'],
			}
		},
		methods: {
			handleClick(index) {
				console.log(index, '选中索引')
			}
		},
	}
</script>

<style lang="scss">
	.page-index {
		.folat {
			height: 1000rpx;
			background: #007AFF;
		}
		.list {
			height: 1000rpx;
			background: #4CD964;
		}
	}
</style>
