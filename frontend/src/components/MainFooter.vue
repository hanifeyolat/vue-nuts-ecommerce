<template>

    <div class="footer">
        <div class="footer-container">
                <div class="footer-col">
                    <p class="font-bold">KATEGORİLER</p>
                    <p>Kuruyemişler</p>
                    <p>Kuru Meyveler</p>
                    <p>Sağlıklı Atıştırmalıklar</p>
                    <p>Bitkisel Yağlar</p>
                    <p>Gurme Çaylar</p>
                    <p>Baharatlar</p>
                </div>
                <div class="footer-col">
                    <p class="font-bold">MÜŞTERİ HİZMETLERİ</p>
                    <p>Gizlilik Politikası</p>
                    <p>İptal ve İade Şartları</p>
                    <p>Satış Sözleşmesi</p>
                    <p>Ödeme ve Teslimat</p>
                    <p>Kredi Kartı ile Alışveriş</p>
                    <p>Para Puan Detayları</p>
                </div>
                <div class="footer-col">
                    <p class="font-bold">HAKKIMIZDA</p>
                    <p>İletişim</p>
                    <p>Blog</p>
                    <p class="font-bold">FIRSATLARDAN HABERDAR OLUN</p>
                    <p>Kampanyalar ve indirimlerden
                        <br/>
                    güncel olarak haberdar olun.</p>
                    <form class="relative w-auto">
                        <input type="text" id="search-inp" class="mail-input" placeholder="E-posta adresinizi giriniz..."/>
                        <br/>
                        <button type="submit" class="gonder-btn">Gönder</button>
                    </form>
                
                </div>
                <div class="footer-col">
                    <p class="font-bold">SOSYAL MEDYADA BİZ</p>
                    <div class="flex items-center gap-2">
                            <div class="w-5 h-5" style="font-size: 20px;">
                                <i class="ri-facebook-box-fill "></i>
                            </div>
                            <div class="w-5 h-5" style="font-size: 20px;">
                                <i class="ri-instagram-fill"></i>
                            </div>
                            <div class="w-5 h-5" >
                                <div class="w-4 h-4 bg-white flex items-center justify-center rounded-sm" style="font-size: 14px;">
                                    <i class="ri-twitter-fill text-koyuyesil p-1"></i>
                                </div>
                            </div>
                    </div>
                    <p class="font-bold">KREDİ KARTI İLE ÖDEME</p>
                    <div class="flex flex-col gap-2 w-full">
                        <div class="flex items-center gap-2 w-full">
                            <img src="/images/payment_visa.png" alt="visa"/>
                            <img src="/images/payment_sodexo.png" alt="sodexo"/>
                            <img src="/images/payment_express.png" alt="express"/>
                        </div>
                        <div clas="flex items-center gap-2 w-full">
                            <img src="/images/payment_garanti.png" alt="garanti"/>
                            <img src="/images/payment_troy.png" alt="troy"/>
                            <img src="/images/payment_master-card.png" alt="master-card"/>
                        </div>
                       
                    </div>
                
                </div>
        </div>
    </div>
    <div class="bottom-footer">
        <div class="bottom-footer-container">
            Developed by Hanife Yolat
        </div>
    </div>
</template>
<style scoped>
.footer{
    @apply bg-koyukahve text-white w-full
}
.footer-container{
    @apply w-4/5 h-auto py-10 mx-auto text-xs 2xl:flex xl:flex lg:flex grid grid-cols-2 items-start justify-between gap-10
}
.footer-col{
    @apply flex flex-col gap-2 
}
.footer-col .mail-input{
    @apply w-full h-8 rounded-full border-2 border-gray-200 px-4 my-2
}
.footer-col .mail-input::placeholder{
    @apply text-xs
}
.gonder-btn{
    @apply  text-white underline rounded-full p-1 hover:text-yellow-600 cursor-pointer transition ease-in duration-200
}
.bottom-footer{
    @apply w-full h-auto py-2 mx-auto text-xs flex items-start justify-between bg-acikkahve
}
.bottom-footer-container{
    @apply w-4/5 text-center text-white mx-auto text-xs
}
</style>