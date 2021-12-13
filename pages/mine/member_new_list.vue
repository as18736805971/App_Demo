<template>
	<view class="page-index">
		<image class="member-image" v-for="(item, index) in member_list" :key="index" @click="handleJump({type: ''})"
			:src="item.pic"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				member_list: [{
					id: 1,
					pic: 'https://img9.51tietu.net/pic/2019-091200/vgkpidei2tjvgkpidei2tj.jpg',
				}, {
					id: 2,
					pic: 'https://img9.51tietu.net/pic/2019-091200/euzekmi5m23euzekmi5m23.jpg',
				}, {
					id: 3,
					pic: 'https://img9.51tietu.net/pic/2019-091200/143tt0ta4sr143tt0ta4sr.jpg',
				}, {
					id: 4,
					pic: 'https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg',
				}],
			}
		},
		methods: {
			// 页面跳转
			handleJump(link) {
				// uni.navigateTo({
				//   url: link.type
				// });
			},
		}
	}
</script>

<style lang="scss" scoped>
	.page-index {
		padding: 20rpx;
		font-size: 24rpx;
		color: #242424;

		.member-image {
			border-radius: 12rpx;
			width: 100%;
			height: 250rpx;
			margin-bottom: 20rpx;
		}
	}
</style>
