import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
        state,
        mutations,
        getters: {
            doubleCity(state) {
                return state.city + '' + state.city
            }
        }
    })
    // "city": "南京",  
    // actions: {
    //     changeCity(ctx, city) {
    //         ctx.commit('changeCity', city)

//     }
// },

//管理后台系统用module  文件进行拆分