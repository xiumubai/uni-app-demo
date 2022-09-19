<template>
  <view class="content">
    <text class="title uni-color-primary">首页</text>
    <uni-badge text="1"></uni-badge>
    <uni-badge text="2" type="success" @click="bindClick"></uni-badge>
    <uni-badge text="3" type="primary" :inverted="true"></uni-badge>
  </view>
</template>

<script>
export default {
  name: "index",
};
</script>

<style lang="scss" scoped>
.content {
  .title {
    color: $uni-color-primary;
  }
}
</style>