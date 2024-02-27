import { ref } from "vue";
import { auth } from "@/firebase/config.js";
import { onAuthStateChanged } from "firebase/auth";

const user = ref(auth.currentUser);

onAuthStateChanged(auth, (k) => {
  user.value = k;
});

const getUser = () => {
  return { user };
};

export default getUser;
