<template>
    <div class="blog-cart-base">
        <div class="img-header">
            <img src="https://static.ticimax.cloud/12901/uploads/blog/yer-fistigi-ezmesi-nasil-yapilir-152c.jpg" alt="sdasdasd" class="object-cover h-full w-full"/>
        </div>
        <router-link to="/blog" class="text-container">
            <div class="flex flex-col">
                <p class="font-semibold">Yer Fıstığı Ezmesi Nasıl Yapılır ? </p>
                <p class="font-thin underline hover:text-acikyesil duration-200 ease-in transition hover:font-semibold">Hemen Oku</p> 
            </div>
        </router-link>
    </div>
</template>
<style scoped>

.blog-cart-base{
    @apply w-full h-64 overflow-y-hidden border-2 border-gray-200 rounded-sm flex flex-col gap-1
}

.blog-cart-base .img-header{
    @apply w-full 2xl:h-72 xl:h-72 lg:h-72 md:h-72 h-52 bg-green-500
}


.blog-cart-base .text-container{
    @apply w-full h-1/3 text-xs px-2 flex items-center justify-between 
}

</style>