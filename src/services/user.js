import Service from '@/utils/http';

class User extends Service {
  /**
   * @description: 小程序登陆接口
   * @param {*} options
   * @return {*}
   */
  login(options = {}) {
    console.log(123);
    options.url = `/api/ucenter/webChat/callback?code=${options.code}`;
    return this.get(options);
  }
  /**
   * @description: 获取用户信息
   * @param {*} options
   * @return {*}
   */
  getLoginInfo(options = {}) {
    options.url = `/api/ucenter/member/auth/getLoginInfo`;
    return this.get(options);
  }
  /**
   * @description: 更新用户信息
   * @param {*} options
   * @return {*}
   */
  updateMember(options = {}) {
    options.url = `/api/ucenter/member/auth/updateMember`;
    return this.post(options);
  }
}

const userService = new User();
export default userService;