<script>
//con l'export default esporto senza graffe
//se l'esxport è non default metto le graffe(destrutturazione oggetto)
import axios from 'axios';
import { store } from '../store/store';
import Loader from '../components/partials/Loader.vue';

    export default{
        name:'Blog',
        components:{
            Loader
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
            }
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
                <p class="title">{{ post.title }}</p>
                <p class="caption">by: {{ post.user.name }} | Categoria: {{ post.category.name }}</p>
            </li>
        </ul>

        <div class="paginator">
            <button
                v-for="(link,index) in paginatorData.links"
                :key="index"
                v-html="link.label"
                :disabled="link.active || !link.url"
                @click="getApi(link.url)">
            </button>
            <!-- v-html serve a interpetrare codice html presente dentro link.label
            che non metterò dunque dentro le graffe, inoltre disabilito il bottone quando sono dentro
            la scheda corrispondente -->    
        </div>
    </div>
    <div class="box-container">
        <div class="box">
            <button v-for="category in categories" :key="category.id">
                {{ category.name }}
            </button>
        </div>
        <div class="box">
            <button v-for="tag in tags" :key="tag.id">
                {{ tag.name }}
            </button>
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
.paginator{
    display: flex;
    justify-content: center;

    button{
        margin: 0 10px;
    }
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
    }


}
</style>