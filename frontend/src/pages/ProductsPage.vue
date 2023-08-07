<template>
    <div class="nuts-page">
        <div class="page-banner">
            <div class="w-4/5 mx-auto flex justify-between items-center ">
                <div class="flex flex-col font-medium text-base">
                    <span class="">Kuruyemişler</span>
                    <span class="text-gray-600 underline font-light text-xs">Toplamda 14 ürün listeleniyor...</span>
                </div>
                
                <FilterComponent/>
            </div>

        </div>
         <div class="nuts-products-area">
                <div class="products-container">
                    <ProductBase/>
                    <ProductBase/>
                    <ProductBase/>
                    <ProductBase/>
                    <ProductBase/>
                    <ProductBase/>
 
                </div>
         </div>

    </div>
</template>

<script>

import FilterComponent from '@/components/collective/FilterComponent.vue';
import ProductBase from '../components/collective/ProductBase.vue';
export default {
    name:"NutsPage",
    components: {
    ProductBase,
    FilterComponent
}
}

</script>
<style scoped>

.nuts-page{
    @apply w-full mb-5
}
.nuts-page .nuts-products-area{
    @apply w-4/5 mx-auto flex flex-col gap-6 mt-6
}

.nuts-page .input-container{
    @apply w-auto px-4 py-1 h-8 rounded-full border-2 border-gray-200 text-xs
}

.nuts-page .input-container .search-input{
    @apply w-44
}
.range-input{
    @apply w-24 h-4 -mt-1
}

.clear-filter-btn{
    @apply w-auto px-4 py-1 h-8 rounded-full bg-yellow-600 hover:bg-yellow-700 transition ease-in duration-300 text-xs text-white
}

.nuts-page .products-container{
    @apply grid 2xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3

}





</style>