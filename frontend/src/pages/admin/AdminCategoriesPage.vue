<template>
    <div class="admin-categories-page">
        <div class="page-banner">
            <div class="w-4/5 mx-auto flex items-center justify-between font-medium text-base mt-1">
                <p>Kategoriler</p>
                <div class="relative">
                    <input type="text" class="input-container w-72 h-10" placeholder="Kategoriler İçerisinde Ara..."/>
                    <i class="ri-search-line absolute top-2 right-4 text-gray-400" style="font-size: 20px;"></i>
                </div>
            </div>
        </div>
        <div class="w-4/5 mx-auto my-12 flex items-center justify-between text-xs">
            <table class="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full p-5 text-sm">
                <thead class="w-full">
                    <tr class="text-left text-white py-3 px-2 h-10 bg-yellow-500 flex items-center">
                        <th height="40" class="h-full my-auto w-1/3"> Kategori No - ID </th>
                        <th height="40" class=" h-full my-auto w-1/3">Kategori Adı</th>
                        <th height="40" class=" h-full my-auto w-1/3"> Düzenle / Sil </th>
                    </tr>
                </thead>
                <tbody class="w-full">
                    <tr class=" text-gray-600 py-3 px-2 h-10 flex items-center">
                        <td height="40" class="h-full my-auto w-1/3 text-left"> TS25533355555 </td>
                        <td height="40" class=" h-full my-auto w-1/3">Hanife Yolat</td>
                        <td height="40" class=" h-full my-auto w-1/3 text-left pl-4 cursor-pointer"> 
                            <i class="ri-edit-circle-fill text-acikyesil hover:text-koyuyesil transtion ease-in duration-200 mr-2 mt-2 text-right" style="font-size: 30px;"></i>
                            <i class="ri-delete-bin-7-fill text-red-500 hover:text-red-700 transtion ease-in duration-200 mt-2 text-right" style="font-size: 30px;"></i> 
                        </td>
                    </tr>                   
                </tbody>
            </table>
        
        </div>
    </div>
</template>

<style scoped>
.admin-categories-page {
@apply w-full 
}

.admin-categories-page .input-container{
@apply w-auto px-4 py-1 h-8 rounded-full border-2 border-gray-200 text-xs font-normal
}

.admin-categories-page .add-btn{
@apply w-auto px-4 py-1 h-8 rounded-full bg-acikyesil hover:bg-koyuyesil transition ease-in duration-300 text-xs text-white flex items-center justify-center gap-2
}

.clear-filter-btn{
@apply w-auto px-4 py-1 h-8 rounded-full bg-yellow-600 hover:bg-yellow-700 transition ease-in duration-300 text-xs text-white
}


</style>