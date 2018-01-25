<template>
  <div class="scroller">
    <div class="header">
      <span>{{title}}</span>
      <a href="#">更多</a>
    </div>
    <div class="content">
      <ul class="hasCover" >
        <li v-for="item in items">
          <router-link :to="{name: 'DetailView', params: { id: item.id }}" >
            <img :src="item.main_img" alt=""/>
            <label class="pro-price">锟{item.price}}</label>
            <span class="title">{{item.test_name}}</span>
            <p>
              閫傜敤浜虹兢锛�<span>{{item.applicable_object}}</span>
            </p>
            <p>
              <span>{{item.keyword}}</span>
            </p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'scroller',
  props: ['title', 'items'],
  data () {
    return {
     
    }
  }
}
</script>

<type>
  
</type>

