<template>
	<view class="page-index" @touchmove.stop.prevent>
		<view class="page-search">
			<view class="block">
				<image class="icon-cup" :src="require('@/static/appicon/cup.png')"></image>
				一起喝
			</view>
			<view class="input">
				<image class="icon-search" :src="require('@/static/icon/search.png')"></image>
				搜索商品
			</view>
			<view class="hidden"></view>
		</view>

		<view class="page-distance">
			<view class="distance-left">
				<view class="address">
					你的眼里有星星
					<image class="icon-right" :src="require('@/static/icon/right_arrow.png')"></image>
				</view>
				<view class="distance">距离您2.7km</view>
			</view>
			<view class="distance-right">
				<view class="switch-item">
					<view class="switch" :class="take_type === 1 ? 'active' : ''" @click="handleTake(1)">自取</view>
					<view class="switch" :class="take_type === 2 ? 'active' : ''" @click="handleTake(2)">外卖</view>
				</view>
			</view>
		</view>

		<view class="page-rules">
			<view class="rules-left">
				<swiper class="notice-item" autoplay vertical circular :interval="10000">
					<swiper-item v-for="(item, index) in notice_list" :key="index">
						<view class="notice-item align-center" @click="handleNotice(item, index)">
							<image class="notice-icon" :src="item.icon"></image>
							<view class="notice-txt">{{ item.text }}</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
			<view class="rules-right" @click.stop="handleShowMore()">
				查看更多<image class="icon-under" :src="require('@/static/icon/under_arrow.png')"></image>
			</view>
		</view>

		<view v-if="rules_show" class="rules-box-show" :class="rules_box ? '' : 'rules-car-show'">
			<view :class="{'rules-box': rulesState}" @click.stop="handleHiddenMore()"></view>
			<view class="rules-item" :class="{'rules-show': rulesState}">
				<view class="rules-more">
					<view class="notice-item" v-for="(item, index) in notice_list" :key="index">
						<image class="notice-icon" :src="item.icon"></image>
						<view class="notice-txt">{{ item.text }}</view>
						<view class="see-txt">查看详情</view>
					</view>
					<view class="see-title">
						查看食品安全信息<image class="right-icon-txt" :src="require('@/static/icon/right_arrow.png')"></image>
					</view>
					<view class="shop-title">门店信息</view>
					<view class="desc-txt">地址：河南省商丘市民权县江山盛世名门二期东门</view>
					<view class="desc-txt">门店电话：18736805971</view>
					<view class="desc-txt">外卖电话：18736805971</view>
					<view class="desc-txt">营业时间：{{ business_time }}</view>
					<view class="pack-up" @click.stop="handleHiddenMore()">收起<image class="pack-up-icon"
							:src="require('@/static/icon/top_arrow.png')"></image>
					</view>
				</view>
			</view>
		</view>

		<view class="page-list" :class="shop_car.length === 0 ? 'page-shop-show' : ''">
			<view class="page-list-left">
				<scroll-view scroll-y="true" class="list-scroll">
					<view class="scroll-item" :class="class_id === item.id ? 'active' : ''"
						v-for="(item, index) in class_list" :key="index" @click="handleClassSet(item.id)">
						<text class="scroll-item-txt">{{ item.title }}</text>
						<view class="item-hot" v-if="item.hot_txt">{{ item.hot_txt }}</view>
					</view>
				</scroll-view>
			</view>
			<view class="page-list-right">
				<scroll-view scroll-y="true" class="list-scroll" :class="shop_car.length === 0 ? 'list-shop-show' : ''">
					<swiper class="swiper" indicator-dots indicator-color="rgba(0, 0, 0, 0.3)"
						indicator-active-color="rgba(0, 0, 0, 0.6)" autoplay>
						<swiper-item v-for="(item, index) in cover_list" :key="index">
							<view class="swiper-item">
								<image class="swiper-item" mode="scaleToFill" :src="item.pic"></image>
							</view>
						</swiper-item>
					</swiper>

					<view class="goods-info">
						<view class="class-title">当季限定</view>
						<view class="goods-item" v-for="(item, index) in goods_list" :key="index"
							@click.stop="handleJump({type: '../goods/details'})">
							<view class="goods-item-left">
								<image class="goods-item-left" mode="aspectFit" :src="item.goods_pic[0].image"></image>
							</view>
							<view class="goods-item-right">
								<view class="goods-name">{{ item.goods_name }}</view>
								<view class="goods-attr">
									<view class="hot-item" :class="kk % 2 === 0 ? 'hot-active' : ''"
										v-for="(vv, kk) in item.goods_hot" :key="kk">{{ vv }}</view>
								</view>
								<view class="goods-desc">{{ item.goods_desc }}</view>
								<view class="goods-price">
									<view class="price">￥{{ item.goods_price }}</view>
									<template v-if="item.space === 1">
										<view class="select-space" @click.stop="handleJump({type: '../goods/details'})">
											选规格</view>
									</template>
									<template v-else>
										<view class="shop-add">
											<template v-if="item.goods_num !== 0">
												<view class="round" @click.stop="handleGoodsSetNum(0, index)">
													<image class="add-icon" :src="require('@/static/icon/add3.png')">
													</image>
												</view>
												<view class="txt">{{ item.goods_num }}</view>
											</template>
											<view class="round add" @click.stop="handleGoodsSetNum(1, index)">
												<image class="add-icon" :src="require('@/static/icon/add2.png')">
												</image>
											</view>
										</view>
									</template>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>

		<view class="page-shop" v-if="shop_car.length !== 0">
			<view class="shop-car" @click.stop="handleShowBounced()">
				<image class="car-icon" :src="require('@/static/appicon/shop_car.png')"></image>
			</view>
			<view class="shop-car-num">{{ shop_car.length }}</view>
			<view class="shop-car-price">￥{{ all_price }}</view>
			<view class="shop-car-btn">选好了</view>
		</view>

		<!-- 购物车弹框 -->
		<view class="bounced" :class="bounced_show ? '' : 'bounced-car-show'">
			<!-- 遮罩层 -->
			<view :class="{'bounced-box': modalState}" @click.stop="handleHiddenModal()"></view>
			<!-- 遮罩层 -->
			<view class="bounced-item" :class="{'bounced-show': modalState}">
				<view class="shop-car-list">
					<view class="car-del" @click="handleEmpty()">
						<image class="del-icon" :src="require('@/static/icon/del.png')"></image>清空
					</view>
					<scroll-view scroll-y="true" class="car-list-scroll">
						<view class="car-list-item" v-for="(item ,index) in shop_car" :key="index">
							<view class="car-left">
								<image class="car-left-image" mode="aspectFit" :src="item.goods_pic[0].image">
								</image>
							</view>
							<view class="car-right">
								<view class="car-right-name">{{ item.goods_name }}</view>
								<view class="car-right-desc">{{ item.goods_desc }}</view>
								<view class="car-right-number">
									<view class="shop-price">￥{{ item.goods_price }}</view>
									<view class="shop-add">
										<view class="round" @click="handleShopSetNum(0, index)">
											<image class="add-icon" :src="require('@/static/icon/add3.png')"></image>
										</view>
										<view class="txt">{{ item.goods_num }}</view>
										<view class="round add" @click="handleShopSetNum(1, index)">
											<image class="add-icon" :src="require('@/static/icon/add2.png')"></image>
										</view>
									</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>
		</view>
		<!-- 购物车弹框 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				rules_show: false, // 查看更多
				rules_box: false, // 显示查看更多
				rulesState: false, // 弹框内容
				take_type: 1, // 1自取 2外卖
				notice_list: [{
					id: 1,
					icon: require('@/static/appicon/about.png'),
					text: '冬日限定：储值300元，立赠1杯',
				}, {
					id: 2,
					icon: require('@/static/appicon/app.png'),
					text: '共同防疫·免配送费',
				}], // 轮播公告
				business_status: 0, // 是否营业
				business_time: '10:00-22:00', // 营业时间
				goods_list: [{
					id: 1,
					goods_name: '霸气车厘子',
					goods_desc: '【650ml】 经典人气产品。酸甜草莓，四季出品。搭配金奖茉莉初雪，淋上轻盈香滑的芝士奶糖。喝上一口，酸甜鲜爽，满满的幸福感！',
					goods_hot: ['满满车厘子果肉', '浓郁清香环绕'],
					goods_pic: [{
						image: require('@/static/appicon/about.png')
					}],
					goods_price: '36.00',
					goods_num: 1, // 数量为0 则从购物车删除
					space: 1, // 是否有规格 1 有 0 没有
				}, {
					id: 2,
					goods_name: '草莓魔法棒',
					goods_desc: '【约310ml】 淋上轻盈香滑的芝士奶糖。喝上一口，酸甜鲜爽，满满的幸福感！',
					goods_hot: ['人气爆品'],
					goods_pic: [{
						image: require('@/static/appicon/gift.png')
					}],
					goods_price: '20.00',
					goods_num: 0, // 数量为0 则从购物车删除
					space: 0, // 是否有规格 1 有 0 没有
				}, {
					id: 3,
					goods_name: '芝士山楂草莓',
					goods_desc: '【500ml】 酸甜草莓，酸甜鲜爽，满满的幸福感！',
					goods_hot: ['标准版本', '酸甜清爽'],
					goods_pic: [{
						image: require('@/static/appicon/edit.png')
					}],
					goods_price: '27.00',
					goods_num: 1, // 数量为0 则从购物车删除
					space: 1, // 是否有规格 1 有 0 没有
				}, {
					id: 4,
					goods_name: '霸气燃爆橙子',
					goods_desc: '【650ml】 VC与益生菌的组合，绝佳好CP！在霸气橙子加柠檬片的基础上加入益生菌株。',
					goods_hot: ['益生菌'],
					goods_pic: [{
						image: require('@/static/appicon/image.png')
					}],
					goods_price: '25.00',
					goods_num: 1, // 数量为0 则从购物车删除
					space: 1, // 是否有规格 1 有 0 没有
				}, {
					id: 5,
					goods_name: '霸气西柚',
					goods_desc: '【冷饮650ml 热饮500ml】 优良培育的西柚与金奖茉莉初雪的奇妙碰撞',
					goods_hot: ['经典产品', '可做热饮'],
					goods_pic: [{
						image: require('@/static/appicon/exchange.png')
					}],
					goods_price: '22.00',
					goods_num: 0, // 数量为0 则从购物车删除
					space: 0, // 是否有规格 1 有 0 没有
				}, {
					id: 6,
					goods_name: '霸气芝士葡萄',
					goods_desc: '【650ml】 满满的葡萄肉感！选用当季巨峰葡萄，手工去皮去籽保留大颗果肉',
					goods_hot: ['人气爆品'],
					goods_pic: [{
						image: require('@/static/appicon/price.png')
					}],
					goods_price: '28.00',
					goods_num: 1, // 数量为0 则从购物车删除
					space: 1, // 是否有规格 1 有 0 没有
				}, {
					id: 7,
					goods_name: '霸气芝士芒果',
					goods_desc: '【650ml】 优选大台芒制成绵密冰沙，每一口都香滑。',
					goods_hot: ['经典产品'],
					goods_pic: [{
						image: require('@/static/appicon/mine.png')
					}],
					goods_price: '27.00',
					goods_num: 0, // 数量为0 则从购物车删除
					space: 0, // 是否有规格 1 有 0 没有
				}], // 商品列表
				shop_car: [{
					id: 1,
					goods_name: '霸气车厘子',
					goods_desc: '【650ml】 经典人气产品。酸甜草莓，四季出品。搭配金奖茉莉初雪，淋上轻盈香滑的芝士奶糖。喝上一口，酸甜鲜爽，满满的幸福感！',
					goods_hot: ['满满车厘子果肉', '浓郁清香环绕'],
					goods_pic: [{
						image: require('@/static/appicon/about.png')
					}],
					goods_price: '36.00',
					goods_num: 1, // 数量为0 则从购物车删除
				}, {
					id: 2,
					goods_name: '草莓魔法棒',
					goods_desc: '【约310ml】 淋上轻盈香滑的芝士奶糖。喝上一口，酸甜鲜爽，满满的幸福感！',
					goods_hot: ['人气爆品'],
					goods_pic: [{
						image: require('@/static/appicon/gift.png')
					}],
					goods_price: '20.00',
					goods_num: 1, // 数量为0 则从购物车删除
				}, {
					id: 3,
					goods_name: '芝士山楂草莓',
					goods_desc: '【500ml】 酸甜草莓，酸甜鲜爽，满满的幸福感！',
					goods_hot: ['标准版本', '酸甜清爽'],
					goods_pic: [{
						image: require('@/static/appicon/edit.png')
					}],
					goods_price: '27.00',
					goods_num: 1, // 数量为0 则从购物车删除
				}, {
					id: 4,
					goods_name: '霸气燃爆橙子',
					goods_desc: '【650ml】 VC与益生菌的组合，绝佳好CP！在霸气橙子加柠檬片的基础上加入益生菌株。',
					goods_hot: ['益生菌'],
					goods_pic: [{
						image: require('@/static/appicon/image.png')
					}],
					goods_price: '25.00',
					goods_num: 1, // 数量为0 则从购物车删除
				}, {
					id: 5,
					goods_name: '霸气西柚',
					goods_desc: '【冷饮650ml 热饮500ml】 优良培育的西柚与金奖茉莉初雪的奇妙碰撞',
					goods_hot: ['经典产品', '可做热饮'],
					goods_pic: [{
						image: require('@/static/appicon/exchange.png')
					}],
					goods_price: '22.00',
					goods_num: 1, // 数量为0 则从购物车删除
				}], // 加入购物车
				class_id: 1, // 选中分类id
				class_list: [{
						id: 1,
						title: '神里绫华',
						hot_txt: '新品',
					},
					{
						id: 2,
						title: '摩拉克斯',
						hot_txt: 'HOT',
					},
					{
						id: 3,
						title: '早柚',
					},
					{
						id: 4,
						title: '宵宫',
					},
					{
						id: 5,
						title: '优菈',
					},
					{
						id: 6,
						title: '琴',
					},
					{
						id: 7,
						title: '迪奥娜',
					},
					{
						id: 8,
						title: '胡桃',
					},
					{
						id: 9,
						title: '枫原万叶',
					},
					{
						id: 10,
						title: '荒泷一斗',
					},
					{
						id: 11,
						title: '雷电将军',
					},
					{
						id: 12,
						title: '甘雨',
					},
					{
						id: 13,
						title: '宵',
					}
				], // 商品分类
				cover_list: [{
					id: 1,
					pic: 'https://img9.51tietu.net/pic/2019-091200/vgkpidei2tjvgkpidei2tj.jpg',
				}, {
					id: 2,
					pic: 'https://img9.51tietu.net/pic/2019-091200/euzekmi5m23euzekmi5m23.jpg',
				}, {
					id: 3,
					pic: 'https://img9.51tietu.net/pic/2019-091200/143tt0ta4sr143tt0ta4sr.jpg',
				}, {
					id: 4,
					pic: 'https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg',
				}], // 轮播封面图
				bounced_show: false, // 显示弹框
				modalState: false, // 弹框内容
			}
		},
		computed: {
			all_price() {
				let allPrice = 0
				this.shop_car.map((item, index) => {
					allPrice += parseInt(item.goods_price) * Number(item.goods_num)
				})
				return allPrice.toFixed(2)
			}
		},
		methods: {
			// 点击配送状态
			handleTake(type) {
				this.take_type = type
			},
			// 点击公告
			handleNotice(item) {},
			// 点击分类
			handleClassSet(id) {
				this.class_id = id
			},
			// 点击显示查看更多
			handleShowMore() {
				this.rules_show = !this.rules_show
				this.rules_box = !this.rules_box
				this.rulesState = !this.rulesState
			},
			// 隐藏查看更多弹框
			handleHiddenMore() {
				this.rules_show = false
				this.rulesState = false
				this.rules_box = false
			},
			// 点击显示购物车列表
			handleShowBounced() {
				this.bounced_show = !this.bounced_show
				this.modalState = !this.modalState
			},
			// 隐藏弹框
			handleHiddenModal() {
				this.modalState = false
				this.bounced_show = false
			},
			// 清空购物车
			handleEmpty() {
				let that = this
				uni.showModal({
					title: '提示',
					content: '确定清空购物车吗',
					confirmColor: '#b0d342',
					success: function(res) {
						if (res.confirm) {
							uni.showLoading({
								title: '加载中'
							});
							setTimeout(function() {
								uni.hideLoading();
								that.handleHiddenModal()
								that.shop_car = []
							}, 500);
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			// 商品列表 商品数量修改
			handleGoodsSetNum(type, index) {
				if (type === 1) {
					this.goods_list[index].goods_num += 1
				} else {
					if (this.goods_list[index].goods_num > 1) {
						this.goods_list[index].goods_num -= 1
					} else {
						this.goods_list[index].goods_num = 0
					}
				}
			},
			// 购物车列表 商品数量修改
			handleShopSetNum(type, index) {
				if (type === 1) {
					this.shop_car[index].goods_num += 1
				} else {
					if (this.shop_car[index].goods_num > 1) {
						this.shop_car[index].goods_num -= 1
					} else {
						if (this.shop_car.length === 1) {
							let that = this
							uni.showLoading({
								title: '加载中'
							});
							setTimeout(function() {
								uni.hideLoading();
								that.handleHiddenModal()
								that.shop_car = []
							}, 500);
						} else {
							this.shop_car.splice(index, 1)
						}
					}
				}
			},
			// 页面跳转
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
		position: relative;
		padding-top: 98rpx;
		font-size: 24rpx;
		color: #242424;
		background-color: #FFFFFF;

		.align-center {
			display: flex;
			align-items: center;
		}

		.page-search {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 15rpx;
			height: 60rpx;

			.block {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 166rpx;
				height: 56rpx;
				font-size: 26rpx;
				color: #242524;
				border: 2rpx solid #e3e5e7;
				border-radius: 50rpx;

				.icon-cup {
					width: 35rpx;
					height: 35rpx;
					margin-right: 15rpx;
				}
			}

			.input {
				width: 280rpx;
				height: 60rpx;
				border-radius: 50rpx;
				background-color: #f9f9f9;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #a0a4a6;
				font-size: 26rpx;

				.icon-search {
					width: 35rpx;
					height: 35rpx;
					margin-right: 10rpx;
				}
			}

			.hidden {
				width: 170rpx;
				height: 60rpx;
			}
		}

		.page-distance {
			margin-top: 20rpx;
			margin-bottom: 10rpx;
			height: 95rpx;
			padding: 0 30rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.distance-left {
				width: 70%;
				height: 95rpx;
				display: flex;
				align-items: center;
				flex-wrap: wrap;

				.address {
					width: 100%;
					height: 55rpx;
					display: flex;
					align-items: center;
					font-size: 30rpx;
					font-weight: bold;
					color: #242524;

					.icon-right {
						margin-left: 10rpx;
						width: 20rpx;
						height: 20rpx;
					}
				}

				.distance {
					width: 100%;
					height: 40rpx;
					line-height: 40rpx;
					font-size: 24rpx;
					color: #a4a7aa;
				}
			}

			.distance-right {
				width: 30%;
				height: 95rpx;
				display: flex;
				align-items: center;
				justify-content: flex-end;
				overflow: hidden;

				.switch-item {
					height: 60rpx;
					width: 180rpx;
					padding: 1rpx 4rpx;
					border-radius: 50rpx;
					background-color: #f5f5f5;
					display: flex;
					align-items: center;
					justify-content: space-between;

					.switch {
						height: 54rpx;
						width: 90rpx;
						font-size: 24rpx;
						color: #676a69;
						display: flex;
						align-items: center;
						justify-content: center;
					}

					.active {
						color: #FFFFFF;
						border-radius: 50rpx;
						background-color: #242524;
					}
				}
			}
		}

		.page-rules {
			width: 100%;
			height: 70rpx;
			margin-bottom: 4rpx;
			color: #5a5959;
			font-size: 24rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			z-index: 55;
			box-shadow: 0 10rpx 10rpx -10rpx rgba(0, 0, 0, 0.1);

			.rules-left {
				width: 70%;
				height: 70rpx;
				margin-left: 30rpx;

				.notice-item {
					width: 100%;
					height: 70rpx;

					.notice-icon {
						width: 40rpx;
						height: 40rpx;
						margin-right: 10rpx;
					}

					.notice-txt {
						width: 430rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
				}
			}

			.rules-right {
				width: 30%;
				height: 70rpx;
				display: flex;
				align-items: center;
				justify-content: flex-end;
				margin-right: 30rpx;

				.icon-under {
					margin-left: 10rpx;
					width: 25rpx;
					height: 25rpx;
				}
			}
		}

		.page-list {
			width: 100%;
			height: calc(100vh - 472rpx);
			display: flex;
			align-items: center;
			justify-content: space-between;

			&-left {
				width: 180rpx;
				height: 100%;
				background-color: #f5f5f5;

				.list-scroll {
					width: 180rpx;
					height: 100%;

					.scroll-item {
						position: relative;
						width: 180rpx;
						height: 100rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						font-size: 24rpx;
						color: #707274;

						.scroll-item-txt {
							width: 150rpx;
							height: 100rpx;
							text-align: center;
							line-height: 100rpx;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}

						.item-hot {
							position: absolute;
							top: 0;
							right: 0;
							color: #b0d342;
							font-size: 18rpx;
							padding: 2rpx 8rpx;
							font-weight: bold;
							display: flex;
							align-items: center;
							justify-content: center;
							background-color: #ecf1dd;
						}
					}

					.active {
						width: 170rpx;
						font-size: 24rpx;
						font-weight: bold;
						color: #242524;
						background-color: #FFFFFF;
						border-left: 10rpx solid #b0d342;
					}
				}
			}

			&-right {
				margin-top: 15rpx;
				width: 570rpx;
				height: auto;
				padding: 0 20rpx;
				background-color: #FFFFFF;

				.list-scroll {
					width: 100%;
					height: calc(100vh - 489rpx);

					.swiper {
						width: 100%;
						height: 300rpx;

						.swiper-item {
							width: 100%;
							height: 300rpx;
							border-radius: 4rpx;
						}
					}

					.goods-info {
						height: auto;

						.class-title {
							font-size: 26rpx;
							height: 60rpx;
							color: #242524;
							line-height: 60rpx;
						}

						.goods-item {
							height: auto;
							display: flex;
							align-items: flex-start;
							justify-content: space-between;
							margin-bottom: 10rpx;

							&-left {
								width: 140rpx;
								height: 150rpx;
							}

							&-right {
								width: 380rpx;
								height: auto;

								.goods-name {
									height: 55rpx;
									font-size: 28rpx;
									line-height: 55rpx;
									color: #242524;
									overflow: hidden;
									text-overflow: ellipsis;
									white-space: nowrap;
								}

								.goods-attr {
									height: auto;
									display: flex;
									flex-wrap: wrap;
									align-items: center;

									.hot-item {
										display: flex;
										align-items: center;
										justify-content: center;
										border-radius: 4rpx;
										padding: 4rpx 8rpx;
										font-size: 18rpx;
										color: #a0a4a6;
										background-color: #f7f7f7;
										margin-right: 10rpx;
										margin-bottom: 10rpx;
									}

									.hot-active {
										color: #eea2b1;
										background-color: #f9f3f3;
									}
								}

								.goods-desc {
									height: 36rpx;
									line-height: 36rpx;
									font-size: 20rpx;
									color: #a0a4a6;
									overflow: hidden;
									text-overflow: ellipsis;
									white-space: nowrap;
								}

								.goods-price {
									display: flex;
									align-items: center;
									justify-content: space-between;
									height: 60rpx;

									.price {
										font-size: 30rpx;
										font-weight: bold;
									}

									.select-space {
										width: 110rpx;
										height: 45rpx;
										font-size: 24rpx;
										color: #242524;
										line-height: 45rpx;
										text-align: center;
										border-radius: 50rpx;
										background-color: #b0d342;
									}

									.shop-add {
										width: auto;
										height: 60rpx;
										display: flex;
										align-items: center;
										justify-content: flex-end;

										.round {
											width: 36rpx;
											height: 36rpx;
											border-radius: 50rpx;
											border: 2rpx solid #b3b7b9;
											display: flex;
											align-items: center;
											justify-content: center;

											.add-icon {
												width: 18rpx;
												height: 18rpx;
											}
										}

										.add {
											border: none;
											width: 38rpx;
											height: 38rpx;
											background-color: #b0d342;
										}

										.txt {
											color: #484b4d;
											font-size: 30rpx;
											margin: 0 20rpx;
										}
									}
								}
							}
						}

						.goods-item:last-child {
							margin-bottom: 20rpx;
						}
					}
				}
			}
		}

		.page-shop-show {
			height: calc(100vh - 356rpx) !important;
		}

		.list-shop-show {
			height: calc(100vh - 373rpx) !important;
		}

		.list-show {
			margin-top: 70rpx;
		}

		.page-shop {
			position: relative;
			bottom: 0;
			width: 100%;
			height: 116rpx;
			box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);
			background-color: #FFFFFF;
			display: flex;
			align-items: center;
			justify-content: space-between;
			z-index: 100;

			.shop-car {
				position: absolute;
				top: -30rpx;
				left: 36rpx;
				width: 116rpx;
				height: 116rpx;
				background-color: #b0d342;
				border-radius: 50%;
				display: flex;
				align-items: center;
				justify-content: center;

				.car-icon {
					width: 70rpx;
					height: 70rpx;
				}
			}

			.shop-car-num {
				position: absolute;
				top: -30rpx;
				left: 130rpx;
				width: 36rpx;
				height: 36rpx;
				border-radius: 50%;
				color: #242524;
				line-height: 36rpx;
				text-align: center;
				font-size: 20rpx;
				background-color: #f7e965;
			}

			.shop-car-price {
				width: 75%;
				height: 116rpx;
				padding-left: 170rpx;
				color: #242524;
				font-size: 32rpx;
				font-weight: bold;
				line-height: 116rpx;
			}

			.shop-car-btn {
				width: 25%;
				height: 116rpx;
				font-size: 30rpx;
				line-height: 116rpx;
				text-align: center;
				color: #242524;
				background-color: #b0d342;
			}
		}

		.bounced {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: calc(100vh - 116rpx);
			z-index: 99;

			.bounced-box {
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
			.bounced-show {
				transition: all 0.5s ease;
				transform: translateY(0%) !important;
			}

			// 离开弹框动画
			.bounced-item {
				position: fixed;
				left: 0;
				bottom: 0;
				width: 100%;
				height: auto;
				transition: all 0.5s ease;
				transform: translateY(100%);
				z-index: 1999;
				background-color: #FFFFFF;
				border-top-left-radius: 20rpx;
				border-top-right-radius: 20rpx;
				overflow: hidden;
			}

			.shop-car-list {
				width: 100%;
				height: auto;
				margin-bottom: 116rpx;

				.car-del {
					display: flex;
					align-items: center;
					justify-content: flex-end;
					padding: 0 30rpx;
					height: 70rpx;
					color: #757679;
					font-size: 24rpx;
					background-color: #f9fafa;

					.del-icon {
						width: 25rpx;
						height: 25rpx;
						margin-right: 10rpx;
					}
				}

				.car-list-scroll {
					max-height: 830rpx;

					.car-list-item {
						width: 92%;
						margin: 0 auto;
						padding: 15rpx 0;
						height: auto;
						display: flex;
						align-items: flex-start;
						justify-content: space-between;
						border-bottom: 2rpx solid #f3f4f4;

						.car-left {
							width: 140rpx;
							height: 140rpx;

							&-image {
								width: 140rpx;
								height: 140rpx;
							}
						}

						.car-right {
							width: 540rpx;
							height: auto;

							&-name {
								width: 100%;
								height: 40rpx;
								font-size: 28rpx;
								color: #242524;
								font-weight: bold;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
							}

							&-desc {
								margin: 10rpx 0;
								width: 100%;
								height: auto;
								font-size: 20rpx;
								color: #b1b4b6;
							}

							&-number {
								width: 100%;
								height: 60rpx;
								display: flex;
								align-items: center;
								justify-content: space-between;

								.shop-price {
									color: #242524;
									font-size: 26rpx;
									font-weight: bold;
								}

								.shop-add {
									width: auto;
									height: 60rpx;
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
						}
					}

					.car-list-item:last-child {
						border-bottom: none;
					}
				}
			}
		}

		.bounced-car-show {
			transition: all 1s ease;
			z-index: -1000 !important;
		}

		.rules-box-show {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 101;

			.rules-box {
				width: 100%;
				height: 100%;
				position: fixed;
				top: 273rpx;
				left: 0;
				bottom: 0;
				right: 0;
				background-color: rgba(0, 0, 0, 0.4);
				transition: .5s;
				z-index: 999;
			}

			// 进入弹框动画
			.rules-show {
				transition: all 0.5s ease;
				transform: translateY(0%) !important;
			}

			// 离开弹框动画
			.rules-item {
				position: fixed;
				top: 273rpx;
				left: 0;
				width: 100%;
				height: auto;
				transition: all 0.5s ease;
				transform: translateY(100%);
				z-index: 1999;
				background-color: #FFFFFF;

				.rules-more {
					height: auto;
					padding: 20rpx 30rpx;

					.notice-item {
						width: 100%;
						min-height: 60rpx;
						display: flex;
						align-items: center;
						font-size: 24rpx;
						color: #5a5959;

						.notice-icon {
							width: 40rpx;
							height: 40rpx;
							margin-right: 10rpx;
						}

						.see-txt {
							margin-left: 30rpx;
							color: #b0d342;
						}
					}

					.see-title {
						height: 80rpx;
						display: flex;
						align-items: center;
						font-size: 28rpx;

						.right-icon-txt {
							width: 20rpx;
							height: 20rpx;
							margin-left: 10rpx;
						}
					}

					.shop-title {
						height: 60rpx;
						font-size: 28rpx;
						line-height: 60rpx;
					}

					.desc-txt {
						height: 40rpx;
						color: #707274;
						line-height: 40rpx;
						font-size: 22rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}

					.pack-up {
						height: 40rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						font-size: 24rpx;
						color: #626564;

						.pack-up-icon {
							width: 25rpx;
							height: 25rpx;
							margin-left: 5rpx;
						}
					}
				}
			}
		}

		.rules-car-show {
			transition: all 1s ease;
			z-index: -1000 !important;
		}
	}
</style>
