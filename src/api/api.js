import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{"API-KEY": "7e89243d-cde0-4bfb-923d-fddaaf366d6e"}
})

export const usersAPI = {
    getUsers(currentPage=1, pageSize=10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`
   ).then(response=>{
       return response.data;
   });
   },

   follow(userId){
    return instance.post(`follow/${userId.id}`)
},

   unfollow(userId){
 return instance.delete(`follow/${userId.id}`)
   },
   getProfile(userId){
     console.warn('Obsolete method please profileAPI')
  return profileApi.getProfile(userId);
    }
  }
export const profileApi={
  getProfile(userId){
    return instance.get(`profile/`+userId)
  },
  getStatus(userId){
    return instance.get(`status/`+userId)
  },
  updateStatus(status){
    return instance.put(`status`,{status:status})
  }
}

export const authAPI ={
    
      me(){
        return instance.get(`auth/me`)
      }
}






