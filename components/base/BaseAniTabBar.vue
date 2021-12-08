<template>
	<!-- 吸顶效果 -->
	<view class="sticky-box">
		<!-- 滑动区域 -->
		<scroll-view class="scroll-view_H" style="width: 100%;" scroll-x="true" scroll-with-animation
			:scroll-left="tabsScrollLeft" @scroll="scroll">
			<view class="tab" id="tab_list">
				<!-- 标题区域 -->
				<view id="tab_item" :class="{'tab__item': true}" :style="{color: listActive === index ? active : ''}"
					v-for="(item, index) in listArr" :key="index" @click="clickSort(index)">
					{{item}}
				</view>
				<!-- 标题区域 -->
			</view>
			<!-- tabs下划线 -->
			<view class="tab__line"
				:style="{background: active, width: lineStyle.width, transform: lineStyle.transform,transitionDuration: lineStyle.transitionDuration}">
			</view>
			<!-- tabs下划线 -->
		</scroll-view>
		<!-- 滑动区域 -->
	</view>
	<!-- 吸顶效果 -->
</template>

<script>
	export default {
		props: {
			// 导航列表 ['全部', '列表']
			listArr: {
				type: Array,
				default: () => []
			},
			// 下划线/文字 选中颜色
			active: {
				type: String,
				default: '#b0d342'
			},
			// 默认选中索引  不自定义索引则屏蔽
			listActive: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				tabsScrollLeft: 0, // tabs当前偏移量
				scrollLeft: 0, // 滑动距离左侧距离
				lineStyle: {
					width: 0,
				}, // 下划线位置--动态甲酸
				duration: 0.2, // 下划线动画时长
				// listActive: 0, // 默认索引
			}
		},
		watch: {
			listActive(newVal) { // 监听当前选中项
				this.setTabList()
			}
		},
		mounted() {
			this.setTabList()
		},
		methods: {
			// 点击导航条切换
			clickSort(index) {
				// 屏幕回到顶部
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				})

				// 不自定义索引则打开
				// this.listActive = index
				// this.$emit('handleActive', this.listActive)

				// 自定义索引则打开
				this.$emit('handleActive', index) // 自定义默认选中的索引
			},
			// scroll-view滑动事件
			scroll(e) {
				this.scrollLeft = e.detail.scrollLeft;
			},
			setTabList() {
				this.$nextTick(() => {
					this.setLine()
					this.scrollIntoView()
				})
			},
			// 计算tabs位置  item滚动
			scrollIntoView() {
				let lineLeft = 0;
				this.getElementData('#tab_list', (data) => {
					let list = data[0]
					this.getElementData(`#tab_item`, (data) => {
						let el = data[this.listActive]
						lineLeft = el.width / 2 + (-list.left) + el.left - list.width / 2 - this.scrollLeft
						this.tabsScrollLeft = this.scrollLeft + lineLeft
					})
				})
			},
			//  计算下划线位置
			setLine() {
				let lineWidth = 0,
					lineLeft = 0
				this.getElementData(`#tab_item`, (data) => {
					let el = data[this.listActive]
					lineWidth = el.width / 2
					// lineLeft = el.width * (this.currentIndex + 0.5)  // 此种只能针对每个item长度一致的
					lineLeft = el.width / 2 + (-data[0].left) + el.left
					this.lineStyle = {
						width: `${lineWidth}px`,
						transform: `translateX(${lineLeft}px) translateX(-50%)`,
						transitionDuration: `${this.duration}s`
					};
				})
			},
			getElementData(el, callback) {
				uni.createSelectorQuery().in(this).selectAll(el).boundingClientRect().exec((data) => {
					callback(data[0]);
				});
			},
		},
	}
</script>

<style lang="scss" scoped>
	.sticky-box {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: space-between;
		// position: -webkit-sticky;
		/* #endif */
		// position: sticky;
		position: fixed;
		top: var(--window-top);
		z-index: 9999;
		flex-direction: row;
		margin: 0;
		background-color: #f3f4f4;
		height: 110rpx;
	}

	.listAll {
		width: 20%;
		text-indent: 62rpx;
		font-size: 30rpx;
		border-left: 1px #eee solid;
		margin: 1% 0;
		padding: 5rpx;
		position: relative;

		image {
			position: absolute;
			left: 20rpx;
			top: 8rpx;
		}
	}

	.tab {
		position: relative;
		display: flex;
		font-size: 28rpx;
		padding-bottom: 10rpx;
		white-space: nowrap;

		&__item {
			flex: 1;
			padding: 0 20rpx;
			text-align: center;
			height: 60rpx;
			line-height: 60rpx;
			color: #6f7274;
			font-size: 30rpx;

			&.active {
				color: #09C2C9;
			}
		}
	}

	.tab__line {
		display: block;
		height: 6rpx;
		bottom: 0;
		left: 0;
		z-index: 1;
		border-radius: 3rpx;
		position: relative;
		background: #2FC6CD;
	}

	.scroll-view_H {
		/* 文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。 */
		white-space: nowrap;
		width: 100%;
	}
</style>
