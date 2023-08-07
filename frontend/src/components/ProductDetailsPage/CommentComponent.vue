<template>

    <div class="comment-container" style="height: auto;">
        <div class="stars">
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-half-line"></i>
            <i class="ri-star-line"></i>
        </div>
        <p class="font-bold text-md">Fazla taze bir ürün değil ne yazık ki...</p>
        <p class="font-normal text-xs text-gray-500">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim...
        </p>
        <p class="font-normal text-xs text-gray-500">
            HA**** YO*** (24) , 19.07.2023 Çarşamba - 22:35 
        </p>


    </div>
</template>
<style scoped>
.comment-container{
    @apply w-full border-2 border-gray-100 p-4
}
.comment-container .stars{
    @apply flex gap-1 items-center
}

</style>