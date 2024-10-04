<script>
import { store } from '../store/store';
import axios from 'axios';
import {getCategory, getTags, formatData} from '../data/utils';


    export default{
        name:'Detail',
        data(){
            return{
                post:{
                    title:'',
                    txt:'',
                    path_image:'',
                    image_original_name:'',
                    created_at:'',
                    reading_time:'',
                    category:'',
                    tags: [],
                    user:'',
                },
            }
        },
        methods:{
            getApi(slug){
                //console.log(slug);
                axios.get(store.apiUrl + '/post-by-slug/' + slug)
                .then(res => {
                    //console.log(res.data);
                    if(res.data.success){
                        this.post = res.data.post;
                        console.log(this.post);
                        
                    }else{
                        this.$router.push({name: '404'})
                    }
                    
                })
                
            }
        },
        computed:{
            infoPost(){
                //NON SERVE METTERE I METODI NEL DATA PERCHE
                //NON LI USO DENTRO AL TEMPLATE
                const cat = getCategory(this.post);
                const tags = getTags(this.post);
                const date = formatData(this.post.created_at);
                return `By ${this.post.user.name}
                        | Tempo di lettura: ${this.post.reading_time} min
                        | Categoria: ${cat}
                        | Tags: ${tags};
                        | ${date}`;
            }
        },
        mounted(){
            //ottengo lo slug
            //qua ci sono tutte le info che arrivano
            //del componente e i parametri
            
            //console.log(this.$route.params.slug);
            const slug = this.$route.params.slug;
            this.getApi(slug);
        }
    }
</script>

<!-- Il template viene caricato immediatamente
 quindi se di default dentro data non do nulla ottengo un errore
 invece in questo modo di default ho qualcosa e poi con
 la computed viene aggiornato reativamente il dato e vedeo
 il template completo -->

<template>
<h1> Dettaglio post: {{ post.title }}</h1>
<p>{{ infoPost }}</p>
<p>{{ post.txt }}</p>
<img :src="post.path_image" :alt="post.title">


</template>

<style lang="scss" scoped>
img{
    max-width: 50%
}
</style>