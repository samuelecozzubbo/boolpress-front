<script>
//con l'export default esporto senza graffe
//se l'esxport è non default metto le graffe(destrutturazione oggetto)
import axios from 'axios';
import { store } from '../store/store';
import Loader from '../components/partials/Loader.vue';
import Paginator from '../components/partials/Paginator.vue';
//importo utils e metto in data
import {getCategory, getTags, formatData} from '../data/utils';

    export default{
        name:'Blog',
        components:{
            Loader,
            Paginator
        },
        data(){
            return{
                posts:[],
                isLoading:true,
                paginatorData:{
                    current_page:1,
                    links:[],
                },
                categories:[],
                tags:[],
                getCategory,
                getTags,
                formatData,
            }
        },
        methods:{
            //Passo dinamicamente apiUrl
            getApi(apiUrl,type='posts'){
                this.isLoading = true;

                axios.get(apiUrl)
                .then(result=>{
                    if(type =='posts'){
                        this.posts = result.data.data;
                        //paginator
                        this.paginatorData.current_page = result.data.current_page;
                        this.paginatorData.links = result.data.links;
                        this.isLoading = false;
                    }else{
                        //Su this cerco una variabile che si chiama come type
                        this[type]= result.data;
                    }
                    //post
                    // this.posts = result.data.data;
                    // console.log(this.posts);
                    // switch(type) {
                    //     case 'posts':
                    //         this.posts = result.data.data;
                    //         //paginator
                    //         this.paginatorData.current_page = result.data.current_page;
                    //         this.paginatorData.links = result.data.links;
                    //         this.isLoading = false;
                    //         break;
                        
                    //     case 'categories':
                    //         this.categories = result.data;
                    //         break;
                    //     case 'types':
                    //         this.tags = result.data;
                    //         break;
                    // }
                    
                    
                })
                .catch(error => {
                console.error('Errore durante la chiamata API:', error);
                });
            },
            // getCategory(post){
            //     if(post.category){
            //         return post.category.name;
            //     }
            //     return 'Nessuna categoria';
            // },
            // getTags(post){
            //     if(post.tags.length){
            //         //SOLUZIONE CORTA ED EFFICACE MA COMPLESSA
            //         return post.tags.map(tag=> tag.name).join(', ');
            //         //SOLUZIONE PIU' FACILE MA LUNGA
            //         // let tagString = '';
            //         // post.tags.forEach((tag,index) => {
            //         //     tagString += tag.name;
            //         //     if (index < post.tags.length - 1) {
            //         //         tagString += ', ';
            //         //     }
            //         // });
            //         // return tagString;
            //     }else{
            //         return 'Nessun Tag';
            //     }
            // },
            // formatData(date){
            //     return new Date(date).toLocaleDateString();
            // }
        },
        mounted(){
            this.getApi(store.apiUrl,'posts' /*  + 'posts' se cambio la route da / a /posts */);
            this.getApi(store.apiUrl + '/categories', 'categories');
            this.getApi(store.apiUrl + '/tags', 'tags');
        }
    }
</script>

<template>
<h1>I miei post</h1>
<div class="content">
    <div v-if="isLoading" class="loading">
        <Loader/>
    </div>
    <div v-else>
        <ul>
            <li v-for="post in posts" :key="post.id">
                <p class="title">
                    <router-link :to="{name: 'postDetail', params:{slug: post.slug}}">
                        {{ post.title }}
                    </router-link>
                </p>
                <p class="caption">
                    by: {{ post.user.name }}
                     | Categoria: {{ getCategory(post) }}
                     |Tag: {{ getTags(post) }}
                     |{{ formatData(post.created_at) }}
                </p>
            </li>
        </ul>
        <!-- PROPS -->
        <Paginator @callApi="getApi" :data="paginatorData"/>
    </div>

    <div class="box-container">
        <div class="box">
            <router-link class="badge" v-for="category in categories" :key="category.id" :to="{name: 'postCategory', params:{slug: category.slug}}">
                {{ category.name }}
            </router-link>
        </div>
        <div class="box">
            <router-link class="badge" v-for="tag in tags" :key="tag.id" :to="{name: 'postTag', params:{slug: tag.slug}}">
                {{ tag.name }}
            </router-link>
        </div>
    </div>
    
</div>
</template>

<style lang="scss" scoped>
.loading{
    display: flex;
    justify-content: center;
    padding: 30px 0;
}

.content{
    display: flex;
    .title, .caption{
        line-height: 5px;
    }
    .caption{
        font-size: 0.8rem;
    }
    .box{
        border-radius: 5px;
        border: 1px solid white;
        padding: 15px;
        margin: 15px;
        max-width: 200px;
        button{
            margin: 8px;
        }
        .badge{
            display: inline-block;
            margin: 5px 7px;
            padding: 3px 5px;
            border-radius: 5px;
            border: solid 1px white;
            background-color: lightgray;
            color: black;
            text-decoration: none;
            font-size: 0.8em;
            &:hover{
                background-color: yellow;
            }
        }
    }
    a{
            color: white;
            &:hover{
                color:yellow;
            }
        }


}
</style>