<template>
    <div class="product-detail-page">
        <div class="page-banner">
            <div class="w-4/5 mx-auto flex items-center font-medium text-base mt-1">
                Ürün Detayları
            </div>
        </div>
        <div class="details-area">
           <div class="product-container">
                <div class="img-wrapper ">
                    <div class=" 2xl:w-1/4 xl:w-1/4 lg:w-1/4 md:w-1/4 w-full flex 2xl:flex-col xl:flex-col lg:flex-col md:flex-col border-2 border-gray-200 p-2 gap-2">
                        <div class="w-full "> 
                            <img src="https://static.ticimax.cloud/12901/Uploads/UrunResimleri/thumb/blue-flowers-earl-grey-mavi-malva-ebeg-b91b-e.jpg" alt="asdsad" class=" object-contain"/>
                        </div>
                        <div class="w-full"> 
                            <img src="https://static.ticimax.cloud/12901/Uploads/UrunResimleri/thumb/blue-flowers-earl-grey-mavi-malva-ebeg-b91b-e.jpg" alt="asdsad" class=" object-contain"/>
                        </div>
                        <div class="w-full"> 
                            <img src="https://static.ticimax.cloud/12901/Uploads/UrunResimleri/thumb/blue-flowers-earl-grey-mavi-malva-ebeg-b91b-e.jpg" alt="asdsad" class=" object-contain"/>
                        </div>
                    </div>
                    <div class="2xl:w-3/4 xl:w-3/4 lg:w-3/4 md:w-3/4 w-full h-full">
                        <img src="https://static.ticimax.cloud/12901/Uploads/UrunResimleri/thumb/blue-flowers-earl-grey-mavi-malva-ebeg-b91b-e.jpg" alt="asdsad" class=" object-contain w-full h-full"/>

                    </div>
                </div>
                <div class="details-wrapper">

                    <i class="ri-heart-fill text-red-600 absolute top-3 right-3" style="font-size: 30px;"></i>
                    <p class="text-xl font-semibold text-gray-800">ÇİFTE KAVRULMUŞ SARI LEBLEBİ</p>
                    <p class="text-xs border-b-2 border-gray-800 w-28 pb-1 2xl:flex xl:flex hidden">Ürün Açıklaması </p>
                    <p class="text-gray-500 text-xs 2xl:flex xl:flex lg:flex hidden ">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis...
                    </p>

                    <p class="font-bold text-3xl"> &#8378; 110<span class="text-sm">,00</span></p>

                    <div class="flex items-center gap-5">
                        <div class="text-gray-500 text-xs flex flex-col gap-1">
                            <p >ÜRÜN ADETİ BELİRTİNİZ:</p>
                            <div class="w-16 px-4 py-1 h-8 rounded-full border-2 border-gray-200 text-xs flex items-center gap-2">
                                <button>+</button>
                                <span>1</span>
                                <button>-</button>
                            </div>
                        </div>
                          <div class="text-gray-500 text-xs flex flex-col gap-1">
                            <p >ÜRÜN GRAMAJI BELİRTİNİZ:</p>

                            <select class="w-28 px-4 py-1 h-8 rounded-full border-2 border-gray-200 text-xs flex items-center gap-2">
                                <option>100 Gr.</option>
                                <option>250 Gr.</option>
                                <option>500 Gr.</option>
                                <option>1000 Gr.</option>
                            </select>
                        </div>

                    </div>
                    <button class="add-btn">SEPETE EKLE</button>
                </div>

           </div>
          
        </div>
        <div class="icons-area">
                <div class=" w-auto flex items-center self-center gap-10 md:gap-5 sm:gap-5 xs:gap-5 mx-auto" >
                        <div class="flex flex-col items-center gap-1 text-center">
                            <img src="/images/icons/replay-15-fill.png" alt="15 Gün İçinde Koşulsuz İade"/>
                            <p class="text-xs" style="font-size: 10px !important;">15 Gün İçinde <br/> Koşulsuz İade</p>
                        </div>
                        <div class="flex flex-col items-center gap-1 text-center">
                            <img src="/images/icons/truck-line.png" alt="Hızlı Gönderim"/>
                            <p class="text-xs" style="font-size: 10px !important;">Hızlı Gönderim</p>
                        </div>

                        <div class="flex flex-col items-center gap-1 text-center">
                            <img src="/images/icons/bank-card-2-line.png" alt="Güvenli Ödeme Seçenekleri"/>
                            <p class="text-xs" style="font-size: 10px !important;">Güvenli Ödeme <br/> Seçenekleri</p>
                        </div>

                        <div class="flex flex-col items-center gap-1 text-center">
                            <img src="/images/icons/plant-line.png" alt="100% Taze ve Lezzetli"/>
                            <p class="text-xs" style="font-size: 10px !important;">100% Taze ve <br/>Lezzetli</p>
                        </div>
                </div>
                        
        </div>
        <div class="comments-area">
            <div class="w-4/5 mx-auto">
                    <div class="comments-header">
                        YORUMLAR (24)
                        <hr class="comment-line"/>
                    </div>
                    <div class="comments-container">
                        <CommentComponent/>
                        <CommentComponent/>
                        <CommentComponent/>
                        <CommentComponent/>
                        <CommentComponent/>
                        <CommentComponent/>
                        <CommentComponent/>
                        <CommentComponent/>
                        <CommentComponent/>
                        <CommentComponent/>
                      
                    </div>

            </div>
        </div>

    </div>
</template>
<script>
import CommentComponent from '../components/ProductDetailsPage/CommentComponent.vue';
export default {
    name: "ProductDetailsPage",
    components:{
        CommentComponent
    }
}
</script>

<style scoped>

.product-detail-page{
    @apply w-full mb-5
}
.details-area{
    @apply w-4/5 mx-auto flex flex-col relative
}
.details-area .product-container{
    @apply flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col gap-4 my-6 h-auto
}

.details-area .product-container .img-wrapper{
    @apply 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 w-full flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col-reverse gap-4
}
.details-area .product-container .details-wrapper{
    @apply 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 w-full min-h-full p-5 border-2 border-gray-200 flex flex-col gap-4 relative
}
.details-area .product-container .details-wrapper .add-btn{
    @apply w-full h-10 rounded-sm bg-yellow-500 hover:bg-yellow-700 flex items-center justify-center text-center text-white transition ease-in duration-200 cursor-pointer
}

.icons-area{
    @apply w-4/5 mx-auto my-5 py-4 bg-yellow-100 text-xs flex items-center 2xl:gap-4 xl:gap-4 lg:gap-4 md:gap-3 gap-2
}

.comments-area{
    @apply w-full py-4 text-xs flex items-center gap-4  mb-10
}

.comments-header{
    @apply mx-auto text-center text-lg font-semibold 
}
.comment-line{
    @apply w-2/3 mx-auto my-4
}

.comments-container{
    @apply grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-4 w-full h-96 overflow-y-scroll pr-5
}
</style>