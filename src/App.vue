<template>
  <div v-if="user" class="nav">
    <router-link :to="{ name: 'Create' }">Add Game</router-link> |
    <router-link :to="{ name: 'Games' }">Games</router-link>
    <button @click="handleLogout">Log Out</button>
  </div>
  <div v-else class="nav">
    <router-link :to="{ name: 'Home' }">Main Page</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link>
  </div>
  <router-view />
</template>

<script>
  import getUser from "./composables/getUser";
  import Logout from "@/composables/Logout";
  import { useRouter } from "vue-router";

  export default {
    setup() {
      const { user } = getUser();
      const { logoutProcess } = Logout();

      const router = useRouter();

      const handleLogout = async () => {
        await logoutProcess();
        router.push({ name: "Home" });
      };

      return { user, handleLogout };
    },
  };
</script>

<style>
  body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin: 0;
    background: #f7d794;
  }
  .nav {
    padding: 30px;
  }
  .nav a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
  }
  .nav a.router-link-exact-active {
    color: #c44569;
  }

  button {
    border: 1px solid #ee5253;
    border-radius: 10px;
    background-color: #ee5253;
    padding: 7px;
    cursor: pointer;
    outline: none;
    margin-left: 15px;
  }
</style>
