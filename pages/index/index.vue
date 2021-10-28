<template>
	<view class="page-index">
		<view class="list">
			<view v-for="(item,index) in list" :key="index" class="button" @click="jump(item.link)">{{item.title}}</view>
		</view>

		<!-- 组件 -->
		<BaseDialog ref="noteDialog" :style-type="'style1'">
			<view class="note-content"></view>
		</BaseDialog>
		<!-- 组件 -->
	</view>
</template>

<script>
	import BaseDialog from '../../components/base/BaseDialog.vue'
	export default {
		components: {
			BaseDialog
		},
		data() {
			return {
				list: [{
					title: '弹框',
					link: {
						type: 'button',
					},
				}]
			}
		},
		onLoad() {
			console.log('11111111111')
		},
		methods: {
			jump(link) {
				if (link.type === 'button') {
					this.$refs.noteDialog.show()
				}
			}
		}
	}
</script>

<style lang="scss">
	.page-index {
		width: 100%;
		min-height: 100vh;

		.list {
			width: 100%;
			padding: 20rpx;
			display: flex;
			align-items: center;
			flex-wrap: wrap;

			.button {
				padding: 12rpx 20rpx;
				font-size: 24rpx;
				border-radius: 8rpx;
				color: #fff;
				background-color: #409eff;
				border-color: #409eff;
			}
		}
		
		// 组件样式
		.note-content {
			width: 500rpx;
			height: 500rpx;
			border-radius: 20rpx;
			background-color: #FFFFFF;
			position: relative;
			box-sizing: border-box;
		}
	}
</style>
