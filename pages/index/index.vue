<template>
	<view class="page-index">
		<view class="list">
			<view v-for="(item,index) in list" :key="index" class="button" @click="jump(item.link)">{{item.title}}
			</view>
		</view>

		<!-- 组件 -->
		<BaseDialog ref="noteDialog" :style-type="'style1'">
			<view class="note-content"></view>
		</BaseDialog>
		<!-- 组件 -->

		<base-modal ref="modal" :parameter="list[1].param" :closeIcon="'../../static/icon/close.png'">
			<view class="modal"></view>
		</base-modal>
	</view>
</template>

<script>
	import BaseDialog from '../../components/base/BaseDialog.vue'
	import BaseModal from '../../components/base/BaseModal.vue'

	export default {
		components: {
			BaseDialog,
			BaseModal,
		},
		data() {
			return {
				list: [{
					title: '中间弹框',
					link: {
						type: 'button',
					},
				}, {
					title: '底部弹框',
					link: {
						type: 'modal',
					},
					param: {
						show: true,
						name: '测试标题',
						style: 'style2',
						desc: '文字描述'
					}
				}]
			}
		},
		onLoad() {
			// console.log(getApp().CommonTool.time_format(1636338154))
		},
		methods: {
			jump(link) {
				if (link.type === 'button') {
					this.$refs.noteDialog.show()
				} else if (link.type === 'modal') {
					this.$refs.modal.handleShowModal()
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
				margin-right: 20rpx;
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

		.modal {
			width: 100%;
			height: 500rpx;
			background-color: #007AFF;
		}
	}
</style>
