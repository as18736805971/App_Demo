<template>
	<view class="page-index">
		<BaseCountDown text-color="#e96900" :bg-color="globalColor" :time="1762566255000" :title="'距开始'" />
		<BaseCounter :value="value" @input="handleInput" />
	</view>
</template>

<script>
	import BaseCountDown from "../../components/base/BaseCountDown.vue";
	import BaseCounter from "../../components/base/BaseCounter.vue";
	export default {
		components: {
			BaseCountDown,
			BaseCounter,
		},
		data() {
			return {
				value: 10,
			}
		},
		onLoad() {

		},
		methods: {
			handleInput(e) {
				this.value = e
			}
		}
	}
</script>

<style lang="scss">

</style>
