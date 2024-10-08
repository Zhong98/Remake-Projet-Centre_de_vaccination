<template>
  <div class="container">

    <div class="msg">
      <h1>404</h1>
      <h2>Oops, Seems Like You Got Lost In The Universe</h2>
    </div>

    <div class="back-btn" @click="backHome">
      <i class="iconfont icon-fanhuijiantou"/>
      <span>Back to Home</span>
    </div>

  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const backHome = () => {
  router.push("/");
}
</script>

<style scoped lang="scss">
.container {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  color: aliceblue;
  background: url("/404background.png") no-repeat;
  background-size: cover;
}

.msg {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  h1 {
    font-size: 1rem;
  }

  h2 {
    font-size: .2rem;
  }
}

.back-btn {
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  font-size: 22px;
  background: #E26C56;
  border-radius: 20px;
  cursor: pointer;
  transition: transform 0.15s, background-color 0.15s;
  position: relative;

  i {
    margin-right: 10px;
    transition: transform 0.15s;
  }

  span {
    margin-left: 10px;
    transition: transform 0.15s;
  }
;
}

.back-btn:hover {
  transform: scale(1.2); /* 使用 scale 代替 padding 和 font-size 的直接调整 */
  background-color: #d95440; /* 改变背景色以产生视觉变化 */

  i {
    transform: translateX(-10px);
  }

  span {
    transform: translateX(10px);
  }
}
</style>