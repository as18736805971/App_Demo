<template>
	<view class="base-rich-text">
		<!-- #ifdef H5 -->
		<view v-html="handlerEditor()"></view>
		<!-- #endif -->
		<!-- #ifndef H5 -->
		<!--<wx-parse :content="item.content"></wx-parse>-->
		<rich-text :nodes="handlerEditor()"></rich-text>
		<!-- #endif -->
	</view>
</template>
<script>
	export default {
		name: 'BaseRichText',
		props: {
			content: {
				type: [String, Object],
				default: ''
			}
		},
		methods: {
			handlerEditor() {
				return CommonTool.html2Nodes(this.content)
			}
		}
	}
</script>
<style lang="scss">
	@import "../../style/base";
	@import "../../style/mixin";

	.base-rich-text {
		/deep/ p {
			width: 100%;
		}

		/deep/ img {
			width: 100%;
			vertical-align: middle;
		}
	}
</style>
