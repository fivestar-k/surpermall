<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  // 引用Swiper,SwiperItem 这两个组件
  import {Swiper,SwiperItem} from 'components/common/swiper';

  export default {
    name: "HomeSwiper",
    //拿到home组件里的数据
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>

</style>
