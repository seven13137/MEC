<template>
    <div class="home-view">
      <div class="index_banner">
        <Swipe class="my-swipe"  >
          <Swipe-item class="slide slide1">
            <router-link to="/search">
                <img src="../assets/banner1.png" alt=""/>
            </router-link>
          </Swipe-item>
          <Swipe-item class="slide slide2">
            <router-link to="/search">
                <img src="../assets/banner2.png" alt=""/>
            </router-link>
          </Swipe-item>
        </Swipe>
    </div>
      <!--search-box-->
      <div class="search_input">
        <input type="text" @click="showTalion"/>
      </div>
      <router-view></router-view>
      <talion-view v-show="talion" @closeTalion="close"></talion-view>
      <!--product scroller-->
      <scroller title="热卖推荐" :items="hotProducts"></scroller>
      <scroller title="优惠套餐" :items="saleProducts"></scroller>
      <scroller title="特色项目" :items="specialProducts"></scroller>
      <!--navBottom-->
      <nav-bottom></nav-bottom>
    </div>
</template>

<script>
 import { Swipe, SwipeItem } from 'vue-swipe';
import { mapState, mapActions } from 'vuex'

import TalionView from '../views/TalionView'
import NavBottom from '../components/NavBottom'
import Scroller from '../components/Scroller'

export default {
  name: 'home-view',
  components: {TalionView,NavBottom ,Scroller,Swipe, SwipeItem },
  data () {
    return {}
  },
  computed: {
    // Getting Vuex State from store/modules/product
    ...mapState({
      hotProducts: state => state.product.hotProducts,
      saleProducts: state => state.product.saleProducts,
      specialProducts:state => state.product.specialProducts
    })
  },
  methods: {
  //dispatching getProduct
  getProduct:function(){
    this.$store.dispatch('getProduct')
  },
  created(){
    this.getProduct()
  },
    showTalion: function () {
      this.talion = 'open'
    },
    close:function(){
      this.talion = ''
    }
  }
}
</script>

<style>
 @baseGrey: #f2f2f2;
@com_gray1: #666;
@com_gray2: #999;
@com_img:.4rem;
.icon-img{
 width:@com_img;
}
.com_gray1{
  color:@com_gray1;
}
.com_gray2{
  color:@com_gray2;
}
.com_blue{
  color:@baseGrey;
}
.home-view{
 width: 10rem;
  overflow:hidden; 
}
   .index_banner{
    height:5.5rem;
    background:#fff;
    margin-bottom:0.2rem;
    .common_slider{
      width:2.5rem;
      height:2rem;
      float: left;
      img{
        margin: 0 auto;
        display:block;
        width:1.2rem;
        height:1.2rem;
        margin-top:.2rem;
      }
      p{
        text-align:center;
        font-size: .3rem;
      }
    }
  }
  
</style>
