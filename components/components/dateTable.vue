<template>
	<view class="date">
		<view class="date-item">
			<!-- 日期标题 -->
			<view class="title">
				<view class="left">
					<view class="left-icon" @click="handleChangeDate(1)">
						<image class="right_arrow" :src="require('@/static/icon/left_arrow.png')"></image>
					</view>
					{{ current_date.year }}-{{ current_date.month < 10 ? '0' + current_date.month : current_date.month }}
					<view class="left-icon" @click="handleChangeDate(2)"
						v-if="date.year !== current_date.year || date.month !== current_date.month">
						<image class="right_arrow" :src="require('@/static/icon/right_arrow2.png')"></image>
					</view>
				</view>
				<view class="right" @click="hadnle()">
					已连续签到<view class="num">100</view>天
				</view>
			</view>
			<!-- 日期标题 -->

			<!-- 日期排列 -->
			<view class="date-title">
				<view class="item-title">
					<view class="block">日</view>
				</view>
				<view class="item-title">
					<view class="block">一</view>
				</view>
				<view class="item-title">
					<view class="block">二</view>
				</view>
				<view class="item-title">
					<view class="block">三</view>
				</view>
				<view class="item-title">
					<view class="block">四</view>
				</view>
				<view class="item-title">
					<view class="block">五</view>
				</view>
				<view class="item-title">
					<view class="block">六</view>
				</view>
			</view>
			<view class="item" v-for="(item, index) in arrList" :key="index">
				<view class="item-num" v-for="(vv, kk) in item" :key="kk" @click="handleClickDate(vv)">
					<view class="block" :class="vv.isDay ? 'active' : ''">{{ vv.date !== 0 ? vv.date : '' }}</view>
				</view>
			</view>
			<!-- 日期排列 -->
		</view>
	</view>
</template>

<script>
	import BaseModal from '@/components/base/BaseModal'
	export default {
		name: "dateTable",
		components: {
			BaseModal,
		},
		data() {
			return {
				date: {}, // 原有日期
				current_date: {
					year: 0,
					month: 0,
				}, // 当前日期
				date_item: [], // 日期数据
			}
		},
		computed: {
			// 重组数据格式为每组3条数据
			arrList() {
				let data = []
				let arr = []
				this.date_item.map((item, index) => {
					if (index !== this.date_item.length - 1) {
						if (index !== 0 && index % 7 === 0) {
							data.push(arr)
							arr = []
							arr.push(item)
						} else {
							arr.push(item)
						}
					} else {
						// 如果子数据已有7条 则重新另外放入新数据
						if (arr.length !== 7) {
							arr.push(item)
							data.push(arr)
						} else {
							data.push(arr)
							arr = []
							arr.push(item)
							data.push(arr)
						}
					}
				})
				return data
			}
		},
		created() {
			this.date = this.getDate(new Date()) // 当前日期
			this.current_date = JSON.parse(JSON.stringify(this.date)) // 当前日期
			this.handleDate(this.current_date.year, this.current_date.month, this.current_date)
		},
		methods: {
			handleClickDate(data) {
				this.$emit('handleDateItem', data)
			},
			// 日期切换
			handleChangeDate(type) {
				if (type === 1) {
					if (Number(this.current_date.month) === 1) {
						this.current_date.year = Number(this.current_date.year) - 1
						this.current_date.month = 12
					} else {
						this.current_date.month = Number(this.current_date.month) - 1
					}
				} else {
					if (Number(this.current_date.month) === 12) {
						this.current_date.year = Number(this.current_date.year) + 1
						this.current_date.month = 1
					} else {
						this.current_date.month = Number(this.current_date.month) + 1
					}
				}
				this.handleDate(this.current_date.year, this.current_date.month, this.current_date)
			},
			// 获取日期数据
			handleDate(year, month, date) {
				this.date_item = []
				let currentDay = new Date(year, month, 0).getDate()
				this.date_item = this.currentMonthDys(currentDay, date)
				// 头部日期补充
				this.handleArrangeDate(this.date_item, 1)
				// 尾部日期补充
				this.handleArrangeDate(this.date_item, 2)
			},
			// 重组日期排列
			handleArrangeDate(arr, type) {
				if (type === 1) {
					let length = arr[0].week
					for (let i = 0; i < length; i++) {
						arr.unshift({
							date: 0,
						})
					}
				} else {
					let length = arr[arr.length - 1].week
					let num = length === 0 ? 6 : length === 1 ? 5 :
						length === 2 ? 4 : length === 3 ? 3 : length === 4 ? 2 : length === 5 ? 1 : length === 6 ? 0 : 0
					for (let i = 0; i < num; i++) {
						arr.push({
							date: 0,
						})
					}
				}
				return arr
			},
			/**
			 * 获取任意时间
			 */
			getDate(date, AddDayCount = 0, str = 'day') {
				if (!date) {
					date = new Date()
				}
				if (typeof date !== 'object') {
					date = date.replace(/-/g, '/')
				}
				const dd = new Date(date)
				switch (str) {
					case 'day':
						dd.setDate(dd.getDate() + AddDayCount) // 获取AddDayCount天后的日期
						break
					case 'month':
						if (dd.getDate() === 31) {
							dd.setDate(dd.getDate() + AddDayCount)
						} else {
							dd.setMonth(dd.getMonth() + AddDayCount) // 获取AddDayCount天后的日期
						}
						break
					case 'year':
						dd.setFullYear(dd.getFullYear() + AddDayCount) // 获取AddDayCount天后的日期
						break
				}
				const y = dd.getFullYear()
				const m = dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1 // 获取当前月份的日期，不足10补0
				const d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate() // 获取当前几号，不足10补0
				return {
					fullDate: y + '-' + m + '-' + d,
					year: y,
					month: m,
					date: d,
					day: dd.getDay()
				}
			},
			/**
			 * 获取本月天数
			 */
			currentMonthDys(dateData, full, startDate = '', endDate = '') {
				let dateArr = []
				let fullDate = full.fullDate
				for (let i = 1; i <= dateData; i++) {
					let nowDate = full.year + '-' + (full.month < 10 ?
						full.month : full.month) + '-' + (i < 10 ?
						'0' + i : i)
					// 是否今天
					let isDay = fullDate === nowDate
					// ios使用如下方法获得NaN,安卓手机则是正常计算,解决方法是换个这个时间的格式
					// 换成如下方式就正常了,就是‘-’换成‘/’
					// 正则表达式替换方法  .replace(/\-/g, '/')
					if (uni.getSystemInfoSync().platform === 'ios') {
						nowDate = nowDate.replace(/\-/g, '/')
					}
					// 星期几
					let myDate = new Date(nowDate)
					let week = myDate.getDay()
					// 日期禁用
					let disableBefore = true
					let disableAfter = true
					if (startDate) {
						disableBefore = this.dateCompare(startDate, nowDate)
					}
					if (endDate) {
						disableAfter = this.dateCompare(nowDate, endDate)
					}
					let data = {
						fullDate: nowDate,
						year: full.year,
						date: i,
						month: full.month,
						disable: !(disableBefore && disableAfter), // 禁用
						isDay, // 是否是今天
						week: week, // 星期几
					}
					dateArr.push(data)
				}
				return dateArr
			},
			/**
			 * 比较时间是否相等
			 */
			dateEqual(before, after) {
				// 计算截止时间
				before = new Date(before.replace('-', '/').replace('-', '/'))
				// 计算详细项的截止时间
				after = new Date(after.replace('-', '/').replace('-', '/'))
				if (before.getTime() - after.getTime() === 0) {
					return true
				} else {
					return false
				}
			},
			/**
			 * 比较时间大小
			 */
			dateCompare(startDate, endDate) {
				// 计算截止时间
				startDate = new Date(startDate.replace('-', '/').replace('-', '/'))
				// 计算详细项的截止时间
				endDate = new Date(endDate.replace('-', '/').replace('-', '/'))
				if (startDate <= endDate) {
					return true
				} else {
					return false
				}
			},
			/**
			 *  比较真实起始日期
			 */
			isLogicBefore(currentDay, before, after) {
				let logicBefore = before
				if (before && after) {
					logicBefore = this.dateCompare(before, after) ? before : after
				}
				return this.dateEqual(logicBefore, currentDay)
			},
			isLogicAfter(currentDay, before, after) {
				let logicAfter = after
				if (before && after) {
					logicAfter = this.dateCompare(before, after) ? after : before
				}
				return this.dateEqual(logicAfter, currentDay)
			},
		}
	}
</script>

<style lang="scss">
	.date {
		// width: 100%;
		padding: 40rpx;
		height: auto;
		background-color: #FFFFFF;

		.date-item {
			background-color: #FFFFFF;
			border-radius: 20rpx;
			overflow: hidden;
			padding-bottom: 30rpx;
      box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);

			.title {
				height: 80rpx;
				padding: 0 40rpx;
				background-color: #e7f2b8;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.left {
					font-size: 28rpx;
					color: #b0d342;
					display: flex;
					align-items: center;
					font-weight: bold;

					.left-icon {
						height: 80rpx;
						width: 50rpx;
						display: flex;
						align-items: center;
						justify-content: center;
					}

					.right_arrow {
						width: 24rpx;
						height: 24rpx;
					}
				}

				.right {
					display: flex;
					align-items: center;
					justify-content: flex-end;
					color: #4a4c4e;
					font-size: 28rpx;

					.num {
						margin: 0 6rpx;
						color: #b0d342;
					}
				}
			}

			.date-title {
				height: 120rpx;
				padding: 0 20rpx;
				display: flex;
				align-items: center;
				justify-content: center;

				.item-title {
					flex: 1;
					text-align: center;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.block {
					width: 50rpx;
					height: 50rpx;
					font-size: 24rpx;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.active {
					border-radius: 10rpx;
					background-color: #4cd964;
				}
			}

			.item {
				height: 60rpx;
				padding: 0 20rpx;
				display: flex;
				align-items: center;
				justify-content: center;

				.item-num {
					flex: 1;
					text-align: center;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.block {
					width: 50rpx;
					height: 50rpx;
					font-size: 24rpx;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.active {
					border-radius: 10rpx;
					background-color: #4cd964;
				}
			}
		}
	}
</style>
