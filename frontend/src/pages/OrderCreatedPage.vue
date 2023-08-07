<template>
    <div class="cart-order-page">
        <div class="page-banner">
            <div class="w-4/5 mx-auto flex items-center justify-between font-medium text-base mt-1">
                <p>Siparişiniz Oluşturuldu</p>
                <RouterLink to="/" class="return-link" > <i class="ri-arrow-left-fill"></i> <p>Anasayfaya Git</p></RouterLink>
            </div>
        </div>
        <div class="cart-order-wrapper">
        
                <div class="order-successfull-cart">
                    <i class="ri-checkbox-circle-line text-yellow-600" style="font-size: 130px;"></i>
                    <span>TS2543843321 KODLU SİPARİŞİNİZ BAŞARIYLA OLUŞTURULDU.</span>
                    <RouterLink to="/customer/orders"
                                class="font-normal text-yellow-500 hover:text-yellow-600 transition duration-200 ease-in pt-2"> 
                              İncelemek İçin Tıklayınız
                    </RouterLink>
                </div>

        </div>
    </div>
   
</template>
<style scoped>

.cart-order-page{
    @apply w-full
}
.cart-order-wrapper{
    @apply w-4/5  mx-auto my-5 flex gap-5
}

.return-shopping{
    @apply font-bold text-yellow-500 hover:text-yellow-600 transition duration-200 ease-in flex items-center gap-1
}

.order-successfull-cart{
    @apply 2xl:w-3/5 xl:w-3/5 lg:w-3/5 md:w-3/5 w-full p-10 pt-0 flex flex-col items-center justify-center border-2 border-gray-200 mx-auto text-center
}



</style>