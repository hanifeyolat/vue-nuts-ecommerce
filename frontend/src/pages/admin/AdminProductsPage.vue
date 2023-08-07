<template>
    <div class="admin-products-page">
      <div class="page-banner">
        <div class="w-4/5 mx-auto flex items-center justify-between font-medium text-base mt-1">
          <p>Ürünler</p>
         <FilterComponent/>
        </div>
      </div>
      <div class="w-full my-12  text-xs overflow-y-auto h-[400px] inline-block">
        <table class="w-4/5 p-5 text-sm mx-auto">
          <thead class="w-full">
            <tr class="text-left text-white py-3 h-10 bg-yellow-500 flex items-center">
                <th height="40" class="h-full my-auto 2xl:w-4/12 xl:w-4/12 lg:w-4/12 w-8/12 text-left pl-4">
                  <p class="w-full flex justify-start">Ürün Adı</p>
                </th>
                <th height="40" class=" h-full my-auto 2xl:w-2/12 xl:w-2/12 lg:w-2/12 w-0 2xl:inline-block xl:inline-block lg:inline-block hidden">Ürün Kategorisi</th>
                <th height="40" class=" h-full my-auto 2xl:w-2/12 xl:w-2/12 lg:w-2/12 w-0 2xl:inline-block xl:inline-block lg:inline-block hidden">Ürün Stoğu</th>
                <th height="40" class=" h-full my-auto 2xl:w-2/12 xl:w-2/12 lg:w-2/12 w-0 2xl:inline-block xl:inline-block lg:inline-block hidden">Ürün Fiyatı (TL)</th>
                <th height="40" class=" h-full my-auto 2xl:w-2/12 xl:w-2/12 lg:w-2/12 w-4/12 pr-4">
                    <p class="w-full flex justify-end">Düzenle / Sil</p>
                </th>
            </tr>
          </thead>
          <tbody class="w-full">
            <!-- Tablo içeriği buraya gelecek -->
            <tr v-for="product in products" :key="product.id" class="w-full py-3 text-gray-600  border-b-2 border-gray-200 flex items-center">
                <td height="120" class=" h-full my-auto 2xl:w-4/12 xl:w-4/12 lg:w-4/12 w-8/12 pl-4 text-center">
                  <div class="flex items-center gap-2">
                    <div class="h-full w-16">
                      <img :src="product.imageUrl" alt="Product Image" class="object-contain" />
                    </div>
                    <p class="text-left">{{ product.name }}</p>
                  </div>
                </td>
                <td height="120" class="h-full my-auto 2xl:w-2/12 xl:w-2/12 lg:w-2/12 w-0 2xl:inline-block xl:inline-block lg:inline-block hidden text-center"><p class="h-full w-full my-auto flex items-center justify-center"> {{ product.category }}</p></td>
                <td height="120" class="h-full my-auto 2xl:w-2/12 xl:w-2/12 lg:w-2/12 w-0 2xl:inline-block xl:inline-block lg:inline-block hidden text-center">{{ product.stock }}</td>
                <td height="120" class="h-full my-auto 2xl:w-2/12 xl:w-2/12 lg:w-2/12 w-0 2xl:inline-block xl:inline-block lg:inline-block hidden text-center">{{ product.price }} TL</td>
                <td height="120" class="h-full my-auto 2xl:w-2/12 xl:w-2/12 lg:w-2/12 w-4/12 pr-4">
                  
                  <div class="flex items-center justify-end w-full">
                      <i class="ri-edit-circle-fill text-acikyesil hover:text-koyuyesil transtion ease-in duration-200 mr-2" style="font-size: 30px;"></i>
                      <i class="ri-delete-bin-7-fill text-red-500 hover:text-red-700 transtion ease-in duration-200" style="font-size: 30px;"></i>
                  </div>
                </td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
import FilterComponent from '@/components/collective/FilterComponent.vue';

  export default {
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: "Çifte Kavrulmuş Badem İçi",
                    category: "Kuruyemiş",
                    stock: 254,
                    price: 240.0,
                    imageUrl: "https://static.ticimax.cloud/12901/Uploads/UrunResimleri/thumb/blue-flowers-earl-grey-mavi-malva-ebeg-b91b-e.jpg",
                },
                {
                    id: 2,
                    name: "Çifte Kavrulmuş Badem İçi 2",
                    category: "Kuruyemiş",
                    stock: 254,
                    price: 240.0,
                    imageUrl: "https://static.ticimax.cloud/12901/Uploads/UrunResimleri/thumb/blue-flowers-earl-grey-mavi-malva-ebeg-b91b-e.jpg",
                },
                {
                    id: 3,
                    name: "Çifte Kavrulmuş Badem İçi 3",
                    category: "Kuruyemiş",
                    stock: 254,
                    price: 240.0,
                    imageUrl: "https://static.ticimax.cloud/12901/Uploads/UrunResimleri/thumb/blue-flowers-earl-grey-mavi-malva-ebeg-b91b-e.jpg",
                },
                // Diğer ürünleri buraya ekleyin
            ],
        };
    },
    components: { FilterComponent }
};
  </script>
  
  <style scoped>
  .admin-products-page {
    @apply w-full;
  }
  
  .admin-products-page .input-container {
    @apply w-auto px-4 py-1 h-8 rounded-full border-2 border-gray-200 text-xs font-normal;
  }
  
  .admin-products-page .add-btn {
    @apply w-auto px-4 py-1 h-8 rounded-full bg-acikyesil hover:bg-koyuyesil transition ease-in duration-300 text-xs text-white flex items-center justify-center gap-2;
  }
  
  .clear-filter-btn {
    @apply w-auto px-4 py-1 h-8 rounded-full bg-yellow-600 hover:bg-yellow-700 transition ease-in duration-300 text-xs text-white;
  }
  
  </style>
  