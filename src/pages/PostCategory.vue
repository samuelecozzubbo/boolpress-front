<script>
import axios from 'axios';
import { store } from '../store/store';
    export default{
        name:'PostCategory',
        data(){
            return{
                posts:[],
                categoryName:'',
            }
        },
        methods:{
            getApi(slug){
                axios.get(store.apiUrl + '/post-by-category/' + slug)
                .then(res => {
                    if(res.data.success){
                        this.posts = res.data.category.posts;
                        this.categoryName = res.data.category.name;
                        console.log(this.post);
                        
                    }else{
                        this.$router.push({name: '404'})
                    }
                    
                })
            

            }
        },
        mounted(){
            const slug = this.$route.params.slug;
            this.getApi(slug);
        }
    }
</script>

<template>
<h1>Elenco post per categoria {{ categoryName }}</h1>
<ul>
    <li v-for="post in posts">
        <router-link :to="{name: 'postDetail', params:{slug: post.slug}}">{{ post.title }}</router-link>
    </li>
</ul>

</template>

<style lang="scss" scoped>
a{
    text-decoration: none;
    color: white;
    &:hover{
        color: rgb(0, 191, 255);
    }
}
</style>