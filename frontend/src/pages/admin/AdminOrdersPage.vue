
<template>
    <div class="admin-products-page">
      <div class="page-banner">
        <div class="w-4/5 mx-auto flex items-center justify-between font-medium text-base mt-1">
          <p>Siparişler</p>
         <FilterComponent/>
        </div>
      </div>
      <div class="w-full my-12  text-xs overflow-y-auto h-[400px] inline-block">
        <table class="w-4/5 p-5 text-sm mx-auto">
          <thead class="w-full">
              <tr class="text-white py-3 h-10 bg-yellow-500 flex items-center">
                  <th height="40" class="h-full text-left my-auto 2xl:w-4/12 xl:w-4/12 lg:w-4/12 w-8/12 pl-4">
                    <p class="w-full flex justify-start">Sipariş ID</p>
                  </th>
                  <th height="40" class=" h-full text-left my-auto 2xl:w-2/12 xl:w-2/12 lg:w-2/12 w-0 2xl:inline-block xl:inline-block lg:inline-block hidden">Müşteri Adı</th>
                  <th height="40" class=" h-full text-left my-auto 2xl:w-2/12 xl:w-2/12 lg:w-2/12 w-0 2xl:inline-block xl:inline-block lg:inline-block hidden">Zaman</th>
                  <th height="40" class=" h-full text-left my-auto 2xl:w-2/12 xl:w-2/12 lg:w-2/12 w-0 2xl:inline-block xl:inline-block lg:inline-block hidden">Tutar</th>
                  <th height="40" class=" h-full text-left my-auto 2xl:w-2/12 xl:w-2/12 lg:w-2/12 w-0 2xl:inline-block xl:inline-block lg:inline-block hidden">Sipariş Durumu</th>
                  <th height="40" class=" h-full text-left my-auto 2xl:w-2/12 xl:w-2/12 lg:w-2/12 w-4/12 pr-4">
                      <p class="w-full flex justify-end">Düzenle / Sil</p>
                  </th>
              </tr>
          </thead>
          <tbody class="w-full">
              <tr class="w-full py-3 text-gray-600  border-b-2 border-gray-200 flex items-center">
                  <td height="40" class="h-full my-auto 2xl:w-4/12 xl:w-4/12 lg:w-4/12 w-8/12 text-left pl-4">
                      <p class="w-full flex justify-start">TS2504568533</p>
                  </td>
                  <td height="40" class=" h-full my-auto 2xl:w-2/12 xl:w-2/12 lg:w-2/12 w-0 2xl:inline-block xl:inline-block lg:inline-block hidden">Hanife Yolat</td>
                  <td height="40" class=" h-full my-auto 2xl:w-2/12 xl:w-2/12 lg:w-2/12 w-0 2xl:inline-block xl:inline-block lg:inline-block hidden">11.06.2022</td>
                  <td height="40" class=" h-full my-auto 2xl:w-2/12 xl:w-2/12 lg:w-2/12 w-0 2xl:inline-block xl:inline-block lg:inline-block hidden">400,00 TL</td>
                  <td height="40" class=" h-full my-auto 2xl:w-2/12 xl:w-2/12 lg:w-2/12 w-0 2xl:inline-block xl:inline-block lg:inline-block hidden">Hazırlanıyor</td>
                  <td height="40" class=" h-full my-auto 2xl:w-2/12 xl:w-2/12 lg:w-2/12 w-4/12 pr-4">          
                      <div class="flex items-center justify-end w-full">
                          <i class="ri-edit-circle-fill text-acikyesil hover:text-koyuyesil transtion ease-in duration-200 mr-2" style="font-size: 30px;"></i>
                          <i class="ri-delete-bin-7-fill text-red-500 hover:text-red-700 transtion ease-in duration-200" style="font-size: 30px;"></i>
                      </div>
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
    components: {
        FilterComponent
    }
}



</script>

<style scoped>
.admin-orders-page {
@apply w-full 
}


.admin-orders-page .input-container{
@apply w-auto px-4 py-1 h-8 rounded-full border-2 border-gray-200 text-xs font-normal
}

.admin-orders-page .add-btn{
@apply w-auto px-4 py-1 h-8 rounded-full bg-acikyesil hover:bg-koyuyesil transition ease-in duration-300 text-xs text-white flex items-center justify-center gap-2
}

.clear-filter-btn{
@apply w-auto px-4 py-1 h-8 rounded-full bg-yellow-600 hover:bg-yellow-700 transition ease-in duration-300 text-xs text-white
}


</style>