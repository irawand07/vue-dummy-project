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
         console.log('sdsds');
         if(this.password == 'coba' && this.email == "coba"){
            this.$cookie.set('token', "token_coba", { expires: '30m' })
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
