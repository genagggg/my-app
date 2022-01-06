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
    return instance.get(`profile/status/`+userId)
  },
  updateStatus(status){
    return instance.put(`profile/status`,{status:status})
  },
  savePhoto(photoFile){
    const formData=new FormData();
    formData.append("image", photoFile)
    return instance.put(`profile/photo`, formData,{
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  saveProfile(profile){
return instance.put(`profile`, profile);
  }
}

export const authAPI ={
    
      me(){
        return instance.get(`auth/me`)
      },
      login(email,password,rememberMe=false){
        return instance.post(`auth/login`, {email, password, rememberMe})
      },
      logout(){
        return instance.delete(`auth/login`)
      }
}






