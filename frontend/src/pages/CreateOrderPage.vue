<template>
    <div class="cart-order-page">
        <div class="page-banner">
            <div class="w-4/5 mx-auto flex items-center justify-between font-medium text-base mt-1">
                <p>Sipariş Oluştur</p>
                <RouterLink to="/cart" class="return-link" > <i class="ri-arrow-left-fill"></i> <p>Sepete Geri Dön</p></RouterLink>
            </div>
        </div>
        <div class="cart-order-wrapper">
            <div class="half-container">
                <p class="font-semibold">Sepettekiler</p>
                <table class="cart-items-table !font-normal">
                    <thead>
                        <tr height="40" class=" text-white py-2">
                            <th class="w-2/3 text-left pl-4 bg-koyukahve">Ürün Adı x Adet</th>
                            <th class="w-1/3 text-center pr-4 bg-acikkahve">Tutar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr height="40" class="bg-gray-100 text-gray-600 !font-light py-2 border-2 border-gray-200">
                            <td class="w-2/3 text-left pl-4 border-r-2 border-r-100">Çifte Kavrulmuş Badem İçi x 2</td>
                            <td class="w-1/3 text-center pr-4">600,00 TL</td>
                        </tr>
                        <tr height="40" class="bg-white text-gray-600 !font-light py-2 border-2 border-gray-200">
                            <td class="w-2/3 text-left pl-4 border-r-2 border-r-100">Çifte Kavrulmuş Badem İçi x 2</td>
                            <td class="w-1/3 text-center pr-4">600,00 TL</td>
                        </tr>
                        <tr height="40" class="bg-gray-100 text-gray-600 !font-light py-2 border-2 border-gray-200">
                            <td class="w-2/3 text-left pl-4 border-r-2 border-r-100">Çifte Kavrulmuş Badem İçi x 2</td>
                            <td class="w-1/3 text-center pr-4">600,00 TL</td>
                        </tr>
                        <tr height="40" class="bg-white text-gray-600 !font-light py-2 z-50 border-2 border-gray-200 font-bold">
                            <td class="w-2/3 text-left pl-4 border-r-2 border-r-100">Toplam Tutar</td>
                            <td class="w-1/3 text-center pr-4">2400,00 TL</td>
                        </tr>
                        
                    </tbody>
                  
                
                    
                  
                </table>

            </div>
            <div class="half-container"> 
                <p class="font-semibold">Teslimat Adresi</p>
                <form class="form-address">
                    <div class="flex flex-col gap-1 w-full">
                        <span class="pl-4">Teslim Alan</span>
                        <input name="username" type="text" class="border-2 border-gray-200 text-gray-800 placeholder:text-gray-300 px-4 py-2 rounded-lg outline-none" placeholder="Ad Soyad Giriniz..."/>
                    </div>
                    <div class="flex flex-col gap-1 w-full">
                        <span class="pl-4">Adres</span>
                        <input name="address" type="text" class="border-2 border-gray-200 text-gray-800 placeholder:text-gray-300 px-4 py-2 rounded-lg outline-none" placeholder="Adres Giriniz..."/>
                    </div>
                    <div class="flex justify-between gap-3 w-full">
                        <div class=" flex flex-col gap-1 w-1/2">
                            <span class="pl-4">İl</span>
                            <input name="province" type="text" class="border-2 border-gray-200 text-gray-800 placeholder:text-gray-300 px-4 py-2 rounded-lg outline-none" placeholder="İliniz"/>
                        </div>
                        <div class=" flex flex-col gap-1 w-1/2">
                            <span class="pl-4">İlçe</span>
                            <input name="district" type="text" class="border-2 border-gray-200 text-gray-800 placeholder:text-gray-300 px-4 py-2 rounded-lg outline-none" placeholder="İlçeniz"/>
                        </div>
                    </div>

                    <button type="submit" class="bg-yellow-500 hover:bg-yellow-700 transition ease-in duration-200 text-white px-4 py-2 rounded-lg w-1/2 self-end">
                        Sipariş Oluştur
                    </button>

                </form>
            </div>
        </div>
    </div>
   
</template>
<style scoped>

.cart-order-page{
    @apply w-full
}

.cart-order-wrapper{
    @apply w-4/5 mx-auto my-5 flex 2xl:flex-row xl:flex-row lg:flex-row flex-col gap-5 gap-y-8
}

.return-shopping{
    @apply font-bold text-yellow-500 hover:text-yellow-600 transition duration-200 ease-in flex items-center gap-1
}
.half-container{
    @apply 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full text-xs flex flex-col gap-2
}
.cart-items-table{
    @apply w-full p-3 text-xs font-normal
}
.half-container .form-address{
    @apply border-2 border-gray-200 p-6 flex flex-col gap-3
}

</style>