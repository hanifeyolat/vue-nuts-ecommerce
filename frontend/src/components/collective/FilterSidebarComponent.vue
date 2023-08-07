<template>

    <!-- DEFAULT FILTER SIDEBAR -->
    <div class="sidebar-background">
        <div class="sidebar">
            <button class="close-sidebar-btn"><i class="ri-close-circle-fill"></i></button>
            <div class="font-medium text-base py-2 mb-2 border-b-2 border-yellow-500">
                <p>Filtreler</p>
            </div>
            <div class="flex flex-col gap-2 text-xs w-full">
                <div class="input-search-wrapper border-2 border-gray-200 overflow-hidden !w-full">
                    <input type="text" class="filter-search-input" placeholder="Favorilerim İçerisinde Ara..."/>
                    <i class="ri-search-line absolute top-3 right-4 text-gray-400 z-40" style="font-size: 20px;"></i>
                </div>
                <div class="input-range-wrapper border-2 border-gray-200 !w-full">
                    <p class="text-xs">Min - Max</p>
                    <input type="range" class="filter-range-input cursor-pointer"/>
                </div>
                <div class="input-select-wrapper border-2 border-gray-200 !w-full">
                    <select class="filter-select-input">
                            <option>Fiyata Göre Artan</option>
                            <option>Fiyata Göre Azalan</option>
                            <option>A-Z</option>
                            <option>Z-A</option>
                        </select>
                </div>
                <div class="input-stock-wrapper border-2 border-gray-200 !w-full">
                    <p>Stoktakiler</p>
                    <input type="checkbox" class="filter-stock-input"/>
                </div>
                <button class="green-btn !w-full">Filteri Uygula</button>
                <button class="orange-btn-underline border-none w-28 flex items-center gap-1">
                    <i class="ri-delete-bin-7-fill" style="font-size: 20px;"></i>
                    <p>Filtreyi Temizle</p>
                </button>
            </div> 
    

        </div>
    </div>
    

</template>

<style scoped>
.sidebar-background{
    @apply w-screen h-screen absolute top-0 left-0 bg-siyah-90 z-50
}
.sidebar{
    @apply w-80 h-screen bg-white absolute top-0 left-0 p-10 flex flex-col gap-3
}

.close-sidebar-btn{
    @apply text-gray-600 hover:text-gray-900 transition ease-in duration-200 cursor-pointer text-xl absolute top-5 right-5

}

</style>