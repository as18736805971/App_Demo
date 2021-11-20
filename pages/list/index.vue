<template>
	<view class="page-index">
		<view class="title"></view>

		<view class="list">
			<scroll-view class="left-scroll-item" scroll-y>
				<view class="left-list-item" id="leftScroll" :class="activeIndex === index ? 'active' : ''"
					v-for="(item, index) in cate_list" :key="index" @click="changeCate(index)">{{item.name}}</view>
			</scroll-view>

			<scroll-view class="right-scroll-item" scroll-y scroll-with-animation :scroll-top="rightScrollTop"
				@scroll="onRightScroll">
				<view class="right-list-item" v-for="(item, index) in list" :key="index">
					<view class="title-content">{{ item.name }}</view>
					<view class="item">
						<view class="item-content" v-for="(item2, index2) in item.list" :key="index2">
							<image :src="item2.src" class="image"></image>
							<text class="name">{{ item2.name }}</text>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: 0, // 左边当前菜单项的索引
				cate_list: [], // 左边导航菜单
				list: [], // 右边商品列表
				leftDomsTop: [], // 左侧节点距离
				rightDomsTop: [], // 右侧节点距离
				rightScrollTop: 0, // 默认右侧列表距离顶部距离
				cateItemHeight: [],
				leftScrollTop: '',
			}
		},
		onLoad() {
			this.getData()
		},
		onReady() {
			// 获取左侧菜单及右侧列表 距离顶部的距离
			const query = uni.createSelectorQuery().in(this);
			query.selectAll('.left-list-item').boundingClientRect(data => {
				this.leftDomsTop = data.map(v => v.top - 55)
			}).exec();
			query.selectAll('.right-list-item').boundingClientRect(data => {
				this.rightDomsTop = data.map(v => v.top - 55)
			}).exec();

			query.selectAll('.left-list-item').fields({
				size: true, // 尺寸
				rect: true // 布局信息
			}, data => {
				this.cateItemHeight = data.map(v => {
					this.cateItemHeight = v.height
					return v.top
				})
			}).exec();
		},
		wacth: {
			activeIndex(newValue, oldValue) {
				// 获取左边scroll-view的高度，top值
				const query = uni.createSelectorQuery().in(this);
				query.selectAll('#leftScroll').fields({
					size: true,
					scrollOffset: true, // 滚动状态
				}, data => {
					let H = data.height
					let ST = data.scrollTop
					// 下边
					if ((this.leftDomsTop[newValue] + this.cateItemHeight) > (H + ST)) {
						return this.leftScrollTop = this.leftDomsTop[newValue] + this.cateItemHeight - H
					}
					// 上边
					if (ST > this.cateItemHeight) {
						this.leftScrollTop = this.leftDomsTop[newValue]
					}
				})
			}
		},
		methods: {
			// 初始化数据
			getData() {
				for (let i = 0; i < 20; i++) {
					this.cate_list.push({
						name: '测试分类' + i
					})
					this.list.push({
						name: `—— 产品分类${i} ——`,
						list: []
					})
				}

				for (let i = 0; i < this.list.length; i++) {
					for (let j = 0; j < 8; j++) {
						this.list[i].list.push({
							src: require('@/static/appicon/app.png'),
							name: `商品${j}`
						})
					}
				}
			},
			// 点击左边导航栏
			changeCate(index) {
				this.activeIndex = index

				// 右边scroll-view滚动到对应区块
				this.rightScrollTop = this.rightDomsTop[index]
				this.$forceUpdate()
			},
			// 监听右边滚动事件
			onRightScroll(e) {
				// 匹配当前scrollTop所处的索引
				this.rightDomsTop.forEach((v, k) => {
					if (v < e.detail.scrollTop + 3) {
						this.activeIndex = k
						return false
					}
				})
			},
		}
	}
</script>

<style lang="scss">
	.page-index {
		width: 100%;
		min-height: 100vh;

		.title {
			width: 100%;
			height: 100rpx;
			background-color: #007AFF;
		}

		.list {
			width: 100%;
			height: calc(100vh - var(--status-bar-height) - 38rpx);
			display: flex;

			.left-scroll-item {
				width: 20%;
				height: 100%;
				background-color: #FFFFFF;

				.left-list-item {
					width: 100%;
					height: 60rpx;
					padding-left: 10rpx;
					line-height: 60rpx;
					font-size: 24rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}

				.active {
					color: #007AFF;
				}
			}

			.right-scroll-item {
				width: 80%;
				height: 100%;
				background-color: #FFFFFF;
				border-left: 2rpx solid #C0C0C0;
				padding-left: 35rpx;

				.right-list-item {
					width: 100%;

					.title-content {
						width: 100%;
						height: 80rpx;
						text-align: center;
						font-size: 28rpx;
						line-height: 80rpx;
					}

					.item {
						width: 100%;
						display: flex;
						flex-wrap: wrap;
					}

					.item-content {
						display: flex;
						flex-direction: column;
						margin-right: 20rpx;
						margin-bottom: 20rpx;

						.image {
							width: 120rpx;
							height: 120rpx;
						}

						.name {
							width: 120rpx;
							height: 30rpx;
							text-align: center;
							font-size: 24rpx;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
					}
				}
			}
		}
	}
</style>
