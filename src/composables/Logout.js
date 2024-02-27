import { ref } from "vue";
import { auth } from "@/firebase/config";
import { signOut } from "firebase/auth";

const error = ref(null);

const logoutProcess = async () => {
  error.value = null;

  try {
    const res = await signOut(auth);
    error.value = null;
  } catch (error) {
    console.log(error.message);
    error.value = "Logout Failed";
  }
};

const Logout = () => {
  return { logoutProcess, error };
};

export default Logout;
