<template>

        <div class="subtotal-container">
            <div class="subtotal-header">Siparişi Tamamla</div>
            <div class="subtotal-footer">
                    <div class="w-full flex items-center justify-between">
                        <p>Ara Toplam:</p>
                        <p>&#8378; 600,00</p>
                    </div>
                    <div class="w-full flex items-center justify-between">
                        <p>KDV:</p>
                        <p>&#8378; 60,00</p>
                    </div>
                    <hr/>
                    <div class="w-full flex items-center justify-between  font-semibold">
                        <p>Sipariş Tutarı:</p>
                        <p>&#8378; 660,00</p>
                    </div>
                    <button class="create-btn">Sipariş Oluştur</button>
            </div>

        </div>
</template>

<style scoped>

.subtotal-container{
    @apply 2xl:w-2/6 xl:w-2/6 lg:w-2/6 md:w-1/2 w-full h-56 border-2 border-gray-200 text-sm
}
.subtotal-header{
    @apply w-full h-12 bg-yellow-500 text-white text-center flex items-center justify-center font-semibold
}
.subtotal-footer{
    @apply w-full h-full p-4 flex flex-col gap-2
}

.create-btn{
    @apply w-4/5 h-8 bg-yellow-500 hover:bg-yellow-700 flex items-center justify-center text-center text-white transition ease-in duration-200 cursor-pointer mx-auto font-semibold mt-3
}

</style>