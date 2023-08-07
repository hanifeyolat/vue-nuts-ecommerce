<template>

    <div class="flex flex-col">

        <div class="cart-item-container">
            <div class="w-auto h-full flex gap-3 items-center ">
                <div class="h-full w-20">
                    <img src="https://static.ticimax.cloud/12901/Uploads/UrunResimleri/thumb/blue-flowers-earl-grey-mavi-malva-ebeg-b91b-e.jpg" alt="asdsad" class=" object-contain"/>
                </div>
                <div class="w-36 flex flex-col gap-1">
                    <h1 class="font-semibold text-gray-900">Çifte Kavrulmuş Badem İçi</h1>
                    <p class="font-semibold text-yellow-500 hidden md:flex sm:flex xs:flex"> &#8378; 220,00</p>
                </div>
            </div>

            <div class="w-auto flex 2xl:flex-row xl:flex-row lg:flex-row flex-col items-center gap-1">
                <div class="text-gray-500 text-xs flex flex-col items-center gap-1">
                    <!-- <p >Adet:</p> -->
                    <div class="w-14 px-2 py-1 h-7 rounded-full border-2 border-gray-200 flex items-center gap-2 bg-white">
                        <button>+</button>
                        <span>1</span>
                        <button>-</button>
                    </div>
                </div>
                <div class="text-gray-500 flex flex-col items-center justify-center gap-1">
                    <select class="w-20 px-2 py-1 h-7 rounded-full border-2 border-gray-200 flex items-center gap-2 bg-white cursor-pointer">
                        <option>100 Gr.</option>
                        <option>250 Gr.</option>
                        <option>500 Gr.</option>
                        <option>1000 Gr.</option>
                    </select>
                </div>
            </div>
            <p class="w-auto font-semibold text-yellow-500 2xl:flex xl:flex lg:flex hidden"> &#8378; 220,00</p>
            <button class="w-auto item-delete-btn">
                <i class="ri-close-circle-fill"></i>
            </button>

        </div>
        <hr/>
    </div>


</template>

<style>
.cart-item-container{
    @apply w-full h-20 mb-2 flex items-center justify-between
}

.item-delete-btn{
    @apply text-yellow-500 hover:text-yellow-700 transition ease-in duration-300 text-xl 
}

</style>