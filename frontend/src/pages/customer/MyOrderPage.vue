<template>
    <div class="my-orders-page">
        <div class="page-banner">
            <div class="w-4/5 mx-auto flex justify-between items-center ">
                <div class="flex flex-col font-medium text-base">
                    <span class="">Siparişlerim</span>
                    <span class="text-gray-600 underline font-light text-xs">Toplamda 14 ürün listeleniyor...</span>
                </div>
                
                <FilterComponent/>
            </div>

        </div>
        <div class="table-wrapper">
            <table class="cart-items-table">
                <thead class="py-4">
                    <tr class="text-white py-2 bg-yellow-500">
                        <th height="40" class="w-2/12 text-left pl-4">Sipariş No - ID</th>
                        <th height="40" class="w-3/12 text-left pl-4">Müşteri Adı</th>
                        <th height="40" class="w-2/12 text-left pl-4 sm:hidden xs:hidden">Zaman</th>
                        <th height="40" class="w-2/12 text-left pl-4 sm:hidden xs:hidden">Tutar</th>
                        <th height="40" class="w-2/12 text-left pr-4">Sipariş Durumu</th>
                        <th height="40" class="w-1/12 pr-4 text-left">İncele</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="hover:bg-gray-100 text-gray-600 py-2 border-b-2">
                        <td height="40" class="w-2/12 text-left pl-4">TS58632463221</td>
                        <td height="40" class="w-3/12 text-left pl-4">Hanife Yolat</td>
                        <td height="40" class="w-2/12 text-left pl-4 sm:hidden xs:hidden">11.04.2023 - 22:00 </td>
                        <td height="40" class="w-2/12 text-left pl-4 sm:hidden xs:hidden">2820,00 TL</td>
                        <td height="40" class="w-2/12 text-left pr-4 text-purple-600">Kargo Dağıtımda</td>
                        <td height="40" class="w-1/12 pr-4 text-left">
                            <router-link to="/order/:orderID">
                                <i class="ri-eye-fill text-acikyesil hover:text-koyuyesil transition ease-in duration-200" style="font-size: 20px;"></i>
                            </router-link>
                        </td>
                    </tr>
                    <tr class="hover:bg-gray-100 bg-gray-100 text-gray-600 py-2 border-b-2">
                        <td height="40" class="w-2/12 text-left pl-4">TS5863777777</td>
                        <td height="40" class="w-3/12 text-left pl-4">Ayşenur Yolat</td>
                        <td height="40" class="w-2/12 text-left pl-4 sm:hidden xs:hidden">11.04.2023 - 22:00 </td>
                        <td height="40" class="w-2/12 text-left pl-4 sm:hidden xs:hidden">2820,00 TL</td>
                        <td height="40" class="w-2/12 text-left pr-4 text-yellow-600">Kargoya Verildi</td>
                        <td height="40" class="w-1/12 pr-4 text-left">
                            <router-link to="/order/:orderID">
                                <i class="ri-eye-fill text-acikyesil hover:text-koyuyesil transition ease-in duration-200" style="font-size: 20px;"></i>
                            </router-link>
                        </td>
                    </tr>
                    <tr class=" hover:bg-gray-100 text-gray-600 py-2 border-b-2">
                        <td height="40" class="w-2/12 text-left pl-4">TS586999999</td>
                        <td height="40" class="w-3/12 text-left pl-4">Recep Yolat</td>
                        <td height="40" class="w-2/12 text-left pl-4 sm:hidden xs:hidden">11.04.2023 - 01:00 </td>
                        <td height="40" class="w-2/12 text-left pl-4 sm:hidden xs:hidden">2820,00 TL</td>
                        <td height="40" class="w-2/12 text-left pr-4 text-red-500">Hazırlanıyor</td>
                        <td height="40" class="w-1/12 pr-4 text-left">
                            <router-link to="/order/:orderID">
                                <i class="ri-eye-fill text-acikyesil hover:text-koyuyesil transition ease-in duration-200" style="font-size: 20px;"></i>
                            </router-link>
                        </td>
                    </tr>
                    <tr class="hover:bg-gray-100 bg-gray-100 text-gray-600 py-2 border-b-2">
                        <td height="40" class="w-2/12 text-left pl-4">TS586999999</td>
                        <td height="40" class="w-3/12 text-left pl-4">Recep Yolat</td>
                        <td height="40" class="w-2/12 text-left pl-4 sm:hidden xs:hidden">11.04.2023 - 01:00 </td>
                        <td height="40" class="w-2/12 text-left pl-4 sm:hidden xs:hidden">2820,00 TL</td>
                        <td height="40" class="w-2/12 text-left pr-4 text-acikyesil">Teslim Edildi</td>
                        <td height="40" class="w-1/12 pr-4 text-left cursor-pointer">
                            <router-link to="/order/:orderID">
                                <i class="ri-eye-fill text-acikyesil hover:text-koyuyesil transition ease-in duration-200" style="font-size: 20px;"></i>
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>        
        </div>
    </div>
</template>
<script>
import FilterComponent from '@/components/collective/FilterComponent.vue';
export default {
    components:{
        FilterComponent
    }
}


</script>


<style scoped>

.my-orders-page {
    @apply w-full;
}

.table-wrapper {
    @apply w-4/5 mx-auto my-6;
}

.cart-items-table {
    @apply w-full p-3 text-xs 
}

</style>