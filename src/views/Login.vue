<template>
  <div>
    <div class="login_form">
      <input
        type="text"
        class="qxs-ic_user qxs-icon"
        placeholder="用户名"
        v-model="userName"
      />
      <input
        type="text"
        class="qxs-ic_password qxs-icon"
        placeholder="密码"
        v-model="password"
      />
      <button
        class="login_btn"
        @click="login"
        type="primary"
        round
        :loading="isBtnLoading"
      >
        登录
      </button>
    </div>
  </div>
</template>

<script>
import { setToken } from "@/utils/auth.js";
export default {
  data() {
    return {
      userName: "",
      password: "",
      isBtnLoading: false
    };
  },
  created() {
    if (
      JSON.parse(localStorage.getItem("user")) &&
      JSON.parse(localStorage.getItem("user")).userName
    ) {
      this.userName = JSON.parse(localStorage.getItem("user")).userName;
      this.password = JSON.parse(localStorage.getItem("user")).password;
    }
  },
  computed: {
    btnText() {
      if (this.isBtnLoading) return "登录中...";
      return "登录";
    }
  },
  methods: {
    login() {
      if (!this.userName) {
        console.log("请输入用户名");
        return;
      }
      if (!this.password) {
        console.log("请输入密码");
        return;
      }
      //这里假设登录成功，这里应该有一个登录接口，登录成功后才能执行下面两行代码
      //setToken中入参值也应该是登录接口返回的token值
      setToken("1111111111111111111111111");
      this.$router.push({ path: "/" });
    }
  }
};
</script>
<style>
.inner_label {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  height: 50px;
}
.qxs-icon {
  height: 40px;
  width: 90%;
  margin-bottom: 5px;
  padding-left: 10%;
  border: 0;
  border-bottom: solid 1px lavender;
}
.login_form {
  padding-top: 10%;
  padding-left: 10%;
  padding-right: 10%;
}
.qxs-ic_user {
  background: url("../assets/login/ic_user.png") no-repeat;
  background-size: 13px 15px;
  background-position: 3%;
}
.qxs-ic_password {
  background: url("../assets/login/ic_password.png") no-repeat;
  background-size: 13px 15px;
  background-position: 3%;
  margin-bottom: 20px;
}
.login_logo {
  height: 100%;
}
.login_btn {
  width: 100%;
  font-size: 16px;
  background: -webkit-linear-gradient(
    left,
    #000099,
    #2154fa
  ); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(
    right,
    #000099,
    #2154fa
  ); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(
    right,
    #000099,
    #2154fa
  ); /* Firefox 3.6 - 15 */
  background: linear-gradient(to right, #000099, #2154fa); /* 标准的语法 */
  filter: brightness(1.4);
}
</style>
