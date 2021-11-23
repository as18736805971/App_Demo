<template>
	<view class="share" @touchmove.stop.prevent>
		<!-- 遮罩层 -->
		<view :class="{'share-box': modalState}" @click="handleHiddenModal()"></view>
		<!-- 遮罩层 -->
		<view class="share-item" :class="{'share-show': modalState}">
			<!-- 默认标题样式 -->
			<template v-if="parameter.show">
				<view class="title-item" v-if="parameter.style === 'style1'">
					<image v-if="closeIcon !== ''" :src="closeIcon" @click="handleHiddenModal()"></image>
					<view class="cnote-title">
						<view>{{ parameter.name }}</view>
						<view></view>
					</view>
				</view>

				<view class="title-item2" v-if="parameter.style === 'style2'">
					<image v-if="closeIcon !== ''" :src="closeIcon" @click="handleHiddenModal()"></image>
					<view class="cnote-title">
						<view class="name">{{ parameter.name }}</view>
					</view>
					<view class="desc" v-if="parameter.desc !== ''">{{ parameter.desc }}</view>
				</view>
			</template>
			<!-- 默认标题样式 -->

			<!-- 插槽内容 -->
			<slot name="default"></slot>
			<!-- 插槽内容 -->
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			// 显示默认标题
			parameter: {
				type: Object,
				default: function() {
					return {
						show: false,
						name: '标题',
						style: 'style1',
						desc: '描述'
					}
				}
			},
			// 显示默认关闭按钮图标
			closeIcon: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				modalState: false,
			}
		},
		methods: {
			// 显示弹框  通过组件 this.$ref.参数.handleShowModal() 使用
			handleShowModal() {
				this.modalState = true;
			},
			// 隐藏弹框
			handleHiddenModal() {
				this.modalState = false;
			}
		}
	}
</script>

<style lang="scss">
	.share {
		width: 100%;
		height: 100%;
	}

	.share-box {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0rpx;
		left: 0rpx;
		bottom: 0rpx;
		right: 0rpx;
		background-color: rgba(0, 0, 0, 0.4);
		transition: .5s;
		z-index: 999;
	}

	// 进入弹框动画
	.share-show {
		transition: all 0.5s ease;
		transform: translateY(0%) !important;
	}

	// 离开弹框动画
	.share-item {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: auto;
		transition: all 0.5s ease;
		transform: translateY(100%);
		z-index: 1999;
	}

	.title-item {
		width: 100%;
		height: 80rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		background-color: #FFFFFF;
		border-radius: 20rpx 20rpx 0 0;

		image {
			position: absolute;
			top: 20rpx;
			right: 20rpx;
			width: 40rpx;
			height: 40rpx;
		}

		.cnote-title {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			view:first-child {
				font-size: 32rpx;
				color: #333333;
				font-weight: 600;
				z-index: 999;
			}

			view:last-child {
				width: 100rpx;
				height: 10rpx;
				background-color: #FFF001;
				border-radius: 5rpx;
				margin-top: -14rpx;
			}
		}
	}

	.title-item2 {
		width: 100%;
		height: auto;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		position: relative;
		background-color: #FFFFFF;
		border-radius: 20rpx 20rpx 0 0;
		padding-bottom: 15rpx;
		border-bottom: 1rpx solid #F0F0F0;

		image {
			position: absolute;
			top: 20rpx;
			right: 20rpx;
			width: 40rpx;
			height: 40rpx;
		}

		.cnote-title {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin-top: 20rpx;

			.name {
				font-size: 30rpx;
				z-index: 999;
				color: #333333;
			}
		}

		.desc {
			width: 100%;
			padding: 0 20rpx;
			height: auto;
			margin-top: 10rpx;
			font-size: 24rpx;
			text-align: center;
			color: #8F8F8F;
		}
	}
</style>
