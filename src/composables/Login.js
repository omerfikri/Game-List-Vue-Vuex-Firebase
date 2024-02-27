import { ref } from "vue";
import { auth } from "@/firebase/config";
import { signInAnonymously } from "firebase/auth";

const error = ref(null);

const loginProcess = async () => {
  error.value = null;

  try {
    const res = await signInAnonymously(auth);
    error.value = null;

    return res;
  } catch (error) {
    console.log(error.message);
    error.value = "Login Failed";
  }
};

const Login = () => {
  return { loginProcess, error };
};

export default Login;
