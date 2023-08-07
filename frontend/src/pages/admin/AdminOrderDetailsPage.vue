<template>
    <div class="my-order-details-page">
        <div class="page-banner">
            <div class="w-4/5 mx-auto flex items-center justify-between font-medium text-base mt-1">
                <p>Sipariş Detayları</p>
               <div class="flex gap-3">
                <RouterLink to="/admin/orders" class="return-link" > <i class="ri-arrow-left-fill"></i> <p> Geri Dön</p></RouterLink>
               </div>
            </div>
        </div>
        <div class="order-area-wrapper">
            <div class="my-order-container">
                <div class="order-top-container ">
                    <div class="w-1/2 sm:w-full xs:w-full h-auto flex flex-col gap-1">
                        <span class="!text-lg text-koyukahve border-b-2 border-koyukahve pb-1 mb-2 w-2/4">
                            Fatura Bilgileri
                        </span>
                        <div class="flex gap-1">
                            <span class="font-semibold"> Adı Soyadı:</span> 
                            <span>Hanife Yolat</span>
                        </div>
                        <div class="flex gap-1">
                            <span class="font-semibold"> Telefon Numarası:  </span> 
                            <span>05347555582666</span>
                        </div>
                        <div class="flex gap-1">
                            <span class="font-semibold"> Mail Adresi:  </span> 
                            <span>hanifmail@hotmail.com</span>
                        </div>
                        <div class="flex gap-1">
                            <span class="font-semibold"> Sipariş ID:  </span> 
                            <span>ASFUAIDŞKLASLDJAK</span>
                        </div>
                        <div class="flex flex-col gap-1">
                            <span class="font-semibold"> Teslimat Adresi:   </span> 
                            <span>Cebeci Mah. 2494 sk. No:48/3 Sultangazi/İstanbul</span>
                        </div>
                    </div>
                    <div class="w-1/2 h-auto my-auto flex justify-end items-center static sm:absolute xs:absolute top-1 right-1">
                        <img src="/images/hazel-nuts-logo.png" alt="Hazel Nuts Logo" class="w-auto max-h-24 h-auto 2xl:flex xl:flex lg:flex md:flex hidden">
                        <img src="/images/hazel-nuts-logo-2.png" alt="Hazel Nuts Logo" class="sm:h-20 xs:h-20 2xl:hidden xl:hidden lg:hidden md:hidden flex">
                    </div>
                </div>
                <div class="order-bottom-container ">
                        <table class="cart-items-table">
                            <thead class="py-4">
                                <tr class="text-white bg-acikkahve">
                                    <th height="40" class="w-5/12 text-left pl-4">Ürün Adı</th>
                                    <th height="40" class="w-4/12 text-left pl-4">Adet x Fiyat</th>
                                    <th height="40" class="w-3/12 text-left pl-4">Tutar</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="text-gray-600 py-2 px-2 border-b-2 border-gray-200">
                                    <td class="w-5/12 text-left py-3 px-2">
                                        <div class="flex items-center gap-2">
                                            <div class="h-full w-16 flex md:hidden sm:hidden xs:hidden">
                                                <img src="https://static.ticimax.cloud/12901/Uploads/UrunResimleri/thumb/blue-flowers-earl-grey-mavi-malva-ebeg-b91b-e.jpg" alt="asdsad" class=" object-contain"/>
                                            </div>
                                            <p>Çifte Kavrulmuş Badem İçi</p>
                                        </div>
                                    </td>
                                    <td height="40" class="w-4/12 text-left pl-4">2 x 400,00 TL</td>
                                    <td height="40" class="w-3/12 text-left pl-4">800,00 TL </td>
                                </tr>
                                <tr class="bg-gray-100 py-2 px-2 text-gray-600 border-b-2 border-gray-200">
                                    <td class="w-5/12 text-left py-3 px-2">
                                        <div class="flex items-center gap-2">
                                            <div class="h-full w-16 flex md:hidden sm:hidden xs:hidden">
                                                <img src="https://static.ticimax.cloud/12901/Uploads/UrunResimleri/thumb/blue-flowers-earl-grey-mavi-malva-ebeg-b91b-e.jpg" alt="asdsad" class=" object-contain"/>
                                            </div>
                                            <p>Çifte Kavrulmuş Badem İçi</p>
                                        </div>
                                    </td>
                                    <td height="40" class="w-4/12 text-left pl-4">2 x 400,00 TL</td>
                                    <td height="40" class="w-3/12 text-left pl-4">800,00 TL </td>
                                </tr>
                                <tr class="text-gray-600 py-2 px-2 border-b-2 border-gray-200">
                                    <td class="w-5/12 text-left py-3 px-2">
                                        <div class="flex items-center gap-2">
                                            <div class="h-full w-16 flex md:hidden sm:hidden xs:hidden">
                                                <img src="https://static.ticimax.cloud/12901/Uploads/UrunResimleri/thumb/blue-flowers-earl-grey-mavi-malva-ebeg-b91b-e.jpg" alt="asdsad" class=" object-contain"/>
                                            </div>
                                            <p>Çifte Kavrulmuş Badem İçi</p>
                                        </div>
                                    </td>
                                    <td height="40" class="w-4/12 text-left pl-4">2 x 400,00 TL</td>
                                    <td height="40" class="w-3/12 text-left pl-4">800,00 TL </td>
                                </tr>
                            </tbody>
                        </table>   
                        <div class="subtotal-container">
                            <div class="subtotal-header">Ödeme Toplamı</div>
                            <div class="subtotal-footer">
                                    <div class="w-full flex items-center justify-between">
                                        <p>Ara Toplam:</p>
                                        <p>&#8378; 600,00</p>
                                    </div>
                                    <div class="w-full flex items-center justify-between">
                                        <p>KDV:</p>
                                        <p>&#8378; 60,00</p>
                                    </div>
                                    <hr/>
                                    <div class="w-full flex items-center justify-between  font-semibold">
                                        <p>Sipariş Tutarı:</p>
                                        <p>&#8378; 660,00</p>
                                    </div>
                            </div>
                        </div>     
                </div>

            </div>
           <div class="subtotal-container h-52">
                <div class="subtotal-header">Sipariş Durumunu Güncelle</div>
                <div class="subtotal-footer !h-20">
                    <div class="input-select-wrapper border-2 border-gray-100 w-52 mx-auto">
                        <select class="filter-select-input text-xs text-gray-400 w-full">
                            <option>Hazırlanıyor</option>
                            <option>Kargoya Verildi</option>
                            <option>Kargo Dağıtımda</option>
                            <option>Teslim Edildi</option>
                        </select>
                    </div>
                    <hr class="my-2 w-4/5 mx-auto"/>
                    <button class="green-btn w-52 mx-auto ">
                        <i class="ri-check-double-fill"></i>
                        <div>Siparişleri Güncelle</div>
                    </button>
                </div>
            </div>  
               
        </div>
    </div>

</template>

<style scoped>

.my-order-details-page {
    @apply w-full;
}

.return-shopping{
    @apply font-bold text-yellow-500 hover:text-yellow-600 transition duration-200 ease-in flex items-center gap-1
}

.order-area-wrapper {
    @apply w-4/5 mx-auto my-6 flex 2xl:flex-row xl:flex-row lg:flex-row flex-col gap-5
}

.my-order-container{
    @apply 2xl:w-3/5 xl:w-3/5 lg:w-3/5 w-full border-2 border-gray-100 p-5 text-xs flex flex-col gap-6
}

.order-top-container{
    @apply flex gap-4 h-auto w-full sm:relative xs:relative
}
.order-bottom-container{
    @apply flex flex-col items-end gap-4 h-auto w-full
}

.cart-items-table {
    @apply w-full p-3
}

.subtotal-container{
    @apply 2xl:w-72 xl:w-72 lg:w-72 w-full h-auto border-2 border-gray-200 text-xs
}
.subtotal-header{
    @apply w-full h-12 bg-acikkahve text-white text-center flex items-center justify-center font-semibold
}
.subtotal-footer{
    @apply w-full h-full p-4 flex flex-col gap-2 text-gray-500
}

</style>