<template>
    <div class="admin-forgot-page">
        <router-link to="/" class="flex items-center gap-1 border-b-2 border-b-acikkahve text-white hover:text-yellow-200 hover:border-yellow-200 transition ease-in duration-300 "> 
            <i class="ri-arrow-left-fill"></i>
            <p>Siteye Geri Dön</p>
        </router-link>
        <div class="w-96 bg-white rounded-lg shadow-lg p-3 flex flex-col items-center justify">
            <img src="/images/hazel-nuts-logo.png" alt="Hazel Nuts Logo" class="w-auto h-16">
        </div>
        <div class="w-96 bg-white rounded-lg shadow-lg p-3 flex flex-col">          
            <form class="admin-forgot-form">
                <div class="flex flex-col mb-2">
                    <i class="ri-user-settings-fill text-yellow-800 text-center mx-auto" style="font-size: 50px;"></i>
                    <h1 class="text-yellow-800 text-xl text-center font-bold">YÖNETİM PANELİNE HOŞGELDİNİZ</h1>
                </div>
                <input name="email" type="text" class="w-full border-2 border-gray-200 text-gray-800 placeholder:text-gray-300 px-4 py-2 rounded-lg outline-none" placeholder="Email Adresiniz..."/>
                <button type="submit" class="w-full bg-yellow-500 hover:bg-yellow-700 transition ease-in duration-200 text-white px-4 py-2 rounded-lg">
                Yeni Şifre Gönder
                </button>

                <span class="w-full text-xs text-center font-light text-gray-500"> Gireceğiniz e-mail adresinize göndereceğimiz 6 haneli kod ile yeniden giriş yapabilirsiniz. Kodunuzu kimseyle paylaşmayınız...</span>

                <button class="font-semibold text-xs text-gray-800 hover:text-red-700 transition ease-in duration-200">
                Mailiniz gelmediyse yeniden göndermek için tıklayın!
                </button>

                <span class=" w-2/3 border-b-2 border-b-200 -my-1"></span>

                <div class="w-full flex items-center justify-between text-gray-800">
                    <router-link to="/admin/login" class="font-semibold text-xs hover:text-red-700 transition ease-in duration-200 flex items-center gap-1">
                        <i class="ri-arrow-left-fill"></i>
                        <span>Giriş Yap!</span>
                    </router-link>
                
                    <router-link to="/admin/register" class="font-semibold text-xs hover:text-red-700 transition ease-in duration-200 flex items-center gap-1">
                        <span>Kaydol </span>
                        <i class="ri-arrow-right-fill"></i>
                    </router-link>
                </div>
            </form>
        </div>
    </div>
</template>
<style scoped>
.admin-forgot-page{
    @apply w-screen h-screen bg-koyukahve text-white absolute top-0 left-0 z-50 flex flex-col items-center justify-center gap-3
}
.admin-forgot-form{
    @apply w-full h-full flex flex-col items-center gap-4 p-5
}

</style>