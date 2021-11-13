<!--
 * @Date: 2021-11-12 23:23:37
 * @LastEditors: xiaolan
 * @LastEditTime: 2021-11-13 18:47:44
 * @FilePath: \clock-wall\src\views\SouthAmerica.vue
-->
<template>
  <div class="continent">
    <el-container>
      <myHeader />
      <myMain />
    </el-container>
  </div>
</template>

<script>
import myHeader from '@/components/myHeader'
import myMain from '@/components/myMain'
export default {
  name: 'SouthAmerica',
  components: { myMain, myHeader },
}
</script>

<style lang='scss' scoped>

</style>