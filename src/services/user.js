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
}

const userService = new User();
export default userService;