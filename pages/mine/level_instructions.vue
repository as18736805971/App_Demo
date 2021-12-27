<template>
	<view class="page-index">
		<template v-if="type === 'integral'">
			<view class="title">获取积分：</view>
			<view class="desc">在支持会员的门店出示会员码或“点单”小程序完成订单单后，可获得积分奖励。每消费1元=1积分，不足1元不积分如发生退款扣除对应积分。</view>
			<view class="title">积分效期：</view>
			<view class="desc">积分有效期为获得积分之日至下一年12月31日24点。积分到期后，未使用的积分将清零，清零后不做退还，但不影响会员等级。</view>
			<view class="title">可用积分：</view>
			<view class="desc">展示在首页积分为可用于积分商城中兑换的虛拟币，您每次可用的积分会随着您兑换的积分数量相应减少</view>
			<view class="title">积分用途：</view>
			<view class="desc">会员可在积分商城凭积分兑换礼品/礼券。</view>
		</template>
		<template v-else>
			<view class="title">你的眼里有星星：您在“你的眼里有星星”小程序成功授权，即可成为你的眼里有星星会员</view>
			<view class="table">
				<view class="table-left">
					<view class="table-title">会员等级</view>
					<view class="table-title" v-for="(item, index) in level_list" :key="index">{{ item.title }}</view>
				</view>
				<view class="table-left">
					<view class="table-title">所需成长值</view>
					<view class="table-title" v-for="(item, index) in level_list" :key="index">
						{{ index + 1 !== level_list.length ? item.min + '-' + item.max : item.max + '及以上' }}
					</view>
				</view>
			</view>
			<view class="title">等级有效期：</view>
			<view class="desc">等级有效期：180天，按照等级升级日算起，满180天后的次日系统将根据过去180天内的成长值重新计算等级，若在180天内再次升级则自升级之日起重新计算新等级的180天有效期。
			</view>
			<view class="title">成长值说明：</view>
			<view class="desc">1） 会员卡适用范国内每实际消费1元人民币=1成长值，若消费金额换算为成长值后不为整数，向下取整，仅取整数积累成长值；</view>
			<view class="desc">2）
				会员卡适用范国：在“你的眼里有星星酒屋”“你的眼里有星星梦工厂“中国境内（香港、台湾、澳门地区除外）门店、“你的眼里有星星点单”小程序及你的眼里有星星指定渠道消费可以获得相应的成长值。</view>
			<view class="desc">3） 如产生退款，扣除对应成长值。</view>
		</template>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: 'level',
				level_list: [{
						title: 'V1',
						min: 0,
						max: 99,
					},
					{
						title: 'V2',
						min: 100,
						max: 499,
					},
					{
						title: 'V3',
						min: 500,
						max: 999,
					},
					{
						title: 'V4',
						min: 1000,
						max: 1999,
					},
					{
						title: 'V5',
						min: 2000,
						max: 4999,
					},
					{
						title: 'V6',
						min: 0,
						max: 5000,
					},
				]
			}
		},
		onLoad(e) {
			this.type = e.type
			uni.setNavigationBarTitle({
				title: this.type === 'integral' ? '积分规则' : '等级说明'
			});
		},
		methods: {}
	}
</script>

<style lang="scss" scoped>
	.page-index {
		padding: 30rpx;
		font-size: 24rpx;
		color: #242424;

		.title {
			width: 100%;
			height: auto;
			line-height: 38rpx;
			font-size: 28rpx;
			font-weight: bold;
		}

		.desc {
			font-size: 24rpx;
			color: #484b4d;
			margin: 30rpx 0;
		}

		.table {
			width: 100%;
			height: auto;
			display: flex;
			align-items: center;
			justify-content: center;
			border-top: 2rpx solid #242524;
			border-left: 2rpx solid #242524;
			border-right: 2rpx solid #242524;
			margin: 40rpx 0;

			&-left {
				width: 50%;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				border-right: 2rpx solid #242524;
			}

			&-left:last-child {
				border: none;
			}

			&-title {
				width: 100%;
				height: 60rpx;
				font-size: 26rpx;
				line-height: 60rpx;
				color: #242524;
				text-align: center;
				border-bottom: 2rpx solid #242524;
			}
		}
	}
</style>
