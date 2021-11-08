<template>
	<view class="base-tab-bar" :class="[styleType, {fixed: fixed}]">
		<view class="tab-header" :class="['tab-header-' + styleType]" v-if="styleType !== 'style5'">
			<view v-for="(item, index) in list" class="tab-header-item"
				:class="{'active': value === item.id, 'last-child': index === list.length - 1}" :style="{
                    color: value === item.id ? getGlobalColor : 'inherit',
                    background: styleType === 'style1' || styleType === 'style2' ? value === item.id ? toRgbaColor(getGlobalColor, 0.2) : '#f4f4f4' : 'none'
                  }" :key="item.id" @click="tabChange(item, index)">
				<view class="tab-header-dot" v-if="value === item.id" :style="{background: getGlobalColor}"></view>
				<image class="tab-header-icon" v-if="item.icon && item.activeIcon"
					:src="value === item.id ? item.activeIcon : item.icon"></image>
				<view class="tab-header-title">{{item.title}}</view>
			</view>
		</view>
		<view class="tab-header" :class="['tab-header-' + styleType]" v-else>
			<scroll-view class="tab-header-wrapper" scroll-y>
				<view v-for="(item, index) in list" class="tab-header-item"
					:class="{'active': value === item.id, 'last-child': index === list.length - 1}" :style="{
                    color: value === item.id ? getGlobalColor : 'inherit',
                    background: 'inherit'
                  }" :key="item.id" @click="tabChange(item, index)">
					<view class="tab-header-dot" v-if="value === item.id" :style="{background: getGlobalColor}"></view>
					<image class="tab-header-icon" v-if="item.icon && item.activeIcon"
						:src="value === item.id ? item.activeIcon : item.icon"></image>
					<view class="tab-header-title">{{item.title}}</view>
				</view>
			</scroll-view>
		</view>
		<scroll-view scroll-y class="tab-body" :class="['tab-body-' + styleType]" v-if="fixed"
			@scrolltolower="reachBottom">
			<slot name="default"></slot>
		</scroll-view>
		<view class="tab-body" :class="['tab-body-' + styleType]" v-else>
			<slot name="default"></slot>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import {
		CoreTool
	} from '../../lib/index'

	export default {
		name: "BaseTabBar",
		props: {
			fixed: {
				type: Boolean,
				default: false
			},
			styleType: {
				type: String,
				default: 'style1'
			},
			value: {
				type: [Number, String],
				default: 0
			},
			list: {
				type: Array,
				default: () => []
			}
		},
		computed: {
			...mapState({
				getGlobalColor: 'globalColor'
			})
		},
		methods: {
			reachBottom() {
				this.$emit('reachBottom')
			},
			tabChange(item) {
				this.$emit('input', item.id)
			},
			toRgbaColor(color, a) {
				return CoreTool.toRgbaColor(color, a)
			}
		}
	}
</script>

<style lang="scss">
	@import '../../style/base';
	@import '../../style/mixin';

	.tab-header-title {
		display: inline-block;
		max-width: 158rpx;
		white-space: nowrap;
		overflow: hidden;
	}

	.base-tab-bar {

		/* style1 横向按钮式，可滑动 */
		&.style1,
		&.style2 {

			.tab-header-style1,
			.tab-header-style2 {
				display: flex;
				flex-wrap: nowrap;
				overflow-x: auto;
				width: 100%;
				padding: 25rpx 30rpx;
				color: #9a9a9a;
				background: #fff;
				height: 98rpx;

				.tab-header-item {
					padding: 12rpx 20rpx;
					border-radius: 10rpx;
					font-size: 28rpx;
					font-weight: 400;
					line-height: 28rpx;
					margin-right: 30rpx;
					background: #f4f4f4;

					&.last-child {
						margin-right: 0;
					}

					.tab-header-dot {
						display: none;
					}

					.tab-header-icon {
						display: none;
					}
				}
			}
		}

		/* style2 横向按钮式，多行显示 */
		&.style2 {
			.tab-header-style2 {
				padding: 25rpx 0 25rpx 30rpx;
				overflow: hidden;
				flex-wrap: wrap;

				.tab-header-item {
					&.last-child {
						margin-right: 30rpx;
					}
				}
			}
		}

		/* 横向标签式，不固定数量，可滑动 */
		&.style3,
		&.style4 {

			.tab-header-style3,
			.tab-header-style4 {
				display: flex;
				align-items: center;
				flex-wrap: nowrap;
				height: 88rpx;
				width: 100%;
				overflow-x: auto;
				color: #131313;
				background: #fff;
				@include setBorder1px(bottom);

				.tab-header-item {
					position: relative;
					width: 200rpx;
					text-align: center;
					font-size: 32rpx;
					line-height: 32rpx;
					font-weight: 400;
					height: 100%;
					padding: 27rpx 0;

					&.active {
						font-size: 36rpx;
						line-height: 36rpx;
						font-weight: 500;
					}

					.tab-header-dot {
						position: absolute;
						bottom: 0;
						left: 50%;
						transform: translateX(-50%);
						width: 80rpx;
						height: 6rpx;
						border-radius: 4rpx;
					}

					.tab-header-icon {
						display: none;
					}
				}
			}
		}

		&.style3 {
			.tab-header-item {
				min-width: 200rpx;

				.tab-header-title {
					min-width: 158rpx;
					max-width: unset;
				}
			}
		}

		/* 横向标签式，固定数量，不可滑动 */
		&.style4 {
			.tab-header-style4 {
				overflow: hidden;

				.tab-header-item {
					flex: 1;
					width: auto;
					flex-wrap: wrap;
					text-align: center;
				}
			}
		}

		/* 竖向标签式，不固定数量，可滑动 */
		&.style5 {
			display: flex;
			height: 100%;

			.tab-header-style5 {
				flex: 0 0 180rpx;
				width: 180rpx;
				color: #5E5E5E;
				background: #fff;

				.tab-header-wrapper {
					height: 100%;
				}

				.tab-header-item {
					position: relative;
					text-align: center;
					font-size: 26rpx;
					line-height: 26rpx;
					font-weight: 400;
					padding: 38rpx 0;

					&.active {
						font-size: 30rpx;
						line-height: 30rpx;
						font-weight: 500;
					}

					.tab-header-dot {
						position: absolute;
						left: 0;
						top: 50%;
						transform: translateY(-50%);
						width: 8rpx;
						height: 30rpx;
					}

					.tab-header-icon {
						display: none;
					}
				}
			}

			.tab-body-style5 {
				flex: 1;
				width: calc(100% - 180rpx);
			}
		}

		/* 操作tabbar内滚动 */
		&.fixed.style1,
		&.fixed.style2 {
			height: 100%;

			.tab-body-style1,
			.tab-body-style2 {
				height: calc(100% - 98rpx);
			}
		}

		&.fixed.style3,
		&.fixed.style4 {
			height: 100%;

			.tab-body-style3,
			.tab-body-style4 {
				height: calc(100% - 88rpx);
			}
		}

		&.fixed.style5 {
			.tab-body-style5 {
				height: 100%;
			}
		}
	}
</style>
