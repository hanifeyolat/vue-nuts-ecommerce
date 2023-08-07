<template>
<div class="admin-products-page">
    <div class="page-banner">
        <div class="w-4/5 mx-auto flex items-center justify-between font-medium text-base mt-1">
            <p>Ürünler</p>
            <button type="submit" class="add-btn">
                <i class="ri-check-double-fill"></i>
                <p> Ürünü Güncelle</p>
            </button>
        </div>
    </div>
    <div class="cart-order-wrapper">
            <form class="half-container"> 
                <div class="inner-container">
                    <div class="flex flex-col gap-2 w-full">
                        <span class="pl-4">Ürün İsmi</span>
                        <input name="productName" type="text" class="border-2 border-gray-200 text-gray-800 placeholder:text-gray-300 px-4 py-2 rounded-lg outline-none" placeholder="Ürün İsmi Giriniz..."/>
                    </div>
                    <div class="flex gap-5">
                        <div class="flex flex-col gap-4 w-1/2">
                        <div class="flex flex-col gap-2 w-full">
                            <span class="pl-4">Kategori</span>
                            <select class="input-container text-xs border-2 border-gray-200 text-gray-800  px-4 py-2 rounded-lg outline-none ">
                                <option>Kuruyemiş</option>
                                <option>Kuru Meyve</option>
                                <option>Kuru Meyve</option>
                                <option>Kuru Meyve</option>
                                <option>Kuru Meyve</option>     
                        </select>
                        </div>
                        <div class="flex flex-col gap-2 w-full">
                            <span class="pl-4">Ürün Stoğu</span>
                            <input name="productStock" type="text" class="border-2 border-gray-200 text-gray-800 placeholder:text-gray-300 px-4 py-2 rounded-lg outline-none" placeholder="Ürün Stoğu Giriniz..."/>
                        </div>
                        <div class="flex flex-col gap-2 w-full">
                            <span class="pl-4">Ürün Fiyatı</span>
                            <input name="productPrice" type="text" class="border-2 border-gray-200 text-gray-800 placeholder:text-gray-300 px-4 py-2 rounded-lg outline-none" placeholder="Ürün Fiyatı Giriniz..."/>
                        </div>
                        <span class="text-xs text-red-600">Yeni fotoğraf yüklemezseniz,
                        fotoğrafınız değişmez.</span>
                    </div>
                    <div class="w-1/2 my-auto min-w-min max-h-60 bg-red-50 overflow-hidden">
                        <img src="https://static.ticimax.cloud/12901/Uploads/UrunResimleri/thumb/blue-flowers-earl-grey-mavi-malva-ebeg-b91b-e.jpg" alt="Hazel Nuts Logo" class="object-contain">
                    </div>
                    </div>
                </div>
            </form>
            <form class="half-container">
                 <div class="inner-container items-center justify-center text-center my-auto">
                    <div class="flex flex-col items-center justify-center gap-5 my-auto relative">
                        <i class="ri-drag-drop-line text-gray-300 mb-12 mt-11" style="font-size: 125px;"></i>
                        <p class="text-base">Yeni Resminizi Sürükleyin <br/>ya da</p>
                        <button class="blue-button">Bilgisayarınızdan Seçin</button>
                    </div>
                    
                 </div>
            </form>
    </div>        
</div>

</template>

<script>
export default {
data() {
    return {
    
    };
},
};
</script>

<style scoped>
.admin-products-page {
    @apply w-full min-h-screen;
}

.add-btn{
    @apply w-auto px-4 py-1 h-8 rounded-full bg-acikyesil hover:bg-koyuyesil transition ease-in duration-300 text-xs text-white flex items-center justify-center gap-2
}

.cart-order-wrapper{
    @apply w-4/5 h-full mx-auto my-5 grid gap-5 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 grid-cols-1
}

.half-container{
    @apply w-full h-full text-xs flex flex-col gap-2 
}

.half-container .inner-container{
    @apply border-2 border-gray-200 p-8 flex flex-col gap-5 h-full
}
</style>
