<template>
    <view class="no-data" :class="{'inline': inline}">
        <view class="icon" :class="type"></view>
        <view class="text"><slot name="default">{{type === 'nodata' ? title || '暂无数据' : title}}</slot></view>
    </view>
</template>

<script>
    export default {
        name: "BaseNoData",
        props: {
            title: {
                type: String,
                default: ''
            },
            type: {     // nodata loading error
                type: String,
                default: 'nodata'
            },
            inline: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss">
    @import "../../style/base";
    @import "../../style/mixin";
    .no-data {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .icon {
            width: 480rpx;
            height: 360rpx;
            &.nodata {
                @include setFrameworkBackground('image/no-data');
            }
            &.loading {
                @include setFrameworkBackground('image/no-data-apply');
            }
            &.error {
                @include setFrameworkBackground('image/no-data-error');
            }
        }
        .text {
            font-size: 28rpx;
            color: #999;
            margin-bottom: 40%;
        }
        &.inline {
            position: static;
            .text {
                margin-bottom: 0;
            }
        }
    }
</style>
