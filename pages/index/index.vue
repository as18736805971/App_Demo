<template>
	<view class="page-index">
		<Shuffling :img-list="imgList" @selected="selectedBanner"></Shuffling>
	</view>
</template>

<script>
	import Shuffling from '@/components/components/Shuffling.vue'
	export default {
		components: {
			Shuffling,
		},
		data() {
			return {
				imgList: [{
					url: 'https://img9.51tietu.net/pic/2019-091200/vgkpidei2tjvgkpidei2tj.jpg',
					id: 1
				}, {
					url: 'https://img9.51tietu.net/pic/2019-091200/euzekmi5m23euzekmi5m23.jpg',
					id: 2
				}, {
					url: 'https://img9.51tietu.net/pic/2019-091200/143tt0ta4sr143tt0ta4sr.jpg',
					id: 3
				}, {
					url: 'https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg',
					id: 4
				}, ]
			}
		},
		onLoad() {},
		methods: {
			selectedBanner(item, index) {
				console.log('🥒', item, index)
			}
		}
	}
</script>

<style lang="scss">
	.page-index {
		width: 100%;
		min-height: 100vh;
	}
</style>
