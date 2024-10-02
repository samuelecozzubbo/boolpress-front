<script>
export default{
    name:'Paginator',
    props:{
        data: Object
    },
    methods:{
        callApi(link){
            //console.log(link);
            this.$emit('callApi', link);
            
        }
    }
}
</script>

<template>
    <!-- Ho chiamato la props data quindi data.links -->
<div class="paginator">
            <button
            
                v-for="(link,index) in data.links"
                :key="index"
                v-html="link.label"
                :disabled="link.active || !link.url"
                @click="callApi(link.url)">
            </button>
            <!-- v-html serve a interpetrare codice html presente dentro link.label
            che non metterò dunque dentro le graffe, inoltre disabilito il bottone quando sono dentro
            la scheda corrispondente -->    
        </div>
</template>

<style lang="scss">
.paginator{
    display: flex;
    justify-content: center;

    button{
        margin: 0 10px;
    }
}
</style>