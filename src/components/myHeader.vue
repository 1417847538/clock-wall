<!--
 * @Date: 2021-11-13 13:53:44
 * @LastEditors: xiaolan
 * @LastEditTime: 2021-11-13 19:16:46
 * @FilePath: \clock-wall\src\components\myHeader.vue
-->
<template>
  <el-header>
    {{currentCountry.zh}}
    <el-dropdown>
      <el-button type="primary">
        {{currentCountry.zh}}<i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="(continent,index) of continentArr"
                          :key="index"
                          @click.native="goToContinent(continent.en)">
          {{continent.zh}}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script>
import { continent } from '../data/data'
export default {
  name: 'myHeader',
  mounted() {
    this.getContinent()
  },
  data() {
    return {
      currentCountry: {},
      continentArr: [],
    }
  },
  methods: {
    //初始化获取当前页面的洲以及下拉框中的洲数组
    getContinent() {
      this.continentArr = this.continentArr.concat(continent)
      const curC = this.$route.path.slice(1)
      for (let i = 0; i < this.continentArr.length; i++) {
        if (curC === this.continentArr[i]['en']) {
          this.currentCountry = this.continentArr[i]
          this.continentArr.splice(i, 1)
          break
        }
      }
    },
    goToContinent(continent) {
      this.$router.push({ path: `/${continent}` })
    },
  },
}
</script>

<style lang="scss" scoped>
.el-dropdown {
  // background-color: rgb(171, 44, 120);
  position: absolute;
  right: 250px;
  z-index: 3;
}
</style>