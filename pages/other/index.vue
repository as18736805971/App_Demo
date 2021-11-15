<template>
	<view class="page-index">
		<view @click="handleClick()">12212121</view>
		<base-modal ref="Share" :title="{show: true, name: '测试标题'}" :closeIcon="'../../static/icon/close.png'">
			<view class="index"></view>
		</base-modal>
	</view>
</template>

<script>
	import BaseModal from '../../components/base/BaseModal.vue'
	export default {
		components: {
			BaseModal,
		},
		data() {
			return {}
		},
		methods: {
			handleClick() {
				this.$refs.Share.handleShowModal()
			}
		},
	}
</script>

<style lang="scss">
	.page-index {
		.index {
			width: 100%;
			height: 500rpx;
			background-color: #007AFF;
		}
	}
</style>
