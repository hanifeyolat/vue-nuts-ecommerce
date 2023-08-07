<template>
    <div class="admin-login-page">
        <div class="w-96 bg-white rounded-lg shadow-lg p-3 flex flex-col items-center justify">
            <img src="/images/hazel-nuts-logo.png" alt="Hazel Nuts Logo" class="w-auto h-16">
        </div>
        <div class="w-96 bg-white rounded-lg shadow-lg p-3 flex flex-col">          
            <form class="admin-login-form">
                <div class="flex flex-col mb-2">
                    <i class="ri-user-settings-fill text-yellow-800 text-center mx-auto" style="font-size: 50px;"></i>
                    <h1 class="text-yellow-800 text-xl text-center font-bold">YÖNETİM PANELİNE HOŞGELDİNİZ</h1>
                </div>
                <input name="email" type="text" class="w-full border-2 border-gray-200 text-gray-800 placeholder:text-gray-300 px-4 py-2 rounded-lg outline-none" placeholder="Email Adresiniz..."/>
                <input name="password" type="text" class="w-full border-2 border-gray-200 text-gray-800 placeholder:text-gray-300 px-4 py-2 rounded-lg outline-none" placeholder="Şifreniz..."/> 
                <button type="submit" class="w-full bg-yellow-500 hover:bg-yellow-700 transition ease-in duration-200 text-white px-4 py-2 rounded-lg">
                Giriş Yap
                </button>
                <!-- <router-link to="/admin/forgot-password" class="font-semibold text-xs text-gray-800 hover:text-red-500 transition ease-in duration-300">
                    Şifreni mi Unuttun?
                </router-link> -->

                <span class=" w-2/3 border-b-2 border-b-200"></span>

                <router-link to="/" class="font-semibold text-xs text-red-900 hover:text-red-600 transition ease-in duration-200 flex items-center justify-center gap-1">
                    <i class="ri-arrow-left-fill"></i>
                    <span class=" font-semibold">Siteye Geri Dön</span>
                </router-link>
            </form>
        </div>
    </div>
</template>
<style scoped>
.admin-login-page{
    @apply w-screen h-screen bg-koyukahve text-white absolute top-0 left-0 z-50 flex flex-col items-center justify-center gap-3
}
.admin-login-form{
    @apply w-full h-full flex flex-col items-center gap-4 p-5
}

</style>