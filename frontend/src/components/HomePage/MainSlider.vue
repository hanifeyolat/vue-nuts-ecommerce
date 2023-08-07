<template>
           <div class="main-slider">
                <div class="main-slider-buttons">
                    <button class="btn"><i style="font-size: 30px;" class="ri-arrow-left-circle-fill"></i></button>
                    <button class="btn"><i style="font-size: 30px;" class="ri-arrow-right-circle-fill"></i></button>
                </div>
                <img class="main-slider-img" src="https://static.ticimax.cloud/12901/uploads/sayfatasarim/sayfa4/kargo-bedava-7770.jpg" alt="sadasda">

                <div class="main-slider-dots">
                    <button class="dot"></button>
                    <button class="dot"></button>
                    <button class="dot"></button>
                    <button class="dot"></button>
                    <button class="dot"></button>
                    <button class="dot active"></button>
                </div>
        </div>
</template>

<style scoped>
.main-slider{
    @apply w-screen 2xl:h-96 xl:h-96 lg:h-80 md:h-80 sm:h-56 h-56 flex items-center justify-center overflow-y-hidden relative
}
.main-slider-img{
    @apply object-cover h-full w-full
}
.main-slider-buttons{
    @apply w-4/5 text-white flex items-center justify-between mx-auto absolute top-auto
}
.main-slider-buttons .btn{
    @apply w-5 h-5 flex items-center justify-center text-white hover:text-yellow-500 transition ease-in duration-300 shadow-xl
}
.main-slider-dots{
    @apply w-auto flex items-center justify-center gap-1 mx-auto absolute bottom-2
}
.main-slider-dots .dot{
    @apply w-3 h-3 bg-white rounded-full cursor-pointer hover:bg-yellow-500 transition ease-in duration-300  shadow-lg
}
.main-slider-dots .dot.active{
    @apply bg-yellow-500
}

</style>