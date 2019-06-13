<template>
  <div class="login">
    <form @submit.prevent="postNow" method="post">
      <input type="text" id="email" v-model="email"> <br/>
      <input type="password" id="password" v-model="password"> <br/>
      <button type="submit">  Login</button> <br/>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import router from '@/router'
import {Api} from '@/services/Api'
export default {
   name: 'login',
   components:{
   },
   data(){
      return {
         email:"",
         password:"",
         login : false,
         pesan: ""
      }
   },
   methods:{
      ...mapActions({
         setAuth : 'Auth/set',
      }),
      async postNow(){
        let formData = {
          "user":this.email,
          "password":this.password
        }

        let response =   await Api.post('login.php',formData)
        if(response.status == "fail"){
          this.login = true
          this.pesan = response.message
        }else{
          this.$cookie.set('token', response.auth_token, { expires: '30m' })
          let detailUser = await Api.get('status',{"token":response.auth_token})
          this.setAuth(detailUser.data)
          router.replace({
            path: '/home',
          })
        }

      }
   },
   mounted(){
      var token = this.$cookie.get('token')
      if(token != null || token != undefined){
         router.replace({
            path: '/home',
         })
      }
   }
};
</script>
