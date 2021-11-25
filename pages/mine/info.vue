<template>
	<view class="page-index">
		<view class="icon">
			<view class="info-list">
				<view class="item">
					<view class="left">头像</view>
					<view class="right">
						<image class="portrait" :src="require('@/static/appicon/portrait.png')"></image>
					</view>
				</view>
				<view class="item">
					<view class="left">昵称</view>
					<view class="right">
						<input type="text" v-model="nickName" class="input" />
					</view>
				</view>
				<view class="item">
					<view class="left">性别</view>
					<view class="right" @click="handleSex(1, null)">
						<view>{{ sex || '未知' }}</view>
						<image class="right_arrow" :src="require('@/static/icon/right_arrow.png')"></image>
					</view>
				</view>
				<view class="item">
					<view class="left">账号</view>
					<view class="right">Stars18736805971</view>
				</view>
				<view class="item">
					<view class="left">手机号</view>
					<view class="right">18736805971</view>
				</view>
				<view class="item">
					<view class="left">生日</view>
					<view class="right">
						<view>{{ birthday || '完善生日，享生日好礼' }}</view>
						<image class="right_arrow" :src="require('@/static/icon/right_arrow.png')"></image>
					</view>
				</view>
				<view class="item">
					<view class="left">入会时间</view>
					<view class="right">2021-11-25 14:40:21</view>
				</view>
			</view>
		</view>

		<view class="date">
			<view class="date-item">
				<view class="title">
					<view class="left">
						<image class="right_arrow" :src="require('@/static/icon/left_arrow.png')"></image>
						2021-11
					</view>
					<view class="right">
						已连续签到<view class="num">0</view>天
					</view>
				</view>
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
					<view class="item-num" v-for="(vv, kk) in item" :key="kk">
						<view class="block" :class="vv.isDay ? 'active' : ''">{{ vv.date !== 0 ? vv.date : '' }}</view>
					</view>
				</view>
			</view>
		</view>

		<view class="save" @click="handleSave()">保存</view>

		<!-- 性别弹窗 -->
		<base-modal ref="sex">
			<view class="model">
				<view class="item" @click="handleSex(2 , '先生')">先生</view>
				<view class="item" @click="handleSex(2 , '女士')">女士</view>
				<view class="cancel" @click="handleSex(3 , null)">取消</view>
			</view>
		</base-modal>
		<!-- 性别弹窗 -->
	</view>
</template>

<script>
	import BaseModal from '@/components/base/BaseModal'

	export default {
		components: {
			BaseModal,
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
		data() {
			return {
				nickName: '你的眼里有星星',
				sex: '',
				birthday: '',
				date: {}, // 当前日期
				date_item: [],
			}
		},
		onLoad() {
			this.date = this.getDate(new Date()) // 当前日期
			let currentDay = new Date(this.date.year, this.date.month, 0).getDate()
			this.date_item = this.currentMonthDys(currentDay, this.date)
      // 头部日期补充
			this.handleArrangeDate(this.date_item, 1)
      // 尾部日期补充
      this.handleArrangeDate(this.date_item, 2)
		},
		methods: {
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
				let fullDate = this.date.fullDate
				for (let i = 1; i <= dateData; i++) {
					let isinfo = false
					let nowDate = full.year + '-' + (full.month < 10 ?
						full.month : full.month) + '-' + (i < 10 ?
						'0' + i : i)
					// 是否今天
					let isDay = fullDate === nowDate
					// 星期几
					let myDate = new Date(nowDate)
					let week = myDate.getDay()
					// 获取打点信息
					let info = this.selected && this.selected.find((item) => {
						if (this.dateEqual(nowDate, item.date)) {
							return item
						}
					})
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
					if (info) {
						data.extraInfo = info
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
					let num = length === 1 ? 5 :
						length === 2 ? 4 : length === 3 ? 3 : length === 4 ? 2 : length === 5 ? 1 : 6
					for (let i = 0; i < num; i++) {
						arr.push({
							date: 0,
						})
					}
				}
        return arr
			},
			// 选择性别
			handleSex(type, str) {
				if (type === 1) {
					this.$refs.sex.handleShowModal()
				} else if (type === 2) {
					this.sex = str
					this.$refs.sex.handleHiddenModal()
				} else {
					this.$refs.sex.handleHiddenModal()
				}
			},
			// 保存
			handleSave() {
				uni.showToast({
					title: '保存成功',
					duration: 1000
				});
				setTimeout(() => {
					uni.switchTab({
						url: '../mine/index'
					});
				}, 1500)
			},
		}
	}
</script>

<style lang="scss" scoped>
	.page-index {
		width: 100%;
		min-height: 100vh;
		font-size: 24rpx;
		color: #242424;
		background-color: #f3f4f4 !important;

		.icon {
			height: auto;
			padding: 40rpx 30rpx;
		}

		.info-list {
			height: auto;
			background-color: #FFFFFF;
			border-radius: 12rpx;
			box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);

			.item {
				height: 110rpx;
				padding: 0 30rpx;
				border-bottom: 2rpx solid #f3f4f4;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.left {
					width: 30%;
					height: 80rpx;
					display: flex;
					align-items: center;
					justify-content: flex-start;
					color: #242524;
					font-size: 26rpx;
				}

				.right {
					width: 60%;
					height: 80rpx;
					display: flex;
					align-items: center;
					justify-content: flex-end;
					color: #a2a5a8;
					font-size: 26rpx;

					.portrait {
						width: 80rpx;
						height: 80rpx;
						border-radius: 50%;
						margin-right: 20rpx;
					}

					.input {
						width: 100%;
						height: 80rpx;
						text-align: right;
					}

					.right_arrow {
						width: 24rpx;
						height: 24rpx;
						margin-left: 20rpx;
					}
				}
			}

			.item:last-child {
				border-bottom: none;
			}
		}

		.save {
			width: 80%;
			margin: 150rpx auto 0;
			height: 80rpx;
			text-align: center;
			line-height: 80rpx;
			font-size: 28rpx;
			border-radius: 50rpx;
			background-color: #b0d342;
		}

		.model {
			height: auto;
			border-radius: 20rpx 20rpx 0 0;
			background-color: #f3f4f4;
			overflow: hidden;

			.item {
				height: 100rpx;
				line-height: 100rpx;
				text-align: center;
				font-size: 30rpx;
				color: #a2a5a8;
				background-color: #FFFFFF;
				border-bottom: 2rpx solid #f3f4f4;
			}

			.item:last-child {
				border-bottom: none;
			}

			.cancel {
				margin-top: 10rpx;
				height: 80rpx;
				line-height: 80rpx;
				text-align: center;
				font-size: 30rpx;
				background-color: #FFFFFF;
				padding-bottom: 70rpx;
			}
		}

		.date {
			padding: 40rpx;
			height: auto;
			background-color: #4cd964;

			.date-item {
				background-color: #FFFFFF;
				border-radius: 20rpx;
				overflow: hidden;
				padding-bottom: 30rpx;

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

						.right_arrow {
							width: 24rpx;
							height: 24rpx;
							margin-right: 16rpx;
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
	}
</style>
