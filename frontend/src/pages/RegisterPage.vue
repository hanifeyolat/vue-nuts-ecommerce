<template>
    <div class="register-page-container">
        <div class="register-banner">KAYDOL</div>
        <form class="register-form">
            <input name="username" type="text" class="w-full border-2 border-gray-200 text-gray-800 placeholder:text-gray-300 px-4 py-2 rounded-lg outline-none" placeholder="Adınız..."/>
            <input name="email" type="text" class="w-full border-2 border-gray-200 text-gray-800 placeholder:text-gray-300 px-4 py-2 rounded-lg outline-none" placeholder="Email Adresiniz..."/>
            <input name="password" type="text" class="w-full border-2 border-gray-200 text-gray-800 placeholder:text-gray-300 px-4 py-2 rounded-lg outline-none" placeholder="Şifreniz..."/> 
            <input name="passwordAgain" type="text" class="w-full border-2 border-gray-200 text-gray-800 placeholder:text-gray-300 px-4 py-2 rounded-lg outline-none" placeholder="Şifreniz Tekrar..."/> 
            <button type="submit" class="w-full bg-yellow-500 hover:bg-yellow-700 transition ease-in duration-200 text-white px-4 py-2 rounded-lg">
               Kaydol
            </button>
            <button type="submit"
                    class="w-full bg-red-500 hover:bg-red-700 transition ease-in duration-200 text-white px-4 py-2 rounded-lg flex items-center justify-center ">
                <div class="flex items-center justify-center gap-1 mx-auto">
                    <i class="ri-google-fill"></i>
                   <span>Google İle Kaydol</span>
                </div>
            </button>
       

            <router-link to="/login" class="font-semibold text-xs hover:text-red-700 transition ease-in duration-200">
                Hesabın Var Mı?
                <span class="text-red-700 font-semibold">Giriş Yap</span>
            </router-link>
        </form>
    </div>
   
</template>

<style scoped>

.register-page-container{
    @apply mx-auto my-10 2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-2/5 w-4/5 border-2 border-gray-200 flex flex-col
}

.register-banner{
    @apply w-full h-12 bg-yellow-600 text-white flex flex-col items-center justify-center
}
.register-form{
    @apply  w-full h-full flex flex-col items-center 2xl:gap-4 xl:gap-4 lg:gap-4 gap-3 p-6 text-base md:text-xs sm:text-xs xs:text-xs
}

</style>