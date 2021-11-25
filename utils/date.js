// let date = this.getDate(new Date()) // 当前日期
// console.log(date, '当前日期')
// let currentDay = new Date(date.year, date.month, 0).getDate()
// let aa = currentMonthDys(currentDay, this.date)
// console.log(aa, '获取本月天数')
// let firstDay = new Date(date.year, date.month - 1, 1).getDay()
// let bb = getLastMonthDays(firstDay, date)
// console.log(bb, '获取上月天数')
// let lastMonthDays = getLastMonthDays(firstDay, date) // 上个月末尾几天
// let currentMonthDys = currentMonthDys(currentDay, date) // 本月天数
// let surplus = 42 - (lastMonthDays.length + currentMonthDys.length)
// let cc = getNextMonthDays(surplus, date)
// console.log(cc, '获取下月天数')

/**
 * 获取任意时间
 */
export function getDate(date, AddDayCount = 0, str = 'day') {
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
}
/**
 * 获取上月剩余天数
 */
export function getLastMonthDays(firstDay, full) {
	let dateArr = []
	for (let i = firstDay; i > 0; i--) {
		const beforeDate = new Date(full.year, full.month - 1, -i + 1).getDate()
		dateArr.push({
			date: beforeDate,
			month: full.month - 1,
			disable: true
		})
	}
	return dateArr
}
/**
 * 获取本月天数
 */
export function currentMonthDys(dateData, full, startDate = '', endDate = '') {
	let dateArr = []
	let fullDate = this.date.fullDate
	for (let i = 1; i <= dateData; i++) {
		let isinfo = false
		let nowDate = full.year + '-' + (full.month < 10 ?
			full.month : full.month) + '-' + (i < 10 ?
			'0' + i : i)
		// 是否今天
		let isDay = fullDate === nowDate
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
		}
		if (info) {
			data.extraInfo = info
		}
		dateArr.push(data)
	}
	return dateArr
}
/**
 * 获取下月天数
 */
export function getNextMonthDays(surplus, full) {
	let dateArr = []
	for (let i = 1; i < surplus + 1; i++) {
		dateArr.push({
			date: i,
			month: Number(full.month) + 1,
			disable: true
		})
	}
	return dateArr
}
/**
 * 比较时间是否相等
 */
export function dateEqual(before, after) {
	// 计算截止时间
	before = new Date(before.replace('-', '/').replace('-', '/'))
	// 计算详细项的截止时间
	after = new Date(after.replace('-', '/').replace('-', '/'))
	if (before.getTime() - after.getTime() === 0) {
		return true
	} else {
		return false
	}
}
/**
 * 比较时间大小
 */
export function dateCompare(startDate, endDate) {
	// 计算截止时间
	startDate = new Date(startDate.replace('-', '/').replace('-', '/'))
	// 计算详细项的截止时间
	endDate = new Date(endDate.replace('-', '/').replace('-', '/'))
	if (startDate <= endDate) {
		return true
	} else {
		return false
	}
}
/**
 *  比较真实起始日期
 */

export function isLogicBefore(currentDay, before, after) {
	let logicBefore = before
	if (before && after) {
		logicBefore = this.dateCompare(before, after) ? before : after
	}
	return this.dateEqual(logicBefore, currentDay)
}

export function isLogicAfter(currentDay, before, after) {
	let logicAfter = after
	if (before && after) {
		logicAfter = this.dateCompare(before, after) ? after : before
	}
	return this.dateEqual(logicAfter, currentDay)
}
