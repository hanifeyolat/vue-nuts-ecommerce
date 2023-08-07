<template>

    <!-- CUSTOMER HEADER -->
  <div class="header-container">
        <div class="first-row bg-koyuyesil ">
          <div class="first-row-container">
            <p class="2xl:flex xl:flex lg:flex hidden">500 TL ve  üzerine ÜCRETSİZ KARGO </p>
            <div class="login-area">
                <router-link to="/login" class=" dikey-cizgi border-acikyesil hover:bg-acikyesil">Giriş Yap</router-link>
                <router-link to="/register" class=" dikey-cizgi border-acikyesil hover:bg-acikyesil">Kaydol</router-link>
                <router-link to="/admin/home" class="pl-2">    
                    <div class="flex items-center gap-1 py-1 px-2 rounded-md hover:bg-yellow-500 transition ease duration-300 bg-acikyesil">
                        <i class="ri-user-settings-fill text-md"></i>
                        <p>Admin</p>
                    </div>
                </router-link>
            </div>
          </div>
        </div>
        <div class="second-row">
           <div class="row-container w-4/5">
                <router-link to="/"> 
                    <img src="/images/hazel-nuts-logo.png" alt="Hazel Nuts Logo" class="w-auto 2xl:h-14 lg:h-14 h-10 ">
                </router-link>
                <div class="relative 2xl:flex xl:flex lg:flex hidden items-center">
                    <input type="text" class="search-input" placeholder="Site İçerisinde Ara..."/>
                    <i class="ri-search-line absolute right-5 text-gray-400"></i>
                </div>
                 <div class="2xl:grid xl:grid lg:grid hidden grid-cols-3 gap-4 ">
                    <router-link to="/cart" class="pl-2">    
                        <div class="flex flex-col items-center">
                            <div class="flex items-center gap-1 relative w-10 h-auto">
                               <div class="flex flex-col gap-1 items-center">
                                    <i class="ri-shopping-bag-3-fill text-3xl text-acikkahve border-none"  style="font-size: 35px;"></i>
                                    <p class="font-medium text-xs">Sepetim</p>
                               </div>
                                <p class="cart-badge">1</p>
                            </div>
                        </div>
                    </router-link>
                    <router-link to="/my-favories" class="pr-3 pl-1.5">    
                        <div class="flex flex-col items-center">
                            <div class="flex items-center gap-1 relative w-10 h-auto">
                               <div class="flex flex-col gap-1 items-center">
                               <div class="flex flex-col gap-1 items-center" >
                                    <i class="ri-heart-fill text-3xl text-acikkahve border-none"  style="font-size: 35px;"></i>
                                    <p class="font-medium text-xs">Favoriler</p>
                                </div>
                                <p class="cart-badge">1</p>
                               </div>
                            </div>
                        </div>
                    </router-link>
                    <router-link to="/my-orders" class="pl-2">    
                        <div class="flex flex-col items-center">
                            <div class="flex flex-col items-center gap-1 relative w-10 h-auto">
                                <i class="ri-file-3-fill text-3xl text-acikkahve border-none" style="font-size: 35px;"></i>
                                <p class="font-medium text-xs">Siparişlerim</p>
                            </div>
                        </div>
                    </router-link>
                </div>
                <button class="sidebar-btn"><i class="ri-menu-fill text-koyukahve" style="font-size: 30px;"></i></button>  

           </div>
        </div>
        
        <div class="third-row">
           <div class="row-container w-4/5 ">
                <router-link to="/"> 
                    <p class="header-link">ANASAYFA</p>
                </router-link>
                <router-link to="/products/nuts"> 
                    <p class="header-link">KURUYEMİŞLER</p>
                </router-link>
                <router-link to="/products/fruit"> 
                    <p class="header-link">KURU MEYVELER</p>
                </router-link>
                <router-link to="/products/snacks"> 
                    <p class="header-link">SAĞLIKLI ATIŞTIRMALIKLAR</p>
                </router-link>
                <router-link to="/products/oils"> 
                    <p class="header-link">BİTKİSEL YAĞLAR</p>
                </router-link>
                <router-link to="/products/teas"> 
                    <p class="header-link">GURME ÇAYLAR</p>
                </router-link>  
                <router-link to="/products/spices"> 
                    <p class="header-link">BAHARATLAR</p>
                </router-link>
 
           </div>
        </div>
    </div>  
    <!-- ADMİN HEADER 1 -->
    <!-- <div class="header-container">
        <div class="first-row bg-koyukahve ">
          <div class="first-row-container">
            <p class="2xl:flex xl:flex lg:flex hidden">500 TL ve  üzerine ÜCRETSİZ KARGO </p>
            <div class="login-area">
                <router-link to="/login" class=" dikey-cizgi border-acikkahve hover:bg-yellow-500 transition ease duration-300 pr-1">Giriş Yap</router-link>
                <router-link to="/register" class=" dikey-cizgi border-acikkahve hover:bg-yellow-500 transition ease duration-300 pr-1">Kaydol</router-link>
                <router-link to="/admin/home" class="pl-2">    
                    <div class="flex items-center gap-1 py-1 px-2 rounded-md bg-acikkahve hover:bg-yellow-500 transition ease duration-300 ">
                        <i class="ri-user-settings-fill text-md"></i>
                        <p>Admin</p>
                    </div>
                </router-link>
            </div>
          </div>
        </div>
        <div class="second-row">
           <div class="row-container w-4/5">
                <router-link to="/"> 
                    <img src="/images/hazel-nuts-logo.png" alt="Hazel Nuts Logo" class="w-auto 2xl:h-14 lg:h-14 h-10 ">
                </router-link>
                
                <router-link to="/admin/home" class="2xl:flex xl:flex lg:flex hidden justify-center items-center gap-2 text-white">
                    <div class="flex items-center gap-1 p-1 bg-acikkahve px-4 py-2 rounded-lg !text-sm">
                        <i class="ri-user-settings-fill text-xl" style="font-size: 30px;"></i>
                        <p>Hanife Yolat</p>
                    </div>
                </router-link>
                <button class="sidebar-btn"><i class="ri-menu-fill text-koyukahve" style="font-size: 30px;"></i></button>  
           </div>
        </div>
        
        <div class="third-row">
           <div class="row-container w-4/5 ">
                <router-link to="/"> 
                    <p class="header-link">ADMİN ANASAYFA</p>
                </router-link>
                <router-link to="/"> 
                    <p class="header-link">ÜRÜNLER</p>
                </router-link>
                <router-link to="/"> 
                    <p class="header-link">SİPARİŞLER</p>
                </router-link>
                <router-link to="/"> 
                    <p class="header-link">MÜŞTERİLER</p>
                </router-link>
                <router-link to="/"> 
                    <p class="header-link"> KATEGORİLER</p>
                </router-link>
 
           </div>
        </div>
    </div>  -->


</template>
<style>
.header-container{
    @apply w-full h-auto z-40
}
.header-link{
    @apply text-base font-medium text-gray-800 hover:text-acikyesil transition ease-in duration-200 cursor-pointer
}
.first-row{
    @apply w-full text-white flex justify-between items-center text-xs h-8
}
.first-row-container{
    @apply  mx-auto py-1 flex 2xl:justify-between xl:justify-between lg:justify-between justify-end items-center w-4/5
}
.row-container{
    @apply  mx-auto py-1 flex items-center justify-between w-4/5
}
.login-area{
    @apply flex items-center gap-1 text-xs
}
.dikey-cizgi{
    @apply h-full border-r-2 px-2 p-1 transition duration-200
}
.second-row{
    @apply border-b-2 border-gray-300 flex items-center justify-center py-2  2xl:h-24 xl:h-24 lg:h-24 h-20 bg-white 
    
}
.search-input{
    @apply w-80 h-10 rounded-full border-2 border-gray-200 px-4 text-sm
}
.search-input::placeholder{
    @apply text-sm
}

.sidebar-btn{
    @apply w-10 h-10 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition duration-200 ease-in rounded-lg cursor-pointer 2xl:hidden xl:hidden lg:hidden flex items-center justify-center
}
.cart-badge{
    @apply  text-white flex items-center justify-center absolute -top-1 -right-4 w-6 h-6 border-white border-2 bg-red-500 rounded-full
}
.third-row{
    @apply  2xl:flex xl:flex lg:flex hidden items-center justify-center py-1 h-10 bg-white border-b-2 border-gray-300
}

</style>