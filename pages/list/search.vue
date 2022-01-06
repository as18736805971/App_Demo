<template>
	<view class="page-index">
		<view class="search">
			<view class="search-info">
				<image class="search-icon" :src="require('@/static/icon/search.png')"></image>
				<input class="input" type="text" v-model="search" :maxlength="16" placeholder-styl="color:#a0a4a6"
					placeholder="搜索商品">
				<image v-if="search !== ''" @click="handleClear()" class="search-del"
					:src="require('@/static/icon/close2.png')"></image>
			</view>
			<view class="search-cancel" @click="handleCancel()">取消</view>
		</view>

		<template v-if="list.length !== 0">
			<scroll-view scroll-y="true" class="list">
				<view class="scroll-item" v-for="(item, index) in list" :key="index" @click="handleJump()">
					<view class="left">
						<image class="image" mode="aspectFit" :src="item.pic"></image>
						<view class="goods-name">{{ item.goods_name }}</view>
					</view>
					<view class="right">￥{{ item.price }}</view>
				</view>
			</scroll-view>
		</template>
		<template v-else>
			<view class="list"></view>
		</template>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				search: '',
				list: [{
						id: 1,
						goods_name: '霸气芝士黑桑葚',
						price: '29.00',
						pic: require('@/static/appicon/collect.png'),
					},
					{
						id: 2,
						goods_name: '霸气车厘子',
						price: '36.00',
						pic: require('@/static/appicon/address.png'),
					},
					{
						id: 1,
						goods_name: '霸气葡萄',
						price: '28.00',
						pic: require('@/static/appicon/app.png'),
					},
					{
						id: 1,
						goods_name: '霸气黑桑葚',
						price: '29.00',
						pic: require('@/static/appicon/article.png'),
					},
					{
						id: 1,
						goods_name: '霸气橙子',
						price: '25.00',
						pic: require('@/static/appicon/cate.png'),
					},
					{
						id: 1,
						goods_name: '霸气冰淇淋芒果',
						price: '29.00',
						pic: require('@/static/appicon/code.png'),
					},
					{
						id: 1,
						goods_name: '霸气柠檬',
						price: '17.00',
						pic: require('@/static/appicon/download.png'),
					},
					{
						id: 1,
						goods_name: '霸气冰淇淋草莓',
						price: '29.00',
						pic: require('@/static/appicon/document.png'),
					},
					{
						id: 1,
						goods_name: '霸气燃爆橙子',
						price: '29.00',
						pic: require('@/static/appicon/goods.png'),
					},
					{
						id: 1,
						goods_name: '霸气榴莲王',
						price: '28.00',
						pic: require('@/static/appicon/gift.png'),
					},
					{
						id: 1,
						goods_name: '霸气西柚',
						price: '22.00',
						pic: require('@/static/appicon/love.png'),
					},
					{
						id: 1,
						goods_name: '霸气火炬车厘子',
						price: '38.00',
						pic: require('@/static/appicon/search.png'),
					},
				]
			}
		},
		methods: {
			handleClear() {
				this.search = ''
			},
			handleJump() {
				uni.navigateTo({
					url: '../goods/details'
				});
			},
			handleCancel() {
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page-index {
		padding-top: 110rpx;
		font-size: 24rpx;
		color: #242424;
		background-color: #FFFFFF;

		.search {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 110rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;

			&-info {
				position: relative;
				width: 80%;
				height: 70rpx;
				margin-left: 30rpx;
				background-color: #f7f7f7;
				border-radius: 50rpx;
				display: flex;
				align-items: center;
				justify-content: center;

				.input {
					width: 70%;
					height: 50rpx;
					color: #242524;
				}
			}

			&-icon {
				position: absolute;
				left: 8%;
				top: 50%;
				transform: translate(-50%, -50%);
				width: 45rpx;
				height: 45rpx;
			}

			&-del {
				position: absolute;
				right: 2%;
				top: 50%;
				transform: translate(-50%, -50%);
				width: 35rpx;
				height: 35rpx;
			}

			&-cancel {
				width: 15%;
				height: 70rpx;
				line-height: 70rpx;
				text-align: right;
				margin-right: 30rpx;
				font-size: 30rpx;
				color: #707274;
			}
		}

		.list {
			width: 100%;
			height: calc(100vh - 110rpx);

			.scroll-item {
				width: 100%;
				height: 150rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 2rpx solid #e2e4e6;

				.left {
					width: 75%;
					height: 130rpx;
					margin-left: 30rpx;
					display: flex;
					align-items: center;

					.image {
						width: 130rpx;
						height: 130rpx;
						border-radius: 4rpx;
						margin-right: 10rpx;
					}

					.goods-name {
						width: 360rpx;
						height: 130rpx;
						font-size: 28rpx;
						line-height: 130rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
				}

				.right {
					width: 25%;
					height: 130rpx;
					font-size: 28rpx;
					text-align: right;
					line-height: 130rpx;
					margin-right: 30rpx;
				}
			}

			.scroll-item:last-child {
				border-bottom: none;
			}
		}
	}
</style>
