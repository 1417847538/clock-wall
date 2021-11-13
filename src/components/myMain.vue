<!--
 * @Date: 2021-11-13 18:22:10
 * @LastEditors: xiaolan
 * @LastEditTime: 2021-11-14 00:00:49
 * @FilePath: \clock-wall\src\components\myMain.vue
-->
<template>
  <el-main>
    <el-carousel trigger="click"
                 height="100%"
                 :autoplay="false">
      <el-carousel-item v-for="(item,i) in countryArr.length"
                        :key="i">
        <div class="page">
          <clock v-for="(item,index) of countryArr[i]"
                 :key="index"
                 :item='item' />
        </div>
      </el-carousel-item>
    </el-carousel>
  </el-main>
</template>

<script>
import clock from './clock'
export default {
  name: 'myMain',
  props: ['country'],
  components: { clock },
  mounted() {
    this.countryDivision()
  },
  data() {
    return {
      countryArr: [],
    }
  },
  methods: {
    // 把数据分成十个一组方便页面显示
    countryDivision() {
      let pageLength =
        this.country.length % 10 === 0
          ? this.country.length / 10
          : Math.floor(this.country.length / 10) + 1
      let index = 0
      for (let i = 0; i < pageLength; i++) {
        this.countryArr.push([])
        for (let j = 0; j < 10; j++) {
          if (!this.country[index]) break
          this.countryArr[i].push(this.country[index++])
        }
      }
    },
  },
}
</script>

<style lang='scss' scoped>
.page {
  margin-top: 0.260417rem;
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-around;
  margin-left: .520833rem;
}
</style>