<template>
	<view class="page-index">
		<BaseNoData :type="'nodata'"></BaseNoData>
	</view>
</template>

<script>
	import {
		BaseNoData
	} from '../../components/base/BaseNoData.vue'
	export default {
		components: {
			BaseNoData
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.page-index {
		width: 100%;
		min-height: 100vh;
	}
</style>
