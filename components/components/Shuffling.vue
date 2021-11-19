<template>
	<view class="shuffling">
		<swiper class="image-container" :indicator-dots="indicator.style === 'style1' ? true : false"
			:indicator-color="indicator.color" :indicator-active-color="indicator.active_color" previous-margin="45rpx"
			next-margin="45rpx" circular autoplay @change="swiperChange">
			<swiper-item :class="currentIndex == index ? 'swiper-item' : 'swiper-item-side'"
				v-for="(item, index) in imgList" :key="item[urlKey]">
				<image @click="clickImg(item)" :class="currentIndex == index ? 'item-img' : 'item-img-side'"
					:src="item[urlKey]" lazy-load :style="dontFirstAnimation ? 'animation: none;' : ''"
					mode="aspectFill">
				</image>
			</swiper-item>
		</swiper>

		<!-- 轮播图指示点 -->
		<template v-if="indicator.style === 'style2'">
			<view class="indicates">
				<view class="point">
					{{currentIndex + 1}}/{{imgList.length}}
				</view>
			</view>
		</template>
		<!-- 轮播图指示点 -->
	</view>
</template>

<script>
	export default {
		props: {
			// 图片数据
			imgList: {
				type: Array,
				default () {
					return []
				}
			},
			// 及数组数据中 图片参数名
			urlKey: {
				type: String,
				default () {
					return 'url'
				}
			},
			// 指示点设置
			indicator: {
				type: Object,
				default: function() {
					return {
						style: '', // style1 圆形指示点 style2 方形指示点
						color: 'rgba(0, 0, 0, .3)',
						active_color: '#000000'
					}
				}
			}
		},
		data() {
			return {
				currentIndex: 0,
				dontFirstAnimation: true
			}
		},
		methods: {
			swiperChange(e) {
				this.dontFirstAnimation = false
				this.currentIndex = e.detail.current
			},
			clickImg(item) {
				// 返回选中数据及索引
				this.$emit('selected', item, this.currentIndex)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.shuffling {
		position: relative;
	}

	/* 设置轮播图样式大小 */
	.image-container {
		width: 100%;
		height: 350rpx;
	}

	.item-img {
		width: 630rpx;
		height: 300rpx;
		border-radius: 14rpx;
		animation: to-big .3s;
	}

	.swiper-item {
		width: 630rpx;
		height: 300rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.item-img-side {
		width: 630rpx;
		height: 260rpx;
		border-radius: 14rpx;
		animation: to-mini .3s;
	}

	.swiper-item-side {
		width: 630rpx;
		height: 260rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@keyframes to-mini {
		from {
			height: 300rpx;
		}

		to {
			height: 260rpx;
		}
	}

	@keyframes to-big {
		from {
			height: 260rpx;
		}

		to {
			height: 300rpx;
		}
	}


	/* 设置轮播的指示点大小 */
	.indicates {
		position: absolute;
		overflow-x: hidden;
		left: 50%;
		bottom: 8%;
		transform: translate(-50%, -50%);
		display: flex;
		align-items: center;
		justify-content: center;

		.point {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 90rpx;
			height: 36rpx;
			border-radius: 20rpx;
			color: #000000;
			font-size: 24rpx;
			background-color: rgba(255, 255, 255, 0.8);
		}
	}
</style>
