<template>
  <div class="home">
    <div>
      <h1>Game List</h1>
      <transition appear @before-enter="beforeEnter" @enter="enter">
        <div>
          <p>Log in for add game in list.</p>
          <button @click="handleLogin">Log In As Guest</button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import Login from "@/composables/Login";
  import { useRouter } from "vue-router";
  import gsap from "gsap";
  export default {
    setup() {
      const router = useRouter();
      const { loginProcess } = Login();

      const handleLogin = async () => {
        await loginProcess();
        router.push({ name: "Create" });
      };

      const beforeEnter = (el) => {
        el.style.transform = "translateY(200px)";
        el.style.opacity = 0;
      };

      const enter = (el, done) => {
        gsap.to(el, {
          duration: 2,
          y: 0,
          opacity: 1,
          ease: "back",
          onComplete: done,
        });
      };
      return { handleLogin, beforeEnter, enter };
    },
  };
</script>

<style scoped>
  button {
    background-color: #fd7272;
  }
</style>
