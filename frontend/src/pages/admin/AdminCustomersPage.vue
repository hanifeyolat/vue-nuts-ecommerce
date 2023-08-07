<template>
    <div class="admin-customers-page">
        <div class="page-banner">
            <div class="w-4/5 mx-auto flex items-center justify-between font-medium text-base mt-1">
                <p>Müşteriler</p>
                <div class="relative">
                    <input type="text" class="input-container w-56 h-10" placeholder="Müşteri Ara..."/>
                    <i class="ri-search-line absolute top-2 right-4 text-gray-400" style="font-size: 20px;"></i>
                </div>
            </div>
        </div>
        <div class="w-4/5 mx-auto my-12 flex items-center justify-between">  
            <table class="w-full p-5 text-sm mx-auto">
                <thead class="w-full">
                    <tr class="text-left text-white py-3 px-2 h-10 bg-yellow-500 flex items-center">
                        <th height="40" class="h-full 2xl:w-4/12 xl:w-4/12 lg:w-4/12 w-0 2xl:inline-block xl:inline-block lg:inline-block hidden pl-4"> Müşteri ID </th>
                        <th height="40" class=" h-full my-auto 2xl:w-4/12 xl:w-4/12 lg:w-4/12 w-6/12">Müşteri Adı</th>
                        <th height="40" class=" h-full my-auto 2xl:w-4/12 xl:w-4/12 lg:w-4/12 w-6/12 ">Telefon Numarası</th>
                        <th height="40" class=" h-full my-auto 2xl:w-4/12 xl:w-4/12 lg:w-4/12 w-0 2xl:inline-block xl:inline-block lg:inline-block hidden pr-4"> Mail Adresi </th>
                    </tr>
                </thead>
                <tbody class="w-full">
                    <tr class="text-left text-gray-600 py-3 px-2 h-10 flex items-center border-b-2 border-gray-200">
                        <td height="40" class="h-full my-auto 2xl:w-4/12 xl:w-4/12 lg:w-4/12 w-0 2xl:inline-block xl:inline-block lg:inline-block hidden text-left pl-4"> TS25533355555   </td>
                        <td height="40" class=" h-full my-auto 2xl:w-4/12 xl:w-4/12 lg:w-4/12 w-6/12">Hanife Yolat</td>
                        <td height="40" class=" h-full my-auto 2xl:w-4/12 xl:w-4/12 lg:w-4/12 w-6/12 ">054688888877222 </td>
                        <td height="40" class=" h-full my-auto 2xl:w-4/12 xl:w-4/12 lg:w-4/12 w-0 2xl:inline-block xl:inline-block lg:inline-block hidden pr-4"> hanifesoftware-25@gmail.com  </td>
                    </tr>
                    <tr class="text-left text-gray-600 py-3 px-2 h-10 flex items-center border-b-2 border-gray-200 bg-gray-100">
                        <td height="40" class="h-full my-auto 2xl:w-4/12 xl:w-4/12 lg:w-4/12 w-0 2xl:inline-block xl:inline-block lg:inline-block hidden text-left pl-4"> TS25533355555   </td>
                        <td height="40" class=" h-full my-auto 2xl:w-4/12 xl:w-4/12 lg:w-4/12 w-6/12">Hanife Yolat</td>
                        <td height="40" class=" h-full my-auto 2xl:w-4/12 xl:w-4/12 lg:w-4/12 w-6/12 ">054688888877222 </td>
                        <td height="40" class=" h-full my-auto 2xl:w-4/12 xl:w-4/12 lg:w-4/12 w-0 2xl:inline-block xl:inline-block lg:inline-block hidden pr-4"> hanifesoftware-25@gmail.com  </td>
                    </tr>
                    <tr class="text-left text-gray-600 py-3 px-2 h-10 flex items-center border-b-2 border-gray-200">
                        <td height="40" class="h-full my-auto 2xl:w-4/12 xl:w-4/12 lg:w-4/12 w-0 2xl:inline-block xl:inline-block lg:inline-block hidden text-left pl-4"> TS25533355555   </td>
                        <td height="40" class=" h-full my-auto 2xl:w-4/12 xl:w-4/12 lg:w-4/12 w-6/12">Hanife Yolat</td>
                        <td height="40" class=" h-full my-auto 2xl:w-4/12 xl:w-4/12 lg:w-4/12 w-6/12 ">054688888877222 </td>
                        <td height="40" class=" h-full my-auto 2xl:w-4/12 xl:w-4/12 lg:w-4/12 w-0 2xl:inline-block xl:inline-block lg:inline-block hidden pr-4"> hanifesoftware-25@gmail.com  </td>
                    </tr>

                    
                </tbody>
            </table>
        </div>
    
    </div>
</template>

<style scoped>
.admin-customers-page {
@apply w-full 
}

.admin-customers-page .input-container{
@apply w-auto px-4 py-1 h-8 rounded-full border-2 border-gray-200 text-xs font-normal
}

.admin-customers-page .add-btn{
@apply w-auto px-4 py-1 h-8 rounded-full bg-acikyesil hover:bg-koyuyesil transition ease-in duration-300 text-xs text-white flex items-center justify-center gap-2
}

.clear-filter-btn{
@apply w-auto px-4 py-1 h-8 rounded-full bg-yellow-600 hover:bg-yellow-700 transition ease-in duration-300 text-xs text-white
}


</style>