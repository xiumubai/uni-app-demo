<template>
  <view class="content"> 我的 </view>
</template>

<script>
import userService from "@/services/user";

export default {
  name: "user",
  onLoad() {
    this.login();
  },
  methods: {
    async login() {
      console.log(1);
      try {
        const res = await userService.login({
          code: "123",
        });
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.content {
  background: red;
}
</style>