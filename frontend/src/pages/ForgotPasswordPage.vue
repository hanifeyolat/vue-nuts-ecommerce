<template>
    <div class="forgot-page-container">
        <div class="forgot-banner">ŞİFRENİ Mİ UNUTTUN</div>
        <form class="forgot-form">
           
            <input name="email" type="text" class="w-full border-2 border-gray-200 text-gray-800 placeholder:text-gray-300 px-4 py-2 rounded-lg outline-none" placeholder="Email Adresiniz..."/>

            <button type="submit" class="w-full bg-yellow-500 hover:bg-yellow-700 transition ease-in duration-200 text-white px-4 py-2 rounded-lg">
              Şifreni Sıfırla
            </button>

            <span class="w-full text-xs text-center font-light text-gray-500"> Gireceğiniz e-mail adresinize göndereceğimiz 6 haneli kod ile yeniden giriş yapabilirsiniz. Kodunuzu kimseyle paylaşmayınız...</span>

            <button class="font-semibold text-xs hover:text-red-700 transition ease-in duration-200">
               Mailiniz gelmediyse yeniden göndermek için tıklayın!
            </button>

            <span class=" w-2/3 border-b-2 border-b-200 -my-1"></span>

            <div class="w-full flex items-center justify-between">
                <router-link to="/login" class="font-semibold text-xs hover:text-red-700 transition ease-in duration-200 flex items-center gap-1">
                    <i class="ri-arrow-left-fill"></i>
                    <span>Giriş Yap!</span>
                </router-link>
              
                <router-link to="/register" class="font-semibold text-xs hover:text-red-700 transition ease-in duration-200 flex items-center gap-1">
                    <span>Kaydol </span>
                    <i class="ri-arrow-right-fill"></i>
                </router-link>
            </div>
        </form>
    </div>
   
</template>

<style scoped>

.forgot-page-container{
    @apply mx-auto my-10 2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-2/5 w-4/5 border-2 border-gray-200 flex flex-col
}

.forgot-banner{
    @apply w-full h-12 bg-yellow-600 text-white flex flex-col items-center justify-center
}
.forgot-form{
    @apply w-full h-full flex flex-col items-center 2xl:gap-4 xl:gap-4 lg:gap-4 gap-3 p-6 text-base md:text-xs sm:text-xs xs:text-xs
}

</style>