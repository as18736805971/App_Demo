<template>
	<view class="page-index">
		<view class="page-list">
			<view class="list-item">
				<text class="title">收货人</text>
				<view class="input">
					<input class="input-txt" :maxlength="10" type="text" v-model="info.nickname"
						placeholder-style="color:#a4a5a7" placeholder="请输入姓名" />
				</view>
			</view>
			<view class="list-item">
				<text class="title">性别</text>
				<view class="input" @click="handleSex(0)">
					<view class="sex" :class="info.sex === -1 ? 'placeholder' : ''">
						{{ info.sex === 1 ? '先生' : info.sex === 2 ? '女士' : '请选择性别' }}
					</view>
					<image class="arrow" :src="require('@/static/icon/right_arrow.png')"></image>
				</view>
			</view>
			<view class="list-item">
				<text class="title">手机号</text>
				<view class="input">
					<input class="input-txt" :maxlength="11" type="number" v-model="info.phone"
						placeholder-style="color:#a4a5a7" placeholder="请输入手机号码" />
				</view>
			</view>
			<view class="list-item height">
				<text class="title">收货地址</text>
				<view class="input-address" @click="handleJump({type: './map'})">
					<view class="address" :class="info.address === '' ? 'placeholder' : ''">
						{{ info.address === '' ? '请选择收货地址' : info.address }}
					</view>
					<view class="right">
						<image class="arrow" :src="require('@/static/icon/right_arrow.png')"></image>
					</view>
				</view>
			</view>
			<view class="list-item height no-line">
				<text class="title">门牌号</text>
				<view class="input-address">
					<textarea class="detailed_address" :maxlength="25" v-model="info.detailed_address"
						placeholder-style="color:#a4a5a7" placeholder="请输入详细地址" />
				</view>
			</view>
		</view>

		<view class="page-list">
			<view class="list-item">
				<text class="title">标签</text>
				<view class="input">
					<view class="block" :class="info.label === index ? 'active' : ''" v-for="(item, index) in label"
						@click="handleLabel(index)" :key="index">{{ item }}</view>
				</view>
			</view>
			<view class="list-item no-line">
				<text class="title">设置为默认地址</text>
				<view class="input">
					<switch color="#afd541" @change="handleDefault" :checked="info.default" />
				</view>
			</view>
		</view>

		<view class="btn-list" :class="edit === 'edit' ? 'edit-btn' : ''">
			<template v-if="edit === 'edit'">
				<view class="del">删除</view>
				<view class="save edit">保存</view>
			</template>
			<template v-else>
				<view class="save">保存</view>
			</template>
		</view>

		<!-- 性别弹窗 -->
		<base-modal ref="sex">
			<view class="model">
				<view class="item" @click="handleSex(1)">先生</view>
				<view class="item" @click="handleSex(2)">女士</view>
				<view class="cancel" @click="handleSex(-1)">取消</view>
			</view>
		</base-modal>
		<!-- 性别弹窗 -->
	</view>
</template>

<script>
	import BaseModal from '@/components/base/BaseModal'
	export default {
		components: {
			BaseModal,
		},
		data() {
			return {
				edit: 'add',
				label: ['家', '公司', '学校'],
				info: {
					nickname: '',
					sex: -1,
					phone: '',
					address: '',
					detailed_address: '',
					label: -1,
					default: false,
				},
			}
		},
		onLoad(e) {
			uni.setNavigationBarTitle({
				title: e.edit === 'edit' ? '修改地址' : '新增地址'
			});
			this.edit = e.edit
		},
		methods: {
			// 选择性别
			handleSex(type) {
				if (type === 0) {
					this.$refs.sex.handleShowModal()
				} else if (type === -1) {
					this.$refs.sex.handleHiddenModal()
				} else {
					this.info.sex = type
					this.$refs.sex.handleHiddenModal()
				}
			},
			// 选择标签
			handleLabel(index) {
				if (this.info.label !== index) {
					this.info.label = index
				} else {
					this.info.label = -1
				}
			},
			// 是否默认
			handleDefault(e) {
				this.info.default = e.detail.value
			},
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
		padding: 30rpx 20rpx;
		font-size: 24rpx;
		color: #242424;

		.page-list {
			height: auto;
			background-color: #FFFFFF;
			border-radius: 12rpx;
			margin-bottom: 30rpx;

			.list-item {
				padding: 0 25rpx;
				height: 100rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				color: #242424;
				font-size: 26rpx;
				border-bottom: 2rpx solid #f4f4f4;

				.title {
					width: 30%;
					height: 100rpx;
					font-size: 28rpx;
					line-height: 100rpx;
				}

				.placeholder {
					color: #a4a5a7 !important;
				}

				.input {
					width: 70%;
					height: 100rpx;
					display: flex;
					align-items: center;
					justify-content: flex-end;

					.input-txt {
						width: 300rpx;
						height: 100rpx;
						text-align: right;
					}

					.sex {
						width: 150rpx;
						height: 100rpx;
						line-height: 100rpx;
						text-align: right;
					}

					.arrow {
						width: 25rpx;
						height: 25rpx;
						margin-left: 10rpx;
					}

					.block {
						width: 120rpx;
						height: 50rpx;
						border: 2rpx solid #a2a3a5;
						color: #a2a3a5;
						font-size: 24rpx;
						line-height: 50rpx;
						text-align: center;
						border-radius: 6rpx;
						margin-right: 20rpx;
					}

					.block:last-child {
						margin-right: 0;
					}

					.active {
						width: 124rpx;
						height: 54rpx;
						line-height: 54rpx;
						border: none;
						background-color: #b0d341;
						color: #222615;
					}
				}

				.input-address {
					width: 70%;
					height: 120rpx;
					display: flex;
					padding-top: 30rpx;
					align-items: flex-start;
					justify-content: space-between;

					.address {
						width: 92%;
						height: 100rpx;
						text-align: right;
					}

					.detailed_address {
						width: 100%;
						height: 100rpx;
						text-align: right;
					}

					.right {
						width: 8%;
						height: 120rpx;
						display: flex;
						align-items: flex-start;
						justify-content: center;

						.arrow {
							margin-top: 8rpx;
							width: 25rpx;
							height: 25rpx;
						}
					}
				}
			}

			.no-line {
				border: none !important;
			}

			.height {
				height: 150rpx;
				display: flex;
				align-items: flex-start;
			}
		}

		.btn-list {
			width: 90%;
			height: 90rpx;
			margin: 110rpx auto 0;

			.del {
				width: 50%;
				height: 86rpx;
				border: 2rpx solid #b0d341;
				border-radius: 50rpx;
				line-height: 86rpx;
				text-align: center;
				font-size: 30rpx;
				color: #b0d341;
				margin-right: 40rpx;
			}

			.save {
				width: 100%;
				height: 90rpx;
				background-color: #b0d341;
				border-radius: 50rpx;
				line-height: 90rpx;
				text-align: center;
				font-size: 30rpx;
				color: #222327;
			}

			.edit {
				width: 50% !important;
			}
		}

		.edit-btn {
			display: flex;
			align-items: center;
			justify-content: space-between;
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
