<template>
  <div class="w-screen min-h-screen">
      <div class="flex flex-col items-center">
        <MainHeader/>
        <!-- <SideBar/> -->
          <router-view>


          </router-view>
        <br/>
        <MainFooter/>
      </div>
  </div>

</template>

<script>
import "./index.css"
import MainHeader from "./components/MainHeader.vue"
import MainFooter from "./components/MainFooter.vue"
//import SideBar from "./components/SideBar.vue";

export default {
  name: 'App',
  components: {
    MainHeader,
    MainFooter,
   // SideBar
}
}
</script>

<style>




</style>
