<template>
	<view class="index-center">
		<template v-if="shopList.length !== 0">
			<view class="shop">
				<view class="shop-item item-center" v-for="(item, index) in shopList" :key="item.id">
					<view class="radio" @click.stop="itemChecked(index)">
						<label>
							<checkbox style="transform:scale(0.8)" :checked="item.status" />
						</label>
					</view>
					<view class="image" @click.stop="handleJump()">
						<image :src="item.goods_img" mode="aspectFill"></image>
					</view>
					<view class="text">
						<view class="title">
							<text @click.stop="handleJump()">{{item.goods_name}}</text>
							<view class="del item-center">
								<image :src="require('@/static/appicon/del.png')" @click.stop="handleDel(index)">
								</image>
							</view>
						</view>
						<view class="button">
              <view class="price" @click.stop="handleJump()">
								￥<text>{{item.price}}</text>
							</view>
							<view class="number">
								<view class="jian item-center" @click="handleAdd(index, 1)">-</view>
								<view class="input">
									<input type="number" v-model.number="item.number" :min="1" class="input-text" />
								</view>
								<view class="jian item-center" @click="handleAdd(index, 2)">+</view>
							</view>
						</view>
					</view>
				</view>
			</view>

			<!-- 购物车按钮 -->
			<view class="goods">
				<view class="item">
					<view class="radio item-center" @click="allChecked()">
						<label>
							<checkbox style="transform:scale(0.8)" :checked="allselect" />
							<text class="txt">全选</text>
						</label>
					</view>
					<view class="price item-center">
						<text class="totalCount">共{{totalCount}}件</text>
						<text>合计:</text>
						<text class="allPrice">￥{{allPrice}}</text>
					</view>
					<view class="sublit item-center">结算</view>
				</view>
			</view>
			<!-- 购物车按钮 -->
		</template>

		<!-- 暂无数据 -->
		<view class="nothing" v-if="shopList.length === 0">
			<view class="null-icon"></view>
			<view>您的购物车暂无商品</view>
			<view>再忙、也要记得买点什么犒劳下自己哦~</view>
		</view>
		<!-- 暂无数据 -->

	</view>
</template>

<script>
	export default {
		data() {
			return {
				totalCount: 0,
				allPrice: '0.00',
				allselect: false,
				shopList: [{
						id: 1,
						goods_name: '休闲时尚套装',
						price: '66.00',
						number: 1,
						goods_img: require('@/static/appicon/app.png'),
						status: false
					},
					{
						id: 2,
						goods_name: '安踏运动球鞋',
						price: '299.99',
						number: 2,
						goods_img: require('@/static/appicon/about.png'),
						status: false
					}, {
						id: 3,
						goods_name: '森马外套羽绒',
						price: '99.99',
						number: 6,
						goods_img: require('@/static/appicon/article.png'),
						status: false
					}, {
						id: 4,
						goods_name: '阿迪达斯篮球',
						price: '159.65',
						number: 5,
						goods_img: require('@/static/appicon/close.png'),
						status: false
					}, {
						id: 5,
						goods_name: '安踏运动外套套装',
						price: '55.22',
						number: 4,
						goods_img: require('@/static/appicon/code.png'),
						status: false
					}, {
						id: 6,
						goods_name: 'iphone18ProMax',
						price: '19999',
						number: 9,
						goods_img: require('@/static/appicon/download.png'),
						status: false
					}, {
						id: 7,
						goods_name: '华为蓝牙耳机',
						price: '1999',
						number: 1,
						goods_img: require('@/static/appicon/love.png'),
						status: false
					}
				]
			}
		},
		watch: {
			shopList: {
				handler() {
					this.handleCount()
				},
				immediate: true,
				deep: true,
			}
		},
		methods: {
			handleJump() {
				uni.navigateTo({
					url: './details'
				});
			},
			itemChecked(index) {
				this.shopList[index].status = !this.shopList[index].status
			},
			handleCount() {
				this.totalCount = 0
				let allPrice = 0
				this.shopList.map((item) => {
					if (item.status) {
						this.totalCount += parseInt(item.number)
						allPrice += item.number * item.price
					}
				})
				this.allPrice = allPrice.toFixed(2)
			},
			allChecked() {
				this.allselect = !this.allselect
				if (this.allselect) {
					this.shopList.map((item) => {
						item.status = true
					})
				} else {
					this.shopList.map((item) => {
						item.status = false
					})
				}
			},
			handleDel(index) {
				this.shopList.splice(index, 1)
			},
			handleAdd(index, type) {
				if (type === 1) {
					this.shopList[index].number = this.shopList[index].number - 1
					this.shopList[index].number = this.shopList[index].number <= 1 ? 1 : this.shopList[index].number
				} else {
					this.shopList[index].number = this.shopList[index].number + 1
				}
			}
		}
	}
</script>

<style lang="scss">
	.index-center {
		width: 100%;
		background-color: #FFFFFF;

		.shop {
			width: 96%;
			margin: 0 auto;
			padding-bottom: 100rpx;

			.shop-item {
				width: 100%;
				height: 200rpx;
				padding: 10rpx 0;
				margin-bottom: 50rpx;

				.radio {
					width: 10%;
					height: 100%;
				}

				.image {
					width: 200rpx;
					height: 200rpx;
					margin-right: 20rpx;
					border-radius: 15rpx;
					box-shadow: 0rpx 3rpx 12rpx rgba(0, 0, 0, 0.12);

					image {
						width: 100%;
						height: 100%;
						border-radius: 15rpx;
					}

				}

				.text {
					width: 60%;
					height: 100%;
					display: flex;
					flex-wrap: wrap;
					align-content: space-between;

					.title {
						width: 100%;
						height: 50rpx;
						display: flex;
						align-items: center;
						justify-content: space-between;

						&>text {
							width: 85%;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}

						.del {
							width: 15%;
							height: 50rpx;

							image {
								width: 35rpx;
								height: 35rpx;
							}
						}
					}

					.button {
						width: 100%;
						height: 60rpx;
						font-size: 20rpx;
						display: flex;
						align-items: center;
						justify-content: space-between;

						.price {
							color: #DD524D;
							font-size: 24rpx;

							text {
								font-size: 28rpx;
							}
						}

						.number {
							display: flex;
							align-items: center;

							.jian {
								width: 80rpx;
								height: 50rpx;
								background-color: #EFEFF4;
								border-radius: 6rpx;
								color: #808080;
								font-size: 30rpx;
							}

							.input {
								width: 70rpx;
								height: 50rpx;
								margin: 0 5rpx;
								background-color: #EFEFF4;
								border-radius: 6rpx;
							}

							.input-text {
								height: 50rpx;
								font-size: 24rpx;
								text-align: center;
								line-height: 50rpx;
							}
						}

					}

				}

			}

		}

		.goods {
			position: fixed;
			bottom: 0;
			width: 100%;
			height: 100rpx;
			background-color: #FFFFFF;
			z-index: 999;

			.item {
				width: 96%;
				height: 100rpx;
				margin: 0 auto;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.radio {
					width: 25%;
					display: flex;
					align-items: center;
					justify-content: flex-start;

					.txt {
						font-size: 24rpx;
						color: #808080;
					}
				}

				.price {
					font-size: 26rpx;

					.totalCount {
						font-size: 20rpx;
						color: #C8C7CC;
						margin-right: 10rpx;
					}

					.allPrice {
						font-size: 30rpx;
						color: #409eff;
						margin-right: 20rpx;
					}
				}

				.sublit {
					width: 200rpx;
					height: 60rpx;
					border-radius: 50rpx;
					background-color: #409eff;
					color: #FFFFFF;
				}
			}
		}

		.item-center {
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.nothing {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 100;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			color: #999999;

			.null-icon {
				background: url('@/static/image/no-data.png') no-repeat;
				background-size: 100% 100%;
				width: 350rpx;
				height: 350rpx;
			}

		}

		checkbox .wx-checkbox-input {
			border-radius: 50% !important;
		}

		checkbox .wx-checkbox-input.wx-checkbox-input-checked {
			color: #fff;
			background: #409eff;
			border: 1rpx solid #409eff;
		}
	}
</style>
