<template>
	<view class="page-index">
		<view class="icon">
			<view class="info-list">
				<view class="item">
					<view class="left">头像</view>
					<view class="right">
						<image class="portrait" :src="require('@/static/appicon/portrait.png')"></image>
					</view>
				</view>
				<view class="item">
					<view class="left">昵称</view>
					<view class="right">
						<input type="text" v-model="nickName" class="input" />
					</view>
				</view>
				<view class="item">
					<view class="left">性别</view>
					<view class="right" @click="handleSex(1, null)">
						<view>{{ sex || '未知' }}</view>
						<image class="right_arrow" :src="require('@/static/icon/right_arrow.png')"></image>
					</view>
				</view>
				<view class="item">
					<view class="left">账号</view>
					<view class="right">{{ account }}</view>
				</view>
				<view class="item">
					<view class="left">手机号</view>
					<view class="right">{{ phone }}</view>
				</view>
				<view class="item">
					<view class="left">生日</view>
					<view class="right">
						<!--<view>{{ birthday || '完善生日，享生日好礼' }}</view>-->
						<base-date-picker @onCancel="onCancel" @onConfirm="onConfirm" :defaultValue="birthday"></base-date-picker>
						<image class="right_arrow" :src="require('@/static/icon/right_arrow.png')"></image>
					</view>
				</view>
				<view class="item">
					<view class="left">入会时间</view>
					<view class="right">{{ create_time }}</view>
				</view>
			</view>
		</view>

		<view class="save" @click="handleSave()">保存</view>

		<!-- 性别弹窗 -->
		<base-modal ref="sex">
			<view class="model">
				<view class="item" @click="handleSex(2 , '先生')">先生</view>
				<view class="item" @click="handleSex(2 , '女士')">女士</view>
				<view class="cancel" @click="handleSex(3 , null)">取消</view>
			</view>
		</base-modal>
		<!-- 性别弹窗 -->
	</view>
</template>

<script>
	import BaseModal from '@/components/base/BaseModal'
	import BaseDatePicker from "@/components/base/BaseDatePicker"

	export default {
		components: {
			BaseModal,
			BaseDatePicker,
		},
		data() {
			return {
				nickName: '你的眼里有星星',
				sex: '',
        phone: '18736805971',
        account: 'Stars18736805971',
				birthday: '2021-11-26',
        create_time: '2021-11-25 14:40:21',
			}
		},
		onLoad() {},
		methods: {
      // 取消
      onCancel(e){
        console.log(e);
      },
      // 确认
      onConfirm(e){
        this.pickerDate = e.dateValue;
      },
			// 选择性别
			handleSex(type, str) {
				if (type === 1) {
					this.$refs.sex.handleShowModal()
				} else if (type === 2) {
					this.sex = str
					this.$refs.sex.handleHiddenModal()
				} else {
					this.$refs.sex.handleHiddenModal()
				}
			},
			// 保存
			handleSave() {
				uni.showToast({
					title: '保存成功',
					duration: 1000
				});
				setTimeout(() => {
					uni.switchTab({
						url: '../mine/index'
					});
				}, 1500)
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
		background-color: #f3f4f4 !important;

		.icon {
			height: auto;
			padding: 40rpx 30rpx;
		}

		.info-list {
			height: auto;
			background-color: #FFFFFF;
			border-radius: 12rpx;
			box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);

			.item {
				height: 110rpx;
				padding: 0 30rpx;
				border-bottom: 2rpx solid #f3f4f4;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.left {
					width: 30%;
					height: 80rpx;
					display: flex;
					align-items: center;
					justify-content: flex-start;
					color: #242524;
					font-size: 26rpx;
				}

				.right {
					width: 60%;
					height: 80rpx;
					display: flex;
					align-items: center;
					justify-content: flex-end;
					color: #a2a5a8;
					font-size: 26rpx;

					.portrait {
						width: 80rpx;
						height: 80rpx;
						border-radius: 50%;
						margin-right: 20rpx;
					}

					.input {
						width: 100%;
						height: 80rpx;
						text-align: right;
					}

					.right_arrow {
						width: 24rpx;
						height: 24rpx;
						margin-left: 20rpx;
					}
				}
			}

			.item:last-child {
				border-bottom: none;
			}
		}

		.save {
			width: 80%;
			margin: 150rpx auto 0;
			height: 80rpx;
			text-align: center;
			line-height: 80rpx;
			font-size: 28rpx;
			border-radius: 50rpx;
			background-color: #b0d342;
		}

		.model {
			height: auto;
			border-radius: 20rpx 20rpx 0 0;
			background-color: #f3f4f4;
			overflow: hidden;

			.item {
				height: 100rpx;
				line-height: 100rpx;
				text-align: center;
				font-size: 30rpx;
				color: #a2a5a8;
				background-color: #FFFFFF;
				border-bottom: 2rpx solid #f3f4f4;
			}

			.item:last-child {
				border-bottom: none;
			}

			.cancel {
				margin-top: 10rpx;
				height: 80rpx;
				line-height: 80rpx;
				text-align: center;
				font-size: 30rpx;
				background-color: #FFFFFF;
				padding-bottom: 70rpx;
			}
		}
	}
</style>
