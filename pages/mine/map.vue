<template>
	<view class="page-index">
		<!-- 地图 -->
		<map style="width: 100%; height: 380rpx;" :markers="markers" :show-location="true" :latitude="latitude"
			:longitude="longitude">
		</map>
		<!-- 地图 -->

		<!-- 地图 -->
		<view class="list">
			<view class="list-search">
				<image class="search-icon" :src="require('@/static/icon/search.png')" />
				<input class="input" type="text" v-model="search" placeholder-style="color:#707274"
					placeholder="搜索地点" />
			</view>

			<scroll-view scroll-y="true" class="list-item">
				<view class="block-list" v-for="(item, index) in address_list" :key="index"
					@click="handleSetAddress(index)">
					<view class="left">
						<view class="title">{{ item.address }}</view>
						<view class="desc">{{ item.detailed }}</view>
					</view>
					<view class="right">
						<image v-if="item.status" class="check-icon" :src="require('@/static/icon/check1.png')" />
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- 地图 -->

		<!-- 悬浮按钮 -->
		<view class="suspend-button">
			<view class="btn" @click="handleJump({type: './add_address'})">确定</view>
		</view>
		<!-- 悬浮按钮 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				search: '',
				latitude: '', // 纬度
				longitude: '', // 经度
				// 标注点配置
				markers: [{
					id: 1,
					latitude: '',
					longitude: '',
					// iconPath: require('@/static/icon/check1.png'), // 修改标注点图标
				}],
				address_list: [{
					latitude: '34.65774',
					longitude: '112.3957',
					address: '诶嘿嘿',
					detailed: '快递到了昵速度1121221',
					status: false,
				}, {
					latitude: '34.65665',
					longitude: '112.3900',
					address: '神里绫华',
					detailed: '快递到了昵速度1121221',
					status: false,
				}]
			}
		},
		onLoad() {
			this.handleGetLocation()
		},
		methods: {
			handleSetAddress(index) {
				this.address_list.map((item, index) => {
					item.status = false
				})
				this.address_list[index].status = true
				this.latitude = this.address_list[index].latitude
				this.longitude = this.address_list[index].longitude
			},
			handleGetLocation() {
				let that = this
				uni.getLocation({
					type: 'gcj02',
					success: function(res) {
						that.longitude = res.longitude
						that.latitude = res.latitude
						that.markers[0].longitude = res.longitude
						that.markers[0].latitude = res.latitude
					},
					fail: function(err) {
						uni.showModal({
							title: '温馨提示',
							content: '您已拒绝定位,请开启',
							confirmText: "去设置",
							success: (res) => {
								if (res.confirm) {
									uni.openSetting({
										success: (res) => {
											if (res.authSetting || res.authSetting
												.scope.userLocation) {
												uni.chooseLocation({
													success: function(res) {
														that.longitude =
															res.longitude
														that.latitude = res
															.latitude
													},
												});
											} else {
												uni.showToast({
													icon: 'none',
													title: '授权失败'
												})
											}
										},
									})
								}
							}
						})
					}
				});
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
		font-size: 24rpx;
		color: #242424;
		background-color: #FFFFFF;

		.list {
			height: calc(100vh - 400rpx);
			padding: 20rpx 30rpx 0 30rpx;
			background-color: #FFFFFF;

			&-search {
				position: relative;
				width: 100%;
				height: 80rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				margin-bottom: 40rpx;

				.search-icon {
					position: absolute;
					top: 20rpx;
					left: 20rpx;
					width: 45rpx;
					height: 45rpx;
				}

				.input {
					width: 100%;
					padding: 0 40rpx 0 80rpx;
					height: 80rpx;
					border-radius: 50rpx;
					background-color: #f7f7f7;
				}
			}

			&-item {
				width: 100%;
				height: calc(100% - 220rpx);

				.block-list {
					width: 100%;
					height: 100rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					overflow: hidden;
					padding-bottom: 10rpx;
					border-bottom: 2rpx solid #e2e4e6;

					.left {
						width: 90%;

						.title {
							width: 100%;
							height: 43rpx;
							font-size: 28rpx;
							line-height: 43rpx;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}

						.desc {
							width: 100%;
							height: 43rpx;
							font-size: 24rpx;
							line-height: 43rpx;
							color: #707274;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
					}

					.right {
						width: 10%;
						display: flex;
						align-items: center;
						justify-content: center;

						.check-icon {
							width: 40rpx;
							height: 40rpx;
						}
					}
				}

				.block-list:last-child {
					border-bottom: none;
				}
			}
		}

		.suspend-button {
			position: fixed;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 100rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 30rpx;
			background-color: #FFFFFF;

			.btn {
				width: 94%;
				height: 80rpx;
				background-color: #b0d43e;
				border-radius: 50rpx;
				line-height: 80rpx;
				text-align: center;
				color: #252326;
			}
		}
	}
</style>
