<template>
  <nav class="navbar is-light">
    <router-link class="" to="/" aria-label="Home" title="Home">
      <span class="menu-label">Home</span>
    </router-link>
    &nbsp;&nbsp;
    <router-link class="" to="/about" aria-label="About" title="About">
      <span class="menu-label">About</span>
    </router-link>
    <a v-on:click="Logout">&nbsp; Logout</a>
    <hr/>
  </nav>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
import router from '@/router'

export default {
  computed:{
    ...mapGetters({
      username : 'Auth/username',
    })
  },
  data: function () {
    return {
      toggled: false,
      isHidden: false
    }
  },
  methods:{
    ...mapActions({
       removeAuth : 'Auth/remove',
    }),
    Logout(){
      this.removeAuth()
      this.$cookie.delete('token');
      router.replace({
        path: '/login',
      })
    }
  },
  mounted(){
    // sementara dinonaktifkan karena api belum aktif agar bisa dirct access.
    // var token = this.$cookie.get('token')
    // if(token == null || token == undefined){
    //    router.replace({
    //       path: '/login',
    //    })
    // }
  }
};
</script>
