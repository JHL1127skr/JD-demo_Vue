import Vue from "vue";
import { get } from "../utils/request";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    AddCarFlag: false,
    AddCarFlag_v: false,
    needLog: true,
    CarlistFlag: true,
    LoadingFlag: false,
    CarListNum: 0,
    GoodsDelFlag: false,
    GoodsDelID: '',
    CartGoods: [],
    CarListCheckbox: [],
  },
  mutations: {
    changeLoadingFlagF(state) {
      state.LoadingFlag = false
    },
    changeLoadingFlagT(state) {
      state.LoadingFlag = true
    },
    changeAddCarFlag(state) {
      state.AddCarFlag = !state.AddCarFlag
    },
    changeAddCar_vFlag(state) {
      state.AddCarFlag_v = !state.AddCarFlag_v
    },
    needLogT(state) {
      state.needLog = true
    },
    needLogF(state) {
      state.needLog = false
    },
    CarlistFlagF(state) {
      state.CarlistFlag = false
    },
    CarlistFlagT(state) {
      state.CarlistFlag = true
    },
    async changeCarListNum(state) {
      const result = await get("/api/v1/shop_carts");
      state.CarListNum = result.data.length
    },
    async changeCarList(state) {
      const result = await get("/api/v1/shop_carts");
      state.CartGoods = result.data
    },
    GoodsDelFlagT(state, payload) {
      state.GoodsDelFlag = true
      if (payload) {
        state.GoodsDelID = payload
      }
    },
    GoodsDelFlagF(state) {
      state.GoodsDelFlag = false
    },
    Check(state, payload) {
      let idx = state.CarListCheckbox.indexOf(payload);
      //如果已经选中了，那就取消选中，如果没有，则选中
      if (idx > -1) {
        state.CarListCheckbox.splice(idx, 1);
      } else {
        state.CarListCheckbox.push(payload);
      }
    },
    CheckAll(state) {
      if (state.CarListCheckbox.length == state.CartGoods.length) {
        state.CarListCheckbox = []
      } else {
        state.CarListCheckbox = []
        state.CartGoods.forEach(v => {
          state.CarListCheckbox.push(v._id)
        })
      }

    },

  },
  actions: {
    asyncChangeAdd({ commit }) {
      commit('changeAddCar_vFlag')
      setTimeout(() => {
        commit('changeAddCar_vFlag')
      }, 2000)
    },
  },
  modules: {},
  getters: {
    isCheckAll: state => {
      if (state.CarListCheckbox.length == state.CartGoods.length) {
        if (state.CartGoods.length == 0) {
          return false
        }
        return true;
      }
      return false;
    },
    CheckMoney: state => {
      let Money = 0
      if (state.CarListCheckbox.length == 0) {
        return Money
      } else {
        state.CarListCheckbox.forEach(checkVal => {
          state.CartGoods.forEach(goodVal => {
            if (goodVal._id == checkVal) {
              Money += goodVal.quantity * (goodVal.product.price / 100)
            }
          })
        })
        return Money
      }
    },
    CheckNum: state => {
      let Num = 0
      if (state.CarListCheckbox.length == 0) {
        return Num
      } else {
        state.CarListCheckbox.forEach(checkVal => {
          state.CartGoods.forEach(goodVal => {
            if (goodVal._id == checkVal) {
              Num += goodVal.quantity
            }
          })
        })
        return Num
      }
    },
  }
});
