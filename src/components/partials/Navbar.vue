<script>
    export default{
        name:'Navbar'
    }
</script>

<template>
<div>
    <!-- Routerlink genera un tag a -->
    <ul>
        <li>
            <router-link :to="{name:'home'}">Home</router-link>
        </li>
        <li>
            <router-link :to="{name:'about'}">About</router-link>
        </li>
        <li>
            <router-link :to="{name:'blog'}">I miei posts</router-link>
        </li>
        <li>
            <router-link :to="{name:'contacts'}">Contatti</router-link>
        </li>
    </ul>
</div>
</template>

<style lang="scss" scoped>
ul{
    list-style-type: none;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    
    li{

        a{
            display: inline-block;
            margin: 0 10px;
            color: white;
            text-decoration: none;
            text-transform: uppercase;
            padding: 5px 10px;
            border: 1px solid white;
            &:hover,&.active{
                color: yellow;
            }
        }
    };
}
</style>