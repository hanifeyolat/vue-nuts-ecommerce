<template>
    <div class="cart-page">
        <div class="page-banner">
            <div class="w-4/5 mx-auto flex items-center justify-between font-medium text-base mt-1">
                <p>Sepetim</p>
                <RouterLink to="/" class="return-link" > <i class="ri-arrow-left-fill"></i> <p>Alışverişe Devam</p></RouterLink>
            </div>
        </div>
        <div class="cart-wrapper">
            <div class="inner-cart-wrapper">
                <div class="cart-items-container">
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                </div>
                <SubtotalComponent/>
            </div>       
        </div>
    </div>
</template>
<script>
import CartItem from "../components/CartPage/CartItem.vue"
import SubtotalComponent from "../components/CartPage/SubtotalComponent.vue"
export default {
    name: "ProductDetailsPage",
    components:{
        CartItem,
        SubtotalComponent
    }
}
</script>

<style scoped>

.cart-page{
    @apply w-full mb-5
}
.inner-cart-wrapper{
    @apply w-4/5 mx-auto mt-5 flex 2xl:flex-row xl:flex-row lg:flex-row flex-col gap-5 py-5
}
.cart-items-container{
    @apply w-4/6 md:w-full sm:w-full xs:w-full h-96 overflow-y-scroll border-2 border-gray-200 p-4 flex flex-col gap-2 text-xs 
}

</style>