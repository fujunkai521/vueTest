<template>
    <div>
        <div class="lunbo">
        <swiper :options="swiperOption" ref="mySwiper" class="myslide">
            <swiper-slide>
                <img src="../assets/slider/1.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../assets/slider/2.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../assets/slider/3.jpg" alt="">
            </swiper-slide>
            <!--<swiper-slide v-for="(slide,index) in mysliders" :key="index">
                <img :src="slide" alt="">
            </swiper-slide>-->
            <!--控制点-->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        </div>

        <div v-for="book in books" class="content"><img :src="book.image" alt="" class="im">
            <div class="text">{{book.title}}</div></div>
    </div>
</template>

<script>
    import {swiper,swiperSlide} from "vue-awesome-swiper";
    import axios from "axios";
    export default {
        data(){
            return{
                books:[],
                swiperOption:{
                    autoplay:3000,
                    pagination:'.swiper-pagination',
                    paginationClickable:true
                },
               /* mysliders:[
                    '../assets/slider/1.jpg',
                    '../assets/slider/2.jpg',
                    '../assets/slider/3.jpg'
                ]*/
            }
        },
        computed:{
            swiper(){
                return this.$refs.mySwiper.swiper;
            }
        },
        components:{
            swiper,
            swiperSlide
        },
        created(){
            //获取home需要的数据            //https://api.douban.com/v2/book/search?q=javascript
            let that=this;
            axios.get(
                "http://localhost:8081?myUrl=https://api.douban.com/v2/book/search?q=javascript"
            ).then((res)=>{
                console.log(res);
                that.books=res.data.books;
            }).catch((err)=>{
                console.log(err);
            });
        }
    }
</script>

<style>
    .myslide img{
        width: 100%;
    }
    .myslide .swiper-pagination-bullet{
        width: 12px;
        height: 12px;
    }
    .myslide .swiper-pagination-bullet-active{
        background: #a8ffc9;
    }
    .content{
        width: 100%;
        height: 140px;
        background: wheat;
        border: 1px solid #eee;
    }
    .content .im{
        width: 100px;
        height:140px;
        float: left;
    }
    .content .text{
        width: 275px;
        height: 140px;
        float: left;
        line-height: 140px;
        word-wrap: break-word;
    }
</style>