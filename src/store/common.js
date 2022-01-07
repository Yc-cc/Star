const state={
    token:'',
    userInfo:{},
    userRights:[]
}

const getters={
    token:state=>state.token,
    userInfo(state){
        return state.userInfo
    },
    userRights:state=>state.userRights
}

const actions={
    actionInfo({commit},userInfo){
       commit('mutationUserInfo',userInfo)
    }
}

const mutations={
    mutationToken(state,token){
        state.token=token
    },
    mutationUserInfo(state,userInfo){
        state.userInfo = userInfo
    },
    mutationRights(state,userRights){
        state.userRights = userRights
    }
}

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}