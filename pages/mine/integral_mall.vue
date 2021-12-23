<template>
	<view class="page-index">
		<!-- 背景 -->
		<view class="cover">
			<!-- 积分 -->
			<view class="integral">
				<view class="left">
					<image class="integral-icon" :src="require('@/static/appicon/integral.png')"></image>
					<text class="num">3</text><text class="txt">积分</text>
					<image class="integral-right" :src="require('@/static/icon/right_arrow3.png')"></image>
				</view>
				<view class="right">兑换记录</view>
			</view>
			<!-- 积分 -->

			<!-- 签到卡片 -->
			<view class="sign-the-card">
				<view class="integral-title">连续签到赚积分</view>
				<view class="integral-list">
					<view class="day-list">
						<view class="day" v-for="(item, index) in integral_list" :key="index">{{ item.day }}天</view>
					</view>
					<view class="line-list">
						<template v-for="(item, index) in integral_list">
							<view class="round-item" :key="index">
								<view class="round" :class="item.status ? 'line-active' : ''"></view>
							</view>
							<view class="line" :class="integral_list[index + 1].status ? 'line-active' : ''"
								v-if="index + 1 !== integral_list.length"></view>
						</template>
						<view class="icon-integral">{{ integral_list[integral_list.length - 1].num }}</view>
					</view>
					<view class="day-list">
						<view class="day" v-for="(item, index) in integral_list" :key="index">
							{{ index + 1 !== integral_list.length ? '+' + item.num : '' }}
						</view>
					</view>
				</view>
				<view class="integral-btn" :class="sign_status ?'active' : ''" @click="handleSign()">
					{{ sign_status ? '已签到' : '立即签到' }}
				</view>
				<view class="integral-see" @click="handleJump({type: './integral_sign'})">查看签到日历</view>
			</view>
			<!-- 签到卡片 -->
		</view>
		<!-- 背景 -->

		<!-- 商品列表 -->
		<view class="goods-list">
			<view class="txt-title">
				<view>会员日区</view>
				<image class="arrow" :src="require('@/static/icon/right_arrow4.png')"></image>
			</view>
			<view class="goods-item">
				<view class="goods-info" :class="item.end ? 'end-active' : ''" v-for="(item, index) in goods_list"
					:key="index">
					<view class="open-to-rob" v-if="item.status">{{ item.time }}开抢</view>
					<view class="goods-pic">
						<image class="integral-icon" mode="aspectFit" :src="item.goods_pic"></image>
					</view>
					<view class="goods-name">{{ item.goods_name }}</view>
					<view class="goods-integral">
						<text>{{ item.goods_integral }}</text>积分
					</view>
					<view class="goods-num">剩余{{ item.remaining }}件</view>
				</view>
			</view>
		</view>
		<!-- 商品列表 -->

    <!-- 商品列表 -->
    <view class="goods-list">
      <view class="txt-title">
        <view>优惠券</view>
        <image class="arrow" :src="require('@/static/icon/right_arrow4.png')"></image>
      </view>
      <view class="goods-item">
        <view class="goods-info" :class="item.end ? 'end-active' : ''" v-for="(item, index) in goods_list"
              :key="index">
          <view class="open-to-rob" v-if="item.status">{{ item.time }}开抢</view>
          <view class="goods-pic">
            <image class="integral-icon" mode="aspectFit" :src="item.goods_pic"></image>
          </view>
          <view class="goods-name">{{ item.goods_name }}</view>
          <view class="goods-integral">
            <text>{{ item.goods_integral }}</text>积分
          </view>
          <view class="goods-num">剩余{{ item.remaining }}件</view>
        </view>
      </view>
    </view>
    <!-- 商品列表 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sign_status: false, // 是否签到
				integral_list: [{
					day: 1,
					num: 1,
					status: true,
				}, {
					day: 2,
					num: 1,
					status: true,
				}, {
					day: 3,
					num: 1,
					status: false,
				}, {
					day: 4,
					num: 1,
					status: false,
				}, {
					day: 5,
					num: 1,
					status: false,
				}, {
					day: 6,
					num: 1,
					status: false,
				}, {
					day: 7,
					num: 10,
					status: false,
				}],
				goods_list: [{
					goods_name: '星星气泡水组合套装',
					goods_pic: 'https://img9.51tietu.net/pic/2019-091200/vgkpidei2tjvgkpidei2tj.jpg',
					goods_integral: 5000,
					remaining: 10,
					status: 1,
					time: '15:00',
					end: false,
				}, {
					goods_name: '神里绫华 巴巴托斯',
					goods_pic: 'https://img9.51tietu.net/pic/2019-091200/euzekmi5m23euzekmi5m23.jpg',
					goods_integral: 100,
					remaining: 102,
					status: 0,
					end: false,
				}, {
					goods_name: '璃月钟离 稻妻雷神',
					goods_pic: 'https://img9.51tietu.net/pic/2019-091200/143tt0ta4sr143tt0ta4sr.jpg',
					goods_integral: 500,
					remaining: 55,
					status: 1,
					time: '14:00',
					end: true,
				}, {
					goods_name: '星星气泡水组合套装',
					goods_pic: 'https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg',
					goods_integral: 400,
					remaining: 33,
					status: 1,
					time: '16:00',
					end: false,
				}, {
					goods_name: '星星气泡水组合套装',
					goods_pic: 'https://img9.51tietu.net/pic/2019-091200/vgkpidei2tjvgkpidei2tj.jpg',
					goods_integral: 500,
					remaining: 24,
					status: 1,
					time: '20:00',
					end: true,
				}, {
					goods_name: '枫原万叶 九条裟罗',
					goods_pic: 'https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg',
					goods_integral: 600,
					remaining: 26,
					status: 0,
					end: false,
				}]
			}
		},
		methods: {
			handleSign() {
				if (!this.sign_status) {
					this.sign_status = true
					this.handleJump({
						type: './integral_mall_remind'
					})
				}
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
		padding-bottom: 20rpx;

		.cover {
			position: relative;
			width: 100%;
			height: 270rpx;
			background-color: #b2d543;
			margin-bottom: 370rpx;
		}

		.integral {
			position: absolute;
			top: 80rpx;
			left: 50%;
			transform: translate(-50%, -36%);
			z-index: 99;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.left {
				padding-left: 30rpx;
				display: flex;
				align-items: center;
				font-size: 24rpx;
				color: #FFFFFF;

				.integral-icon {
					width: 60rpx;
					height: 60rpx;
					margin-right: 10rpx;
				}

				.num {
					font-size: 60rpx;
					font-weight: bold;
					margin: 0 5rpx;
				}

				.txt {
					margin-top: 20rpx;
				}

				.integral-right {
					width: 20rpx;
					height: 20rpx;
					margin-top: 25rpx;
					margin-left: 5rpx;
				}
			}

			.right {
				height: 60rpx;
				padding: 0 30rpx;
				line-height: 60rpx;
				background-color: #FFFFFF;
				text-align: center;
				font-size: 26rpx;
				color: #b0d342;
				border-radius: 50rpx 0 0 50rpx;
			}
		}

		.sign-the-card {
			position: absolute;
			top: 350rpx;
			left: 50%;
			transform: translate(-50%, -36%);
			z-index: 99;
			width: 86%;
			height: auto;
			background-color: #ffffff;
			border-radius: 12rpx;
			box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);
			padding: 20rpx;

			.integral-title {
				height: 60rpx;
				line-height: 60rpx;
				font-size: 26rpx;
				font-weight: bold;
			}

			.integral-list {
				margin-top: 10rpx;
				height: auto;

				.day-list {
					display: flex;
					align-content: center;
					justify-content: space-between;
					padding: 0 30rpx;

					.day {
						width: 50rpx;
						height: 50rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						color: #909294;
						font-size: 24rpx;
					}
				}

				.line-list {
					position: relative;
					display: flex;
					align-items: center;
					justify-content: center;
					padding: 0 40rpx;

					.round-item {
						width: 30rpx;
						height: 50rpx;
						display: flex;
						align-items: center;
						justify-content: center;

						.round {
							width: 10rpx;
							height: 10rpx;
							border-radius: 50%;
							background-color: #d8d8d8;
						}
					}

					.line {
						width: 50rpx;
						height: 2rpx;
						background-color: #d8d8d8;
						margin: 0 10rpx;
					}

					.icon-integral {
						position: absolute;
						top: 1rpx;
						right: 25rpx;
						width: 50rpx;
						height: 50rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						color: #FFFFFF;
						border-radius: 50%;
						background-color: #f1a342;
						//background-image: url('../../static/appicon/integral1.png');
						//background-repeat: no-repeat;
						//background-size: 100% 100%;
					}

					.line-active {
						background-color: #f1a342 !important;
					}
				}
			}

			.integral-btn {
				margin: 40rpx auto 20rpx;
				width: 230rpx;
				height: 65rpx;
				color: #b0d342;
				border-radius: 50rpx;
				font-size: 32rpx;
				line-height: 65rpx;
				text-align: center;
				border: 2rpx solid #b0d342;
			}

			.active {
				width: 234rpx;
				height: 69rpx;
				line-height: 69rpx;
				color: #FFFFFF !important;
				border: none !important;
				background-color: #d3dfac !important;
			}

			.integral-see {
				height: 40rpx;
				font-size: 24rpx;
				line-height: 40rpx;
				text-align: center;
				color: #b0d342;
			}
		}

		.goods-list {
			padding: 0 30rpx;
			height: auto;

			.txt-title {
				width: 100%;
				height: 70rpx;
				font-size: 32rpx;
				font-weight: bold;
				margin-bottom: 20rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.arrow {
					width: 45rpx;
					height: 45rpx;
				}
			}

			.goods-item {
				width: 100%;
				height: auto;
				display: flex;
				align-content: center;
				justify-content: space-between;
				flex-wrap: wrap;

				.goods-info {
					position: relative;
					width: 290rpx;
					padding: 20rpx;
					height: auto;
					border-radius: 12rpx;
					background-color: #ffffff;
					margin-bottom: 20rpx;
					box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);

					.open-to-rob {
						position: absolute;
						top: 20rpx;
						right: -15rpx;
						height: 40rpx;
						line-height: 40rpx;
						padding: 0 30rpx;
						text-align: center;
						color: #FFFFFF;
						font-size: 22rpx;
						background-color: #eeb956;
						border-radius: 10rpx 0 0 10rpx;
					}

					.goods-pic {
						width: 100%;
						height: 270rpx;
						display: flex;
						align-items: center;
						justify-content: center;

						image {
							width: 100%;
							height: 270rpx;
						}
					}

					.goods-name {
						height: 60rpx;
						font-size: 28rpx;
						line-height: 60rpx;
						font-weight: bold;
						color: #242524;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}

					.goods-integral {
						height: 50rpx;
						font-size: 24rpx;
						color: #707274;
						display: flex;
						align-items: center;

						text {
							font-size: 30rpx;
							font-weight: bold;
							color: #a8c05e;
							margin-right: 10rpx;
						}
					}

					.goods-num {
						height: 50rpx;
						font-size: 24rpx;
						color: #707274;
						line-height: 50rpx;
					}
				}

				.end-active {
					opacity: 0.7;
				}
			}
		}
	}
</style>
