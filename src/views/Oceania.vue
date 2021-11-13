<!--
 * @Date: 2021-11-12 23:24:44
 * @LastEditors: xiaolan
 * @LastEditTime: 2021-11-13 18:48:02
 * @FilePath: \clock-wall\src\views\Oceania.vue
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
  name: 'Oceania',
  components: { myMain, myHeader },
}
</script>

<style lang='scss' scoped>

</style>