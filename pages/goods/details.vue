<template>
	<view class="page-index">
		<swiper class="swiper">
			<swiper-item v-for="(item, index) in goods_info.goods_pic" :key="index">
				<view class="swiper-item">
					<image class="swiper-image" mode="aspectFit" :src="item.image"></image>
				</view>
			</swiper-item>
		</swiper>

		<view class="goods">
			<view class="goods-name">{{ goods_info.goods_name }}</view>
			<view class="goods-hot">
				<view class="hot-item" v-for="(item, index) in goods_info.goods_hot" :key="index">{{ item }}</view>
			</view>
			<view class="goods-desc">{{ goods_info.goods_desc }}</view>

			<view class="goods-attr">
				<view class="attr-list" v-for="(item, index) in goods_info.goods_attr" :key="index">
					<view class="attr-title">{{ item.title }}<text class="attr-desc"
							v-if="item.desc">{{item.desc}}</text></view>
					<view class="attr-content">
						<view class="attr-item" v-for="(vv, kk) in item.attr" :key="kk"
							:class="[vv.status ? 'active' : '', vv.disable ? 'disable' : '']"
							@click="vv.disable ? '' : item.type !== 1 && vv.status ? '' : handleClickAttr(index, kk, item.type)">
							<template v-if="index !== 0 && kk === 0">
								<image v-if="vv.status" class="live-icon" :src="require('@/static/icon/live1.png')">
								</image>
								<image v-else class="live-icon" :src="require('@/static/icon/live.png')"></image>
							</template>
							{{ vv.desc }}
							<text class="price" v-if="vv.price">￥{{ vv.price }}</text>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="suspend-button">
			<view class="suspend-content">
				<view class="all-price">￥{{ all_price }}</view>
				<view class="all-attr">
					<view class="all-attr-left">{{ select_txt }}</view>
					<view class="all-attr-right">
						<view class="round" @click="handleSetNum(0)">
							<image class="add-icon" :src="require('@/static/icon/add3.png')"></image>
						</view>
						<view class="txt">{{ goods_num }}</view>
						<view class="round add" @click="handleSetNum(1)">
							<image class="add-icon" :src="require('@/static/icon/add2.png')"></image>
						</view>
					</view>
				</view>
				<view class="all-btn">加入购物车</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goods_num: 1,
				goods_info: {
					id: 1,
					goods_name: '霸气芝士草莓',
					goods_price: '28.00',
					goods_hot: ['人气爆品', '可做热饮', '用料丰富'],
					goods_desc: '【650ml】 经典人气产品。酸甜草莓，四季出品。搭配金奖茉莉初雪，淋上轻盈香滑的芝士奶糖。喝上一口，酸甜鲜爽，满满的幸福感！',
					goods_pic: [{
						image: 'https://img9.51tietu.net/pic/2019-091200/vgkpidei2tjvgkpidei2tj.jpg'
					}],
					goods_attr: [{
							title: '加料',
							type: 1, // 多选
							attr: [{
								id: 1,
								desc: '0卡糖 (0卡0脂肪)',
								price: '1.00',
								status: true,
								disable: false,
							}, {
								id: 2,
								desc: '燃爆菌',
								price: '4.00',
								status: false,
								disable: true,
							}, {
								id: 3,
								desc: 'Q弹脆珠珠',
								price: '3.00',
								status: false,
								disable: false,
							}],
						},
						{
							title: '糖度',
							desc: '(茶饮含糖量较低，推荐标准做法更好喝)',
							type: 0, // 单选
							attr: [{
								id: 1,
								desc: '标准甜 (推荐)',
								status: true,
								disable: false,
							}, {
								id: 2,
								desc: '少甜',
								status: false,
								disable: false,
							}, {
								id: 3,
								desc: '少少甜',
								status: false,
								disable: false,
							}, {
								id: 4,
								desc: '不另外加糖',
								status: false,
								disable: false,
							}],
						}, {
							title: '茶底',
							type: 0, // 单选
							attr: [{
								id: 1,
								desc: '金观音 (果香味)',
								status: true,
								disable: false,
							}, {
								id: 2,
								desc: '初露 (茶香味)',
								status: false,
								disable: false,
							}, {
								id: 3,
								desc: '去茶底',
								status: false,
								disable: false,
							}],
						}, {
							title: '温度',
							type: 0, // 单选
							attr: [{
								id: 1,
								desc: '标准冰 (冰沙)',
								status: true,
								disable: false,
							}],
						},
						{
							title: '环保',
							type: 0, // 单选
							attr: [{
								id: 1,
								desc: 'PLA可降解吸管',
								status: true,
								disable: false,
							}, {
								id: 2,
								desc: '可降解吸管',
								status: false,
								disable: false,
							}, {
								id: 3,
								desc: '不使用吸管',
								status: false,
								disable: false,
							}],
						}
					]
				}
			}
		},
		computed: {
			select_txt() {
				let txt = ''
				this.goods_info.goods_attr.map((item, index) => {
					item.attr.map((vv, kk) => {
						vv.status ? txt += vv.desc + '/' : ''
					})
				})
				return txt.substr(0, txt.length - 1)
			},
			all_price() {
				let allPrice = 0
				this.goods_info.goods_attr.map((item, index) => {
					if (item.type === 1) {
						item.attr.map((vv, kk) => {
							vv.status ? allPrice += parseInt(vv.price) : ''
						})
					}
				})
				allPrice += parseInt(this.goods_info.goods_price)
				allPrice = allPrice * this.goods_num
				return allPrice.toFixed(2)
			}
		},
		methods: {
			// 选择商品规格
			handleClickAttr(index, kk, type) {
				if (type === 1) {
					this.goods_info.goods_attr[index].attr[kk].status = !this.goods_info.goods_attr[index].attr[kk].status
				} else {
					this.goods_info.goods_attr[index].attr.map((item, index) => {
						if (index === kk) {
							item.status = true
						} else {
							item.status = false
						}
					})
				}
			},
			// 增减商品数量
			handleSetNum(type) {
				if (type === 1) {
					this.goods_num += 1
				} else {
					if (this.goods_num > 1) {
						this.goods_num -= 1
					} else {
						this.goods_num = 1
					}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page-index {
		font-size: 24rpx;
		color: #242424;
		background-color: #FFFFFF;

		.swiper {
			width: 100%;
			height: 550rpx;

			.swiper-item {
				width: 100%;
				height: 550rpx;
				display: flex;
				align-items: center;
				justify-content: center;

				.swiper-image {
					width: 100%;
					height: 550rpx;
				}
			}
		}

		.goods {
			height: calc(100vh - 860rpx);
			padding: 10rpx 20rpx 20rpx;
			overflow-y: auto;

			&-name {
				width: 100%;
				height: 50rpx;
				font-size: 28rpx;
				font-weight: bold;
				color: #242524;
				line-height: 50rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			&-hot {
				width: 100%;
				height: auto;
				padding: 10rpx 0 0;
				display: flex;
				flex-wrap: wrap;
				align-items: center;

				.hot-item {
					display: flex;
					align-items: center;
					justify-content: center;
					border-radius: 4rpx;
					padding: 5rpx 10rpx;
					font-size: 22rpx;
					color: #eea2b1;
					background-color: #f9f3f3;
					margin-right: 15rpx;
					margin-bottom: 10rpx;
				}
			}

			&-desc {
				width: 100%;
				height: auto;
				padding: 10rpx 0;
				font-size: 24rpx;
				color: #707274;
				margin-bottom: 20rpx;
			}

			&-attr {
				width: 100%;
				height: auto;

				.attr-list {
					width: 100%;
					height: auto;

					.attr-title {
						width: 100%;
						height: 50rpx;
						line-height: 50rpx;
						font-size: 24rpx;
						color: #242524;
						margin-bottom: 10rpx;

						.attr-desc {
							margin-left: 20rpx;
							color: #a0a4a6;
						}
					}

					.attr-content {
						width: 100%;
						display: flex;
						align-items: center;
						flex-wrap: wrap;

						.attr-item {
							display: flex;
							align-items: center;
							justify-content: center;
							padding: 15rpx 20rpx;
							border-radius: 10rpx;
							border: 2rpx solid #e2e4e6;
							background-color: #FFFFFF;
							margin-right: 20rpx;
							margin-bottom: 20rpx;
							font-size: 22rpx;
							color: #707274;

							.live-icon {
								width: 25rpx;
								height: 25rpx;
								margin-right: 10rpx;
							}

							.price {
								margin-left: 10rpx;
							}
						}

						.active {
							border: 2rpx solid #b0d342;
							background-color: #f4f7e5;
							color: #242524;
						}

						.disable {
							color: #cdced0;
						}
					}
				}
			}
		}

		.suspend-button {
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 244rpx;
			padding: 20rpx 0;
			background-color: #FFFFFF;
			box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);

			.suspend-content {
				height: 100%;
				margin: 0 20rpx;

				.all-price {
					width: 100%;
					height: 60rpx;
					line-height: 60rpx;
					font-size: 32rpx;
					font-weight: bold;
					color: #242524;
				}

				.all-attr {
					width: 100%;
					height: 82rpx;
					background-color: #FFFFFF;
					margin-bottom: 20rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;

					.all-attr-left {
						width: 70%;
						height: 82rpx;
						color: #707274;
						font-size: 20rpx;
						line-height: 40rpx;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						overflow: hidden;
					}

					.all-attr-right {
						width: 30%;
						height: 82rpx;
						display: flex;
						align-items: center;
						justify-content: flex-end;

						.round {
							width: 40rpx;
							height: 40rpx;
							border-radius: 50rpx;
							border: 2rpx solid #b3b7b9;
							display: flex;
							align-items: center;
							justify-content: center;

							.add-icon {
								width: 20rpx;
								height: 20rpx;
							}
						}

						.add {
							border: none;
							width: 42rpx;
							height: 42rpx;
							background-color: #b0d342;
						}

						.txt {
							color: #484b4d;
							font-size: 32rpx;
							margin: 0 25rpx;
						}
					}
				}

				.all-btn {
					width: 100%;
					height: 80rpx;
					line-height: 80rpx;
					text-align: center;
					border-radius: 50rpx;
					background-color: #b0d342;
					font-size: 26rpx;
					color: #242524;
				}
			}
		}
	}
</style>
