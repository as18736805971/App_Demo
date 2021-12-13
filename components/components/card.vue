<template>
	<view class="card">
		<view class="card-list" v-for="(item, index) in arrList" :key="index">
			<view class="card-item">
				<template v-for="(vv, kk) in item">
					<view class="item" v-if="kk !== 2" :key="kk" @click="handleJump(vv, kk)">
						<image class="icon" :src="vv.icon"></image>
						<view class="title">{{ vv.title }}</view>
						<view class="desc">{{ vv.desc }}</view>
					</view>
          <view class="line" v-if="kk === 0 && item.length !== 1"></view>
				</template>
			</view>
			<view class="card-bottom" v-if="item.length === 3" @click="handleJump(item[2], 2)">
				<view class="name">
					<image class="icon" :src="item[2].icon"></image>
					<view class="title">{{ item[2].title }}</view>
				</view>
				<view class="desc">{{ item[2].desc }}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "card",
		props: {
			list: {
				type: Array,
				default: () => []
			}
		},
		computed: {
			// 重组数据格式为每组3条数据
			arrList() {
				let data = []
				let arr = []
				this.list.map((item, index) => {
					if (index !== this.list.length - 1) {
						if (index !== 0 && index % 3 === 0) {
							data.push(arr)
							arr = []
							arr.push(item)
						} else {
							arr.push(item)
						}
					} else {
            // 如果子数据已有3条 则重新另外放入新数据
            if (arr.length !== 3) {
              arr.push(item)
              data.push(arr)
            } else {
              data.push(arr)
              arr = []
              arr.push(item)
              data.push(arr)
            }
					}
				})
				return data
			}
		},
		data() {
			return {}
		},
		methods: {
			handleJump(item, index) {
				this.$emit('handleCard', {
					item,
					index
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.card {
		height: auto;
		margin: 0 auto;
		padding: 0 20rpx;

		.card-list {
			background-color: #FFFFFF;
			margin-bottom: 20rpx;
			border-radius: 12rpx;
			overflow: hidden;
			padding: 20rpx 40rpx 0;

			.card-item {
				width: 100%;
				height: 300rpx;
				display: flex;
				align-items: center;

				.item {
					width: 50%;
					height: 250rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					flex-wrap: wrap;
					flex-direction: column;

					.icon {
						width: 150rpx;
						height: 150rpx;
						border-radius: 12rpx;
					}

					.title {
						width: 100%;
						height: 50rpx;
						line-height: 50rpx;
						text-align: center;
						font-size: 30rpx;
						font-weight: bold;
						color: #272727;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}

					.desc {
						width: 100%;
						height: 50rpx;
						line-height: 50rpx;
						text-align: center;
						font-size: 24rpx;
						color: #afb0b2;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
				}

				.line {
					width: 1rpx;
					height: 250rpx;
					background-color: #e0e0e2;
				}
			}

			.card-bottom {
				width: 100%;
				height: 100rpx;
				border-top: 1rpx solid #e0e0e2;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.name {
					display: flex;
					align-items: center;

					.icon {
						width: 65rpx;
						height: 65rpx;
						margin-right: 10rpx;
					}

					.title {
						width: 200rpx;
						height: 50rpx;
						line-height: 50rpx;
						text-align: left;
						font-size: 30rpx;
						font-weight: bold;
						color: #272727;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
				}

				.desc {
					width: 350rpx;
					height: 50rpx;
					line-height: 50rpx;
					text-align: right;
					font-size: 24rpx;
					color: #afb0b2;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}
		}
	}
</style>
