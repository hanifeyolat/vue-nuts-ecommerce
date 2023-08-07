<template>

        <div class="page-banner">
            <div class="w-4/5 mx-auto flex justify-between items-center ">
                <div class="flex flex-col font-medium text-base">
                    <span class="">Favori Ürünlerim</span>
                    <span class="text-gray-600 underline font-light text-xs">Toplamda 7 ürün listeleniyor...</span>
                </div>
                
               
            </div>
        </div>
        <div class="w-full">
            <div class="favories-product-container">
                <ProductBase/>
                <ProductBase/>
                <ProductBase/>
                <ProductBase/>
                <ProductBase/>
                <ProductBase/>
                <ProductBase/>
            </div>

        </div>

</template>
<script>
import ProductBase from "../../components/collective/ProductBase.vue"
export default {
    components:{
        ProductBase
    }
}
</script>

<style scoped>
.favories-product-container{
    @apply w-4/5 mx-auto grid 2xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 my-6
}

</style>