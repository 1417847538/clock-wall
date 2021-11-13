<!--
 * @Date: 2021-11-12 23:22:36
 * @LastEditors: xiaolan
 * @LastEditTime: 2021-11-14 00:12:33
 * @FilePath: \clock-wall\src\views\Asia.vue
-->
<template>
  <div class="continent">
    <el-container>
      <myHeader />
      <myMain :country='asiaCountry' />
    </el-container>
  </div>
</template>

<script>
import myHeader from '@/components/myHeader'
import myMain from '@/components/myMain'
import { asiaCountry } from '../data/data'
export default {
  name: 'Asia',
  components: { myMain, myHeader },
  mounted() {
    
  },
  data() {
    return {
      asiaCountry,
    }
  },
}
</script>

<style lang='scss' scoped>
</style>