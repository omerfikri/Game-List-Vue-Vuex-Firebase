import { createStore } from "vuex";
import getDocument from "@/composables/getDocument";
import processDocument from "@/composables/processDocument";

const { error, documents } = getDocument("games");
const { hata, add, delete1 } = processDocument("games");

export default createStore({
  state: {
    games: documents,
  },
  mutations: {
    addMutation(state, game) {
      let newGame = {
        gameName: game,
      };
      add(newGame);
    },
    deleteMutation(state, id) {
      delete1(id);
    },
  },
  actions: {
    addGameAction(context, game) {
      context.commit("addMutation", game);
    },
    deleteGameAction(context, id) {
      context.commit("deleteMutation", id);
    },
  },
  modules: {},
});
