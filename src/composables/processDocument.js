import { db } from "@/firebase/config";
import {
  collection as Collection,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { ref } from "vue";

const processDocument = (collection) => {
  const hata = ref(null);

  const add = async (doc) => {
    hata.value = null;

    try {
      const res = await addDoc(Collection(db, collection), doc);
      return res;
    } catch (hata) {
      hata.value = "Failed Add Document";
    }
  };

  const delete1 = async (id) => {
    hata.value = null;
    try {
      let docRef = doc(db, collection, id);
      const res = await deleteDoc(docRef);
      return res;
    } catch (hata) {
      hata.value = "Failed Delete Document";
    }
  };
  return { hata, add, delete1 };
};

export default processDocument;
