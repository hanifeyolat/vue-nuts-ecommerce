<template>
    <div class="admin-register-page">
        <router-link to="/" class="flex items-center gap-1 border-b-2 border-b-acikkahve text-white hover:text-yellow-200 hover:border-yellow-200 transition ease-in duration-300 "> 
            <i class="ri-arrow-left-fill"></i>
            <p>Siteye Geri Dön</p>
        </router-link>
        <div class="w-96 bg-white rounded-lg shadow-lg p-3 flex flex-col items-center justify">
            <img src="/images/hazel-nuts-logo.png" alt="Hazel Nuts Logo" class="w-auto h-16">
        </div>
        <div class="w-96 bg-white rounded-lg shadow-lg p-3 flex flex-col">
            <!-- <div class="flex justify-center items-center">
                <img src="/images/hazel-nuts-logo.png" alt="Hazel Nuts Logo" class="w-auto h-32">
            </div> -->
          
            <form class="admin-register-form">
                <div class="flex flex-col mb-2">
                    <i class="ri-user-settings-fill text-yellow-800 text-center mx-auto" style="font-size: 50px;"></i>
                    <h1 class="text-yellow-800 text-xl text-center font-bold">YÖNETİM PANELİNE HOŞGELDİNİZ</h1>
                </div>
                <input name="email" type="text" class="w-full border-2 border-gray-200 text-gray-800 placeholder:text-gray-300 px-4 py-2 rounded-lg outline-none" placeholder="Adınız Soyanız..."/>
                <input name="email" type="text" class="w-full border-2 border-gray-200 text-gray-800 placeholder:text-gray-300 px-4 py-2 rounded-lg outline-none" placeholder="Email Adresiniz..."/>
                <input name="password" type="text" class="w-full border-2 border-gray-200 text-gray-800 placeholder:text-gray-300 px-4 py-2 rounded-lg outline-none" placeholder="Şifreniz..."/> 
                <input name="password" type="text" class="w-full border-2 border-gray-200 text-gray-800 placeholder:text-gray-300 px-4 py-2 rounded-lg outline-none" placeholder="Şifreniz Tekrar..."/> 
                <button type="submit" class="w-full bg-yellow-500 hover:bg-yellow-700 transition ease-in duration-200 text-white px-4 py-2 rounded-lg">
                      Kaydol
                </button>
                <router-link to="/admin/forgot-password" class="font-semibold text-xs text-gray-800 hover:text-red-500 transition ease-in duration-300">
                    Şifreni mi Unuttun?
                </router-link>
            </form>
        </div>
    </div>
</template>
<style scoped>
.admin-register-page{
    @apply w-screen h-screen bg-acikkahve text-white absolute top-0 left-0 z-50 flex flex-col items-center justify-center gap-3
}
.admin-register-form{
    @apply w-full h-full flex flex-col items-center gap-4 p-5
}

</style>