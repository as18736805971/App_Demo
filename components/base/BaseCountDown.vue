<template>
	<view class="count-down" :style="{color: baseColor}" v-if="privateTime > 0">
		{{privateTime}}
		<view class="count-down-text" :style="{'font-size': fontSize}" v-if="title">{{title}}：</view>
		<view class="count-down-col" :style="{color: textColor, background: bgColor, 'font-size': fontSize}"
			v-if="showArray[0] !== 0">{{showArray[0]}}</view>
		<view class="count-down-text" :style="{'font-size': fontSize}" v-if="showArray[0] !== 0">天</view>
		<view class="count-down-col" :style="{color: textColor, background: bgColor, 'font-size': fontSize}">
			{{showArray[1]}}
		</view>
		<view class="count-down-text" :style="{'font-size': fontSize}">:</view>
		<view class="count-down-col" :style="{color: textColor, background: bgColor, 'font-size': fontSize}">
			{{showArray[2]}}
		</view>
		<view class="count-down-text" :style="{'font-size': fontSize}">:</view>
		<view class="count-down-col" :style="{color: textColor, background: bgColor, 'font-size': fontSize}">
			{{showArray[3]}}
		</view>
	</view>
	<view class="count-down" v-else>
		<view class="count-down-text" :style="{'font-size': fontSize, color: baseColor}">已结束</view>
	</view>
</template>

<script>
	export default {
		name: "BaseCountDown",
		props: {
			title: {
				type: [String, Boolean],
				default: '距结束'
			},
			time: {
				type: [String, Number], // 可以转换成日期的字符串yyyy-MM-dd HH:mm:SS或时间戳
				default: ''
			},
			textColor: {
				type: String,
				default: '#ffffff'
			},
			bgColor: {
				type: String,
				default: '#FF5245'
			},
			baseColor: {
				type: String,
				default: 'rgba(153,153,153,1)'
			},
			fontSize: {
				type: String,
				default: '20rpx'
			}
		},
		data() {
			return {
				privateTime: 0,
				showArray: [],
				timer: null,
				init: true
			}
		},
		mounted() {
			this.init = false
			this.initTime()
		},
		watch: {
			time(value) {
				this.init = false
				this.initTime()
			}
		},
		destroyed() {
			clearInterval(this.timer)
		},
		methods: {
			initTime() {
				clearInterval(this.timer)
				this.privateTime = typeof this.time === 'string' || String(this.time).length === 13 ? (((new Date(this
					.time)).getTime() - (new Date()).getTime()) / 1000) : (this.time / 1000)
				if (this.privateTime <= 0) {
					this.privateTime = 0
					return
				}

				this.showArray = this.computedNowToDate(this.privateTime)
				this.timer = setInterval(() => {
					this.privateTime--
					if (this.privateTime <= 0) {
						this.privateTime = 0
						clearInterval(this.timer)
						return
					}
					this.showArray = this.computedNowToDate(this.privateTime)
				}, 1000)
			},
			/*
			 * @desc 计算当前日期与目标日期的时间差距
			 * @params targetDate: String 可以转换为时间的格式，如 yyyy-MM-dd HH:mm:SS
			 * @return Array[天，时，分，秒]
			 * */
			computedNowToDate(targetDate) {
				let timestamp = targetDate
				if (timestamp <= 0) {
					return false
				} else if (!this.privateTime) {
					this.privateTime = timestamp
				}
				let second = parseInt(String(timestamp % 60))
				let minute = parseInt(String(timestamp / 60 % 60))
				let hour = parseInt(String(timestamp / 3600 % 24))
				let day = parseInt(String(timestamp / 86400))
				second = second < 10 ? '0' + second : second
				minute = minute < 10 ? '0' + minute : minute
				hour = hour < 10 ? '0' + hour : hour
				return [day, hour, minute, second]
			}
		}
	}
</script>

<style lang="scss">
	.count-down {
		display: inline-block;
		vertical-align: middle;
		font-size: 0;

		&-text {
			display: inline-block;
			vertical-align: middle;
		}

		&-col {
			display: inline-block;
			vertical-align: middle;
			margin: 0 4rpx;
			padding: 6rpx 6rpx;
			min-width: 40rpx;
			text-align: center;
			line-height: 22rpx;
			font-size: 24rpx;
		}
	}
</style>
