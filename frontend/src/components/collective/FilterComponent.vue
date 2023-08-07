<template>
    <div>
      <div class="2xl:flex xl:flex lg:flex hidden items-center gap-2 text-xs ">
            <div class="input-search-wrapper">
                <input type="text" class="filter-search-input" placeholder="Favorilerim İçerisinde Ara..."/>
                <i class="ri-search-line absolute top-3 right-4 text-gray-400 z-40" style="font-size: 20px;"></i>
            </div>
            <div class="input-range-wrapper">
                <p class="text-xs">Min - Max</p>
                <input type="range" class="filter-range-input cursor-pointer"/>
            </div>
            <div class="input-select-wrapper">
                <select class="filter-select-input">
                        <option>Fiyata Göre Artan</option>
                        <option>Fiyata Göre Azalan</option>
                        <option>A-Z</option>
                        <option>Z-A</option>
                    </select>
            </div>
            <div class="input-stock-wrapper">
                <p>Stoktakiler</p>
                <input type="checkbox" class="filter-stock-input"/>
            </div>
            <button class="orange-btn">Filteri Temizle</button>
        </div> 


        <!-- <FilterSidebarComponent/> -->
        <button class="settings-btn "><i class="ri-list-settings-fill"  style="font-size: 30px;"></i></button>

    </div>
</template>
<script>
//import FilterSidebarComponent from './FilterSidebarComponent.vue';
export default {
    components: {
       // FilterSidebarComponent
    }
}
</script>

<style scoped>
.settings-btn{
    @apply  w-10 h-10 text-gray-600 hover:text-white hover:bg-yellow-500 transition duration-200 ease-in rounded-lg cursor-pointer 2xl:hidden xl:hidden lg:hidden flex items-center justify-center 
}
</style>