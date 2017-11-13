<template>
    <div class="tabs">
        <ul>
            <router-link to="/home" tag="li">
                <div><i class="icon-home"></i></div>
                <div>首页</div>
            </router-link>
            <router-link to="/category" tag="li">
                <div><i class="icon-list"></i></div>
                <div>分类</div>
            </router-link>
            <router-link to="/cart" tag="li">
                <div><i class="icon-cart"></i></div>
                <div>购物车</div>
            </router-link>
            <router-link to="/me" tag="li">
                <div><i class="icon-person"></i></div>
                <div>我的</div>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
    *{
        margin: 0;
        padding: 0;
    }
    ul{
        list-style: none;
        display: flex;
    }
    .tabs{
        position: fixed;
        bottom: 0;
        width: 100%;
        padding: 8px 10px;
        border: 1px solid #ddd;
        background: white;
    }
    i{
        font-size: 20px;
    }
    li{
        flex: 1;
        text-align: center;
        font-size: 12px;
    }
</style>