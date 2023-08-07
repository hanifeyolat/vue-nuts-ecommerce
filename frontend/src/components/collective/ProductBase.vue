<template>
    <div class="product-base">
        <div class="img-header">
            <img src="https://static.ticimax.cloud/cdn-cgi/image/width=229,quality=85/12901/uploads/urunresimleri/buyuk/kisnis-0654-a.jpg" alt="sdasdasd" class="object-cover w-full h-full"/>
            <button class="look-product-base">
                <i class="ri-eye-fill" style="font-size: 14px;"></i>
            </button>
        </div>
        <div class="text-container">
            <div class="flex flex-col">
                <p class="font-semibold">Antep Fıtığı</p>
                <p class="font-normal">500 TL</p> 
            </div>
           <div class="flex items gap-2">
                <button class="add-cart-btn">
                    <i class="ri-shopping-cart-2-fill" style="font-size: 14px;"></i>
                </button>
                <button class="add-favories-btn">
                    <i class="ri-heart-fill" style="font-size: 14px;" ></i>
                </button>
           </div>
        </div>
    </div>
</template>
<style scoped>
.product-base{
    @apply w-full overflow-y-hidden h-72 border-2 border-gray-200 rounded-sm flex flex-col
}
.img-header{
    @apply w-full h-4/5 relative overflow-hidden
}
.look-product-base{ 
    @apply absolute top-2 right-2  w-6 h-6 bg-yellow-400 hover:bg-yellow-600 transition ease-in duration-300 text-white flex items-center justify-center rounded-md
}

.text-container{
    @apply w-full h-1/5 text-xs px-2 flex items-center justify-between
}
.add-cart-btn{
    @apply w-6 h-6 bg-acikyesil hover:bg-koyuyesil transition ease-in duration-300 text-white flex items-center justify-center rounded-md
}

.add-favories-btn{
    @apply w-6 h-6 bg-red-600 hover:bg-red-900 transition ease-in duration-300 text-white flex items-center justify-center rounded-md
}

</style>