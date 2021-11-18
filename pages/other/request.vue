<template>
	<view class="page-index">加载数据示例</view>
</template>

<script>
	export default {
		data() {
			return {
        nodata: false,
        params: {
          page: 1,
        }
      }
		},
		onLoad() {
			uni.$off('handleMethods') // 清除全局方法
			uni.$on('handleMethods', (res) => {
				console.log(res, '获取到的数据') // 获取全局方法数据
			})
			let params = {
				id: 1,
			}
			setTimeout(() => {
				uni.$emit('handleMethods', params) // 创建全局方法 并传递数据
			}, 300)
		},
		onPullDownRefresh() {
			//下拉刷新
			let that = this
			that.format();
		},
		onReachBottom() {
			//加载下一页
			if (!this.nodata) {
				this.params.page++;
				this.request();
			}
		},
		methods: {
			// 格式化请求
			format() {
				this.params.page = 1;
				this.request();
			},
			// 请求列表数据
			request() {
				var that = this;
				getApp().Req.get('Delivery_oderList', that.params, function(res) {
					if (res.code == 200) {
						if (that.params.page == 1) {
							that.order_list = [];
						}
						that.order_list = that.order_list.concat(res.data);
						if (res.data.length == 0) {
							that.nodata = true;
						} else {
							that.nodata = false;
						}
						uni.hideLoading();
					} else {
						uni.hideLoading();
						uni.stopPullDownRefresh();
					}
				})
			},
		}
	}
</script>

<style lang="scss">

</style>
