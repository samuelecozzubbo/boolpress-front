<script>
import axios from 'axios';
import { store } from '../store/store';
    export default{
        name:'PostTag',
        data(){
            return{
                posts:[],
                tagName:'',
            }
        },
        methods:{
            getApi(slug){
                axios.get(store.apiUrl + '/post-by-tag/' + slug)
                .then(res => {
                    if(res.data.success){
                        this.posts = res.data.tag.posts;
                        this.tagName = res.data.tag.name;
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
<h1>Elenco post per categoria {{ tagName }}</h1>
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