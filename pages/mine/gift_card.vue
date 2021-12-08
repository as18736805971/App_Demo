<template>
	<view class="page-index">
		<!-- 导航栏 -->
		<base-ani-tab-bar :listArr="list" :listActive="active_index" @handleActive="handleTab"></base-ani-tab-bar>
		<!-- 导航栏 -->
	</view>
</template>

<script>
	import BaseAniTabBar from '@/components/base/BaseAniTabBar'
	export default {
		components: {
			BaseAniTabBar,
		},
		data() {
			return {
				list: ['购买礼品卡', '我的礼品卡'], // 选项卡列表
				active_index: 0,
			}
		},
		methods: {
			handleTab(index) {
				this.active_index = index
			},
		}
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
