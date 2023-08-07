<template>
   <div class="admin-home">
        <div class="page-banner">
            <div class="w-4/5 mx-auto flex justify-between items-center ">
                <span class="">Admin Anasayfa</span>
            </div>
        </div>
        <div class="admin-home-area">
            <div class="brown-container">
                <div class="flex items-center justify-center gap-5">
                    <div class="border-2 border-white rounded-full w-24 h-24 flex items-center justify-center">
                        <svg class="w-16 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="white" d="M20.998 3V5C20.998 14.6274 15.6255 19 8.99805 19L7.0964 18.9999C7.3079 15.9876 8.24541 14.1648 10.6939 11.9989C11.8979 10.9338 11.7965 10.3189 11.2029 10.6721C7.1193 13.1016 5.09114 16.3862 5.00119 21.6302L4.99805 22H2.99805C2.99805 20.6373 3.11376 19.3997 3.34381 18.2682C3.1133 16.9741 2.99805 15.2176 2.99805 13C2.99805 7.47715 7.4752 3 12.998 3C14.998 3 16.998 4 20.998 3Z"></path>
                        </svg>
                    </div>
                    <div class="flex flex-col items-center text-center gap-3 h-20">
                        <p class="text-md font-normal">Ürünler</p>
                        <p class="font-semibold -mt-4" style="font-size: 45px !important;">52</p>
                    </div>
                </div>
            </div>
            <div class="brown-container">
               <div class="flex items-center justify-center gap-5">
                    <div class="border-2 border-white rounded-full w-24 h-24 flex items-center justify-center">
                        <svg class="w-14 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="white" d="M12 10C14.2091 10 16 8.20914 16 6 16 3.79086 14.2091 2 12 2 9.79086 2 8 3.79086 8 6 8 8.20914 9.79086 10 12 10ZM5.5 13C6.88071 13 8 11.8807 8 10.5 8 9.11929 6.88071 8 5.5 8 4.11929 8 3 9.11929 3 10.5 3 11.8807 4.11929 13 5.5 13ZM21 10.5C21 11.8807 19.8807 13 18.5 13 17.1193 13 16 11.8807 16 10.5 16 9.11929 17.1193 8 18.5 8 19.8807 8 21 9.11929 21 10.5ZM12 11C14.7614 11 17 13.2386 17 16V22H7V16C7 13.2386 9.23858 11 12 11ZM5 15.9999C5 15.307 5.10067 14.6376 5.28818 14.0056L5.11864 14.0204C3.36503 14.2104 2 15.6958 2 17.4999V21.9999H5V15.9999ZM22 21.9999V17.4999C22 15.6378 20.5459 14.1153 18.7118 14.0056 18.8993 14.6376 19 15.307 19 15.9999V21.9999H22Z"></path>
                        </svg>
                    </div>
                    <div class="flex flex-col items-center text-center gap-3 h-20">
                        <p class="text-md font-normal">Müşteriler</p>
                        <p class="font-semibold -mt-4" style="font-size: 52px !important;">52</p>
                    </div>
               </div>
            </div>
            <div class="brown-container">
                <div class="flex items-center justify-center gap-5">
                    <div class="border-2 border-white rounded-full w-24 h-24 flex items-center justify-center">
                        <svg class="w-14 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="white" d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path>
                        </svg>
                    </div>
                    <div class="flex flex-col items-center text-center gap-3 h-20 my-auto">
                        <p class="text-md font-normal">Siparişler</p>
                        <p class="font-semibold -mt-4" style="font-size: 52px !important;">52</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.admin-home {
  @apply w-full mb-5;
}

.admin-home .admin-home-area {
  @apply w-4/5 min-h-screen h-auto mx-auto flex 2xl:flex-row xl:flex-row lg:flex-row flex-col mt-10 gap-5 ;
}

.brown-container{
    @apply w-full h-44 py-4 px-20 md:px-10 sm:px-10 xs:px-20 rounded-lg bg-acikkahve text-white flex items-center justify-center
}
</style>