<template>
    <div class="application-container">
        <!-- vue-router它有三个全局组件：router-view、router-link、keep-alive(几乎不会怎么使用，面试的时候人家会问，因为他想考察大家的知识面) -->
        <!-- <router-view></router-view> -->
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <FooterGuide v-show="$route.meta.showFooter" />
        
    </div>
</template>
<script>
import FooterGuide from "../components/FooterGuide/FooterGuide.vue"
import {reqFoodCategorys} from "../api"

export default{
    components:{
        FooterGuide
    },
    async mounted() {
        const result = await reqFoodCategorys()
        console.log(result);
    },
}
</script>
