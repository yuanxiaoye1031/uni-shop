export default{
  namespaced:true,
  actions:{
    updateAddress(context,address){
      context.commit('UPDATE_ADDRESS',address)
      context.commit('SAVE_ADDRESS_TO_STORAGE')
    },
    updateUserInfo(context,userInfo){
      console.log('action',userInfo)
      context.commit('UPDATE_USERINFO',userInfo)
      context.commit('SAVE_USERINFO_TO_STORAGE')
    },
    updateUserToken(context,token){
      context.commit('UPDATE_USER_TOKEN',token)
      context.commit('SAVE_TOKEN_TO_STORAGE')
    },
    clearUserInfo(context){
      context.commit('CLEAR_USER_INFO')
    },
    updateRedirectInfo(context,info){
      context.commit('UPDATE_REDIRECT_INFO',info)
    }
  },
  state:{
    address: JSON.parse(uni.getStorageSync('userAddress') || '{}') ,
    token: uni.getStorageSync('token') || '',
    userinfo:JSON.parse(uni.getStorageSync('userinfo') || '{}'),
    redirectInfo:null
  },
  mutations:{
   UPDATE_ADDRESS(state,address){
     state.address=address
   },
   SAVE_ADDRESS_TO_STORAGE(state){
     uni.setStorageSync('userAddress',JSON.stringify(state.address))
   },
   UPDATE_USERINFO(state,userInfo){
     console.log('mutation',userInfo)
     state.userinfo=userInfo
   },
   SAVE_USERINFO_TO_STORAGE(state){
     uni.setStorageSync('userinfo',JSON.stringify(state.userinfo))
   },
   UPDATE_USER_TOKEN(state,token){
     state.token=token
   },
   SAVE_TOKEN_TO_STORAGE(state){
     uni.setStorageSync('token',JSON.stringify(state.token))
   },
   CLEAR_USER_INFO(state){
     state.userinfo={}
     state.address={}
     state.token=''
     uni.setStorageSync('userAddress',JSON.stringify({}))
     uni.setStorageSync('userinfo',JSON.stringify({}))
     uni.setStorageSync('token','')
   },
   UPDATE_REDIRECT_INFO(state,info){
     state.redirectInfo=info
   }
  },
  getters:{
    fuzzyAddr(state){
      return state.address.provinceName+state.address.cityName+state.address.countyName
    },
  }
}