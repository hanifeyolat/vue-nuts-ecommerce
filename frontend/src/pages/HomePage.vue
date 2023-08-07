<template>
    <div class="home-page">

         <MainSlider/>
    
         <div class="link-photos">
            <router-link to="/products/:categoryName">    
                <img class="link-img" src="/images/link-photos/baharat-cesitleri-f91e.png" alt="baharat-cesitleri-f91e.png"/>
            </router-link>
            <router-link to="/products/:categoryName">    
                <img class="link-img" src="/images/link-photos/bitkisel-yaglar-e6b6.png" alt="bitkisel-yaglar-e6b6"/>
            </router-link>
            <router-link to="/products/:categoryName">    
                <img class="link-img" src="/images/link-photos/gurme-caylar-3432.png" alt="gurme-caylar-3432"/>
            </router-link>
            <router-link to="/products/:categoryName" >    
                <img class="link-img" src="/images/link-photos/kuru-meyveler-d768.png" alt="kuru-meyveler-d768"/>
            </router-link>
            <router-link to="/products/:categoryName">    
                <img class="link-img" src="/images/link-photos/kuruyemis-cesitleri-d072.png" alt="kuruyemis-cesitleri-d072"/>
            </router-link>
            <router-link to="/products/:categoryName" >    
                <img class="link-img" src="/images/link-photos/saglikli-atistirmaliklar-2a42.png" alt="saglikli-atistirmaliklar-2a42"/>
            </router-link>
        </div> 

         <hr class="w-4/5 mx-auto"/> 

         <div class="most-liked">
            <h1 class="header">EN SEVİLENLER</h1>
            <div class="liked-products-container">
            
                <ProductBase/>
                <ProductBase/>
                <ProductBase/>
                <ProductBase/>
                <ProductBase/>
       
            </div>
        </div>

        <div class="blog">
            <h1 class="header">HAZEL NUTS BLOG</h1>
            <div class="blog-container">
                <BlogCardBase />
                <BlogCardBase />
                <BlogCardBase />
                <BlogCardBase />
                <BlogCardBase /> 
            </div>

            <button class="all-blog-btn"> TÜMÜNÜ GÖRÜNTÜLE </button>
        </div>
         

    </div>
</template>

<script>
import MainSlider from '../components/HomePage/MainSlider.vue';
import ProductBase from '../components/collective/ProductBase.vue';
import BlogCardBase from '../components/HomePage/BlogCardBase.vue';


export default {
    name:"HomePage",
    components: {
        MainSlider,
        ProductBase,
        BlogCardBase,
    }
}

</script>
<style scoped>

.home-page{
    @apply w-screen mx-auto overflow-y-hidden;
    overflow-y: auto;
}
.link-photos{
    @apply  w-4/5 mx-auto my-12 grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4
}
.most-liked{
    @apply w-4/5 mx-auto flex flex-col
}

.header{
    @apply w-96 mx-auto bg-yellow-100 text-yellow-800 font-semibold text-center px-6 py-2 rounded-md my-10
}

.link-img{
    @apply w-auto overflow-hidden
}
.liked-products-container{
    @apply 2xl:grid 2xl:grid-cols-5 xl:grid  xl:grid-cols-5  lg:grid lg:grid-cols-4 md:grid md:grid-cols-3 grid sm:grid-cols-3 grid-cols-2 gap-4
}   
.blog{
    @apply w-4/5 mx-auto flex flex-col
}
 .blog-container{
    @apply 2xl:flex xl:flex lg:grid lg:grid-cols-4 md:grid md:grid-cols-3 grid sm:grid-cols-3 grid-cols-2 gap-4
}   
.all-blog-btn{
    @apply font-semibold text-xs text-white text-center px-6 py-2 mx-auto cursor-pointer bg-acikkahve hover:bg-koyukahve transition ease-in duration-300 my-10
}

</style>