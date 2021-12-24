<template>
	<view class="page-index">
		<view class="address-item" v-for="(item, index) in address_list" :key="index">
			<view class="left">
				<view class="address">
					<view class="label default" v-if="item.default">默认</view>
					<view class="label" v-if="item.label !== -1">
						{{ item.label === 0 ? '家' : item.label === 1 ? '公司' : '学校' }}
					</view>
					<view class="txt">{{ item.address }}</view>
				</view>
				<view class="info">{{ item.nickname }}<text>{{ item.sex === 1 ? '先生' : '女士' }}</text>
					{{ item.phone }}
				</view>
			</view>
			<view class="right" @click="handleJump({type: './add_address?edit=edit'})">
				<image class="edit-icon" :src="require('@/static/icon/edit.png')"></image>
			</view>
		</view>

		<view class="suspend-button">
			<view class="wechat">
				<image :src="require('@/static/icon/wechat1.png')"></image>
				微信导入
			</view>
			<view class="btn" @click="handleJump({type: './add_address?edit=add'})">
				<image :src="require('@/static/icon/add1.png')"></image>
				新增地址
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				address_list: [{
					default: true,
					label: 0,
					address: '江山盛世名门二期',
					nickname: '你的眼里有星星',
					sex: 1,
					phone: '18736805971',
				}, {
					default: false,
					label: 2,
					address: '江山盛世名门二期',
					nickname: '钟离',
					sex: 1,
					phone: '15538847971',
				}, {
					default: false,
					label: 1,
					address: '江山盛世名门二期',
					nickname: '你的眼里有星星',
					sex: 2,
					phone: '18736805971',
				}]
			}
		},
		methods: {
			handleJump(link) {
				uni.navigateTo({
					url: link.type
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page-index {
		font-size: 24rpx;
		color: #242424;
		padding: 20rpx 30rpx 170rpx;

		.address-item {
			padding: 20rpx;
			height: auto;
			border-radius: 12rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			background-color: #FFFFFF;
			margin-bottom: 20rpx;

			.left {
				width: 80%;
				height: 110rpx;

				.address {
					height: 60rpx;
					display: flex;
					align-items: center;

					.label {
						padding: 0 10rpx;
						height: 35rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						color: #4d90de;
						font-size: 24rpx;
						border-radius: 10rpx;
						border: 2rpx solid #4d90de;
						margin-right: 15rpx;
					}

					.default {
						border: 2rpx solid #b2d243;
						color: #b2d243;
					}

					.txt {
						font-size: 28rpx;
						font-weight: bold;
					}
				}

				.info {
					height: 50rpx;
					color: #717173;
					font-size: 24rpx;
					display: flex;
					align-items: center;

					text {
						margin: 0 15rpx;
					}
				}
			}

			.right {
				width: 20%;
				display: flex;
				align-items: center;
				justify-content: flex-end;

				.edit-icon {
					width: 40rpx;
					height: 40rpx;
				}
			}
		}

		.suspend-button {
			position: fixed;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 170rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 30rpx;
			background-color: #f3f4f4;

			image {
				width: 35rpx;
				height: 35rpx;
				margin-right: 15rpx;
			}

			.wechat {
				width: 37%;
				height: 80rpx;
				border: 2rpx solid #b2d243;
				margin-right: 40rpx;
				border-radius: 50rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #b2d243;
			}

			.btn {
				width: 37%;
				height: 80rpx;
				background-color: #b0d43e;
				border-radius: 50rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #252326;
			}
		}
	}
</style>
