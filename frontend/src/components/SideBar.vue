<template>

    <!-- DEFAULT SIDEBAR -->
    <div class="sidebar-background">
        <div class="sidebar">
            <button class="close-sidebar-btn"><i class="ri-close-circle-fill"></i></button>
            <router-link to="/"> 
                <p class="header-link">Anasayfa</p>
            </router-link>
            <router-link to="/products/nuts"> 
                <p class="header-link">Kuruyemişler</p>
            </router-link>
            <router-link to="/products/fruit"> 
                <p class="header-link">Kuru Meyveler</p>
            </router-link>
            <router-link to="/products/snacks"> 
                <p class="header-link">Sağlıklı Atıştırmalıklar</p>
            </router-link>
            <router-link to="/products/oils"> 
                <p class="header-link">Bitkisel Yağlar</p>
            </router-link>
            <router-link to="/products/teas"> 
                <p class="header-link">Gurme Çaylar</p>
            </router-link>  
            <router-link to="/products/spices"> 
                <p class="header-link">Baharatlar</p>
            </router-link>
            <hr/>
        <div class="flex flex-col gap-1">
            <router-link to="/admin/home" class="h-10 flex items-center">    
                <div class="flex items-center gap-2">
                    <div class="flex items-center gap-1 relative w-10 h-auto">
                        <i class="ri-user-settings-fill text-3xl text-acikkahve border-none"  style="font-size: 28px;"></i>
                    </div>
                    <p class="font-medium text-base hover:text-koyuyesil">Profilim</p>
                </div>
            </router-link>
            <router-link to="/cart" class="h-10 flex items-center">    
                <div class="flex items-center gap-2">
                    <div class="flex items-center gap-1 relative w-10 h-auto ">
                        <i class="ri-shopping-bag-3-fill text-3xl text-acikkahve border-none"  style="font-size: 28px;"></i>
                        <p class="absolute top-0 -right-1 w-5 h-5 border-2 border-white rounded-full bg-red-500 text-white flex items-center justify-center">1</p>
                    </div>
                    <p class="font-medium text-base hover:text-koyuyesil">Sepetim</p>
                </div>
            </router-link>
            <router-link to="/my-favories" class="h-10 flex items-center">    
                <div class="flex items-center gap-2">
                    <div class="flex items-center gap-1 relative w-10 h-auto ">
                        <i class="ri-heart-fill text-3xl text-acikkahve border-none"  style="font-size: 28px;"></i>
                        <p class="absolute top-0 -right-1 w-5 h-5 border-2 border-white rounded-full bg-red-500 text-white flex items-center justify-center">1</p>
                    </div>
                    <p class="font-medium text-base hover:text-koyuyesil">Favorilerim</p>
                </div>
            </router-link>
            <router-link to="/my-orders" class="h-10 flex items-center">
                <div class="flex items-center gap-2">
                    <div class="flex items-center gap-1 relative w-10 h-auto">
                        <i class="ri-file-fill  text-3xl text-acikkahve border-none"  style="font-size: 28px;"></i>
                    </div>
                    <p class="font-medium text-base hover:text-koyuyesil">Siparişlerim</p>
                </div>
            </router-link>
        </div>


        </div>
    </div>
    
    <!-- ADMIN SIDEBAR -->
    <!-- <div class="sidebar-background">
        <div class="sidebar">
            <button class="close-sidebar-btn"><i class="ri-close-circle-fill"></i></button>
            <router-link to="/admin/home"> 
                <p class="header-link">Admin Anasayfa</p>
            </router-link>
            <router-link to="/admin/products"> 
                <p class="header-link">Ürünler</p>
            </router-link>
            <router-link to="/admin/orders"> 
                <p class="header-link">Siparişler</p>
            </router-link>
            <router-link to="/admin/customers"> 
                <p class="header-link">Müşteriler</p>
            </router-link>
            <router-link to="/admin/categories"> 
                <p class="header-link">Kategoriler</p>
            </router-link>
            <router-link to="/admin/authorization"> 
                <p class="header-link">Yetkilendirme</p>
            </router-link>  

        </div>
    </div> -->
</template>

<style scoped>
.sidebar-background{
    @apply w-screen h-screen absolute top-0 left-0 bg-siyah-90 z-50
}
.sidebar{
    @apply w-80 h-screen bg-white absolute top-0 left-0 p-10 flex flex-col gap-3
}

.close-sidebar-btn{
    @apply text-gray-600 hover:text-gray-900 transition ease-in duration-200 cursor-pointer text-xl absolute top-5 right-5

}

</style>