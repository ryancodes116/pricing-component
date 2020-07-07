import Vue from 'vue';
import Vuex from 'vuex';
import pricing from './modules/pricing';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    pricing,
  },
});
