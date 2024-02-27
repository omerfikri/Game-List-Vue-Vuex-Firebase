import { ref } from "vue";
import { db } from "@/firebase/config.js";
import { collection as Collection, onSnapshot } from "firebase/firestore";

const getDocument = (collection) => {
  const documents = ref(null);
  const error = ref(null);

  let collectionRef = Collection(db, collection);

  onSnapshot(
    collectionRef,
    (snap) => {
      let results = [];
      snap.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });
      documents.value = results;
      error.value = null;
    },
    (err) => {
      console.log(err.message);
      documents.value = [];
      error.value = "Failed Get Documents ";
    }
  );

  return { error, documents };
};

export default getDocument;
